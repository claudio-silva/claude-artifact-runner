import OpenAI from 'openai';

// OpenRouter API 配置
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '';
const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin;
const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'Claude Artifact Runner';

// 创建 OpenAI 客户端实例
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true, // 允许在浏览器环境中使用
  defaultHeaders: {
    'HTTP-Referer': SITE_URL,
    'X-Title': SITE_NAME,
  },
});

// 实现 window.claude.complete 方法
export async function complete(prompt: string): Promise<string> {
  try {
    if (!OPENROUTER_API_KEY) {
      throw new Error('OpenRouter API key is not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.');
    }

    const completion = await openai.chat.completions.create({
      model: 'anthropic/claude-sonnet-4.5',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 20000,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from AI model');
    }

    return response;
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate content');
  }
}

// 实现流式响应方法
export async function* completeStream(prompt: string): AsyncGenerator<string, void, unknown> {
  try {
    if (!OPENROUTER_API_KEY) {
      throw new Error('OpenRouter API key is not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.');
    }

    const stream = await openai.chat.completions.create({
      model: 'anthropic/claude-sonnet-4.5',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 20000,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        yield content;
      }
    }
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate content');
  }
}

// 带网络检索的完成方法（使用 Responses API）
export async function completeWithWebSearch(prompt: string, maxResults = 5): Promise<{ content: string; citations: Array<{ url: string; text: string; startIndex: number; endIndex: number }> }> {
  try {
    if (!OPENROUTER_API_KEY) {
      throw new Error('OpenRouter API key is not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.');
    }

    const response = await fetch('https://openrouter.ai/api/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': SITE_URL,
        'X-Title': SITE_NAME,
      },
      body: JSON.stringify({
        model: 'anthropic/claude-sonnet-4.5',
        input: [
          {
            type: 'message',
            role: 'user',
            content: [
              {
                type: 'input_text',
                text: prompt,
              },
            ],
          },
        ],
        plugins: [{ id: 'web', max_results: maxResults }],
        max_output_tokens: 20000,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // 提取内容和引用
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const messageOutput = result.output?.find((o: any) => o.type === 'message');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textContent = messageOutput?.content?.find((c: any) => c.type === 'output_text');
    const content = textContent?.text || '';
    const annotations = textContent?.annotations || [];

    // 提取 URL 引用
    const citations = annotations
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((annotation: any) => annotation.type === 'url_citation')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((annotation: any) => ({
        url: annotation.url,
        text: content.slice(annotation.start_index, annotation.end_index),
        startIndex: annotation.start_index,
        endIndex: annotation.end_index,
      }));

    return { content, citations };
  } catch (error) {
    console.error('Error calling OpenRouter Responses API with web search:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate content with web search');
  }
}

// 带网络检索的流式响应方法
export async function* completeStreamWithWebSearch(prompt: string, maxResults = 5): AsyncGenerator<{ content: string; citations?: Array<{ url: string; text: string; startIndex: number; endIndex: number }> }, void, unknown> {
  try {
    if (!OPENROUTER_API_KEY) {
      throw new Error('OpenRouter API key is not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.');
    }

    const response = await fetch('https://openrouter.ai/api/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': SITE_URL,
        'X-Title': SITE_NAME,
      },
      body: JSON.stringify({
        model: 'anthropic/claude-sonnet-4.5',
        input: [
          {
            type: 'message',
            role: 'user',
            content: [
              {
                type: 'input_text',
                text: prompt,
              },
            ],
          },
        ],
        plugins: [{ id: 'web', max_results: maxResults }],
        stream: true,
        max_output_tokens: 20000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[WebSearch Stream] HTTP error:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}: ${errorText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('Response body is not readable');
    }

    const decoder = new TextDecoder();
    let buffer = '';
    let fullText = '';

    console.log('[WebSearch Stream] Starting to read stream...');

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        console.log('[WebSearch Stream] Stream ended');
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6).trim();
          if (data === '[DONE]') {
            console.log('[WebSearch Stream] Received [DONE]');
            return;
          }

          if (!data) continue;

          try {
            const parsed = JSON.parse(data);
            console.log('[WebSearch Stream] Event type:', parsed.type);

            // 处理文本增量 - 实时输出
            if (parsed.type === 'response.output_text.delta') {
              // 直接从 delta 中获取文本
              const textChunk = parsed.delta || '';
              console.log('[WebSearch Stream] Delta value:', typeof textChunk, textChunk);
              if (textChunk) {
                fullText += textChunk;
                console.log('[WebSearch Stream] Text chunk received, length:', textChunk.length, 'Total so far:', fullText.length);
                yield { content: textChunk };
              }
            }

            // 处理文本内容添加事件
            if (parsed.type === 'response.output_item.added') {
              console.log('[WebSearch Stream] Output item added:', parsed.item?.type);
            }

            // 处理完成事件，提取引用
            if (parsed.type === 'response.completed') {
              console.log('[WebSearch Stream] Response completed');
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const messageOutput = parsed.response?.output?.find((o: any) => o.type === 'message');
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const textContent = messageOutput?.content?.find((c: any) => c.type === 'output_text');
              const completeText = textContent?.text || fullText;
              const annotations = textContent?.annotations || [];

              console.log('[WebSearch Stream] Complete text length:', completeText.length);
              console.log('[WebSearch Stream] Annotations count:', annotations.length);

              // 如果我们之前没有收到任何 delta 事件，在这里一次性输出完整文本
              if (fullText.length === 0 && completeText.length > 0) {
                console.log('[WebSearch Stream] No deltas received, yielding complete text at once');
                yield { content: completeText };
              }

              const citations = annotations
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((annotation: any) => annotation.type === 'url_citation')
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((annotation: any) => ({
                  url: annotation.url,
                  text: completeText.slice(annotation.start_index, annotation.end_index),
                  startIndex: annotation.start_index,
                  endIndex: annotation.end_index,
                }));

              console.log('[WebSearch Stream] Citations extracted:', citations.length);
              if (citations.length > 0) {
                yield { content: '', citations };
              }
            }
          } catch (e) {
            console.error('[WebSearch Stream] Parse error:', e, 'Data:', data.substring(0, 200));
          }
        }
      }
    }
  } catch (error) {
    console.error('Error calling OpenRouter Responses API with web search:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate content with web search');
  }
}

// 将方法挂载到 window 对象上
declare global {
  interface Window {
    claude: {
      complete: (prompt: string) => Promise<string>;
      completeStream: (prompt: string) => AsyncGenerator<string, void, unknown>;
      completeWithWebSearch: (prompt: string, maxResults?: number) => Promise<{ content: string; citations: Array<{ url: string; text: string; startIndex: number; endIndex: number }> }>;
      completeStreamWithWebSearch: (prompt: string, maxResults?: number) => AsyncGenerator<{ content: string; citations?: Array<{ url: string; text: string; startIndex: number; endIndex: number }> }, void, unknown>;
    };
  }
}

// 初始化 window.claude
if (typeof window !== 'undefined') {
  window.claude = {
    complete,
    completeStream,
    completeWithWebSearch,
    completeStreamWithWebSearch,
  };
}
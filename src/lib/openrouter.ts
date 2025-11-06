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
      model: 'anthropic/claude-sonnet-4',
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
      model: 'anthropic/claude-sonnet-4',
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

// 将方法挂载到 window 对象上
declare global {
  interface Window {
    claude: {
      complete: (prompt: string) => Promise<string>;
      completeStream: (prompt: string) => AsyncGenerator<string, void, unknown>;
    };
  }
}

// 初始化 window.claude
if (typeof window !== 'undefined') {
  window.claude = {
    complete,
    completeStream,
  };
}
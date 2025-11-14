import React, { useState, useEffect, useRef } from 'react';
import { FileText, BarChart3, TrendingUp, Download, Edit3, Plus, Sparkles, Database, FileSearch, Settings, AlertCircle, Loader2, Save, Trash2, Type, ChevronUp, ChevronDown, Copy, Grid3x3, X, FileDown, FileJson, ChevronLeft, ChevronRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as Recharts from 'recharts';
const { LineChart, Line, BarChart, Bar, PieChart: RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } = Recharts;
import { complete } from '@/lib/openrouter';
import ReactMarkdown from 'react-markdown';
import type { ReportTemplateConfig, TemplateSection } from '@/types/template';
import {
  loadTemplates,
  initializeDefaultTemplates,
  setActiveTemplate,
  getActiveTemplate,
} from '@/lib/templateStorage';
import { defaultTemplates } from '@/data/defaultTemplates';
import remarkGfm from 'remark-gfm';
import { Document, Packer, Paragraph, TextRun, ImageRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType } from 'docx';
import html2canvas from 'html2canvas';

// 类型定义
interface Citation {
  url: string;
  text: string;
  startIndex: number;
  endIndex: number;
}

interface Block {
  id: string;
  type: 'text' | 'chart';
  title: string;
  content?: string;
  source?: string; // 数据来源
  citations?: Citation[]; // 真实的网络引用
  chartType?: 'bar' | 'line' | 'pie' | 'area' | 'radar';
  data?: any[];
  timestamp: string;
  version?: number; // 版本号
  optimizationHistory?: Array<{version: number; content: string; timestamp: string; type: string}>; // 优化历史
  relatedChartIds?: string[]; // 关联的图表ID
  relatedTextIds?: string[]; // 关联的文本块ID（用于图表）
}

interface InsertPosition {
  blockId: string | null;
  position: 'before' | 'after';
}

const AIContentFactoryPro: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userTemplates, setUserTemplates] = useState<ReportTemplateConfig[]>([]);
  const [currentTemplate, setCurrentTemplate] = useState<ReportTemplateConfig | null>(null);
  const [showInsertModal, setShowInsertModal] = useState(false);
  const [insertPosition, setInsertPosition] = useState<InsertPosition>({ blockId: null, position: 'after' });
  const [customPrompt, setCustomPrompt] = useState('');
  const [chartPrompt, setChartPrompt] = useState('');
  const [selectedChartType, setSelectedChartType] = useState<Block['chartType']>('bar');
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [customRequirements, setCustomRequirements] = useState('');
  const [, setOptimizingBlockId] = useState<string | null>(null);
  const [, setGeneratingBlockId] = useState<string | null>(null); // 正在生成的临时块ID
  const [showVersionHistory, setShowVersionHistory] = useState<string | null>(null);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [useWebSearch, setUseWebSearch] = useState(true); // 是否使用网络检索
  const [, setCollectedCitations] = useState<Citation[]>([]); // 收集的引用（后台追踪）
  const [showOptimizeModal, setShowOptimizeModal] = useState(false); // 显示优化引导词输入框
  const [optimizeGuidance, setOptimizeGuidance] = useState(''); // 用户的优化引导词
  const [optimizingBlockData, setOptimizingBlockData] = useState<{blockId: string; type: 'wording' | 'data' | 'analysis'} | null>(null); // 待优化的块信息
  const [, setSearchProgress] = useState<{
    stage: 'searching' | 'analyzing' | 'generating' | 'completed';
    message: string;
    details: string[];
  }>({ stage: 'searching', message: '', details: [] }); // 搜索进度（后台追踪）
  const exportMenuRef = useRef<HTMLDivElement>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // 侧边栏折叠状态

  // 点击外部关闭导出菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target as Node)) {
        setShowExportMenu(false);
      }
    };

    if (showExportMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showExportMenu]);

  // 初始化模板
  useEffect(() => {
    // 初始化默认模板
    initializeDefaultTemplates(defaultTemplates);

    // 加载所有模板
    const templates = loadTemplates();
    setUserTemplates(templates);

    // 设置当前模板为激活的模板或第一个模板
    const activeTemplate = getActiveTemplate();
    if (activeTemplate) {
      setCurrentTemplate(activeTemplate);
    } else if (templates.length > 0) {
      setCurrentTemplate(templates[0]);
      setActiveTemplate(templates[0].id);
    }
  }, []);

  // 创建新的文本块
  const createTextBlock = (content: string, title = '', source = '', relatedChartIds: string[] = []): Block => ({
    id: `block-${Date.now()}-${Math.random()}`,
    type: 'text',
    title,
    content,
    source,
    timestamp: new Date().toISOString(),
    version: 1,
    optimizationHistory: [],
    relatedChartIds
  });

  // 创建新的图表块
  const createChartBlock = (chartType: Block['chartType'], data: any[], title = '', relatedTextIds: string[] = []): Block => ({
    id: `block-${Date.now()}-${Math.random()}`,
    type: 'chart',
    chartType,
    title,
    data,
    timestamp: new Date().toISOString(),
    version: 1,
    relatedTextIds
  });

  // 修复/预处理 Markdown：转换全角符号并修复 **加粗** 紧邻字符的问题
  const fixMarkdownBold = (content: string): string => {
    if (!content) return content;
    // 1) 将全角星号（U+FF0A）转换为半角星号，避免「＊＊加粗＊＊」无法识别
    let normalized = content.replace(/\uFF0A/g, '*');
    // 2) 修复 **加粗** 语法：确保星号前后有适当的空格或边界
    // 使用更精确的正则表达式，避免贪婪匹配导致的问题
    normalized = normalized.replace(/\*\*(.+?)\*\*/g, (match, content) => {
      // 确保加粗内容正确被识别
      return `**${content.trim()}**`;
    });
    return normalized;
  };

  // 将章节树展平为数组（保持层级顺序）
  const flattenSections = (sections: TemplateSection[]): TemplateSection[] => {
    const result: TemplateSection[] = [];

    const traverse = (secs: TemplateSection[]) => {
      secs.forEach((sec) => {
        result.push(sec);
        if (sec.children && sec.children.length > 0) {
          traverse(sec.children);
        }
      });
    };

    traverse(sections);
    return result;
  };

  // 从 JSON 缓冲区中提取完整的块对象
  const tryExtractBlocks = (jsonBuffer: string, alreadyExtracted: number): Array<{title: string; content: string}> => {
    const blocks: Array<{title: string; content: string}> = [];

    try {
      // 尝试找到 blocks 数组的开始位置
      const blocksArrayMatch = jsonBuffer.match(/"blocks"\s*:\s*\[/);
      if (!blocksArrayMatch) {
        return [];
      }

      const arrayStartIndex = blocksArrayMatch.index! + blocksArrayMatch[0].length;
      const startIndex = arrayStartIndex;
      let bracketDepth = 0;
      let inString = false;
      let escapeNext = false;
      let currentBlockStart = -1;
      let extractedCount = 0;

      // 逐字符扫描，查找完整的对象
      for (let i = startIndex; i < jsonBuffer.length; i++) {
        const char = jsonBuffer[i];

        if (escapeNext) {
          escapeNext = false;
          continue;
        }

        if (char === '\\') {
          escapeNext = true;
          continue;
        }

        if (char === '"' && !escapeNext) {
          inString = !inString;
          continue;
        }

        if (inString) {
          continue;
        }

        if (char === '{') {
          if (bracketDepth === 0) {
            currentBlockStart = i;
          }
          bracketDepth++;
        } else if (char === '}') {
          bracketDepth--;
          if (bracketDepth === 0 && currentBlockStart !== -1) {
            // 找到一个完整的对象
            if (extractedCount >= alreadyExtracted) {
              const blockJson = jsonBuffer.substring(currentBlockStart, i + 1);
              try {
                const block = JSON.parse(blockJson);
                if (block.title && block.content) {
                  blocks.push(block);
                }
              } catch (e) {
                // 解析失败，跳过
                console.warn('块解析失败:', e);
              }
            }
            extractedCount++;
            currentBlockStart = -1;
          }
        }
      }
    } catch (e) {
      console.warn('提取块时出错:', e);
    }

    return blocks;
  };

  // 从优化响应的 JSON 缓冲区中提取 content 字段（用于流式渲染）
  const tryExtractOptimizedContent = (jsonBuffer: string): { content: string; source?: string } | null => {
    try {
      // 清理 JSON 字符串
      let cleaned = jsonBuffer.trim();

      // 如果字符串太短，直接返回 null
      if (cleaned.length < 10) {
        return null;
      }

      // 移除可能的代码块标记
      if (cleaned.includes('```json')) {
        const match = cleaned.match(/```json\s*([\s\S]*?)```/);
        if (match) {
          cleaned = match[1].trim();
        }
      } else if (cleaned.includes('```')) {
        const match = cleaned.match(/```\s*([\s\S]*?)```/);
        if (match) {
          cleaned = match[1].trim();
        }
      }

      // 移除可能的 HTML 标签（特别是 <cite>）
      cleaned = cleaned.replace(/<cite[^>]*>/gi, '').replace(/<\/cite>/gi, '');

      // 查找第一个 { 和最后一个 }
      const firstBrace = cleaned.indexOf('{');
      const lastBrace = cleaned.lastIndexOf('}');

      if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
        return null;
      }

      const jsonStr = cleaned.substring(firstBrace, lastBrace + 1);

      // 尝试修复常见的 JSON 格式问题
      let fixedJson = jsonStr
        // 移除尾随逗号
        .replace(/,\s*([}\]])/g, '$1')
        // 修复可能的换行符问题
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');

      // 尝试解析
      const parsed = JSON.parse(fixedJson);

      if (parsed.content) {
        // 如果 content 字段是字符串，进行清理
        let contentStr = parsed.content;
        if (typeof contentStr === 'string') {
          // 恢复换行符
          contentStr = contentStr.replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t');
        }

        return {
          content: contentStr,
          source: parsed.source
        };
      }
    } catch (e) {
      // 解析失败，返回 null
      console.debug('JSON 解析失败:', e);
      return null;
    }

    return null;
  };

  // 根据模板配置动态生成提示词
  const buildPromptFromTemplate = (
    template: ReportTemplateConfig,
    userRequirements: string,
    useWebSearch: boolean
  ): string => {
    // 1. 系统角色
    const rolePrompt = `你是一个${template.industry}的${template.systemRole}。`;

    // 2. 任务描述
    const taskPrompt = useWebSearch
      ? `请先从网络上搜索2024-2025年${template.industry}的最新真实数据和信息，然后生成一份${template.name}。`
      : `请生成一份关于${template.industry}的${template.name}。`;

    // 3. 用户自定义要求
    const userPrompt = userRequirements ? `\n\n用户额外要求：${userRequirements}` : '';

    // 4. 格式要求（固定）
    const formatInstructions = `
重要的格式与约束：
- 只输出严格合法的JSON对象（UTF-8），不要输出任何额外说明、提示语或代码块标记。
- JSON顶层仅包含 "blocks" 数组。
- 每个块仅包含 "title" 和 "content" 两个字段；不要包含 source、references、links 等其他字段。
- 内容仅使用纯Markdown文本；严禁出现任何HTML/XML标签（例如 <cite>、<br>、<p> 等）。
- 如需引号，请使用中文全角引号「」而不是英文双引号"，以避免破坏JSON字符串。`;

    // 5. 网络检索要求（如果启用）
    const webSearchInstructions = useWebSearch
      ? `- 对每一处具体数据、百分比、金额等关键数值，请在其后紧跟插入一个 Markdown 链接作为来源标注，格式：[站点名](url)。同一段有多处数据时，请分别在各数据后各自添加链接；综合性判断可在句末附1-2个代表性来源链接。禁止使用HTML或单独的source字段，链接必须为真实可访问的URL。

网络检索要求：
1. 搜索中国产权交易市场、南方产权交易中心、广东省产权交易的最新数据
2. 搜索国家发改委、广东省国资委的最新政策文件
3. 搜索产权交易行业协会的最新报告和统计数据
4. 搜索产权交易市场的最新新闻和分析文章`
      : `- 若后续启用网络检索，系统会自动将来源以 Markdown 链接形式 [站点名](url) 追加到内容末尾。`;

    // 6. 报告生成要求
    const reportInstructions = `
报告生成要求：
1. 使用JSON格式输出，包含多个内容块
2. 使用${template.industry}专业术语
3. ${useWebSearch ? '包含来自网络搜索获得的具体数据和分析；对具体数据（数值、百分比、金额等）在其后紧跟添加 Markdown 链接 [站点名](url) 作为来源标注' : '基于行业知识生成专业内容'}
4. content可使用Markdown（如 ## 二级标题、**粗体**等），但不得包含HTML标签`;

    // 7. 章节结构要求（列出所有章节的完整要求）
    const flatSections = flattenSections(template.sections);

    // 生成所有章节的详细要求说明
    const sectionRequirements = flatSections.map((sec, idx) =>
      `${idx + 1}. 【${sec.title}】\n   生成要求：${sec.prompt || '请生成该章节的专业内容'}${sec.isRequired ? ' （必需章节）' : ''}`
    ).join('\n\n');

    // 生成示例 JSON 结构（只展示前2个章节作为格式参考）
    const sectionExamples = flatSections.slice(0, 2).map((sec) => ({
      title: sec.title,
      content: `（此处应该是符合要求的完整内容）`,
    }));

    const exampleJSON = {
      blocks: sectionExamples,
    };

    // 8. 组合完整提示词
    return `${rolePrompt}${taskPrompt}${userPrompt}
${formatInstructions}
${webSearchInstructions}
${reportInstructions}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 章节结构要求（必须严格遵守）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

你必须按照以下顺序生成 ${flatSections.length} 个章节，不能遗漏任何章节：

${sectionRequirements}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 JSON 输出格式（示例只展示前2个章节的格式）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${JSON.stringify(exampleJSON, null, 2)}

⚠️ 重要提示：
1. 必须生成完整的 ${flatSections.length} 个章节，blocks 数组中应该包含所有章节
2. 每个章节的 title 必须与上述章节标题完全一致
3. 每个章节的 content 必须严格按照对应的"生成要求"来撰写
4. 直接输出 JSON 对象，从 { 开始，到 } 结束，不要使用 \`\`\`json 标记包裹
5. 确保 JSON 格式完全正确，所有字段都符合规范`;
  };

  // 生成智能报告（分块）- 使用流式输出
  const generateReport = async () => {
    setIsGenerating(true);
    setBlocks([]);
    setErrorMessage('');
    setCollectedCitations([]);

    // 创建临时"生成中"块，用于显示流式输出
    const tempBlockId = `generating-${Date.now()}`;
    const tempBlock: Block = {
      id: tempBlockId,
      type: 'text',
      title: useWebSearch ? '🔍 正在网络检索并生成报告...' : '✨ 正在生成报告...',
      content: '',
      timestamp: new Date().toISOString(),
      version: 1,
      optimizationHistory: []
    };
    setBlocks([tempBlock]);
    setGeneratingBlockId(tempBlockId);

    // 初始化搜索进度
    if (useWebSearch) {
      setSearchProgress({
        stage: 'searching',
        message: '正在启动网络检索引擎...',
        details: [
          '🔍 准备搜索产权交易市场最新数据',
          '📊 准备搜索政策文件和行业报告',
          '📰 准备搜索最新新闻和分析'
        ]
      });
    }

    try {
      // 检查当前模板是否存在
      if (!currentTemplate) {
        setErrorMessage('请先选择一个报告模板');
        setIsGenerating(false);
        setBlocks([]);
        setGeneratingBlockId(null);
        return;
      }

      // 使用新的动态提示词生成函数
      const prompt = buildPromptFromTemplate(currentTemplate, customRequirements, useWebSearch);

      console.log('prompt', prompt);

      let fullResponse = '';
      const allCitations: Citation[] = [];
      let hasStartedGenerating = false;
      let lastCitationCount = 0;

      // 用于逐块解析和渲染
      let jsonBuffer = '';
      let extractedBlockCount = 0;
      const renderedBlocks: Block[] = [];

      if (useWebSearch) {
        // 更新进度：开始搜索
        setSearchProgress({
          stage: 'searching',
          message: '正在网络检索中，请稍候...',
          details: [
            '🌐 正在进行网络检索数据...',
            '⏳ 预计需要 30-60 秒',
            '💡 AI 正在访问多个权威网站'
          ]
        });

        // 显示搜索进度块
        setBlocks([{
          ...tempBlock,
          content: `## 🌐 网络检索中...\n\n正在搜索产权交易市场数据，预计需要 30-60 秒\n\nAI 正在访问多个权威网站获取最新真实数据...`
        }]);

        // 使用带网络检索的流式 API
        for await (const chunk of window.claude.completeStreamWithWebSearch(prompt, 10)) {
          if (chunk.content) {
            fullResponse += chunk.content;
            jsonBuffer += chunk.content;

            // 尝试从缓冲区提取新的完整块
            const allExtractedBlocks = tryExtractBlocks(jsonBuffer, 0);

            if (allExtractedBlocks.length > extractedBlockCount) {
              // 有新的块被提取出来
              const newBlocks = allExtractedBlocks.slice(extractedBlockCount);
              extractedBlockCount = allExtractedBlocks.length;

              // 为新块创建 Block 对象并添加到渲染列表
              newBlocks.forEach(blockData => {
                const newBlock = createTextBlock(
                  blockData.content,
                  blockData.title,
                  '',
                  []
                );
                renderedBlocks.push(newBlock);
              });

              // 显示已渲染的块 + 生成中提示
              const generatingTempBlock: Block = {
                id: tempBlockId,
                type: 'text',
                title: `✨ 正在生成第 ${extractedBlockCount + 1} 块...`,
                content: '_AI 正在撰写中，请稍候..._',
                timestamp: new Date().toISOString(),
                version: 1,
                optimizationHistory: []
              };

              setBlocks([...renderedBlocks, generatingTempBlock]);
            }

            // 检测是否开始生成内容
            if (!hasStartedGenerating && fullResponse.length > 50) {
              hasStartedGenerating = true;
              setSearchProgress({
                stage: 'generating',
                message: '网络检索完成，正在生成报告...',
                details: [
                  '✅ 已获取真实数据源',
                  '📝 正在撰写专业报告',
                  '🔗 正在整理引用来源'
                ]
              });
            }
          }
          if (chunk.citations) {
            allCitations.push(...chunk.citations);
            setCollectedCitations(allCitations);

            // 每次收集到新引用时更新进度
            if (allCitations.length > lastCitationCount) {
              lastCitationCount = allCitations.length;
              const uniqueUrls = Array.from(new Set(allCitations.map(c => c.url)));
              setSearchProgress({
                stage: 'analyzing',
                message: `已找到 ${uniqueUrls.length} 个真实数据源`,
                details: uniqueUrls.slice(0, 5).map((url, idx) => {
                  try {
                    const urlObj = new URL(url);
                    return `${idx + 1}. 📄 ${urlObj.hostname}`;
                  } catch {
                    return `${idx + 1}. 📄 数据源`;
                  }
                })
              });
            }
          }
        }
      } else {
        // 使用普通流式 API
        for await (const chunk of window.claude.completeStream(prompt)) {
          fullResponse += chunk;
          jsonBuffer += chunk;

          // 尝试从缓冲区提取新的完整块
          const allExtractedBlocks = tryExtractBlocks(jsonBuffer, 0);

          if (allExtractedBlocks.length > extractedBlockCount) {
            // 有新的块被提取出来
            const newBlocks = allExtractedBlocks.slice(extractedBlockCount);
            extractedBlockCount = allExtractedBlocks.length;

            // 为新块创建 Block 对象并添加到渲染列表
            newBlocks.forEach(blockData => {
              const newBlock = createTextBlock(
                blockData.content,
                blockData.title,
                '',
                []
              );
              renderedBlocks.push(newBlock);
            });

            // 显示已渲染的块 + 生成中提示
            const generatingTempBlock: Block = {
              id: tempBlockId,
              type: 'text',
              title: `✨ 正在生成第 ${extractedBlockCount + 1} 块...`,
              content: '_AI 正在撰写中，请稍候..._',
              timestamp: new Date().toISOString(),
              version: 1,
              optimizationHistory: []
            };

            setBlocks([...renderedBlocks, generatingTempBlock]);
          }
        }
      }

      console.log('AI 返回的完整内容:', fullResponse);
      console.log('收集的引用:', allCitations);
      console.log('已渲染块数量:', renderedBlocks.length);

      // 如果已经成功提取并渲染了块，直接完成
      if (renderedBlocks.length > 0) {
        setBlocks(renderedBlocks);
        setCustomRequirements(''); // 成功后清空自定义要求
        setGeneratingBlockId(null);

        // 更新进度为完成
        if (useWebSearch) {
          setSearchProgress({
            stage: 'completed',
            message: '报告生成完成！',
            details: [
              `✅ 成功生成 ${renderedBlocks.length} 个内容块`,
              `🔗 包含 ${allCitations.length} 个真实引用`,
              `📊 所有数据均来自可靠网络来源`
            ]
          });
        }
      } else {
        // 兜底：如果流式提取失败，尝试整体解析
        console.warn('流式提取未成功，尝试整体解析');

        // 智能提取 JSON 内容
        let cleanedResponse = fullResponse.trim();

        // 方法1: 移除 markdown 代码块标记
        if (cleanedResponse.includes('```json')) {
          const match = cleanedResponse.match(/```json\s*([\s\S]*?)```/);
          if (match) {
            cleanedResponse = match[1].trim();
          }
        } else if (cleanedResponse.includes('```')) {
          const match = cleanedResponse.match(/```\s*([\s\S]*?)```/);
          if (match) {
            cleanedResponse = match[1].trim();
          }
        }

        // 方法2: 查找第一个 { 和最后一个 }，提取中间的 JSON
        const firstBrace = cleanedResponse.indexOf('{');
        const lastBrace = cleanedResponse.lastIndexOf('}');

        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
          cleanedResponse = cleanedResponse.substring(firstBrace, lastBrace + 1);
          console.log('提取的 JSON 内容:', cleanedResponse.substring(0, 200) + '...');
        } else {
          console.warn('未找到有效的 JSON 结构，使用原始内容');
        }

        // 额外清洗：去除HTML标签（尤其是<cite>）与尾随逗号，避免破坏JSON
        try {
          cleanedResponse = cleanedResponse
            // 去除<cite ...>和</cite>
            .replace(/<cite[^>]*>/gi, '')
            .replace(/<\/cite>/gi, '')
            // 去除出现在对象或数组末尾的尾随逗号
            .replace(/,\s*(\}|\])/g, '$1');
        } catch (e) {
          console.warn('清洗JSON时发生异常，继续解析：', e);
        }

        try {
          const parsed = JSON.parse(cleanedResponse);
          if (!parsed.blocks || !Array.isArray(parsed.blocks)) {
            throw new Error('返回的 JSON 格式不正确，缺少 blocks 数组');
          }

          const newBlocks: Block[] = parsed.blocks.map((block: { title: string; content: string; relatedChartIds?: string[] }) => {
            const textBlock = createTextBlock(
              block.content,
              block.title,
              '',
              block.relatedChartIds || []
            );

            return textBlock;
          });

          setBlocks(newBlocks);
          setCustomRequirements(''); // 成功后清空自定义要求
          setGeneratingBlockId(null);

          // 更新进度为完成
          if (useWebSearch) {
            setSearchProgress({
              stage: 'completed',
              message: '报告生成完成！',
              details: [
                `✅ 成功生成 ${newBlocks.length} 个内容块`,
                `🔗 包含 ${allCitations.length} 个真实引用`,
                `📊 所有数据均来自可靠网络来源`
              ]
            });
          }
        } catch (parseError) {
          console.error('JSON 解析失败:', parseError);
          setErrorMessage(`AI 返回的内容无法解析为 JSON 格式。错误：${parseError instanceof Error ? parseError.message : '未知错误'}`);
          // 保留流式输出的内容块，让用户看到原始内容
          setBlocks([{
            ...tempBlock,
            title: '⚠️ 解析失败 - 原始输出',
            content: `## 解析错误\n\n${parseError instanceof Error ? parseError.message : '未知错误'}\n\n---\n\n## 原始 AI 输出\n\n${fullResponse}`
          }]);
          setGeneratingBlockId(null);
        }
      }
    } catch (error) {
      console.error('生成失败:', error);
      setErrorMessage(`生成报告失败：${error instanceof Error ? error.message : '未知错误'}`);
      setBlocks([]);
      setGeneratingBlockId(null);
    }

    setIsGenerating(false);
  };

  // 后备报告块
  const generateFallbackBlocks = () => {
    const fallbackBlocks = [
      {
        title: "产权交易市场分析报告",
        content: "本报告基于2024年上半年产权交易市场数据，深入分析了当前市场发展态势、交易特点及未来趋势。报告显示，产权交易市场整体呈现稳中向好态势，国有产权交易活跃度持续提升。",
        source: "南方产权交易中心2024年半年度综合报告"
      },
      {
        title: "一、市场概况",
        content: "2024年上半年，全省产权交易市场累计成交额达到**1,285.6亿元**，同比增长**23.5%**。其中股权类交易685.4亿元，占比53.3%；实物资产类421.2亿元，占比32.8%；债权类交易179.0亿元，占比13.9%。",
        source: "南方产权交易中心2024年半年度交易统计报告"
      },
      {
        title: "二、数据分析",
        content: "通过对交易项目的深度分析，制造业、房地产业、金融业位列交易活跃度前三位，分别占总交易额的28.5%、24.3%和18.7%。新能源、生物医药等战略性新兴产业的产权交易显著增长，同比增幅达到45.2%。增资扩股类项目共计158宗，累计募集资金236.8亿元。",
        source: "广东省国资委2024年第二季度产权交易分析报告"
      },
      {
        title: "三、趋势研判",
        content: "市场发展呈现三大趋势：一是数字化转型加速，智能化交易平台建设持续推进，线上交易占比达到78.5%；二是跨区域交易增长，粤港澳大湾区协同效应显现，跨区域产权流转项目增长32.1%；三是产业整合加快，产业链上下游整合类交易增多。",
        source: "基于市场数据综合分析"
      },
      {
        title: "四、风险提示",
        content: "当前需要关注的风险点包括：估值风险，部分热门行业存在估值偏高现象；流动性风险，大额产权交易可能面临流动性不足；合规风险，需严格遵守国有资产交易相关法规；市场风险，宏观经济波动可能影响交易活跃度。",
        source: "国家发改委《产权交易风险防控指引》2024版"
      },
      {
        title: "五、结论与建议",
        content: "产权交易市场总体运行平稳，结构持续优化。建议：一是完善交易机制，优化挂牌、竞价流程；二是强化风险防控，建立健全风险评估预警机制；三是提升服务能力，加强专业化、智能化服务体系建设；四是深化改革创新，探索产权交易新模式。",
        source: "基于行业最佳实践综合建议"
      }
    ];

    const newBlocks = fallbackBlocks.map(block => createTextBlock(block.content, block.title, block.source || ''));
    setBlocks(newBlocks);
  };

  // 生成自定义图表 - 使用流式输出
  const generateCustomChart = async () => {
    if (!chartPrompt) return;

    setIsGenerating(true);
    setErrorMessage('');

    // 创建临时生成中块
    const tempBlockId = `generating-chart-${Date.now()}`;
    const tempBlock: Block = {
      id: tempBlockId,
      type: 'text',
      title: '📊 正在生成图表...',
      content: '',
      timestamp: new Date().toISOString(),
      version: 1,
      optimizationHistory: []
    };

    // 添加到当前块列表
    setBlocks(prev => [...prev, tempBlock]);
    setGeneratingBlockId(tempBlockId);

    try {
      // 构建上下文：当前报告的所有文本块内容摘要
      const contextSummary = blocks
        .filter(b => b.type === 'text' && b.content)
        .slice(0, 3) // 只取前3个块，避免上下文过长
        .map(b => `${b.title}: ${b.content?.substring(0, 100)}...`)
        .join('\n\n');

      // 图表类型说明
      const chartTypeDescriptions = {
        bar: '柱状图 - 适合对比不同类别的数值大小',
        line: '折线图 - 适合展示数据随时间的变化趋势',
        pie: '饼图 - 适合展示各部分占整体的比例关系',
        area: '面积图 - 适合展示数据量随时间的累积变化',
        radar: '雷达图 - 适合展示多维度指标的综合评估'
      };

      const prompt = `你是一个专业的数据可视化专家。请根据以下信息生成图表数据：

【报告上下文】
${contextSummary || '暂无上下文'}

【用户需求】
${chartPrompt}

【指定图表类型】
${selectedChartType} - ${chartTypeDescriptions[selectedChartType || 'bar']}

请严格按照用户选择的 "${selectedChartType}" 图表类型生成数据。支持的图表类型及数据格式：

1. **柱状图/折线图/面积图** (type: "bar" | "line" | "area")
数据格式：
{
  "title": "2024年产权交易额统计",
  "type": "bar",
  "data": [
    { "name": "1月", "股权交易": 4500, "实物资产": 3200 },
    { "name": "2月", "股权交易": 5200, "实物资产": 3800 },
    { "name": "3月", "股权交易": 6100, "实物资产": 4200 }
  ]
}

2. **饼图** (type: "pie")
数据格式：
{
  "title": "交易类型占比",
  "type": "pie",
  "data": [
    { "name": "股权交易", "value": 45 },
    { "name": "实物资产", "value": 35 },
    { "name": "债权交易", "value": 20 }
  ]
}

3. **雷达图** (type: "radar")
数据格式：
{
  "title": "市场评估指标",
  "type": "radar",
  "data": [
    { "subject": "交易活跃度", "value": 85 },
    { "subject": "市场流动性", "value": 75 },
    { "subject": "价格稳定性", "value": 90 },
    { "subject": "合规程度", "value": 95 }
  ]
}

重要要求：
1. **必须使用指定的图表类型**：type 字段必须是 "${selectedChartType}"
2. **结合上下文生成数据**：基于报告上下文中提到的数据和趋势生成合理的图表数据
3. **严格按照格式**：
   - 柱状图/折线图/面积图：每个数据项必须有 "name" 字段
   - 饼图：每个数据项必须有 "name" 和 "value" 字段
   - 雷达图：每个数据项必须有 "subject" 和 "value" 字段
4. **数据真实合理**：数据要符合产权交易业务场景，数值要合理
5. **生成足够数据点**：
   - 柱状图/折线图/面积图：至少5-8个数据点
   - 饼图：3-6个分类
   - 雷达图：4-6个维度
6. **输出格式**：直接输出JSON对象，从 { 开始，到 } 结束，不要使用 \`\`\`json 标记`;

      // 如果用户选择的图表类型需要特定格式，添加额外提示
      const typeSpecificHints = {
        bar: '\n提示：柱状图适合对比多个类别的数值，请确保name字段清晰描述类别，数值字段名称有意义（如"交易额"、"数量"等）',
        line: '\n提示：折线图适合展示趋势，name字段通常是时间（如"1月"、"Q1"、"2024年"），请生成连续的时间序列数据',
        pie: '\n提示：饼图展示占比，value字段是百分比或占比数值，所有value之和应该有意义（如100%或总量）',
        area: '\n提示：面积图展示累积趋势，name字段是时间序列，数值会累积显示',
        radar: '\n提示：雷达图展示多维评估，subject是评估维度，value通常是0-100的评分'
      };

      const fullPrompt = prompt + (typeSpecificHints[selectedChartType || 'bar'] || '');

      let fullResponse = '';

      // 使用流式 API
      for await (const chunk of window.claude.completeStream(fullPrompt)) {
        fullResponse += chunk;

        // 实时更新临时块
        setBlocks(prev => prev.map(b =>
          b.id === tempBlockId ? { ...b, content: fullResponse } : b
        ));
      }

      console.log('AI 返回的图表数据:', fullResponse);

      // 智能提取 JSON 内容
      let cleanedResponse = fullResponse.trim();

      // 方法1: 移除 markdown 代码块标记
      if (cleanedResponse.includes('```json')) {
        const match = cleanedResponse.match(/```json\s*([\s\S]*?)```/);
        if (match) {
          cleanedResponse = match[1].trim();
        }
      } else if (cleanedResponse.includes('```')) {
        const match = cleanedResponse.match(/```\s*([\s\S]*?)```/);
        if (match) {
          cleanedResponse = match[1].trim();
        }
      }

      // 方法2: 查找第一个 { 和最后一个 }，提取中间的 JSON
      const firstBrace = cleanedResponse.indexOf('{');
      const lastBrace = cleanedResponse.lastIndexOf('}');

      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleanedResponse = cleanedResponse.substring(firstBrace, lastBrace + 1);
        console.log('提取的图表 JSON:', cleanedResponse.substring(0, 200) + '...');
      } else {
        console.warn('未找到有效的 JSON 结构');
      }

      try {
        const parsed = JSON.parse(cleanedResponse);
        if (!parsed.data || !Array.isArray(parsed.data)) {
          throw new Error('返回的 JSON 格式不正确，缺少 data 数组');
        }

        // 移除临时块并插入图表
        setBlocks(prev => prev.filter(b => b.id !== tempBlockId));
        insertChart(parsed.type || 'bar', parsed.data, parsed.title || '自定义图表');
        setShowInsertModal(false);
        setChartPrompt('');
        setSelectedChartType('bar'); // 重置图表类型选择
        setGeneratingBlockId(null);
      } catch (parseError) {
        console.error('JSON 解析失败:', parseError);
        setErrorMessage(`AI 返回的图表数据无法解析。错误：${parseError instanceof Error ? parseError.message : '未知错误'}`);

        // 更新临时块显示错误
        setBlocks(prev => prev.map(b =>
          b.id === tempBlockId ? {
            ...b,
            title: '⚠️ 图表生成失败',
            content: `## 解析错误\n\n${parseError instanceof Error ? parseError.message : '未知错误'}\n\n---\n\n## 原始输出\n\n${fullResponse}`
          } : b
        ));
        setGeneratingBlockId(null);
      }
    } catch (error) {
      console.error('生成图表失败:', error);
      setErrorMessage(`生成图表失败：${error instanceof Error ? error.message : '未知错误'}`);

      // 移除临时块
      setBlocks(prev => prev.filter(b => b.id !== tempBlockId));
      setGeneratingBlockId(null);
    }

    setIsGenerating(false);
  };

  // 插入默认图表
  const insertDefaultChart = () => {
    const defaultData = [
      { name: '2024-01', 股权交易: 4500, 实物资产: 3200, 债权交易: 2800 },
      { name: '2024-02', 股权交易: 5200, 实物资产: 3800, 债权交易: 3100 },
      { name: '2024-03', 股权交易: 6100, 实物资产: 4200, 债权交易: 3500 },
      { name: '2024-04', 股权交易: 5800, 实物资产: 4500, 债权交易: 3800 },
      { name: '2024-05', 股权交易: 7200, 实物资产: 5100, 债权交易: 4200 },
      { name: '2024-06', 股权交易: 8500, 实物资产: 5800, 债权交易: 4800 }
    ];

    insertChart('bar', defaultData, '2024年产权交易数据分析');
  };

  // 插入图表
  const insertChart = (type: Block['chartType'], data: any[], title: string) => {
    const newChart = createChartBlock(type, data, title);

    if (insertPosition.blockId) {
      const index = blocks.findIndex(b => b.id === insertPosition.blockId);
      if (insertPosition.position === 'before') {
        setBlocks([...blocks.slice(0, index), newChart, ...blocks.slice(index)]);
      } else {
        setBlocks([...blocks.slice(0, index + 1), newChart, ...blocks.slice(index + 1)]);
      }
    } else {
      setBlocks([...blocks, newChart]);
    }
  };

  // 生成自定义文本
  const generateCustomText = async () => {
    if (!customPrompt) return;

    setIsGenerating(true);
    setErrorMessage('');
    setCollectedCitations([]);

    try {
      let content = '';

      if (useWebSearch) {
        const prompt = `作为产权交易专家，请先从网络搜索最新真实数据，然后根据以下要求生成内容：
${customPrompt}

要求：
1. 必须基于网络搜索获得的真实数据
2. 专业且准确，符合产权交易行业规范
3. 内容完整，使用 Markdown 格式
4. 禁止使用任何HTML/XML标签（如<cite>）；对每一处具体数据、百分比、金额等关键数值，请在其后紧跟插入一个 Markdown 链接作为来源标注，格式：[站点名](url)

直接输出内容文本，确保所有数据来自真实网络来源。`;

        const result = await window.claude.completeWithWebSearch(prompt, 5);
        type WebSearchResult = { content: string; citations?: Citation[] };
        const r = result as WebSearchResult;
        content = r.content;
        const citations: Citation[] = r.citations ?? [];
        const uniqueUrls = Array.from(new Set((citations || []).map(c => c.url))).filter(Boolean);
        if (uniqueUrls.length > 0) {
          const mdList = uniqueUrls.map((url) => {
            try {
              const host = new URL(url).hostname;
              return `- [${host}](${url})`;
            } catch {
              return `- ${url}`;
            }
          }).join('\n');
          content += `\n\n## 参考资料\n\n${mdList}`;
        }
      } else {
        const prompt = `作为产权交易专家，请根据以下要求生成内容：
${customPrompt}

要求：
1. 专业且准确
2. 符合产权交易行业规范
3. 内容完整
4. 禁止使用任何HTML/XML标签（如<cite>）

直接输出内容文本。`;

        content = await complete(prompt);
      }

      const newBlock = createTextBlock(content, '自定义内容');

      if (insertPosition.blockId) {
        const index = blocks.findIndex(b => b.id === insertPosition.blockId);
        if (insertPosition.position === 'before') {
          setBlocks([...blocks.slice(0, index), newBlock, ...blocks.slice(index)]);
        } else {
          setBlocks([...blocks.slice(0, index + 1), newBlock, ...blocks.slice(index + 1)]);
        }
      } else {
        setBlocks([...blocks, newBlock]);
      }
    } catch (error) {
      console.error('生成失败:', error);
      setErrorMessage(`生成失败：${error instanceof Error ? error.message : '未知错误'}`);
    }

    setIsGenerating(false);
    setShowInsertModal(false);
    setCustomPrompt('');
  };

  // 插入文本块
  const insertTextBlock = (content: string, title: string) => {
    const newBlock = createTextBlock(content, title);

    if (insertPosition.blockId) {
      const index = blocks.findIndex(b => b.id === insertPosition.blockId);
      if (insertPosition.position === 'before') {
        setBlocks([...blocks.slice(0, index), newBlock, ...blocks.slice(index)]);
      } else {
        setBlocks([...blocks.slice(0, index + 1), newBlock, ...blocks.slice(index + 1)]);
      }
    } else {
      setBlocks([...blocks, newBlock]);
    }
  };

  // 删除块
  const deleteBlock = (blockId: string) => {
    setBlocks(blocks.filter(b => b.id !== blockId));
  };

  // 移动块
  const moveBlock = (blockId: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(b => b.id === blockId);
    if (index === -1) return;

    const newBlocks = [...blocks];
    if (direction === 'up' && index > 0) {
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
    } else if (direction === 'down' && index < blocks.length - 1) {
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
    }
    setBlocks(newBlocks);
  };

  // 复制块
  const duplicateBlock = (blockId: string) => {
    const block = blocks.find(b => b.id === blockId);
    if (!block) return;

    const index = blocks.findIndex(b => b.id === blockId);
    const newBlock: Block = {
      ...block,
      id: `block-${Date.now()}-${Math.random()}`,
      title: block.title + ' (副本)'
    };

    setBlocks([...blocks.slice(0, index + 1), newBlock, ...blocks.slice(index + 1)]);
  };

  // 保存编辑
  const saveEdit = (blockId: string) => {
    setBlocks(blocks.map(b =>
      b.id === blockId ? { ...b, content: editingContent } : b
    ));
    setEditingBlockId(null);
    setEditingContent('');
  };

  // 导出为Word文档
  const exportToWord = async () => {
    try {
      // 解析Markdown文本为段落
      const parseMarkdownToParagraphs = (text: string): (Paragraph | Table)[] => {
        const lines = text.split('\n');
        const elements: (Paragraph | Table)[] = [];
        let i = 0;

        while (i < lines.length) {
          const line = lines[i];

          if (!line.trim()) {
            i++;
            continue;
          }

          // 检测表格（以|开头或包含|且下一行是分隔符）
          if (line.includes('|')) {
            const tableLines: string[] = [];
            let j = i;

            // 收集连续的表格行
            while (j < lines.length && lines[j].includes('|')) {
              tableLines.push(lines[j]);
              j++;
            }

            // 如果至少有2行（表头+分隔符），则认为是表格
            if (tableLines.length >= 2) {
              // 解析表格
              const tableRows: string[][] = [];

              for (const tableLine of tableLines) {
                // 跳过分隔符行（包含---的行）
                if (tableLine.includes('---')) {
                  continue;
                }

                // 解析单元格
                const cells = tableLine.split('|')
                  .map(cell => cell.trim())
                  .filter(cell => cell.length > 0);

                if (cells.length > 0) {
                  tableRows.push(cells);
                }
              }

              // 创建Word表格
              if (tableRows.length > 0) {
                const wordTableRows = tableRows.map((rowCells, rowIndex) => {
                  const isHeaderRow = rowIndex === 0;

                  return new TableRow({
                    children: rowCells.map(cellText =>
                      new TableCell({
                        children: [new Paragraph({
                          children: [new TextRun({
                            text: cellText,
                            bold: isHeaderRow,
                            color: isHeaderRow ? '1F2937' : '374151'
                          })],
                          alignment: AlignmentType.CENTER
                        })],
                        width: {
                          size: Math.floor(9000 / rowCells.length),
                          type: WidthType.DXA
                        },
                        shading: isHeaderRow ? {
                          fill: 'E5E7EB'
                        } : undefined
                      })
                    )
                  });
                });

                elements.push(new Table({
                  rows: wordTableRows,
                  width: {
                    size: 9000,
                    type: WidthType.DXA
                  },
                  margins: {
                    top: 100,
                    bottom: 100,
                    left: 100,
                    right: 100
                  }
                }));

                // 表格后添加空行
                elements.push(new Paragraph({
                  text: '',
                  spacing: { after: 200 }
                }));
              }

              i = j;
              continue;
            }
          }

          // 标题
          if (line.startsWith('####')) {
            elements.push(new Paragraph({
              text: line.replace(/^####\s*/, ''),
              heading: HeadingLevel.HEADING_4,
              spacing: { before: 200, after: 100 }
            }));
          } else if (line.startsWith('###')) {
            elements.push(new Paragraph({
              text: line.replace(/^###\s*/, ''),
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 100 }
            }));
          } else if (line.startsWith('##')) {
            elements.push(new Paragraph({
              text: line.replace(/^##\s*/, ''),
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 240, after: 120 }
            }));
          } else if (line.startsWith('#')) {
            elements.push(new Paragraph({
              text: line.replace(/^#\s*/, ''),
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 280, after: 140 }
            }));
          } else {
            // 处理粗体 **text**
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            const textRuns: TextRun[] = [];

            for (const part of parts) {
              if (part.startsWith('**') && part.endsWith('**')) {
                textRuns.push(new TextRun({
                  text: part.replace(/^\*\*|\*\*$/g, ''),
                  bold: true,
                  color: '2563EB'
                }));
              } else if (part) {
                textRuns.push(new TextRun({
                  text: part
                }));
              }
            }

            elements.push(new Paragraph({
              children: textRuns,
              spacing: { after: 100 }
            }));
          }

          i++;
        }

        return elements;
      };

      // 截取图表为图片
      const captureChart = async (blockId: string): Promise<Uint8Array | null> => {
        const chartElement = document.getElementById(blockId)?.querySelector('.bg-gray-50');
        if (!chartElement) return null;

        try {
          const canvas = await html2canvas(chartElement as HTMLElement, {
            backgroundColor: '#F9FAFB',
            scale: 2 // 高清截图
          });

          // 转换为blob再转为ArrayBuffer
          return new Promise((resolve) => {
            canvas.toBlob((blob) => {
              if (!blob) {
                resolve(null);
                return;
              }
              const reader = new FileReader();
              reader.onloadend = () => {
                const arrayBuffer = reader.result as ArrayBuffer;
                resolve(new Uint8Array(arrayBuffer));
              };
              reader.readAsArrayBuffer(blob);
            }, 'image/png');
          });
        } catch (err) {
          console.error('图表截图失败:', err);
          return null;
        }
      };

      // 构建文档内容
      const docChildren: (Paragraph | Table)[] = [
        // 封面标题
        new Paragraph({
          text: currentTemplate?.name || '报告',
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 }
        }),
        new Paragraph({
          text: `生成时间：${new Date().toLocaleString('zh-CN')}`,
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 }
        })
      ];

      // 添加每个块的内容
      for (const block of blocks) {
        // 块标题
        docChildren.push(new Paragraph({
          text: block.title || `${block.type === 'chart' ? '图表' : '文本'}块`,
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 200 }
        }));

        // 文本内容
        if (block.type === 'text' && block.content) {
          docChildren.push(...parseMarkdownToParagraphs(fixMarkdownBold(block.content)));
        }

        // 图表内容
        if (block.type === 'chart') {
          // 图表类型说明
          docChildren.push(new Paragraph({
            text: `图表类型：${block.chartType === 'bar' ? '柱状图' : block.chartType === 'line' ? '折线图' : block.chartType === 'pie' ? '饼图' : block.chartType === 'area' ? '面积图' : '雷达图'}`,
            spacing: { after: 200 }
          }));

          // 截取图表并插入
          const imageData = await captureChart(block.id);
          if (imageData) {
            try {
              docChildren.push(new Paragraph({
                children: [
                  new ImageRun({
                    data: imageData,
                    transformation: {
                      width: 600,
                      height: 400
                    }
                  })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 }
              }));
            } catch (imgErr) {
              console.error('插入图片失败:', imgErr);
              docChildren.push(new Paragraph({
                children: [
                  new TextRun({
                    text: '（图表插入失败）',
                    italics: true
                  })
                ],
                spacing: { after: 200 }
              }));
            }
          } else {
            docChildren.push(new Paragraph({
              children: [
                new TextRun({
                  text: '（图表截图失败）',
                  italics: true
                })
              ],
              spacing: { after: 200 }
            }));
          }
        }

        // 数据来源
        if (block.source) {
          docChildren.push(new Paragraph({
            children: [
              new TextRun({ text: '数据来源：', italics: true }),
              new TextRun({ text: block.source, italics: true, color: '6B7280' })
            ],
            spacing: { before: 100, after: 200 }
          }));
        }

        // 分隔线（用空段落代替）
        docChildren.push(new Paragraph({
          text: '',
          spacing: { after: 200 }
        }));
      }

      // 创建文档
      const doc = new Document({
        sections: [{
          properties: {},
          children: docChildren
        }]
      });

      // 生成并下载
      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${currentTemplate?.name || '报告'}-${Date.now()}.docx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Word导出失败:', error);
      setErrorMessage(`Word导出失败：${error instanceof Error ? error.message : '未知错误'}`);
    }
  };

  // 导出为JSON
  const exportToJSON = () => {
    const exportData = {
      blocks,
      timestamp: new Date().toISOString(),
      template: currentTemplate?.id || 'unknown',
      templateName: currentTemplate?.name || '未知模板'
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 优化文本块
  const optimizeBlock = async (blockId: string, optimizationType: 'wording' | 'data' | 'analysis', userGuidance?: string) => {
    const block = blocks.find(b => b.id === blockId);
    if (!block || block.type !== 'text') return;

    setOptimizingBlockId(blockId);
    setIsGenerating(true);
    setErrorMessage('');
    setGeneratingBlockId(blockId);

    const optimizationPrompts = {
      wording: '优化文字表达，使其更加专业、流畅和准确。保持原有数据和事实不变，仅改进措辞和表达方式。',
      data: '补充更多数据支撑和统计分析。添加具体的数字、百分比、趋势对比等数据，并标注数据来源。',
      analysis: '深化分析内容，增加洞察和结论。提供更深入的行业分析、原因剖析和前瞻性判断。'
    };

    // 如果用户提供了引导词，使用用户的引导词，否则使用默认提示词
    const optimizationPrompt = userGuidance
      ? `${optimizationPrompts[optimizationType]}\n\n用户的特殊要求：${userGuidance}`
      : optimizationPrompts[optimizationType];

    const optimizationLabels = {
      wording: '✨ 优化措辞中...',
      data: '📊 补充数据中...',
      analysis: '🔍 深化分析中...'
    };

    // 保存原始内容用于优化历史
    const originalContent = block.content;
    const originalSource = block.source;

    // 更新块标题显示优化状态
    setBlocks(prev => prev.map(b =>
      b.id === blockId ? {
        ...b,
        title: `${b.title} - ${optimizationLabels[optimizationType]}`
      } : b
    ));

    try {
      const prompt = `你是产权交易行业专家。请对以下内容进行优化：

原标题：${block.title}
原内容：${block.content}
原数据来源：${block.source || '未标注'}

优化要求：${optimizationPrompt}

输出要求：
1. 直接输出优化后的JSON对象，格式如下：
{
  "content": "优化后的内容（使用Markdown格式）",
  "source": "数据来源（如果补充了新数据，必须标注来源）"
}

2. 保持产权交易专业术语的准确性
3. 如果是补充数据类型的优化，必须标注可信的数据来源
4. 不要使用 \`\`\`json 标记，直接输出JSON对象`;

      let fullResponse = '';
      let jsonBuffer = '';
      let hasExtractedContent = false;

      for await (const chunk of window.claude.completeStream(prompt)) {
        try {
          fullResponse += chunk;
          jsonBuffer += chunk;

          // 尝试从 JSON buffer 中提取优化后的内容
          const extracted = tryExtractOptimizedContent(jsonBuffer);

          if (extracted && extracted.content) {
            hasExtractedContent = true;
            // 显示提取出的 Markdown 内容（已渲染），而不是原始 JSON
            setBlocks(prev => prev.map(b =>
              b.id === blockId ? {
                ...b,
                content: extracted.content,
                source: extracted.source || b.source
              } : b
            ));
          } else if (!hasExtractedContent) {
            // 如果还没有成功提取，显示进度提示而不是原始 JSON
            setBlocks(prev => prev.map(b =>
              b.id === blockId ? {
                ...b,
                content: `${optimizationLabels[optimizationType]}\n\n正在处理响应...\n\n已接收 ${fullResponse.length} 字符`
              } : b
            ));
          }
        } catch (chunkError) {
          console.warn('处理流式输出块时出错:', chunkError);
          // 继续处理下一个块
        }
      }

      console.log('优化返回内容:', fullResponse);

      // 智能提取 JSON 内容
      let cleanedResponse = fullResponse.trim();

      // 方法1: 移除 markdown 代码块标记
      if (cleanedResponse.includes('```json')) {
        const match = cleanedResponse.match(/```json\s*([\s\S]*?)```/);
        if (match) {
          cleanedResponse = match[1].trim();
        }
      } else if (cleanedResponse.includes('```')) {
        const match = cleanedResponse.match(/```\s*([\s\S]*?)```/);
        if (match) {
          cleanedResponse = match[1].trim();
        }
      }

      // 移除可能的 HTML 标签（特别是 <cite>）
      cleanedResponse = cleanedResponse.replace(/<cite[^>]*>/gi, '').replace(/<\/cite>/gi, '');

      // 方法2: 查找第一个 { 和最后一个 }，提取中间的 JSON
      const firstBrace = cleanedResponse.indexOf('{');
      const lastBrace = cleanedResponse.lastIndexOf('}');

      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleanedResponse = cleanedResponse.substring(firstBrace, lastBrace + 1);
        console.log('提取的优化 JSON:', cleanedResponse.substring(0, 200) + '...');
      } else {
        console.warn('未找到有效的 JSON 结构');
        throw new Error('返回内容中未找到有效的 JSON 结构');
      }

      // 修复常见的 JSON 格式问题
      cleanedResponse = cleanedResponse
        // 移除尾随逗号
        .replace(/,\s*([}\]])/g, '$1')
        // 移除可能的控制字符
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '');

      try {
        const parsed = JSON.parse(cleanedResponse);

        // 更新block，添加优化历史
        setBlocks(prev => prev.map(b => {
          if (b.id === blockId) {
            const currentVersion = b.version || 1;
            const newHistory = [
              ...(b.optimizationHistory || []),
              {
                version: currentVersion,
                content: originalContent || '',
                timestamp: new Date().toISOString(),
                type: optimizationType
              }
            ];

            // 恢复原标题（去掉优化状态标签）
            const cleanTitle = b.title.replace(/ - (✨ 优化措辞中\.\.\.|📊 补充数据中\.\.\.|🔍 深化分析中\.\.\.)/, '');

            return {
              ...b,
              title: cleanTitle,
              content: parsed.content,
              source: parsed.source || originalSource || b.source,
              version: currentVersion + 1,
              optimizationHistory: newHistory
            };
          }
          return b;
        }));

        setGeneratingBlockId(null);
      } catch (parseError) {
        console.error('JSON解析失败:', parseError);
        setErrorMessage(`优化内容解析失败：${parseError instanceof Error ? parseError.message : '未知错误'}`);

        // 恢复原标题并显示错误
        setBlocks(prev => prev.map(b => {
          if (b.id === blockId) {
            const cleanTitle = b.title.replace(/ - (✨ 优化措辞中\.\.\.|📊 补充数据中\.\.\.|🔍 深化分析中\.\.\.)/, '');
            return {
              ...b,
              title: `${cleanTitle} - ⚠️ 优化失败`,
              content: `## 解析错误\n\n${parseError instanceof Error ? parseError.message : '未知错误'}\n\n---\n\n## 原始内容\n\n${originalContent}\n\n---\n\n## AI 输出\n\n${fullResponse}`
            };
          }
          return b;
        }));
        setGeneratingBlockId(null);
      }
    } catch (error) {
      console.error('优化失败:', error);
      setErrorMessage(`优化失败：${error instanceof Error ? error.message : '未知错误'}`);

      // 恢复原标题
      setBlocks(prev => prev.map(b => {
        if (b.id === blockId) {
          const cleanTitle = b.title.replace(/ - (✨ 优化措辞中\.\.\.|📊 补充数据中\.\.\.|🔍 深化分析中\.\.\.)/, '');
          return {
            ...b,
            title: cleanTitle,
            content: originalContent || b.content
          };
        }
        return b;
      }));
      setGeneratingBlockId(null);
    }

    setIsGenerating(false);
    setOptimizingBlockId(null);
  };

  // 渲染图表
  const renderChart = (block: Block) => {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

    if (!block.data || block.data.length === 0) return null;

    switch(block.chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={block.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(block.data[0] || {}).filter(key => key !== 'name').map((key, idx) => (
                <Line key={key} type="monotone" dataKey={key} stroke={colors[idx % colors.length]} strokeWidth={2} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={block.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(block.data[0] || {}).filter(key => key !== 'name').map((key, idx) => (
                <Bar key={key} dataKey={key} fill={colors[idx % colors.length]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie
                data={block.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {block.data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        );

      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={block.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(block.data[0] || {}).filter(key => key !== 'name').map((key, idx) => (
                <Area key={key} type="monotone" dataKey={key} stackId="1" stroke={colors[idx % colors.length]} fill={colors[idx % colors.length]} />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'radar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={block.data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="数值" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  // 渲染内容块
  const renderBlock = (block: Block, index: number) => {
    const isEditing = editingBlockId === block.id;

    return (
      <div
        key={block.id}
        id={block.id}
        className={`group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all ${
          selectedBlockId === block.id ? 'ring-2 ring-blue-500 shadow-md' : ''
        }`}
        onClick={() => setSelectedBlockId(block.id)}
      >
        {/* 插入按钮 - 上方 */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setInsertPosition({ blockId: block.id, position: 'before' });
              setShowInsertModal(true);
            }}
            className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 flex items-center gap-1 shadow-md font-medium"
          >
            <Plus className="h-3 w-3" />
            在此处插入
          </button>
        </div>

        {/* 内容区域 */}
        <div className="p-5">
          {/* 标题栏 */}
          <div className="flex justify-between items-start mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              {block.type === 'chart' ? (
                <BarChart3 className="h-5 w-5 text-blue-600" />
              ) : (
                <Type className="h-5 w-5 text-gray-600" />
              )}
              <h3 className="text-base font-semibold text-slate-900">
                {block.title || `${block.type === 'chart' ? '图表' : '文本'}块 ${index + 1}`}
              </h3>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  moveBlock(block.id, 'up');
                }}
                className="p-1.5 text-slate-500 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
                title="上移"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  moveBlock(block.id, 'down');
                }}
                className="p-1.5 text-slate-500 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
                title="下移"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
              {block.type === 'text' && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isEditing) {
                        saveEdit(block.id);
                      } else {
                        setEditingBlockId(block.id);
                        setEditingContent(block.content || '');
                      }
                    }}
                    className="p-1.5 text-slate-500 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
                    title={isEditing ? "保存" : "编辑"}
                  >
                    {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
                  </button>
                  {/* 优化按钮组 */}
                  <div className="relative group/optimize">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-slate-500 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
                      title="优化内容"
                    >
                      <Sparkles className="h-4 w-4" />
                    </button>
                    {/* 优化选项下拉菜单 */}
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200/50 rounded-xl shadow-lg opacity-0 invisible group-hover/optimize:opacity-100 group-hover/optimize:visible transition-all z-10 w-36 overflow-hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOptimizingBlockData({ blockId: block.id, type: 'wording' });
                          setShowOptimizeModal(true);
                        }}
                        disabled={isGenerating}
                        className="w-full px-3 py-2.5 text-left text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
                      >
                        <Edit3 className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-slate-700">优化措辞</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOptimizingBlockData({ blockId: block.id, type: 'data' });
                          setShowOptimizeModal(true);
                        }}
                        disabled={isGenerating}
                        className="w-full px-3 py-2.5 text-left text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors border-t border-gray-100"
                      >
                        <Database className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-slate-700">补充数据</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOptimizingBlockData({ blockId: block.id, type: 'analysis' });
                          setShowOptimizeModal(true);
                        }}
                        disabled={isGenerating}
                        className="w-full px-3 py-2.5 text-left text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors border-t border-gray-100"
                      >
                        <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-slate-700">深化分析</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  duplicateBlock(block.id);
                }}
                className="p-1.5 text-slate-500 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
                title="复制"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteBlock(block.id);
                }}
                className="p-1.5 text-slate-500 hover:bg-gray-100 hover:text-red-600 rounded-lg transition-colors"
                title="删除"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 内容 */}
          {block.type === 'text' ? (
            isEditing ? (
              <textarea
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={8}
              />
            ) : (
              <div className="prose max-w-none text-gray-700">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: (props) => <h1 className="text-2xl font-bold mb-3 mt-4" {...props} />,
                    h2: (props) => <h2 className="text-xl font-bold mb-2 mt-3" {...props} />,
                    h3: (props) => <h3 className="text-lg font-semibold mb-2 mt-2" {...props} />,
                    h4: (props) => <h4 className="text-base font-semibold mb-1 mt-2" {...props} />,
                    strong: (props) => <strong className="text-blue-600 font-bold" {...props} />,
                    p: (props) => <p className="mb-2" {...props} />,
                    a: (props) => <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline break-all" {...props} />,
                    table: (props) => (
                      <div className="overflow-x-auto my-4">
                        <table className="min-w-full divide-y divide-gray-300 border border-gray-300" {...props} />
                      </div>
                    ),
                    thead: (props) => <thead className="bg-gray-50" {...props} />,
                    tbody: (props) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
                    tr: (props) => <tr className="hover:bg-gray-50" {...props} />,
                    th: (props) => <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-r border-gray-300 last:border-r-0" {...props} />,
                    td: (props) => <td className="px-4 py-2 text-sm text-gray-700 border-r border-gray-300 last:border-r-0" {...props} />,
                  }}
                >
                  {fixMarkdownBold(block.content || '')}
                </ReactMarkdown>
              </div>
            )
          ) : (
            <div className="bg-gray-50 p-4 rounded">
              {renderChart(block)}
            </div>
          )}

          {/* 关联图表提示（文本块） */}
          {block.type === 'text' && block.relatedChartIds && block.relatedChartIds.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center text-xs text-blue-600">
                <BarChart3 className="h-3 w-3 mr-1.5 flex-shrink-0" />
                <span className="font-medium mr-2">关联图表：</span>
                <div className="flex flex-wrap gap-2">
                  {block.relatedChartIds.map((chartId) => {
                    const chartBlock = blocks.find(b => b.id === chartId);
                    if (!chartBlock) return null;
                    return (
                      <button
                        key={chartId}
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById(chartId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          setSelectedBlockId(chartId);
                        }}
                        className="px-2 py-1 bg-blue-50 hover:bg-blue-100 rounded text-blue-700 transition-colors"
                      >
                        {chartBlock.title || '图表'}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 关联文本提示（图表块） */}
          {block.type === 'chart' && block.relatedTextIds && block.relatedTextIds.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center text-xs text-green-600">
                <FileText className="h-3 w-3 mr-1.5 flex-shrink-0" />
                <span className="font-medium mr-2">关联章节：</span>
                <div className="flex flex-wrap gap-2">
                  {block.relatedTextIds.map((textId) => {
                    const textBlock = blocks.find(b => b.id === textId);
                    if (!textBlock) return null;
                    return (
                      <button
                        key={textId}
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById(textId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          setSelectedBlockId(textId);
                        }}
                        className="px-2 py-1 bg-green-50 hover:bg-green-100 rounded text-green-700 transition-colors"
                      >
                        {textBlock.title || '文本'}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 数据来源 */}
          {block.type === 'text' && block.source && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center text-xs text-gray-500">
                <Database className="h-3 w-3 mr-1.5 flex-shrink-0" />
                <span className="font-medium mr-1">数据来源：</span>
                <span>{block.source}</span>
              </div>
            </div>
          )}

          {/* 网络引用 */}
          {block.type === 'text' && block.citations && block.citations.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-start text-xs">
                <FileSearch className="h-3 w-3 mr-1.5 flex-shrink-0 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <span className="font-medium text-gray-700 mr-2">真实引用来源：</span>
                  <div className="mt-2 space-y-1.5">
                    {Array.from(new Set(block.citations.map(c => c.url))).slice(0, 5).map((url, idx) => {
                      try {
                        const urlObj = new URL(url);
                        const citation = block.citations?.find(c => c.url === url);
                        return (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-green-600 font-semibold">[{idx + 1}]</span>
                            <div className="flex-1">
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                                title={url}
                              >
                                {urlObj.hostname}
                              </a>
                              {citation && citation.text && (
                                <div className="text-gray-500 italic mt-0.5">
                                  "{citation.text.substring(0, 100)}{citation.text.length > 100 ? '...' : ''}"
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      } catch (e) {
                        return null;
                      }
                    })}
                    {block.citations.length > 5 && (
                      <div className="text-gray-400 mt-1">
                        还有 {block.citations.length - 5} 个引用未显示...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 时间戳和版本信息 */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
            <span>创建于 {new Date(block.timestamp).toLocaleString('zh-CN')}</span>
            <div className="flex items-center gap-2">
              {block.version && block.version > 1 && (
                <>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">
                    v{block.version} (已优化{block.version - 1}次)
                  </span>
                  {block.optimizationHistory && block.optimizationHistory.length > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowVersionHistory(showVersionHistory === block.id ? null : block.id);
                      }}
                      className="text-blue-600 hover:text-blue-700 underline text-xs"
                    >
                      查看历史
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* 版本历史记录 */}
          {showVersionHistory === block.id && block.optimizationHistory && block.optimizationHistory.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">优化历史记录</h4>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {block.optimizationHistory.map((history, idx) => (
                  <div key={idx} className="bg-gray-50 rounded p-3 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-700">v{history.version}</span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">
                          {history.type === 'wording' ? '优化措辞' : history.type === 'data' ? '补充数据' : '深化分析'}
                        </span>
                        <span className="text-gray-500">
                          {new Date(history.timestamp).toLocaleString('zh-CN')}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-600 max-h-40 overflow-y-auto prose prose-sm max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: (props) => <h1 className="text-sm font-bold mb-1 mt-2" {...props} />,
                          h2: (props) => <h2 className="text-xs font-bold mb-1 mt-1" {...props} />,
                          h3: (props) => <h3 className="text-xs font-semibold mb-1 mt-1" {...props} />,
                          h4: (props) => <h4 className="text-xs font-semibold mb-1 mt-1" {...props} />,
                          strong: (props) => <strong className="text-gray-800 font-bold" {...props} />,
                          p: (props) => <p className="mb-1 text-xs" {...props} />,
                          a: (props) => <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline break-all" {...props} />,
                          ul: (props) => <ul className="list-disc list-inside mb-1 text-xs" {...props} />,
                          ol: (props) => <ol className="list-decimal list-inside mb-1 text-xs" {...props} />,
                          li: (props) => <li className="mb-0.5 text-xs" {...props} />,
                        }}
                      >
                        {history.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 插入按钮 - 下方 */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setInsertPosition({ blockId: block.id, position: 'after' });
              setShowInsertModal(true);
            }}
            className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 flex items-center gap-1 shadow-md font-medium"
          >
            <Plus className="h-3 w-3" />
            在此处插入
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 固定侧边栏 */}
      <div
        className={`fixed left-0 top-0 h-full ${
          isSidebarCollapsed ? 'w-16' : 'w-80'
        } transition-all duration-300 z-30 pt-20`}
      >
        <div className="h-full bg-white/80 backdrop-blur-sm shadow-lg border-r border-gray-200/50 overflow-y-auto">
          {/* 折叠状态的图标指示 */}
          {isSidebarCollapsed && (
            <div className="flex flex-col items-center gap-4 py-6">
              {/* 展开按钮 */}
              <button
                onClick={() => setIsSidebarCollapsed(false)}
                className="w-8 h-8 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center"
                title="展开侧边栏"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="border-t border-gray-200 w-10"></div>
              <div className="p-2 rounded-lg bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors" title="智能内容生成工厂">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <div className="p-2 rounded-lg bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors" title="生成报告">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <div className="p-2 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors" title="添加内容">
                <Plus className="h-5 w-5 text-gray-600" />
              </div>
              <div className="border-t border-gray-200 w-10 my-2"></div>
              <div className="p-2 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold" title="文本块数量">
                {blocks.filter(b => b.type === 'text').length}
              </div>
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 text-xs font-semibold" title="图表块数量">
                {blocks.filter(b => b.type === 'chart').length}
              </div>
            </div>
          )}

          {/* 侧边栏内容 */}
          <div className={`p-5 space-y-5 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-slate-900">智能内容生成工厂</h3>
              </div>
              {/* 侧边栏折叠按钮 */}
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="w-6 h-6 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center"
                title="折叠侧边栏"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* 报告模板 */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">报告模板</label>
              <Select
                value={currentTemplate?.id || ''}
                onValueChange={(value) => {
                  const template = userTemplates.find(t => t.id === value);
                  if (template) {
                    setCurrentTemplate(template);
                    setActiveTemplate(template.id);
                  }
                }}
              >
                <SelectTrigger className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white hover:bg-gray-50">
                  <SelectValue placeholder="选择报告模板">
                    {currentTemplate?.name}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {userTemplates.map((template) => (
                    <SelectItem
                      key={template.id}
                      value={template.id}
                      className="cursor-pointer hover:bg-blue-50 py-2"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-sm">{template.name}</div>
                        {template.description && (
                          <div className="text-xs text-gray-500 line-clamp-2">{template.description}</div>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                onClick={() => window.location.href = '/产权/template-editor'}
                className="mt-2 w-full px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5 group"
              >
                <Settings className="h-3.5 w-3.5 group-hover:rotate-90 transition-transform" />
                管理模板
              </button>
            </div>

            {/* 自定义要求 */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">自定义要求</label>
              <textarea
                value={customRequirements}
                onChange={(e) => setCustomRequirements(e.target.value)}
                placeholder="请输入您的具体要求，例如：重点分析制造业、包含近三年数据对比、聚焦新能源领域等"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                rows={3}
              />
            </div>

            {/* 网络检索开关 */}
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useWebSearch}
                  onChange={(e) => setUseWebSearch(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-900">
                  使用网络检索
                </span>
              </label>
              <p className="text-xs text-slate-600 mt-1.5 ml-6 leading-relaxed">
                开启后将从互联网获取最新真实数据和引用来源
              </p>
            </div>

            {/* 主要操作按钮 */}
            <div className="space-y-2 pt-2">
              <button
                onClick={generateReport}
                disabled={isGenerating}
                className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all font-medium"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    生成中...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    生成智能报告
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setInsertPosition({ blockId: null, position: 'after' });
                  setShowInsertModal(true);
                }}
                className="w-full px-4 py-2.5 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all font-medium"
              >
                <Plus className="h-5 w-5" />
                添加新块
              </button>
            </div>

            {/* 快速插入 */}
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2.5">快速插入</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    insertTextBlock('在此输入自定义内容...', '自定义文本块');
                  }}
                  className="p-2.5 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all flex flex-col items-center gap-1.5 group"
                >
                  <Type className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <span className="text-xs font-medium text-slate-700">文本块</span>
                </button>
                <button
                  onClick={insertDefaultChart}
                  className="p-2.5 text-sm bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-all flex flex-col items-center gap-1.5 group"
                >
                  <BarChart3 className="h-4 w-4 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  <span className="text-xs font-medium text-blue-700">图表块</span>
                </button>
              </div>
            </div>

            {/* 统计信息 */}
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">统计信息</h4>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                  <span className="text-xs text-slate-600">文本块</span>
                  <span className="text-sm font-semibold text-slate-900">{blocks.filter(b => b.type === 'text').length}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50">
                  <span className="text-xs text-blue-600">图表块</span>
                  <span className="text-sm font-semibold text-blue-900">{blocks.filter(b => b.type === 'chart').length}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                  <span className="text-xs text-slate-600">总字数</span>
                  <span className="text-sm font-semibold text-slate-900">{blocks.filter(b => b.type === 'text').reduce((sum, b) => sum + (b.content?.length || 0), 0)}</span>
                </div>
                {useWebSearch && (
                  <>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50">
                      <div className="flex items-center gap-1.5">
                        <FileSearch className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-blue-600">真实引用</span>
                      </div>
                      <span className="text-sm font-semibold text-blue-900">{blocks.filter(b => b.citations && b.citations.length > 0).length} 块</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50">
                      <span className="text-xs text-blue-600">总引用数</span>
                      <span className="text-sm font-semibold text-blue-900">{blocks.reduce((sum, b) => sum + (b.citations?.length || 0), 0)}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 顶部导航栏 */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="flex justify-between items-center py-3 pl-4 pr-4 sm:pr-6 lg:pr-8">
          {/* 左侧 Logo - 紧贴页面左边 */}
          <div className="flex items-center">
            <img
              src="/nanfan-logo.png"
              alt="南方联合产权交易中心"
              className="h-12"
            />
          </div>

          {/* 右侧导出功能 */}
          <div className="relative" ref={exportMenuRef}>
            <button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
              导出报告
              <ChevronDown className={`h-4 w-4 transition-transform ${showExportMenu ? 'rotate-180' : ''}`} />
            </button>

            {showExportMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200/50 rounded-xl shadow-lg z-50 w-56 overflow-hidden">
                <button
                  onClick={() => {
                    exportToWord();
                    setShowExportMenu(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <FileDown className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 text-sm">导出为Word</div>
                    <div className="text-xs text-slate-500">完整报告格式</div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    exportToJSON();
                    setShowExportMenu(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-green-50 transition-colors flex items-center gap-3 border-t border-gray-100 group"
                >
                  <div className="p-2 rounded-lg bg-green-50 text-green-600 group-hover:bg-green-100 transition-colors">
                    <FileJson className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 text-sm">导出为JSON</div>
                    <div className="text-xs text-slate-500">数据备份格式</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div
        className={`transition-all duration-300 py-6 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-80'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 错误提示 */}
          {errorMessage && (
            <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-5 flex items-start justify-between shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-1.5">生成失败</h4>
                  <p className="text-sm text-red-700 whitespace-pre-wrap leading-relaxed mb-3">{errorMessage}</p>
                  <button
                    onClick={() => {
                      setErrorMessage('');
                      generateFallbackBlocks();
                    }}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-sm hover:shadow-md font-medium"
                  >
                    使用默认示例数据
                  </button>
                </div>
              </div>
              <button
                onClick={() => setErrorMessage('')}
                className="p-1.5 text-red-400 hover:bg-red-100 hover:text-red-600 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* 内容编辑区 */}
          <div>
            {blocks.length > 0 ? (
              <div className="space-y-5">
                {blocks.map((block, index) => renderBlock(block, index))}

                {/* 末尾添加按钮 */}
                <div className="flex justify-center py-6">
                  <button
                    onClick={() => {
                      setInsertPosition({ blockId: null, position: 'after' });
                      setShowInsertModal(true);
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-sm hover:shadow-md transition-all font-medium group"
                  >
                    <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                    在末尾添加内容
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50 p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 mb-4">
                      <Sparkles className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">开始创建您的智能报告</h3>
                    <p className="text-sm text-slate-500">
                      选择模板、输入要求，一键生成专业报告
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* 报告模板选择 */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">选择报告模板</label>
                      <Select
                        value={currentTemplate?.id || ''}
                        onValueChange={(value) => {
                          const template = userTemplates.find(t => t.id === value);
                          if (template) {
                            setCurrentTemplate(template);
                            setActiveTemplate(template.id);
                          }
                        }}
                      >
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white hover:bg-gray-50">
                          <SelectValue placeholder="选择报告模板">
                            {currentTemplate?.name}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="max-h-80">
                          {userTemplates.map((template) => (
                            <SelectItem
                              key={template.id}
                              value={template.id}
                              className="cursor-pointer hover:bg-blue-50 py-2"
                            >
                              <div className="flex flex-col gap-1">
                                <div className="font-medium text-sm text-slate-900">{template.name}</div>
                                {template.description && (
                                  <div className="text-xs text-gray-500 line-clamp-2">{template.description}</div>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* 自定义要求 */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">自定义要求（可选）</label>
                      <textarea
                        value={customRequirements}
                        onChange={(e) => setCustomRequirements(e.target.value)}
                        placeholder="请输入您的具体要求，例如：重点分析制造业、包含近三年数据对比、聚焦新能源领域等"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white"
                        rows={4}
                      />
                    </div>

                    {/* 网络检索开关 */}
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={useWebSearch}
                          onChange={(e) => setUseWebSearch(e.target.checked)}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <span className="text-sm font-medium text-slate-900 block">
                            使用网络检索
                          </span>
                          <span className="text-xs text-slate-600">
                            开启后将从互联网获取最新真实数据和引用来源
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={generateReport}
                        disabled={isGenerating}
                        className="flex-1 px-6 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all font-medium"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="animate-spin h-5 w-5" />
                            生成中...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-5 w-5" />
                            生成智能报告
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => setShowInsertModal(true)}
                        className="px-6 py-3.5 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 flex items-center gap-2 shadow-md hover:shadow-lg transition-all font-medium"
                      >
                        <Plus className="h-5 w-5" />
                        手动添加
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 插入内容模态框 */}
      {showInsertModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Plus className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">插入新内容</h3>
              </div>
              <button
                onClick={() => {
                  setShowInsertModal(false);
                  setCustomPrompt('');
                  setChartPrompt('');
                  setSelectedChartType('bar');
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
              </button>
            </div>

            <div className="space-y-5">
              {/* 插入文本 */}
              <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                <div className="flex items-center gap-2 mb-4">
                  <Type className="h-5 w-5 text-gray-600" />
                  <h4 className="font-semibold text-slate-900">插入文本块</h4>
                </div>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="输入您想要生成的内容描述，例如：生成一段关于混合所有制改革的分析"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm bg-white"
                  rows={3}
                />
                <button
                  onClick={generateCustomText}
                  disabled={!customPrompt || isGenerating}
                  className="mt-3 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-all shadow-sm hover:shadow-md font-medium"
                >
                  生成文本
                </button>
              </div>

              {/* 插入图表 */}
              <div className="border border-gray-200 rounded-xl p-5 bg-blue-50">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-slate-900">插入图表块</h4>
                </div>

                {/* 图表类型选择器 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-3">选择图表类型</label>
                  <div className="grid grid-cols-5 gap-2">
                    <button
                      onClick={() => setSelectedChartType('bar')}
                      className={`p-3 border-2 rounded-xl text-center transition-all ${
                        selectedChartType === 'bar'
                          ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-sm scale-105'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <BarChart3 className="h-5 w-5 mx-auto mb-1.5" />
                      <span className="text-xs font-medium">柱状图</span>
                    </button>
                    <button
                      onClick={() => setSelectedChartType('line')}
                      className={`p-3 border-2 rounded-xl text-center transition-all ${
                        selectedChartType === 'line'
                          ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-sm scale-105'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <TrendingUp className="h-5 w-5 mx-auto mb-1.5" />
                      <span className="text-xs font-medium">折线图</span>
                    </button>
                    <button
                      onClick={() => setSelectedChartType('pie')}
                      className={`p-3 border-2 rounded-xl text-center transition-all ${
                        selectedChartType === 'pie'
                          ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-sm scale-105'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <Grid3x3 className="h-5 w-5 mx-auto mb-1.5" />
                      <span className="text-xs font-medium">饼图</span>
                    </button>
                    <button
                      onClick={() => setSelectedChartType('area')}
                      className={`p-3 border-2 rounded-xl text-center transition-all ${
                        selectedChartType === 'area'
                          ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-sm scale-105'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <BarChart3 className="h-5 w-5 mx-auto mb-1.5" />
                      <span className="text-xs font-medium">面积图</span>
                    </button>
                    <button
                      onClick={() => setSelectedChartType('radar')}
                      className={`p-3 border-2 rounded-xl text-center transition-all ${
                        selectedChartType === 'radar'
                          ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-sm scale-105'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <Sparkles className="h-5 w-5 mx-auto mb-1.5" />
                      <span className="text-xs font-medium">雷达图</span>
                    </button>
                  </div>
                </div>

                <textarea
                  value={chartPrompt}
                  onChange={(e) => setChartPrompt(e.target.value)}
                  placeholder={`描述您需要的${selectedChartType === 'bar' ? '柱状图' : selectedChartType === 'line' ? '折线图' : selectedChartType === 'pie' ? '饼图' : selectedChartType === 'area' ? '面积图' : '雷达图'}数据，AI会结合报告上下文生成合理的图表。\n\n例如：生成2024年各季度产权交易额对比数据`}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm bg-white"
                  rows={3}
                />
                <button
                  onClick={generateCustomChart}
                  disabled={!chartPrompt || isGenerating}
                  className="mt-3 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-all shadow-sm hover:shadow-md font-medium"
                >
                  生成图表
                </button>
              </div>

              {/* 快速插入预设 */}
              <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-gray-600" />
                  <h4 className="font-semibold text-slate-900">快速插入预设内容</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      insertTextBlock('根据《国有资产交易监督管理办法》，产权交易应当遵循等价有偿、公开公平公正的原则。所有国有产权交易必须在依法设立的产权交易机构中公开进行。', '政策法规');
                      setShowInsertModal(false);
                    }}
                    className="p-3 text-sm bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
                  >
                    <div className="font-medium text-slate-900 mb-1 group-hover:text-blue-700">政策法规段落</div>
                    <div className="text-xs text-slate-500">国有资产交易规范</div>
                  </button>
                  <button
                    onClick={() => {
                      insertTextBlock('通过大数据分析发现，2024年产权交易市场呈现三大特点：一是交易规模持续扩大，二是交易效率显著提升，三是交易结构不断优化。', '数据分析');
                      setShowInsertModal(false);
                    }}
                    className="p-3 text-sm bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
                  >
                    <div className="font-medium text-slate-900 mb-1 group-hover:text-blue-700">数据分析段落</div>
                    <div className="text-xs text-slate-500">市场特点总结</div>
                  </button>
                  <button
                    onClick={() => {
                      const data = [
                        { name: 'Q1', value: 28.5 },
                        { name: 'Q2', value: 31.2 },
                        { name: 'Q3', value: 35.8 },
                        { name: 'Q4', value: 42.1 }
                      ];
                      insertChart('pie', data, '季度占比分析');
                      setShowInsertModal(false);
                    }}
                    className="p-3 text-sm bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
                  >
                    <div className="font-medium text-slate-900 mb-1 group-hover:text-blue-700">饼图 - 季度占比</div>
                    <div className="text-xs text-slate-500">季度数据对比</div>
                  </button>
                  <button
                    onClick={() => {
                      const data = [
                        { name: '1月', 交易额: 4500, 环比: 15 },
                        { name: '2月', 交易额: 5200, 环比: 18 },
                        { name: '3月', 交易额: 6100, 环比: 22 },
                        { name: '4月', 交易额: 5800, 环比: 20 },
                        { name: '5月', 交易额: 7200, 环比: 28 },
                        { name: '6月', 交易额: 8500, 环比: 35 }
                      ];
                      insertChart('line', data, '月度趋势分析');
                      setShowInsertModal(false);
                    }}
                    className="p-3 text-sm bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
                  >
                    <div className="font-medium text-slate-900 mb-1 group-hover:text-blue-700">折线图 - 月度趋势</div>
                    <div className="text-xs text-slate-500">月度数据走势</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 优化引导词输入模态框 */}
      {showOptimizeModal && optimizingBlockData && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">
                  {optimizingBlockData.type === 'wording' ? '优化措辞' :
                   optimizingBlockData.type === 'data' ? '补充数据' : '深化分析'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowOptimizeModal(false);
                  setOptimizeGuidance('');
                  setOptimizingBlockData(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
              </button>
            </div>

            <div className="space-y-4">
              {/* 默认优化说明 */}
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">默认优化方向：</h4>
                <p className="text-sm text-slate-700">
                  {optimizingBlockData.type === 'wording' && '优化文字表达，使其更加专业、流畅和准确。保持原有数据和事实不变，仅改进措辞和表达方式。'}
                  {optimizingBlockData.type === 'data' && '补充更多数据支撑和统计分析。添加具体的数字、百分比、趋势对比等数据，并标注数据来源。'}
                  {optimizingBlockData.type === 'analysis' && '深化分析内容，增加洞察和结论。提供更深入的行业分析、原因剖析和前瞻性判断。'}
                </p>
              </div>

              {/* 用户自定义引导词 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  自定义优化引导（可选）
                </label>
                <textarea
                  value={optimizeGuidance}
                  onChange={(e) => setOptimizeGuidance(e.target.value)}
                  placeholder="输入您的特殊要求，例如：增加数字化转型的内容、使用更专业的术语、补充政策依据等"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white"
                  rows={4}
                />
                <p className="mt-2 text-xs text-slate-500">
                  提示：留空将使用默认优化方向，填写后将作为额外的优化要求
                </p>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    optimizeBlock(optimizingBlockData.blockId, optimizingBlockData.type, optimizeGuidance || undefined);
                    setShowOptimizeModal(false);
                    setOptimizeGuidance('');
                    setOptimizingBlockData(null);
                  }}
                  disabled={isGenerating}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all font-medium"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      优化中...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      开始优化
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setShowOptimizeModal(false);
                    setOptimizeGuidance('');
                    setOptimizingBlockData(null);
                  }}
                  className="px-6 py-3 bg-white text-slate-600 border-2 border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 shadow-md hover:shadow-lg transition-all font-medium"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI 实时输出弹框 */}
    </div>
  );
};

export const meta = {
  title: "智能内容生成工厂 Pro",
  description: "基于 AI 的智能报告生成系统，支持块级编辑和自定义图表",
  category: "产权",
  order: 100
};

export default AIContentFactoryPro;

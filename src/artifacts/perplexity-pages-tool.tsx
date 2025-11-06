import React, { useState, useEffect } from 'react';
import { FileText, Plus, Trash2, Edit3, Download, Share2, Settings, ChevronUp, ChevronDown, Loader2, BookOpen, Users, Briefcase, Search, Eye, Copy, Check, Globe, Lightbulb, X } from 'lucide-react';
import { complete, completeStream } from '@/lib/openrouter';
import MarkdownRenderer from '@/components/MarkdownRenderer';


// 编辑模态框组件
const EditModal = ({ isOpen, onClose, section, onSave, isGenerating }) => {
  const [content, setContent] = useState(section?.content || '');
  const [instruction, setInstruction] = useState('');
  const [mode, setMode] = useState('edit'); // 'edit' 或 'instruct'

  useEffect(() => {
    if (section) {
      setContent(section.content || '');
      setInstruction('');
    }
  }, [section]);

  if (!isOpen || !section) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">编辑段落: {section.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setMode('edit')}
              className={`px-4 py-2 rounded-lg ${mode === 'edit' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
            >
              直接编辑
            </button>
            <button
              onClick={() => setMode('instruct')}
              className={`px-4 py-2 rounded-lg ${mode === 'instruct' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
            >
              AI 重写
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {mode === 'edit' ? (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">编辑内容</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-80 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  placeholder="支持 Markdown 格式..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">预览效果</label>
                <div className="h-80 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <MarkdownRenderer content={content} />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                描述你想要的修改（AI 将根据指令重写内容）
              </label>
              <textarea
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例如：添加更多技术细节、简化语言、增加示例、改为对话风格..."
              />
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">当前内容预览：</p>
                <div className="max-h-40 overflow-y-auto">
                  <MarkdownRenderer content={content} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            取消
          </button>
          <button
            onClick={() => onSave(mode === 'edit' ? content : instruction, mode)}
            disabled={isGenerating || (mode === 'instruct' && !instruction.trim())}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>处理中...</span>
              </>
            ) : (
              <span>{mode === 'edit' ? '保存' : 'AI 重写'}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// 输入弹框组件
const InputModal = ({ isOpen, onClose, title, placeholder, defaultValue = '', onConfirm, confirmText = '确认' }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (value.trim()) {
      onConfirm(value.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoFocus
          />
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              取消
            </button>
            <button
              onClick={handleConfirm}
              disabled={!value.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 大纲编辑组件
const OutlineEditor = ({ isOpen, onClose, outline, onConfirm, isGenerating }) => {
  const [sections, setSections] = useState(outline || []);

  useEffect(() => {
    setSections(outline || []);
  }, [outline]);

  if (!isOpen) return null;

  const updateSectionTitle = (index, newTitle) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], title: newTitle };
    setSections(newSections);
  };

  const deleteSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const addSection = () => {
    setSections([...sections, { id: `section-${Date.now()}`, title: '新段落', content: '' }]);
  };

  const moveSection = (index, direction) => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= sections.length) return;
    
    const newSections = [...sections];
    [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
    setSections(newSections);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">确认文章大纲</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">您可以修改、删除或重新排序段落标题</p>
        </div>

        <div className="p-6 overflow-y-auto max-h-[50vh]">
          <div className="space-y-3">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center space-x-2 group">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => moveSection(index, 'up')}
                    disabled={index === 0}
                    className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => moveSection(index, 'down')}
                    disabled={index === sections.length - 1}
                    className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                
                <span className="text-sm text-gray-500 w-8">{index + 1}.</span>
                
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSectionTitle(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <button
                  onClick={() => deleteSection(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          
          <button
            onClick={addSection}
            className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 flex items-center justify-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>添加段落</span>
          </button>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            取消
          </button>
          <button
            onClick={() => onConfirm(sections)}
            disabled={isGenerating || sections.length === 0}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>生成中...</span>
              </>
            ) : (
              <span>开始生成内容</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const AIPages = () => {
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('general');
  const [tone, setTone] = useState('informative');
  const [sections, setSections] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sources, setSources] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [streamingSection, setStreamingSection] = useState(null);
  const [showOutlineEditor, setShowOutlineEditor] = useState(false);
  const [draftOutline, setDraftOutline] = useState([]);
  const [showInputModal, setShowInputModal] = useState(false);
  const [inputModalConfig, setInputModalConfig] = useState({});
  const [generatingOutline, setGeneratingOutline] = useState(false);

  const audienceOptions = [
    { value: 'general', label: '普通读者', icon: Users, desc: '面向广大公众的通俗易懂内容' },
    { value: 'expert', label: '专业人士', icon: Briefcase, desc: '面向专业领域专家的深度内容' },
    { value: 'student', label: '学生群体', icon: BookOpen, desc: '面向学习者的教育性内容' }
  ];

  const toneOptions = [
    { value: 'informative', label: '信息性', desc: '客观、事实导向的表述' },
    { value: 'conversational', label: '对话性', desc: '轻松、友好的交流方式' },
    { value: 'professional', label: '专业性', desc: '正式、严谨的商务表述' },
    { value: 'creative', label: '创意性', desc: '富有想象力和吸引力的表述' }
  ];

  // 调用 AI API 生成内容
  const callAIAPI = async (prompt) => {
    try {
      const response = await complete(prompt);
      return response;
    } catch (error) {
      console.error("Error calling AI API:", error);
      throw new Error("生成内容时出错，请稍后重试");
    }
  };

  // 调用流式 AI API
  const callAIAPIStream = async (prompt, onChunk) => {
    try {
      let fullContent = '';
      for await (const chunk of completeStream(prompt)) {
        fullContent += chunk;
        onChunk(fullContent);
      }
      return fullContent;
    } catch (error) {
      console.error("Error calling AI API:", error);
      throw new Error("生成内容时出错，请稍后重试");
    }
  };

  // 第一步：生成大纲
  const generateOutline = async () => {
    if (!topic.trim()) return;

    setGeneratingOutline(true);
    setStreamingContent('');
    
    try {
      const audienceDesc = audienceOptions.find(a => a.value === audience)?.desc || '';
      const toneDesc = toneOptions.find(t => t.value === tone)?.desc || '';

      const prompt = `请为主题"${topic}"创建一个文章大纲。

受众: ${audienceDesc}
语调: ${toneDesc}

要求：
1. 创建一个吸引人的文章标题
2. 生成5-8个逻辑清晰的段落标题
3. 段落标题要简洁明确，体现内容结构

请按以下格式返回（只返回标题和段落标题，不要包含具体内容）：

文章标题

1. 第一个段落标题
2. 第二个段落标题
3. 第三个段落标题
...`;

      let fullResponse = '';
      const response = await callAIAPIStream(prompt, (content) => {
        fullResponse = content;
        setStreamingContent(content);
      });
      
      // 解析大纲
      const lines = fullResponse.split('\n').filter(line => line.trim());
      const title = lines[0] || topic;
      const outlineSections = [];
      
      lines.slice(1).forEach((line, index) => {
        // 移除编号和空格
        const cleanLine = line.replace(/^\d+\.\s*/, '').trim();
        if (cleanLine) {
          outlineSections.push({
            id: `section-${index + 1}`,
            title: cleanLine,
            content: ''
          });
        }
      });
      
      setPageTitle(title);
      setDraftOutline(outlineSections);
      setShowOutlineEditor(true);
      
    } catch (error) {
      console.error("Outline generation error:", error);
      alert(error.message);
    } finally {
      setGeneratingOutline(false);
      setStreamingContent('');
    }
  };

  // 第二步：根据大纲生成内容
  const generateContent = async (confirmedOutline) => {
    setShowOutlineEditor(false);
    setSections(confirmedOutline);
    setIsGenerating(true);
    
    try {
      const audienceDesc = audienceOptions.find(a => a.value === audience)?.desc || '';
      const toneDesc = toneOptions.find(t => t.value === tone)?.desc || '';
      
      // 为每个段落生成内容
      for (let i = 0; i < confirmedOutline.length; i++) {
        const section = confirmedOutline[i];
        setStreamingSection(section.id);
        
        const prompt = `基于文章主题"${topic}"和整体大纲，为以下段落生成详细内容：

段落标题：${section.title}
段落位置：第${i + 1}个段落（共${confirmedOutline.length}个段落）
文章标题：${pageTitle}
受众：${audienceDesc}
语调：${toneDesc}

要求：
1. 生成300-500字的内容
2. 使用Markdown格式，包括粗体、斜体、列表等
3. 内容要与整体文章主题和结构保持一致
4. 确保内容有价值且吸引人

请直接返回Markdown格式的内容，不要任何额外的说明文字。`;
        
        const content = await callAIAPIStream(prompt, (chunk) => {
          setSections(prevSections => 
            prevSections.map(s => 
              s.id === section.id ? { ...s, content: chunk } : s
            )
          );
        });
        
        // 更新最终内容
        setSections(prevSections => 
          prevSections.map(s => 
            s.id === section.id ? { ...s, content: content.trim() } : s
          )
        );
      }
      
      // 生成来源
      const sourcesPrompt = `为文章"${pageTitle}"生成3-5个虚拟的参考来源。

返回格式：
来源标题 | URL | 简短描述

每行一个来源，使用 | 分隔。`;
      
      const sourcesResponse = await callAIAPI(sourcesPrompt);
      const sourceLines = sourcesResponse.split('\n').filter(line => line.includes('|'));
      const parsedSources = sourceLines.map(line => {
        const [title, url, description] = line.split('|').map(s => s.trim());
        return { title, url: url || 'https://example.com', description };
      }).filter(s => s.title);
      
      setSources(parsedSources);
      
    } catch (error) {
      console.error("Content generation error:", error);
      alert(error.message);
    } finally {
      setIsGenerating(false);
      setStreamingSection(null);
    }
  };

  // 添加新段落
  const addSection = () => {
    setInputModalConfig({
      title: '添加新段落',
      placeholder: '请输入新段落的主题',
      onConfirm: async (newSectionTitle) => {
        await addNewSection(newSectionTitle);
      }
    });
    setShowInputModal(true);
  };

  // 实际添加新段落的逻辑
  const addNewSection = async (newSectionTitle) => {

    setIsGenerating(true);
    
    // 创建新段落并添加到列表
    const newSection = {
      id: `section-${Date.now()}`,
      title: newSectionTitle,
      content: '',
      type: 'text'
    };
    setSections([...sections, newSection]);
    setStreamingSection(newSection.id);
    
    try {
      const audienceDesc = audienceOptions.find(a => a.value === audience)?.desc || '';
      const toneDesc = toneOptions.find(t => t.value === tone)?.desc || '';

      const prompt = `基于文章主题"${topic}"和整体内容背景，为段落主题"${newSectionTitle}"生成详细内容。

受众: ${audienceDesc}
语调: ${toneDesc}

要求：
1. 生成300-500字的内容
2. 使用Markdown格式，包括粗体、斜体、列表等
3. 内容要与整体文章主题保持一致
4. 确保内容有价值且吸引人

请直接返回Markdown格式的内容，不要用JSON格式。`;

      const content = await callAIAPIStream(prompt, (chunk) => {
        setSections(prevSections => 
          prevSections.map(s => 
            s.id === newSection.id ? { ...s, content: chunk } : s
          )
        );
      });
      
      // 最终更新内容
      setSections(prevSections => 
        prevSections.map(s => 
          s.id === newSection.id ? { ...s, content: content.trim() } : s
        )
      );
    } catch (error) {
      // 如果出错，删除空段落
      setSections(prevSections => prevSections.filter(s => s.id !== newSection.id));
      alert(error.message);
    } finally {
      setIsGenerating(false);
      setStreamingSection(null);
    }
  };

  // 保存编辑的段落
  const saveEditedSection = async (contentOrInstruction, mode) => {
    if (!editingSection) return;

    setIsGenerating(true);
    setStreamingSection(editingSection.id);
    
    try {
      let finalContent = contentOrInstruction;
      
      if (mode === 'instruct') {
        const audienceDesc = audienceOptions.find(a => a.value === audience)?.desc || '';
        const toneDesc = toneOptions.find(t => t.value === tone)?.desc || '';

        const prompt = `请根据以下指令重写段落内容：

原标题：${editingSection.title}
原内容：${editingSection.content}

修改指令：${contentOrInstruction}

文章主题：${topic}
受众：${audienceDesc}
语调：${toneDesc}

要求：
1. 根据指令修改内容，保持300-500字
2. 使用Markdown格式
3. 确保内容质量和相关性

请直接返回修改后的Markdown内容：`;

        // 实时更新内容
        finalContent = await callAIAPIStream(prompt, (chunk) => {
          setSections(prevSections => 
            prevSections.map(s => 
              s.id === editingSection.id ? { ...s, content: chunk } : s
            )
          );
        });
      }

      setSections(sections.map(s => 
        s.id === editingSection.id ? { ...s, content: finalContent.trim() } : s
      ));
      setEditingSection(null);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsGenerating(false);
      setStreamingSection(null);
    }
  };

  // 删除段落
  const deleteSectionById = (sectionId) => {
    setSections(sections.filter(s => s.id !== sectionId));
  };

  // 移动段落
  const moveSection = (sectionId, direction) => {
    const currentIndex = sections.findIndex(s => s.id === sectionId);
    if (currentIndex === -1) return;

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= sections.length) return;

    const newSections = [...sections];
    [newSections[currentIndex], newSections[newIndex]] = [newSections[newIndex], newSections[currentIndex]];
    setSections(newSections);
  };

  // 复制链接
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  // 导出功能
  const exportPage = (format = 'md') => {
    let content = '';
    let filename = `${pageTitle || topic}`;

    if (format === 'md') {
      content = `# ${pageTitle}\n\n${sections.map(section => 
        `## ${section.title}\n\n${section.content}\n\n`
      ).join('')}`;
      if (sources.length > 0) {
        content += '\n## 参考来源\n\n';
        content += sources.map(source => `- [${source.title}](${source.url}): ${source.description}`).join('\n');
      }
      filename += '.md';
    } else if (format === 'html') {
      content = `<!DOCTYPE html>
<html>
<head>
    <title>${pageTitle}</title>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; line-height: 1.6; }
        h1 { color: #1a202c; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
        h2 { color: #2d3748; margin-top: 32px; }
        h3 { color: #4a5568; }
        blockquote { border-left: 4px solid #3182ce; padding-left: 16px; margin: 16px 0; background: #f7fafc; }
        code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: 'SF Mono', Monaco, monospace; }
        ul, ol { padding-left: 24px; }
        li { margin: 8px 0; }
    </style>
</head>
<body>
    <h1>${pageTitle}</h1>
    ${sections.map(section => `<h2>${section.title}</h2><div>${section.content.replace(/\n/g, '<br>')}</div>`).join('')}
</body>
</html>`;
      filename += '.html';
    }
    
    const blob = new Blob([content], { type: format === 'html' ? 'text/html' : 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 过滤段落（搜索功能）
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI Pages 生成器</h1>
                <p className="text-sm text-gray-600">智能富文本内容创建工具</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {sections.length > 0 && (
                <>
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className={`p-2 rounded-lg transition-colors ${showPreview ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'}`}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={copyLink}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
                  </button>
                  <div className="relative group">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>导出</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <button
                        onClick={() => exportPage('md')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-t-lg"
                      >
                        导出 Markdown
                      </button>
                      <button
                        onClick={() => exportPage('html')}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-b-lg"
                      >
                        导出 HTML
                      </button>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>分享</span>
                  </button>
                </>
              )}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧控制面板 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">创建页面</h3>
                
                {/* 主题输入 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    页面主题
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="请输入要创建的页面主题..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* 设置选项 */}
                {showSettings && (
                  <div className="mb-4 space-y-4">
                    {/* 受众选择 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        目标受众
                      </label>
                      <div className="space-y-2">
                        {audienceOptions.map((option) => (
                          <label key={option.value} className="flex items-start space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                            <input
                              type="radio"
                              name="audience"
                              value={option.value}
                              checked={audience === option.value}
                              onChange={(e) => setAudience(e.target.value)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <option.icon className="w-4 h-4 text-gray-600" />
                                <span className="text-sm font-medium text-gray-900">{option.label}</span>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">{option.desc}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 语调选择 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        内容语调
                      </label>
                      <div className="space-y-2">
                        {toneOptions.map((option) => (
                          <label key={option.value} className="flex items-start space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                            <input
                              type="radio"
                              name="tone"
                              value={option.value}
                              checked={tone === option.value}
                              onChange={(e) => setTone(e.target.value)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <span className="text-sm font-medium text-gray-900">{option.label}</span>
                              <p className="text-xs text-gray-600 mt-1">{option.desc}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 生成按钮 */}
                <button
                  onClick={generateOutline}
                  disabled={!topic.trim() || generatingOutline || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {generatingOutline ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>生成大纲中...</span>
                    </>
                  ) : isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>生成内容中...</span>
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-4 h-4" />
                      <span>生成页面</span>
                    </>
                  )}
                </button>

                {/* 添加段落按钮 */}
                {sections.length > 0 && (
                  <button
                    onClick={addSection}
                    disabled={isGenerating}
                    className="w-full mt-3 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>添加段落</span>
                  </button>
                )}
              </div>

              {/* 搜索功能 */}
              {sections.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    搜索内容
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="搜索段落..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* 来源列表 */}
              {sources.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">参考来源</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {sources.map((source, index) => (
                      <div key={index} className="p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Globe className="w-3 h-3 text-gray-400" />
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-blue-600 hover:text-blue-800 truncate"
                          >
                            {source.title}
                          </a>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{source.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="lg:col-span-3">
            {/* 显示流式响应内容 */}
            {generatingOutline && streamingContent ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">正在生成文章大纲...</h3>
                </div>
                <div className="whitespace-pre-wrap font-mono text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                  {streamingContent}
                </div>
              </div>
            ) : sections.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">开始创建你的专业页面</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">输入一个主题，让AI帮你生成包含丰富格式的专业内容页面</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 max-w-md mx-auto">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Markdown 富文本支持</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>实时预览编辑</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>智能内容生成</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>多格式导出</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                {/* 页面标题 */}
                <div className="p-8 border-b border-gray-200">
                  <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                    {pageTitle || topic}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>受众: {audienceOptions.find(a => a.value === audience)?.label}</span>
                    <span>•</span>
                    <span>语调: {toneOptions.find(t => t.value === tone)?.label}</span>
                    <span>•</span>
                    <span>{sections.length} 个段落</span>
                    <span>•</span>
                    <span>{sources.length} 个来源</span>
                  </div>
                </div>

                {/* 段落列表 */}
                <div className="divide-y divide-gray-200">
                  {filteredSections.map((section, index) => (
                    <div key={section.id} className="p-8 group hover:bg-gray-50/50 transition-colors">
                      <div className="flex items-start justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 flex-1">
                          {section.title}
                        </h2>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => moveSection(section.id, 'up')}
                            disabled={index === 0}
                            className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
                            title="上移"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => moveSection(section.id, 'down')}
                            disabled={index === sections.length - 1}
                            className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
                            title="下移"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setEditingSection(section)}
                            className="p-1 hover:bg-gray-200 rounded"
                            title="编辑"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteSectionById(section.id)}
                            className="p-1 hover:bg-red-100 text-red-600 rounded"
                            title="删除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* 渲染Markdown内容 */}
                      {streamingSection === section.id && isGenerating ? (
                        <div className="relative">
                          <MarkdownRenderer content={section.content} />
                          {section.content && <span className="inline-block w-2 h-5 bg-blue-600 animate-pulse ml-1" />}
                        </div>
                      ) : (
                        <MarkdownRenderer content={section.content} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 编辑模态框 */}
      <EditModal
        isOpen={!!editingSection}
        onClose={() => setEditingSection(null)}
        section={editingSection}
        onSave={saveEditedSection}
        isGenerating={isGenerating}
      />
      
      {/* 输入弹框 */}
      <InputModal
        isOpen={showInputModal}
        onClose={() => setShowInputModal(false)}
        title={inputModalConfig.title}
        placeholder={inputModalConfig.placeholder}
        defaultValue={inputModalConfig.defaultValue}
        onConfirm={inputModalConfig.onConfirm}
        confirmText={inputModalConfig.confirmText}
      />
      
      {/* 大纲编辑器 */}
      <OutlineEditor
        isOpen={showOutlineEditor}
        onClose={() => setShowOutlineEditor(false)}
        outline={draftOutline}
        onConfirm={generateContent}
        isGenerating={isGenerating}
      />
    </div>
  );
};

export default AIPages;
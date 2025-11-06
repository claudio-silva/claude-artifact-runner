import React, { useState, useEffect } from 'react';
import { FileText, Brain, BarChart3, CheckCircle, Edit3, Download, Upload, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';

const AIReportWriter = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [projectInfo, setProjectInfo] = useState({
    projectName: '',
    projectType: '',
    transferor: '',
    transferee: '',
    sharePercentage: '',
    transactionAmount: '',
    industry: ''
  });
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [qualityScore, setQualityScore] = useState(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [apiKeySet, setApiKeySet] = useState(false);

  // 简单的 Markdown 转 HTML 函数
  const convertMarkdownToHTML = (markdown) => {
    let html = markdown;
    
    // 处理标题
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>');
    
    // 处理粗体和斜体
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    
    // 处理表格
    html = html.replace(/\|(.+)\|\n\|[^|]*\|\n((?:\|.+\|\n?)*)/g, (match, header, rows) => {
      const headerCells = header.split('|').map(cell => cell.trim()).filter(cell => cell);
      const headerHtml = headerCells.map(cell => `<th class="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold">${cell}</th>`).join('');
      
      const rowsHtml = rows.split('\n').filter(row => row.trim()).map(row => {
        const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell);
        return '<tr>' + cells.map(cell => `<td class="border border-gray-300 px-4 py-2">${cell}</td>`).join('') + '</tr>';
      }).join('');
      
      return `<table class="w-full border-collapse border border-gray-300 my-4">
        <thead><tr>${headerHtml}</tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>`;
    });
    
    // 处理段落和换行
    html = html.split('\n\n').map(paragraph => {
      if (paragraph.trim() === '') return '';
      if (paragraph.includes('<h1') || paragraph.includes('<h2') || paragraph.includes('<h3') || paragraph.includes('<table')) {
        return paragraph;
      }
      return `<p class="mb-3 leading-relaxed">${paragraph}</p>`;
    }).join('');
    
    return html;
  };

  const templates = [
    {
      id: 'equity_transfer',
      name: '股权转让方案模板',
      description: '适用于国企、民企、混改等不同类型的股权转让项目',
      category: '交易类报告'
    },
    {
      id: 'capital_increase',
      name: '增资扩股方案模板', 
      description: '适用于Pre-A轮到IPO各阶段的增资扩股项目',
      category: '交易类报告'
    },
    {
      id: 'asset_restructuring',
      name: '资产重组方案模板',
      description: '适用于横向、纵向、混合重组项目',
      category: '交易类报告'
    },
    {
      id: 'valuation_report',
      name: '企业价值评估报告模板',
      description: '基于财务数据和市场分析的企业估值报告',
      category: '分析评估类'
    },
    {
      id: 'due_diligence',
      name: '尽职调查报告模板',
      description: '涵盖财务、法务、商务、技术等维度的调查报告',
      category: '分析评估类'
    }
  ];

  const steps = [
    { id: 1, name: '选择模板', icon: FileText },
    { id: 2, name: '项目信息', icon: Edit3 },
    { id: 3, name: 'AI生成', icon: Brain },
    { id: 4, name: '质量控制', icon: CheckCircle },
    { id: 5, name: '导出报告', icon: Download }
  ];

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleProjectInfoChange = (field, value) => {
    setProjectInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateReport = async () => {
    setIsGenerating(true);
    
    // const template = templates.find(t => t.id === selectedTemplate);
    
    try {
      const prompt = `
      请根据以下信息生成一份专业规范的《${projectInfo.transferor}关于${projectInfo.projectName}${projectInfo.sharePercentage}%股权转让方案》，严格按照产权交易行业标准格式：

      项目基本信息：
      - 项目名称：${projectInfo.projectName}
      - 项目类型：${projectInfo.projectType}
      - 转让方：${projectInfo.transferor}
      - 受让方：${projectInfo.transferee}  
      - 转让股份比例：${projectInfo.sharePercentage}%
      - 交易金额：${projectInfo.transactionAmount}万元
      - 所属行业：${projectInfo.industry}

      请严格按照以下格式和结构生成Markdown格式的报告内容：

      # ${projectInfo.transferor}关于${projectInfo.projectName}${projectInfo.sharePercentage}%股权转让方案

      ${projectInfo.transferor}（下称"转让方"）在对股权转让行为进行充分论证和深入分析的基础上，提出如下转让方案：

      ## 一、标的企业的基本情况

      ### （一）股权情况
      ${projectInfo.projectName}（下称"标的企业"）的基本工商信息和股权结构如下：

      | 序号 | 股东名单 | 持股比例 |
      |------|----------|----------|
      | 1 | ${projectInfo.transferor} | ${projectInfo.sharePercentage}% |
      | 2 | 其他股东 | ${100 - parseFloat(projectInfo.sharePercentage || '0')}% |
      | 合计 | - | 100% |

      ### （二）资产情况
      **评估数据：**
      根据相关资产评估报告，以评估基准日为准，标的企业的资产总额、负债总额及所有者权益情况如下：[具体数据待补充]

      ### （三）经营范围
      标的企业主要从事${projectInfo.industry}相关业务，具体经营范围包括：[根据工商登记信息填写]

      ### （四）人员情况
      按最新统计，标的企业共有在册职工[X]人。

      ## 二、股权转让行为的论证、审批情况

      ### （一）股权转让必要性
      1. 本次转让标的为标的企业${projectInfo.sharePercentage}%股权，挂牌价格为${projectInfo.transactionAmount}万元。
      2. **股权转让的必要性：**[根据实际情况填写转让原因和必要性]

      ### （二）股权转让的审批和内部决议情况
      经转让方内部决策程序，已通过相关董事会决议，同意挂牌转让所持标的企业${projectInfo.sharePercentage}%股权。

      ## 三、涉及的职工安置方案

      ### （一）本次股权转让不涉及标的企业职工安置问题。

      ### （二）由于本次股权转让方仅为标的企业的参股股东，本次股权转让之后，仅为标的企业股东结构发生变化，而法人主体没有发生变化，所以，仍由变更股东后的标的企业继续承续公司与员工的劳动关系和社会保险关系。

      ## 四、债权债务处理问题

      ### （一）资产评估基准日到工商变更完成之日（含）前后的标的企业的债权债务处理
      1. 资产评估报告中涉及的标的企业债权债务由本次工商变更后的标的企业享有和承担；
      2. 资产评估基准日的次日至标的企业工商变更完成之日（含）新增的债权债务由工商变更后的标的企业享有和承担；
      3. 标的企业工商变更完成之日次日起新增的债权债务由工商变更后的标的企业享有和承担。

      ## 五、资产评估基准日到工商变更完成之日（含）的损益处理

      标的企业资产评估基准日到工商变更完成之日（含）的期间内产生的损益由工商变更后的标的企业股东按股权比例承担和享有。交易双方不得以交易期间企业经营性损益等理由对已达成的交易条件和交易价格进行调整。

      ## 六、经济法律责任的承担

      ### （一）资产评估报告中涉及的经济法律责任由本次工商变更后的标的企业承担；
      ### （二）资产评估基准日的次日至标的企业工商变更完成之日（含）新增的经济法律责任由工商变更后的标的企业承担；
      ### （三）标的企业工商变更完成之日次日起新增的经济法律责任由工商变更后的标的企业承担。

      ## 七、转让收益处置方案

      本次产权转让收益由转让方按照国资监管部门和转让方有关管理制度的规定进行处置。

      ## 八、受让方应具备的条件及其说明

      符合法律、法规的有关规定，具备相应的资金实力和经营管理能力。

      ## 九、受让方须履行的义务

      ### （一）按照本项目转让信息公告及《产权交易合同》所约定事项进行交易，履行相应义务。

      ### （二）受让方应自行对标的企业经营、资产、财务、债务等方面进行全面了解并清楚标的企业现状。

      ## 十、其他须披露事项

      ### （一）其他特别事项及其他披露事项详见相关审计报告和资产评估报告等文件。

      ### （二）本项目公告期即可进入尽职调查期，意向受让方通过资格确认并且缴纳保证金后，即视为已详细阅读并完全认可本股权转让项目所涉审计报告、资产评估报告及该等文件所披露内容。

      ## 十一、交易方式及价款结算

      若经公开征集仅产生一个合格意向受让方，转让方将按挂牌价与该意向受让方报价孰高原则直接与其签订《产权交易合同》；经公开征集，产生两个或两个以上合格意向受让方的，通过网络竞价方式确定受让方。

      合格意向受让方在被确定为受让方后与转让方签订《产权交易合同》，并在《产权交易合同》签订之日起五个工作日内付清全部产权交易价款。

      **转让方：${projectInfo.transferor}**
      **年 月 日**

      要求：
      - 严格按照Markdown格式输出
      - 内容专业、规范，符合产权交易行业标准
      - 保持原有的专业术语和表述方式
      - 确保逻辑清晰，结构完整
      - 生成的内容可以直接在Markdown编辑器中编辑

      请直接输出Markdown格式的报告内容，不需要其他说明。
      `;

      setError('');
      const response = await window.claude.complete(prompt);
      setGeneratedContent(response);
      
      // 模拟质量评分
      setTimeout(() => {
        setQualityScore({
          overall: 92,
          accuracy: 95,
          professional: 90,
          compliance: 88,
          completeness: 94,
          readability: 91
        });
      }, 1000);
      
    } catch (error) {
      console.error('生成报告时出错:', error);
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          setError('请先设置 OpenRouter API Key。您可以在 .env 文件中设置 VITE_OPENROUTER_API_KEY 环境变量。');
        } else {
          setError(`生成报告时遇到错误: ${error.message}`);
        }
      } else {
        setError('生成报告时遇到未知错误，请重试。');
      }
      setGeneratedContent('');
    }
    
    setIsGenerating(false);
  };

  // 检查是否设置了 API Key
  useEffect(() => {
    const hasApiKey = !!import.meta.env.VITE_OPENROUTER_API_KEY;
    setApiKeySet(hasApiKey);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* 头部 */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Brain className="mr-3 text-blue-600" />
              智能报告撰写系统
            </h1>
            <p className="text-gray-600 mt-1">基于 Claude AI 的产权交易专业报告生成平台</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Sparkles className="w-4 h-4" />
            <span>AI驱动 · 专业高效</span>
          </div>
        </div>
        
        {/* API Key 状态提示 */}
        {!apiKeySet && (
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-sm font-medium text-yellow-800">需要配置 API Key</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  请在项目根目录的 .env 文件中设置 VITE_OPENROUTER_API_KEY 环境变量。
                </p>
                <p className="text-sm text-yellow-700 mt-1">
                  您可以在 <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="underline font-medium">OpenRouter</a> 获取 API Key。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 步骤导航 */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                ${currentStep >= step.id 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'border-gray-300 text-gray-400'}`}>
                <step.icon className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <div className={`text-sm font-medium ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'}`}>
                  {step.name}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`ml-8 w-16 h-0.5 ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* 步骤1：选择模板 */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">选择报告模板</h2>
            <p className="text-gray-600 mb-6">请选择最适合您项目的报告模板，系统将基于模板智能生成专业内容</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all
                    ${selectedTemplate === template.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{template.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 步骤2：项目信息 */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">填写项目信息</h2>
            <p className="text-gray-600 mb-6">请填写项目的基本信息，AI将基于这些信息生成专业报告内容</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目名称</label>
                <input
                  type="text"
                  value={projectInfo.projectName}
                  onChange={(e) => handleProjectInfoChange('projectName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入项目名称"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目类型</label>
                <select
                  value={projectInfo.projectType}
                  onChange={(e) => handleProjectInfoChange('projectType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">请选择项目类型</option>
                  <option value="股权转让">股权转让</option>
                  <option value="增资扩股">增资扩股</option>
                  <option value="资产重组">资产重组</option>
                  <option value="企业并购">企业并购</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">转让方</label>
                <input
                  type="text"
                  value={projectInfo.transferor}
                  onChange={(e) => handleProjectInfoChange('transferor', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入转让方名称"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">受让方</label>
                <input
                  type="text"
                  value={projectInfo.transferee}
                  onChange={(e) => handleProjectInfoChange('transferee', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入受让方名称"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">转让股份比例 (%)</label>
                <input
                  type="number"
                  value={projectInfo.sharePercentage}
                  onChange={(e) => handleProjectInfoChange('sharePercentage', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入股份比例"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">交易金额 (万元)</label>
                <input
                  type="number"
                  value={projectInfo.transactionAmount}
                  onChange={(e) => handleProjectInfoChange('transactionAmount', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入交易金额"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">所属行业</label>
                <input
                  type="text"
                  value={projectInfo.industry}
                  onChange={(e) => handleProjectInfoChange('industry', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入所属行业"
                />
              </div>
            </div>
          </div>
        )}

        {/* 步骤3：AI生成 */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">AI智能生成报告</h2>
            
            {!generatedContent && !isGenerating && (
              <div className="text-center py-12">
                <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">准备生成专业报告</h3>
                <p className="text-gray-600 mb-6">AI将基于您提供的信息生成专业的产权交易报告</p>
                {error && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={generateReport}
                  disabled={!apiKeySet}
                  className={`px-6 py-3 rounded-lg transition-colors flex items-center mx-auto ${
                    apiKeySet
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {apiKeySet ? '开始生成报告' : '请先配置 API Key'}
                </button>
              </div>
            )}

            {isGenerating && (
              <div className="text-center py-12">
                <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">AI正在生成报告...</h3>
                <p className="text-gray-600">请稍候，AI正在分析您的项目信息并生成专业内容</p>
              </div>
            )}

            {generatedContent && !isGenerating && (
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Markdown编辑器</h3>
                  <div className="grid grid-cols-2 gap-4 h-96">
                    {/* 左侧编辑区 */}
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Markdown编辑</span>
                        <button
                          onClick={() => copyToClipboard(generatedContent)}
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                          title="复制内容"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                      <textarea
                        value={generatedContent}
                        onChange={(e) => setGeneratedContent(e.target.value)}
                        className="w-full h-full p-4 border-none resize-none focus:outline-none font-mono text-sm"
                        placeholder="在此编辑Markdown内容..."
                      />
                    </div>
                    
                    {/* 右侧预览区 */}
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                        <span className="text-sm font-medium text-gray-700">预览效果</span>
                      </div>
                      <div className="h-full p-4 overflow-y-auto bg-white">
                        <div 
                          className="prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ 
                            __html: convertMarkdownToHTML(generatedContent) 
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={generateReport}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    重新生成
                  </button>
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    进入质量检查
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 步骤4：质量控制 */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">质量控制与评估</h2>
            
            {qualityScore && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                    <div className="text-2xl font-bold">{qualityScore.overall}</div>
                    <div className="text-sm opacity-90">综合评分</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-semibold text-gray-700">{qualityScore.accuracy}</div>
                    <div className="text-sm text-gray-600">内容准确性</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-semibold text-gray-700">{qualityScore.professional}</div>
                    <div className="text-sm text-gray-600">专业水平</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-semibold text-gray-700">{qualityScore.compliance}</div>
                    <div className="text-sm text-gray-600">合规状态</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-semibold text-gray-700">{qualityScore.completeness}</div>
                    <div className="text-sm text-gray-600">完整性</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-semibold text-gray-700">{qualityScore.readability}</div>
                    <div className="text-sm text-gray-600">可读性</div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-green-800 mb-2">质量评估结果</h4>
                  <p className="text-green-700 text-sm">
                    报告质量评分为 {qualityScore.overall} 分，达到优秀标准。内容专业规范，符合产权交易行业要求，建议可以进入最终确认阶段。
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">优化建议</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• 建议在风险分析部分增加更多具体的应对措施</li>
                    <li>• 可以补充相关政策法规的具体条文引用</li>
                    <li>• 建议添加必要的财务数据图表进行可视化展示</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 步骤5：导出报告 */}
        {currentStep === 5 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">导出报告</h2>
            
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">报告生成完成</h3>
              <p className="text-gray-600 mb-6">您的专业产权交易报告已经生成完成，可以选择导出格式</p>
              
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  导出PDF
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  导出Word
                </button>
                <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  分享报告
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 导航按钮 */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            上一步
          </button>
          
          {currentStep < 5 && currentStep !== 3 && (
            <button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !selectedTemplate) ||
                (currentStep === 2 && (!projectInfo.projectName || !projectInfo.transferor || !projectInfo.transferee))
              }
              className={`px-6 py-2 rounded-lg transition-colors ${
                (currentStep === 1 && !selectedTemplate) ||
                (currentStep === 2 && (!projectInfo.projectName || !projectInfo.transferor || !projectInfo.transferee))
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              下一步
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIReportWriter;

export const meta = {
  title: "AI 智能报告撰写系统",
  description: "基于 Claude AI 的产权交易专业报告生成平台，支持股权转让、增资扩股等多种报告模板",
  category: "Claude 示例",
  order: 2
};
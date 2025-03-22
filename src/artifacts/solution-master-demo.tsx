import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const SolutionMasterDemo = () => {
  const [step, setStep] = useState(1);
  const [generatingStatus, setGeneratingStatus] = useState('idle');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [requirementInput, setRequirementInput] = useState('');
  
  // 模拟方案模板
  const templates = [
    { 
      id: 1, 
      name: '设备改造方案', 
      description: '适用于生产线设备技术改造项目',
      icon: '🏭',
      tags: ['设备改造', '自动化', '智能制造'],
    },
    { 
      id: 2, 
      name: '信息系统建设方案', 
      description: '企业级信息系统设计与实施方案',
      icon: '💻',
      tags: ['数字化', '信息系统', '企业应用'],
    },
    { 
      id: 3, 
      name: '网络安全解决方案', 
      description: '企业网络安全防护与管理方案',
      icon: '🔒',
      tags: ['安全', '防护', '合规'],
    },
    { 
      id: 4, 
      name: 'AI应用集成方案', 
      description: '人工智能技术在业务中的集成应用',
      icon: '🤖',
      tags: ['AI', '智能化', '大数据'],
    },
    { 
      id: 5, 
      name: '技术创新研究报告', 
      description: '新技术研究与应用可行性分析',
      icon: '🔬',
      tags: ['研究', '创新', '前沿技术'],
    },
  ];
  
  // 技术标签列表
  const techTags = [
    '大数据', '云计算', '人工智能', '物联网', '5G', '区块链', 
    '自动化', '智能制造', '网络安全', 'DevOps', '微服务', '容器化',
    '分布式系统', '边缘计算', '数据中台', '低代码平台'
  ];

  // 模拟生成的方案大纲
  const generatedOutline = {
    title: "智能工厂设备全面改造升级方案",
    version: "1.0",
    date: "2024-05-15",
    sections: [
      {
        title: "方案概述",
        subsections: [
          "背景与目标",
          "改造范围",
          "预期收益"
        ]
      },
      {
        title: "现状与问题分析",
        subsections: [
          "设备现状评估",
          "存在问题识别",
          "改造需求分析"
        ]
      },
      {
        title: "技术方案设计",
        subsections: [
          "整体架构设计",
          "自动化系统改造",
          "数据采集与监控系统",
          "工业互联网平台集成"
        ]
      },
      {
        title: "实施与部署计划",
        subsections: [
          "实施阶段划分",
          "部署方案与步骤",
          "系统联调与测试"
        ]
      },
      {
        title: "风险与应对措施",
        subsections: [
          "技术风险分析",
          "进度风险分析",
          "应对策略"
        ]
      },
      {
        title: "投资与收益分析",
        subsections: [
          "投资预算",
          "收益测算",
          "投资回报周期"
        ]
      }
    ]
  };

  // 模拟生成的内容 - 背景与目标部分
  const sampleContent = `
# 1. 方案概述

## 1.1 背景与目标

本项目旨在通过对中通南方七分公司现有生产线设备进行全面技术改造和升级，实现生产过程的智能化、自动化和数字化，提升生产效率和产品质量，降低运营成本，增强企业市场竞争力。

### 项目背景

中通南方七分公司现有设备系统存在以下问题：
- 设备老旧，故障率高，维护成本逐年上升
- 自动化水平不足，人工干预环节较多
- 缺乏实时数据采集和分析能力，难以实现精细化管理
- 能源消耗高，环保压力大

在国家"智能制造2025"战略和企业数字化转型的大背景下，公司决定启动此次设备改造项目，引入先进的智能制造技术和理念，打造智能工厂示范线。

### 项目目标

1. **自动化水平提升**：关键生产环节自动化率达到95%以上，减少人工干预
2. **生产效率提高**：生产线整体效率(OEE)提升30%，单位产品生产周期缩短25%
3. **质量管控强化**：产品一次合格率提升至99.5%，质量波动降低50%
4. **能耗降低**：单位产品能耗降低20%，废品率降低15%
5. **数据驱动决策**：建立完整的数据采集分析体系，实现设备运行状态可视化和生产过程可追溯
6. **管理智能化**：引入AI辅助决策系统，实现预测性维护和智能排产

通过本项目的实施，将使公司在同行业中确立技术领先优势，为后续的数字化转型打下坚实基础。
`;

  // 模拟生成的完整文档
  const generateSolution = () => {
    setGeneratingStatus('generating');
    
    // 模拟API调用延迟
    setTimeout(() => {
      setGeneratingStatus('completed');
      setStep(3);
    }, 3000);
  };
  
  // 处理切换步骤
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  // 模板选择
  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
  };

  // 渲染步骤导航
  const renderStepNav = () => {
    return (
      <div className="flex items-center mb-8">
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div 
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                s === step 
                  ? 'border-blue-600 bg-blue-600 text-white' 
                  : s < step 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-gray-300 text-gray-500'
              }`}
            >
              {s < step ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                s
              )}
            </div>
            {s < 3 && (
              <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  // 渲染步骤内容
  const renderStepContent = () => {
    switch(step) {
      case 1:
        return renderTemplateSelection();
      case 2:
        return renderRequirementInput();
      case 3:
        return renderGeneratedResult();
      default:
        return null;
    }
  };
  
  // 步骤1：模板选择
  const renderTemplateSelection = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">选择方案模板</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {templates.map((template) => (
            <motion.div
              key={template.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`border rounded-lg p-4 cursor-pointer ${
                selectedTemplate?.id === template.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleSelectTemplate(template)}
            >
              <div className="flex items-start">
                <div className="text-3xl mr-3">{template.icon}</div>
                <div>
                  <h4 className="font-medium">{template.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                  <div className="flex flex-wrap mt-2">
                    {template.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-between mt-8">
          <div></div>
          <button
            className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${!selectedTemplate ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={!selectedTemplate}
            onClick={handleNextStep}
          >
            下一步
          </button>
        </div>
      </div>
    );
  };
  
  // 步骤2：需求输入
  const renderRequirementInput = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">输入项目需求</h3>
        
        <div className="mb-6">
          <h4 className="font-medium mb-2">选定模板</h4>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center">
            <div className="text-2xl mr-3">{selectedTemplate?.icon}</div>
            <div>
              <p className="font-medium">{selectedTemplate?.name}</p>
              <p className="text-sm text-gray-600">{selectedTemplate?.description}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">项目需求描述</label>
          <textarea
            className="w-full h-40 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请详细描述您的项目需求，包括背景、目标、期望效果等..."
            value={requirementInput}
            onChange={(e) => setRequirementInput(e.target.value)}
          ></textarea>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">选择相关技术标签</h4>
          <div className="flex flex-wrap">
            {techTags.map((tag, idx) => (
              <div 
                key={idx}
                className="bg-gray-100 hover:bg-blue-50 border border-gray-300 hover:border-blue-300 rounded-lg px-3 py-1 text-sm mr-2 mb-2 cursor-pointer"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <button
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
            onClick={handlePrevStep}
          >
            上一步
          </button>
          <button
            className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${!requirementInput.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={!requirementInput.trim()}
            onClick={generateSolution}
          >
            生成方案
          </button>
        </div>
      </div>
    );
  };
  
  // 步骤3：生成结果展示
  const renderGeneratedResult = () => {
    if (generatingStatus === 'generating') {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium text-gray-700">正在生成方案...</p>
          <p className="text-sm text-gray-500 mt-2">DeepSeek大模型正在根据您的需求创建专业方案</p>
        </div>
      );
    }
    
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">生成的方案</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
              导出Word
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
              导出PDF
            </button>
          </div>
        </div>
        
        <Tabs.Root defaultValue="preview" className="w-full">
          <Tabs.List className="flex border-b border-gray-200 mb-4">
            <Tabs.Trigger 
              value="preview" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              预览
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="outline" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              大纲
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="edit" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              编辑
            </Tabs.Trigger>
          </Tabs.List>
          
          <Tabs.Content value="preview" className="border border-gray-200 rounded-lg p-4">
            <div className="mb-6 text-center py-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold">{generatedOutline.title}</h1>
              <p className="text-gray-500 mt-2">版本 {generatedOutline.version} · {generatedOutline.date}</p>
            </div>
            
            <ScrollArea.Root className="h-[400px] overflow-hidden">
              <ScrollArea.Viewport className="w-full h-full">
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: sampleContent.replace(/\n/g, '<br />') }} />
                  <div className="text-center py-4 text-gray-500">— 方案预览（部分内容） —</div>
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-gray-100 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </Tabs.Content>
          
          <Tabs.Content value="outline" className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">{generatedOutline.title}</h2>
            <div className="space-y-4">
              {generatedOutline.sections.map((section, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">{`${idx + 1}. ${section.title}`}</h3>
                  <ul className="mt-2 space-y-1">
                    {section.subsections.map((subsection, subIdx) => (
                      <li key={subIdx} className="text-gray-700">
                        {`${idx + 1}.${subIdx + 1} ${subsection}`}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Tabs.Content>
          
          <Tabs.Content value="edit" className="border border-gray-200 rounded-lg">
            <div className="flex h-[500px]">
              <div className="w-64 border-r border-gray-200 p-3">
                <div className="font-medium mb-2 text-sm text-gray-500">目录</div>
                <div className="space-y-1">
                  {generatedOutline.sections.map((section, idx) => (
                    <details key={idx} className="group" open={idx === 0}>
                      <summary className="flex items-center cursor-pointer py-1 text-gray-800 hover:bg-gray-100 rounded px-2">
                        <span className="font-medium">{`${idx + 1}. ${section.title}`}</span>
                      </summary>
                      <ul className="pl-3 mt-1 space-y-1">
                        {section.subsections.map((subsection, subIdx) => (
                          <li key={subIdx} className={`text-sm py-1 px-2 rounded hover:bg-gray-100 cursor-pointer ${idx === 0 && subIdx === 0 ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}>
                            {`${idx + 1}.${subIdx + 1} ${subsection}`}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
              <div className="flex-1 p-4">
                <div className="mb-3 flex">
                  <div className="flex space-x-1">
                    {['B', 'I', 'U'].map((btn, i) => (
                      <button key={i} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-sm font-medium">
                        {btn}
                      </button>
                    ))}
                  </div>
                  <Separator.Root className="mx-2 bg-gray-300 w-[1px] h-8" orientation="vertical" />
                  <div className="flex space-x-1">
                    <button className="px-3 h-8 flex items-center border border-gray-300 rounded text-sm">
                      正文
                    </button>
                    <button className="px-3 h-8 flex items-center border border-gray-300 rounded text-sm">
                      标题1
                    </button>
                  </div>
                </div>
                <textarea
                  className="w-full h-[420px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  defaultValue={sampleContent}
                ></textarea>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
        
        <div className="flex justify-between mt-8">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                重新生成
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
                <Dialog.Title className="m-0 text-xl font-semibold">重新生成方案</Dialog.Title>
                <Dialog.Description className="mt-2 text-gray-600">
                  确定要重新生成方案吗？当前生成的内容将被替换。
                </Dialog.Description>
                <div className="mt-6 flex justify-end gap-4">
                  <Dialog.Close asChild>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100">
                      取消
                    </button>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => setStep(2)}
                    >
                      确认
                    </button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            完成
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
        <h2 className="text-2xl font-bold text-white">《方案大师》- 技术方案智能生成平台</h2>
        <p className="text-indigo-100 mt-2">基于DeepSeek大模型的专业技术方案自动生成工具</p>
      </div>

      <div className="p-6">
        {renderStepNav()}
        {renderStepContent()}
      </div>
    </motion.div>
  );
};

export default SolutionMasterDemo; 
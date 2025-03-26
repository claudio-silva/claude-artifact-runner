import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import * as Progress from '@radix-ui/react-progress';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import {
  ResponsiveContainer, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip
} from 'recharts';

const IntelligentBiddingSystem = () => {
  const [activeTab, setActiveTab] = useState('generate');
  const [selectedTemplate, setSelectedTemplate] = useState('政府信息化项目');
  const [generatingStatus, setGeneratingStatus] = useState('completed');
  const [editMode, setEditMode] = useState(false);
  const [score, setScore] = useState(88);
  
  // 评分数据
  const scoreData = [
    { category: '完整性', value: 90, fullMark: 100 },
    { category: '规范性', value: 85, fullMark: 100 },
    { category: '专业性', value: 92, fullMark: 100 },
    { category: '可行性', value: 78, fullMark: 100 },
    { category: '创新性', value: 80, fullMark: 100 },
    { category: '竞争力', value: 88, fullMark: 100 },
  ];
  
  // 标书模板
  const templates = [
    {
      id: 1,
      name: '政府信息化项目',
      description: '适用于政府部门信息化系统建设项目',
      usageCount: 325,
      avgScore: 92,
    },
    {
      id: 2,
      name: '企业设备采购',
      description: '企业硬件设备采购类项目标书模板',
      usageCount: 278,
      avgScore: 88,
    },
    {
      id: 3,
      name: '智慧城市建设',
      description: '智慧城市、智慧社区等建设项目',
      usageCount: 156,
      avgScore: 85,
    },
    {
      id: 4,
      name: '软件系统开发',
      description: '各类软件系统研发项目',
      usageCount: 412,
      avgScore: 90,
    },
  ];
  
  // 样例标书内容
  const sampleContent = `
# 项目技术方案

## 1. 项目概述

### 1.1 项目背景
智慧城市社区管理系统是中通南方七分公司响应"数字中国"和"智慧城市"国家战略，结合公司技术优势打造的社区智能化解决方案。本项目旨在通过信息化和智能化手段，提升社区管理效率，改善居民生活体验，构建安全、便捷、智能的现代化社区环境。

### 1.2 项目目标
1. 建设统一的社区管理信息平台，实现社区事务高效管理
2. 提供智能化便民服务，提升居民生活品质
3. 构建社区安防监控体系，保障社区安全
4. 实现数据互联互通，为社区治理提供决策支持

## 2. 系统架构设计

### 2.1 总体架构
本系统采用"云-边-端"三层架构设计：
- 云端：部署核心业务系统和数据中心
- 边缘层：部署于社区的边缘计算单元
- 终端层：各类智能终端设备和用户应用

### 2.2 功能模块
系统主要包含以下功能模块：
- 居民信息管理模块
- 智能门禁管理模块
- 社区安防监控模块
- 物业管理模块
- 智能停车管理模块
- 社区活动管理模块
- 数据分析决策模块

## 3. 核心技术方案

### 3.1 人工智能技术应用
系统将引入DeepSeek大语言模型作为核心智能引擎，结合计算机视觉技术实现：
- 智能人脸识别
- 异常行为检测
- 智能客服服务
- 社区舆情分析

### 3.2 物联网技术应用
采用NB-IoT、LoRa等物联网技术，结合5G通信网络，实现：
- 社区环境感知
- 智能设备互联
- 能源使用监测
- 智能家居控制
`;

  // 优化建议
  const optimizationSuggestions = [
    {
      section: "2.1 总体架构",
      suggestion: "建议增加系统部署架构图，直观展示三层架构的组成和关系。",
      severity: "medium",
    },
    {
      section: "3.1 人工智能技术应用",
      suggestion: "DeepSeek模型应用部分过于简略，建议补充具体的模型参数、应用场景和技术优势。",
      severity: "high",
    },
    {
      section: "全文",
      suggestion: "技术创新点体现不足，建议增加与同类解决方案的对比分析。",
      severity: "medium",
    },
    {
      section: "3.2 物联网技术应用",
      suggestion: "物联网部分应明确各类传感器的型号、数量和部署位置。",
      severity: "low",
    },
  ];

  // 触发生成
  const handleGenerate = () => {
    setGeneratingStatus('generating');
    
    // 模拟生成过程
    setTimeout(() => {
      setGeneratingStatus('completed');
    }, 3000);
  };
  
  // 辅助函数 - 渲染优化建议标签
  const renderSeverityBadge = (severity) => {
    const colors = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-green-100 text-green-800 border-green-200',
    };
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full border ${colors[severity]}`}>
        {severity === 'high' ? '高优先级' : severity === 'medium' ? '中优先级' : '低优先级'}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6">
        <h2 className="text-2xl font-bold text-white">《智标》- 技术标书智能辅助系统</h2>
        <p className="text-cyan-100 mt-2">基于DeepSeek大模型的投标文档智能生成与优化平台</p>
      </div>

      <div className="p-6">
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Tabs.List className="flex border-b border-gray-200 mb-6">
            <Tabs.Trigger 
              value="generate" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 border-b-2 border-transparent data-[state=active]:border-cyan-600 data-[state=active]:text-cyan-600"
            >
              智能生成
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="optimize" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 border-b-2 border-transparent data-[state=active]:border-cyan-600 data-[state=active]:text-cyan-600"
            >
              评分优化
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="templates" 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 border-b-2 border-transparent data-[state=active]:border-cyan-600 data-[state=active]:text-cyan-600"
            >
              模板库
            </Tabs.Trigger>
          </Tabs.List>

          {/* 智能生成标签页 */}
          <Tabs.Content value="generate" className="space-y-6">
            {generatingStatus === 'generating' ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium text-gray-700">正在生成标书内容...</p>
                <p className="text-sm text-gray-500 mt-2">DeepSeek大模型正在为您创建专业的技术标书</p>
                
                <div className="w-full max-w-md mt-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>智能分析需求</span>
                    <span>100%</span>
                  </div>
                  <Progress.Root className="h-2 w-full overflow-hidden rounded-full bg-gray-200" value={100}>
                    <Progress.Indicator 
                      className="h-full bg-cyan-600 w-full transition-all duration-500"
                      style={{ transform: `translateX(-0%)` }}
                    />
                  </Progress.Root>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-1 mt-4">
                    <span>生成技术方案</span>
                    <span>75%</span>
                  </div>
                  <Progress.Root className="h-2 w-full overflow-hidden rounded-full bg-gray-200" value={75}>
                    <Progress.Indicator 
                      className="h-full bg-cyan-600 transition-all duration-500"
                      style={{ transform: `translateX(-25%)` }}
                    />
                  </Progress.Root>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-1 mt-4">
                    <span>优化内容结构</span>
                    <span>40%</span>
                  </div>
                  <Progress.Root className="h-2 w-full overflow-hidden rounded-full bg-gray-200" value={40}>
                    <Progress.Indicator 
                      className="h-full bg-cyan-600 transition-all duration-500"
                      style={{ transform: `translateX(-60%)` }}
                    />
                  </Progress.Root>
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="font-medium text-gray-700 mb-2">项目需求描述</h3>
                    <textarea
                      className="w-full h-40 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="请输入项目需求，包括项目背景、目标、功能需求、技术要求等..."
                      defaultValue="需要开发一套智慧城市社区管理系统，包含居民信息管理、智能门禁、社区安防监控、物业管理、智能停车等功能模块。希望能够利用人工智能和物联网技术，打造智能化社区解决方案。"
                    ></textarea>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">标书类型与配置</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">标书类型</label>
                        <select 
                          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          value={selectedTemplate}
                          onChange={(e) => setSelectedTemplate(e.target.value)}
                        >
                          <option value="政府信息化项目">政府信息化项目</option>
                          <option value="企业设备采购">企业设备采购</option>
                          <option value="智慧城市建设">智慧城市建设</option>
                          <option value="软件系统开发">软件系统开发</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">技术水平定位</label>
                        <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                          <option>行业领先</option>
                          <option>技术成熟</option>
                          <option>经济实用</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">文档详细程度</label>
                        <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                          <option>非常详细</option>
                          <option>标准详细</option>
                          <option>概要描述</option>
                        </select>
                      </div>
                      
                      <div className="pt-2">
                        <button
                          className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
                          onClick={handleGenerate}
                        >
                          智能生成标书
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-medium text-gray-700">生成的标书内容</h3>
                    <div className="flex space-x-2">
                      <button 
                        className={`px-3 py-1 text-sm rounded-lg ${editMode ? 'bg-cyan-600 text-white' : 'border border-gray-300 text-gray-600'}`}
                        onClick={() => setEditMode(!editMode)}
                      >
                        {editMode ? '保存编辑' : '编辑内容'}
                      </button>
                      <button className="px-3 py-1 border border-gray-300 text-gray-600 text-sm rounded-lg">
                        导出文档
                      </button>
                    </div>
                  </div>
                  
                  <ScrollArea.Root className="h-[400px] overflow-hidden">
                    <ScrollArea.Viewport className="w-full h-full">
                      <div className="p-4">
                        {editMode ? (
                          <textarea
                            className="w-full h-full min-h-[360px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            defaultValue={sampleContent}
                          ></textarea>
                        ) : (
                          <div className="prose max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: sampleContent.replace(/\n/g, '<br />') }} />
                          </div>
                        )}
                      </div>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar
                      className="flex select-none touch-none p-0.5 bg-gray-100 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                      orientation="vertical"
                    >
                      <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                    </ScrollArea.Scrollbar>
                  </ScrollArea.Root>
                </div>
              </div>
            )}
          </Tabs.Content>

          {/* 评分优化标签页 */}
          <Tabs.Content value="optimize" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">标书评分</h3>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full border-8 border-cyan-100 flex items-center justify-center mb-4">
                    <div className="text-3xl font-bold text-cyan-600">{score}</div>
                  </div>
                  <p className="text-gray-500 text-sm">满分 100</p>
                  
                  <div className="w-full mt-6 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">完整性</span>
                        <span className="font-medium">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">专业性</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">可行性</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">评分维度分析</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <RadarChart outerRadius={90} data={scoreData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="评分" dataKey="value" stroke="#0891b2" fill="#0891b2" fillOpacity={0.5} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-4">竞争力分析</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-600 mr-2"></div>
                    <span className="text-sm text-gray-600">本标书得分</span>
                    <span className="text-sm font-medium ml-auto">88分</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-gray-600">行业平均分</span>
                    <span className="text-sm font-medium ml-auto">76分</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">最高中标分</span>
                    <span className="text-sm font-medium ml-auto">92分</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                    <span className="text-sm text-gray-600">最低中标分</span>
                    <span className="text-sm font-medium ml-auto">82分</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">中标概率预测</h4>
                  <div className="flex items-end">
                    <div className="text-3xl font-bold text-cyan-600">76%</div>
                    <div className="text-sm text-green-500 ml-2">↑12%</div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">较优化前提升了12个百分点</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-medium text-gray-700">优化建议</h3>
              </div>
              
              <div className="p-4">
                <div className="space-y-4">
                  {optimizationSuggestions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 border rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            <span className="text-cyan-600">{item.section}</span> - 优化建议
                          </h4>
                        </div>
                        {renderSeverityBadge(item.severity)}
                      </div>
                      <p className="text-gray-600">{item.suggestion}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                    一键应用优化建议
                  </button>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* 模板库标签页 */}
          <Tabs.Content value="templates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="border rounded-lg p-4 cursor-pointer hover:border-cyan-500 hover:bg-cyan-50"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-gray-800">{template.name}</h3>
                    <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">
                      平均得分 {template.avgScore}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>已使用 {template.usageCount} 次</span>
                    <button className="text-cyan-600 hover:text-cyan-800">
                      查看示例
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-4">高分标书案例分析</h3>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:border-cyan-500 hover:bg-cyan-50 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">智慧交通综合管理平台建设项目</h4>
                      <p className="text-gray-500 text-sm mt-1">中标金额: 5,680万元</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      得分 96
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <p>中标关键点：技术方案创新性高，系统架构设计合理，响应需求细致全面</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:border-cyan-500 hover:bg-cyan-50 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">县级融媒体中心建设项目</h4>
                      <p className="text-gray-500 text-sm mt-1">中标金额: 1,280万元</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      得分 94
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <p>中标关键点：实施方案详细可行，技术指标超出要求，提供了详尽的运维方案</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:border-cyan-500 hover:bg-cyan-50 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">智慧校园综合管理系统</h4>
                      <p className="text-gray-500 text-sm mt-1">中标金额: 895万元</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      得分 92
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <p>中标关键点：安全性设计突出，可扩展性强，提供了详细的现场测试方案</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-cyan-600 hover:text-cyan-800 text-sm">
                  查看更多案例 →
                </button>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </motion.div>
  );
};

export default IntelligentBiddingSystem; 
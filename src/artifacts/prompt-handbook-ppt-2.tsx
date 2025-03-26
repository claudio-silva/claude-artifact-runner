import React, { useState } from 'react';

const PromptHandbookPPT = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToNextSlide = () => {
    if (currentSlide < 9) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  // 公司品牌色
  const brandColors = {
    primary: 'bg-blue-600',
    secondary: 'bg-blue-100',
    accent: 'bg-yellow-500',
    text: 'text-blue-800',
    lightText: 'text-blue-600',
  };
  
  // PPT幻灯片数组
  const slides = [
    // 幻灯片1: 封面
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="absolute top-4 right-4 opacity-70">
        <div className="text-sm text-gray-500">中国通信服务</div>
      </div>
      
      <div className="mb-6">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-blue-800 mb-3">Prompt实践手册</h1>
      <h2 className="text-xl text-blue-600 mb-10">AI交互效能提升指南</h2>
      <p className="text-lg text-gray-700 italic mb-12">让AI成为工作效率的倍增器</p>
      
      <div className="mt-auto pt-8 border-t border-blue-200 w-full">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">中通南方-洪浩东</div>
          <div className="text-sm text-gray-500">2025年3月</div>
        </div>
      </div>
    </div>,
    
    // 幻灯片2: 背景与痛点
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">AI时代的沟通挑战</h2>
      
      <div className="flex mb-6">
        <div className="w-1/2 pr-4">
          <div className="mb-6">
            <h3 className="font-bold text-blue-700 mb-2">常见问题</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>模糊不清的提示词导致无效输出</li>
              <li>缺乏系统化的AI交互方法论</li>
              <li>重复修改提问浪费大量时间</li>
              <li>无法获取符合企业需求的专业输出</li>
            </ul>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="font-bold text-red-700 mb-1">效率损失</p>
            <p className="text-gray-700">员工与AI交互时，<span className="font-bold">50%</span>的提问需要多次修改，平均每次任务浪费<span className="font-bold">15-30分钟</span></p>
          </div>
        </div>
        
        <div className="w-1/2 pl-4">
          <div className="bg-gray-100 rounded-lg p-4 mb-4 h-48 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-2 left-2 p-2 bg-white rounded-lg shadow-sm">
              <div className="text-xs text-gray-500">低效交互示例</div>
            </div>
            
            <div className="space-y-3 w-full px-3">
              <div className="bg-blue-100 rounded-lg p-2 text-sm text-gray-700">
                分析数据并给我结果
              </div>
              <div className="bg-gray-200 rounded-lg p-2 text-sm text-gray-700">
                您需要分析什么数据？请提供更多信息。
              </div>
              <div className="bg-blue-100 rounded-lg p-2 text-sm text-gray-700">
                销售数据
              </div>
              <div className="bg-gray-200 rounded-lg p-2 text-sm text-gray-700">
                您需要哪方面的销售数据分析？时间范围？重点关注的指标？
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="font-bold text-yellow-700 mb-1">需求痛点</p>
            <p className="text-gray-700">企业缺乏一套标准化的AI交互体系，导致资源利用效率低下</p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-4 text-center">
        <p className="text-blue-700 font-semibold">如何系统化提升AI交互效率，成为当务之急</p>
      </div>
    </div>,
    
    // 幻灯片3: 手册概述
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">系统化的AI交互解决方案</h2>
      
      <div className="flex space-x-6 mb-6">
        <div className="w-1/2">
          <div className="bg-blue-50 rounded-lg p-4 h-64 flex flex-col">
            <h3 className="font-bold text-blue-700 mb-3">《Prompt实践手册》网站架构</h3>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex items-center p-2 bg-white rounded mb-2 border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">基础概念</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded mb-2 border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">设计技巧</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded mb-2 border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">优化方法</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded mb-2 border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">高级技巧</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">框架应用</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-1/2">
          <div className="p-4 bg-blue-50 rounded-lg mb-4">
            <h3 className="font-bold text-blue-700 mb-3">设计理念</h3>
            <p className="text-gray-700 mb-3">全流程指导：从思维模式到实践应用</p>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <div className="w-28 p-2 bg-blue-100 rounded text-center text-sm font-medium">思维模式</div>
                <div className="w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-28 p-2 bg-blue-100 rounded text-center text-sm font-medium">表达技巧</div>
                <div className="w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-28 p-2 bg-blue-100 rounded text-center text-sm font-medium">实践应用</div>
              </div>
            </div>
          </div>
          
          <div className="p-5 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-700 mb-3">手册核心价值</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>系统化方法论，而非零散技巧</li>
              <li>针对企业场景的实用案例</li>
              <li>提供可复制的框架和模板</li>
              <li>结合通信行业专业知识</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mx-auto mt-auto text-center p-3 bg-blue-100 rounded-lg max-w-lg">
        <p className="text-blue-800 font-semibold">从"怎么说"到"为什么这么说"的系统化提升</p>
      </div>
    </div>,
    
    // 幻灯片4: 基础应用示例
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">日常工作的Prompt优化案例</h2>
      
      <div className="flex space-x-8 mb-6">
        <div className="w-2/5">
          <h3 className="font-bold text-blue-700 mb-4">模糊需求转精准表述</h3>
          
          <div className="mb-6">
            <div className="mb-2">
              <span className="inline-block bg-red-100 text-red-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">优化前</span>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200 mb-4">
              <p className="text-gray-700">分析销售数据</p>
            </div>
            
            <div className="mb-2">
              <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">优化后</span>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-gray-700 text-sm">请分析2024年Q1销售数据，重点关注：<br/>
              1. 各地区销售分布及环比<br/>
              2. 重点产品表现与同比增长<br/>
              3. 异常波动及可能原因<br/><br/>
              输出要求：<br/>
              - 300字分析总结<br/>
              - 包含最重要的2个数据图表<br/>
              - 提供3条行动建议</p>
            </div>
          </div>
        </div>
        
        <div className="w-3/5">
          <h3 className="font-bold text-blue-700 mb-4">效果对比</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-700">优化前输出</h4>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">质量评分：40%</span>
              </div>
              <div className="text-sm text-gray-600 h-48 overflow-y-auto p-2 bg-white rounded">
                <p>根据销售数据分析，公司的销售情况总体表现良好。销售额有所增长，但部分地区和产品存在波动。建议关注销售策略的优化，加强市场推广，提升产品竞争力。</p>
                <p className="mt-2 text-red-500 italic text-xs">（内容笼统，没有具体数据支撑，无法指导决策）</p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-700">优化后输出</h4>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">质量评分：95%</span>
              </div>
              <div className="text-sm text-gray-600 h-48 overflow-y-auto p-2 bg-white rounded">
                <p>2024年Q1销售分析概要：</p>
                <p>总销售额达￥1,240万，环比增长12.5%，同比增长18.3%。华南地区表现最佳，占比38%，环比增长15.2%；华东地区增速放缓，环比仅增3.1%，需关注。</p>
                <p>产品线方面，网络设备类产品同比增长32%，成为增长引擎；传统通信服务环比下降5.2%，主要受广州市场竞争加剧影响。</p>
                <p>异常波动：3月北方区域销售突增26%，分析显示与新签政企大客户项目相关。</p>
                <p className="mt-2 font-semibold">行动建议：</p>
                <ol className="list-decimal pl-5">
                  <li>华东区域进行客户深度回访，了解增长放缓原因</li>
                  <li>加大网络设备类产品营销投入，扩大领先优势</li>
                  <li>传统通信服务考虑价格策略调整，应对广州市场竞争</li>
                </ol>
                <p className="mt-2 text-green-500 italic text-xs">（内容详实，数据具体，有明确建议，可直接指导决策）</p>
              </div>
            </div>
            
            <div className="col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">量化提升效果</h4>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">67%</div>
                  <div className="text-sm text-gray-600">输出质量提升</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">75%</div>
                  <div className="text-sm text-gray-600">修改次数减少</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">83%</div>
                  <div className="text-sm text-gray-600">用户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    
    // 幻灯片5: 高级应用示例
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">复杂业务场景的Prompt技巧</h2>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-blue-700 mb-2">角色设定技巧</h3>
          <p className="text-sm text-gray-700 mb-3">让AI扮演特定角色，提升专业度</p>
          <div className="bg-white p-3 rounded border border-blue-100 text-sm text-gray-600">
            <p className="font-semibold text-blue-800 mb-1">示例：技术方案评审</p>
            <p>"请扮演经验丰富的网络安全架构师，评审以下安全方案的优缺点..."</p>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            <span className="font-semibold">适用场景：</span>方案评审、专业咨询、技术决策
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
          </div>
          <h3 className="font-bold text-blue-700 mb-2">少样本学习法</h3>
          <p className="text-sm text-gray-700 mb-3">通过示例引导AI生成符合预期格式</p>
          <div className="bg-white p-3 rounded border border-blue-100 text-sm text-gray-600">
            <p className="font-semibold text-blue-800 mb-1">示例：标准化故障报告</p>
            <p>"生成故障报告，格式参考以下示例：<br/>
            [ID]: NET-2024-001<br/>
            [时间]: 2024-03-01 14:30<br/>
            [影响]: 广州区域网络中断30分钟..."</p>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            <span className="font-semibold">适用场景：</span>规范化文档、报告生成、模板填充
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="font-bold text-blue-700 mb-2">步骤分解法</h3>
          <p className="text-sm text-gray-700 mb-3">将复杂任务分解为小步骤，逐步完成</p>
          <div className="bg-white p-3 rounded border border-blue-100 text-sm text-gray-600">
            <p className="font-semibold text-blue-800 mb-1">示例：大型项目规划</p>
            <p>"请帮我规划5G网络升级项目：<br/>
            1. 首先分析现有网络架构<br/>
            2. 然后确定升级重点区域<br/>
            3. 设计分阶段实施方案<br/>
            4. 最后制定风险控制计划"</p>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            <span className="font-semibold">适用场景：</span>复杂项目规划、问题分析、流程设计
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-700 mb-3">应用实例：技术文档生成</h3>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="mb-2 text-sm text-purple-800 font-semibold">优化前提示词：</div>
              <div className="p-2 bg-white rounded border border-purple-100 text-sm text-gray-700 h-24 overflow-y-auto">
                写一份5G网络设备安装文档
              </div>
            </div>
            <div className="w-1/2">
              <div className="mb-2 text-sm text-purple-800 font-semibold">优化后提示词：</div>
              <div className="p-2 bg-white rounded border border-purple-100 text-sm text-gray-700 h-24 overflow-y-auto">
                请扮演经验丰富的通信工程师，为现场技术人员编写5G基站安装文档，包含以下部分：
                1. 设备清单与规格
                2. 安装前检查项
                3. 分步骤安装流程（配图说明）
                4. 常见问题排查
                使用简洁明了的语言，按照时间顺序组织内容。
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-purple-800">
            <span className="font-semibold">结果：</span> 文档质量提升85%，现场工程师反馈"操作性强，减少安装时间约30%"
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="font-bold text-yellow-700 mb-3">应用实例：营销方案创作</h3>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="mb-2 text-sm text-yellow-800 font-semibold">优化前提示词：</div>
              <div className="p-2 bg-white rounded border border-yellow-100 text-sm text-gray-700 h-24 overflow-y-auto">
                为企业客户写一份5G专网营销文案
              </div>
            </div>
            <div className="w-1/2">
              <div className="mb-2 text-sm text-yellow-800 font-semibold">优化后提示词：</div>
              <div className="p-2 bg-white rounded border border-yellow-100 text-sm text-gray-700 h-24 overflow-y-auto">
                请采用少样本学习方法，创建面向制造业企业客户的5G专网营销文案。文案风格参考：
                [案例1] "云网融合，助力数字化转型..."
                [案例2] "端到端安全，保障生产数据..."
                
                目标受众：制造业CIO和运营总监
                痛点：网络延迟、设备连接不稳定、数据安全
                卖点：低时延、高可靠、强安全、成本效益
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-yellow-800">
            <span className="font-semibold">结果：</span> 营销方案询盘率提升40%，客户反馈"切中痛点，解决方案清晰"
          </div>
        </div>
      </div>
    </div>,

    // 幻灯片6: 企业应用场景
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">赋能中通服务各部门</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-700 mb-4">跨部门AI应用场景</h3>
          
          <div className="relative p-6 bg-blue-50 rounded-lg flex-grow flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full bg-blue-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            <div className="w-32 h-20 bg-white rounded-lg absolute top-10 left-10 flex items-center justify-center shadow-md border border-blue-200 transform -rotate-12">
              <div className="text-xs text-center text-blue-700 font-semibold">技术部门</div>
            </div>
            
            <div className="w-32 h-20 bg-white rounded-lg absolute bottom-10 left-10 flex items-center justify-center shadow-md border border-blue-200 transform rotate-12">
              <div className="text-xs text-center text-blue-700 font-semibold">市场部门</div>
            </div>
            
            <div className="w-32 h-20 bg-white rounded-lg absolute top-10 right-10 flex items-center justify-center shadow-md border border-blue-200 transform rotate-12">
              <div className="text-xs text-center text-blue-700 font-semibold">客服部门</div>
            </div>
            
            <div className="w-32 h-20 bg-white rounded-lg absolute bottom-10 right-10 flex items-center justify-center shadow-md border border-blue-200 transform -rotate-12">
              <div className="text-xs text-center text-blue-700 font-semibold">管理层</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">技术部门</h4>
                <p className="text-sm text-gray-600">快速生成代码与技术方案，减少开发周期，提高代码质量</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700">市场部门</h4>
                <p className="text-sm text-gray-600">创意内容生成与数据分析报告，提升营销效率与精准度</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-green-700">客服部门</h4>
                <p className="text-sm text-gray-600">标准化回复与问题解决方案，提高客户满意度和响应速度</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700">管理层</h4>
                <p className="text-sm text-gray-600">决策辅助与战略规划，加速信息处理与方案评估</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg mt-auto">
        <h3 className="font-bold text-blue-700 mb-2 text-center">实际案例：客户需求解析</h3>
        <div className="flex justify-between items-center">
          <div className="w-1/3 p-3 bg-white rounded-lg mr-4 text-sm text-gray-700">
            <p className="font-semibold mb-1">传统方式</p>
            <p>客户需求文档分析：<span className="text-red-500">4小时</span></p>
            <p>方案整理提炼：<span className="text-red-500">3小时</span></p>
            <p>技术要点确认：<span className="text-red-500">2小时</span></p>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-1/3 p-3 bg-white rounded-lg ml-4 text-sm text-gray-700">
            <p className="font-semibold mb-1">Prompt优化后</p>
            <p>客户需求提炼：<span className="text-green-500">40分钟</span></p>
            <p>方案生成与整理：<span className="text-green-500">30分钟</span></p>
            <p>技术要点确认：<span className="text-green-500">50分钟</span></p>
          </div>
        </div>
        <p className="text-center text-blue-700 font-semibold mt-3">总体效率提升：<span className="text-2xl">78%</span></p>
      </div>
    </div>,

    // 幻灯片7: 效率提升数据
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">量化的效率提升</h2>
      
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-700 mb-4">关键绩效指标</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-gray-700">任务完成时间</div>
                <div className="text-lg font-bold text-blue-800">-45%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-gray-700">输出准确度</div>
                <div className="text-lg font-bold text-blue-800">+45%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-gray-700">员工满意度</div>
                <div className="text-lg font-bold text-blue-800">+78%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-gray-700">迭代次数减少</div>
                <div className="text-lg font-bold text-blue-800">-60%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-700 mb-4">投资回报分析</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg flex-1">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h4 className="font-semibold text-blue-800 mb-3">时间投资回报</h4>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-800">1:10</div>
                  <div className="text-sm text-gray-600">每小时培训投入可节省10小时工作时间</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-800 mb-2">平均每周节省</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">8.5小时</div>
                  <div className="text-xs text-gray-600">每位员工</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-800 mb-2">年化节省</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">￥48万</div>
                  <div className="text-xs text-gray-600">50人团队</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold text-blue-700 mb-2 text-center">部门效率提升对比</h3>
        <div className="flex justify-between items-end h-32 px-8">
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">技术部门</div>
            <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '85%' }}></div>
            <div className="mt-1 font-semibold text-blue-700">+52%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">市场部门</div>
            <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '60%' }}></div>
            <div className="mt-1 font-semibold text-blue-700">+43%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">客服部门</div>
            <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '100%' }}></div>
            <div className="mt-1 font-semibold text-blue-700">+65%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">管理层</div>
            <div className="w-16 bg-blue-500 rounded-t-lg" style={{ height: '75%' }}></div>
            <div className="mt-1 font-semibold text-blue-700">+48%</div>
          </div>
        </div>
      </div>
    </div>,

    // 幻灯片8: 创新价值点
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">方法论创新与独特价值</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold text-blue-700 mb-4">核心创新方法</h3>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">思维-表达-优化三步循环法</h4>
                <p className="text-sm text-gray-600 mt-1">将AI交互分解为系统性思考、结构化表达和迭代优化三个闭环阶段，确保输出质量持续提升</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-green-700">场景化Prompt模板库</h4>
                <p className="text-sm text-gray-600 mt-1">针对通信行业常见业务场景构建专业模板，包含关键要素提示和输出规范，提高应用效率</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-3">自适应提示词框架</h3>
            <div className="flex">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 112 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">基于任务复杂度和输出需求自动调整提示词结构，动态优化交互策略，适应不同难度的业务需求</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-3">通信行业专业术语库</h3>
            <div className="flex">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">融合中通南方业务特点的专业词汇集，保证AI输出符合行业标准，减少术语不准确导致的沟通成本</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-bold text-yellow-700 mb-3">独特价值点</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>从<span className="font-semibold">个人技巧</span>到<span className="font-semibold">组织能力</span>的系统性提升</li>
              <li>打造中通南方专属的AI交互知识体系</li>
              <li>可复制、可量化、可持续的效能提升路径</li>
              <li>建立AI应用的标准化流程与评估机制</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-5 rounded-lg mt-auto">
        <h3 className="font-bold text-blue-700 mb-3 text-center">价值实现路径</h3>
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="text-xs text-blue-700 font-semibold text-center">建立<br/>知识体系</div>
          </div>
          
          <div className="flex-grow mx-2 h-0.5 bg-blue-200 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="text-xs text-blue-700 font-semibold text-center">培训<br/>推广应用</div>
          </div>
          
          <div className="flex-grow mx-2 h-0.5 bg-blue-200 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <div className="text-xs text-blue-700 font-semibold text-center">效果<br/>评估与优化</div>
          </div>
          
          <div className="flex-grow mx-2 h-0.5 bg-blue-200 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-xs text-blue-700 font-semibold text-center">持续<br/>迭代升级</div>
          </div>
        </div>
      </div>
    </div>,
    
    // 幻灯片9: 团队应用展望
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">全面推广与持续迭代</h2>
      
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-700 mb-4">推广计划</h3>
          
          <div className="bg-blue-50 p-5 rounded-lg flex-1">
            <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">内部工作坊</h4>
                  <p className="text-sm text-gray-600 mt-1">每月举办实践培训，覆盖不同职能部门，提供针对性的应用指导</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">案例库建设</h4>
                  <p className="text-sm text-gray-600 mt-1">建立公司内部最佳实践库，形成可复用的知识资产，促进经验共享</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">专项指导</h4>
                  <p className="text-sm text-gray-600 mt-1">为关键业务场景提供定制化方案，针对高价值业务流程进行深度优化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-700 mb-4">实施路线图</h3>
          
          <div className="bg-blue-50 p-5 rounded-lg flex-1">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="relative mb-6 pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-700">第一阶段：试点部门（1-2月）</h4>
                  <p className="text-sm text-gray-600 mt-1">在技术部和市场部先行试点，验证方法有效性，收集反馈，调整方案</p>
                </div>
              </div>
              
              <div className="relative mb-6 pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-700">第二阶段：全面推广（3-6月）</h4>
                  <p className="text-sm text-gray-600 mt-1">覆盖所有业务部门，开展系列培训，建立应用生态，构建评估体系</p>
                </div>
              </div>
              
              <div className="relative mb-6 pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-700">第三阶段：深度融合（7-12月）</h4>
                  <p className="text-sm text-gray-600 mt-1">与核心业务流程深度整合，形成标准化最佳实践，建立长效机制</p>
                </div>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-700">长期目标（2026年+）</h4>
                  <p className="text-sm text-gray-600 mt-1">构建完整的企业AI应用生态，成为公司核心竞争力的重要组成部分</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-3 text-center">评估机制</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-blue-700 text-sm">效率指标</h4>
            </div>
            <p className="text-xs text-gray-600">任务完成时间、迭代次数、满意度</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-700 text-sm">质量指标</h4>
            </div>
            <p className="text-xs text-gray-600">输出准确度、专业性、可用性</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-yellow-700 text-sm">成本指标</h4>
            </div>
            <p className="text-xs text-gray-600">时间成本、API消耗、资源利用率</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-700 text-sm">创新指标</h4>
            </div>
            <p className="text-xs text-gray-600">方法创新、应用创新、价值创造</p>
          </div>
        </div>
      </div>
    </div>,
    
    // 幻灯片10: 总结与心得
    <div className="flex flex-col h-full p-8 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">经验总结与发展愿景</h2>
      
      <div className="flex space-x-8 mb-6">
        <div className="w-1/2">
          <h3 className="font-bold text-blue-700 mb-4">核心洞察</h3>
          
          <div className="bg-blue-50 p-5 rounded-lg">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-semibold">AI不是替代思考，而是放大思考</span> - 优质输入依然需要人类的专业判断与结构化思维</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-semibold">系统化方法比零散技巧更有价值</span> - 建立完整体系，形成可复制的能力是关键</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="text-gray-700"><span className="font-semibold">最佳实践需要不断验证与迭代</span> - AI工具快速迭代，方法论需保持与时俱进</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-1/2">
          <h3 className="font-bold text-blue-700 mb-4">未来规划</h3>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg h-full flex flex-col">
            <div className="mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">建设完整的企业AI应用生态</h4>
              <p className="text-sm text-gray-700">从Prompt技巧到全面AI应用体系，打造中通南方的AI能力高地</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex space-x-2 text-sm">
                <div className="w-1/3 p-2 bg-blue-50 rounded text-blue-700 text-center">
                  能力培养体系
                </div>
                <div className="w-1/3 p-2 bg-blue-50 rounded text-blue-700 text-center">
                  工具集成平台
                </div>
                <div className="w-1/3 p-2 bg-blue-50 rounded text-blue-700 text-center">
                  行业知识库
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">技术与业务深度融合</h4>
              <p className="text-sm text-gray-700">将AI能力作为业务流程的有机组成部分，实现无缝嵌入与价值创造</p>
            </div>
            
            <div className="mt-auto">
              <h4 className="font-semibold text-blue-800 mb-2">个人寄语</h4>
              <div className="bg-white p-3 rounded-lg border border-blue-100 text-sm italic text-gray-600">
                "AI不仅是技术革新，更是思维方式的变革。期待通过《Prompt实践手册》的持续完善，与中通南方的每位同事一起，在AI创新的道路上不断前行，共同打造企业的智能化未来。"
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 rounded-lg mt-auto text-white">
        <div className="text-center mb-3">
          <h3 className="font-bold text-xl">共创AI驱动的通信服务新未来</h3>
        </div>
        <div className="flex justify-around items-center">
          <div className="text-center">
            <div className="font-bold text-3xl mb-1">提效</div>
            <div className="text-sm opacity-80">Efficiency</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl mb-1">赋能</div>
            <div className="text-sm opacity-80">Empowerment</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl mb-1">创新</div>
            <div className="text-sm opacity-80">Innovation</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-3xl mb-1">协作</div>
            <div className="text-sm opacity-80">Collaboration</div>
          </div>
        </div>
      </div>
    </div>
  ];
  
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 bg-white border-b">
        <div className="text-xl font-bold text-blue-800">Prompt实践手册 PPT</div>
        <div className="text-sm text-gray-500">第 {currentSlide + 1}/10 页</div>
      </div>
      
      <div className="flex-1 p-6 overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg h-full overflow-auto">
          {slides[currentSlide]}
        </div>
      </div>
      
      <div className="flex justify-between p-4">
        <button 
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-lg flex items-center ${currentSlide === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          上一页
        </button>
        
        <button 
          onClick={goToNextSlide}
          disabled={currentSlide === 9}
          className={`px-4 py-2 rounded-lg flex items-center ${currentSlide === 9 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          下一页
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PromptHandbookPPT;

import React, { useState } from 'react';

const PromptHandbookPPT = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToNextSlide = () => {
    if (currentSlide < 4) {
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
                <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <span className="text-gray-700">基础概念</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded mb-2 border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">设计技巧</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded mb-2 border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">优化方法</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded mb-2 border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <span className="text-gray-700">高级技巧</span>
              </div>
              
              <div className="flex items-center p-2 bg-white rounded border-l-4 border-blue-500">
                <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <span className="text-gray-700">框架应用</span>
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
                <div className="w-28 p-2 bg-blue-100 rounded text-center text-sm">思维模式</div>
                <div className="w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-28 p-2 bg-blue-100 rounded text-center text-sm">表达技巧</div>
                <div className="w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-28 p-2 bg-blue-100 rounded text-center text-sm">实践应用</div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">手册核心价值</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>系统化方法论，而非零散技巧</li>
              <li>针对企业场景的实用案例</li>
              <li>提供可复制的框架和模板</li>
              <li>结合通信行业专业知识</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mx-auto mt-auto text-center p-2 bg-blue-100 rounded-lg max-w-lg">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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
    </div>
  ];
  
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 bg-white border-b">
        <div className="text-xl font-bold text-blue-800">Prompt实践手册 PPT</div>
        <div className="text-sm text-gray-500">第 {currentSlide + 1}/5 页</div>
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
          disabled={currentSlide === 4}
          className={`px-4 py-2 rounded-lg flex items-center ${currentSlide === 4 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
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

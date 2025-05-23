import React from 'react';

const ChallengesAnalysisPage1 = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">重、难点分析及对策</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex flex-1">
        {/* 左侧内容 */}
        <div className="w-1/2 pr-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-600 mb-3">深圳燃气AI转型重点问题识别</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 flex-shrink-0">01</div>
                  <div>
                    <h3 className="font-bold text-blue-700">安全优先与AI应用的平衡难题</h3>
                    <p className="text-sm text-gray-700 mt-1">燃气行业"安全第一"的根本原则与AI技术追求效率优化之间存在潜在冲突。涉及关键决策的AI系统必须确保100%可靠，任何安全隐患都不可接受。</p>
                    <div className="mt-2 pl-2 border-l-2 border-blue-400">
                      <p className="text-xs text-gray-600 italic">如何在确保安全的前提下，充分发挥AI技术在预警预测、智能监控等方面的优势，是AI战略规划的首要挑战。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 flex-shrink-0">02</div>
                  <div>
                    <h3 className="font-bold text-blue-700">管网系统复杂度带来的技术挑战</h3>
                    <p className="text-sm text-gray-700 mt-1">深圳燃气管网系统规模庞大，管道总长约13万公里，涵盖高中低压多级管网，分布在复杂的城市环境中。已部署的2100余处压力、泄漏检测点产生海量数据。</p>
                    <div className="mt-2 pl-2 border-l-2 border-blue-400">
                      <p className="text-xs text-gray-600 italic">如何建立能够应对超大规模、多源异构数据的AI模型，并实现毫秒级的响应决策，是技术层面的核心挑战。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 flex-shrink-0">03</div>
                  <div>
                    <h3 className="font-bold text-blue-700">四大业务板块数据孤岛问题</h3>
                    <p className="text-sm text-gray-700 mt-1">城市燃气、上游资源、综合能源、智慧服务四大业务板块各自形成相对独立的信息系统架构，数据共享不畅，难以发挥数据价值。</p>
                    <div className="mt-2 pl-2 border-l-2 border-blue-400">
                      <p className="text-xs text-gray-600 italic">如何打破数据孤岛，建立统一的数据治理体系，实现四大板块的数据协同，是深圳燃气AI战略的关键基础。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div className="w-1/2 pl-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-600 mb-3">关键难点深度剖析</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">安全效率与AI决策平衡难题</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold">AI决策可解释性挑战</h4>
                    <p className="text-xs text-gray-700">AI系统特别是深度学习模型的"黑盒"特性，与燃气行业要求的可追溯性存在天然冲突。当AI系统预警某个区域可能发生泄漏时，如何向运行人员解释其判断依据？</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold">安全边界的动态平衡</h4>
                    <p className="text-xs text-gray-700">传统安全管理常基于固定的安全边界，而AI技术能通过数据分析动态优化这些边界。如何在保持安全底线的同时，允许AI系统动态调整安全参数？</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold">应急响应的AI化改造</h4>
                    <p className="text-xs text-gray-700">紧急情况常常是非常规场景，AI系统的训练难以覆盖所有极端情况。如何确保AI在紧急情况下的可靠性，如何处理AI系统故障时的应急预案？</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">复杂数据治理难题</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold">多源异构数据融合</h4>
                    <p className="text-xs text-gray-700">SCADA系统的实时数据、GIS系统的空间位置数据、物联网设备数据、视频监控数据、传统业务系统数据格式不一、质量参差不齐，如何有效融合？</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold">数据质量问题</h4>
                    <p className="text-xs text-gray-700">历史数据存在缺失、错误、不一致问题；实时数据可能因传感器故障、网络延迟导致异常；数据标准不统一导致系统间数据定义冲突。</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold">数据安全与共享矛盾</h4>
                    <p className="text-xs text-gray-700">燃气行业涉及关键基础设施数据，安全要求高，但AI应用需要大量数据共享才能发挥价值，这形成了安全与共享的矛盾。</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">技术与人才挑战</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold">技术适配性问题</h4>
                    <p className="text-xs text-gray-700">国产化AI技术栈是否能满足燃气行业7×24小时不间断运行的高可靠性要求？如何在确保安全的前提下推进技术创新？</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold">复合型人才稀缺</h4>
                    <p className="text-xs text-gray-700">既懂燃气业务又懂AI技术的复合型人才市场稀缺，作为国有企业，在人才引进机制上存在体制约束，难以与互联网公司竞争高端AI人才。</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold">组织文化适应性</h4>
                    <p className="text-xs text-gray-700">燃气行业安全稳健的文化与AI领域快速迭代、容忍失败的创新文化存在冲突，如何在保持安全文化的同时培育创新氛围？</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <div className="mt-4 text-right text-sm text-gray-500">
        深圳燃气人工智能战略规划项目述标 | 重难点分析 第1页
      </div>
    </div>
  );
};

export default ChallengesAnalysisPage1;

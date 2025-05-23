import React from 'react';

const ImplementationPlanPage2 = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">AI愿景与蓝图规划方案</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex flex-1">
        {/* 左侧内容 */}
        <div className="w-1/2 pr-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">深圳燃气AI愿景构建</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">愿景核心定位</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-center font-bold text-blue-700 mb-2">智慧能源运营服务商</p>
                <p className="text-sm text-gray-700">
                  围绕"打造城市智慧血脉"的核心目标，制定"安全、智慧、绿色"三位一体的AI战略愿景体系，实现从传统燃气供应商向智慧能源运营服务商的战略转型。
                </p>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">AI愿景三维体系</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">安全智能化愿景</h4>
                    <p className="text-xs text-gray-700">构建涵盖天然气全生命周期的安全预警机制，包括管网泄漏早期预警、第三方施工破坏智能防护、设备运行状态智能监测等核心安全场景。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold">智慧运营愿景</h4>
                    <p className="text-xs text-gray-700">建立数据驱动、AI赋能的智慧运营管理体系，涵盖上游资源智能调配、管网运行智能优化、客户服务智能升级等关键运营环节。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold">服务智能化愿景</h4>
                    <p className="text-xs text-gray-700">构建多渠道、全流程的智能服务体系：智能语音服务处理常规查询，AI建议引擎为客户提供节能用气方案，智能故障诊断系统快速解决用户问题。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold">绿色发展愿景</h4>
                    <p className="text-xs text-gray-700">利用AI技术优化能源结构，实现"双碳"目标导向的绿色发展。通过智能调度减少管网运行能耗，通过多能源协同提升综合能效。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">行业对标分析框架</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">同业对标策略</h3>
                  <ul className="text-xs text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>战略定位：</b>对标中国燃气的"AI+绿色能源"战略定位</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>技术平台：</b>学习华润燃气的数字孪生平台建设经验</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>应用场景：</b>对标杭州天然气AI智能监控系统</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>投资回报：</b>借鉴中国燃气AI赋能安全运营的效果</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">跨界对标策略</h3>
                  <ul className="text-xs text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>电力行业：</b>借鉴智能电网负荷预测、故障诊断等领域</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>制造业：</b>迁移预测性维护经验到燃气设备管理</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>智能客服领域：</b>引入大模型技术提升客户体验</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div className="w-1/2 pl-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI应用现状全面评估体系</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">成熟度评估模型构建</h3>
              <p className="text-sm text-gray-700 mb-3">
                采用国际领先的CMMM成熟度模型，结合IDO数据驱动组织方法论和EA企业架构方法，构建针对深圳燃气的AI成熟度评估体系。
              </p>
              
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <h4 className="font-semibold text-center mb-2">AI成熟度评估维度</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-7 h-7 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">1</div>
                    <p className="text-gray-700"><b>组织能力：</b>AI治理架构、决策机制、人才培养体系</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-7 h-7 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">2</div>
                    <p className="text-gray-700"><b>技术基础：</b>IT架构AI就绪度、数据基础设施完善程度</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-7 h-7 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3</div>
                    <p className="text-gray-700"><b>数据资产：</b>数据采集、存储、治理、应用全链路成熟度</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-7 h-7 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">4</div>
                    <p className="text-gray-700"><b>应用场景：</b>现有智能化应用的成效、覆盖范围</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">现状诊断方法体系</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">高层访谈法</p>
                  <p className="text-gray-700">了解战略期望、投资意愿和主要顾虑</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">业务骨干研讨法</p>
                  <p className="text-gray-700">识别各业务域实际需求、痛点和AI期望</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">运营层问卷调查法</p>
                  <p className="text-gray-700">收集一线操作中的困难点和改进需求</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">专家评审法</p>
                  <p className="text-gray-700">对AI应用需求进行可行性评估</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI蓝图设计方案</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">总体蓝图设计框架</h3>
              <div className="mb-3">
                <div className="flex items-center bg-blue-50 p-3 rounded-lg mb-2">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">中心</h4>
                    <p className="text-xs text-gray-700">燃气智能运营中心：AI应用统一指挥调度枢纽，集成数据采集、分析处理、智能决策、远程控制等功能</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-blue-50 p-3 rounded-lg mb-2">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold">平台</h4>
                    <p className="text-xs text-gray-700">AI技术平台、数据管理平台、应用开发平台，提供基础算力、数据资源和开发环境</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold">体系</h4>
                    <p className="text-xs text-gray-700">安全保障体系、智慧运营体系、客户服务体系、绿色发展体系，覆盖核心业务需求</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">蓝图实施时间规划</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">短期目标(0-12个月)</p>
                  <p className="text-center text-gray-700">完成AI基础平台建设，试点2-3个核心应用场景，形成成功案例</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">中期目标(12-36个月)</p>
                  <p className="text-center text-gray-700">城市燃气核心业务AI全覆盖，建立完善的AI治理体系</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">长期目标(36-60个月)</p>
                  <p className="text-center text-gray-700">四大业务板块AI应用全覆盖，建成行业领先的AI应用生态</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <div className="mt-4 text-right text-sm text-gray-500">
        深圳燃气人工智能战略规划项目述标 | 实施方案 2/5
      </div>
    </div>
  );
};

export default ImplementationPlanPage2;
import React from 'react';

const ImplementationPlanPage1 = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">项目实施方案：总体框架与设计思路</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex flex-1">
        {/* 左侧内容 */}
        <div className="w-1/2 pr-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">项目理解与总体思路</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">背景理解</h3>
              <p className="text-sm text-gray-700 mb-3">
                深圳燃气作为深圳市乃至粤港澳大湾区的重要能源基础设施运营商，在经济社会发展中承担着关键的能源保障使命。在新一轮科技革命和产业变革背景下，面临从传统公用事业向智慧型综合能源服务商转型的历史性机遇。
              </p>
              
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <h4 className="font-semibold">核心挑战</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>安全运营与智能化转型的平衡点选择</li>
                  <li>从被动式管理向主动式服务的转变</li>
                  <li>四大业务板块协同发展的系统性规划</li>
                  <li>内外部资源整合的机制创新</li>
                </ul>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">目标理解</h3>
              <p className="text-sm text-gray-700">
                基于AI顶层规划与设计，制定人工智能战略愿景，规划短期、中长期的重要举措及实施路线图，通过整合公司资源，依托外部产学研合作，打造人工智能应用快速推广解决方案，指导深圳燃气未来3～5年"人工智能+"融合应用落地。
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">总体架构设计</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">四层架构体系</h3>
              <div className="space-y-3 mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">战略评估层</h4>
                    <p className="text-xs text-gray-700">全面诊断组织AI就绪度，CMMM成熟度模型和EA方法论评估</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold">规划设计层</h4>
                    <p className="text-xs text-gray-700">构建"一个中心、三大平台、四大体系"的AI蓝图架构</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold">实施路径层</h4>
                    <p className="text-xs text-gray-700">制定短期、中期、长期分阶段推进路线，"快速见效-全面覆盖-持续创新"</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold">治理保障层</h4>
                    <p className="text-xs text-gray-700">建立完善的组织机制、运营机制和管理制度，确保资源有序配置</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">项目范围覆盖</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">业务范围</p>
                  <p className="text-center text-gray-700">四大业务板块全覆盖</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">组织范围</p>
                  <p className="text-center text-gray-700">总部、各中心及分子公司</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">系统范围</p>
                  <p className="text-center text-gray-700">已建、在建和规划新系统</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div className="w-1/2 pl-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI-POWER实施方法论</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">
                我们创新性地开发了针对能源行业的"AI-POWER"咨询方法论，将七个核心要素有机整合，形成适合燃气行业的系统化AI规划方法。这套方法论已在多个大型项目中验证有效。
              </p>
              
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-2 text-lg">A</span>
                    <div>
                      <p className="font-semibold">ssessment</p>
                      <p className="text-xs text-gray-700">全面评估数字基础与AI就绪度</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-2 text-lg">I</span>
                    <div>
                      <p className="font-semibold">nsight</p>
                      <p className="text-xs text-gray-700">深度洞察业务痛点与机会点</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-2 text-lg">P</span>
                    <div>
                      <p className="font-semibold">rioritization</p>
                      <p className="text-xs text-gray-700">科学确定场景优先级</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-2 text-lg">O</span>
                    <div>
                      <p className="font-semibold">pportunity</p>
                      <p className="text-xs text-gray-700">设计创新应用蓝图</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-2 text-lg">W</span>
                    <div>
                      <p className="font-semibold">orkflow</p>
                      <p className="text-xs text-gray-700">重塑AI驱动的业务流程</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-2 text-lg">E</span>
                    <div>
                      <p className="font-semibold">nablement</p>
                      <p className="text-xs text-gray-700">构建技术与组织保障</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start col-span-2">
                    <span className="font-bold text-blue-700 mr-2 text-lg">R</span>
                    <div>
                      <p className="font-semibold">oadmap</p>
                      <p className="text-xs text-gray-700">制定分步实施路线图</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">核心设计原则</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">安全优先原则</h3>
                <p className="text-xs text-gray-700">
                  将安全置于至高无上的地位，建立"三道安全防线"：技术安全防线、过程安全防线和数据安全防线，确保AI技术在提升效率的同时绝不以牺牲安全为代价。
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">价值导向原则</h3>
                <p className="text-xs text-gray-700">
                  AI建设必须聚焦业务价值创造，避免为技术而技术的误区。建立全面的价值评估体系，包括经济价值、运营价值、社会价值三个维度。
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">渐进实施原则</h3>
                <p className="text-xs text-gray-700">
                  采取审慎渐进的实施策略，遵循"小步快跑、持续迭代"的推进节奏。先从非关键业务入手，待积累成功经验后再逐步向关键运营环节延伸。
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">开放生态原则</h3>
                <p className="text-xs text-gray-700">
                  打破传统封闭式建设模式，构建开放协作的AI创新生态体系，主动对接高校、研究机构等优质资源，建立产学研合作联盟。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <div className="mt-4 text-right text-sm text-gray-500">
        深圳燃气人工智能战略规划项目述标 | 实施方案 1/4
      </div>
    </div>
  );
};

export default ImplementationPlanPage1;

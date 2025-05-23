import React from 'react';

const CaseStudiesPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">成功案例与业绩介绍</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex flex-1">
        {/* 左侧内容 */}
        <div className="w-1/2 pr-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI规划咨询典型案例</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">南方联合产权数智型交易平台成熟度评估与建设路径咨询项目</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <div className="flex justify-between mb-2 text-xs">
                  <div className="font-semibold">客户单位：南方联合产权交易中心</div>
                  <div>项目周期：2024年</div>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  针对南方联合产权交易中心在数字经济时代面临的行业竞争压力、数据价值发掘不足、系统协同困境等挑战，为其量身打造了数智型交易平台建设方案。
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold">评估诊断体系</p>
                      <p className="text-gray-700">构建了8大能力要素×19个能力域×38个能力子域的三级评估框架，形成科学的交易平台成熟度评估模型。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold">AI转型规划</p>
                      <p className="text-gray-700">制定了"四化"建设理念（数字化、智能化、平台化、生态化）和"一核多元"战略发展模式，设计六大关键建设路径。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold">创新价值实现</p>
                      <p className="text-gray-700">通过AI应用，数据资产价值提升30%，运营效率提升40%，IT运维成本降低25%，业务增长15-20%。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">数字城市智能控制中心AI应用规划项目</h3>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex justify-between mb-2 text-xs">
                  <div className="font-semibold">客户单位：深圳市龙华区建筑工务署</div>
                  <div>项目金额：49.8万元</div>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  为深圳市龙华区鹭湖中心城公共服务核心区数字城市智能控制中心提供全面的数字化咨询服务，打造了集智能决策、统一监控、协同联动为一体的城市管理大脑。
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold">AI赋能城市管理</p>
                      <p className="text-gray-700">通过视觉AI、预测分析、智能调度等技术，实现城市问题的自动识别、智能分析和协同处置。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold">多源数据融合</p>
                      <p className="text-gray-700">整合视频监控、物联网、地理信息等多源数据，构建统一数据中台，支撑智能应用。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold">创新运营机制</p>
                      <p className="text-gray-700">设计了扁平化指挥体系和网格化管理模式，提升城市治理的敏捷性和精准性。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">能源行业咨询业绩</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">清洁能源信息化咨询项目</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-xs mb-1">梅西水库光伏发电系统咨询</h4>
                  <div className="flex justify-between text-xs mb-1">
                    <div>客户单位：梅州市梅西水库管理局</div>
                    <div>金额：44.55万元</div>
                  </div>
                  <p className="text-xs text-gray-700">
                    提供梅西镇龙居村光伏发电系统和仓储综合开发项目全过程工程咨询服务，实现能源供给侧改革与乡村振兴的有机结合。
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-xs mb-1">泰洋能源大湖光伏发电项目</h4>
                  <div className="flex justify-between text-xs mb-1">
                    <div>客户单位：泰洋能源科技发展有限公司</div>
                    <div>金额：50万元</div>
                  </div>
                  <p className="text-xs text-gray-700">
                    开展光伏发电项目可行性研究，包括资源评估、技术方案、经济分析等全面内容，为项目决策提供科学依据。
                  </p>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">水务信息化咨询项目</h3>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-xs mb-1">东源县农村集中供水补短板工程信息化建设</h4>
                <div className="flex justify-between text-xs mb-1">
                  <div>客户单位：东源县水利工程建设服务中心</div>
                  <div>金额：45万元</div>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  为东源县农村集中供水补短板工程提供信息化建设咨询服务，打造了智慧水务管理平台，实现供水全过程的数字化监管。
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>构建水务物联网体系，实现供水设施远程监控</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>设计水质监测预警系统，保障农村供水安全</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>开发智能调度决策支持系统，优化供水运行</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div className="w-1/2 pl-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">大型信息化咨询项目实施经验</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">大型公共机构信息化咨询</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <h4 className="font-semibold text-xs mb-1">福田区妇幼保健院信息化咨询服务项目</h4>
                <div className="flex justify-between text-xs mb-1">
                  <div>客户单位：深圳市福田区妇幼保健院</div>
                  <div>金额：100万元</div>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  为福田区妇幼保健院提供全面的信息化规划方案，打造了以患者为中心的智慧医疗服务体系，全面提升医疗服务质量和管理效率。
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>设计了覆盖诊前、诊中、诊后的全流程数字化服务体系</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>构建临床辅助决策系统，提升医疗诊断准确性</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>开发医疗大数据分析平台，支持科研和管理决策</span>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">数字化转型咨询项目</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <h4 className="font-semibold text-xs mb-1">宝安区教育数字化转型项目</h4>
                <div className="flex justify-between text-xs mb-1">
                  <div>客户单位：深圳市宝安区教育局</div>
                  <div>金额：126.8万元</div>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  为宝安区教育数字化转型智慧教育新型基础设施建设提供咨询服务，打造了"互联网+教育"的创新生态，提升教育现代化水平。
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>设计教育大数据平台，支持个性化教学和精准管理</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>构建智慧校园系统，提升学校管理和服务水平</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>开发智能学习系统，创新教学模式和学习方式</span>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">企业数字服务项目</h3>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-xs mb-1">中国移动广东公司数字化服务支撑项目</h4>
                <div className="flex justify-between text-xs mb-1">
                  <div>客户单位：中国移动通信集团广东有限公司</div>
                  <div>金额：372.6万元</div>
                </div>
                <p className="text-xs text-gray-700 mb-2">
                  为中国移动广东公司提供镇区乡村振兴及规上企业数字化服务支撑，助力数字乡村建设和企业数字化转型。
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>开发农村数字经济服务平台，推动乡村产业数字化</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>设计企业数字化转型解决方案，提升企业竞争力</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span>构建数字化基础设施，为乡村振兴提供技术支撑</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">核心能力与经验总结</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">AI战略规划核心优势</h3>
              <div className="space-y-2 text-xs mb-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold">专业方法论体系</p>
                    <p className="text-gray-700">自主研发的AI-POWER咨询方法论已在多个大型项目中成功验证，提供了从评估诊断到路径设计的全链条方法支撑。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold">能源行业应用经验</p>
                    <p className="text-gray-700">在燃气、电力、水务等能源子行业具备丰富的信息化咨询经验，对能源企业的业务流程、管理模式、技术架构有深入理解。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold">大型项目管理能力</p>
                    <p className="text-gray-700">具备管理百万级咨询项目的丰富经验，建立了完善的项目管理体系，确保项目高质量按期交付。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold">综合资源整合能力</p>
                    <p className="text-gray-700">拥有丰富的专家资源网络和产学研合作关系，能够整合行业最佳实践和前沿技术成果，为项目提供多维度支持。</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">对深圳燃气项目的价值承诺</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">深度行业理解</p>
                  <p className="text-center text-gray-700">全面理解燃气业务特性，提供行业针对性解决方案</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">量身定制方案</p>
                  <p className="text-center text-gray-700">基于深圳燃气实际需求定制AI战略方案</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">效益导向设计</p>
                  <p className="text-center text-gray-700">确保AI投资产生可衡量的经济和社会效益</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">长期能力建设</p>
                  <p className="text-center text-gray-700">帮助深圳燃气培养自主AI能力，实现可持续发展</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <div className="mt-4 text-right text-sm text-gray-500">
        深圳燃气人工智能战略规划项目述标 | 成功案例与业绩介绍 1/1
      </div>
    </div>
  );
};

export default CaseStudiesPage;
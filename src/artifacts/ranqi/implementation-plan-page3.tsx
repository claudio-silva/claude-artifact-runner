import React from 'react';

const ImplementationPlanPage3 = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">AI技术平台规划方案</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex flex-1">
        {/* 左侧内容 */}
        <div className="w-1/2 pr-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI技术平台建设总体策略</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">平台建设核心理念</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-center font-bold text-blue-700 mb-2">统一平台、分布应用</p>
                <p className="text-sm text-gray-700">
                  构建符合燃气行业特点的中台式AI技术架构，采用"分层解耦、服务导向"的架构思路，确保各功能模块既能独立运行又能协同配合。
                </p>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">业务板块差异化支持</h3>
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">城市燃气</p>
                  <p className="text-center text-gray-700">安全监控、智能巡检、泄漏预警、负荷预测</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">上游资源</p>
                  <p className="text-center text-gray-700">价格预测、采购优化、风险评估</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">综合能源</p>
                  <p className="text-center text-gray-700">能源互补性分析、综合方案推荐、智能调度</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">智慧服务</p>
                  <p className="text-center text-gray-700">客户画像、个性化服务、智能营销</p>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">双核驱动模式</h3>
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-1/2 bg-blue-100 p-2 rounded-lg text-center text-sm font-semibold">
                      行业基因
                    </div>
                    <div className="w-1/2 bg-blue-100 p-2 rounded-lg text-center text-sm font-semibold">
                      通用能力
                    </div>
                  </div>
                  <p className="text-xs text-gray-700">
                    深度融合燃气行业专业知识与通用AI能力：行业基因指对燃气行业的专业理解，包括天然气物理化学特性、管网工艺流程、安全规范标准等；通用能力指AI技术的基础能力，如机器学习、深度学习、自然语言处理等。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI技术平台架构设计</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">分层架构体系</h3>
              <div className="space-y-3 mb-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">接入层</h4>
                    <p className="text-xs text-gray-700">负责各类数据源的统一接入，包括SCADA实时数据、视频监控数据、GIS空间数据、用户服务数据等。采用标准化协议，如OPC UA、MQTT等，确保数据采集的实时性和可靠性。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold">数据基础层</h4>
                    <p className="text-xs text-gray-700">采用分布式数据湖架构，支持PB级数据存储和处理。集成Apache Hadoop、Apache Spark等开源框架，建立专门的时序数据库，如InfluxDB，优化时序数据处理。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold">AI能力平台层</h4>
                    <p className="text-xs text-gray-700">采用分布式机器学习框架，以国产化的PaddlePaddle为主要开发框架，兼容TensorFlow、PyTorch等。模型部署采用蓝绿部署和金丝雀发布策略，确保新版本模型的平滑上线。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold">应用支撑层</h4>
                    <p className="text-xs text-gray-700">提供AI能力的统一封装和接口服务，包括RESTful API、GraphQL等多种接口形式。引入服务网格技术（Istio），实现微服务间的智能路由、负载均衡、熔断降级等高级功能。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div className="w-1/2 pl-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">核心功能模块设计</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">模型服务能力模块</h3>
                  <ul className="text-xs text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>多层次服务体系：</b>基础模型层、行业通用层、专用模型层</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>模型市场：</b>内部开发和外部供应商模型集成管理</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>模型评级机制：</b>从准确率、实时性、安全性等维度评估</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">模型管理能力模块</h3>
                  <ul className="text-xs text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>全生命周期管理：</b>从模型注册到下线的完整流程</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>性能监控机制：</b>实时跟踪预测准确率、响应时延等</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>可解释AI技术：</b>如SHAP值分析、LIME等可视化解释</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">自动学习能力模块</h3>
                  <ul className="text-xs text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>在线学习框架：</b>持续优化的增量学习技术</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>主动学习机制：</b>识别学习边界，请求人工标注</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>自适应学习策略：</b>根据季节性特征自动调整学习频率</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">智能决策支持模块</h3>
                  <ul className="text-xs text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>多策略决策引擎：</b>基于规则、预测、优化的决策模式</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>应急决策专家系统：</b>融合AI推理和人工经验的决策</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-1">•</span>
                      <span><b>强化学习技术：</b>通过体验持续优化决策策略</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">平台安全保障与数据治理体系</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">多层安全防护架构</h3>
              <p className="text-sm text-gray-700 mb-3">
                构建覆盖物理安全、网络安全、数据安全、应用安全的全方位安全体系，特别针对燃气行业关键基础设施的特殊性，强化安全保障措施。
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">物理安全层</p>
                  <p className="text-gray-700">ISO 27001标准的机房设计，核心设备双机热备，关键数据多地备份</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">网络安全层</p>
                  <p className="text-gray-700">纵深防御体系，零信任网络架构，网络流量实时监测</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">数据安全层</p>
                  <p className="text-gray-700">全生命周期加密，RBAC访问控制，数据脱敏与水印</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">应用安全层</p>
                  <p className="text-gray-700">模型安全检测，运行监控，权限隔离，审计追踪</p>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">数据治理体系设计</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">数据标准化</p>
                  <p className="text-gray-700">统一数据标准规范，元数据管理，主数据管理</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">数据质量管理</p>
                  <p className="text-gray-700">"5R"质量体系：有效性、完整性、一致性、及时性、可用性</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">数据资产管理</p>
                  <p className="text-gray-700">数据资产化运营，分级分类管理，价值评估</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">数据共享机制</p>
                  <p className="text-gray-700">统一数据服务总线，标准API，访问控制，追踪审计</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">国产化技术适配策略</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">AI框架适配</p>
                  <p className="text-center text-gray-700">以PaddlePaddle为主，兼容MindSpore、OneFlow等国产框架</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">基础软件栈</p>
                  <p className="text-center text-gray-700">统信UOS、TiDB、Dubbo等国产基础软件</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">AI芯片适配</p>
                  <p className="text-center text-gray-700">昇腾、寒武纪等国产AI芯片的算子优化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <div className="mt-4 text-right text-sm text-gray-500">
        深圳燃气人工智能战略规划项目述标 | 实施方案 3/5
      </div>
    </div>
  );
};

export default ImplementationPlanPage3;
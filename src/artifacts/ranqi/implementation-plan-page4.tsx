import React from 'react';

const ImplementationPlanPage4 = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">AI场景与实施路线图设计</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex flex-1">
        {/* 左侧内容 */}
        <div className="w-1/2 pr-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">全业务域AI场景梳理体系</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">全价值链梳理方法论</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-700">
                  采用"价值流映射（VSM）法"结合"AI注入点评估"的创新方法，系统性地在每个价值环节中识别AI应用机会。构建AI能力库匹配方法，将业务痛点与AI技术能力进行精准匹配。
                </p>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">场景挖掘工作坊实施方案</h3>
              <div className="flex space-x-3 mb-3">
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-center">
                  <p className="text-xs font-semibold mb-1">启发阶段</p>
                  <p className="text-xs text-gray-700">问题树分析法，引导识别核心痛点</p>
                </div>
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-center">
                  <p className="text-xs font-semibold mb-1">共创阶段</p>
                  <p className="text-xs text-gray-700">头脑风暴+设计思维，碰撞创新思路</p>
                </div>
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-center">
                  <p className="text-xs font-semibold mb-1">收敛阶段</p>
                  <p className="text-xs text-gray-700">MVP筛选法，选择最具价值场景</p>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">场景标准化采集模板</h3>
              <p className="text-xs text-gray-700 mb-2">
                设计标准化的"AI场景采集卡"模板，包含15个核心要素：场景名称、所属业务域、问题描述、期望效果、现有流程、改进点、AI技术需求、数据源清单、数据质量评估等关键信息。
              </p>
              
              <h3 className="font-semibold text-blue-700 mb-2">四大业务板块场景梳理</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">城市燃气板块</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>管网智能巡检与泄漏预警</li>
                    <li>智能调度与负荷预测</li>
                    <li>设备预测性维护</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">上游资源板块</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>气源价格智能预测</li>
                    <li>采购策略优化</li>
                    <li>供应链风险预警</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">综合能源板块</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>多能源协同优化</li>
                    <li>综合能效智能分析</li>
                    <li>智能微网控制</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold">智慧服务板块</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>全渠道智能客服</li>
                    <li>客户画像与精准营销</li>
                    <li>服务质量智能评估</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI场景优先级评估体系</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">AIVA+评估方法论</h3>
              <div className="mb-3">
                <p className="text-xs text-gray-700 mb-2">
                  构建七维评估体系，对每个AI场景进行全面评估，形成科学的优先级排序：
                </p>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">价值潜力</p>
                    <p className="text-gray-700">20%</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">实施难度</p>
                    <p className="text-gray-700">15%</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">安全影响</p>
                    <p className="text-gray-700">20%</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">合规要求</p>
                    <p className="text-gray-700">10%</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">伦理考量</p>
                    <p className="text-gray-700">5%</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">推广性</p>
                    <p className="text-gray-700">15%</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">可行性</p>
                    <p className="text-gray-700">15%</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">评估执行流程与方法</h3>
              <div className="space-y-2 text-xs mb-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold">专家评审阶段</p>
                    <p className="text-gray-700">组建包含5-7名专家的评审团，涵盖燃气领域专家、AI技术专家、项目管理专家等</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold">量化分析阶段</p>
                    <p className="text-gray-700">专家在线评分系统，自动计算各维度得分，生成评分雷达图、排序列表等可视化结果</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold">模拟验证阶段</p>
                    <p className="text-gray-700">对排名前10的高优先级场景，开展可行性验证，确认数据获取难易程度，评估业务接受程度</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">动态评估与调优机制</h3>
              <p className="text-xs text-gray-700">
                建立场景优先级动态评估机制，每季度开展评估复核。关注业务环境变化、技术成熟度提升、数据资源优化等因素对优先级的影响。设计"场景生命周期管理模型"，设定4个阶段：孵化期、成长期、成熟期、优化期。
              </p>
            </div>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div className="w-1/2 pl-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">速赢项目识别策略</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">4P速赢筛选模型</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">Portability (通用性)</h4>
                  <p className="text-xs text-gray-700">
                    评估技术方案的可迁移程度，建立"技术通用性评估矩阵"，优先选择可复用率80%以上的技术方案。
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">Promotability (推广性)</h4>
                  <p className="text-xs text-gray-700">
                    评估项目在集团内的推广潜力，建立"推广阻力评估模型"，设计包含标准化部署包、培训材料的"快速复制方案"。
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">Platform (平台性)</h4>
                  <p className="text-xs text-gray-700">
                    评估项目对AI中台建设的支撑价值，建立"平台贡献度评估体系"，评估数据积累、算法沉淀、运营经验的可沉淀程度。
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">Profit (价值性)</h4>
                  <p className="text-xs text-gray-700">
                    量化项目投入产出比，建立"快速价值计算模型"，细化成本分解（开发成本、部署成本、运维成本）和收益预测。
                  </p>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">速赢项目实施方法论</h3>
              <div className="flex space-x-3 mb-3">
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-center">
                  <p className="text-xs font-semibold mb-1">3天</p>
                  <p className="text-xs text-gray-700">完成项目启动</p>
                </div>
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-center">
                  <p className="text-xs font-semibold mb-1">3周</p>
                  <p className="text-xs text-gray-700">完成MVP开发</p>
                </div>
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-center">
                  <p className="text-xs font-semibold mb-1">3个月</p>
                  <p className="text-xs text-gray-700">完成全面部署</p>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">速赢项目价值呈现体系</h3>
              <div className="flex space-x-3">
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-xs">
                  <p className="font-semibold text-center mb-1">直观视觉化</p>
                  <p className="text-center text-gray-700">实时大屏展示项目效果</p>
                </div>
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-xs">
                  <p className="font-semibold text-center mb-1">数据量化</p>
                  <p className="text-center text-gray-700">KPI指标体系，多维度效果展示</p>
                </div>
                <div className="w-1/3 bg-blue-50 p-2 rounded-lg text-xs">
                  <p className="font-semibold text-center mb-1">用户反馈</p>
                  <p className="text-center text-gray-700">价值故事库，一线使用体验分享</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">实施路线图设计</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">实施路线图总体架构</h3>
              <div className="mb-3">
                <p className="text-xs text-gray-700 mb-2">
                  构建"3+12+3N"路线图架构：3个主要阶段，12个关键里程碑，N个具体项目组合
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">基础建设期 (0-6个月)</h4>
                      <p className="text-xs text-gray-700">聚焦速赢场景试点，重点建设核心AI平台和数据基础设施，选取智能客服、管网巡检图像识别等具有快速验证价值的场景进行试点应用。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">规模推广期 (6-18个月)</h4>
                      <p className="text-xs text-gray-700">基于试点成功经验，系统性推广至城市燃气核心场景，建立完善的AI治理体系，制定统一的应用标准和规范。建立AI中台能力，支持各业务域快速开发和部署AI应用。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg mr-3 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">创新引领期 (18-60个月)</h4>
                      <p className="text-xs text-gray-700">实现四大业务板块AI应用全覆盖，构建完整的智能运营生态。建立AI创新孵化机制，持续探索前沿AI技术在燃气行业的创新应用。参与行业标准制定，建立燃气行业AI应用标准体系。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">分阶段详细实施计划</h3>
              <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">第一阶段关键任务</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>AI战略规划内部宣贯</li>
                    <li>数据标准规范建设</li>
                    <li>速赢项目试点上线</li>
                    <li>AI基础平台搭建</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">第二阶段关键任务</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>AI中台全面建设</li>
                    <li>核心场景批量开发</li>
                    <li>全集团推广培训</li>
                    <li>数字孪生平台建设</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">第三阶段关键任务</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>前沿技术研究应用</li>
                    <li>建立行业合作生态</li>
                    <li>参与行业标准制定</li>
                    <li>跨业务板块协同应用</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">投资策略与价值实现</h3>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-semibold">投资规划</p>
                    <ul className="ml-3 list-disc space-y-1">
                      <li>三年滚动预算机制</li>
                      <li>关键节点评审机制</li>
                      <li>阶段性投资释放</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold">价值评估</p>
                    <ul className="ml-3 list-disc space-y-1">
                      <li>三维价值指标体系</li>
                      <li>价值实现追踪仪表板</li>
                      <li>投资效益数据库建设</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <div className="mt-4 text-right text-sm text-gray-500">
        深圳燃气人工智能战略规划项目述标 | 实施方案 4/5
      </div>
    </div>
  );
};

export default ImplementationPlanPage4;
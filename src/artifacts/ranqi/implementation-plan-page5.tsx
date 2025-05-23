import React from 'react';

const ImplementationPlanPage5 = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-8">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">AI治理机制建设方案</h1>
        <div className="w-24 h-1 bg-blue-600"></div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex flex-1">
        {/* 左侧内容 */}
        <div className="w-1/2 pr-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI治理机制总体设计</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">组织架构设计原则</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-center font-bold text-blue-700 mb-2">三统一、三保障</p>
                <p className="text-sm text-gray-700">
                  三统一：统一规划、统一标准、统一平台；三保障：保障安全、保障合规、保障创新。采用"矩阵式+专业化"的设计理念，构建"1+3+3"治理架构模式。
                </p>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">治理机制成熟度评估模型</h3>
              <div className="flex items-center mb-3">
                <div className="w-full">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-1/5 bg-blue-100 p-2 rounded-lg text-center text-xs font-semibold">
                      初始级
                    </div>
                    <div className="w-1/5 bg-blue-100 p-2 rounded-lg text-center text-xs font-semibold">
                      管理级
                    </div>
                    <div className="w-1/5 bg-blue-100 p-2 rounded-lg text-center text-xs font-semibold">
                      标准化级
                    </div>
                    <div className="w-1/5 bg-blue-100 p-2 rounded-lg text-center text-xs font-semibold">
                      量化管理级
                    </div>
                    <div className="w-1/5 bg-blue-100 p-2 rounded-lg text-center text-xs font-semibold">
                      优化级
                    </div>
                  </div>
                  <p className="text-xs text-gray-700">
                    参照CMMI成熟度模型，建立五个成熟度等级，量化指标包括：治理制度覆盖率、流程标准化程度、数据治理完善度、运营效能指数等。每个指标采用百分制评分，综合得分确定整体成熟度级别。
                  </p>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">分级治理执行机制</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold">第一级决策：AI战略委员会</p>
                    <p className="text-gray-700">每年召开4次例会和若干临时会议，决策内容包括总体规划、年度预算、重大事项。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold">第二级决策：专业委员会</p>
                    <p className="text-gray-700">每月召开1次例会，审议具体应用方案、技术标准。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold">第三级决策：业务单元AI团队</p>
                    <p className="text-gray-700">采用敏捷决策模式，日常运营决策不超过3个工作日。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI治理组织架构设计</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">AI战略委员会职能定位</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-center font-bold text-blue-700 mb-2">定方向、定投入、定考核</p>
                <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                  <li>方向决策权：AI发展规划审议、年度目标设定、重大项目审批</li>
                  <li>资源分配权：年度预算审批、人员编制决定、重要资源调配</li>
                  <li>绩效管理权：KPI制定、考核评价、奖惩决策</li>
                </ul>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">AI推进办公室组织设计</h3>
              <div className="space-y-2 text-xs mb-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3+</div>
                  <div>
                    <p className="font-semibold">专职领导</p>
                    <p className="text-gray-700">主任1名、副主任2名</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold">职能组</p>
                    <p className="text-gray-700">战略规划组5人、项目管理组6人、技术标准组5人</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full mr-2 flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold">综合协调中心</p>
                    <p className="text-gray-700">负责跨部门协调，信息共享，绩效管理</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">专业委员会设置方案</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">安全专业委员会</p>
                  <p className="text-center text-gray-700">安全部门牵头，审查AI应用安全风险</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">数据专业委员会</p>
                  <p className="text-center text-gray-700">信息管理部门牵头，负责数据治理规范</p>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">应用专业委员会</p>
                  <p className="text-center text-gray-700">业务部门轮值，负责应用场景评估</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div className="w-1/2 pl-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI治理量化指标体系</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">核心KPI指标设计</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">效益维度 (30%)</h4>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>AI应用ROI ≥ 200%</li>
                    <li>成本降低率 ≥ 15%</li>
                    <li>收入增长贡献率 ≥ 5%</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">质量维度 (25%)</h4>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>模型准确率 ≥ 95%</li>
                    <li>服务可用率 ≥ 99.9%</li>
                    <li>用户满意度 ≥ 90%</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">安全维度 (30%)</h4>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>安全事件发生率 ≤ 0.01%</li>
                    <li>系统安全等级 ≥ 3级</li>
                    <li>数据泄露风险指数 ≤ 0.1</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-center mb-1">创新维度 (15%)</h4>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>新场景开发数量 ≥ 20个/年</li>
                    <li>专利申请数量 ≥ 5项/年</li>
                    <li>创新价值转化率 ≥ 60%</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">价值评估量化模型</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-semibold">财务价值维度 (40%)</p>
                    <p className="text-gray-700">采用DCF模型，计算5年期现金流折现值</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">运营价值维度 (35%)</p>
                    <p className="text-gray-700">使用"效能提升指数"评估效率提升</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">战略价值维度 (25%)</p>
                    <p className="text-gray-700">采用平衡计分卡方法评估长期价值</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">治理成熟度量化评估</h3>
              <p className="text-xs text-gray-700">
                建立"5+2"评估模型：5个一级指标（组织架构、流程机制、数据管理、应用质量、创新能力）和2个加权指标（安全保障、合规程度）。评估方法采用"自评+互评+专家评"，权重分别为30%、30%、40%。
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI实验室建设方案</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">实验室定位与使命</h3>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-center font-bold text-blue-700 mb-2">燃气行业AI创新研发高地</p>
                <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                  <li>前沿技术研究：每年至少研究3项前沿AI技术在燃气行业的应用</li>
                  <li>行业应用创新：每年孵化5-8个创新应用场景</li>
                  <li>标准规范制定：参与至少2项行业或国家标准制定</li>
                  <li>人才梯队培养：每年培养50名以上AI专业人才</li>
                </ul>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">实验室组织架构</h3>
              <div className="mb-3">
                <p className="text-xs text-gray-700 mb-2">
                  采用"研究院+6大中心"的组织架构：
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">AI算法研究中心</p>
                    <p className="text-gray-700">15人</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">管网智能化中心</p>
                    <p className="text-gray-700">12人</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">客户服务AI中心</p>
                    <p className="text-gray-700">10人</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">能源优化中心</p>
                    <p className="text-gray-700">10人</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">安全预警中心</p>
                    <p className="text-gray-700">12人</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="font-semibold">应用转化中心</p>
                    <p className="text-gray-700">8人</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-blue-700 mb-2">研发能力建设路线图</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">第一年（基础建设期）</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>引进核心团队</li>
                    <li>建立基础设施</li>
                    <li>完成行业知识图谱构建</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">第二年（能力提升期）</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>建立研究机构合作关系</li>
                    <li>申请5项以上专利</li>
                    <li>开发10个以上行业AI组件</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="font-semibold text-center">第三年（创新引领期）</p>
                  <ul className="ml-3 list-disc space-y-1">
                    <li>参与行业标准制定</li>
                    <li>发布行业白皮书</li>
                    <li>建成全价值链解决方案</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">AI项目运营机制设计</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">项目管理标准流程</h3>
                  <p className="text-xs text-gray-700">
                    建立覆盖项目全生命周期的标准流程，分为8个阶段、24个关键节点：规划阶段、启动阶段、执行阶段、部署阶段、运行阶段、优化阶段、评估阶段、收尾阶段。每个节点设置明确的完成标准和验收要求。
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">项目质量管理体系</h3>
                  <p className="text-xs text-gray-700">
                    建立四级质量管控体系：项目级质量控制、部门级质量审查、公司级质量评估、专家级质量认证。建立质量评分体系，满分100分，项目质量得分≥80分方可上线运行。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 页脚 */}
      <div className="mt-4 text-right text-sm text-gray-500">
        深圳燃气人工智能战略规划项目述标 | 实施方案 5/5
      </div>
    </div>
  );
};

export default ImplementationPlanPage5;
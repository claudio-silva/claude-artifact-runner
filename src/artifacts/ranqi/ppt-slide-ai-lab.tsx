import React from 'react';

const AILabSlide = () => {
  return (
    <div className="flex flex-col h-full bg-white p-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">AI实验室建设方案</h1>
        <h2 className="text-2xl font-semibold text-blue-500 mt-2">价值孵化 · 快速落地 · 能力赋能</h2>
      </div>
      
      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* 左侧：成功案例分享 */}
        <div className="bg-blue-50 rounded-lg p-5 shadow-md border border-blue-100">
          <h3 className="text-xl font-bold text-blue-700 mb-3">成功案例：东方洪岗位创新工作室</h3>
          
          <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
            <div className="flex items-center mb-2">
              <div className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-2">奖</div>
              <p className="font-bold text-gray-800">"万众学用"AI应用活动成果</p>
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
              <li>集团2025年3-6月开展群众性AI应用活动</li>
              <li>工作室获得<span className="font-bold text-red-500">三个奖项中的两个</span></li>
              <li>通过敏捷开发方法实现快速场景落地</li>
              <li>2025年规划AI+投标应用开发计划</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="font-bold text-gray-800 mb-2">核心成功经验</p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700">
              <li><span className="font-bold text-blue-600">场景驱动</span>：从实际业务痛点出发，聚焦高价值场景</li>
              <li><span className="font-bold text-blue-600">工具赋能</span>：充分利用Cursor、Trae等AI开发工具，降低开发门槛</li>
              <li><span className="font-bold text-blue-600">敏捷迭代</span>：快速试错，持续优化，1-2周出原型</li>
              <li><span className="font-bold text-blue-600">跨界融合</span>：业务专家+技术人员混合编队</li>
            </ul>
          </div>
        </div>
        
        {/* 中间：实验室功能与定位 */}
        <div className="bg-green-50 rounded-lg p-5 shadow-md border border-green-100">
          <h3 className="text-xl font-bold text-green-700 mb-3">燃气AI实验室定位与职能</h3>
          
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold z-10">
              核心
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm mt-6 mb-4 border-t-4 border-green-500">
              <p className="font-bold text-center text-green-700 mb-2">AI应用"快速孵化器"</p>
              <p className="text-sm text-center">在2-4周内将AI应用从创意转化为可用原型</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="font-bold text-green-600 mb-1">场景研发中心</p>
              <ul className="list-disc pl-5 text-xs">
                <li>业务场景创新挖掘</li>
                <li>AI应用原型开发</li>
                <li>技术验证与评估</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="font-bold text-green-600 mb-1">知识沉淀中心</p>
              <ul className="list-disc pl-5 text-xs">
                <li>行业专业知识库建设</li>
                <li>最佳实践总结</li>
                <li>复用组件库维护</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="font-bold text-green-600 mb-1">技能培训中心</p>
              <ul className="list-disc pl-5 text-xs">
                <li>AI工具使用培训</li>
                <li>场景构思指导</li>
                <li>模型调优技能</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="font-bold text-green-600 mb-1">生态连接中心</p>
              <ul className="list-disc pl-5 text-xs">
                <li>外部资源对接</li>
                <li>高校研究合作</li>
                <li>供应商筛选认证</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-100 rounded p-2 text-center">
            <p className="font-bold text-green-700">年度目标：孵化20+场景应用，培养50+AI应用人才</p>
          </div>
        </div>
        
        {/* 右侧：组织架构 */}
        <div className="bg-purple-50 rounded-lg p-5 shadow-md border border-purple-100">
          <h3 className="text-xl font-bold text-purple-700 mb-3">精简高效的组织架构</h3>
          
          <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
            <p className="font-bold text-center text-purple-700 mb-2">人员编制</p>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">实验室主任：</span>
              <span>1名（具备AI+业务复合背景）</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">技术骨干：</span>
              <span>3-5名（AI/软件开发技能）</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">业务专家：</span>
              <span>4-6名（各业务板块兼职）</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium">运营协调：</span>
              <span>1-2名（项目管理/知识管理）</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
            <p className="font-bold text-center text-purple-700 mb-2">运作模式</p>
            <ul className="list-disc pl-5 text-sm">
              <li className="mb-1"><span className="font-bold text-purple-600">项目制</span>：按场景组建临时项目组</li>
              <li className="mb-1"><span className="font-bold text-purple-600">创客空间</span>：提供专用工作区与算力</li>
              <li className="mb-1"><span className="font-bold text-purple-600">导师制</span>：技术导师+业务导师双配</li>
              <li><span className="font-bold text-purple-600">创新赛</span>：定期举办AI应用大赛</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="font-bold text-center text-purple-700 mb-2">工具赋能</p>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div className="bg-purple-100 rounded p-1">
                <p className="text-xs font-bold">Cursor</p>
                <p className="text-xs">AI编程助手</p>
              </div>
              <div className="bg-purple-100 rounded p-1">
                <p className="text-xs font-bold">Trae</p>
                <p className="text-xs">快速开发平台</p>
              </div>
              <div className="bg-purple-100 rounded p-1">
                <p className="text-xs font-bold">DS大模型</p>
                <p className="text-xs">知识增强</p>
              </div>
              <div className="bg-purple-100 rounded p-1">
                <p className="text-xs font-bold">Auto-GPT</p>
                <p className="text-xs">自动化代理</p>
              </div>
              <div className="bg-purple-100 rounded p-1">
                <p className="text-xs font-bold">Vercel</p>
                <p className="text-xs">快速部署</p>
              </div>
              <div className="bg-purple-100 rounded p-1">
                <p className="text-xs font-bold">Retool</p>
                <p className="text-xs">低代码平台</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部：实施路径 */}
      <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-700 mb-3 text-center">AI实验室实施路径</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded p-3 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold -mt-2 -ml-2">1</div>
            <p className="font-bold text-center text-yellow-700 mb-1">筹备阶段</p>
            <ul className="list-disc pl-5 text-xs">
              <li>组建核心团队</li>
              <li>场地与设备配置</li>
              <li>制定管理制度</li>
            </ul>
            <p className="text-center text-gray-500 text-xs mt-1">1-2个月</p>
          </div>
          
          <div className="bg-white rounded p-3 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold -mt-2 -ml-2">2</div>
            <p className="font-bold text-center text-yellow-700 mb-1">试点阶段</p>
            <ul className="list-disc pl-5 text-xs">
              <li>选择2-3个场景</li>
              <li>快速开发原型</li>
              <li>形成工作方法</li>
            </ul>
            <p className="text-center text-gray-500 text-xs mt-1">3-4个月</p>
          </div>
          
          <div className="bg-white rounded p-3 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold -mt-2 -ml-2">3</div>
            <p className="font-bold text-center text-yellow-700 mb-1">推广阶段</p>
            <ul className="list-disc pl-5 text-xs">
              <li>全员AI技能培训</li>
              <li>"燃气AI大赛"</li>
              <li>建立激励机制</li>
            </ul>
            <p className="text-center text-gray-500 text-xs mt-1">5-8个月</p>
          </div>
          
          <div className="bg-white rounded p-3 shadow-sm relative">
            <div className="absolute top-0 left-0 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold -mt-2 -ml-2">4</div>
            <p className="font-bold text-center text-yellow-700 mb-1">成熟阶段</p>
            <ul className="list-disc pl-5 text-xs">
              <li>建立开放生态</li>
              <li>行业标准引领</li>
              <li>创新成果转化</li>
            </ul>
            <p className="text-center text-gray-500 text-xs mt-1">9-12个月</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILabSlide;

import React, { useState, useEffect } from 'react';
import { Network, Brain, Shield, Cpu, Server, Cloud, Layers, Target, Star, CheckCircle, Award, Rocket  } from 'lucide-react';

const PPTSlide = ({ children, title }) => (
  <div className="bg-white min-h-screen w-full text-gray-800 p-8 flex flex-col shadow-lg">
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">{title}</h1>
    </div>
    <div className="flex-1 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const CoreSolutionPPTs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI愿景与蓝图总体架构",
      content: <Slide1Content />
    },
    {
      title: "AI技术平台架构设计",
      content: <Slide2Content />
    },
    {
      title: "核心场景识别与评估",
      content: <Slide3Content />
    },
    {
      title: "速赢项目设计",
      content: <Slide4Content />
    },
    {
      title: "实施路线图设计",
      content: <Slide5Content />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentSlideContent = slides[currentSlide];

  return (
    <div className="relative">
      <PPTSlide title={currentSlideContent.title}>
        {currentSlideContent.content}
      </PPTSlide>
    </div>
  );
};

// Slide1: AI愿景与蓝图总体架构
const Slide1Content = () => {
  return (
    <div className="w-full h-full">
      {/* 智慧血脉愿景 */}
      <div className="text-center mb-8">
        <div className="inline-block px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white shadow">
          <h2 className="text-2xl font-bold">"智慧血脉" 打造城市智能能源枢纽</h2>
        </div>
      </div>
      
      {/* 四层架构主体框架 */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* 架构图左侧 */}
        <div className="col-span-2">
          <div className="space-y-6">
            {/* 第1层 */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-400 shadow-sm">
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">战略评估层</h3>
                  <p className="text-sm text-gray-600">组织能力 • 技术基础 • 数据资产 • 人才储备</p>
                </div>
              </div>
            </div>
            
            {/* 第2层 */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-400 shadow-sm">
              <div className="flex items-center gap-4">
                <Brain className="w-8 h-8 text-yellow-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">规划设计层</h3>
                  <p className="text-sm text-gray-600">愿景蓝图 • 技术架构 • 场景规划 • 流程重塑</p>
                </div>
              </div>
            </div>
            
            {/* 第3层 */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400 shadow-sm">
              <div className="flex items-center gap-4">
                <Rocket className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">实施路径层</h3>
                  <p className="text-sm text-gray-600">分阶段实施 • 快速试点 • 推广优化</p>
                </div>
              </div>
            </div>
            
            {/* 第4层 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400 shadow-sm">
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">治理保障层</h3>
                  <p className="text-sm text-gray-600">组织机制 • 运营模式 • 管理制度</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧目标分解 */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-400 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-2">短期目标（0-12月）</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>✓ AI平台基础建设完成</li>
              <li>✓ 3-5个速赢项目落地</li>
              <li>✓ 核心团队组建完毕</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-400 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">中期目标（12-36月）</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>✓ 核心业务AI覆盖达50%+</li>
              <li>✓ 运营效率提升20%+</li>
              <li>✓ 形成行业标准参考模式</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-400 shadow-sm">
            <h4 className="font-bold text-green-600 mb-2">长期目标（36-60月）</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>✓ 四大板块AI全覆盖</li>
              <li>✓ 建成行业AI示范标杆</li>
              <li>✓ 成本降低30%以上</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 核心愿景总结 */}
      <div className="text-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white shadow">
          <p className="text-lg">安全 • 智慧 • 绿色 的现代化燃气运营体系</p>
        </div>
      </div>
    </div>
  );
};

// Slide2: AI技术平台架构设计
const Slide2Content = () => {
  return (
    <div className="w-full">
      {/* 云-边-端架构图 */}
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-8">
          {/* 云端 */}
          <div className="text-center">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-400 mb-4 shadow-sm">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">云端</h3>
              <p className="text-sm text-gray-600">AI模型训练、大数据分析</p>
            </div>
          </div>
          
          {/* 边缘 */}
          <div className="text-center">
            <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border border-green-400 mb-4 shadow-sm">
              <Server className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">边缘</h3>
              <p className="text-sm text-gray-600">本地数据处理、实时决策</p>
            </div>
          </div>
          
          {/* 终端 */}
          <div className="text-center">
            <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-400 mb-4 shadow-sm">
              <Cpu className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">终端</h3>
              <p className="text-sm text-gray-600">感知设备、智能终端</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 四大核心平台 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-400 shadow-sm">
          <h4 className="text-lg font-bold mb-3 text-red-600">AI技术平台</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• 统一AI开发环境</li>
            <li>• 模型市场与管理</li>
            <li>• 自动化ML Pipeline</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400 shadow-sm">
          <h4 className="text-lg font-bold mb-3 text-green-600">数据管理平台</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• 数据湖/数据仓库</li>
            <li>• 主数据管理</li>
            <li>• 数据治理体系</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400 shadow-sm">
          <h4 className="text-lg font-bold mb-3 text-blue-600">应用开发平台</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• 低代码/无代码工具</li>
            <li>• API服务管理</li>
            <li>• 应用运行环境</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400 shadow-sm">
          <h4 className="text-lg font-bold mb-3 text-purple-600">治理管理平台</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• AI项目管理</li>
            <li>• 安全监控与审计</li>
            <li>• 绩效评估体系</li>
          </ul>
        </div>
      </div>
      
      {/* 国产化技术栈 */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">国产化技术栈选型方案</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded mb-2">
              <Network className="w-8 h-8 mx-auto text-blue-600" />
            </div>
            <div className="font-bold text-blue-600">操作系统</div>
            <div className="text-sm text-gray-600">统信UOS、麒麟</div>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded mb-2">
              <Brain className="w-8 h-8 mx-auto text-green-600" />
            </div>
            <div className="font-bold text-green-600">AI框架</div>
            <div className="text-sm text-gray-600">PaddlePaddle</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded mb-2">
              <Cpu className="w-8 h-8 mx-auto text-purple-600" />
            </div>
            <div className="font-bold text-purple-600">AI芯片</div>
            <div className="text-sm text-gray-600">昇腾、寒武纪</div>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 p-4 rounded mb-2">
              <Shield className="w-8 h-8 mx-auto text-yellow-600" />
            </div>
            <div className="font-bold text-yellow-600">数据库</div>
            <div className="text-sm text-gray-600">TiDB、OceanBase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide3: 核心场景识别与评估
const Slide3Content = () => {
  const scenarios = [
    { name: "管网泄漏预警", priority: 95, aiva: 85 },
    { name: "智能客服系统", priority: 88, aiva: 80 },
    { name: "设备预测维护", priority: 82, aiva: 75 },
    { name: "能源需求预测", priority: 78, aiva: 72 },
    { name: "智能调度优化", priority: 75, aiva: 70 }
  ];
  
  return (
    <div className="w-full">
      {/* AIVA+评估模型 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-center mb-6 text-gray-800">AIVA+七维评估模型</h3>
        <div className="grid grid-cols-7 gap-2">
          {[
            {name: "Value", label: "价值潜力", color: "from-red-400 to-orange-400"},
            {name: "Feasibility", label: "实施难度", color: "from-orange-400 to-yellow-400"},
            {name: "Security", label: "安全影响", color: "from-yellow-400 to-lime-400"},
            {name: "Compliance", label: "合规要求", color: "from-lime-400 to-green-400"},
            {name: "Innovation", label: "创新性", color: "from-green-400 to-teal-400"},
            {name: "Scalability", label: "可推广性", color: "from-teal-400 to-cyan-400"},
            {name: "Ethics", label: "伦理性", color: "from-cyan-400 to-blue-400"}
          ].map((dim, index) => (
            <div key={index} className={`bg-gradient-to-r ${dim.color} p-4 rounded-lg text-white shadow-sm`}>
              <div className="text-center font-bold">{dim.name}</div>
              <div className="text-center text-sm">{dim.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 全价值链场景框架 */}
      <div className="mb-8 flex justify-center">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 w-4/5 shadow-sm">
          <h3 className="text-lg font-bold text-center mb-4 text-gray-800">全价值链AI场景梳理框架</h3>
          <div className="flex justify-between">
            {["气源采购", "储运管理", "管网运行", "用户服务", "安全维护"].map((stage, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-2 text-blue-800 font-medium">
                  <span>{stage}</span>
                </div>
                {index < 4 && (
                  <div className="absolute left-1/2 w-16 h-0.5 bg-gray-300 mt-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 场景优先级排序 */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-gray-800">场景优先级排序结果</h3>
        <div className="space-y-2">
          {scenarios.map((scenario, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="flex-1 bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800">{scenario.name}</span>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-green-50 rounded text-green-600 border border-green-200">
                      P: {scenario.priority}
                    </div>
                    <div className="px-3 py-1 bg-blue-50 rounded text-blue-600 border border-blue-200">
                      AI: {scenario.aiva}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide4: 速赢项目设计
const Slide4Content = () => {
  const quickWinProjects = [
    {
      name: "智能客服系统",
      timeframe: "2-3个月",
      impact: "直接降低人力成本",
      tech: "对话机器人",
      business: "服务板块"
    },
    {
      name: "AI视频巡检",
      timeframe: "3-4个月",
      impact: "提升巡检效率",
      tech: "图像识别",
      business: "城市燃气"
    },
    {
      name: "预测维护试点",
      timeframe: "4个月",
      impact: "减少故障停机",
      tech: "时序分析",
      business: "上游资源"
    }
  ];
  
  return (
    <div className="w-full">
      {/* 4P模型 */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          {label: "通用性", icon: Layers, color: "blue", desc: "方案可复用性"},
          {label: "推广性", icon: Network, color: "green", desc: "快速推广能力"},
          {label: "平台性", icon: Server, color: "purple", desc: "平台贡献度"},
          {label: "价值性", icon: Star, color: "yellow", desc: "投入产出比"}
        ].map((item, index) => (
          <div key={index} className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 p-6 rounded-lg border border-${item.color}-400 shadow-sm`}>
            <div className="text-center">
              <item.icon className={`w-10 h-10 mx-auto mb-2 text-${item.color}-600`} />
              <h4 className={`font-bold text-${item.color}-600`}>{item.label}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* 速赢项目候选池 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">速赢项目候选池</h3>
        <div className="grid grid-cols-3 gap-4">
          {quickWinProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3">{project.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">时间：{project.timeframe}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-700">价值：{project.impact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">技术：{project.tech}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-500" />
                  <span className="text-gray-700">业务：{project.business}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 快速实施路径 */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-400 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">快速实施路径规划</h3>
        <div className="grid grid-cols-5 gap-2">
          {["需求确认", "MVP开发", "小范围试点", "优化迭代", "规模推广"].map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-indigo-100 p-4 rounded-lg mb-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-full mx-auto flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="font-bold text-gray-800">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Slide5: 实施路线图设计
const Slide5Content = () => {
  const roadmap = [
    {
      phase: "基础夯实期",
      period: "1-6个月",
      color: "from-red-500 to-orange-500",
      tasks: ["AI平台建设", "数据治理", "速赢项目试点", "团队建设"]
    },
    {
      phase: "规模应用期",
      period: "6-18个月",
      color: "from-yellow-500 to-lime-500",
      tasks: ["核心场景推广", "生态合作", "运营优化", "标准化"]
    },
    {
      phase: "创新引领期",
      period: "18-60个月",
      color: "from-green-500 to-teal-500",
      tasks: ["前沿探索", "行业标准", "全面覆盖", "示范标杆"]
    }
  ];
  
  return (
    <div className="w-full">
      {/* 分阶段实施路线图 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">分阶段实施路线图</h3>
        <div className="grid grid-cols-3 gap-6">
          {roadmap.map((phase, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg border border-gray-300 shadow-sm`}>
              <h4 className="text-lg font-bold mb-2 text-gray-800">{phase.phase}</h4>
              <p className="text-sm text-gray-600 mb-4">{phase.period}</p>
              <ul className="space-y-2">
                {phase.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r ${phase.color} text-white`}>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* 关键里程碑 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">关键里程碑时间节点</h3>
        <div className="relative">
          <div className="absolute left-0 right-0 h-1 bg-gray-200 top-6"></div>
          <div className="flex justify-between">
            {[
              {month: "M3", task: "AI平台上线", color: "red"},
              {month: "M6", task: "首批速赢项目", color: "orange"},
              {month: "M12", task: "核心应用交付", color: "yellow"},
              {month: "M24", task: "成为行业标杆", color: "green"},
              {month: "M36", task: "引领行业标准", color: "blue"}
            ].map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`w-12 h-12 bg-${milestone.color}-500 rounded-full flex items-center justify-center text-white font-bold z-10 relative shadow`}>
                  {milestone.month}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-center w-32">
                  <div className="bg-white p-2 rounded text-sm border border-gray-200 shadow-sm text-gray-800">{milestone.task}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 项目群管理机制 */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">项目群管理机制</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-600 mb-2">组织保障</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• AI推进领导小组</li>
              <li>• 项目管理办公室</li>
              <li>• 专家委员会</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-600 mb-2">运行机制</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 周报月评制度</li>
              <li>• 阶段评审机制</li>
              <li>• 风险管控体系</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-600 mb-2">协同机制</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 跨部门联席会</li>
              <li>• 资源调配机制</li>
              <li>• 知识共享平台</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreSolutionPPTs;
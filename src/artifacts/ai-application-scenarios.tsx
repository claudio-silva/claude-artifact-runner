import React, { useState } from 'react';
import { 
  CircleUserRound, 
  BarChart2, 
  Heart, 
  ScrollText, 
  Building, 
  ChevronRight,
  Check
} from 'lucide-react';

const ScenarioTab = ({ icon: Icon, title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center p-4 w-full text-left transition-colors ${
      isActive 
        ? 'bg-blue-600 text-white' 
        : 'bg-white text-gray-700 hover:bg-blue-50'
    }`}
  >
    <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-blue-600'}`} />
    <span className="font-medium">{title}</span>
    <ChevronRight className={`w-5 h-5 ml-auto ${isActive ? 'text-white' : 'text-gray-400'}`} />
  </button>
);

const ScenarioDetail = ({ title, subtitle, features, workflow }) => (
  <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{subtitle}</p>
    </div>
    
    {/* 核心功能 */}
    <div>
      <h4 className="text-lg font-medium text-gray-800 mb-3">核心功能</h4>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
            <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* 业务流程 */}
    <div>
      <h4 className="text-lg font-medium text-gray-800 mb-3">业务流程</h4>
      <div className="flex items-center justify-between">
        {workflow.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                {index + 1}
              </div>
              <span className="text-sm text-gray-600 mt-2 text-center max-w-[100px]">
                {step}
              </span>
            </div>
            {index < workflow.length - 1 && (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const scenarios = [
  {
    id: 1,
    icon: CircleUserRound,
    title: "智能诊疗服务",
    subtitle: "全流程智能化诊疗服务体系",
    features: [
      "AI辅助诊断系统",
      "智能影像识别",
      "智能导医分诊",
      "医疗文本理解",
      "智能随访管理",
      "风险预警提示"
    ],
    workflow: ["智能问诊", "辅助诊断", "治疗方案", "智能随访"]
  },
  {
    id: 2,
    icon: Heart,
    title: "医药服务支持",
    subtitle: "药物研发与管理智能化支持",
    features: [
      "AI药物筛选",
      "临床试验优化",
      "处方合理性审核",
      "药品库存管理",
      "用药指导",
      "不良反应监测"
    ],
    workflow: ["研发筛选", "临床试验", "上市审批", "用药管理"]
  },
  {
    id: 3,
    icon: ScrollText,
    title: "医保服务管理",
    subtitle: "智能化医保服务与管理体系",
    features: [
      "智能费用审核",
      "欺诈行为识别",
      "医保控费分析",
      "政策智能解读",
      "异地结算",
      "服务效率提升"
    ],
    workflow: ["智能审核", "风险识别", "费用控制", "服务优化"]
  },
  {
    id: 4,
    icon: Building,
    title: "医院运营管理",
    subtitle: "医院智能化运营管理体系",
    features: [
      "智能排班系统",
      "资源调配优化",
      "绩效分析",
      "质量监控",
      "运营分析",
      "决策支持"
    ],
    workflow: ["数据采集", "智能分析", "优化建议", "持续改进"]
  }
];

const Slide = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* 标题区域 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 pb-2 border-b-2 border-blue-600">
            AI在医疗领域的具体应用场景
          </h1>
          <p className="text-gray-600">深度分析AI技术在医疗各环节的具体应用</p>
        </div>

        {/* 内容区域 */}
        <div className="grid grid-cols-3 gap-6">
          {/* 左侧场景选择 */}
          <div className="space-y-2 border rounded-lg overflow-hidden">
            {scenarios.map((scenario) => (
              <ScenarioTab
                key={scenario.id}
                icon={scenario.icon}
                title={scenario.title}
                isActive={activeScenario.id === scenario.id}
                onClick={() => setActiveScenario(scenario)}
              />
            ))}
          </div>

          {/* 右侧场景详情 */}
          <div className="col-span-2">
            <ScenarioDetail {...activeScenario} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
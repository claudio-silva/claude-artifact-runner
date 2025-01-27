import React, { useState } from 'react';
import { 
  CircleUserRound, 
  BarChart2, 
  Heart, 
  ScrollText, 
  Building, 
  ChevronRight,
  Check,
  LucideIcon,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScenarioTabProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

interface Scenario {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  features: string[];
  workflow: string[];
}

interface ScenarioDetailProps {
  title: string;
  subtitle: string;
  features: string[];
  workflow: string[];
}

const ScenarioTab: React.FC<ScenarioTabProps> = ({ icon: Icon, title, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center p-6 w-full text-left transition-all duration-300 ease-in-out relative overflow-hidden ${
      isActive 
        ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-lg' 
        : 'bg-white text-gray-700 hover:bg-blue-50'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {isActive && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
      />
    )}
    <div className="relative z-10 flex items-center w-full">
      <div className={`p-2 rounded-lg ${isActive ? 'bg-white/10' : 'bg-blue-50'}`}>
        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
      </div>
      <span className="font-medium ml-4 text-lg">{title}</span>
      <ChevronRight 
        className={`w-5 h-5 ml-auto transform transition-transform duration-300 ${
          isActive ? 'text-white rotate-90' : 'text-gray-400'
        }`} 
      />
    </div>
  </motion.button>
);

const ScenarioDetail: React.FC<ScenarioDetailProps> = ({ title, subtitle, features, workflow }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-2xl shadow-xl space-y-10 border border-blue-100"
  >
    <div className="relative">
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 text-blue-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-full h-full" />
      </motion.div>
      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-600 mt-3 text-lg">{subtitle}</p>
    </div>
    
    <div>
      <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full mr-3"></span>
        核心功能
      </h4>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex items-start p-5 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-blue-500 group-hover:bg-blue-600 transition-colors">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700 font-medium ml-3 group-hover:text-blue-600 transition-colors">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
    
    <div>
      <h4 className="text-xl font-semibold text-gray-800 mb-8 flex items-center">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full mr-3"></span>
        业务流程
      </h4>
      <div className="flex items-center justify-between px-6">
        {workflow.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div 
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                {index + 1}
              </div>
              <span className="text-sm font-medium text-gray-600 mt-4 text-center max-w-[120px] group-hover:text-blue-600 transition-colors">
                {step}
              </span>
            </motion.div>
            {index < workflow.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="flex-1 mx-4"
              >
                <div className="h-0.5 bg-gradient-to-r from-blue-600/20 via-blue-400/40 to-blue-600/20 relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 0 }}
                  />
                </div>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </motion.div>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white p-8">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-blue-100">
        <div className="mb-12 relative">
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 text-blue-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-full h-full" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              AI在医疗领域的具体应用场景
            </span>
          </h1>
          <p className="text-xl text-gray-600">深度分析AI技术在医疗各环节的具体应用</p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="space-y-3 border rounded-2xl overflow-hidden shadow-lg bg-white/50 backdrop-blur-sm">
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

          <div className="col-span-2">
            <AnimatePresence mode="wait">
              <ScenarioDetail key={activeScenario.id} {...activeScenario} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
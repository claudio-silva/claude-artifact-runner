import React, { useState, useEffect } from 'react';
import { Zap, Shield, Brain, Workflow, Award, Map, Target, Rocket } from 'lucide-react';

const PPTSlide = ({ children, title }) => (
  <div className="bg-white min-h-screen w-full text-gray-800 p-12 flex flex-col shadow-lg">
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">{title}</h1>
    </div>
    <div className="flex-1 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const ProjectFramework = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "深圳燃气AI转型机遇与挑战分析",
      content: <Slide1Content />
    },
    {
      title: "AI-POWER方法论核心框架",
      content: <Slide2Content />
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

const Slide1Content = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-8">
      {/* 左侧 - 机遇展示 */}
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-400">
          <h2 className="text-xl font-bold mb-4 text-green-600">政策机遇</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">关于加快场景创新以人工智能高水平应用促进经济高质量发展的指导意见</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">深圳市AI先锋城市行动方案</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">广东省AI赋能千行百业政策</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-400">
          <h2 className="text-xl font-bold mb-4 text-blue-600">现有基础</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700">数字孪生燃气管理平台</span>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700">智慧管网、服务、运营体系</span>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700">200万+用户数据积累</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 右侧 - 四大业务板块 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-400">
          <h3 className="text-lg font-bold mb-2 text-red-600">城市燃气</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 智能管网监控</li>
            <li>• 泄漏预警系统</li>
            <li>• 设备预测维护</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-500">
          <h3 className="text-lg font-bold mb-2 text-yellow-600">上游资源</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 价格预测分析</li>
            <li>• 供应链优化</li>
            <li>• 库存智能管理</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-400">
          <h3 className="text-lg font-bold mb-2 text-green-600">综合能源</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 多能源协同优化</li>
            <li>• 智能微网管理</li>
            <li>• 能效分析优化</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-400">
          <h3 className="text-lg font-bold mb-2 text-purple-600">智慧服务</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 智能客服系统</li>
            <li>• 个性化服务推荐</li>
            <li>• 用户行为分析</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Slide2Content = () => {
  const aipowerElements = [
    { icon: Target, label: "Assessment\n评估", description: "现状诊断", color: "from-red-500 to-orange-500" },
    { icon: Brain, label: "Insight\n洞察", description: "痛点挖掘", color: "from-orange-500 to-yellow-500" },
    { icon: Award, label: "Prioritization\n优先级", description: "场景排序", color: "from-yellow-500 to-green-500" },
    { icon: Rocket, label: "Opportunity\n机会", description: "蓝图设计", color: "from-green-500 to-teal-500" },
    { icon: Workflow, label: "Workflow\n流程", description: "流程重塑", color: "from-teal-500 to-blue-500" },
    { icon: Shield, label: "Enablement\n保障", description: "平台建设", color: "from-blue-500 to-indigo-500" },
    { icon: Map, label: "Roadmap\n路线图", description: "实施规划", color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <div className="w-full">
      {/* AI-POWER 核心框架 */}
      <div className="grid grid-cols-7 gap-2 mb-12">
        {aipowerElements.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative">
              <div className={`bg-gradient-to-r ${item.color} rounded-lg p-4 text-center border border-white/20 hover:scale-105 transition-transform text-white`}>
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold whitespace-pre-line text-sm">{item.label}</div>
                <div className="text-xs text-white/90 mt-1">{item.description}</div>
              </div>
              {index < aipowerElements.length - 1 && (
                <div className="absolute top-1/2 -right-1 w-2 h-px bg-gray-400"></div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* 12周工作计划映射 */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">12周工作计划映射</h3>
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 12 }).map((_, week) => (
            <div key={week} className="text-center">
              <div className="text-xs font-bold mb-2 text-gray-700">Week {week + 1}</div>
              <div className={`h-24 rounded-lg ${getWeekColor(week)} text-white`}>
                <div className="text-xs p-1">{getWeekTask(week)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 核心特色突出 */}
      <div className="mt-8 text-center">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg text-white shadow-md">
          <p className="text-xl font-bold">创新性、系统性、可执行性三位一体的AI规划方法论</p>
        </div>
      </div>
    </div>
  );
};

const getWeekColor = (week) => {
  if (week < 2) return 'bg-red-500';    // Assessment
  if (week === 2) return 'bg-orange-500'; // Insight  
  if (week === 3) return 'bg-yellow-500'; // Prioritization
  if (week === 4) return 'bg-green-500';  // Opportunity
  if (week === 5) return 'bg-teal-500';   // Workflow
  if (week >= 6 && week <= 9) return 'bg-blue-500'; // Enablement
  return 'bg-purple-500'; // Roadmap
};

const getWeekTask = (week) => {
  const tasks = [
    '评估框架\n设计',
    '现场\n评估',
    '洞察\n工作坊',
    '场景\n评估',
    'AI蓝图\n设计',
    '流程\n再造',
    '技术平台\n设计',
    '组织\n能力设计',
    '治理体系\n设计',
    '实施路线\n设计',
    '方案\n整合',
    '评审\n完善'
  ];
  return tasks[week];
};

export default ProjectFramework;
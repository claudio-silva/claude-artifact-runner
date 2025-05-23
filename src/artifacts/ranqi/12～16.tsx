import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Lock, Scale, Users, Database, Network, BookOpen, Award, Target, BrainCircuit, Workflow, TrendingUp, Cloud, Server, Cpu, CheckCircle2, ArrowLeftRight, AlertCircle, Lightbulb, GitBranch, Layers } from 'lucide-react';

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

const ChallengesSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "核心重难点问题识别",
      content: <Slide1Content />
    },
    {
      title: "安全优先解决方案",
      content: <Slide2Content />
    },
    {
      title: "数据治理解决方案",
      content: <Slide3Content />
    },
    {
      title: "人才培养创新机制",
      content: <Slide4Content />
    },
    {
      title: "板块协同融合方案",
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

// Slide1: 核心重难点问题识别
const Slide1Content = () => {
  return (
    <div className="w-full">
      {/* 四大核心重难点 */}
      <div className="grid grid-cols-2 gap-6">
        {/* 安全与效率平衡点 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-400">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-8 h-8 text-red-500" />
            <h3 className="text-xl font-bold text-red-600">安全与效率平衡点</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1" />
              <p className="text-gray-600">核心安全决策AI可靠性存疑</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-500 mt-1" />
              <p className="text-gray-600">24x7不间断运行安全保障</p>
            </div>
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-red-500 mt-1" />
              <p className="text-gray-600">AI故障应急处理机制缺乏</p>
            </div>
          </div>
        </div>
        
        {/* 数据孤岛突破 */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-400">
          <div className="flex items-center gap-4 mb-4">
            <Database className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-bold text-blue-600">数据孤岛突破</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-cyan-500 mt-1" />
              <p className="text-gray-600">四大板块数据割裂</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-gray-600">百万级感知设备数据整合难</p>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-gray-600">数据安全与共享矛盾突出</p>
            </div>
          </div>
        </div>
        
        {/* 跨板块协同 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400">
          <div className="flex items-center gap-4 mb-4">
            <GitBranch className="w-8 h-8 text-purple-500" />
            <h3 className="text-xl font-bold text-purple-600">跨板块协同</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Network className="w-5 h-5 text-pink-500 mt-1" />
              <p className="text-gray-600">四大板块业务模式差异巨大</p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowLeftRight className="w-5 h-5 text-purple-500 mt-1" />
              <p className="text-gray-600">数据共享存在利益冲突</p>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-purple-500 mt-1" />
              <p className="text-gray-600">统一平台个性化需求矛盾</p>
            </div>
          </div>
        </div>
        
        {/* 人才队伍建设 */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-8 h-8 text-green-500" />
            <h3 className="text-xl font-bold text-green-600">人才队伍建设</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <BrainCircuit className="w-5 h-5 text-teal-500 mt-1" />
              <p className="text-gray-600">复合型AI人才极度稀缺</p>
            </div>
            <div className="flex items-start gap-3">
              <Workflow className="w-5 h-5 text-green-500 mt-1" />
              <p className="text-gray-600">传统文化与AI文化冲突</p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-green-500 mt-1" />
              <p className="text-gray-600">激励机制体制性制约</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 难度评级 */}
      <div className="mt-8 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold text-center mb-4 text-gray-800">难度级别评估</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-red-500" style={{width: '95%'}}></div>
            </div>
            <p className="text-red-600 font-bold">安全平衡 95%</p>
          </div>
          <div className="text-center">
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-blue-500" style={{width: '90%'}}></div>
            </div>
            <p className="text-blue-600 font-bold">数据整合 90%</p>
          </div>
          <div className="text-center">
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-purple-500" style={{width: '85%'}}></div>
            </div>
            <p className="text-purple-600 font-bold">板块协同 85%</p>
          </div>
          <div className="text-center">
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-green-500" style={{width: '80%'}}></div>
            </div>
            <p className="text-green-600 font-bold">人才建设 80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide2: 安全优先解决方案
const Slide2Content = () => {
  return (
    <div className="w-full">
      {/* 三道安全防线 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center">三道安全防线设计</h3>
        <div className="grid grid-cols-3 gap-6">
          {/* 第一道防线 */}
          <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-400">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-red-500" />
              <h4 className="text-lg font-bold text-red-600">第一道防线：预防</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">HAZOP安全评审</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">AI应用安全认证</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">安全培训强制覆盖</span>
              </li>
            </ul>
          </div>
          
          {/* 第二道防线 */}
          <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-400">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-10 h-10 text-orange-500" />
              <h4 className="text-lg font-bold text-orange-600">第二道防线：控制</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">实时安全监控</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">异常自动报警</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">人机协作决策</span>
              </li>
            </ul>
          </div>
          
          {/* 第三道防线 */}
          <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-10 h-10 text-yellow-500" />
              <h4 className="text-lg font-bold text-yellow-600">第三道防线：响应</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">应急预案完备</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">快速切换机制</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">故障追溯体系</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 分级安全管控机制 */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 text-center">分级安全管控机制</h3>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-red-50 p-4 rounded border border-red-400">
              <h5 className="font-bold text-red-600 mb-2">核心安全系统</h5>
              <p className="text-sm text-gray-600">AI决策需人工二次确认</p>
              <p className="text-sm text-gray-600">关键参数实时监控</p>
            </div>
            <div className="bg-orange-50 p-4 rounded border border-orange-400">
              <h5 className="font-bold text-orange-600 mb-2">重要运营系统</h5>
              <p className="text-sm text-gray-600">AI可自主决策</p>
              <p className="text-sm text-gray-600">超阈值自动报警</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded border border-yellow-400">
              <h5 className="font-bold text-yellow-600 mb-2">一般服务系统</h5>
              <p className="text-sm text-gray-600">AI全自动运行</p>
              <p className="text-sm text-gray-600">定期性能监控</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 应急响应体系框架 */}
      <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">应急响应体系框架</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <AlertTriangle className="w-8 h-8 text-blue-500" />
            </div>
            <p className="font-bold text-gray-800">事件感知</p>
            <p className="text-sm text-gray-600">5秒内响应</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-8 h-8 text-green-500" />
            </div>
            <p className="font-bold text-gray-800">快速评估</p>
            <p className="text-sm text-gray-600">15秒评级</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <ArrowLeftRight className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="font-bold text-gray-800">系统切换</p>
            <p className="text-sm text-gray-600">30秒切换</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <p className="font-bold text-gray-800">专家处理</p>
            <p className="text-sm text-gray-600">5分钟到位</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-8 h-8 text-indigo-500" />
            </div>
            <p className="font-bold text-gray-800">恢复验证</p>
            <p className="text-sm text-gray-600">15分钟检查</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide3: 数据治理解决方案
const Slide3Content = () => {
  return (
    <div className="w-full">
      {/* 主数据+数据中台架构 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">主数据+数据中台架构</h3>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
          <div className="grid grid-cols-3 gap-6">
            {/* 数据湖层 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-400">
              <div className="text-center mb-4">
                <Database className="w-8 h-8 mx-auto text-blue-500" />
                <h4 className="font-bold text-blue-600">数据湖层</h4>
              </div>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• 原始数据存储</li>
                <li>• 多源数据集成</li>
                <li>• 历史数据归档</li>
              </ul>
            </div>
            
            {/* 数据中台层 */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-400">
              <div className="text-center mb-4">
                <Workflow className="w-8 h-8 mx-auto text-green-500" />
                <h4 className="font-bold text-green-600">数据中台层</h4>
              </div>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• 主数据管理</li>
                <li>• 数据服务统一</li>
                <li>• 数据质量监控</li>
              </ul>
            </div>
            
            {/* 应用服务层 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-400">
              <div className="text-center mb-4">
                <Server className="w-8 h-8 mx-auto text-purple-500" />
                <h4 className="font-bold text-purple-600">应用服务层</h4>
              </div>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• AI模型服务</li>
                <li>• 业务应用支持</li>
                <li>• 可视化分析</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* 联邦学习+区块链创新组合 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">联邦学习+区块链创新组合</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-400">
            <h4 className="font-bold text-blue-600 mb-4">联邦学习机制</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-cyan-500" />
                <p className="text-gray-600">数据不离本域</p>
              </div>
              <div className="flex items-center gap-3">
                <Network className="w-6 h-6 text-blue-500" />
                <p className="text-gray-600">模型协同训练</p>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-500" />
                <p className="text-gray-600">隐私安全保护</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400">
            <h4 className="font-bold text-purple-600 mb-4">区块链追踪</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-pink-500" />
                <p className="text-gray-600">数据访问记录</p>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-500" />
                <p className="text-gray-600">共享权限管理</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-pink-500" />
                <p className="text-gray-600">不可篡改审计</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 自动化数据质量管控 */}
      <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">自动化数据质量管控</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-100 p-4 rounded text-center">
            <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <h5 className="font-bold text-gray-800">完整性检测</h5>
            <p className="text-sm text-gray-600">缺失值自动填充</p>
          </div>
          <div className="bg-blue-100 p-4 rounded text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <h5 className="font-bold text-gray-800">准确性校验</h5>
            <p className="text-sm text-gray-600">异常值智能识别</p>
          </div>
          <div className="bg-purple-100 p-4 rounded text-center">
            <Workflow className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <h5 className="font-bold text-gray-800">一致性验证</h5>
            <p className="text-sm text-gray-600">跨系统数据比对</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <h5 className="font-bold text-gray-800">时效性监控</h5>
            <p className="text-sm text-gray-600">实时同步检查</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide4: 人才培养创新机制
const Slide4Content = () => {
  return (
    <div className="w-full">
      {/* 四型人才培养体系 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center">四型人才培养体系</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400">
            <div className="text-center mb-3">
              <BookOpen className="w-8 h-8 mx-auto text-blue-500" />
              <h4 className="font-bold text-blue-600">专家型</h4>
            </div>
            <p className="text-sm text-gray-600 text-center">深耕AI技术领域</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400">
            <div className="text-center mb-3">
              <BrainCircuit className="w-8 h-8 mx-auto text-green-500" />
              <h4 className="font-bold text-green-600">复合型</h4>
            </div>
            <p className="text-sm text-gray-600 text-center">AI+燃气双精通</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400">
            <div className="text-center mb-3">
              <Lightbulb className="w-8 h-8 mx-auto text-purple-500" />
              <h4 className="font-bold text-purple-600">创新型</h4>
            </div>
            <p className="text-sm text-gray-600 text-center">场景创新设计</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-400">
            <div className="text-center mb-3">
              <Award className="w-8 h-8 mx-auto text-yellow-500" />
              <h4 className="font-bold text-yellow-600">领军型</h4>
            </div>
            <p className="text-sm text-gray-600 text-center">战略方向引领</p>
          </div>
        </div>
      </div>
      
      {/* 双向导师制度设计 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">双向导师制度设计</h3>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
          <div className="grid grid-cols-2 gap-8">
            {/* 业务导师 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-green-500" />
                <h4 className="font-bold text-green-600">老专家 → 年轻工程师</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 燃气专业知识传授</li>
                <li>• 安全运营理念培养</li>
                <li>• 业务经验案例分享</li>
              </ul>
            </div>
            
            {/* 技术导师 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="w-8 h-8 text-blue-500" />
                <h4 className="font-bold text-blue-600">年轻专家 → 老专家</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AI技术基础培训</li>
                <li>• 应用场景实践指导</li>
                <li>• 数据思维培养引导</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* 非物质激励创新方案 */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-400">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">非物质激励创新方案</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded">
            <h5 className="font-bold text-blue-600 mb-2">AI专家库</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 优先培养机会</li>
              <li>• 海外研修资格</li>
              <li>• 技术决策权限</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h5 className="font-bold text-green-600 mb-2">创新荣誉体系</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• AI先锋评选</li>
              <li>• 年度突破奖</li>
              <li>• 专业成就勋章</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h5 className="font-bold text-purple-600 mb-2">成长发展通道</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 专业晋升通道</li>
              <li>• 跨板块轮岗</li>
              <li>• 项目合伙制</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide5: 板块协同融合方案
const Slide5Content = () => {
  return (
    <div className="w-full">
      {/* 统一而灵活的技术架构 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">统一而灵活的技术架构</h3>
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
            {/* 共享底座 */}
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-blue-600 text-center mb-4">AI共享底座</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Cloud className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <p className="text-sm text-gray-700">统一数据服务</p>
                </div>
                <div className="text-center">
                  <Server className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <p className="text-sm text-gray-700">计算资源池</p>
                </div>
                <div className="text-center">
                  <Cpu className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <p className="text-sm text-gray-700">AI模型库</p>
                </div>
              </div>
            </div>
            
            {/* 专属引擎 */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-red-50 p-4 rounded text-center">
                <h5 className="font-bold text-red-600">安全智能引擎</h5>
                <p className="text-sm text-gray-600">城市燃气</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded text-center">
                <h5 className="font-bold text-yellow-600">价格预测引擎</h5>
                <p className="text-sm text-gray-600">上游资源</p>
              </div>
              <div className="bg-green-50 p-4 rounded text-center">
                <h5 className="font-bold text-green-600">协同优化引擎</h5>
                <p className="text-sm text-gray-600">综合能源</p>
              </div>
              <div className="bg-purple-50 p-4 rounded text-center">
                <h5 className="font-bold text-purple-600">客户洞察引擎</h5>
                <p className="text-sm text-gray-600">智慧服务</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 价值共创机制设计 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">价值共创机制设计</h3>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-400">
              <h4 className="font-bold text-blue-600 mb-3">共享激励</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 数据共享积分体系</li>
                <li>• 算力资源互换</li>
                <li>• 价值创造共享</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-400">
              <h4 className="font-bold text-green-600 mb-3">协同创新</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 跨板块项目协作</li>
                <li>• 场景互补网络</li>
                <li>• 联合创新基金</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-400">
              <h4 className="font-bold text-purple-600 mb-3">价值评估</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 协同效应量化</li>
                <li>• 收益分配模型</li>
                <li>• 持续优化机制</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* 板块间协同激励机制 */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-400">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">板块间协同激励机制</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="font-bold text-blue-600">贡献评级</h4>
            <p className="text-sm text-gray-600">量化板块贡献度</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="font-bold text-green-600">动态激励</h4>
            <p className="text-sm text-gray-600">价值分成机制</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <GitBranch className="w-8 h-8 text-purple-500" />
            </div>
            <h4 className="font-bold text-purple-600">协同奖励</h4>
            <p className="text-sm text-gray-600">跨板块奖励机制</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSolutions;
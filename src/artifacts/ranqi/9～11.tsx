import React, { useState, useEffect } from 'react';
import { Shield, Users, Award, BookOpen, TrendingUp, DollarSign, Brain, Rocket, Star, Lock, ArrowUpCircle, CheckCircle2, Network, Container, Lightbulb, Target } from 'lucide-react';

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

const GovernanceValueInnovation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI治理架构体系",
      content: <Slide1Content />
    },
    {
      title: "投资价值评估体系",
      content: <Slide2Content />
    },
    {
      title: "创新特色亮点",
      content: <Slide3Content />
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

// Slide1: AI治理架构
const Slide1Content = () => {
  return (
    <div className="w-full">
      {/* 1+3+3治理架构模式 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">1+3+3 治理架构模式</h3>
        <div className="grid grid-cols-7 gap-2">
          {/* 1个治理委员会 */}
          <div className="col-span-7 mb-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400 shadow-sm">
              <div className="flex items-center justify-center gap-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-800">AI战略委员会</h4>
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">总体决策 • 资源配置 • 绩效管理</p>
            </div>
          </div>
          
          {/* 3个专业委员会 */}
          <div className="col-span-7 grid grid-cols-3 gap-4 mb-4">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border border-green-400 shadow-sm">
              <h5 className="font-bold text-green-600">安全专业委员会</h5>
              <p className="text-sm text-gray-600">安全评审 • 风险管控</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-400 shadow-sm">
              <h5 className="font-bold text-purple-600">数据专业委员会</h5>
              <p className="text-sm text-gray-600">数据治理 • 隐私保护</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-400 shadow-sm">
              <h5 className="font-bold text-orange-600">应用专业委员会</h5>
              <p className="text-sm text-gray-600">场景评估 • 价值评价</p>
            </div>
          </div>
          
          {/* 3个执行平台 */}
          <div className="col-span-7 grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-400 shadow-sm">
              <h5 className="font-bold text-blue-600">AI推进办公室</h5>
              <p className="text-sm text-gray-600">日常管理 • 协调执行</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-400 shadow-sm">
              <h5 className="font-bold text-yellow-600">AI实验室</h5>
              <p className="text-sm text-gray-600">创新研发 • 技术支持</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-400 shadow-sm">
              <h5 className="font-bold text-indigo-600">AI应用中心</h5>
              <p className="text-sm text-gray-600">场景落地 • 运营维护</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI实验室建设方案 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">AI实验室建设方案</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm">
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-blue-50 p-4 rounded text-center">
              <Brain className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="font-bold text-gray-800">AI算法研究中心</div>
              <div className="text-sm text-gray-600">15人团队</div>
            </div>
            <div className="bg-green-50 p-4 rounded text-center">
              <Network className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="font-bold text-gray-800">管网智能化中心</div>
              <div className="text-sm text-gray-600">12人团队</div>
            </div>
            <div className="bg-purple-50 p-4 rounded text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="font-bold text-gray-800">客户服务AI中心</div>
              <div className="text-sm text-gray-600">10人团队</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded text-center">
              <Rocket className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
              <div className="font-bold text-gray-800">能源优化中心</div>
              <div className="text-sm text-gray-600">10人团队</div>
            </div>
            <div className="bg-red-50 p-4 rounded text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="font-bold text-gray-800">安全预警中心</div>
              <div className="text-sm text-gray-600">12人团队</div>
            </div>
            <div className="bg-indigo-50 p-4 rounded text-center">
              <Target className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="font-bold text-gray-800">应用转化中心</div>
              <div className="text-sm text-gray-600">8人团队</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 组织能力保障体系 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400 shadow-sm">
          <h4 className="font-bold text-blue-600 mb-3">人才培养机制</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 分层分级培训体系</li>
            <li>• 专家型/复合型人才培养</li>
            <li>• 导师制/轮岗制度</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400 shadow-sm">
          <h4 className="font-bold text-green-600 mb-3">激励保障机制</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• AI创新津贴计划</li>
            <li>• 科技成果转化分享</li>
            <li>• 年度AI先锋评选</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400 shadow-sm">
          <h4 className="font-bold text-purple-600 mb-3">运行保障机制</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 周报月评制度</li>
            <li>• 敏捷项目管理</li>
            <li>• 知识共享平台</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Slide2: 投资价值评估体系
const Slide2Content = () => {
  return (
    <div className="w-full">
      {/* SAFE价值评估模型 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">SAFE价值评估模型</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-400 shadow-sm">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h4 className="text-lg font-bold text-gray-800">Security</h4>
              <h5 className="text-lg font-bold mb-2 text-red-600">安全价值</h5>
              <p className="text-sm text-gray-600">事故预防 • 损失降低</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-400 shadow-sm">
            <div className="text-center">
              <ArrowUpCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h4 className="text-lg font-bold text-gray-800">Agility</h4>
              <h5 className="text-lg font-bold mb-2 text-blue-600">敏捷价值</h5>
              <p className="text-sm text-gray-600">决策提速 • 响应及时</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400 shadow-sm">
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h4 className="text-lg font-bold text-gray-800">Finance</h4>
              <h5 className="text-lg font-bold mb-2 text-green-600">财务价值</h5>
              <p className="text-sm text-gray-600">成本节省 • 收入增长</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400 shadow-sm">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h4 className="text-lg font-bold text-gray-800">Experience</h4>
              <h5 className="text-lg font-bold mb-2 text-purple-600">体验价值</h5>
              <p className="text-sm text-gray-600">客户满意 • 员工效能</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 投资分阶段释放机制 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">投资分阶段释放机制</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 p-8 rounded-lg mb-4 shadow-sm">
                <h4 className="text-2xl font-bold text-blue-600">20%</h4>
                <p className="text-sm text-gray-600">技术验证阶段</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• POC验证</li>
                <li>• 技术选型</li>
                <li>• 风险评估</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-green-50 p-8 rounded-lg mb-4 shadow-sm">
                <h4 className="text-2xl font-bold text-green-600">30%</h4>
                <p className="text-sm text-gray-600">小规模试点</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• MVP开发</li>
                <li>• 试点应用</li>
                <li>• 效果验证</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-purple-50 p-8 rounded-lg mb-4 shadow-sm">
                <h4 className="text-2xl font-bold text-purple-600">50%</h4>
                <p className="text-sm text-gray-600">规模推广阶段</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 全面部署</li>
                <li>• 运营优化</li>
                <li>• 价值评估</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* ROI评估与追踪体系 */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-800">ROI评估与追踪体系</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-indigo-50 p-4 rounded text-center shadow-sm">
            <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
            <h5 className="font-bold text-gray-800">即期评估</h5>
            <p className="text-sm text-gray-600">效率提升测量</p>
          </div>
          <div className="bg-blue-50 p-4 rounded text-center shadow-sm">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h5 className="font-bold text-gray-800">季度评估</h5>
            <p className="text-sm text-gray-600">价值实现追踪</p>
          </div>
          <div className="bg-green-50 p-4 rounded text-center shadow-sm">
            <Target className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <h5 className="font-bold text-gray-800">年度评估</h5>
            <p className="text-sm text-gray-600">战略目标达成</p>
          </div>
          <div className="bg-purple-50 p-4 rounded text-center shadow-sm">
            <Award className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <h5 className="font-bold text-gray-800">价值呈现</h5>
            <p className="text-sm text-gray-600">可视化仪表板</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide3: 创新特色亮点
const Slide3Content = () => {
  return (
    <div className="w-full">
      {/* 四大创新亮点 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* AI-POWER方法论创新 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-400 shadow-sm">
          <h3 className="text-xl font-bold text-blue-600 mb-4">AI-POWER方法论创新</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700">七维方法论有机整合</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <span className="text-gray-700">12周快速规划框架</span>
            </div>
            <div className="flex items-center gap-3">
              <Rocket className="w-6 h-6 text-purple-600" />
              <span className="text-gray-700">适合燃气行业特点</span>
            </div>
          </div>
        </div>
        
        {/* 国产化深度适配方案 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-400 shadow-sm">
          <h3 className="text-xl font-bold text-red-600 mb-4">国产化深度适配方案</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">自主可控技术路线</span>
            </div>
            <div className="flex items-center gap-3">
              <Container className="w-6 h-6 text-green-600" />
              <span className="text-gray-700">主备双轨架构设计</span>
            </div>
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700">国产AI芯片优化</span>
            </div>
          </div>
        </div>
        
        {/* 安全优先设计理念 */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-400 shadow-sm">
          <h3 className="text-xl font-bold text-green-600 mb-4">安全优先设计理念</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">三道安全防线体系</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-600" />
              <span className="text-gray-700">人机协作决策模式</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-red-600" />
              <span className="text-gray-700">HAZOP安全评估机制</span>
            </div>
          </div>
        </div>
        
        {/* 行业知识图谱构建 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-400 shadow-sm">
          <h3 className="text-xl font-bold text-purple-600 mb-4">行业知识图谱构建</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Brain className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">燃气专业知识库</span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span className="text-gray-700">操作规程库结构化</span>
            </div>
            <div className="flex items-center gap-3">
              <Network className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-700">经验案例库构建</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 核心竞争优势 */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-400 shadow-sm">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">核心竞争优势</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-blue-600">科学系统</h4>
            <p className="text-sm text-gray-600">方法论完整性</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-green-600">可执行性</h4>
            <p className="text-sm text-gray-600">方案落地保障</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-purple-600">行业领先</h4>
            <p className="text-sm text-gray-600">创新引领能力</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceValueInnovation;
import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, ArrowRight, ExternalLink, Check, CheckCircle2, Clock, Target, Zap, Shield, DollarSign, Layers, Share2, Phone, Mail, MapPin } from 'lucide-react';

// 市场数据（保留原始数据格式但修改描述）
const marketData = [
  { year: '2023', value: 150 },
  { year: '2024', value: 294 },
  { year: '2025', value: 450 },
  { year: '2026', value: 700 },
];

const penetrationData = [
  { year: '2023', value: 2 },
  { year: '2024', value: 5 },
  { year: '2025', value: 12 },
  { year: '2026', value: 30 },
];

const applicationData = [
  { name: '智能文档处理', value: 26 },
  { name: '知识库应用', value: 22 },
  { name: '数据分析与决策', value: 18 },
  { name: '客户服务智能化', value: 15 },
  { name: '业务流程自动化', value: 12 },
  { name: '其他新兴场景', value: 7 },
];

const COLORS = ['#0052cc', '#36b37e', '#6554c0', '#ff5630', '#00b8d9', '#6b778c'];

const IndustryInsights = () => {
  const [activeSection, setActiveSection] = useState('market');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // 滚动导航高亮功能
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['market', 'advantages', 'architecture', 'cases', 'strategy'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 渐进式滚动效果
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // 添加滚动样式和新增的动画样式
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .fade-in-section {
        opacity: 0;
      }
      
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -30px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      
      .animate-blob {
        animation: blob 10s infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* 导航栏 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-blue-600">中通南方</div>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <a
                  href="#market"
                  className={`px-3 py-2 text-sm font-medium ${activeSection === 'market' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setActiveSection('market')}
                >
                  市场趋势
                </a>
                <a
                  href="#advantages"
                  className={`px-3 py-2 text-sm font-medium ${activeSection === 'advantages' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setActiveSection('advantages')}
                >
                  技术优势
                </a>
                <a
                  href="#architecture"
                  className={`px-3 py-2 text-sm font-medium ${activeSection === 'architecture' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setActiveSection('architecture')}
                >
                  解决方案架构
                </a>
                <a
                  href="#cases"
                  className={`px-3 py-2 text-sm font-medium ${activeSection === 'cases' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setActiveSection('cases')}
                >
                  行业案例
                </a>
                <a
                  href="#strategy"
                  className={`px-3 py-2 text-sm font-medium ${activeSection === 'strategy' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setActiveSection('strategy')}
                >
                  战略规划
                </a>
              </nav>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                联系我们
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <a
                href="#market"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'market' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                onClick={() => {setActiveSection('market'); setIsMenuOpen(false);}}
              >
                市场趋势
              </a>
              <a
                href="#advantages"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'advantages' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                onClick={() => {setActiveSection('advantages'); setIsMenuOpen(false);}}
              >
                技术优势
              </a>
              <a
                href="#architecture"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'architecture' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                onClick={() => {setActiveSection('architecture'); setIsMenuOpen(false);}}
              >
                解决方案架构
              </a>
              <a
                href="#cases"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'cases' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                onClick={() => {setActiveSection('cases'); setIsMenuOpen(false);}}
              >
                行业案例
              </a>
              <a
                href="#strategy"
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'strategy' ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                onClick={() => {setActiveSection('strategy'); setIsMenuOpen(false);}}
              >
                战略规划
              </a>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  联系我们
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section - 全新设计 */}
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 text-white overflow-hidden">
          {/* 背景图案 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMjkgNThsLTMgM3YtM2gzek04IDUyaDNsLTMgM3YtM3ptOC0yaC0ydjJoMnYtMnptLTIgNnYtMmgydjJoLTJ6bS0yLTR2Mmg0di0yaC00em0xMC00aC0ydjJoMnYtMnptLTIgNnYtMmgydjJoLTJ6bS0yLTR2Mmg0di0yaC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-center"></div>
          </div>
          
          {/* 浮动装饰元素 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-section">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-400/20 backdrop-blur-sm text-blue-100 text-sm font-medium mb-6 border border-blue-400/20">
                  2025年第二季度行业洞察
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  DeepSeek AI <span className="text-blue-300">赋能</span><br />
                  行业智能化转型
                </h1>
                <p className="text-lg md:text-xl text-blue-100 opacity-90 mt-6 mb-8 leading-relaxed max-w-xl">
                  探索AI大模型最新发展趋势，了解DeepSeek如何以创新技术和行业解决方案，
                  推动企业数字化转型，创造可持续商业价值。
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="group bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-all duration-300 flex items-center">
                    了解详情 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="bg-transparent backdrop-blur-sm border border-blue-300/40 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700/30 transition-all duration-300">
                    预约演示
                  </button>
                </div>
                
                {/* 统计数据 */}
                <div className="grid grid-cols-3 gap-4 mt-12">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">700亿+</div>
                    <div className="text-blue-200 text-sm mt-1">市场规模(元)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">30%</div>
                    <div className="text-blue-200 text-sm mt-1">预计渗透率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">40%</div>
                    <div className="text-blue-200 text-sm mt-1">年复合增长率</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block relative fade-in-section">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-transparent rounded-lg opacity-30"></div>
                <div className="relative bg-gradient-to-br from-blue-900/80 to-blue-700/80 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-blue-200 text-sm font-mono">DeepSeek AI 行业解决方案</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-blue-600/30 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-600/30 rounded"></div>
                    <div className="h-4 bg-blue-600/30 rounded w-5/6"></div>
                    <div className="h-4 bg-blue-600/30 rounded w-2/3"></div>
                    <div className="h-20 mt-6 bg-blue-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center">
                      <div className="text-blue-200 text-opacity-70 text-sm">行业定制化解决方案演示</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg opacity-50 blur-2xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg opacity-30 blur-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* 波浪底部 */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
              <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* 市场趋势 Section - 修改数据表述，使其更加准确谨慎 */}
        <section id="market" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2025年AI大模型市场现状与发展趋势</h2>
              <p className="text-lg text-gray-600">AI大模型市场正处于快速增长阶段，从通用能力走向行业深耕，技术路线从"规模优先"转向"效率至上"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-sm p-6 fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">市场规模与增长预测</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={marketData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" />
                      <YAxis unit="亿元" />
                      <Tooltip
                        formatter={(value) => [`${value} 亿元`, '市场规模']}
                        contentStyle={{ borderRadius: '4px', borderColor: '#e2e8f0' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="市场规模"
                        stroke="#0052cc"
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>根据艾媒咨询发布的数据，2024年中国AI大模型市场规模约为<strong className="text-blue-600">294亿元</strong></span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>预计2026年将超过<strong className="text-blue-600">700亿元</strong>，年复合增长率有望维持在<strong className="text-blue-600">40%以上</strong></span>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">应用渗透率趋势</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={penetrationData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" />
                      <YAxis unit="%" />
                      <Tooltip
                        formatter={(value) => [`${value}%`, '预计渗透率']}
                        contentStyle={{ borderRadius: '4px', borderColor: '#e2e8f0' }}
                      />
                      <Bar
                        dataKey="value"
                        name="预计渗透率"
                        fill="#36b37e"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>行业调研机构估计，目前AI大模型在企业级市场的渗透率约为<strong className="text-green-600">5%-10%</strong></span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>未来三年有望快速提升，预计到2026年渗透率将达到<strong className="text-green-600">25%-30%</strong>，市场空间巨大</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6 fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">典型应用场景分布</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={applicationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {applicationData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, '占比']}
                        contentStyle={{ borderRadius: '4px', borderColor: '#e2e8f0' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2025年AI大模型五大技术趋势</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex p-3 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors duration-200">
                    <div className="mr-3 mt-1">
                      <div className="bg-blue-100 text-blue-700 p-2 rounded-md">
                        <Zap className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">资源效率优化</h4>
                      <p className="text-sm text-gray-600 mt-1">算法创新使模型性能与计算资源消耗脱钩，DeepSeek等企业引领效率优先的技术路线</p>
                    </div>
                  </div>

                  <div className="flex p-3 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors duration-200">
                    <div className="mr-3 mt-1">
                      <div className="bg-purple-100 text-purple-700 p-2 rounded-md">
                        <Layers className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">多模态融合进阶</h4>
                      <p className="text-sm text-gray-600 mt-1">视频、音频、图像等多模态能力全面提升，实现真正的跨模态理解与生成</p>
                    </div>
                  </div>

                  <div className="flex p-3 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors duration-200">
                    <div className="mr-3 mt-1">
                      <div className="bg-green-100 text-green-700 p-2 rounded-md">
                        <Target className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">智能体爆发</h4>
                      <p className="text-sm text-gray-600 mt-1">具备环境感知、历史记忆和流程执行能力的AI Agent成为研究和应用热点</p>
                    </div>
                  </div>

                  <div className="flex p-3 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors duration-200">
                    <div className="mr-3 mt-1">
                      <div className="bg-orange-100 text-orange-700 p-2 rounded-md">
                        <Share2 className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">行业定制化提速</h4>
                      <p className="text-sm text-gray-600 mt-1">垂直行业模型建设进入快车道，领域专用模型占比正逐步提升</p>
                    </div>
                  </div>

                  <div className="flex p-3 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors duration-200 md:col-span-2">
                    <div className="mr-3 mt-1">
                      <div className="bg-red-100 text-red-700 p-2 rounded-md">
                        <DollarSign className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">组件化架构兴起</h4>
                      <p className="text-sm text-gray-600 mt-1">大模型"积木式"组件化设计成为趋势，便于企业根据需求灵活组装定制，降低技术门槛</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DeepSeek技术优势 - 修正关于优势的表述，避免不当断言 */}
        <section id="advantages" className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">DeepSeek模型发展与优势分析</h2>
              <p className="text-lg text-gray-600">以算法创新与开源开放战略，提供高性能、高效率、易用性的AI能力</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">最新技术突破详解</h3>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900">DeepSeek-V3模型</h4>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">最新旗舰</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">6710亿总参数，采用MoE架构，每个token仅激活370亿参数，大幅降低计算资源需求</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-xs text-gray-500">相较传统模型计算成本降低</p>
                        <p className="text-lg font-semibold text-blue-600">显著</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-xs text-gray-500">能源效率优化</p>
                        <p className="text-lg font-semibold text-green-600">大幅提升</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900">DeepSeek-R1模型</h4>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">效率优化</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">混合专家架构(MoE)优化，多头潜在注意力(MLA)技术，兼顾性能与效率</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-xs text-gray-500">推理效率</p>
                        <p className="text-lg font-semibold text-blue-600">显著提升</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-xs text-gray-500">参数利用率</p>
                        <p className="text-lg font-semibold text-green-600">大幅提高</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900">DeepSeek Janus-Pro</h4>
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">多模态</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">图像理解、视频分析、跨模态推理，低资源消耗下实现高质量多模态理解</p>
                    <div className="mt-4 grid grid-cols-1 gap-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>图像理解、视频分析、跨模态推理</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>内容审核、智能监控、医疗影像分析等场景</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">差异化优势分析</h3>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-2 rounded-md text-white mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">开源开放战略</h4>
                      <p className="text-gray-700 mt-1">采用MIT许可证，提供灵活的使用、修改和分发权限，便于企业二次开发和定制</p>
                      <p className="text-sm text-blue-700 mt-2">
                        目前DeepSeek是排名靠前的开源大模型，受到开发者社区广泛关注
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-medium text-gray-900">资源优化算法</h4>
                    <p className="text-sm text-gray-600 mt-1">MoE架构与MLA技术结合，可在有限计算资源下获得更好性能</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-medium text-gray-900">全面能力覆盖</h4>
                    <p className="text-sm text-gray-600 mt-1">从基础文本理解到代码生成，再到多模态处理，提供全方位AI能力</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-medium text-gray-900">中文优化</h4>
                    <p className="text-sm text-gray-600 mt-1">针对中文语境和应用场景深度优化，中文处理能力表现出色</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-medium text-gray-900">弹性部署选项</h4>
                    <p className="text-sm text-gray-600 mt-1">从单卡部署到集群部署，从云端到本地，满足不同规模企业需求</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-medium text-gray-900">成本效益优势</h4>
                    <p className="text-sm text-gray-600 mt-1">与同类模型相比，在相似性能水平下可大幅降低计算资源消耗</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                    <h4 className="font-medium text-gray-900">快速迭代节奏</h4>
                    <p className="text-sm text-gray-600 mt-1">持续发布技术更新与优化，体现开源社区强大的创新活力</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 fade-in-section">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">大模型技术发展趋势分析</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1.5 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                    技术路线重塑
                  </h4>
                  <p className="text-gray-600 mt-3 text-sm">从算力堆叠转向算法优化，效率优先的技术路线正成为行业新趋势</p>
                  <p className="text-xs text-gray-500 mt-3 italic">大模型创新不再完全依赖高端硬件，而是更注重算法设计和训练方法的优化</p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <span className="bg-green-100 text-green-700 p-1.5 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </span>
                    行业竞争良性发展
                  </h4>
                  <p className="text-gray-600 mt-3 text-sm">开源与商业模型相互促进，共同推动行业标准提升和应用场景扩展</p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <span className="bg-purple-100 text-purple-700 p-1.5 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    市场格局多元化
                  </h4>
                  <p className="text-gray-600 mt-3 text-sm">多种技术路线并存发展，不同规模和专长的模型共同满足市场多样化需求</p>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <span className="bg-orange-100 text-orange-700 p-1.5 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    投资重点转移
                  </h4>
                  <p className="text-gray-600 mt-3 text-sm">资本市场逐渐从纯硬件基础设施转向算法创新和行业应用落地</p>
                  <p className="text-xs text-gray-500 mt-3 italic">算法效率提升和应用场景落地成为投资者新的关注重点</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 解决方案架构 - 修正投资规模与技术指标的表述 */}
        <section id="architecture" className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">DeepSeek本地化部署优势与"1+4+N"架构</h2>
              <p className="text-lg text-gray-600">企业级部署架构详解，满足不同规模企业的智能化转型需求</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">本地部署的主要优势</h3>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-md mr-4">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">数据安全与隐私保护</h4>
                        <p className="text-sm text-gray-600 mt-1">满足金融、政务、医疗等行业的合规要求，全部数据在本地处理，保障敏感信息安全</p>
                        <p className="text-xs text-gray-500 mt-2">符合《数据安全法》《个人信息保护法》等法规要求</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-md mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">业务集成深度</h4>
                        <p className="text-sm text-gray-600 mt-1">与OA、ERP、CRM等企业系统无缝集成，提供丰富的API接口，支持定制化开发</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-md mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">行业知识封装</h4>
                        <p className="text-sm text-gray-600 mt-1">将行业专业知识注入模型，提升专业能力，形成企业专属的AI能力，构建竞争壁垒</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-gray-900 text-sm">服务可控性</h4>
                      <p className="text-xs text-gray-600 mt-1">企业可独立控制服务等级与资源分配，自主掌控系统维护与升级节奏</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-gray-900 text-sm">长期成本可控</h4>
                      <p className="text-xs text-gray-600 mt-1">避免云API按量计费模式，前期一次性投入，长期使用成本递减</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-gray-900 text-sm">资源优化与弹性部署</h4>
                      <p className="text-xs text-gray-600 mt-1">渐进式投资，支持多种GPU配置，适应不同企业预算</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">"1+4+N"企业级部署架构详解</h3>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">1个基础平台</h4>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-center text-blue-700 font-medium">DeepSeek大模型能力平台</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-white p-2 rounded-md text-sm text-gray-700 text-center">模型引擎</div>
                      <div className="bg-white p-2 rounded-md text-sm text-gray-700 text-center">知识库管理</div>
                      <div className="bg-white p-2 rounded-md text-sm text-gray-700 text-center">权限控制</div>
                      <div className="bg-white p-2 rounded-md text-sm text-gray-700 text-center">资源调度</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">4大核心能力</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-center text-blue-700 font-medium text-sm">知识增强</p>
                      <ul className="mt-2 space-y-1 text-xs text-gray-600">
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>企业知识库构建与管理</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>检索增强生成(RAG)技术</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                      <p className="text-center text-green-700 font-medium text-sm">数据分析</p>
                      <ul className="mt-2 space-y-1 text-xs text-gray-600">
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>结构化数据智能处理</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>多源数据融合与关联分析</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                      <p className="text-center text-purple-700 font-medium text-sm">流程优化</p>
                      <ul className="mt-2 space-y-1 text-xs text-gray-600">
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>业务流程自动化</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>智能审批与决策辅助</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                      <p className="text-center text-orange-700 font-medium text-sm">决策支持</p>
                      <ul className="mt-2 space-y-1 text-xs text-gray-600">
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>多维数据综合分析</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>决策方案生成与评估</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-3">N个行业场景应用</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md">政务服务</span>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-md">教育行业</span>
                    <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md">金融行业</span>
                    <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-md">医疗健康</span>
                    <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-md">能源电网</span>
                    <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-md">制造业</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 fade-in-section">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">模型与资源策略配置参考</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-900">大型企业配置</h4>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">企业级</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">推荐模型</p>
                      <p className="text-sm font-medium text-gray-800">DeepSeek R1-70B</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">硬件参考</p>
                      <p className="text-sm font-medium text-gray-800">A800/H800/GPU集群（8-16卡）</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">适用场景</p>
                      <p className="text-sm font-medium text-gray-800">全场景复杂推理，高并发生产环境</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">投资规模参考</p>
                      <p className="text-sm font-medium text-blue-600">依据具体需求确定</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5 hover:border-green-300 hover:shadow-md transition-all duration-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-900">中型企业配置</h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">部门级</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">推荐模型</p>
                      <p className="text-sm font-medium text-gray-800">DeepSeek R1-7B</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">硬件参考</p>
                      <p className="text-sm font-medium text-gray-800">中高端GPU（2-4张）</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">适用场景</p>
                      <p className="text-sm font-medium text-gray-800">中等复杂度场景，部门级应用</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">投资规模参考</p>
                      <p className="text-sm font-medium text-green-600">依据具体需求确定</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 hover:shadow-md transition-all duration-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-900">小型企业配置</h4>
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">轻量级</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">推荐模型</p>
                      <p className="text-sm font-medium text-gray-800">DeepSeek Lite（1-3B参数）</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">硬件参考</p>
                      <p className="text-sm font-medium text-gray-800">消费级GPU（如RTX系列）</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">适用场景</p>
                      <p className="text-sm font-medium text-gray-800">轻量场景，基础文本处理与辅助</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">投资规模参考</p>
                      <p className="text-sm font-medium text-purple-600">依据具体需求确定</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 行业应用案例 - 更新案例描述，确保准确性 */}
        <section id="cases" className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">典型行业应用场景分析</h2>
              <p className="text-lg text-gray-600">多行业智能化应用潜力，助力企业数字化转型</p>
            </div>

            {/* 修复useState错误 */}
            <IndustryApplications />

            <div className="text-center">
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200">
                下载完整行业方案白皮书
              </button>
            </div>
          </div>
        </section>

        {/* 战略规划与行动计划 - 更新为建议性规划，而非确定性计划 */}
        <section id="strategy" className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI大模型应用建议规划框架</h2>
              <p className="text-lg text-gray-600">系统化方法论，助力企业构建AI应用战略路线图</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-1 fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">企业AI应用目标设定</h3>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-md mr-4">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">标杆案例建设</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>选择重点行业场景，打造有影响力的示范案例</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>建立案例库与最佳实践，便于复制推广</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-md mr-4">
                        <Layers className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">解决方案体系</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>构建可复制的行业解决方案框架</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>包含标准化模块、实施指南与价值评估方法</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-md mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">能力建设目标</h4>
                        <div className="mt-2 grid grid-cols-2 gap-3">
                          <div className="bg-gray-50 p-2 rounded-md">
                            <p className="text-xs text-gray-500">技术团队</p>
                            <p className="text-sm font-medium text-purple-600">专业培养</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded-md">
                            <p className="text-xs text-gray-500">合作伙伴</p>
                            <p className="text-sm font-medium text-purple-600">生态构建</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 fade-in-section">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">分阶段实施建议框架</h3>

                <div className="relative">
                  {/* 时间线轴 */}
                  <div className="absolute top-0 bottom-0 left-3 md:left-4 w-0.5 bg-blue-200"></div>

                  <div className="space-y-8">
                    <div className="relative pl-10 md:pl-12">
                      <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs md:text-sm font-medium">1</span>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-5">
                        <h4 className="font-medium text-gray-900 mb-3">评估与规划阶段</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-blue-600 mr-2" />
                              <p className="font-medium text-blue-600">技术评估</p>
                            </div>
                            <ul className="space-y-1.5 pl-6 text-sm text-gray-600">
                              <li className="list-disc">评估DeepSeek模型能力与企业场景适配性</li>
                              <li className="list-disc">进行现有IT基础设施与集成需求分析</li>
                              <li className="list-disc">确定部署方案与资源需求</li>
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-blue-600 mr-2" />
                              <p className="font-medium text-blue-600">组织准备</p>
                            </div>
                            <ul className="space-y-1.5 pl-6 text-sm text-gray-600">
                              <li className="list-disc">组建AI项目团队，明确职责分工</li>
                              <li className="list-disc">设计人才培养与技能提升计划</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-10 md:pl-12">
                      <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs md:text-sm font-medium">2</span>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-5">
                        <h4 className="font-medium text-gray-900 mb-3">试点与验证阶段</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-green-600 mr-2" />
                              <p className="font-medium text-green-600">试点项目</p>
                            </div>
                            <ul className="space-y-1.5 pl-6 text-sm text-gray-600">
                              <li className="list-disc">选择价值明确、风险可控的场景进行试点</li>
                              <li className="list-disc">构建最小可行产品(MVP)验证价值</li>
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-green-600 mr-2" />
                              <p className="font-medium text-green-600">价值验证</p>
                            </div>
                            <ul className="space-y-1.5 pl-6 text-sm text-gray-600">
                              <li className="list-disc">建立明确的KPI指标体系衡量价值创造</li>
                              <li className="list-disc">收集用户反馈，持续优化解决方案</li>
                              <li className="list-disc">形成可复制的方法论与实施模板</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-10 md:pl-12">
                      <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs md:text-sm font-medium">3</span>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-5">
                        <h4 className="font-medium text-gray-900 mb-3">规模化推广阶段</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-purple-600 mr-2" />
                              <p className="font-medium text-purple-600">扩展应用</p>
                            </div>
                            <ul className="space-y-1.5 pl-6 text-sm text-gray-600">
                              <li className="list-disc">制定规模化推广路线图</li>
                              <li className="list-disc">建立标准化实施流程与质量控制体系</li>
                              <li className="list-disc">搭建知识共享平台，促进最佳实践交流</li>
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-purple-600 mr-2" />
                              <p className="font-medium text-purple-600">持续优化</p>
                            </div>
                            <ul className="space-y-1.5 pl-6 text-sm text-gray-600">
                              <li className="list-disc">建立持续改进机制，定期评估项目效果</li>
                              <li className="list-disc">根据业务需求与技术发展，迭代升级解决方案</li>
                              <li className="list-disc">持续深化AI技术能力与业务融合</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 fade-in-section">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">2025年Q2-Q4战略规划与行动计划</h3>

              <div className="mb-10">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  业务发展目标详解
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                    <h5 className="font-medium text-gray-900 mb-3">标杆案例建设</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>完成5个行业标杆案例，覆盖政务、金融、教育、医疗、制造五大垂直领域</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>形成完整的案例库与最佳实践</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>建立可量化的价值创造评估体系</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>打造行业竞争差异化优势</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                    <h5 className="font-medium text-gray-900 mb-3">解决方案体系</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>打造3个可复制的行业解决方案：智慧政务综合解决方案、智能金融服务解决方案、智慧教育全场景解决方案</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>每个解决方案包含标准化模块、实施手册与价值评估工具</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>建立解决方案持续优化机制</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                    <h5 className="font-medium text-gray-900 mb-3">人才团队建设</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>培养 5名AI技术与业务融合的复合型人才</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>建立AI技术认证体系</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>形成专业知识库与内训机制</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>构建跨部门协作的敏捷团队</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-5 border border-orange-100">
                    <h5 className="font-medium text-gray-900 mb-3">市场拓展目标</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>新增客户数：15家</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>合同总额：1000万元</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>战略合作伙伴：5家</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>市场覆盖：深耕华南区域，拓展华东、华北市场</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  分季度行动计划
                </h4>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-blue-600 px-5 py-3 text-white font-medium">2025年Q2（4-6月）</div>
                    <div className="p-5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-blue-600 mr-2" />
                            <span>4月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>完成DeepSeek模型能力测试与场景适配研究</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>组建专业AI技术团队</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>制定全年市场推广计划</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-blue-600 mr-2" />
                            <span>5月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>开发政务与金融行业标准化解决方案</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>选择1-2个种子客户启动试点项目</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>建立项目实施标准流程</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-blue-600 mr-2" />
                            <span>6月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>完成首个标杆案例构建</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>建立专业AI技术培训体系</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>开展第一期行业解决方案研讨会</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-green-600 px-5 py-3 text-white font-medium">2025年Q3（7-9月）</div>
                    <div className="p-5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <span>7月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>构建行业解决方案知识库与方案库</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>完成教育行业标准化解决方案开发</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>拓展2-3个新客户</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <span>8月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>落地2-3个试点项目，积累实践经验</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>发布首个行业白皮书</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>启动战略合作伙伴招募计划</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <span>9月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>总结项目实施经验，优化交付流程</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>扩大技术团队规模，增强交付能力</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>举办大型行业应用峰会</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-purple-600 px-5 py-3 text-white font-medium">2025年Q4（10-12月）</div>
                    <div className="p-5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-purple-600 mr-2" />
                            <span>10月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>完成第3个试点项目落地</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>优化解决方案，提升复制性与可扩展性</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>推进区域市场拓展</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-purple-600 mr-2" />
                            <span>11月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>总结项目经验，完善解决方案体系</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>培训认证第二批AI专业人才</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>推动项目规模化复制</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-100 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-purple-600 mr-2" />
                            <span>12月</span>
                          </h5>
                          <ul className="space-y-1.5 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>完成年度目标评估</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>总结成功经验，识别改进机会</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></div>
                              <span>制定2026年发展战略与计划</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">资源配置计划</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    人力资源配置
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>技术团队扩充：增加8名AI开发工程师</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>行业专家引进：招募3名垂直行业专家</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>交付团队建设：组建10人实施交付团队</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>销售团队强化：培养5名AI解决方案销售专家</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    技术资源建设
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>模型评测与优化实验环境</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>行业知识库与方案库</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>模型微调与定制化工具</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    市场投入计划
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>制作行业解决方案宣传资料</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>举办季度行业研讨会</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>参与行业展会与峰会</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3
                      0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    合作伙伴发展
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>与有DeepSeek经验开发厂商深度战略合作</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>发展3-5家硬件设备合作伙伴</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>培育5-8家行业解决方案合作伙伴</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* 结尾与展望 */}
        <section id="conclusion" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                结语与展望
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center mr-3">1</span>
                  AI行业发展趋势总结
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>DeepSeek等国产大模型技术突破为行业带来变革机遇</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>大模型从通用能力走向行业深耕，垂直应用成为主战场</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>开源开放与高效算法成为AI创新的主旋律</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>本地化部署与定制化服务日益成为企业需求主流</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center mr-3">2</span>
                  中通南方战略定位
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>深耕垂直行业，以技术+场景双轮驱动</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>构建"平台+行业+服务"的一体化业务模式</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>打造差异化AI应用解决方案，形成市场竞争力</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>建立专业技术团队与合作伙伴生态，构建长期竞争优势</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center mr-3">3</span>
                  未来发展愿景
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>成为华南地区领先的AI行业解决方案提供商</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>构建覆盖多垂直领域的解决方案体系</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>建立百家客户案例库，形成示范效应</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>培养百人AI专业团队，成为行业人才高地</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center mr-3">4</span>
                  发展目标与承诺
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>为客户创造可量化的业务价值</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>以更低的门槛、更高的效率、更好的体验，加速客户数字化智能化转型</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>持续研发创新，不断提升解决方案能力</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>成为客户长期可信赖的AI转型合作伙伴</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="py-6 border-t bg-gray-50 border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-600">© 2025 洪浩东. 保留所有权利</p>
          </div>
        </footer>

        {/* 联系我们弹窗 */}
        {isContactModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden transform transition-all">
              <div className="relative">
                {/* 顶部渐变背景 */}
                <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-400"></div>

                {/* 关闭按钮 */}
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-3 right-3 text-white hover:text-gray-200 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* 头像区域 */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                  <div className="h-24 w-24 rounded-full bg-white p-1 shadow-lg">
                    <div className="h-full w-full rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="pt-16 px-6 pb-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">联系我们</h3>
                <p className="text-gray-500 mb-6">我们期待与您沟通</p>

                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500">微信号</p>
                      <p className="font-medium text-gray-900">scauos</p>
                    </div>
                    <button
                      className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium"
                      onClick={() => {
                        navigator.clipboard.writeText('scauos');
                        alert('微信号已复制到剪贴板');
                      }}
                    >
                      复制
                    </button>
                  </div>

                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="bg-green-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500">电话</p>
                      <p className="font-medium text-gray-900">13602801537</p>
                    </div>
                    <button
                      className="ml-auto text-green-600 hover:text-green-800 text-sm font-medium"
                      onClick={() => {
                        navigator.clipboard.writeText('13602801537');
                        alert('电话号码已复制到剪贴板');
                      }}
                    >
                      复制
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setIsContactModalOpen(false)}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    关闭
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default IndustryInsights;

// 添加行业应用组件
const IndustryApplications = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // 行业数据
  const industries = [
    {
      id: 'government',
      name: '政务',
      title: '政务服务行业应用场景',
      tag: '政务服务',
      color: 'blue',
      description: '政务AI大模型应用场景涵盖政务咨询、政策解读、城市治理等多个领域，提升政府工作效率和服务质量',
      scenarios: [
        { name: '政务咨询', value: '智能问答' },
        { name: '政策解读', value: '自动分析' },
        { name: '一网通办', value: '业务优化' },
        { name: '城市治理', value: '智能决策' }
      ],
      applications: [
        {
          title: '北京市"人工智能+"行动计划',
          description: '2024年《北京市推动"人工智能+"行动计划》目标到2025年底力争形成3-5个先进基础大模型、100个行业大模型'
        },
        {
          title: '多地政务智能问答系统',
          description: '已在北京、上海、深圳等多个城市政务服务平台上线，实现智能分诊和自动解答常见问题'
        },
        {
          title: 'DeepSeek政务应用探索',
          description: 'DeepSeek将在政务服务"一网通办"、政务协同"一网同办"、城市治理"一网统管"等方面带来新机遇，已有20余省市开始探索应用'
        }
      ],
      values: [
        { name: '提升政府工作效率', description: '减少人工处理时间，简化行政流程' },
        { name: '优化城市治理', description: '实现城市问题的智能识别、分类与处理' },
        { name: '增强政务服务体验', description: '提供24小时不间断服务，降低市民办事成本' },
        { name: '促进决策科学化', description: '辅助政策分析和预测，提高决策质量' }
      ]
    },
    {
      id: 'finance',
      name: '金融',
      title: '金融行业应用场景',
      tag: '金融服务',
      color: 'purple',
      description: '金融大模型始于2023年3月BloombergGPT，可预测用户行为，评估风险，分析市场数据，提供客户服务',
      scenarios: [
        { name: '智能风控', value: '风险评估' },
        { name: '智能投研', value: '数据分析' },
        { name: '智能客服', value: '营销服务' },
        { name: '合规管理', value: '风险控制' }
      ],
      applications: [
        {
          title: '高盛AI交易员系统',
          description: '通过AI大模型实时分析全球金融数据流，预测市场转向，为企业创造显著利润'
        },
        {
          title: '工商银行金融大模型',
          description: '与鹏城实验室等联合发布基于昇腾AI的金融行业通用模型，应用于员工智能助手、知识运营和投研助手'
        },
        {
          title: '证券公司智能投研系统',
          description: '运用AI大模型分析宏观经济、行业政策和公司财报，生成专业的投资建议，实现智能化投资决策支持'
        }
      ],
      values: [
        { name: '降低风险', description: '准确识别欺诈交易和信用风险，减少金融损失' },
        { name: '提高效率', description: '自动化投研和报告生成，减少重复性工作' },
        { name: '优化客户体验', description: '提供全天候、个性化的金融服务' },
        { name: '强化合规管理', description: '自动监控业务合规性，降低违规风险' }
      ]
    },
    {
      id: 'education',
      name: '教育',
      title: '教育行业应用场景',
      tag: '智慧教育',
      color: 'green',
      description: 'AI与教育深度融合，通用型大模型和教育垂类大模型不断涌现，再造教育流程，提升教学质量与学习效果',
      scenarios: [
        { name: '个性化学习', value: '学习路径' },
        { name: '智能教学', value: '教学辅助' },
        { name: '智能评估', value: '学习分析' },
        { name: '教育管理', value: '资源优化' }
      ],
      applications: [
        {
          title: '国家智慧教育平台升级',
          description: '2024年3月，教育部启动人工智能赋能教育行动，推出"AI学习专栏"和智慧教育公共服务平台升级'
        },
        {
          title: '东风东路小学AI+教育应用',
          description: '实现智能备课、作业批改、个性化学习和家校协同平台的一体化应用'
        },
        {
          title: 'AI教育助手应用',
          description: '为学生提供个性化学习辅导，智能评估学习进度，给出针对性建议，实现因材施教'
        }
      ],
      values: [
        { name: '提升教学质量', description: '减轻教师负担，提高教学效率' },
        { name: '个性化教育', description: '针对学生特点提供定制化学习路径' },
        { name: '资源优化', description: '提高教育资源利用效率，减少浪费' },
        { name: '教学创新', description: '促进教学模式和内容的创新发展' }
      ]
    },
    {
      id: 'medical',
      name: '医疗',
      title: '医疗行业应用场景',
      tag: '医疗健康',
      color: 'red',
      description: 'AI大模型在医疗健康领域的应用取得显著进展，在疾病预防、精准医疗、智慧医院等领域涌现创新应用',
      scenarios: [
        { name: '辅助诊断', value: '医疗决策' },
        { name: '医学影像', value: '影像分析' },
        { name: '智能病历', value: '效率提升' },
        { name: '药物研发', value: '加速创新' }
      ],
      applications: [
        {
          title: '美敦力智能问答系统',
          description: '为改善心脏起搏器患者术后随访，推出基于大模型的智能问答系统，提供7*24小时在线客服'
        },
        {
          title: '瑞金医院医学大模型',
          description: '基于高质量瑞金医学数据构建医学大模型矩阵，已上线体检报告和电子病历生成系统'
        },
        {
          title: '医渡科技智能筛选系统',
          description: '利用大数据+大模型技术打造智能筛选系统，为肿瘤类项目平均节省88.5%人工筛查成本，非肿瘤类项目平均节省69.8%人工筛查成本'
        }
      ],
      values: [
        { name: '提高诊断准确性', description: '辅助医生进行疾病诊断，减少误诊率' },
        { name: '加快药物研发', description: '缩短新药研发周期，降低研发成本' },
        { name: '优化医疗资源', description: '提高医疗资源利用效率，改善患者体验' },
        { name: '减轻医护负担', description: '自动化文书工作，让医生专注于患者沟通' }
      ]
    },
    {
      id: 'manufacturing',
      name: '制造',
      title: '制造业应用场景',
      tag: '智能制造',
      color: 'orange',
      description: 'AI大模型在制造业应用场景丰富，包括产品设计、生产制造、质量检测、设备维护、能源管理等多个环节',
      scenarios: [
        { name: '智能设计', value: '创新研发' },
        { name: '生产智能化', value: '流程优化' },
        { name: '预测性维护', value: '设备管理' },
        { name: '质量控制', value: '缺陷识别' }
      ],
      applications: [
        {
          title: '浙江智能制造转型',
          description: '浙江已实现规上工业企业数字化改造全覆盖，2025年开展"AI大模型+传统制造业"试点'
        },
        {
          title: '华为智能制造应用',
          description: '智能制造市场规模自2019年开始每年保持40%以上增长率，2025年将超过400亿人民币'
        },
        {
          title: '工业设备预测性维护系统',
          description: '通过AI分析设备运行数据，预测潜在故障，减少停机时间，提升设备利用率和生产效率'
        }
      ],
      values: [
        { name: '提高产品质量', description: '减少缺陷率，提升产品一致性' },
        { name: '降低生产成本', description: '优化生产流程，减少资源浪费' },
        { name: '延长设备寿命', description: '通过预测性维护减少设备故障' },
        { name: '加速创新', description: '缩短产品研发周期，增强市场竞争力' }
      ]
    }
  ];

  return (
    <>
      <div className="flex flex-wrap mb-8">
        <button
          className={`m-1 px-4 py-2 rounded-full text-sm font-medium focus:outline-none ${selectedIndustry === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
          onClick={() => setSelectedIndustry('all')}
        >
          全部
        </button>
        {industries.map(industry => (
          <button
            key={industry.id}
            className={`m-1 px-4 py-2 rounded-full text-sm font-medium focus:outline-none ${selectedIndustry === industry.id ? `bg-${industry.color}-600 text-white` : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            onClick={() => setSelectedIndustry(industry.id)}
          >
            {industry.name}
          </button>
        ))}
      </div>

      {selectedIndustry === 'all' ? (
        // 显示所有行业的简略卡片
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map(industry => (
            <div
              key={industry.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 fade-in-section cursor-pointer"
              onClick={() => setSelectedIndustry(industry.id)}
            >
              <div className="p-5 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900">{industry.name}行业应用</h3>
                  <span className={`bg-${industry.color}-100 text-${industry.color}-700 text-xs px-2 py-1 rounded-full`}>{industry.tag}</span>
                </div>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
              <div className="p-5">
                <h4 className="font-medium text-gray-900 text-sm mb-2">核心应用场景</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {industry.scenarios.map((scenario, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-md text-center">
                      <p className="text-sm text-gray-700 mb-1">{scenario.name}</p>
                      <p className={`text-sm font-medium text-${idx === 0 ? 'blue' : idx === 1 ? 'green' : idx === 2 ? 'purple' : 'orange'}-600`}>{scenario.value}</p>
                    </div>
                  ))}
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-2">实际应用案例</h4>
                <div className="bg-gray-50 p-3 rounded-md mb-2">
                  <p className="font-medium text-gray-800 text-sm">{industry.applications[0].title}</p>
                  <p className="text-xs text-gray-600 mt-1">{industry.applications[0].description}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="font-medium text-gray-800 text-sm">{industry.applications[1].title}</p>
                  <p className="text-xs text-gray-600 mt-1">{industry.applications[1].description}</p>
                </div>
              </div>
              <div className="px-5 py-3 bg-gray-50 flex justify-end">
                <button className={`text-${industry.color}-600 hover:text-${industry.color}-800 text-sm font-medium flex items-center`}>
                  了解详情 <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // 显示选中行业的详细内容
        <div className="mb-16">
          {(() => {
            const industry = industries.find(ind => ind.id === selectedIndustry);
            if (!industry) return null;

            return (
              <>
                <div className="flex justify-between items-center mb-6">
                  <button
                    className="text-gray-600 hover:text-gray-900 flex items-center text-sm px-3 py-1 border border-gray-300 rounded-md"
                    onClick={() => {
                      // 确保设置为'all'状态并避免可能的事件冒泡问题
                      setSelectedIndustry('all');
                    }}
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    返回全部行业
                  </button>
                  <span className={`bg-${industry.color}-100 text-${industry.color}-700 text-xs px-2 py-1 rounded-full`}>{industry.tag}</span>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className={`bg-${industry.color}-600 px-6 py-4 text-white`}>
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                    <p className={`text-${industry.color}-100 mt-1`}>{industry.description}</p>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">核心应用场景</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {industry.scenarios.map((scenario, idx) => (
                        <div key={idx} className={`bg-${industry.color}-50 border border-${industry.color}-100 p-4 rounded-lg`}>
                          <h5 className={`text-${industry.color}-700 font-medium mb-2`}>{scenario.name}</h5>
                          <p className="text-gray-600">{scenario.value}</p>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">价值创造</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {industry.values.map((value, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`bg-${industry.color}-100 p-2 rounded-md mr-3 mt-1`}>
                            <Check className={`h-4 w-4 text-${industry.color}-600`} />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">{value.name}</h5>
                            <p className="text-sm text-gray-600">{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">实际应用案例</h4>
                    <div className="space-y-4">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-1">{app.title}</h5>
                          <p className="text-gray-600">{app.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">导入DeepSeek AI的方案建议</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className={`bg-${industry.color}-100 p-2 rounded-md mr-3 mt-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-${industry.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">技术路径</h5>
                        <p className="text-gray-600 mt-1">基于DeepSeek V3模型构建{industry.name}行业专用模型，结合RAG技术与知识库，实现专业领域知识增强</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className={`bg-${industry.color}-100 p-2 rounded-md mr-3 mt-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-${industry.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">实施阶段</h5>
                        <ol className="mt-1 space-y-1 text-gray-600 list-decimal list-inside">
                          <li>需求调研与场景定义（1-2周）</li>
                          <li>专业知识库构建（2-4周）</li>
                          <li>模型适配与微调（3-6周）</li>
                          <li>业务系统集成（2-4周）</li>
                          <li>试点应用与优化（4-8周）</li>
                        </ol>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className={`bg-${industry.color}-100 p-2 rounded-md mr-3 mt-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-${industry.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">投资回报分析</h5>
                        <p className="text-gray-600 mt-1">根据行业标杆案例分析，预计实施DeepSeek AI解决方案后，可实现：</p>
                        <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                          <li>业务处理效率提升40-60%</li>
                          <li>人力资源优化配置，降低人工成本15-30%</li>
                          <li>服务质量提升，用户满意度提高25-35%</li>
                          <li>投资回收期预计12-18个月</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </>
  );
};
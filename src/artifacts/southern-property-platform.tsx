import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, 
  BarChart, BarChart2, PieChart, TrendingUp, 
  Users, Zap, 
  Check, FileText, Compass, Lightbulb, Target, 
  Network, Phone, Mail, MapPin, Brain, TrendingDown, Activity, Shield, Eye, Copy, Database,
  Building, Calendar, Briefcase
} from 'lucide-react';

const SouthernPropertyPlatform = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // 初始化时检查系统主题偏好
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 切换主题模式
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 切换菜单
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 处理滚动到指定区域
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  // 定义导航菜单项
  const navItems = [
    { id: 'overview', label: '项目概览' },
    { id: 'background', label: '背景与挑战' },
    { id: 'methodology', label: '咨询方法' },
    { id: 'assessment', label: '评估发现' },
    { id: 'strategy', label: '战略规划' },
    { id: 'implementation', label: '实施路径' },
    { id: 'value', label: '价值创造' },
    { id: 'ai-planning', label: 'AI规划咨询' },
    { id: 'case-study', label: 'AI咨询规划方案' },
  ];


  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* 顶部导航栏 */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b shadow-sm`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold md:text-2xl">AI咨询规划 | 数智化转型解决方案</h1>
          </div>
          
          <div className="flex items-center">
            {/* 主题切换按钮 */}
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-800'} mr-4`}
              aria-label="切换深色/浅色模式"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* 桌面导航菜单 */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`${activeSection === item.id ? (darkMode ? 'text-blue-400' : 'text-blue-600') : ''} hover:opacity-80 transition-opacity`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* 移动端菜单按钮 */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden p-2"
              aria-label="菜单"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* 移动端下拉菜单 */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
            <ul className="py-2">
              {navItems.map(item => (
                <li key={item.id} className="px-4 py-2">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`${activeSection === item.id ? (darkMode ? 'text-blue-400' : 'text-blue-600') : ''} w-full text-left`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* 项目概览 */}
        <section id="overview" className="mb-24">
          <div className="max-w-5xl mx-auto">
            <div className={`${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} p-6 md:p-10 rounded-xl shadow-lg mb-8 relative overflow-hidden`}>
              {/* 装饰元素 */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">南方产权数智型交易平台</h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-500 dark:text-gray-300">成熟度评估与建设路径咨询项目</h2>
                  </div>
                  <div className={`hidden md:block ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <Database size={48} className="opacity-80" />
                  </div>
                </div>
                
                <div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-70'} backdrop-blur-sm shadow-md`}>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <FileText size={18} className="mr-2 text-blue-500" />
                      项目信息
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Building size={16} className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <div>
                          <span className="font-medium">客户:</span>
                          <span className="ml-2">南方联合产权交易中心有限责任公司</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar size={16} className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <div>
                          <span className="font-medium">项目周期:</span>
                          <span className="ml-2">2024年</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Briefcase size={16} className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <div>
                          <span className="font-medium">服务类型:</span>
                          <span className="ml-2">数字化成熟度评估与转型规划咨询</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-70'} backdrop-blur-sm shadow-md`}>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Users size={18} className="mr-2 text-blue-500" />
                      咨询团队
                    </h3>
                    <p className="mb-3">由7位专家组成，涵盖多个专业领域：</p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-blue-900 bg-opacity-50 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>数字化转型</span>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-green-900 bg-opacity-50 text-green-300' : 'bg-green-100 text-green-800'}`}>产权交易</span>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-purple-900 bg-opacity-50 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>数据治理</span>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-orange-900 bg-opacity-50 text-orange-300' : 'bg-orange-100 text-orange-800'}`}>IT架构</span>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-red-900 bg-opacity-50 text-red-300' : 'bg-red-100 text-red-800'}`}>业务创新</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl leading-relaxed">本项目旨在帮助南方联合产权交易中心构建数智型交易平台，提升数字化成熟度，加速业务转型升级。通过系统性评估与规划，我们为客户提供了全面的数字化转型解决方案，助力其在数字经济时代保持竞争优势。</p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900 bg-opacity-30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                  <Zap size={16} className="mr-1" /> 数字化转型
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-green-900 bg-opacity-30 text-green-300' : 'bg-green-100 text-green-800'}`}>
                  <BarChart2 size={16} className="mr-1" /> 成熟度评估
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-900 bg-opacity-30 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
                  <MapPin size={16} className="mr-1" /> 路径规划
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-orange-900 bg-opacity-30 text-orange-300' : 'bg-orange-100 text-orange-800'}`}>
                  <Database size={16} className="mr-1" /> 数据治理
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 项目背景与挑战 */}
        <section id="background" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">项目背景与挑战</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p>南方联合产权交易中心作为广东省属国有资本市场的重要平台，肩负着以阳光交易、发现价格、发现价值的方式促进国有资本存量流动、优化配置的重要使命。面临数字经济发展新形势下的多重挑战：</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg shadow-md`}>
                <h3 className="text-xl font-semibold mb-4">行业竞争挑战</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>沪深交易所等传统证券类交易场所加大创新力度</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>北京产权交易所等同业机构布局粤港澳大湾区</span>
                  </li>
                </ul>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg shadow-md`}>
                <h3 className="text-xl font-semibold mb-4">数据价值挑战</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>存在"信息孤岛"问题，数据共享机制不完善</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>无法充分发挥数据要素价值，难以支撑精准决策</span>
                  </li>
                </ul>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg shadow-md`}>
                <h3 className="text-xl font-semibold mb-4">系统协同挑战</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>核心业务系统间集成度不高，跨系统协同效率低下</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>难以提供一站式综合服务</span>
                  </li>
                </ul>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg shadow-md`}>
                <h3 className="text-xl font-semibold mb-4">转型规划挑战</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>数字化建设处于"零散化探索阶段"</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>缺乏整体战略引领和科学评估体系</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                    <span>数字化专业人才队伍建设滞后，复合型人才储备不足</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 咨询方法与流程 */}
        <section id="methodology" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">咨询方法与流程</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p>我们采用整体性、系统化的咨询方法，确保评估全面客观、规划切实可行：</p>
            </div>
            
            <div className="space-y-10">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">1. 指标体系构建阶段</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">理论研究:</span>
                      <span>深入研究企业组织理论、流程再造理论、变革管理理论和数字化成熟度模型</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">标杆分析:</span>
                      <span>考察行业领先机构实践，提炼数字化转型关键成功因素</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">专家研讨:</span>
                      <span>召开多轮专家讨论会，凝聚行业共识，优化评估框架</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">指标设计:</span>
                      <span>构建8大能力要素×19个能力域×38个能力子域三级评估框架</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">指标验证:</span>
                      <span>通过试评估验证指标体系的科学性和可操作性，并进行优化完善</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">数字化治理</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">数据管理</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">数字化基础设施</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">产品和服务数字化</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">经营管理数字化</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">运营数字化</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">内控体系数字化</p>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <p className="text-sm font-medium">可持续发展基础</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">2. 现状评估与诊断阶段</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">资料收集:</span>
                      <span>梳理分析战略规划、业务流程、系统架构、数据治理等内部文档600余份</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">实地调研:</span>
                      <span>对19个部门进行访谈，了解业务痛点和数字化需求</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">问卷调查:</span>
                      <span>开展全员数字化认知和能力调查，回收有效问卷115份</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">专项测试:</span>
                      <span>对核心信息系统和数据质量进行专项测试，量化评估性能和可靠性</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">标杆对比:</span>
                      <span>与北京产权交易所、宁夏科技与资源产权交易所等进行对标分析</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">数据分析:</span>
                      <span>运用定量评分与定性分析相结合的方法，形成各维度成熟度等级判定</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">专家评审:</span>
                      <span>组织内外部专家对评估结果进行评审验证，确保评估客观公正</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">3. 建设路径规划阶段</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">战略定位:</span>
                      <span>结合评估结果与行业趋势，明确南方产权数智化发展的战略定位</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">路径设计:</span>
                      <span>针对评估发现的问题和短板，设计六大关键建设路径</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">举措细化:</span>
                      <span>提出24项具体实施举措，并制定详细的责任分工和时间表</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">成果验证:</span>
                      <span>通过研讨会对规划方案进行讨论完善，提高方案可行性</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">实施保障:</span>
                      <span>设计从组织、资源、制度等多方面的配套保障措施</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 深度评估发现 */}
        <section id="assessment" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">深度评估发现</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">成熟度评估整体结果</h3>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} mb-6`}>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                  <div className="text-center md:text-left mb-6 md:mb-0">
                    <div className="text-sm uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">综合成熟度等级</div>
                    <div className="text-3xl font-bold">三级（发展级）</div>
                    <div className="mt-1 text-lg">总分：3.16分（满分5分）</div>
                  </div>
                  
                  <div className="w-48 h-48 relative">
                    <div className={`absolute inset-0 rounded-full border-8 ${darkMode ? 'border-blue-700' : 'border-blue-200'}`}></div>
                    <div 
                      className={`absolute top-0 left-0 bottom-0 right-0 rounded-full border-8 ${darkMode ? 'border-blue-400' : 'border-blue-600'}`}
                      style={{ 
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(3.16/5 * 2 * Math.PI)}% ${50 - 50 * Math.sin(3.16/5 * 2 * Math.PI)}%, 50% 50%)`,
                        transform: 'rotate(-90deg)'
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">3.16</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <blockquote className={`pl-4 border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} italic`}>
                    "形成系统的中长期规划，数字化体系日趋完善，应用场景不断拓展，开始形成规模效应。"
                  </blockquote>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">各维度详细评分</h4>
                <div className="overflow-x-auto">
                  <table className={`w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
                    <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <tr>
                        <th className="py-3 px-4 text-left">能力要素</th>
                        <th className="py-3 px-4 text-left">权重</th>
                        <th className="py-3 px-4 text-left">得分</th>
                        <th className="py-3 px-4 text-left">能力域</th>
                        <th className="py-3 px-4 text-left">典型问题</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">数字化治理</td>
                        <td className="py-3 px-4">15%</td>
                        <td className="py-3 px-4">3.85</td>
                        <td className="py-3 px-4">战略规划(4.0)、组织管理(3.75)</td>
                        <td className="py-3 px-4">战略实施效果监测不足，创新文化建设有待加强</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">数据管理</td>
                        <td className="py-3 px-4">15%</td>
                        <td className="py-3 px-4">2.82</td>
                        <td className="py-3 px-4">数据规范(2.65)、数据融合(2.70)、数据保护(2.0)</td>
                        <td className="py-3 px-4">数据标准缺失，部门间数据壁垒明显，数据质量参差不齐</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">数字基础设施</td>
                        <td className="py-3 px-4">15%</td>
                        <td className="py-3 px-4">3.21</td>
                        <td className="py-3 px-4">数据中心(3.15)、通信网络(2.0)、安全防护(3.0)</td>
                        <td className="py-3 px-4">设备老旧问题突出，云化率不足50%，智能运维水平较低</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">产品服务数字化</td>
                        <td className="py-3 px-4">15%</td>
                        <td className="py-3 px-4">3.20</td>
                        <td className="py-3 px-4">线上渠道(4.0)、线下渠道(2.0)</td>
                        <td className="py-3 px-4">线上业务流程优化不足，缺乏个性化智能推荐能力</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">经营管理数字化</td>
                        <td className="py-3 px-4">15%</td>
                        <td className="py-3 px-4">3.15</td>
                        <td className="py-3 px-4">数字办公(3.0)、数字经营(3.2)、敏捷创新(3.0)</td>
                        <td className="py-3 px-4">业务与技术协同不足，创新项目落地机制不完善</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">运营数字化</td>
                        <td className="py-3 px-4">10%</td>
                        <td className="py-3 px-4">3.00</td>
                        <td className="py-3 px-4">流程标准化(3.0)、流程自动化(3.0)</td>
                        <td className="py-3 px-4">流程自动化率不足60%，重复性工作占比高</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">内控数字化</td>
                        <td className="py-3 px-4">10%</td>
                        <td className="py-3 px-4">2.85</td>
                        <td className="py-3 px-4">合规管理(2.5)、风险管理(2.9)、审计管理(3.0)</td>
                        <td className="py-3 px-4">风险监测预警不及时，合规管理平台有待升级</td>
                      </tr>
                      <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3 px-4 font-medium">可持续发展基础</td>
                        <td className="py-3 px-4">5%</td>
                        <td className="py-3 px-4">3.00</td>
                        <td className="py-3 px-4">标准体系建设(3.0)</td>
                        <td className="py-3 px-4">标准制修订参与广度不够，标准应用深度不足</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6">典型挑战</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg shadow-md`}>
                    <h3 className="text-xl font-semibold mb-4">外部挑战</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                        <span>沪深交易所等传统证券类交易场所加大创新力度</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                        <span>北京产权交易所等同业机构布局粤港澳大湾区</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                        <span>区域竞争日益激烈</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg shadow-md`}>
                    <h3 className="text-xl font-semibold mb-4">内部痛点</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                        <span>数据价值难以发挥，存在"信息孤岛"问题</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                        <span>业务系统割裂，跨系统协同效率低下</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                        <span>转型缺乏系统规划，数字化建设处于"零散化探索阶段"</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></span>
                        <span>人才支撑不足，复合型人才储备不足</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 典型差距与问题分析 */}
        <section id="problems" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">典型差距与问题分析</h2>
            
            <div className="space-y-8">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">1. 数据治理基础薄弱</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">核心问题</h4>
                    <p>未建成企业级数据中台，缺乏统一数据视图</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">具体表现</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">数据标准化程度低，不同系统中相同业务概念存在多种定义</li>
                      <li className="list-disc">缺乏数据资产目录，难以全面掌握数据资源情况</li>
                      <li className="list-disc">元数据、主数据管理滞后，影响数据质量和一致性</li>
                      <li className="list-disc">数据共享机制不健全，跨部门数据调用流程复杂</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">根本原因</h4>
                    <p>缺乏顶层规划，数据管理职责不明确，数据标准制定和执行机制不完善</p>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">2. 系统集成与智能化水平不足</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">核心问题</h4>
                    <p>各业务系统相对独立，集成度低，智能化水平不足</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">具体表现</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">交易、投行、融资等业务系统间数据共享机制不畅</li>
                      <li className="list-disc">系统间跨业务协同效率低下，无法提供一站式服务</li>
                      <li className="list-disc">人工智能、区块链等新技术应用不足，系统智能化程度较低</li>
                      <li className="list-disc">技术架构老旧，难以支撑业务快速迭代创新</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">根本原因</h4>
                    <p>信息化建设相对分散，缺乏统一的技术架构规划和标准规范</p>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">3. 数字化人才体系不完善</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">核心问题</h4>
                    <p>数字化转型所需的复合型人才储备不足</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">具体表现</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">既懂业务又懂技术的复合型人才匮乏</li>
                      <li className="list-disc">人才引进机制不够灵活，难以吸引高端AI、大数据人才</li>
                      <li className="list-disc">数字技能培训体系不完善，员工数字素养提升缓慢</li>
                      <li className="list-disc">缺乏针对数字化创新的激励机制，创新活力不足</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">根本原因</h4>
                    <p>传统人才管理模式与数字化转型要求不匹配，激励和考核机制不够科学</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 战略规划与建设路径 */}
        <section id="strategy" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">战略规划与建设路径</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">战略定位与愿景</h3>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} mb-6`}>
                <h4 className="text-lg font-medium mb-4 text-center">基于评估结果，我们提出南方产权数智型交易平台的战略定位：</h4>
                <blockquote className={`p-4 border-l-4 ${darkMode ? 'border-blue-400 bg-gray-700' : 'border-blue-600 bg-white'} rounded-r-lg`}>
                  <p className="text-lg font-medium">打造集约高效、智能精准的现代化综合性产权交易平台，构建开放共享、协同创新的服务生态，成为面向粤港澳大湾区乃至全国的产业赋能、生态引领的重要枢纽。</p>
                </blockquote>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6">"四化"建设理念解析</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <BarChart size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">数字化：数据驱动、流程再造</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">数据战略:</span>
                      <span>将数据视为核心战略资产，实施全方位数据治理</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">流程优化:</span>
                      <span>基于数据洞察，重塑业务流程，提升运营效率</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">构建统一的数据管理平台，打通数据孤岛</li>
                      <li className="list-disc">制定数据分类分级标准，建立数据资产目录</li>
                      <li className="list-disc">以数据为导向重构核心业务流程</li>
                      <li className="list-disc">建立数据质量管理体系，提高数据价值</li>
                    </ul>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <Zap size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">智能化：技术引领、模式创新</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">技术驱动:</span>
                      <span>以AI、区块链为代表的前沿技术重塑业务模式</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">智能应用:</span>
                      <span>开发智能投顾、智能风控、智能客服等场景应用</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">建立金融科技实验室，开展前沿技术研发</li>
                      <li className="list-disc">打造智能投资分析平台，提供个性化投资建议</li>
                      <li className="list-disc">运用区块链技术创新数字资产交易模式</li>
                      <li className="list-disc">利用自然语言处理技术提升客户服务体验</li>
                    </ul>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <PieChart size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">平台化：汇聚资源、创造价值</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">能力开放:</span>
                      <span>构建业务中台，开放API接口，实现能力复用</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">资源汇聚:</span>
                      <span>吸引多方参与，形成资源集聚效应</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">打造统一的业务中台，沉淀可复用的业务能力</li>
                      <li className="list-disc">建立开放API平台，向合作伙伴开放核心能力</li>
                      <li className="list-disc">构建产融生态圈，连接资金、项目和服务资源</li>
                      <li className="list-disc">打造一站式综合服务平台，提供全流程解决方案</li>
                    </ul>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <Users size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">生态化：内外联动、合作共赢</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">生态构建:</span>
                      <span>打造产权交易领域的开放生态系统</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">价值共创:</span>
                      <span>与合作伙伴共同创造和分享生态价值</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">建立产权数据共享联盟，促进数据资源流通</li>
                      <li className="list-disc">打造产业创新联合体，共同孵化创新项目</li>
                      <li className="list-disc">搭建跨境合作平台，促进粤港澳大湾区资源互通</li>
                      <li className="list-disc">构建产权+科技+金融的融合发展生态</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-6">"一核多元"发展战略详解</h3>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} mb-8`}>
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-40 h-40 rounded-full ${darkMode ? 'bg-blue-800' : 'bg-blue-600'} flex items-center justify-center text-white z-10 relative`}>
                      <div className="text-center">
                        <div className="font-bold">核心</div>
                        <div className="text-sm mt-1">产权交易主业</div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-full border-4 border-dashed border-blue-300 dark:border-blue-500 animate-spin-slow"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                    <h4 className="font-medium mb-2">做优做强</h4>
                    <p>产权交易主业</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                    <h4 className="font-medium mb-2">做实做精</h4>
                    <p>数据增值服务</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                    <h4 className="font-medium mb-2">做专做深</h4>
                    <p>科技创新驱动</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h4 className="font-semibold mb-3 text-center">核心：做优做强产权交易主业</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>规则优化：创新交易规则，提升市场运行效率</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>品种丰富：培育知识产权、数据要素等新型交易品种</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>方式创新：推动交易全流程线上化，发展区块链等技术支撑的新型交易方式</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>品牌塑造：打造具有全国影响力的产权交易服务品牌</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h4 className="font-semibold mb-3 text-center">延伸：做实做精数据增值服务</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>数据治理：全面升级数据管理体系，构建数据资产目录</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>能力建设：打造大数据平台，提升数据分析和应用能力</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>产品创新：开发数据分析、风险监测等创新数据产品</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>价值转化：培育数据交易、数据评估等新业态</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h4 className="font-semibold mb-3 text-center">赋能：做专做深科技创新驱动</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>平台构建：建设产权大数据中心和金融科技实验室</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>技术攻关：在区块链、AI等前沿领域开展关键技术研究</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>成果转化：推动科技成果快速转化为创新服务和产品</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>人才培养：构建创新型、复合型人才培养体系</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>在此背景下，南方产权亟需开展系统性评估，找准定位，明晰路径，加快构建数智型交易平台，实现高质量发展。</p>
            </div>
          </div>
        </section>

        {/* 建设路径与实施策略 */}
        <section id="implementation" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">建设路径与实施策略</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-6">
              <p>基于评估结果，我们提出六大关键建设路径，并细化为可执行的实施策略：</p>
            </div>
            
            <div className="space-y-8">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">1</span>
                    <h3 className="text-xl font-semibold">强化数字化顶层设计与统筹规划</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">战略规划制定</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">成立数字化转型领导小组，由董事长担任组长</li>
                          <li className="list-disc">制定五年数字化转型规划，明确阶段性目标</li>
                          <li className="list-disc">建立专项投入机制，确保每年研发投入强度不低于8%</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">建立数字化转型战略定期评估与调整机制</li>
                          <li className="list-disc">将数字化转型纳入公司战略核心</li>
                          <li className="list-disc">制定行业领先的数字化标准体系</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">组织架构优化</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">设立首席数据官(CDO)和首席信息官(CIO)岗位</li>
                          <li className="list-disc">组建跨部门的数据治理委员会，明确数据责任制</li>
                          <li className="list-disc">成立数字化创新中心，整合研发和创新资源</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建扁平化、敏捷型组织结构</li>
                          <li className="list-disc">建立业务与技术融合的矩阵式组织架构</li>
                          <li className="list-disc">打造"小前台、大中台、强后台"的组织模式</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">2</span>
                    <h3 className="text-xl font-semibold">夯实数据资源管理利用基础</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">数据治理体系建设</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">制定数据治理政策和标准，建立数据分类分级体系</li>
                          <li className="list-disc">开展数据资产普查，建立统一的数据资产目录</li>
                          <li className="list-disc">制定数据生命周期管理规范</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建企业级数据中台，统一数据管理和服务</li>
                          <li className="list-disc">建立数据质量评估和持续改进机制</li>
                          <li className="list-disc">推动数据资产化和价值评估体系建设</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">数据安全保障</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">完善数据安全管理制度，强化数据访问控制</li>
                          <li className="list-disc">开展重要数据识别与保护工作，实施分级保护</li>
                          <li className="list-disc">建立数据安全应急预案和响应机制</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">部署数据全生命周期安全防护体系</li>
                          <li className="list-disc">实施数据安全态势感知和智能防御</li>
                          <li className="list-disc">建立数据安全合规评估和认证体系</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mt-6`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">3</span>
                    <h3 className="text-xl font-semibold">加快关键信息系统应用升级</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">交易系统现代化改造</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">推进核心交易系统云原生架构升级</li>
                          <li className="list-disc">完善电子化交易功能，实现全流程线上办理</li>
                          <li className="list-disc">开发移动端APP，提升用户体验</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">引入区块链技术，创新资产确权和交易模式</li>
                          <li className="list-disc">构建智能撮合引擎，提升交易匹配效率</li>
                          <li className="list-disc">打造开放API平台，支持生态化发展</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">智能化平台建设</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建AI中台，提供机器学习、自然语言处理等基础能力</li>
                          <li className="list-disc">开发智能客服和智能辅助决策系统</li>
                          <li className="list-disc">建设智能风控平台，提升风险管理能力</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建智能投研体系，提供精准投资分析</li>
                          <li className="list-disc">开发知识图谱应用，挖掘潜在业务机会</li>
                          <li className="list-disc">实现系统间的智能协同和自主决策</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">4</span>
                    <h3 className="text-xl font-semibold">培育"平台经济+开放生态"发展格局</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">开放平台构建</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">梳理核心能力，设计开放API体系</li>
                          <li className="list-disc">搭建开发者平台，吸引第三方应用开发</li>
                          <li className="list-disc">建立合作伙伴认证和管理机制</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建完整的开放生态体系，形成多方共赢格局</li>
                          <li className="list-disc">打造产权交易领域的"超级APP"和服务中台</li>
                          <li className="list-disc">建立生态价值共创和利益分配机制</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">数字产权交易新业态培育</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">开展数据要素交易试点，探索数据定价模式</li>
                          <li className="list-disc">建设知识产权交易平台，推动无形资产流通</li>
                          <li className="list-disc">开发数字藏品交易解决方案，探索新型业务模式</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">打造全国领先的数据要素交易中心</li>
                          <li className="list-disc">推动数字资产证券化和创新金融产品开发</li>
                          <li className="list-disc">构建数字经济新基建和产业生态</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">5</span>
                    <h3 className="text-xl font-semibold">深化机制体制改革与模式创新</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">管理机制创新</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">实施经理层成员任期制和契约化管理</li>
                          <li className="list-disc">建立数字化转型绩效考核体系</li>
                          <li className="list-disc">完善创新容错机制，鼓励探索创新</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">推进混合所有制改革，优化治理结构</li>
                          <li className="list-disc">建立市场化的激励约束机制</li>
                          <li className="list-disc">打造敏捷高效的决策执行体系</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">业务模式创新</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">梳理优化核心业务流程，推动线上线下融合</li>
                          <li className="list-disc">探索"产权+金融"创新模式，丰富服务内涵</li>
                          <li className="list-disc">开展供应链金融试点，服务中小企业融资</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建"数据+产权+金融"的创新生态</li>
                          <li className="list-disc">打造产业链供应链协同平台</li>
                          <li className="list-disc">发展数字经济新业态和新模式</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">6</span>
                    <h3 className="text-xl font-semibold">加快数字化人才队伍建设</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">人才引进与培养</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">制定数字化人才引进计划，聚焦AI、大数据等关键领域</li>
                          <li className="list-disc">建立数字技能培训体系，提升全员数字素养</li>
                          <li className="list-disc">开展与高校院所的人才联合培养</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建数字化人才生态系统，形成人才磁场效应</li>
                          <li className="list-disc">建立复合型人才培养基地和创新实验室</li>
                          <li className="list-disc">打造数字化转型专家团队和内部讲师队伍</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">激励机制创新</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">完善科技创新激励政策，提高创新收益分享比例</li>
                          <li className="list-disc">实施项目跟投机制，强化风险共担、收益共享</li>
                          <li className="list-disc">开展创新大赛和闯关活动，激发创新活力</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">建立科技成果转化收益分配机制</li>
                          <li className="list-disc">实施股权激励和分红激励制度</li>
                          <li className="list-disc">构建多层次、多元化的激励体系</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 实施成效与价值创造 */}
        <section id="value" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">实施成效与价值创造</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p>通过系统化咨询服务，项目为南方产权数智化转型带来了显著价值：</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">战略成果</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>明确了数智型交易平台的功能定位、发展理念和战略布局</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>构建了科学完备的成熟度评估体系，为持续改进提供了方法论</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>设计了六大关键建设路径，提供了可操作的实施路径图</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">实施价值</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>数据资产提升：</strong>通过数据治理，数据资产价值预计提升30%</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>运营效率提高：</strong>通过流程再造和自动化，运营效率预计提升40%</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>成本节约：</strong>通过系统整合和云化改造，IT运维成本预计降低25%</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>收入增长：</strong>通过数字化创新，预计可带来15-20%的业务增长</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">能力突破</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>构建完整的数字化能力评估体系，形成持续监测和改进机制</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>建立数据驱动的运营模式，提升精准决策能力</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>培育创新业务孵化机制，增强可持续发展动力</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">交付成果</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>《数智型交易平台成熟度指标体系构建报告》</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>《南方联合产权交易中心数智型交易平台成熟度评估诊断报告》</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>《南方联合产权交易中心数智型交易平台建设路径研究报告》</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>实施路线图与三年行动计划</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>数字化转型关键项目库（25个）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI规划咨询 */}
        <section id="ai-planning" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">AI规划咨询：国央企转型的新引擎</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p>当前，国央企正处于数字化转型的深水区，面临着多重挑战。AI作为新一轮产业变革的核心引擎，正在为国央企转型提供新动能。</p>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-600'} text-white`}>
                <h3 className="text-xl font-semibold">为何国央企需要AI规划咨询？</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Brain size={20} className="mr-2" />
                      复杂性挑战
                    </h4>
                    <p>业务条线多、组织层级复杂、系统架构庞大</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <TrendingDown size={20} className="mr-2" />
                      效率挑战
                    </h4>
                    <p>人工流程多、决策链条长、运营成本高</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Lightbulb size={20} className="mr-2" />
                      创新挑战
                    </h4>
                    <p>创新机制不健全、技术应用滞后、转型动力不足</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Users size={20} className="mr-2" />
                      人才挑战
                    </h4>
                    <p>专业人才缺乏、知识结构老化、学习更新慢</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6">国央企AI规划咨询的五大价值</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Compass size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">战略引领</h4>
                  <p className="text-sm mb-3">定义AI转型愿景与路径</p>
                  <ul className="text-sm space-y-1">
                    <li>• 梳理组织数字基因，找准AI切入点</li>
                    <li>• 明确AI战略定位与价值主张</li>
                    <li>• 设计战略路线图与关键举措</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Zap size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">能力打造</h4>
                  <p className="text-sm mb-3">构建AI核心竞争力</p>
                  <ul className="text-sm space-y-1">
                    <li>• 评估现有AI能力与差距</li>
                    <li>• 设计AI能力体系架构</li>
                    <li>• 规划技术平台与数据底座</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Lightbulb size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">场景创新</h4>
                  <p className="text-sm mb-3">发掘AI应用新价值</p>
                  <ul className="text-sm space-y-1">
                    <li>• 识别高价值AI应用场景</li>
                    <li>• 设计创新业务模式</li>
                    <li>• 打造差异化竞争优势</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Target size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">落地保障</h4>
                  <p className="text-sm mb-3">确保AI项目成功实施</p>
                  <ul className="text-sm space-y-1">
                    <li>• 制定实施路线与优先级</li>
                    <li>• 设计组织保障与人才策略</li>
                    <li>• 建立投资回报评估体系</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Network size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">生态共建</h4>
                  <p className="text-sm mb-3">构建AI创新生态圈</p>
                  <ul className="text-sm space-y-1">
                    <li>• 规划开放合作机制</li>
                    <li>• 设计产学研协同模式</li>
                    <li>• 打造行业影响力</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-600'} text-white`}>
                <h3 className="text-xl font-semibold">我们的AI规划咨询方法论</h3>
              </div>
              <div className="p-6">
                <p className="mb-6">基于南方产权等多个成功案例，我们构建了针对国央企的"AI-POWER"咨询方法论：</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">A</div>
                    <div>
                      <h4 className="font-medium">Assessment</h4>
                      <p className="text-sm">全面评估数字基础与AI就绪度</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">I</div>
                    <div>
                      <h4 className="font-medium">Insight</h4>
                      <p className="text-sm">深度洞察业务痛点与机会点</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">P</div>
                    <div>
                      <h4 className="font-medium">Prioritization</h4>
                      <p className="text-sm">科学确定场景优先级</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">O</div>
                    <div>
                      <h4 className="font-medium">Opportunity</h4>
                      <p className="text-sm">设计创新应用蓝图</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">W</div>
                    <div>
                      <h4 className="font-medium">Workflow</h4>
                      <p className="text-sm">重塑AI驱动的业务流程</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">E</div>
                    <div>
                      <h4 className="font-medium">Enablement</h4>
                      <p className="text-sm">构建技术与组织保障</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">R</div>
                    <div>
                      <h4 className="font-medium">Roadmap</h4>
                      <p className="text-sm">制定分步实施路线图</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 深圳燃气集团AI规划案例 */}
        <section id="case-study" className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">燃气行业AI咨询规划方案</h2>
            
            {/* 行业洞察与AI机遇 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                <h3 className="text-xl font-semibold">一、行业洞察与AI机遇分析</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">燃气行业数字化发展趋势</h4>
                    <p className="text-sm">分析全球及国内领先燃气企业数字化转型路径，挖掘行业共性问题与发展机会</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">同业标杆案例解析</h4>
                    <p className="text-sm">华润燃气、港华燃气、中国燃气等AI应用成熟度对标，提炼最佳实践</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">燃气企业AI应用价值点识别</h4>
                    <p className="text-sm">安全生产、管网运维、客户服务等领域AI赋能机会，量化价值测算</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">燃气行业AI应用挑战与对策</h4>
                    <p className="text-sm">数据壁垒、专业知识转化、安全合规等行业特殊性挑战及解决方案</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 深燃集团AI现状诊断 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                <h3 className="text-xl font-semibold">二、集团AI现状诊断</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center mb-3`}>
                      <Activity size={20} className={darkMode ? 'text-green-200' : 'text-green-600'} />
                    </div>
                    <h5 className="font-medium mb-2">数字化基础设施评估</h5>
                    <p className="text-sm">SCADA系统、GIS系统、营销系统等现有平台能力评估，识别关键优势与短板</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-orange-900' : 'bg-orange-100'} flex items-center justify-center mb-3`}>
                      <Database size={20} className={darkMode ? 'text-orange-200' : 'text-orange-600'} />
                    </div>
                    <h5 className="font-medium mb-2">数据资源盘点与质量评估</h5>
                    <p className="text-sm">管网数据、运行数据、客户数据、安全数据等资源盘点，全面评估数据质量与价值</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-3`}>
                      <TrendingUp size={20} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                    </div>
                    <h5 className="font-medium mb-2">AI应用成熟度评估</h5>
                    <p className="text-sm">基于国际成熟度模型(AIMMM)的能力等级评估，明确当前位置与目标差距</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} flex items-center justify-center mb-3`}>
                      <Users size={20} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                    </div>
                    <h5 className="font-medium mb-2">人才与组织就绪度分析</h5>
                    <p className="text-sm">跨部门AI认知水平与技能差距分析，为人才培养提供基础</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI战略与顶层设计 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                <h3 className="text-xl font-semibold">三、AI战略与顶层设计</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-medium mb-4">战略定位与愿景</h4>
                <div className={`p-4 mb-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p>"智慧燃气"发展战略：AI战略与集团"十四五"规划协同设计，助力公司成为"国内一流的清洁能源综合运营商、低碳智慧城市服务商"</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">AI应用蓝图</h4>
                    <p className="text-sm">分阶段、分领域实施规划，构建完整AI应用体系</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">投入产出评估</h4>
                    <p className="text-sm">基于行业经验的ROI预测与评估体系，保障投资效益</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">战略实施保障</h4>
                    <p className="text-sm">高层推动与资源保障机制设计，确保战略落地</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 燃气行业AI应用场景规划 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                <h3 className="text-xl font-semibold">四、燃气行业AI应用场景规划</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-red-900' : 'bg-red-100'} flex items-center justify-center mb-3`}>
                      <Shield size={20} className={darkMode ? 'text-red-200' : 'text-red-600'} />
                    </div>
                    <h5 className="font-medium mb-2">安全生产AI应用</h5>
                    <ul className="text-sm space-y-1">
                      <li>• 智能巡检与设备预测性维护</li>
                      <li>• 管网泄漏智能检测与定位</li>
                      <li>• 安全风险预警与应急指挥</li>
                    </ul>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center mb-3`}>
                      <Activity size={20} className={darkMode ? 'text-green-200' : 'text-green-600'} />
                    </div>
                    <h5 className="font-medium mb-2">运营效率AI应用</h5>
                    <ul className="text-sm space-y-1">
                      <li>• 燃气负荷智能预测与调度优化</li>
                      <li>• 智能管网压力优化</li>
                      <li>• 工程施工智能管理</li>
                    </ul>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} flex items-center justify-center mb-3`}>
                      <Users size={20} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                    </div>
                    <h5 className="font-medium mb-2">客户服务AI应用</h5>
                    <ul className="text-sm space-y-1">
                      <li>• 智能客服与个性化服务</li>
                      <li>• 用气行为分析与异常识别</li>
                      <li>• 营销策略智能优化</li>
                    </ul>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} flex items-center justify-center mb-3`}>
                    <Zap size={20} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h5 className="font-medium mb-2">智慧能源整合</h5>
                  <ul className="text-sm space-y-1">
                    <li>• AI驱动的多能互补系统</li>
                    <li>• 清洁能源智能调配</li>
                    <li>• 数字孪生能源网络</li>
                    <li>• 综合能源管理平台</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 分栏显示后续六个部分 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* 数据治理与平台建设 */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">五、数据治理与平台建设</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>燃气行业数据标准体系：行业知识图谱与数据标准设计</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>数据资产管理体系：数据质量管控与资产价值评估</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>燃气数据中台规划：跨系统数据融合与服务能力</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>数据安全与合规框架：关键基础设施数据安全保障</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* AI技术架构与平台设计 */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">六、AI技术架构与平台设计</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <Brain size={24} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <p className="text-sm">燃气企业AI基础设施规划</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <Eye size={24} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <p className="text-sm">AI平台功能架构</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <Copy size={24} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <p className="text-sm">燃气行业专用模型库</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                      <Database size={24} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <p className="text-sm">安全生产与AI融合架构</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 组织与能力建设 */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">七、组织与能力建设</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>AI组织架构设计：中心化vs分布式能力中心</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>燃气专业人才培养计划：分层级AI技能培养体系</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>知识产权与创新机制：AI创新激励与成果保护</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>产学研合作生态：燃气行业AI联合实验室建设</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 实施路径与保障 */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">八、实施路径与保障</h3>
                </div>
                <div className="p-6">
                <h4 className="text-lg font-medium mb-4">实施路线图</h4>
                  <div className="relative mb-6">
                    <div className="absolute h-full w-1 bg-blue-200 dark:bg-blue-900 left-2"></div>
                    
                    <div className="relative z-10 mb-4 ml-8">
                      <div className="absolute -left-6 top-1">
                        <div className={`w-5 h-5 rounded-full ${darkMode ? 'bg-blue-700 border-blue-900' : 'bg-blue-600 border-blue-100'} border-4`}></div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">第一阶段：试点项目遴选与快速见效</h5>
                        <p className="text-sm">基于"价值-可行性"矩阵的项目优先级评估</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 mb-4 ml-8">
                      <div className="absolute -left-6 top-1">
                        <div className={`w-5 h-5 rounded-full ${darkMode ? 'bg-blue-700 border-blue-900' : 'bg-blue-600 border-blue-100'} border-4`}></div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">第二阶段：大规模推广策略</h5>
                        <p className="text-sm">从试点到规模化的方法论与路径</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 ml-8">
                      <div className="absolute -left-6 top-1">
                        <div className={`w-5 h-5 rounded-full ${darkMode ? 'bg-blue-700 border-blue-900' : 'bg-blue-600 border-blue-100'} border-4`}></div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">第三阶段：变革管理与优化</h5>
                        <p className="text-sm">员工参与与认同建设，持续优化提升</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 价值评估与持续优化 */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">九、价值评估与持续优化</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'} text-center`}>
                      <h5 className="font-medium mb-2">预期价值</h5>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <p className="text-2xl font-bold mb-1">↑35%</p>
                          <p className="text-xs">运营效率</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold mb-1">↓40%</p>
                          <p className="text-xs">安全事故</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold mb-1">↑25%</p>
                          <p className="text-xs">服务满意度</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>多维度价值评估体系：安全、效率、服务、成本等维度</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>AI系统效果监测机制：模型性能与业务价值监测</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>持续迭代优化机制：基于业务反馈的AI应用进化</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 风险管控与伦理合规 */}
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">十、风险管控与伦理合规</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>关键基础设施AI安全风险管控：针对燃气行业特点的风险识别</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>算法透明度与可解释性：安全生产相关AI决策的可解释机制</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>应急响应与人机协作：AI异常情况下的人机备份机制</span>
                    </li>
                    <li className="flex items-start">
                      <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                      <span>国家燃气行业数字化政策解读：符合监管要求的合规框架</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 合作流程 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-green-900' : 'bg-green-600'} text-white`}>
                <h3 className="text-xl font-semibold">我们的合作流程</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-1/5 text-center mb-6">
                    <div className={`w-16 h-16 rounded-full mx-auto ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center mb-3`}>
                      <FileText size={28} className={darkMode ? 'text-green-200' : 'text-green-600'} />
                    </div>
                    <h5 className="font-medium mb-1">需求调研</h5>
                    <p className="text-xs">深入理解业务需求与痛点</p>
                  </div>
                  <div className="w-full md:w-1/5 text-center mb-6">
                    <div className={`w-16 h-16 rounded-full mx-auto ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center mb-3`}>
                      <Compass size={28} className={darkMode ? 'text-green-200' : 'text-green-600'} />
                    </div>
                    <h5 className="font-medium mb-1">方案设计</h5>
                    <p className="text-xs">定制AI规划咨询方案</p>
                  </div>
                  <div className="w-full md:w-1/5 text-center mb-6">
                    <div className={`w-16 h-16 rounded-full mx-auto ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center mb-3`}>
                      <Activity size={28} className={darkMode ? 'text-green-200' : 'text-green-600'} />
                    </div>
                    <h5 className="font-medium mb-1">实施咨询</h5>
                    <p className="text-xs">专家团队驻场服务</p>
                  </div>
                  <div className="w-full md:w-1/5 text-center mb-6">
                    <div className={`w-16 h-16 rounded-full mx-auto ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center mb-3`}>
                      <Zap size={28} className={darkMode ? 'text-green-200' : 'text-green-600'} />
                    </div>
                    <h5 className="font-medium mb-1">价值交付</h5>
                    <p className="text-xs">完整解决方案与实施建议</p>
                  </div>
                  <div className="w-full md:w-1/5 text-center mb-6">
                    <div className={`w-16 h-16 rounded-full mx-auto ${darkMode ? 'bg-green-900' : 'bg-green-100'} flex items-center justify-center mb-3`}>
                      <Users size={28} className={darkMode ? 'text-green-200' : 'text-green-600'} />
                    </div>
                    <h5 className="font-medium mb-1">长期支持</h5>
                    <p className="text-xs">持续优化与技术支持</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 联系我们 */}
        <section id="contact" className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">联系我们</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-6">
              <p>对数字化转型或AI规划咨询感兴趣？欢迎联系我们，探讨您的业务需求。</p>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} shadow-md`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <Phone size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} />
                  <div>
                    <h3 className="font-medium mb-1">电话</h3>
                    <p>13602801537</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} />
                  <div>
                    <h3 className="font-medium mb-1">邮箱</h3>
                    <p>orienthong@foxmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} />
                  <div>
                    <h3 className="font-medium mb-1">地址</h3>
                    <p>广州市海珠区海洲路 32 号东升云鼎 B 塔 603</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="italic">赋能数字未来，成就卓越企业</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <footer className={`py-6 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 洪浩东. 版权所有.</p>
        </div>
      </footer>
    </div>
  );
};

export default SouthernPropertyPlatform;
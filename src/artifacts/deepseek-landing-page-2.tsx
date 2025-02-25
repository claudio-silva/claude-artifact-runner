import React, { useState, useEffect } from 'react';

// 添加自定义样式
const customStyles = `
@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, 20px) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

html, body {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
`;

const DeepseekLandingPage = () => {
  const [activeTab, setActiveTab] = useState('finance');
  const [activeAccordion, setActiveAccordion] = useState<string | null>('advantage1');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Animation states
  const [heroVisible, setHeroVisible] = useState(false);
  const [advantagesVisible, setAdvantagesVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [solutionsVisible, setSolutionsVisible] = useState(false);
  const [methodVisible, setMethodVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    // Set hero visible immediately for initial animation
    setHeroVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger animations based on scroll position
      if (window.scrollY > 100) setAdvantagesVisible(true);
      if (window.scrollY > 600) setServicesVisible(true);
      if (window.scrollY > 1200) setSolutionsVisible(true);
      if (window.scrollY > 1800) setMethodVisible(true);
      if (window.scrollY > 2400) setCtaVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* 添加自定义样式 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        html, body {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }
      `}} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-md transition-all duration-300" 
           style={{ transform: scrollY > 100 ? 'translateY(0)' : 'translateY(0)', padding: scrollY > 100 ? '0.5rem 0' : '1rem 0' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-3xl mr-2 text-blue-600">🔷</div>
              <div>
                <h1 className="font-bold text-xl text-blue-600">中通南方</h1>
                <p className="text-xs text-gray-500">DeepSeek AI 专业服务提供商</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['优势', '服务', '解决方案', '方法论', '案例'].map((item, i) => (
                <a key={i} href={`#${i}`} className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group">
                  {item}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transform hover:scale-105 transition-all shadow-md hover:shadow-lg">
                联系我们
              </button>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition"
              >
                <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}>
            <div className="space-y-4">
              {['优势', '服务', '解决方案', '方法论', '案例'].map((item, i) => (
                <a key={i} href={`#${i}`} className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-all shadow">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0">
          {/* Animated background effect */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3,
                  animation: `float ${Math.random() * 20 + 20}s infinite linear`,
                  animationDelay: `${Math.random() * 20}s`,
                  transform: `scale(${Math.random() * 0.8 + 0.2})`,
                }}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl transition-all duration-1000 transform" 
               style={{ 
                 opacity: heroVisible ? 1 : 0, 
                 transform: heroVisible ? 'translateY(0)' : 'translateY(50px)' 
               }}>
            <h5 className="text-blue-300 font-semibold mb-2 animate-pulse">中通南方咨询设计院</h5>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative">
              智驭未来 · 通达千里
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-400 rounded-full"></span>
            </h1>
            <h2 className="text-3xl font-semibold mb-8">Deepseek人工智能整体解决方案</h2>
            <p className="text-xl mb-8 text-blue-100">以专业咨询为引领，助力企业快速、稳健地实现AI转型，构建具有持续竞争力的智能化业务生态</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition transform hover:scale-105 hover:shadow-xl">
                预约免费评估
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition transform hover:scale-105">
                了解详情
              </button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="hidden md:block absolute right-10 top-20 w-64 h-64 transform -rotate-12 transition-all duration-1000"
               style={{ opacity: heroVisible ? 0.8 : 0, transform: heroVisible ? 'translateX(0) rotate(-12deg)' : 'translateX(100px) rotate(-12deg)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl shadow-2xl opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🤖</div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-yellow-400 rounded-xl transform rotate-12 opacity-90 shadow-lg"></div>
          </div>
        </div>
        
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>

      </section>

      {/* Core Advantages */}
      <section id="0" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 transition-all duration-1000 transform"
               style={{ 
                 opacity: advantagesVisible ? 1 : 0, 
                 transform: advantagesVisible ? 'translateY(0)' : 'translateY(50px)' 
               }}>
            <h5 className="text-blue-600 font-semibold mb-2">为什么选择我们</h5>
            <h2 className="text-4xl font-bold mb-4">四大核心竞争力</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">我们的差异化优势，让您的AI转型更加高效、安全、可持续</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'advantage1',
                icon: '🎯',
                title: '行业深耕 × 场景赋能',
                desc: '更懂行业痛点的AI落地专家',
                color: 'from-blue-400 to-blue-600',
                delay: 0
              },
              {
                id: 'advantage2',
                icon: '🔄',
                title: '全链条服务 × 闭环保障',
                desc: '更可靠的AI整体解决方案',
                color: 'from-indigo-400 to-indigo-600',
                delay: 150
              },
              {
                id: 'advantage3',
                icon: '🔌',
                title: '技术融合 × 生态协同',
                desc: '更开放的AI应用生态',
                color: 'from-purple-400 to-purple-600',
                delay: 300
              },
              {
                id: 'advantage4',
                icon: '🔒',
                title: '安全合规 × 敏捷迭代',
                desc: '更安心的AI持续发展路径',
                color: 'from-green-400 to-green-600',
                delay: 450
              }
            ].map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 cursor-pointer transform hover:-translate-y-2"
                onClick={() => toggleAccordion(item.id)}
                style={{ 
                  opacity: advantagesVisible ? 1 : 0, 
                  transform: advantagesVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${item.delay}ms` 
                }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-3xl mb-4 shadow-lg transform transition-transform duration-500 hover:scale-110`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                
                <div className={`overflow-hidden transition-all duration-500 ${activeAccordion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-gray-200">
                    <ul className="space-y-2 text-gray-700">
                      {item.id === 'advantage1' && (
                        <>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>多行业专家团队，10+行业垂直服务</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>300+企业级AI应用场景库</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>独创"1+4+N"实施方法论</span>
                          </li>
                        </>
                      )}
                      {item.id === 'advantage2' && (
                        <>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span>"五位一体"全链路服务体系</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span>五段式交付保障体系</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span>AI投资回报精准量化</span>
                          </li>
                        </>
                      )}
                      {item.id === 'advantage3' && (
                        <>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>支持多AI框架融合应用</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>全链路数据治理服务</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>30+软硬件厂商生态合作</span>
                          </li>
                        </>
                      )}
                      {item.id === 'advantage4' && (
                        <>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>"三防"安全框架全面保障</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>AI伦理与合规专业咨询</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>90天快速见效的敏捷实施</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Matrix */}
      <section id="1" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-10 top-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
        <div className="absolute right-20 bottom-20 w-64 h-64 bg-indigo-200 rounded-full opacity-40"></div>
        <div className="absolute left-1/2 top-40 w-20 h-20 bg-green-200 rounded-full opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 transition-all duration-1000 transform"
               style={{ 
                 opacity: servicesVisible ? 1 : 0, 
                 transform: servicesVisible ? 'translateY(0)' : 'translateY(50px)' 
               }}>
            <h5 className="text-blue-600 font-semibold mb-2">全方位服务体系</h5>
            <h2 className="text-4xl font-bold mb-4">三层次能力架构</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">从底层基础到价值提升，全方位构建企业AI能力</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '基础架构层',
                subtitle: '"筑基工程"',
                icon: '🏗️',
                color: 'bg-blue-500',
                borderColor: 'border-blue-500',
                shadowColor: 'shadow-blue-200',
                items: [
                  '多模式部署设计',
                  '智能基础设施规划',
                  '安全合规保障系统'
                ],
                delay: 0
              },
              {
                title: '融合应用层',
                subtitle: '"赋能工程"',
                icon: '⚙️',
                color: 'bg-indigo-500',
                borderColor: 'border-indigo-500',
                shadowColor: 'shadow-indigo-200',
                items: [
                  '大模型能力中台',
                  '行业专属解决方案',
                  '行业通用组件库'
                ],
                delay: 200
              },
              {
                title: '价值提升层',
                subtitle: '"增值工程"',
                icon: '📈',
                color: 'bg-purple-500',
                borderColor: 'border-purple-500',
                shadowColor: 'shadow-purple-200',
                items: [
                  'AI能力培养计划',
                  '持续优化服务',
                  '价值评估与创新'
                ],
                delay: 400
              }
            ].map((layer, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 relative overflow-hidden ${layer.shadowColor}`}
                style={{ 
                  opacity: servicesVisible ? 1 : 0, 
                  transform: servicesVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${layer.delay}ms` 
                }}
              >
                <div className={`absolute top-0 left-0 w-full h-2 ${layer.color}`}></div>
                <div className={`text-4xl mb-4 transform transition-transform duration-500 hover:scale-110 hover:rotate-12`}>{layer.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{layer.title}</h3>
                <h4 className={`text-lg ${layer.borderColor.replace('border', 'text')} mb-6`}>{layer.subtitle}</h4>
                <ul className="space-y-4">
                  {layer.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${layer.color} mr-3 flex-shrink-0`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Decorative corner element */}
                <div className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full ${layer.color} opacity-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="2" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 transition-all duration-1000 transform"
               style={{ 
                 opacity: solutionsVisible ? 1 : 0, 
                 transform: solutionsVisible ? 'translateY(0)' : 'translateY(50px)' 
               }}>
            <h5 className="text-blue-600 font-semibold mb-2">专业解决方案</h5>
            <h2 className="text-4xl font-bold mb-4">行业专属解决方案</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">深入理解行业痛点，提供精准AI转型路径</p>
          </div>
          
          <div className="mb-8 transition-all duration-1000 transform"
               style={{ 
                 opacity: solutionsVisible ? 1 : 0, 
                 transform: solutionsVisible ? 'translateY(0)' : 'translateY(50px)',
                 transitionDelay: '200ms'
               }}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'finance', label: '金融行业', icon: '💼' },
                { id: 'manufacturing', label: '制造行业', icon: '🏭' },
                { id: 'energy', label: '能源行业', icon: '⚡' },
                { id: 'government', label: '政务服务', icon: '🏛️' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-md scale-105' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 overflow-hidden">
              <div className="transition-all duration-500 transform" style={{ 
                opacity: activeTab ? 1 : 0,
                transform: activeTab ? 'translateX(0)' : 'translateX(20px)'
              }}>
                {activeTab === 'finance' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-600">金融行业智能升级</h3>
                      <p className="text-gray-700 mb-6">
                        针对金融机构面临的风控、投顾、合规等核心痛点，提供端到端智能化解决方案，
                        助力金融机构实现数字化转型，提升客户体验与风险管控能力。
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">1</div>
                          <div>
                            <h4 className="font-bold text-lg">智能风控</h4>
                            <p className="text-gray-600">基于多维数据的实时风险评估与预警</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">2</div>
                          <div>
                            <h4 className="font-bold text-lg">智能投顾</h4>
                            <p className="text-gray-600">个性化资产配置与投资建议引擎</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">3</div>
                          <div>
                            <h4 className="font-bold text-lg">合规审查</h4>
                            <p className="text-gray-600">金融文件自动化审核与风险识别</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center bg-blue-50 rounded-xl p-6 overflow-hidden relative">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-70">
                        <div className="absolute w-full h-full bg-grid-pattern opacity-10"></div>
                      </div>
                      
                      <div className="max-w-md relative z-10">
                        <div className="text-center mb-6">
                          <div className="inline-block p-4 bg-white rounded-full text-blue-600 text-4xl mb-4 shadow-lg transform transition hover:rotate-12 hover:scale-110">💼</div>
                          <h3 className="text-xl font-bold">某城商银行智能风控体系</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-blue-600">挑战</h4>
                            <p>传统风控模型更新周期长，难以应对新型欺诈手段</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-blue-600">解决方案</h4>
                            <p>基于Deepseek构建实时风险评分引擎</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-green-600">成效</h4>
                            <p>欺诈识别率提升43%，误判率降低21%，审核效率提升5倍</p>
                          </div>
                        </div>
                        
                        {/* Floating decorations */}
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
                        <div className="absolute -top-10 -left-10 w-16 h-16 bg-indigo-200 rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'manufacturing' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-indigo-600">制造行业智能升级</h3>
                      <p className="text-gray-700 mb-6">
                        针对制造企业在质量控制、设备维护和生产效率等方面的挑战，
                        提供AI驱动的智能制造解决方案，助力企业降本增效、提质增产。
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">1</div>
                          <div>
                            <h4 className="font-bold text-lg">智能质检</h4>
                            <p className="text-gray-600">视觉缺陷检测与质量预测模型</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">2</div>
                          <div>
                            <h4 className="font-bold text-lg">预测性维护</h4>
                            <p className="text-gray-600">设备故障预测与维护优化</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">3</div>
                          <div>
                            <h4 className="font-bold text-lg">工艺参数优化</h4>
                            <p className="text-gray-600">生产参数自动调优系统</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center bg-indigo-50 rounded-xl p-6 overflow-hidden relative">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 opacity-70">
                        <div className="absolute w-full h-full bg-grid-pattern opacity-10"></div>
                      </div>
                      
                      <div className="max-w-md relative z-10">
                        <div className="text-center mb-6">
                          <div className="inline-block p-4 bg-white rounded-full text-indigo-600 text-4xl mb-4 shadow-lg transform transition hover:rotate-12 hover:scale-110">🏭</div>
                          <h3 className="text-xl font-bold">某大型装备制造企业质检升级</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-indigo-600">挑战</h4>
                            <p>人工质检成本高、效率低、一致性差</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-indigo-600">解决方案</h4>
                            <p>部署AI视觉质检系统与预测性维护平台</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-green-600">成效</h4>
                            <p>质检效率提升300%，缺陷检出率提高25%，设备故障预警准确率达92%</p>
                          </div>
                        </div>
                        
                        {/* Floating decorations */}
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-indigo-200 rounded-full opacity-50"></div>
                        <div className="absolute -top-10 -left-10 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'energy' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-green-600">能源行业智能升级</h3>
                      <p className="text-gray-700 mb-6">
                        面向电力、石油天然气等能源企业，提供设备健康管理、负荷预测和能效优化等智能解决方案，
                        助力能源企业提升运营效率，实现可持续发展。
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">1</div>
                          <div>
                            <h4 className="font-bold text-lg">设备健康管理</h4>
                            <p className="text-gray-600">输电线路、变电站设备状态监测预警</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">2</div>
                          <div>
                            <h4 className="font-bold text-lg">负荷预测</h4>
                            <p className="text-gray-600">基于多源数据的精准电力负荷预测</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">3</div>
                          <div>
                            <h4 className="font-bold text-lg">能效优化</h4>
                            <p className="text-gray-600">综合能源系统智能调度与优化</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center bg-green-50 rounded-xl p-6 overflow-hidden relative">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 opacity-70">
                        <div className="absolute w-full h-full bg-grid-pattern opacity-10"></div>
                      </div>
                      
                      <div className="max-w-md relative z-10">
                        <div className="text-center mb-6">
                          <div className="inline-block p-4 bg-white rounded-full text-green-600 text-4xl mb-4 shadow-lg transform transition hover:rotate-12 hover:scale-110">⚡</div>
                          <h3 className="text-xl font-bold">某电网公司输电线路智能巡检</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-green-600">挑战</h4>
                            <p>传统人工巡检覆盖率低、周期长、危险性高</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-green-600">解决方案</h4>
                            <p>构建基于多源数据的智能巡检与故障诊断系统</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-green-600">成效</h4>
                            <p>巡检效率提升10倍，故障预警时间提前72小时，运维成本降低32%</p>
                          </div>
                        </div>
                        
                        {/* Floating decorations */}
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
                        <div className="absolute -top-10 -left-10 w-16 h-16 bg-teal-200 rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'government' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-600">政务服务智能升级</h3>
                      <p className="text-gray-700 mb-6">
                        针对政府部门在行政审批、政策解读、社情民意等方面的需求，
                        提供AI赋能的智慧政务解决方案，助力政府提升服务质量和管理效能。
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">1</div>
                          <div>
                            <h4 className="font-bold text-lg">智能审批</h4>
                            <p className="text-gray-600">行政审批全流程智能化改造</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">2</div>
                          <div>
                            <h4 className="font-bold text-lg">政策解读</h4>
                            <p className="text-gray-600">政策文件智能解析与精准推送</p>
                          </div>
                        </li>
                        <li className="flex items-start transform transition hover:translate-x-2">
                          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-md">3</div>
                          <div>
                            <h4 className="font-bold text-lg">社情民意</h4>
                            <p className="text-gray-600">舆情分析与社会治理决策支持</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center bg-purple-50 rounded-xl p-6 overflow-hidden relative">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-70">
                        <div className="absolute w-full h-full bg-grid-pattern opacity-10"></div>
                      </div>
                      
                      <div className="max-w-md relative z-10">
                        <div className="text-center mb-6">
                          <div className="inline-block p-4 bg-white rounded-full text-purple-600 text-4xl mb-4 shadow-lg transform transition hover:rotate-12 hover:scale-110">🏛️</div>
                          <h3 className="text-xl font-bold">某市政务服务大厅智能化改造</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-purple-600">挑战</h4>
                            <p>政务服务效率低，市民满意度不高</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-purple-600">解决方案</h4>
                            <p>构建"AI+政务"一体化服务平台</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                            <h4 className="font-semibold text-green-600">成效</h4>
                            <p>办事时间平均缩短65%，一次办结率提升34%，市民满意度提升42%</p>
                          </div>
                        </div>
                        
                        {/* Floating decorations */}
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-200 rounded-full opacity-50"></div>
                        <div className="absolute -top-10 -left-10 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Process */}
      <section id="3" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.05 + 0.05,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${Math.random() * 30 + 30}s infinite linear`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 transition-all duration-1000 transform"
               style={{ 
                 opacity: methodVisible ? 1 : 0, 
                 transform: methodVisible ? 'translateY(0)' : 'translateY(50px)' 
               }}>
            <h5 className="text-blue-400 font-semibold mb-2">科学实施路径</h5>
            <h2 className="text-4xl font-bold mb-4">"3-5-7"实施方法论</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">科学化、标准化的AI实施方法，确保项目成功落地</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '3',
                title: '阶段交付流程',
                items: [
                  '评估与规划阶段（2-4周）',
                  '实施与集成阶段（6-12周）',
                  '运营与优化阶段（持续服务）'
                ],
                color: 'border-blue-500',
                gradient: 'from-blue-500 to-indigo-600',
                delay: 0
              },
              {
                number: '5',
                title: '关键成功因素',
                items: [
                  '高层承诺',
                  '数据准备',
                  '场景聚焦',
                  '人才培养',
                  '敏捷迭代'
                ],
                color: 'border-indigo-500',
                gradient: 'from-indigo-500 to-purple-600',
                delay: 200
              },
              {
                number: '7',
                title: '步实施路径',
                items: [
                  '业务痛点识别与价值评估',
                  '数据资产盘点与准备',
                  '模型选择与优化',
                  '应用开发与集成',
                  '试点验证与优化',
                  '全面推广与规模化',
                  '持续改进与创新'
                ],
                color: 'border-purple-500',
                gradient: 'from-purple-500 to-pink-600',
                delay: 400
              }
            ].map((phase, idx) => (
              <div 
                key={idx} 
                className={`bg-gray-800 rounded-xl p-8 border-t-4 ${phase.color} transition-all duration-1000 transform hover:-translate-y-2`}
                style={{ 
                  opacity: methodVisible ? 1 : 0, 
                  transform: methodVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${phase.delay}ms`,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.gradient} text-white flex items-center justify-center text-2xl font-bold mr-4 shadow-lg transform transition hover:scale-110`}>
                    {phase.number}
                  </div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm mr-3 flex-shrink-0 group-hover:bg-gray-600 transition">
                        {i + 1}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Bottom decoration */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.gradient} rounded-b-xl opacity-50`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-800 text-white relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute right-10 bottom-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute left-20 top-20 w-40 h-40 bg-white opacity-5 rounded-full"></div>
        <div className="absolute left-40 bottom-40 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center transition-all duration-1000 transform"
               style={{ 
                 opacity: ctaVisible ? 1 : 0, 
                 transform: ctaVisible ? 'translateY(0)' : 'translateY(50px)' 
               }}>
            <h2 className="text-4xl font-bold mb-6">立即开启您的AI转型之旅</h2>
            <p className="text-xl mb-12">
              中通南方Deepseek专业服务团队，助力您的企业驶入AI新时代的快车道！
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🔍', title: '免费AI就绪度评估', desc: '专业评估企业AI转型准备情况，提供详细报告与改进建议', delay: 200 },
                { icon: '🧩', title: '场景工作坊', desc: '识别高价值AI应用场景，评估实施可行性与投资回报', delay: 400 },
                { icon: '🚀', title: '概念验证项目', desc: '90天内交付可见成果，验证AI价值并积累经验', delay: 600 }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl"
                  style={{ 
                    opacity: ctaVisible ? 1 : 0, 
                    transform: ctaVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${item.delay}ms`,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="text-4xl mb-4 transform transition hover:scale-110">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 transform transition-all duration-500 hover:scale-105"
                 style={{ 
                   opacity: ctaVisible ? 1 : 0,
                   transform: ctaVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                   transitionDelay: '800ms'
                 }}>
              <button className="bg-white text-blue-700 font-semibold px-10 py-5 rounded-lg shadow-xl hover:bg-blue-50 transition text-lg relative overflow-hidden group">
                <span className="relative z-10">联系我们，预约咨询</span>
                <span className="absolute top-0 left-0 w-0 h-full bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave bottom */}
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#111827" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-10 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3 text-blue-500">🔷</div>
                <div>
                  <h2 className="text-2xl font-bold">中通南方</h2>
                  <p className="text-gray-400">Deepseek人工智能专业服务团队</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                中通南方咨询设计院是专业的AI解决方案提供商，致力于帮助企业实现智能化转型，提升核心竞争力。
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-6">
                {['📱', '✉️', '🌐'].map((icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer transform hover:scale-110 shadow-lg">
                    <span className="text-xl">{icon}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 mb-2">联系电话：400-XXX-XXXX</p>
              <p className="text-gray-400 mb-4">地址：中国·您的城市·您的地址</p>
              <p className="text-gray-500">© 2025 中通南方咨询设计院. 版权所有</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Fixed consultation button */}
      <div className="fixed right-6 bottom-6 z-50 transition-all duration-300 transform hover:scale-110">
        <button className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-500 transition">
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </div>
  );
};

export default DeepseekLandingPage;

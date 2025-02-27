import React, { useState, useEffect } from 'react';

const DeepseekSolutionPage = () => {
  const [activeTab, setActiveTab] = useState('government');
  const [activeAccordion, setActiveAccordion] = useState('data_security');
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [comparisonView, setComparisonView] = useState('table');
  const [showContactModal, setShowContactModal] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes modalFade {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .modal-animation {
        animation: modalFade 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  
  return (
    <div className="font-sans text-gray-800">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.jpg" alt="中通信息-南方设计" className="h-8 mr-2" />
              <span className={`font-medium transition-colors duration-300 ${scrollY > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>中通信息-南方设计</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { name: '解决方案', href: '#solution' },
                { name: '模型部署', href: '#deployment' },
                { name: '应用场景', href: '#applications' },
                { name: '成功案例', href: '#case-study' },
                { name: '投资回报', href: '#roi' }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 ${scrollY > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                >
                  {item.name}
                </a>
              ))}
              <button className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                scrollY > 50 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-700 hover:bg-blue-50'
              }`}
              onClick={() => setShowContactModal(true)}
              >
                联系我们
              </button>
            </div>
            <button className="md:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-white opacity-10 transform -skew-x-12"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-12">
              <span className="inline-block py-1 px-3 bg-blue-800 bg-opacity-50 rounded-full text-blue-200 text-sm font-medium mb-4">引领企业智能化转型</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">DeepSeek大模型<br />
                <span className="text-blue-300">本地化部署解决方案</span>
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                基于多家企业的成功实践，中通南方打造全方位DeepSeek大模型落地服务体系，开启企业智能服务新时代。
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
                  onClick={() => setShowContactModal(true)}
                >
                  预约免费评估
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
                  了解详情
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-blue-200">DeepSeek-R1</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-blue-300 bg-opacity-30 rounded-full w-full"></div>
                  <div className="h-2 bg-blue-300 bg-opacity-30 rounded-full w-5/6"></div>
                  <div className="h-2 bg-blue-300 bg-opacity-30 rounded-full w-4/6"></div>
                </div>
                <div className="mt-8 p-3 bg-blue-700 bg-opacity-30 rounded-lg text-blue-100 text-sm font-mono">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">➤</span>
                    <span>DeepSeek-R1 32B 模型本地化部署中...</span>
                  </div>
                  <div className="mt-2 w-full bg-blue-900 bg-opacity-50 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-full rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs">
                    <span>75% 完成</span>
                    <span>预计剩余时间: 12分钟</span>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  AI
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg transform -rotate-12 opacity-70 blur-sm"></div>
            </div>
          </div>
        </div>
        
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '55%', label: '业务流程效率提升' },
              { value: '30%', label: '运营成本平均降低' },
              { value: '40%', label: '服务质量提升' },
              { value: '60%', label: '新业务孵化周期缩短' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Model Introduction */}
      <section className="py-16 bg-gray-50" id="model">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">大模型技术</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">DeepSeek-R1 模型介绍</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              DeepSeek-R1 是由中国AI初创公司DeepSeek开发的开源AI模型，专注于推理、数学问题解决和多语言支持。通过混合专家（MoE）架构和强化学习（RL）来提高其在复杂决策和优化挑战中的表现。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="bg-blue-700 text-white p-6">
                <h3 className="text-xl font-bold mb-2">DeepSeek-R1 技术规格</h3>
                <p className="text-blue-100">通过混合专家架构实现高效推理与决策</p>
              </div>
              <div className="bg-white p-6">
                <div className="border-b border-gray-200 py-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">总参数数量</span>
                    <span>671亿</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">激活参数数量</span>
                    <span>每次前向传递37亿</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">架构类型</span>
                    <span>混合专家（MoE）</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">训练方法</span>
                    <span>强化学习（RL）+ 监督微调（SFT）</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">上下文长度</span>
                    <span>最长128K令牌</span>
                  </div>
                </div>
                <div className="py-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">支持语言</span>
                    <span>多语言，尤其是中文</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 text-blue-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">混合专家架构</h3>
                    <p className="text-gray-600">利用多个小模型（专家）来优化性能，仅在需要时激活，减少计算成本。</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-lg p-3 text-indigo-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">强化学习和监督微调</h3>
                    <p className="text-gray-600">采用多阶段训练流程，先进行监督微调，然后使用强化学习来增强推理能力。</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-3 text-green-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">高效性和性能</h3>
                    <p className="text-gray-600">提供快速响应时间和优化的计算功能，成本效益高于同类产品。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Local Deployment */}
      <section className="py-16 bg-white" id="deployment">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">为什么选择</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">本地化部署的六大优势</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              尽管公开网络上已有免费的DeepSeek API服务，但越来越多的企业仍坚持选择本地化部署，源于以下关键优势：
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'data_security',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: '数据安全与隐私保护',
                desc: '确保企业数据不离开内部网络环境，避免敏感信息外泄',
                details: [
                  '满足金融、政务、医疗等行业的严格数据合规要求',
                  '完全控制数据处理和存储流程，消除第三方访问风险',
                  '构建符合等保要求的安全审计机制'
                ]
              },
              {
                id: 'business_integration',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
                title: '业务应用深度集成',
                desc: '与企业现有OA、ERP、CRM等系统无缝对接',
                details: [
                  '支持定制化API接口，适配特殊业务需求',
                  '实现低延迟、高频调用，满足实时业务场景需求',
                  '全面融入企业现有IT架构，最大化投资回报'
                ]
              },
              {
                id: 'knowledge_protection',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: '专有知识与行业经验封装',
                desc: '利用企业独有数据和知识进行模型微调',
                details: [
                  '保护核心业务知识和专业经验不外流',
                  '构建企业专属AI能力，形成差异化竞争优势',
                  '创建独特的知识库和行业垂直应用'
                ]
              },
              {
                id: 'service_stability',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: '服务稳定性与可控性',
                desc: '不受外部网络波动和第三方服务限制影响',
                details: [
                  '可根据业务需求灵活调整服务级别',
                  '资源分配与扩展完全自主可控',
                  '确保关键业务应用的持续稳定运行'
                ]
              },
              {
                id: 'cost_effectiveness',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '长期成本效益考量',
                desc: '免除按量计费的不确定性，实现IT支出精确预算',
                details: [
                  '高频调用场景下比云服务更经济',
                  '自主掌握升级节奏，避免被动支付升级费用',
                  '通过资源池化实现多应用场景的算力共享，提高利用率'
                ]
              },
              {
                id: 'resource_optimization',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: '资源优化策略',
                desc: '即使在硬件资源有限的情况下，也能实现显著业务价值',
                details: [
                  '较小模型在特定垂直领域经过微调后，性能可媲美通用大模型',
                  '领域知识注入与场景优化可弥补参数量的不足',
                  '采用渐进式投资策略，先从小模型起步，随业务发展逐步升级'
                ]
              }
            ].map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solution Framework */}
      <section className="py-16 bg-gray-50" id="solution">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">整体框架</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">解决方案架构</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我们的解决方案采用"1+4+N"架构，从底层基础设施到场景化应用，构建完整的AI能力体系。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="bg-blue-700 text-white p-6">
                <h3 className="text-xl font-bold">1+4+N 架构</h3>
                <p className="text-blue-100">从基础能力到场景应用的全栈解决方案</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-blue-700 font-bold text-lg mb-2">1个基础平台</div>
                    <p className="text-gray-700">DeepSeek 大模型基础能力平台</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <div className="text-indigo-700 font-bold text-lg mb-2">4大核心能力</div>
                    <p className="text-gray-700">知识增强、数据分析、流程优化、决策支持</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-purple-700 font-bold text-lg mb-2">N种场景应用</div>
                    <p className="text-gray-700">根据行业特性定制化开发的应用场景</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-indigo-700 text-white p-6">
                <h3 className="text-xl font-bold">模型选型与资源优化策略</h3>
                <p className="text-indigo-100">针对不同企业规模和需求，我们提供多层次的模型部署方案</p>
              </div>
              <div className="p-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">企业类型</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">推荐模型</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">硬件需求</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">适用场景</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">大型企业/机构</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DeepSeek R1-671B</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">A800/H800 GPU集群</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">全场景AI应用，复杂推理与决策</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">中型企业</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DeepSeek R1-70B</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4-8张 摩尔线程MTTS4000/<br></br>昇腾910</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">多场景业务应用，中等复杂度推理</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">小型企业</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DeepSeek量化版/Lite</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-2张消费级GPU</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">特定场景优化，基础AI能力</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">特殊场景</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">定制微调模型</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">根据实际需求配置</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">垂直领域深度应用</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Scenarios */}
      <section className="py-16 bg-white" id="applications">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">场景化应用</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">六大应用框架</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              基于多家企业的成功实践，我们打造了六大场景化应用框架，可根据企业需求进行快速配置与定制：
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: '智能知识库平台',
                features: [
                  '企业文档自动化收集与结构化',
                  '多源信息融合与知识图谱构建',
                  '自然语言交互式检索',
                  '知识自动更新与版本管理'
                ],
                color: 'bg-blue-600'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: '解决方案智能匹配系统',
                features: [
                  '行业术语与专业概念识别',
                  '需求-方案精准映射',
                  '自动生成定制化方案初稿',
                  '持续学习与优化的反馈机制'
                ],
                color: 'bg-indigo-600'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: '智能决策支持平台',
                features: [
                  '多维数据实时采集与分析',
                  '趋势预测与风险评估',
                  '可视化决策建议',
                  '"假设-分析"情景模拟'
                ],
                color: 'bg-purple-600'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                title: '智能客服与运维助手',
                features: [
                  '秒级响应的多轮对话',
                  '技术问题自动诊断',
                  '全流程工单管理与追踪',
                  '知识沉淀与经验复用'
                ],
                color: 'bg-green-600'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: '智能公文与文档处理',
                features: [
                  '公文模板库与规范引擎',
                  '智能辅助撰写与审核',
                  '格式自动化标准化',
                  '多轮修改与版本管理'
                ],
                color: 'bg-yellow-600'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: '开发辅助与代码优化',
                features: [
                  '代码智能补全与推荐',
                  '错误检测与修复建议',
                  '性能优化指导',
                  '文档自动生成'
                ],
                color: 'bg-red-600'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
                <div className={`${item.color} text-white p-6 flex items-center`}>
                  <div className="mr-4 text-white">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">行业场景</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">行业场景解决方案</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我们根据不同行业特点，提供针对性的DeepSeek应用解决方案，满足特定业务需求。
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { id: 'government', label: '政务服务' },
                { id: 'transportation', label: '交通与物流' },
                { id: 'park', label: '园区管理' },
                { id: 'datacenter', label: '数据中心' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              {activeTab === 'government' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">政务服务领域</h3>
                    <p className="text-gray-600 mb-6">
                      针对政务服务、政民互动、行政审批、数据分析等核心场景，我们提供全面的智慧政务解决方案。
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2">解决方案:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>部署 DeepSeek 大模型，构建政务知识库与服务体系</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>实现政策文件智能解读与精准推送</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>打造 24 小时智能政务服务助手</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>优化行政审批流程，提升效率与体验</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">预期效果:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">70%</div>
                          <div className="text-gray-700">政务服务响应时间缩短</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">50%</div>
                          <div className="text-gray-700">行政审批效率提升</div>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-indigo-600 mb-1">40%</div>
                          <div className="text-gray-700">政务服务满意度提升</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">显著</div>
                          <div className="text-gray-700">跨部门数据协同能力增强</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-10 rounded-2xl"></div>
                    <div className="relative bg-white bg-opacity-90 p-6 rounded-xl shadow-xl max-w-md border border-gray-200">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">智慧政务应用场景</h4>
                          <p className="text-gray-600 text-sm">以政策解读为例</p>
                        </div>
                      </div>
                      
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="text-gray-600 mb-2 text-sm">市民问题:</div>
                        <div className="p-3 bg-gray-100 rounded">
                          请问新的居住证政策对异地就医有什么影响？办理条件有变化吗？
                        </div>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-blue-600 mb-2 text-sm">DeepSeek智能助手回复:</div>
                        <div className="p-3 bg-white rounded border border-blue-100">
                          <p className="mb-2">根据最新《居住证管理办法》第12条规定，持有效居住证的居民在异地就医时享受以下便利:</p>
                          <ol className="list-decimal pl-5 space-y-1 text-sm">
                            <li>可直接在居住地定点医院就诊，无需返回户籍地</li>
                            <li>符合条件的可享受居住地医保报销政策</li>
                            <li>办理条件简化为"连续居住满6个月"，取消了原先的社保缴纳要求</li>
                          </ol>
                          <p className="mt-2 text-sm">您需要准备的材料：身份证、租房合同或房产证明、6个月以上居住证明。详情可查阅文号:政令[2024]37号文件。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'transportation' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-indigo-600">交通与物流领域</h3>
                    <p className="text-gray-600 mb-6">
                      针对口岸通关、智慧交通、物流规划、运营监控等核心场景，我们提供端到端的智能化解决方案。
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2">解决方案:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>基于 DeepSeek 构建口岸通关智能辅助系统</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>打造交通流量预测与规划平台</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>实现物流路径智能优化与成本控制</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>建立交通运营综合监控与预警体系</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">预期效果:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-indigo-600 mb-1">60%</div>
                          <div className="text-gray-700">通关效率提升</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">30%</div>
                          <div className="text-gray-700">交通拥堵率降低</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">15%</div>
                          <div className="text-gray-700">物流成本降低</div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-red-600 mb-1">65%</div>
                          <div className="text-gray-700">异常处理时间缩短</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-10 rounded-2xl"></div>
                    <div className="relative bg-white bg-opacity-90 p-6 rounded-xl shadow-xl max-w-md border border-gray-200">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">口岸通关智能预测</h4>
                          <p className="text-gray-600 text-sm">实时分析与预警</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-indigo-50 rounded-lg mb-6">
                        <div className="text-center mb-3">
                          <div className="text-lg font-bold text-indigo-700">横琴口岸通关时间预测</div>
                          <div className="text-sm text-gray-600">今日: 2025年02月25日 周二</div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">早高峰 (7:00-9:00)</span>
                            <span className="text-red-600 font-bold">约35-40分钟</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">日常时段 (9:00-17:00)</span>
                            <span className="text-yellow-600 font-bold">约15-20分钟</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">晚高峰 (17:00-19:00)</span>
                            <span className="text-orange-600 font-bold">约25-30分钟</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">夜间时段 (19:00-22:00)</span>
                            <span className="text-green-600 font-bold">约10分钟</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold mb-1">智能建议:</div>
                        <p>根据历史数据分析和天气预报，今日建议避开8:00-8:30的峰值时段。预计在10:30-11:30和14:00-15:30期间通关效率最高，等待时间可控制在10分钟以内。</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'park' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-green-600">园区管理领域</h3>
                    <p className="text-gray-600 mb-6">
                      针对智慧园区、资源调配、安防监控、服务体系等核心场景，我们提供一体化的智能园区解决方案。
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2">解决方案:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>构建园区全域数据感知与分析平台</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>实现设施设备智能化运维与管理</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>打造园区安防预警与应急处置系统</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>建立一体化园区服务与管理体系</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">预期效果:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">35%</div>
                          <div className="text-gray-700">园区管理人力成本降低</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">70%</div>
                          <div className="text-gray-700">服务响应时间缩短</div>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-indigo-600 mb-1">25%</div>
                          <div className="text-gray-700">能源使用效率提升</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">90%</div>
                          <div className="text-gray-700">安全事件预警准确率</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-10 rounded-2xl"></div>
                    <div className="relative bg-white bg-opacity-90 p-6 rounded-xl shadow-xl max-w-md border border-gray-200">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">智慧园区运营面板</h4>
                          <p className="text-gray-600 text-sm">实时监控与智能调度</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">园区人流量</div>
                          <div className="text-xl font-bold text-gray-900">3,248人</div>
                          <div className="text-xs text-green-600">同比上周 +5.3%</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">车位使用率</div>
                          <div className="text-xl font-bold text-gray-900">76.2%</div>
                          <div className="text-xs text-gray-600">剩余车位: 87个</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">能源使用</div>
                          <div className="text-xl font-bold text-gray-900">68.4 kWh</div>
                          <div className="text-xs text-red-600">峰值时段</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">服务工单</div>
                          <div className="text-xl font-bold text-gray-900">12个</div>
                          <div className="text-xs text-amber-600">3个待处理</div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded-lg mb-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">智能预警:</div>
                        <div className="flex items-start space-x-2">
                          <span className="text-amber-500">⚠️</span>
                          <span className="text-sm">检测到B3楼中央空调CL-05单元能耗异常，建议检查制冷系统。能耗较同期高出32%，可能导致月度电费超出预算。</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold mb-1">资源优化建议:</div>
                        <p>根据当前人流分布和气象数据，建议调整A区与C区空调温度设置，预计可节省今日能耗12%。同时建议增派2名安保人员至西区入口应对下午预计的参观团队。</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'datacenter' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-600">数据中心领域</h3>
                    <p className="text-gray-600 mb-6">
                      针对资源监控、故障预测、能效优化、安全管控等核心场景，我们提供智能化的数据中心管理解决方案。
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2">解决方案:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>部署 DeepSeek 模型，构建数据中心智能运维体系</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>实现多维资源监控与自动化调度</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>打造设备故障预测与预防性维护系统</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>建立能耗分析与优化管理平台</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">预期效果:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                          <div className="text-gray-700">故障预测准确率</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">15%</div>
                          <div className="text-gray-700">PUE值降低</div>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-indigo-600 mb-1">40%</div>
                          <div className="text-gray-700">运维人力成本降低</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">99.99%</div>
                          <div className="text-gray-700">服务可用性</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-10 rounded-2xl"></div>
                    <div className="relative bg-white bg-opacity-90 p-6 rounded-xl shadow-xl max-w-md border border-gray-200">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">数据中心故障预测</h4>
                          <p className="text-gray-600 text-sm">AI辅助的预测性维护</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-red-50 rounded-lg mb-6 border border-red-100">
                        <div className="flex items-center text-red-600 font-bold mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>高风险预警</span>
                        </div>
                        <div className="text-gray-700 mb-2">存储阵列: SAN-12-C</div>
                        <div className="text-sm text-gray-600">
                          硬盘#7 (SN: WD-2879A) 故障概率: <span className="font-bold text-red-600">87.3%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          预计剩余使用时间: <span className="font-bold">72-96小时</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          基于温度异常、读写错误率增加和SMART数据分析
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">UPS-02负载率</span>
                          <span className="font-medium">76% <span className="text-amber-500">(注意)</span></span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{width: '76%'}}></div>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">制冷效率</span>
                          <span className="font-medium">92% <span className="text-green-500">(正常)</span></span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">网络流量</span>
                          <span className="font-medium">63% <span className="text-green-500">(正常)</span></span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '63%'}}></div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold mb-1">DeepSeek推荐行动:</div>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>立即准备替换硬盘，型号WD Gold 12TB</li>
                          <li>调整UPS负载分布，建议将服务#23-27迁移至UPS-04</li>
                          <li>下周二凌晨2:00-4:00执行计划维护，同时更换风扇#3</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-16 bg-white" id="case-study">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">成功案例</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">某大型企业集团 DeepSeek 落地实践</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              该企业集团已在其核心业务部门率先完成DeepSeek R1-32B版本的本地化部署。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">项目概述</h3>
                <p className="text-gray-600">
                  该企业集团已成功完成 DeepSeek R1-32B 版本的本地化部署，并将 AI 能力融入多个业务场景，实现了从传统服务到"深度智能"的重要跨越。此次合作不仅为企业核心业务插上AI翅膀，更将重塑智慧政务、园区管理等场景的服务范式，开启"秒级响应"的数字化服务新时代。
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">应用场景与价值</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3">1</div>
                      <div>
                        <h4 className="font-bold mb-1">构建高度定制化知识库</h4>
                        <p className="text-gray-600 text-sm">整合内部知识节点，建立企业知识图谱，实现文档检索、邮件分类、日程管理等智能化，提升信息共享效率。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3">2</div>
                      <div>
                        <h4 className="font-bold mb-1">解决方案精准匹配</h4>
                        <p className="text-gray-600 text-sm">将口岸通关、数据中心等领域项目案例融入大模型，利用场景化语义理解，自动解析行业术语，实现解决方案自动匹配与生成。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3">3</div>
                      <div>
                        <h4 className="font-bold mb-1">精准决策支持</h4>
                        <p className="text-gray-600 text-sm">收集分析海量内外部数据，提供实时决策支持，决策精准度提升 35%，帮助预见市场变化，制定科学合理战略。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3">4</div>
                      <div>
                        <h4 className="font-bold mb-1">高效智能咨询体验</h4>
                        <p className="text-gray-600 text-sm">实现客户咨询秒级响应，大幅提升沟通效率，推进全流程自动化，实现"客户咨询—故障确认—故障诊断—工单派发—备件调度"的全流程自动化。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-blue-800">实施效果</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-1">85%</div>
                    <div className="text-gray-600">服务响应时间缩短</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">35%</div>
                    <div className="text-gray-600">决策准确性提高</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-green-600 mb-1">30%</div>
                    <div className="text-gray-600">运营成本降低</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-purple-600 mb-1">45%</div>
                    <div className="text-gray-600">客户满意度提升</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-bold text-indigo-800">未来规划</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  该企业集团将持续深化DeepSeek应用，推动大模型能力全面融入公司各工作平台，加速推进AI技术与工具在跨境交通、口岸通关、数据中心运维、政务信息系统等领域的深度结合，实现业务流程的自动化升级，从而进一步提升服务效率与质量，为客户打造更具价值的服务体验。
                </p>
                
                <div className="text-sm text-blue-600 font-medium flex items-center">
                  <span>查看详细案例分析</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Deployment Comparison */}
      <section className="py-16 bg-gray-50" id="comparison">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">选择指南</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">本地部署 vs API调用</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我们帮助您根据实际需求选择最合适的DeepSeek使用方式，实现价值最大化。
            </p>
            
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={() => setComparisonView('table')} 
                className={`px-4 py-2 rounded-md transition ${comparisonView === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                表格视图
              </button>
              <button 
                onClick={() => setComparisonView('cards')} 
                className={`px-4 py-2 rounded-md transition ${comparisonView === 'cards' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                卡片视图
              </button>
            </div>
          </div>
          
          {comparisonView === 'table' ? (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">考量因素</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">本地部署优势</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">API调用优势</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">数据安全</td>
                    <td className="px-6 py-4 text-sm text-gray-600">数据不出企业内网，完全自主可控</td>
                    <td className="px-6 py-4 text-sm text-gray-600">无需自建基础设施，快速上手</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">响应速度</td>
                    <td className="px-6 py-4 text-sm text-gray-600">低延迟，支持高频调用</td>
                    <td className="px-6 py-4 text-sm text-gray-600">无需维护，随时获取最新版本</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">定制能力</td>
                    <td className="px-6 py-4 text-sm text-gray-600">可进行深度定制和专属微调</td>
                    <td className="px-6 py-4 text-sm text-gray-600">无需技术团队支持，降低人力成本</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">使用成本</td>
                    <td className="px-6 py-4 text-sm text-gray-600">高频调用场景长期成本更低</td>
                    <td className="px-6 py-4 text-sm text-gray-600">初期投入低，按需付费</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">性能控制</td>
                    <td className="px-6 py-4 text-sm text-gray-600">资源分配可控，性能稳定可靠</td>
                    <td className="px-6 py-4 text-sm text-gray-600">无需担心硬件扩容和升级</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden border border-blue-100">
                <div className="bg-blue-600 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">本地部署</h3>
                  <p className="text-blue-100 text-sm">企业级数据控制与定制</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">完全的数据隐私与安全控制</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">低延迟与高可靠性</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">深度定制与特定领域优化</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">高使用量场景更具成本效益</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">适合企业:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 有严格数据安全要求的组织</li>
                      <li>• 大型企业与政府机构</li>
                      <li>• 需要深度定制的垂直领域</li>
                      <li>• 高频调用场景</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl shadow-md overflow-hidden border border-green-100">
                <div className="bg-green-600 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">API调用</h3>
                  <p className="text-green-100 text-sm">灵活性与快速部署</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">零前期基础设施投入</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">随时获取模型更新与改进</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">按需扩展，无需管理硬件</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">较低的技术门槛要求</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">适合企业:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 初创企业与中小企业</li>
                      <li>• 快速验证概念阶段</li>
                      <li>• 低频或不规律使用场景</li>
                      <li>• IT资源有限的组织</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl shadow-md overflow-hidden border border-purple-100">
                <div className="bg-purple-600 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">混合策略</h3>
                  <p className="text-purple-100 text-sm">兼顾安全与灵活性</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">核心业务场景本地部署</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">非敏感数据使用API调用</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">阶段性部署策略</p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700">根据数据敏感性分类处理</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">我们的建议:</h4>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-5">
                      <li>从API调用验证价值</li>
                      <li>敏感数据场景逐步本地化</li>
                      <li>根据业务重要性选择模型版本</li>
                      <li>建立混合云环境</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Implementation Methodology */}
      <section className="py-16 bg-white" id="methodology">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">实施方法论</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">科学化实施路径</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我们采用标准化的项目实施方法论，确保DeepSeek部署项目顺利进行，实现预期价值。
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Stepper Navigation */}
            <div className="flex justify-between items-center mb-8 relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>
              {[
                { step: 1, title: '评估与规划' },
                { step: 2, title: '基础建设' },
                { step: 3, title: '场景开发' },
                { step: 4, title: '持续优化' }
              ].map((phase, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                  <div className="mt-2 text-sm font-medium">{phase.title}</div>
                </div>
              ))}
            </div>
            
            {/* Phase Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">1</div>
                  <h3 className="text-xl font-bold">评估与规划（2-4周）</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>业务现状与需求分析</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>AI就绪度评估</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>场景价值评估与优先级排序</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>总体规划与路线图制定</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-6 border-l-4 border-indigo-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-4">2</div>
                  <h3 className="text-xl font-bold">基础建设（4-8周）</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>基础设施规划与部署</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>DeepSeek模型安装与调优</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>数据准备与环境配置</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>安全体系建设</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-4">3</div>
                  <h3 className="text-xl font-bold">场景开发（6-12周）</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>场景化应用开发</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>业务系统集成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>用户体验优化</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>功能测试与验证</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-4">4</div>
                  <h3 className="text-xl font-bold">持续优化（长期）</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>效果监测与评估</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>模型更新与迭代</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>知识库扩充与优化</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>场景扩展与深化</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Key Success Factors */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">关键成功因素</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    title: '高层支持',
                    description: '确保项目获得管理层充分认可与资源支持'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    ),
                    title: '数据准备',
                    description: '高质量的数据是AI应用的基础'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: '场景聚焦',
                    description: '从高价值场景入手，快速实现业务价值'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    ),
                    title: '持续优化',
                    description: '建立长效机制，确保系统持续进化'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: '能力建设',
                    description: '培养企业内部AI应用能力，实现自主创新'
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: '资源合理配置',
                    description: '根据企业实际需求和预算选择最合适的模型规模'
                  }
                ].map((factor, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow flex items-start">
                    <div className="text-blue-600 mr-4 flex-shrink-0">{factor.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{factor.title}</h4>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ROI Section */}
      <section className="py-16 bg-gray-50" id="roi">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">投资回报</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">DeepSeek投资价值</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              根据多家企业的实践经验，投资DeepSeek大模型解决方案可实现显著的业务价值提升。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">投资回报评估</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">直接收益</h4>
                      <p className="text-gray-600">流程自动化带来的人力成本节约，根据业务规模不同，平均可降低30-45%的运营成本。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">间接收益</h4>
                      <p className="text-gray-600">决策优化、效率提升产生的业务增长，客户满意度提升带来的品牌价值增长。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">风险降低</h4>
                      <p className="text-gray-600">错误减少、合规性提高带来的风险成本降低，提前预警能力减少损失。</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">创新价值</h4>
                      <p className="text-gray-600">新业务模式、产品创新带来的市场机会，创新周期缩短带来的竞争优势。</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-medium text-gray-700">根据多个行业客户案例分析，DeepSeek本地化部署项目通常在<span className="text-blue-600 font-bold">12-18个月内实现投资回报</span>。</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">成本控制策略</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><span className="font-medium">硬件租赁/分期：</span>与硬件供应商合作，提供灵活的设备获取方案</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><span className="font-medium">优先场景部署：</span>先在最具价值的业务场景部署，创造快速收益</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><span className="font-medium">混合资源策略：</span>核心场景本地部署，辅助场景云端API调用</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><span className="font-medium">算力共享池：</span>多部门/业务线共享算力资源，提高使用效率</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><span className="font-medium">模型动态加载：</span>根据业务需求动态调度不同规模的模型版本</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">硬件资源规划</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">模型版本</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最低硬件配置</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">推荐硬件配置</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">估算成本</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">DeepSeek R1-671B</td>
                        <td className="px-4 py-3 text-sm text-gray-500">8×A100 (80GB) GPU</td>
                        <td className="px-4 py-3 text-sm text-gray-500">16×A100/H100 GPU集群</td>
                        <td className="px-4 py-3 text-sm text-gray-500">中高</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">DeepSeek R1-32B</td>
                        <td className="px-4 py-3 text-sm text-gray-500">4×A10 (24GB) GPU</td>
                        <td className="px-4 py-3 text-sm text-gray-500">8×A10 GPU或4×A100 GPU</td>
                        <td className="px-4 py-3 text-sm text-gray-500">中等</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">DeepSeek量化版</td>
                        <td className="px-4 py-3 text-sm text-gray-500">2×RTX 4090</td>
                        <td className="px-4 py-3 text-sm text-gray-500">4×RTX 4090或2×A10 GPU</td>
                        <td className="px-4 py-3 text-sm text-gray-500">较低</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">DeepSeek轻量版</td>
                        <td className="px-4 py-3 text-sm text-gray-500">1×RTX 4090</td>
                        <td className="px-4 py-3 text-sm text-gray-500">2×RTX 4090</td>
                        <td className="px-4 py-3 text-sm text-gray-500">低</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">不同规模企业的最佳实践</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-700 mb-2">大型企业/机构最佳实践</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>部署满血版DeepSeek R1-671B，构建完整AI能力中心</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>建立多租户服务平台，支持全企业业务场景</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>投入专业运维团队，确保系统持续优化</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-700 mb-2">中型企业最佳实践</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>部署DeepSeek R1-32B，聚焦核心业务场景</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>采用混合云策略，核心能力本地部署，辅助能力云端调用</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>与技术合作伙伴共建AI应用创新实验室</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-2">小型企业最佳实践</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>选择DeepSeek轻量级版本或量化版本</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>聚焦1-2个高价值业务场景深耕</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>采用托管服务模式，降低技术门槛</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Offerings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">服务内容</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">我们的服务承诺</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              中通南方提供全方位的DeepSeek大模型部署与应用服务，确保您的AI转型项目顺利进行。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold">标准服务内容</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">免费需求评估与方案设计</h4>
                      <p className="text-gray-600 text-sm mt-1">业务现状分析、AI就绪度评估、初步方案规划、投资回报测算</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">全流程项目实施</h4>
                      <p className="text-gray-600 text-sm mt-1">详细解决方案设计、系统架构搭建、场景化应用开发、系统测试与上线</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">持续支持与优化</h4>
                      <p className="text-gray-600 text-sm mt-1">7×24小时技术支持、季度效果评估与优化、模型与知识库更新、新场景拓展规划</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              <div className="bg-indigo-600 text-white p-6">
                <h3 className="text-xl font-bold">增值服务选项</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">AI能力培训与赋能</h4>
                      <p className="text-gray-600 text-sm mt-1">管理层AI战略研讨会、技术团队DeepSeek开发培训、业务团队AI应用实践工作坊</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">定制化场景开发</h4>
                      <p className="text-gray-600 text-sm mt-1">行业专属模型调优、垂直领域知识图谱构建、特殊业务场景定制开发</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold">长期创新合作</h4>
                      <p className="text-gray-600 text-sm mt-1">联合创新实验室建设、行业前沿应用共同探索、技术创新成果共享</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-xl font-bold">开启合作</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold">免费评估</h4>
                      <p className="text-gray-600 text-sm mt-1">联系我们，安排初步沟通，提供业务需求与痛点，获取免费的初步评估报告</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold">方案定制</h4>
                      <p className="text-gray-600 text-sm mt-1">详细需求分析与场景梳理、定制化解决方案设计、投资回报与实施计划制定</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold">试点验证</h4>
                      <p className="text-gray-600 text-sm mt-1">选择高价值场景进行试点、快速交付初步成果、效果评估与方案优化</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold">全面实施</h4>
                      <p className="text-gray-600 text-sm mt-1">扩大应用范围，深化场景价值、持续优化与效果评估、长期合作与创新共赢</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-md">
                    预约免费咨询
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">开启您的DeepSeek智能化之旅</h2>
            <p className="text-xl mb-8">让中通南方助力您快速、稳健地迈入AI新时代，重塑业务竞争力。</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-sm">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-bold mb-2">先机优势</h3>
                <p className="text-sm text-blue-100">抢占行业AI应用先机，构建差异化竞争壁垒</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-sm">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-lg font-bold mb-2">专业团队</h3>
                <p className="text-sm text-blue-100">资深技术专家与行业顾问全程护航</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-bold mb-2">安全可控</h3>
                <p className="text-sm text-blue-100">数据安全与合规保障，掌控AI应用全局</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition shadow-md">
                预约演示与咨询
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition">
                获取详细解决方案
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
              <img src="/logo.jpg" alt="中通信息-南方设计" className="h-8 mr-2" />
                <span className="font-bold text-xl">中通信息-南方设计</span>
              </div>
              <p className="text-gray-400 mb-4">DeepSeek大模型专业服务提供商</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">解决方案</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">DeepSeek 政务解决方案</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">DeepSeek 金融解决方案</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">DeepSeek 交通解决方案</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">DeepSeek 园区解决方案</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">DeepSeek 数据中心解决方案</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">资源中心</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">DeepSeek 技术白皮书</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">案例研究</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">行业报告</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">常见问题</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">博客文章</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">联系我们</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">13602801537</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">honghaodong.spdi.gd@chinaccs.cn</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">中国 · 广东省 · 深圳市南山区深圳科技生态园11栋A座33楼</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© 2025 中通信息-南方设计. 版权所有</p>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
      
      {/* Contact Modal */}
      {showContactModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowContactModal(false)}
          style={{
            animation: 'modalFade 0.2s ease-out'
          }}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative modal-animation"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              onClick={() => setShowContactModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">联系我们</h3>
              <p className="text-gray-600 mb-6">请添加以下微信号进行咨询：</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-2xl font-bold text-blue-600 select-all">scauos</p>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">13602801537</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">honghaodong.spdi.gd@chinaccs.cn</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">中国 · 广东省 · 深圳市南山区深圳科技生态园11栋A座33楼</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500">添加微信时请注明来意，我们将尽快与您联系</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepseekSolutionPage;
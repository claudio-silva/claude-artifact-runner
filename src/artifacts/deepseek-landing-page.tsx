import React, { useState } from 'react';

const DeepseekLandingPage = () => {
  const [activeTab, setActiveTab] = useState('finance');
  const [activeAccordion, setActiveAccordion] = useState('advantage1');

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h5 className="text-blue-300 font-semibold mb-2">中通南方咨询设计院</h5>
            <h1 className="text-5xl font-bold mb-6">智驭未来 · 通达千里</h1>
            <h2 className="text-3xl font-semibold mb-8">Deepseek人工智能整体解决方案</h2>
            <p className="text-xl mb-8">以专业咨询为引领，助力企业快速、稳健地实现AI转型，构建具有持续竞争力的智能化业务生态</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition">
                预约免费评估
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
                了解详情
              </button>
            </div>
          </div>
        </div>
        
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </section>

      {/* Core Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">四大核心竞争力</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">我们的差异化优势，让您的AI转型更加高效、安全、可持续</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'advantage1',
                icon: '🎯',
                title: '行业深耕 × 场景赋能',
                desc: '更懂行业痛点的AI落地专家',
                color: 'from-blue-400 to-blue-600'
              },
              {
                id: 'advantage2',
                icon: '🔄',
                title: '全链条服务 × 闭环保障',
                desc: '更可靠的AI整体解决方案',
                color: 'from-indigo-400 to-indigo-600'
              },
              {
                id: 'advantage3',
                icon: '🔌',
                title: '技术融合 × 生态协同',
                desc: '更开放的AI应用生态',
                color: 'from-purple-400 to-purple-600'
              },
              {
                id: 'advantage4',
                icon: '🔒',
                title: '安全合规 × 敏捷迭代',
                desc: '更安心的AI持续发展路径',
                color: 'from-green-400 to-green-600'
              }
            ].map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 cursor-pointer"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-3xl mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === item.id ? 'max-h-96' : 'max-h-0'}`}>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">三层次能力架构</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">从底层基础到价值提升，全方位构建企业AI能力</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '基础架构层',
                subtitle: '"筑基工程"',
                icon: '🏗️',
                color: 'bg-blue-500',
                items: [
                  '多模式部署设计',
                  '智能基础设施规划',
                  '安全合规保障系统'
                ]
              },
              {
                title: '融合应用层',
                subtitle: '"赋能工程"',
                icon: '⚙️',
                color: 'bg-indigo-500',
                items: [
                  '大模型能力中台',
                  '行业专属解决方案',
                  '行业通用组件库'
                ]
              },
              {
                title: '价值提升层',
                subtitle: '"增值工程"',
                icon: '📈',
                color: 'bg-purple-500',
                items: [
                  'AI能力培养计划',
                  '持续优化服务',
                  '价值评估与创新'
                ]
              }
            ].map((layer, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 ${layer.color}`}></div>
                <div className="text-4xl mb-4">{layer.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{layer.title}</h3>
                <h4 className="text-lg text-indigo-600 mb-6">{layer.subtitle}</h4>
                <ul className="space-y-4">
                  {layer.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${layer.color} mr-3 flex-shrink-0`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">行业专属解决方案</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">深入理解行业痛点，提供精准AI转型路径</p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'finance', label: '金融行业' },
                { id: 'manufacturing', label: '制造行业' },
                { id: 'energy', label: '能源行业' },
                { id: 'government', label: '政务服务' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {activeTab === 'finance' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">金融行业智能升级</h3>
                    <p className="text-gray-700 mb-6">
                      针对金融机构面临的风控、投顾、合规等核心痛点，提供端到端智能化解决方案，
                      助力金融机构实现数字化转型，提升客户体验与风险管控能力。
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg">智能风控</h4>
                          <p className="text-gray-600">基于多维数据的实时风险评估与预警</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg">智能投顾</h4>
                          <p className="text-gray-600">个性化资产配置与投资建议引擎</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-lg">合规审查</h4>
                          <p className="text-gray-600">金融文件自动化审核与风险识别</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center bg-blue-50 rounded-xl p-6">
                    <div className="max-w-md">
                      <div className="text-center mb-6">
                        <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 text-4xl mb-4">💼</div>
                        <h3 className="text-xl font-bold">某城商银行智能风控体系</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-blue-600">挑战</h4>
                          <p>传统风控模型更新周期长，难以应对新型欺诈手段</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-blue-600">解决方案</h4>
                          <p>基于Deepseek构建实时风险评分引擎</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-green-600">成效</h4>
                          <p>欺诈识别率提升43%，误判率降低21%，审核效率提升5倍</p>
                        </div>
                      </div>
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
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg">智能质检</h4>
                          <p className="text-gray-600">视觉缺陷检测与质量预测模型</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg">预测性维护</h4>
                          <p className="text-gray-600">设备故障预测与维护优化</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-lg">工艺参数优化</h4>
                          <p className="text-gray-600">生产参数自动调优系统</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center bg-indigo-50 rounded-xl p-6">
                    <div className="max-w-md">
                      <div className="text-center mb-6">
                        <div className="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 text-4xl mb-4">🏭</div>
                        <h3 className="text-xl font-bold">某大型装备制造企业质检升级</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-indigo-600">挑战</h4>
                          <p>人工质检成本高、效率低、一致性差</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-indigo-600">解决方案</h4>
                          <p>部署AI视觉质检系统与预测性维护平台</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-green-600">成效</h4>
                          <p>质检效率提升300%，缺陷检出率提高25%，设备故障预警准确率达92%</p>
                        </div>
                      </div>
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
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg">设备健康管理</h4>
                          <p className="text-gray-600">输电线路、变电站设备状态监测预警</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg">负荷预测</h4>
                          <p className="text-gray-600">基于多源数据的精准电力负荷预测</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-lg">能效优化</h4>
                          <p className="text-gray-600">综合能源系统智能调度与优化</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center bg-green-50 rounded-xl p-6">
                    <div className="max-w-md">
                      <div className="text-center mb-6">
                        <div className="inline-block p-3 bg-green-100 rounded-full text-green-600 text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold">某电网公司输电线路智能巡检</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-green-600">挑战</h4>
                          <p>传统人工巡检覆盖率低、周期长、危险性高</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-green-600">解决方案</h4>
                          <p>构建基于多源数据的智能巡检与故障诊断系统</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-green-600">成效</h4>
                          <p>巡检效率提升10倍，故障预警时间提前72小时，运维成本降低32%</p>
                        </div>
                      </div>
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
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg">智能审批</h4>
                          <p className="text-gray-600">行政审批全流程智能化改造</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg">政策解读</h4>
                          <p className="text-gray-600">政策文件智能解析与精准推送</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-lg">社情民意</h4>
                          <p className="text-gray-600">舆情分析与社会治理决策支持</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center bg-purple-50 rounded-xl p-6">
                    <div className="max-w-md">
                      <div className="text-center mb-6">
                        <div className="inline-block p-3 bg-purple-100 rounded-full text-purple-600 text-4xl mb-4">🏛️</div>
                        <h3 className="text-xl font-bold">某市政务服务大厅智能化改造</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-purple-600">挑战</h4>
                          <p>政务服务效率低，市民满意度不高</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-purple-600">解决方案</h4>
                          <p>构建"AI+政务"一体化服务平台</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold text-green-600">成效</h4>
                          <p>办事时间平均缩短65%，一次办结率提升34%，市民满意度提升42%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Process */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">"3-5-7"实施方法论</h2>
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
                color: 'border-blue-500'
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
                color: 'border-indigo-500'
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
                color: 'border-purple-500'
              }
            ].map((phase, idx) => (
              <div key={idx} className={`bg-gray-800 rounded-xl p-8 border-t-4 ${phase.color}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold mr-4">
                    {phase.number}
                  </div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">立即开启您的AI转型之旅</h2>
            <p className="text-xl mb-8">
              中通南方Deepseek专业服务团队，助力您的企业驶入AI新时代的快车道！
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">免费AI就绪度评估</h3>
                <p className="text-gray-200">专业评估企业AI转型准备情况，提供详细报告与改进建议</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur">
                <div className="text-3xl mb-4">🧩</div>
                <h3 className="text-xl font-bold mb-2">场景工作坊</h3>
                <p className="text-gray-200">识别高价值AI应用场景，评估实施可行性与投资回报</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">概念验证项目</h3>
                <p className="text-gray-200">90天内交付可见成果，验证AI价值并积累经验</p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition text-lg">
                联系我们，预约咨询
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">中通南方</h2>
              <p className="text-gray-400">Deepseek人工智能专业服务团队</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                  <span className="text-lg">📱</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                  <span className="text-lg">✉️</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                  <span className="text-lg">🌐</span>
                </div>
              </div>
              <p className="text-gray-400">© 2025 中通南方咨询设计院. 版权所有</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeepseekLandingPage;

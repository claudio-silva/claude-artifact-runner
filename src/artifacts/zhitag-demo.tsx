import React, { useState } from 'react';

const ZhitagDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeStep, setActiveStep] = useState(1);
  const [riskScore] = useState(98);
  const [processingStatus, setProcessingStatus] = useState('completed');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
      
      // 模拟处理过程
      setProcessingStatus('processing');
      setTimeout(() => {
        setProcessingStatus('completed');
        setShowResults(true);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 顶部导航栏 */}
      <nav className="bg-blue-700 text-white px-6 py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold">《智标》标书智能辅助系统</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-blue-800 rounded-full text-sm">中通南方七分公司</span>
            <div className="w-8 h-8 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold">
              洪
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 侧边栏导航 */}
          <div className="lg:w-64 bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col space-y-1">
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span>系统概览</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'bidding' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('bidding')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>招标解析</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'risk' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('risk')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>废标风险</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'tech' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('tech')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span>技术方案</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'commercial' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('commercial')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>商务方案</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'evaluation' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('evaluation')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>竞争评估</span>
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-700 mb-2">系统状态</h3>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">废标风险</span>
                  <span className="text-sm font-semibold text-green-600">低</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-3 mb-1">
                  <span className="text-sm">技术方案完成度</span>
                  <span className="text-sm font-semibold text-amber-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-3 mb-1">
                  <span className="text-sm">商务部分完成度</span>
                  <span className="text-sm font-semibold text-blue-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 主要内容 */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">《智标》系统概览</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">废标风险降低</h3>
                        <p className="text-3xl font-bold text-blue-700">95%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">编制时间减少</h3>
                        <p className="text-3xl font-bold text-green-700">70%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">中标率提升</h3>
                        <p className="text-3xl font-bold text-amber-700">35%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">标书编制流程</h3>
                  <div className="relative">
                    <div className="absolute left-4 inset-y-0 w-0.5 bg-gray-200"></div>
                    
                    {[
                      {
                        title: "招标文件智能解析",
                        desc: "上传招标文件，AI自动解析关键要求、生成评分点地图和废标风险清单",
                        time: "2小时"
                      },
                      {
                        title: "方案框架智能生成",
                        desc: "基于解析结果生成完整标书框架、智能分配各章节篇幅与重点",
                        time: "4小时" 
                      },
                      {
                        title: "核心内容智能撰写",
                        desc: "调用公司项目库匹配最佳案例、智能生成针对性技术方案",
                        time: "24小时"
                      },
                      {
                        title: "商务方案智能辅助",
                        desc: "智能匹配最优资质组合、生成合理报价策略",
                        time: "12小时"
                      },
                      {
                        title: "质量检查与优化",
                        desc: "全面废标风险检查、一致性智能检查、与评分标准匹配度分析",
                        time: "8小时"
                      },
                      {
                        title: "最终完善与输出",
                        desc: "根据优化建议调整完善、自动排版与生成目录",
                        time: "4小时"
                      }
                    ].map((step, index) => (
                      <div key={index} className={`relative pl-10 pb-8 ${index === activeStep - 1 ? 'opacity-100' : 'opacity-70'}`}>
                        <div className={`absolute left-2 rounded-full w-6 h-6 flex items-center justify-center ${index < activeStep ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                          {index < activeStep ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-md font-semibold">{step.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                          </div>
                          <span className="text-sm font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center text-green-600 font-medium mt-4">
                      总耗时：54小时（传统方式需要10-15天）
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">开始使用</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="text-lg mb-4">上传招标文件，开始智能化标书编制流程：</p>
                    <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        {uploadedFile ? (
                          <p className="text-sm text-gray-600">{uploadedFile}</p>
                        ) : (
                          <p className="text-sm text-gray-600">点击或拖拽上传招标文件</p>
                        )}
                      </div>
                      <input type="file" className="hidden" onChange={handleFileUpload} />
                    </label>
                    
                    {processingStatus === 'processing' && (
                      <div className="mt-4 text-center">
                        <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                        <p className="mt-2 text-sm text-gray-600">正在解析招标文件，请稍候...</p>
                      </div>
                    )}
                    
                    {showResults && (
                      <div className="mt-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium text-green-700">招标文件解析完成！</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">系统已完成招标文件分析，识别出关键需求点和评分项，点击下方按钮查看详情</p>
                        </div>
                        <div className="flex space-x-4">
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition" onClick={() => setActiveTab('bidding')}>
                            查看解析结果
                          </button>
                          <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition" onClick={() => setActiveStep(2)}>
                            继续下一步
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'bidding' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">招标文件智能解析</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="col-span-2 bg-blue-50 rounded-lg p-5">
                    <div className="flex justify-between mb-3">
                      <h3 className="text-lg font-semibold text-blue-700">招标文件基本信息</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">智能识别</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">项目名称</p>
                        <p className="font-medium">智慧城市社区管理平台建设项目</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">招标单位</p>
                        <p className="font-medium">西安市雁塔区智慧城市建设办公室</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">项目编号</p>
                        <p className="font-medium">XAZH2023-0568</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">项目预算</p>
                        <p className="font-medium">￥680万元</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">投标截止日期</p>
                        <p className="font-medium text-red-600">2023-06-30 10:00</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">投标保证金</p>
                        <p className="font-medium">￥10万元</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <h3 className="font-semibold text-gray-700 mb-3">时间节点</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm">招标公告发布</span>
                        </div>
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">已完成</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm">资格预审</span>
                        </div>
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">已完成</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm">投标文件提交</span>
                        </div>
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">进行中</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                          <span className="text-sm">开标</span>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">未开始</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                          <span className="text-sm">评标</span>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">未开始</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-red-600">剩余投标时间</div>
                        <div className="flex justify-center space-x-2 mt-2">
                          <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">12</span>
                          </div>
                          <span className="text-xl font-bold text-gray-700">:</span>
                          <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">08</span>
                          </div>
                          <span className="text-xl font-bold text-gray-700">:</span>
                          <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">36</span>
                          </div>
                        </div>
                        <div className="flex justify-center text-gray-500 text-xs mt-1">
                          <span className="w-12 text-center">天</span>
                          <span className="w-12 text-center">时</span>
                          <span className="w-12 text-center">分</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-700 mb-4">关键评分点提取</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-blue-700">技术方案 (45分)</h4>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">关键评分项</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                          <li>系统架构设计合理性 (15分)</li>
                          <li>关键技术实现方案 (10分)</li>
                          <li>创新性和先进性 (10分)</li>
                          <li>可扩展性设计 (10分)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-green-700">实施方案 (25分)</h4>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">关键评分项</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                          <li>项目进度计划 (10分)</li>
                          <li>质量保证措施 (8分)</li>
                          <li>风险控制措施 (7分)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-3">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-amber-700">商务部分 (20分)</h4>
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">关键评分项</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                          <li>投标报价 (10分)</li>
                          <li>服务承诺 (5分)</li>
                          <li>售后支持 (5分)</li>
                        </ul>
                      </div>
                      
                      <div className="rounded-lg p-3">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-gray-700">公司实力 (10分)</h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                          <li>同类项目经验 (5分)</li>
                          <li>公司资质 (5分)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-700 mb-4">隐形需求识别</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">招标方强调本地化服务要求</p>
                          <p className="text-xs text-gray-500 mt-1">虽未明确要求，但招标文件多处暗示需要本地化服务团队，应在方案中突出本地服务能力</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">数据安全性要求高于一般项目</p>
                          <p className="text-xs text-gray-500 mt-1">从需求描述中分析，数据安全是招标方重点关注领域，建议在方案中加强数据安全保障措施</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">招标方对AI技术应用兴趣较高</p>
                          <p className="text-xs text-gray-500 mt-1">从相关描述分析，招标方对AI技术感兴趣但缺乏专业认识，可作为方案亮点重点突出</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">系统与现有政务平台对接是关键</p>
                          <p className="text-xs text-gray-500 mt-1">招标文件中提及系统需与现有政务平台对接，应在方案中详细阐述对接方案和经验</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-3 border-t border-gray-100">
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
                        生成详细需求分析报告
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-700">竞争分析</h3>
                  </div>
                  
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">可能参与投标单位</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">相似项目经验</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">技术优势</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">价格策略</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">预估胜率</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-gray-900">科大讯飞</div>
                              <div className="text-xs text-gray-500">智慧城市方向</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                高
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">语音识别、AI技术领先</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">偏高 (预计680-700万)</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-600">35%</div>
                            </td>
                          </tr>
                          
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-gray-900">华为技术</div>
                              <div className="text-xs text-gray-500">智慧城市方向</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                高
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">云技术、IoT平台成熟</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">偏高 (预计670-690万)</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-600">40%</div>
                            </td>
                          </tr>
                          
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-gray-900">海康威视</div>
                              <div className="text-xs text-gray-500">安防监控领域</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                中
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">视频分析、安防体系完善</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">适中 (预计650-670万)</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-600">30%</div>
                            </td>
                          </tr>
                          
                          <tr className="bg-blue-50">
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-blue-800">中通南方（本公司）</div>
                              <div className="text-xs text-blue-600">系统集成领域</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                中高
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-blue-700">DeepSeek大模型优势，本地化服务</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-blue-700">具竞争力 (建议630-650万)</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-700">25% → 45%</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-blue-800">中标策略建议</h3>
                          <div className="mt-2 text-sm text-blue-700">
                            <p>1. 突出DeepSeek大模型应用优势和本地化服务能力</p>
                            <p>2. 采用630-650万价格区间，在保证利润情况下形成价格优势</p>
                            <p>3. 技术方案重点加强AI创新应用和系统集成能力</p>
                            <p>4. 特别突出在西北地区的实施经验和成功案例</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4 justify-end">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    导出分析报告
                  </button>
                  <button 
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={() => setActiveTab('tech')}
                  >
                    生成技术方案
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'risk' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">废标风险防控</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">总体风险评分</h3>
                    <div className="flex items-center">
                      <span className={`text-lg font-bold ${riskScore >= 90 ? 'text-green-600' : riskScore >= 70 ? 'text-amber-600' : 'text-red-600'}`}>
                        {riskScore}/100
                      </span>
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
                        低风险
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${riskScore >= 90 ? 'bg-green-500' : riskScore >= 70 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${riskScore}%` }}></div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">风险检查项</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">检查项</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风险等级</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { 
                            name: "资质证明材料完整性", 
                            status: "已通过", 
                            risk: "无风险",
                            riskLevel: "low" 
                          },
                          { 
                            name: "投标报价格式规范性", 
                            status: "已通过", 
                            risk: "无风险",
                            riskLevel: "low" 
                          },
                          { 
                            name: "投标文件签字盖章", 
                            status: "需修正", 
                            risk: "低风险",
                            riskLevel: "medium" 
                          },
                          { 
                            name: "商务条款响应完整性", 
                            status: "已通过", 
                            risk: "无风险",
                            riskLevel: "low" 
                          },
                          { 
                            name: "投标保证金", 
                            status: "已通过", 
                            risk: "无风险",
                            riskLevel: "low" 
                          }
                        ].map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === '已通过' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                              }`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.riskLevel === 'low' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                              }`}>
                                {item.risk}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-blue-600 hover:text-blue-900">查看详情</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-amber-800">需要修正的问题</h3>
                      <div className="mt-2 text-sm text-amber-700">
                        <p>投标文件第56页法人授权委托书缺少盖章，需要补充盖章后重新上传</p>
                      </div>
                      <div className="mt-3">
                        <div className="-mx-2 -my-1.5 flex">
                          <button className="bg-amber-100 px-2 py-1.5 rounded-md text-xs font-medium text-amber-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                            查看详情
                          </button>
                          <button className="ml-3 bg-amber-100 px-2 py-1.5 rounded-md text-xs font-medium text-amber-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                            立即修正
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">一致性检查</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">金额一致性</h4>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>投标总价</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>分项报价</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>投标保证金金额</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">文件一致性</h4>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>技术响应与商务描述</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>电子版与纸质版</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>项目名称描述</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
                    生成风险报告
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'tech' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">技术方案智能生成</h2>
                
                <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">技术方案撰写进度</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">75% 完成</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>系统架构设计</span>
                        <span className="text-green-600 font-medium">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>技术路线规划</span>
                        <span className="text-green-600 font-medium">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>功能模块设计</span>
                        <span className="text-blue-600 font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI技术应用方案</span>
                        <span className="text-blue-600 font-medium">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>安全保障设计</span>
                        <span className="text-amber-600 font-medium">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>项目实施计划</span>
                        <span className="text-amber-600 font-medium">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                    <span className="text-sm text-gray-500">预计完成时间：2小时28分钟</span>
                    <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      加速生成
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-700">系统架构设计</h3>
                        <div className="flex space-x-2">
                          <button className="text-xs px-2 py-1 bg-white border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                            全屏查看
                          </button>
                          <button className="text-xs px-2 py-1 bg-white border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                            下载
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white">
                        <div className="flex justify-center mb-4">
                          <svg width="520" height="300" xmlns="http://www.w3.org/2000/svg">
                            {/* 背景 */}
                            <rect width="520" height="300" fill="#f8f9fa" rx="10" ry="10" />
                            
                            {/* 标题 */}
                            <text x="260" y="30" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333" fontWeight="bold">
                              智慧城市社区管理系统三层架构
                            </text>
                            
                            {/* 云端层 */}
                            <rect x="100" y="50" width="320" height="60" rx="5" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
                            <text x="260" y="70" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#1e40af" fontWeight="bold">
                              云端服务层
                            </text>
                            <text x="260" y="90" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#3b82f6">
                              业务系统 | 数据中心 | AI智能引擎 | 集成服务
                            </text>
                            
                            {/* 连接线 */}
                            <line x1="260" y1="110" x2="260" y2="130" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
                            
                            {/* 边缘层 */}
                            <rect x="100" y="130" width="320" height="60" rx="5" fill="#fef9c3" stroke="#fde047" strokeWidth="1" />
                            <text x="260" y="150" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#854d0e" fontWeight="bold">
                              边缘计算层
                            </text>
                            <text x="260" y="170" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#ca8a04">
                              社区服务器 | 边缘分析 | 本地缓存 | 数据预处理
                            </text>
                            
                            {/* 连接线 */}
                            <line x1="260" y1="190" x2="260" y2="210" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
                            
                            {/* 终端层 */}
                            <rect x="100" y="210" width="320" height="60" rx="5" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
                            <text x="260" y="230" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#166534" fontWeight="bold">
                              终端设备层
                            </text>
                            <text x="260" y="250" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#22c55e">
                              智能门禁 | 监控摄像头 | 传感器 | 用户终端设备
                            </text>
                            
                            {/* 左侧技术标注 */}
                            <text x="60" y="80" fontFamily="Arial" fontSize="9" textAnchor="end" fill="#475569">DeepSeek大模型</text>
                            <text x="60" y="160" fontFamily="Arial" fontSize="9" textAnchor="end" fill="#475569">边缘AI推理</text>
                            <text x="60" y="240" fontFamily="Arial" fontSize="9" textAnchor="end" fill="#475569">IoT设备接入</text>
                            
                            {/* 右侧技术标注 */}
                            <text x="460" y="80" fontFamily="Arial" fontSize="9" textAnchor="start" fill="#475569">微服务架构</text>
                            <text x="460" y="160" fontFamily="Arial" fontSize="9" textAnchor="start" fill="#475569">实时数据处理</text>
                            <text x="460" y="240" fontFamily="Arial" fontSize="9" textAnchor="start" fill="#475569">多协议适配</text>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">本系统采用"云-边-端"三层架构设计，充分利用云端算力与边缘计算能力，实现系统高效运转：</p>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                          <li><span className="font-medium">云端服务层</span>：部署核心业务系统、数据中心和DeepSeek大模型AI引擎，提供强大的数据分析和业务处理能力</li>
                          <li><span className="font-medium">边缘计算层</span>：部署于社区的边缘计算单元，处理时效性要求高的业务，减轻网络传输压力</li>
                          <li><span className="font-medium">终端设备层</span>：包括各类智能设备和用户应用，负责数据采集和交互界面呈现</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="border border-gray-200 rounded-lg overflow-hidden h-full">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-700">方案特色亮点</h3>
                      </div>
                      
                      <div className="p-4 h-[calc(100%-49px)] overflow-auto">
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-blue-700">DeepSeek大模型赋能</h4>
                            </div>
                            <p className="text-sm text-blue-600">集成DeepSeek-32B大模型，提供智能客服、舆情分析、行为预测等AI能力，远超同类方案</p>
                          </div>
                          
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-purple-700">创新智能密度分析</h4>
                            </div>
                            <p className="text-sm text-purple-600">独创的智能密度分析技术，可动态调整社区安保资源配置，提高安防效率30%以上</p>
                          </div>
                          
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-green-700">微服务架构设计</h4>
                            </div>
                            <p className="text-sm text-green-600">基于K8s容器化微服务架构，支持弹性扩展，可根据业务需求灵活调整系统规模</p>
                          </div>
                          
                          <div className="p-3 bg-amber-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-amber-700">自主开发多模态感知</h4>
                            </div>
                            <p className="text-sm text-amber-600">自研的多模态感知技术，结合视频、音频、环境数据，实现全方位社区感知能力</p>
                          </div>
                          
                          <div className="p-3 bg-red-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-red-700">智能设备适配能力</h4>
                            </div>
                            <p className="text-sm text-red-600">支持400+种主流智能设备接入，超越行业平均200种的接入能力，实现更广泛的兼容性</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="text-xs text-gray-500 flex justify-between mb-1">
                            <span>技术创新指数</span>
                            <span className="font-medium">86/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '86%' }}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">超出行业平均水平32%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="font-semibold text-gray-700">关键功能模块</h3>
                      <div>
                        <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                          展开全部
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">居民信息管理</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>居民信息登记与管理</li>
                            <li>家庭成员关联</li>
                            <li>访客管理</li>
                            <li>信息安全保障</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">智能安防监控</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>AI视频监控识别</li>
                            <li>异常行为检测</li>
                            <li>安防预警联动</li>
                            <li>安全态势感知</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">社区活动管理</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>活动发布与报名</li>
                            <li>智能活动推荐</li>
                            <li>场地预约管理</li>
                            <li>活动回顾分享</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">智能停车管理</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>车牌自动识别</li>
                            <li>车位管理与导航</li>
                            <li>访客停车管理</li>
                            <li>无感支付</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            </div>
                            <h4 className="font-medium">物业管理系统</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>物业缴费管理</li>
                            <li>报修服务管理</li>
                            <li>公告发布系统</li>
                            <li>绩效考核分析</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <h4 className="font-medium">数据分析决策</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>社区运营数据分析</li>
                            <li>资源优化配置</li>
                            <li>趋势预测与预警</li>
                            <li>可视化决策支持</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    导出技术方案
                  </button>
                  
                  <div className="space-x-3">
                    <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                      修改方案
                    </button>
                    <button 
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      onClick={() => setActiveTab('commercial')}
                    >
                      生成商务方案
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'commercial' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">商务方案智能辅助</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-700">智能报价策略</h3>
                        <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                          更新报价
                        </button>
                      </div>
                      
                      <div className="p-4">
                        <div className="mb-6">
                          <div className="flex justify-between mb-2">
                            <div>
                              <h4 className="font-medium">项目总报价</h4>
                              <p className="text-sm text-gray-500">包含软硬件采购、实施、培训与运维</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">¥6,380,000</div>
                              <div className="text-sm text-gray-500">不含税价格：¥5,646,017</div>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: '94%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>预算下限：¥6,000,000</span>
                            <span>预算上限：¥6,800,000</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3 mb-6">
                          <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="font-medium">报价策略分析</p>
                              <p className="text-sm text-gray-600 mt-1">当前报价位于预算范围内94%位置，低于预算上限6.2%，高于最高竞争对手华为预计报价（670-690万）的约7%。建议维持此价格以保持合理利润，同时保证项目实施质量。</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分项</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金额（元）</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">占比</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">市场均价对比</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">软件开发与定制</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">2,380,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">37.3%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-green-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                      </svg>
                                      低5%
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">硬件设备采购</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">1,850,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">29.0%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-red-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                      </svg>
                                      高3%
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">系统实施与集成</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">1,200,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">18.8%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-gray-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                      </svg>
                                      持平
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">培训与技术转移</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">350,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">5.5%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-green-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                      </svg>
                                      低8%
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">运维服务（3年）</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">600,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">9.4%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-green-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                      </svg>
                                      低2%
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-700">项目收益预测</h3>
                      </div>
                      
                      <div className="p-4 flex-grow">
                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-blue-700">预计利润率</span>
                            <span className="text-lg font-bold text-blue-700">21.6%</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-blue-600 mt-1">
                            <span>目标最低：18%</span>
                            <span>目标最高：30%</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">项目总收入</span>
                              <span className="text-sm font-medium">¥6,380,000</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">预计总成本</span>
                              <span className="text-sm font-medium">¥5,000,000</span>
                            </div>
                            <div className="text-xs text-gray-500">包含人工、设备、差旅等</div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">预计毛利</span>
                              <span className="text-sm font-medium text-green-600">¥1,380,000</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">预计回款时间</span>
                              <span className="text-sm font-medium">12-18个月</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                          <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium text-amber-700">报价策略合理，建议维持当前价格</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4 justify-end">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    导出商务方案
                  </button>
                  
                  <div className="space-x-3">
                    <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                      修改方案
                    </button>
                    <button 
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      onClick={() => setActiveTab('evaluation')}
                    >
                      生成竞争评估
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'evaluation' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">标书竞争力评估</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                      <div className="flex flex-col items-center">
                        <div className="relative mb-3">
                          <svg viewBox="0 0 36 36" className="w-24 h-24">
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#eee"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#4f46e5"
                              strokeWidth="3"
                              strokeDasharray="85, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-indigo-600">
                            85%
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">总体竞争力评分</h3>
                        <p className="text-sm text-gray-500 text-center mt-1">优秀 (行业平均: 76%)</p>
                        
                        <div className="w-full mt-4 space-y-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">技术方案</span>
                              <span className="font-medium">88%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">商务方案</span>
                              <span className="font-medium">82%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '82%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">价格竞争力</span>
                              <span className="font-medium">80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">企业资质</span>
                              <span className="font-medium">93%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '93%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                      <h3 className="text-lg font-semibold mb-4">中标概率预测</h3>
                      
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-3xl font-bold text-green-700">78.6%</p>
                            <p className="text-sm text-gray-600 mt-1">较上次提升14.2%</p>
                          </div>
                          <div className="bg-white p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {/* 中标概率贡献因素 */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm">技术方案优势</span>
                          </div>
                          <span className="text-sm font-medium">+25.3%</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-sm">价格竞争力</span>
                          </div>
                          <span className="text-sm font-medium">+18.7%</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                            <span className="text-sm">企业资质</span>
                          </div>
                          <span className="text-sm font-medium">+22.5%</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                            <span className="text-sm">商务承诺</span>
                          </div>
                          <span className="text-sm font-medium">+12.1%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-700">差异化分析</h3>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-4">
                        <p className="text-sm text-gray-500">与主要竞争对手相比，我方标书的差异化优势：</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="flex items-start mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h4 className="text-sm font-medium text-green-700">DeepSeek大模型技术优势</h4>
                              <p className="text-xs text-green-600 mt-1">我方独有的DeepSeek大模型技术应用，远超竞争对手的AI技术水平，在智能服务和数据分析方面具有明显优势</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="flex items-start mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h4 className="text-sm font-medium text-blue-700">本地化服务能力</h4>
                              <p className="text-xs text-blue-600 mt-1">相比华为和科大讯飞，我方在西安地区拥有更强的本地化服务团队和更丰富的本地项目经验</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="flex items-start mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h4 className="text-sm font-medium text-purple-700">价格竞争力</h4>
                              <p className="text-xs text-purple-600 mt-1">我方报价比竞争对手平均低5-8%，同时不影响服务质量，体现更高的性价比</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 p-3 rounded-lg">
                          <div className="flex items-start mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h4 className="text-sm font-medium text-amber-700">专业技术团队</h4>
                              <p className="text-xs text-amber-600 mt-1">我方拥有更专业的智慧城市方案设计团队，核心成员平均8年以上智慧城市建设经验</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">建议进一步提升的方面</h4>
                        <ul className="text-xs text-gray-600 space-y-1 ml-5 list-disc">
                          <li>增强系统安全保障方案的详细程度</li>
                          <li>补充更多同类项目的成功案例</li>
                          <li>完善项目实施计划的时间节点和风险控制措施</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-700">评分项目分析</h3>
                    </div>
                    
                    <div className="p-4">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">评分项</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">满分</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">预计得分</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">得分率</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">系统架构设计</div>
                                <div className="text-xs text-gray-500">技术方案</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">15</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-green-600">13.5</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">关键技术实现</div>
                                <div className="text-xs text-gray-500">技术方案</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">10</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-green-600">9.2</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">创新性和先进性</div>
                                <div className="text-xs text-gray-500">技术方案</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">10</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-green-600">8.8</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">项目进度计划</div>
                                <div className="text-xs text-gray-500">实施方案</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">10</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-amber-600">7.5</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">投标报价</div>
                                <div className="text-xs text-gray-500">商务部分</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">10</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-green-600">9.1</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '91%' }}></div>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">公司资质</div>
                                <div className="text-xs text-gray-500">公司实力</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">5</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-green-600">5.0</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot className="bg-gray-50">
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap font-medium">总计</td>
                              <td className="px-4 py-3 whitespace-nowrap font-medium">100</td>
                              <td className="px-4 py-3 whitespace-nowrap font-medium text-indigo-600">85.1</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-700">优化建议</h3>
                  </div>
                  
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <span className="font-bold text-red-600">1</span>
                            </div>
                            <h4 className="font-medium">完善项目实施计划</h4>
                          </div>
                          <p className="text-sm text-gray-600">当前项目进度计划得分率仅75%，建议增加详细的时间节点、里程碑和资源分配计划，提高实施方案的可行性和说服力</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <span className="font-bold text-amber-600">2</span>
                            </div>
                            <h4 className="font-medium">增强安全保障措施</h4>
                          </div>
                          <p className="text-sm text-gray-600">安全模块设计完成度仅60%，建议完善系统安全保障措施，详细阐述数据安全、网络安全、访问控制等方面的具体实施方案</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <span className="font-bold text-green-600">3</span>
                            </div>
                            <h4 className="font-medium">补充项目案例</h4>
                          </div>
                          <p className="text-sm text-gray-600">建议补充2-3个在西安地区已成功实施的同类项目案例，并详细描述项目成效，增强经验说服力</p>
                        </div>
                      </div>
                      
                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <div>
                            <h4 className="font-medium text-indigo-700">AI助力优化建议</h4>
                            <p className="text-sm text-indigo-600 mt-1">DeepSeek大模型分析发现，如果实施上述优化建议，预计总评分可提升至91分以上，中标概率将增加至85%以上，远超竞争对手</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    导出评估报告
                  </button>
                  
                  <div className="space-x-3">
                    <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                      重新评估
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      一键优化
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* 此处可以根据需要添加其他标签页的内容 */}
          </div>
        </div>
      </div>
      
      {/* 底部状态条 */}
      <footer className="bg-white shadow-md py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                DeepSeek-32B模型已连接
              </span>
              <span>|</span>
              <span>最后更新: 2023/06/10 15:30</span>
            </div>
            <div className="text-sm text-gray-600">
              智标系统 v1.0.0 | 中通南方七分公司
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZhitagDemo; 
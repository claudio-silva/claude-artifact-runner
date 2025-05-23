import React, { useState } from 'react';

const ZhitagShenranDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeStep, setActiveStep] = useState(1);
  const [riskScore] = useState(95);
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
            <span className="px-3 py-1 bg-blue-800 rounded-full text-sm">中通信息/南方设计</span>
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
                  <span className="text-sm font-semibold text-amber-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
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
                        <p className="text-3xl font-bold text-green-700">85%</p>
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
                        title: "AI蓝图规划生成",
                        desc: "调用最新的AI战略规划库，生成针对性的AI愿景与蓝图、技术平台规划",
                        time: "20小时"
                      },
                      {
                        title: "场景与实施路线设计",
                        desc: "智能生成场景清单、优先级评估、速赢项目识别及实施路线",
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
                      总耗时：50小时（传统方式需要10-15天）
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
                        <p className="font-medium">深圳燃气人工智能战略规划项目</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">招标单位</p>
                        <p className="font-medium">深圳市燃气集团股份有限公司</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">项目编号</p>
                        <p className="font-medium">KJXXBT-25-003</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">项目预算</p>
                        <p className="font-medium">40万元人民币（含税）</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">服务期</p>
                        <p className="font-medium">1年</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500 mb-1">服务地点</p>
                        <p className="font-medium">深圳市福田区梅坳一路268号</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <h3 className="font-semibold text-gray-700 mb-3">项目关键时间节点</h3>
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
                          <span className="text-sm">投标邀请</span>
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
                            <span className="text-xl font-bold">6</span>
                          </div>
                          <span className="text-xl font-bold text-gray-700">:</span>
                          <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">12</span>
                          </div>
                          <span className="text-xl font-bold text-gray-700">:</span>
                          <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold">28</span>
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
                          <h4 className="font-medium text-blue-700">项目实施方案 (15分)</h4>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">关键评分项</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                          <li>方案内容与需求匹配性、针对性和可实施性强 (11-15分)</li>
                          <li>方案内容与需求匹配性一般，具有一定针对性 (5-10分)</li>
                          <li>方案内容与需求匹配性差 (0-4分)</li>
                          <li><span className="text-red-600">必要证明材料:</span> 详细实施方案(PPT、WORD、视频)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-green-700">重、难点分析及对策 (5分)</h4>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">关键评分项</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                          <li>全面、准确识别规划中的重、难点问题</li>
                          <li>清晰阐述和分析问题</li>
                          <li>针对性解决思路，具有可操作性</li>
                          <li><span className="text-red-600">必要证明材料:</span> 详细实施方案(PPT、WORD、视频)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-amber-50 rounded-lg p-3">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-amber-700">驻场经理（总监）讲标 (20分)</h4>
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">关键评分项</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                          <li>介绍自身优势、成功案例和业绩</li>
                          <li>针对本项目特点制定的实施方案</li>
                          <li>服务承诺和专家问题答辩</li>
                          <li><span className="text-red-600">必要证明材料:</span> 讲标材料和证明文件（有效期内）</li>
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
                          <p className="text-sm font-medium">必须使用成熟方法论体系</p>
                          <p className="text-xs text-gray-500 mt-1">招标文件明确要求"必须套用成熟的方法论体系"，如CMMM、MPTR等，建议在方案中明确选用并详细阐述</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">AI场景优先级评估框架</p>
                          <p className="text-xs text-gray-500 mt-1">需要设计AI场景优先级评估矩阵，从多维度评估场景落地优先级，这是评分重点</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">关注燃气行业AI转型标杆</p>
                          <p className="text-xs text-gray-500 mt-1">招标方强调对标行业领先企业，应在方案中重点对标同业和非同业AI应用领先企业</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">关注生成式AI技术应用</p>
                          <p className="text-xs text-gray-500 mt-1">招标文件提及"AIGC大模型崛起"，应在方案中重点展示大模型技术在燃气行业的应用场景</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-700 p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">关注可行性研究分析</p>
                          <p className="text-xs text-gray-500 mt-1">需要提供完整的可行性研究分析报告，包括建设方案、投资估算、风险管控等</p>
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
                              <div className="font-medium text-gray-900">联想集团</div>
                              <div className="text-xs text-gray-500">AI咨询与战略规划</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                高
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">AI平台经验、能源行业实践</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">偏高 (预计38-40万)</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-600">40%</div>
                            </td>
                          </tr>
                          
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-gray-900">德勤咨询</div>
                              <div className="text-xs text-gray-500">战略与数字化咨询</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                高
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">成熟方法论、国际经验</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">偏高 (预计39-40万)</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-600">35%</div>
                            </td>
                          </tr>
                          
                          <tr>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-gray-900">腾讯云</div>
                              <div className="text-xs text-gray-500">AI战略咨询</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                中
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">AI技术实力、平台优势</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-gray-600">适中 (预计35-38万)</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-blue-600">30%</div>
                            </td>
                          </tr>
                          
                          <tr className="bg-blue-50">
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-blue-800">中通信息/南方设计（本公司）</div>
                              <div className="text-xs text-blue-600">AI战略规划与咨询</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                中高
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-blue-700">DeepSeek大模型技术、能源行业经验</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm text-blue-700">具竞争力 (建议32-35万)</div>
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
                            <p>1. 突出DeepSeek大模型在燃气行业的创新应用方案</p>
                            <p>2. 采用32-35万价格区间，在保证利润情况下形成价格优势</p>
                            <p>3. 强调CMMM等成熟方法论的应用经验和案例</p>
                            <p>4. 特别突出在燃气行业的实施经验和成功案例</p>
                            <p>5. 驻场经理讲标环节准备充分，侧重AI场景落地和技术路线</p>
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
                            name: "方法论证明材料完整性", 
                            status: "已通过", 
                            risk: "无风险",
                            riskLevel: "low" 
                          },
                          { 
                            name: "驻场经理资格证明", 
                            status: "已通过", 
                            risk: "无风险",
                            riskLevel: "low" 
                          },
                          { 
                            name: "响应文件签字盖章", 
                            status: "需修正", 
                            risk: "低风险",
                            riskLevel: "medium" 
                          },
                          { 
                            name: "详细实施方案格式", 
                            status: "已通过", 
                            risk: "无风险",
                            riskLevel: "low" 
                          },
                          { 
                            name: "AI成熟度评估模型", 
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
                        <p>响应文件第23页"驻场经理讲标"部分缺少公司公章，需要补充盖章后重新上传</p>
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
                      <h4 className="font-medium mb-2">项目信息一致性</h4>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>项目名称</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>服务期限</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>服务地点</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">技术方案一致性</h4>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>方法论应用</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>战略规划年限</span>
                        <span className="text-green-600">✓ 一致</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>业务覆盖范围</span>
                        <span className="text-amber-600">! 需核对</span>
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
                    <h3 className="text-lg font-semibold text-gray-700">AI战略规划方案撰写进度</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">80% 完成</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI愿景与蓝图规划</span>
                        <span className="text-green-600 font-medium">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI技术平台规划</span>
                        <span className="text-green-600 font-medium">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI场景与实施路线图</span>
                        <span className="text-blue-600 font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI治理机制建设</span>
                        <span className="text-blue-600 font-medium">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>可行性研究分析</span>
                        <span className="text-amber-600 font-medium">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>重难点分析及对策</span>
                        <span className="text-amber-600 font-medium">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                    <span className="text-sm text-gray-500">预计完成时间：1小时46分钟</span>
                    <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      加速生成
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-700">AI成熟度评估模型</h3>
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
                              AI成熟度双螺旋评估模型
                            </text>
                            
                            {/* 左侧螺旋 - CMMM模型 */}
                            <path d="M130,50 Q100,90 130,130 Q160,170 130,210 Q100,250 130,280" 
                                 fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
                            
                            {/* 右侧螺旋 - AI转型模型 */}
                            <path d="M390,50 Q420,90 390,130 Q360,170 390,210 Q420,250 390,280" 
                                 fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
                            
                            {/* CMMM模型节点 */}
                            <circle cx="130" cy="50" r="15" fill="#3b82f6" />
                            <text x="130" y="54" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="white">L5</text>
                            <circle cx="130" cy="130" r="15" fill="#3b82f6" />
                            <text x="130" y="134" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="white">L3</text>
                            <circle cx="130" cy="210" r="15" fill="#3b82f6" />
                            <text x="130" y="214" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="white">L1</text>
                            
                            {/* AI转型模型节点 */}
                            <circle cx="390" cy="50" r="15" fill="#10b981" />
                            <text x="390" y="54" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="white">L5</text>
                            <circle cx="390" cy="130" r="15" fill="#10b981" />
                            <text x="390" y="134" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="white">L3</text>
                            <circle cx="390" cy="210" r="15" fill="#10b981" />
                            <text x="390" y="214" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="white">L1</text>
                            
                            {/* 连接线 */}
                            <line x1="145" y1="50" x2="375" y2="50" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                            <line x1="145" y1="130" x2="375" y2="130" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                            <line x1="145" y1="210" x2="375" y2="210" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                            
                            {/* 模型名称 */}
                            <text x="130" y="240" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#1e40af" fontWeight="bold">
                              CMMM成熟度模型
                            </text>
                            <text x="390" y="240" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#047857" fontWeight="bold">
                              AI转型框架
                            </text>
                            
                            {/* 当前状态标记 */}
                            <rect x="250" y="120" width="20" height="20" fill="#fcd34d" stroke="#f59e0b" />
                            <text x="260" y="133" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#7c2d12" fontWeight="bold">
                              当前
                            </text>
                            
                            {/* 目标状态标记 */}
                            <circle cx="260" cy="60" r="10" fill="#fb7185" stroke="#e11d48" />
                            <text x="260" y="63" fontFamily="Arial" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">
                              目标
                            </text>
                            
                            {/* 成熟度等级说明 */}
                            <text x="50" y="50" fontFamily="Arial" fontSize="10" textAnchor="end" fill="#475569">优化级 (L5)</text>
                            <text x="50" y="130" fontFamily="Arial" fontSize="10" textAnchor="end" fill="#475569">定义级 (L3)</text>
                            <text x="50" y="210" fontFamily="Arial" fontSize="10" textAnchor="end" fill="#475569">初始级 (L1)</text>
                            
                            {/* 右侧说明 */}
                            <text x="470" y="50" fontFamily="Arial" fontSize="10" textAnchor="start" fill="#475569">持续优化</text>
                            <text x="470" y="130" fontFamily="Arial" fontSize="10" textAnchor="start" fill="#475569">流程规范</text>
                            <text x="470" y="210" fontFamily="Arial" fontSize="10" textAnchor="start" fill="#475569">基础应用</text>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">我们为深圳燃气设计了创新性的"AI成熟度双螺旋评估模型"，将CMMM成熟度模型与AI转型框架深度结合：</p>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                          <li><span className="font-medium">两大维度评估</span>：从流程成熟度(CMMM)和AI应用能力两个维度综合评估企业AI成熟度</li>
                          <li><span className="font-medium">五级成熟度等级</span>：从L1(初始级)到L5(优化级)，精确定位企业AI能力现状，循序渐进规划提升路径</li>
                          <li><span className="font-medium">全面覆盖评估要素</span>：包括技术基础设施、数据治理能力、AI模型应用水平、人才队伍建设、AI治理机制等</li>
                          <li><span className="font-medium">量化评估指标</span>：设计50+细粒度评估指标，确保评估科学性和客观性</li>
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
                              <h4 className="font-medium text-blue-700">双螺旋评估模型</h4>
                            </div>
                            <p className="text-sm text-blue-600">融合CMMM与AI转型框架的创新评估方法，为燃气行业AI成熟度评估提供全新视角</p>
                          </div>
                          
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-purple-700">AI场景优先级评估矩阵</h4>
                            </div>
                            <p className="text-sm text-purple-600">独创多维度评估矩阵，从业务价值、技术可行性、数据准备度、组织胜任力等维度评估AI场景</p>
                          </div>
                          
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-green-700">大模型赋能标杆策略</h4>
                            </div>
                            <p className="text-sm text-green-600">基于DeepSeek大模型，提供标杆企业AI转型策略参考库，为深圳燃气打造专属方案</p>
                          </div>
                          
                          <div className="p-3 bg-amber-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-amber-700">AI实验室建设方案</h4>
                            </div>
                            <p className="text-sm text-amber-600">提供完整的AI实验室组织架构、能力体系和运营机制设计，帮助企业快速搭建AI创新平台</p>
                          </div>
                          
                          <div className="p-3 bg-red-50 rounded-lg">
                            <div className="flex items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <h4 className="font-medium text-red-700">全价值链AI应用图谱</h4>
                            </div>
                            <p className="text-sm text-red-600">覆盖深圳燃气四大业务板块的全价值链AI应用场景图谱，涵盖70+潜在应用场景</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="text-xs text-gray-500 flex justify-between mb-1">
                            <span>方法论应用指数</span>
                            <span className="font-medium">92/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">远超同行业平均水平(75分)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="font-semibold text-gray-700">AI场景与实施路线图</h3>
                      <div>
                        <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                          展开全部
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">安全运营场景</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>AI管网泄漏预测</li>
                            <li>智能巡检机器人</li>
                            <li>视觉识别安全监测</li>
                            <li>异常用气行为分析</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">客户服务场景</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>智能客服机器人</li>
                            <li>用气行为分析</li>
                            <li>需求预测与定价</li>
                            <li>个性化服务推荐</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">经营管理场景</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>需求预测与供应链优化</li>
                            <li>智能决策支持系统</li>
                            <li>运营效率分析优化</li>
                            <li>设备寿命预测与维护</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">综合能源场景</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>多能源协同调度</li>
                            <li>能源使用效率优化</li>
                            <li>碳排放监测与管理</li>
                            <li>分布式能源管理</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">上游资源场景</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>气源采购优化</li>
                            <li>LNG价格预测</li>
                            <li>储配设施智能调度</li>
                            <li>气源结构优化</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <h4 className="font-medium">智慧服务场景</h4>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                            <li>燃气工程智能设计</li>
                            <li>工程质量AI监测</li>
                            <li>设备智能诊断</li>
                            <li>服务效率优化</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-700 mb-2">实施路线图</h4>
                        <div className="relative">
                          <div className="absolute top-0 bottom-0 left-12 w-0.5 bg-blue-200"></div>
                          
                          <div className="relative mb-8">
                            <div className="flex items-center mb-2">
                              <div className="absolute left-0 w-24 h-8 flex items-center justify-center bg-blue-600 text-white text-sm rounded font-medium">
                                短期(0-1年)
                              </div>
                              <div className="ml-28">
                                <span className="font-medium">夯实基础，速赢示范</span>
                              </div>
                            </div>
                            <div className="ml-28 text-sm text-gray-600">
                              建立AI组织与治理体系，完成1-2个高价值速赢项目，如智能客服和管网泄漏预测
                            </div>
                          </div>
                          
                          <div className="relative mb-8">
                            <div className="flex items-center mb-2">
                              <div className="absolute left-0 w-24 h-8 flex items-center justify-center bg-green-600 text-white text-sm rounded font-medium">
                                中期(1-3年)
                              </div>
                              <div className="ml-28">
                                <span className="font-medium">能力拓展，全面推进</span>
                              </div>
                            </div>
                            <div className="ml-28 text-sm text-gray-600">
                              建成统一AI技术平台，拓展10+业务场景应用，覆盖四大业务板块核心流程
                            </div>
                          </div>
                          
                          <div className="relative">
                            <div className="flex items-center mb-2">
                              <div className="absolute left-0 w-24 h-8 flex items-center justify-center bg-purple-600 text-white text-sm rounded font-medium">
                                长期(3-5年)
                              </div>
                              <div className="ml-28">
                                <span className="font-medium">深度融合，价值创新</span>
                              </div>
                            </div>
                            <div className="ml-28 text-sm text-gray-600">
                              AI全面融入业务流程，形成数智化运营新模式，打造行业AI应用标杆
                            </div>
                          </div>
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
                              <p className="text-sm text-gray-500">含税总价，含所有服务内容</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">¥348,000</div>
                              <div className="text-sm text-gray-500">不含税价格：¥308,000</div>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: '87%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>最低安全线：¥320,000</span>
                            <span>最高限价：¥400,000</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3 mb-6">
                          <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="font-medium">报价策略分析</p>
                              <p className="text-sm text-gray-600 mt-1">当前报价位于最高限价的87%位置，低于最高限价13%，比主要竞争对手(联想、德勤)低12-15%。此价格既保持价格优势，又能保证合理利润，同时消除决策者对低价导致服务质量下降的顾虑。</p>
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
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">行业均价对比</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">AI现状评估与诊断</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">80,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">23.0%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-green-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                      </svg>
                                      低10%
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">AI用例规划和蓝图设计</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">120,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">34.5%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-red-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                      </svg>
                                      高5%
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="font-medium">AI场景落地蓝图规划</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">98,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">28.2%</td>
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
                                  <div className="font-medium">AI组织与运营能力规划</div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">50,000</td>
                                <td className="px-4 py-3 whitespace-nowrap">14.3%</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    <div className="text-green-600 font-medium flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                      </svg>
                                      低15%
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
                            <span className="text-lg font-bold text-blue-700">22.8%</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '76%' }}></div>
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
                              <span className="text-sm font-medium">¥348,000</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">预计总成本</span>
                              <span className="text-sm font-medium">¥268,656</span>
                            </div>
                            <div className="text-xs text-gray-500">包含人工、差旅、项目管理等</div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">预计毛利</span>
                              <span className="text-sm font-medium text-green-600">¥79,344</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">预计回款时间</span>
                              <span className="text-sm font-medium">分3次支付</span>
                            </div>
                            <div className="text-xs text-gray-500">合同签订30%、交付50%、验收20%</div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                          <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium text-amber-700">报价策略合理，与同类项目相比性价比突出</span>
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
                              strokeDasharray="88, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-indigo-600">
                            88%
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">总体竞争力评分</h3>
                        <p className="text-sm text-gray-500 text-center mt-1">优秀 (行业平均: 78%)</p>
                        
                        <div className="w-full mt-4 space-y-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">技术方案</span>
                              <span className="font-medium">92%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">价格竞争力</span>
                              <span className="font-medium">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">讲标能力</span>
                              <span className="font-medium">78%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">企业资质</span>
                              <span className="font-medium">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
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
                            <p className="text-3xl font-bold text-green-700">76.5%</p>
                            <p className="text-sm text-gray-600 mt-1">高于行业平均值22%</p>
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
                            <span className="text-sm">方法论应用优势</span>
                          </div>
                          <span className="text-sm font-medium">+22.3%</span>
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
                            <span className="text-sm">AI技术能力</span>
                          </div>
                          <span className="text-sm font-medium">+25.5%</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                            <span className="text-sm">燃气行业经验</span>
                          </div>
                          <span className="text-sm font-medium">+10.0%</span>
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
                              <h4 className="text-sm font-medium text-green-700">双螺旋评估模型创新</h4>
                              <p className="text-xs text-green-600 mt-1">我方独创的"AI成熟度双螺旋评估模型"融合CMMM与AI转型框架，提供了更全面的评估方法，远超竞争对手</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="flex items-start mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h4 className="text-sm font-medium text-blue-700">DeepSeek大模型赋能</h4>
                              <p className="text-xs text-blue-600 mt-1">我方方案融合DeepSeek大模型技术，为燃气行业AI场景提供更智能、更精准的解决方案</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="flex items-start mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h4 className="text-sm font-medium text-purple-700">价格竞争优势</h4>
                              <p className="text-xs text-purple-600 mt-1">我方报价与技术方案匹配度高，相比其他对手低10-15%的价格提供同等甚至更高质量服务</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 p-3 rounded-lg">
                          <div className="flex items-start mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h4 className="text-sm font-medium text-amber-700">AI场景优先级评估矩阵</h4>
                              <p className="text-xs text-amber-600 mt-1">我方独创的多维度评估矩阵，能够高效识别燃气行业高价值AI场景，避免资源错配</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">建议进一步提升的方面</h4>
                        <ul className="text-xs text-gray-600 space-y-1 ml-5 list-disc">
                          <li>补充更多燃气行业AI应用成功案例</li>
                          <li>加强讲标环节的针对性，特别是专家问题预设</li>
                          <li>完善可行性研究分析报告的投资收益测算</li>
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
                                <div className="font-medium text-gray-900">项目实施方案</div>
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
                                <div className="font-medium text-gray-900">重难点分析及对策</div>
                                <div className="text-xs text-gray-500">技术方案</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">5</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-amber-600">4.2</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '84%' }}></div>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">驻场经理讲标</div>
                                <div className="text-xs text-gray-500">讲标能力</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm">20</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="text-sm font-medium text-amber-600">17.5</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot className="bg-gray-50">
                            <tr>
                              <td className="px-4 py-3 whitespace-nowrap font-medium">总计</td>
                              <td className="px-4 py-3 whitespace-nowrap font-medium">40</td>
                              <td className="px-4 py-3 whitespace-nowrap font-medium text-indigo-600">35.2</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '88%' }}></div>
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
                            <h4 className="font-medium">加强重难点分析</h4>
                          </div>
                          <p className="text-sm text-gray-600">当前重难点分析得分率84%，建议补充燃气行业特有的AI应用困难点，如多源异构数据整合、安全生产要求等</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <span className="font-bold text-amber-600">2</span>
                            </div>
                            <h4 className="font-medium">强化讲标能力</h4>
                          </div>
                          <p className="text-sm text-gray-600">讲标环节得分率88%，建议对驻场经理进行系统培训，特别是增强对专家问题的预判和应答能力</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <span className="font-bold text-green-600">3</span>
                            </div>
                            <h4 className="font-medium">补充行业案例</h4>
                          </div>
                          <p className="text-sm text-gray-600">建议补充2-3个燃气行业AI应用成功案例，特别是与深圳燃气业务相近的应用场景</p>
                        </div>
                      </div>
                      
                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <div>
                            <h4 className="font-medium text-indigo-700">AI助力优化建议</h4>
                            <p className="text-sm text-indigo-600 mt-1">DeepSeek大模型分析显示，如果实施上述优化建议，预计总评分可提升至38分以上，中标概率将增加至85%，远超竞争对手</p>
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
              <span>最后更新: 2025/05/15 10:30</span>
            </div>
            <div className="text-sm text-gray-600">
              智标系统 v1.2.0 | 中通信息/南方设计
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZhitagShenranDemo;
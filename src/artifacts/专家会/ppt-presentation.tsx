import React, { useState, useEffect } from 'react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 9;
  
  // 添加键盘导航功能
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 1) {
        setCurrentSlide(currentSlide - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="flex-1 flex items-center justify-center p-2">
        <div className="relative w-full max-w-[95%] aspect-[16/9] bg-white shadow-xl overflow-hidden rounded-xl border border-gray-200">
          {/* 页码指示器 - 更优雅的设计 */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg shadow-md z-10 text-sm font-medium">
            {currentSlide} / {totalSlides}
          </div>

          {/* 幻灯片内容 */}
          <div className="w-full h-full">
            {/* 封面页 */}
            {currentSlide === 1 && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-white text-blue-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-blue-500"></div>
                <div className="mb-6 text-blue-600 font-light tracking-wider">中通信息/南方设计</div>
                <h1 className="text-5xl font-bold mb-6 tracking-tight text-blue-900">智标系统</h1>
                <h2 className="text-3xl font-light mb-10 tracking-wide text-blue-800">AI驱动的标书智能辅助平台</h2>
                <p className="text-xl mb-16 font-medium tracking-wide text-blue-700">以智慧破解标书痛点，以创新提升中标率</p>
                <div className="mt-auto relative z-10">
                  <p className="text-lg font-light">2025年5月15日</p>
                  <p className="mt-3 text-blue-600 uppercase tracking-widest text-sm">专家技术交流会</p>
                </div>
              </div>
            )}

            {/* 行业背景与挑战 */}
            {currentSlide === 2 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-700 mb-5 border-b-2 border-blue-200 pb-3 inline-block">
                  <span className="bg-blue-700 w-3 h-10 mr-3 align-text-bottom inline-block rounded"></span>
                  行业背景与挑战
                </h2>
                <div className="grid grid-cols-2 gap-6 h-4/5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-xl shadow-sm border border-indigo-100 transform transition-transform hover:scale-[1.02]">
                      <h3 className="text-xl font-semibold text-indigo-700 mb-2">市场规模</h3>
                      <p>全国每年标书业务超过5万亿元市场规模</p>
                      <p>竞争日趋激烈，高质量标书是赢得项目的关键</p>
                    </div>
                    
                    <div className="bg-teal-50 p-3 rounded-xl shadow-sm border border-teal-100 transform transition-transform hover:scale-[1.02]">
                      <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center">
                        <span className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm mr-2">2</span>
                        效率挑战
                      </h3>
                      <p>传统标书制作耗时长（平均25人天）</p>
                      <p>高质量技术标准备成本高昂</p>
                      <p>专业人员短缺，难以快速响应</p>
                    </div>
                    
                    <div className="bg-rose-50 p-3 rounded-xl shadow-sm border border-rose-100 transform transition-transform hover:scale-[1.02]">
                      <h3 className="text-xl font-semibold text-rose-700 mb-2 flex items-center">
                        <span className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white text-sm mr-2">3</span>
                        风险现状
                      </h3>
                      <p>商务废标率高达15%</p>
                      <p>技术评分普遍低于竞争对手3-5分</p>
                      <p>标书质量波动大，依赖个人经验</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full h-64 bg-blue-50 rounded-xl shadow-md border border-blue-200 flex items-center justify-center transform transition-all hover:shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-700 mb-4">近3年标书业务分析</div>
                        <div className="flex justify-around w-full px-8">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-blue-800">75%</div>
                            <div className="text-sm text-gray-600">人工时间消耗</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-blue-800">42%</div>
                            <div className="text-sm text-gray-600">平均中标率</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-red-600">12%</div>
                            <div className="text-sm text-gray-600">废标率</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl shadow-sm">
                      <p className="text-lg font-medium text-yellow-800">业内共识：</p>
                      <p className="italic">标书质量的提升每增加10%，中标率提升约15%-25%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 标书业务痛点全景分析 */}
            {currentSlide === 3 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-800 mb-5 pb-3 border-b-2 border-blue-200 inline-block">
                  <span className="bg-blue-800 w-3 h-10 mr-3 align-text-bottom inline-block rounded"></span>
                  标书业务痛点全景分析
                </h2>
                
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-100">
                    <h3 className="text-xl font-semibold text-amber-700 mb-3 text-center pb-2 border-b border-amber-200">商务痛点</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <p className="font-medium text-red-800">商务废标风险高</p>
                          <p className="text-sm text-gray-700">资质证明材料不全或错误导致直接废标</p>
                          <p className="text-sm text-gray-700">投标报价格式不规范或计算错误</p>
                          <p className="text-sm text-gray-700">关键章节漏签或盖章位置错误</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <p className="font-medium text-red-800">投标文件一致性问题</p>
                          <p className="text-sm text-gray-700">多处出现的金额、数量等信息前后不一致</p>
                          <p className="text-sm text-gray-700">商务文件与技术文件之间的描述矛盾</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <p className="font-medium text-red-800">报价策略盲区</p>
                          <p className="text-sm text-gray-700">缺乏对竞争对手报价策略的分析预判</p>
                          <p className="text-sm text-gray-700">难以找到最佳价格平衡点</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-sky-50 p-4 rounded-xl shadow-sm border border-sky-100">
                    <h3 className="text-xl font-semibold text-sky-700 mb-3 text-center pb-2 border-b border-sky-200">技术痛点</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <p className="font-medium text-blue-800">针对性不足</p>
                          <p className="text-sm text-gray-700">技术方案过于模板化，缺乏对项目特点的针对性响应</p>
                          <p className="text-sm text-gray-700">无法快速提取招标文件中的隐性需求和评分点</p>
                          <p className="text-sm text-gray-700">技术承诺与招标要求匹配度不高</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <p className="font-medium text-blue-800">篇幅与重点把控困难</p>
                          <p className="text-sm text-gray-700">关键技术点未能给予足够篇幅详细阐述</p>
                          <p className="text-sm text-gray-700">非关键部分篇幅过大，冲淡核心竞争优势</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <p className="font-medium text-blue-800">技术方案说服力不足</p>
                          <p className="text-sm text-gray-700">缺乏有力的技术论证和实施路径</p>
                          <p className="text-sm text-gray-700">创新点不突出，难以形成差异化优势</p>
                          <p className="text-sm text-gray-700">图表数量不足或质量不高，直观性差</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-slate-50 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">真实案例：深圳燃气人工智能战略规划项目失分点分析</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-2 bg-orange-50 rounded border border-orange-200">
                      <p className="text-sm font-medium text-orange-700">评审项目"重难点分析及对策"(5分)仅得2分</p>
                      <p className="text-xs text-gray-600">原因：未能全面识别燃气行业AI应用的重难点问题</p>
                    </div>
                    <div className="p-2 bg-orange-50 rounded border border-orange-200">
                      <p className="text-sm font-medium text-red-700">驻场经理讲标环节(20分)仅得14分</p>
                      <p className="text-xs text-gray-600">原因：案例针对性不足，应对评委提问准备不充分</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 深圳燃气项目标书分析 */}
            {currentSlide === 4 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-700 mb-5 pb-3 border-b-2 border-blue-200 inline-block">
                  <span className="bg-blue-700 w-3 h-10 mr-3 align-text-bottom inline-block rounded"></span>
                  深圳燃气项目标书分析
                </h2>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">项目概述</h3>
                      <div className="space-y-2">
                        <p><span className="font-medium">项目名称：</span>深圳燃气人工智能战略规划项目</p>
                        <p><span className="font-medium">项目编号：</span>KJXXBT-25-003</p>
                        <p><span className="font-medium">采购人：</span>深圳市燃气集团股份有限公司</p>
                        <p><span className="font-medium">服务期：</span>1年</p>
                        <p><span className="font-medium">最高限价：</span>40万元人民币（含税）</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-yellow-700 mb-2">隐性评分点</h3>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>燃气行业AI应用深度理解</li>
                        <li>成熟方法论的应用（CMMM、MPTR等）</li>
                        <li>AI技术前沿把握能力</li>
                        <li>AI价值场景梳理的专业性</li>
                        <li>深圳市AI政策理解与落地</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">评分标准解读（40分）</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                        <p className="font-medium text-blue-800">项目实施方案（15分）</p>
                        <p className="text-sm">关键词：<span className="text-blue-600">匹配性、针对性、可实施性</span></p>
                        <p className="text-sm">高分要求：方案与需求高度匹配，针对性和可实施性强，拟投入人员经验丰富</p>
                      </div>
                      
                      <div className="p-3 bg-white rounded border-l-4 border-green-500">
                        <p className="font-medium text-green-800">重难点分析及对策（5分）</p>
                        <p className="text-sm">关键词：<span className="text-green-600">全面识别、准确分析、解决思路</span></p>
                        <p className="text-sm">高分要求：全面识别规划中的重难点问题，提出可操作性强的解决思路</p>
                      </div>
                      
                      <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                        <p className="font-medium text-purple-800">驻场经理（总监）讲标（20分）</p>
                        <p className="text-sm">关键词：<span className="text-purple-600">自身优势、成功案例、实施方案</span></p>
                        <p className="text-sm">高分要求：展示自身优势和成功案例，针对性强的实施方案，答辩表现出色</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-lg font-medium text-green-800 mb-2">关键需求分析</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-2 bg-white rounded">
                      <p className="text-sm font-medium text-green-700">AI战略规划</p>
                      <p className="text-xs">制定3-5年人工智能战略愿景和路线图</p>
                    </div>
                    <div className="p-2 bg-white rounded">
                      <p className="text-sm font-medium text-green-700">四大业务板块</p>
                      <p className="text-xs">城市燃气、上游资源、综合能源、智慧服务</p>
                    </div>
                    <div className="p-2 bg-white rounded">
                      <p className="text-sm font-medium text-green-700">AI技术平台</p>
                      <p className="text-xs">统一的AI技术平台规划，提供工具和服务</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 智标系统解决方案 */}
            {currentSlide === 5 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-700 mb-5 pb-3 border-b-2 border-blue-200 inline-block flex items-center">
                  <span className="w-10 h-10 bg-blue-700 text-white rounded-full mr-4 flex items-center justify-center">方案</span>
                  智标系统解决方案
                </h2>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">系统定位与价值</h3>
                    <div className="p-4 bg-blue-50 rounded-lg mb-6">
                      <p className="text-lg font-medium text-blue-800 mb-2">专为标书业务打造的AI辅助平台</p>
                      <p className="mb-4">集招标分析、风险控制、智能生成、审核优化、导出管理于一体的全流程标书智能化解决方案</p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-3 bg-white rounded-lg text-center">
                          <p className="text-3xl font-bold text-green-600">↓85%</p>
                          <p className="text-sm">标书编制时间</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg text-center">
                          <p className="text-3xl font-bold text-green-600">↓95%</p>
                          <p className="text-sm">废标风险</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg text-center">
                          <p className="text-3xl font-bold text-green-600">↑35%</p>
                          <p className="text-sm">中标率</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg text-center">
                          <p className="text-3xl font-bold text-green-600">↓70%</p>
                          <p className="text-sm">人力成本</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">技术亮点</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span>大模型驱动的文本理解与生成</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span>行业知识图谱增强的专业分析</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span>多模态分析引擎（文字、表格、图形）</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span>评分标准智能提取与匹配技术</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">五大核心模块</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                          <div>
                            <p className="font-medium text-blue-800">招标文件智能分析</p>
                            <p className="text-sm">自动识别评分标准、关键需求与隐性评分点</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-red-100 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                          <div>
                            <p className="font-medium text-red-800">商务风险智能控制</p>
                            <p className="text-sm">商务废标风险智能检测与一致性自动校验</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-green-100 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                          <div>
                            <p className="font-medium text-green-800">AI技术方案智能生成</p>
                            <p className="text-sm">针对性技术方案智能生成与优化</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                          <div>
                            <p className="font-medium text-yellow-800">竞争分析与报价策略</p>
                            <p className="text-sm">竞争对手分析与最优报价区间建议</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
                          <div>
                            <p className="font-medium text-purple-800">标书导出与讲标辅助</p>
                            <p className="text-sm">标书智能导出与讲标PPT自动生成</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 招标文件智能分析演示 */}
            {currentSlide === 6 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-700 mb-5 pb-3 border-b-2 border-blue-200 inline-block flex items-center">
                  <span className="w-10 h-10 bg-blue-700 text-white rounded-full mr-4 flex items-center justify-center">演示</span>
                  招标文件智能分析演示
                </h2>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">以深圳燃气项目为例</h3>
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 text-white">
                      <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
                        <p className="font-medium">智标系统 - 文件分析界面</p>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-2 mb-3">
                        <p className="text-sm text-gray-300">正在分析：深圳燃气人工智能战略规划项目</p>
                        <div className="w-full bg-gray-600 h-2 rounded-full mt-1">
                          <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-3 mb-3">
                        <p className="text-sm font-medium mb-2">评分标准识别结果：</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <p>项目实施方案（15分）</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <p>重难点分析及对策（5分）</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <p>驻场经理（总监）讲标（20分）</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-3">
                        <p className="text-sm font-medium mb-2">关键需求提取结果：</p>
                        <div className="space-y-1 text-xs">
                          <p>• 制定人工智能战略愿景</p>
                          <p>• 规划短期、中长期实施路线图</p>
                          <p>• 四大业务板块：城市燃气、上游资源、综合能源、智慧服务</p>
                          <p>• 项目周期：12周</p>
                          <p>• 交付物：《现状评估与诊断报告》、《AI场景落地蓝图规划》等</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="font-medium text-green-800">分析效果对比</p>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="p-2 bg-white rounded border border-green-100">
                          <p className="text-sm font-medium">传统方式</p>
                          <p className="text-xs">2-3人，8小时分析</p>
                          <p className="text-xs">人工易漏关键点</p>
                        </div>
                        <div className="p-2 bg-white rounded border border-green-100">
                          <p className="text-sm font-medium">智标系统</p>
                          <p className="text-xs">1人，20分钟完成</p>
                          <p className="text-xs">准确率95%以上</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">隐性评分点智能发现</h3>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                      <p className="font-medium text-yellow-800 mb-2">方法论识别</p>
                      <div className="p-3 bg-white rounded-lg text-sm">
                        <p>• 识别"必须套用成熟的方法论体系"关键字</p>
                        <p>• 提取列举的"CMMM成熟度模型、MPTR诊断框架、IDO数据驱动组织方法论、EA方法论、AI转型框架或CJM"方法论清单</p>
                        <p>• <span className="text-red-600 font-medium">评分影响：</span>实施方案不采用成熟方法论会导致扣分</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                      <p className="font-medium text-yellow-800 mb-2">AI成熟度评估需求</p>
                      <div className="p-3 bg-white rounded-lg text-sm">
                        <p>• 识别"体系化、结构化地分析当前深圳燃气AI建设现状"</p>
                        <p>• 提取"形成现状诊断和成熟度评估报告"关键需求</p>
                        <p>• <span className="text-red-600 font-medium">评分影响：</span>成熟度评估方法对实施方案评分关键</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-medium text-yellow-800 mb-2">讲标关键点</p>
                      <div className="p-3 bg-white rounded-lg text-sm">
                        <p>• 识别"驻场项目经理（总监）向评标专家介绍"</p>
                        <p>• 提取需要展示的"自身优势、成功案例和业绩、针对本项目特点制定的实施方案和服务承诺"内容</p>
                        <p>• 发现需要"答辩"环节的准备</p>
                        <p>• <span className="text-red-600 font-medium">评分影响：</span>占比最高(20分)，答辩准备充分至关重要</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI驱动的技术方案智能生成 */}
            {currentSlide === 7 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-700 mb-5 pb-3 border-b-2 border-blue-200 inline-block flex items-center">
                  <span className="w-10 h-10 bg-green-600 text-white rounded-full mr-4 flex items-center justify-center">AI</span>
                  AI驱动的技术方案智能生成
                </h2>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">基于深圳燃气案例</h3>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="font-medium text-blue-800 mb-3">自动构建评分匹配方案框架</p>
                      <div className="bg-white p-3 rounded text-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</div>
                          <p className="font-medium">项目实施方案（对应15分）</p>
                        </div>
                        <ul className="pl-6 list-disc space-y-1 text-gray-700">
                          <li>工作思路与方法论（CMMM成熟度模型）</li>
                          <li>项目初步规划方案与实施路径</li>
                          <li>工作计划与质量保障措施</li>
                          <li>人员投入保障与项目特色亮点</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium text-blue-800 mb-3">行业案例智能匹配</p>
                      <div className="bg-white p-3 rounded text-sm">
                        <p className="text-gray-700 mb-2">基于AI驱动的知识库，系统自动匹配：</p>
                        <ul className="pl-6 list-disc space-y-1 text-gray-700">
                          <li>国内燃气行业AI应用成功案例</li>
                          <li>公共事业领域生成式AI的最新应用</li>
                          <li>行业领先的AI成熟度评估方法论</li>
                          <li>燃气行业特有的AI场景分析模型</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">差异化亮点自动生成</h3>
                    
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 text-white">
                      <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
                        <p className="font-medium">智标系统 - 方案生成预览</p>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-3 mb-3 text-sm">
                        <p className="font-medium mb-1">重难点分析及对策（针对5分项）</p>
                        <p className="text-xs text-gray-300 mb-2">基于燃气行业AI规划的重难点分析：</p>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-gray-600 rounded">
                            <p className="font-medium text-blue-300">重点1：数据质量与集成挑战</p>
                            <p>燃气行业数据分散、异构、质量参差不齐，影响AI模型效果</p>
                            <p className="text-green-300 mt-1">对策：建立数据治理体系，设计ETL标准，构建统一数据湖</p>
                          </div>
                          <div className="p-2 bg-gray-600 rounded">
                            <p className="font-medium text-blue-300">重点2：安全生产与AI结合的可靠性</p>
                            <p>燃气安全生产容错率低，AI应用需高可靠性保障</p>
                            <p className="text-green-300 mt-1">对策：构建"人机协同"架构，AI辅助决策+人工审核的双保险机制</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-3 text-sm">
                        <p className="font-medium mb-1">差异化方案亮点</p>
                        <div className="p-2 bg-gray-600 rounded mt-2 text-xs">
                          <p className="font-medium text-yellow-300">AI成熟度双螺旋评估模型</p>
                          <p>创新性地将CMMM与AI转型框架结合，形成双螺旋评估模型，特别适合燃气行业的数字化转型评估</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-medium text-green-800 mb-2">时间效益对比</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white rounded border border-green-100">
                          <p className="text-sm font-medium">传统方式</p>
                          <p className="text-xs">2-3人，3天完成初稿</p>
                          <p className="text-xs">1-2天评审与修改</p>
                          <p className="text-red-600 text-xs font-medium">共需5天，6人天</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-green-100">
                          <p className="text-sm font-medium">智标系统</p>
                          <p className="text-xs">AI生成初稿仅需2小时</p>
                          <p className="text-xs">人工审核优化4小时</p>
                          <p className="text-green-600 text-xs font-medium">共需6小时，1人天</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 商务风险智能控制 */}
            {currentSlide === 8 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-700 mb-5 pb-3 border-b-2 border-blue-200 inline-block flex items-center">
                  <span className="w-10 h-10 bg-red-600 text-white rounded-full mr-4 flex items-center justify-center">风险</span>
                  商务风险智能控制
                </h2>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">深圳燃气案例风险点识别</h3>
                    
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-2">!</div>
                        <p className="font-medium text-red-800">智标系统检测到的关键风险点</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg border-l-4 border-red-500">
                          <p className="font-medium text-red-700">资质要求风险</p>
                          <p className="text-sm">需提供AI咨询相关资质证明，建议提供：</p>
                          <ul className="text-xs pl-5 list-disc mt-1">
                            <li>信息系统咨询设计资质证书</li>
                            <li>软件能力成熟度模型(CMMI)认证</li>
                            <li>ISO9001质量管理体系认证</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-white rounded-lg border-l-4 border-red-500">
                          <p className="font-medium text-red-700">响应文件格式风险</p>
                          <p className="text-sm">检测到以下格式问题：</p>
                          <ul className="text-xs pl-5 list-disc mt-1 text-red-600">
                            <li>资质证明材料未按要求提供原件备查说明</li>
                            <li>报价清单格式与招标文件不完全一致</li>
                            <li>电子版与纸质版封面不一致</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-white rounded-lg border-l-4 border-yellow-500">
                          <p className="font-medium text-yellow-700">报价合规性风险</p>
                          <p className="text-sm">最高限价：40万元人民币（含税）</p>
                          <p className="text-xs mt-1">当前报价：39.8万元（税率13%），建议调整为38.5万元，降低与限价过于接近的风险</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">一致性自动校验</h3>
                    
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 text-white">
                      <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
                        <p className="font-medium">智标系统 - 一致性检查</p>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-3 mb-3 text-sm">
                        <p className="font-medium mb-2">文件一致性检查结果：</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <p><span className="text-red-400">服务期限</span>：技术方案中写为"10个月"，商务文件写为"12个月"</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <p><span className="text-red-400">项目经理</span>：简历资料与授权书中名称不一致</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <p><span className="text-green-400">服务地点</span>：各文件一致</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <p><span className="text-green-400">交付物清单</span>：各文件一致</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-red-800 bg-opacity-40 rounded p-3 text-sm">
                        <p className="font-medium mb-2">高风险项：签章完整性</p>
                        <div className="p-2 bg-gray-600 rounded">
                          <p className="text-red-300">检测到授权委托书缺少法人签字，高风险！</p>
                          <p className="text-xs mt-1">废标风险：95%；建议：立即补充法人签字</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-medium text-green-800 mb-2">风险控制效益</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white rounded border border-green-100">
                          <p className="text-sm font-medium">废标风险检出率</p>
                          <p className="text-2xl font-bold text-green-600">98%</p>
                          <p className="text-xs text-gray-500">基于历史废标案例库训练</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-green-100">
                          <p className="text-sm font-medium">一致性问题修复</p>
                          <p className="text-2xl font-bold text-green-600">一键修正</p>
                          <p className="text-xs text-gray-500">自动同步所有相关文件</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg mt-4">
                        <p className="text-xs font-medium text-yellow-800">客户实际案例</p>
                        <p className="text-xs">某能源项目在提交前30分钟，系统检测出授权委托书公章位置错误问题，及时修正避免废标，挽回200万项目</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 竞争分析与报价策略 */}
            {currentSlide === 9 && (
              <div className="w-full h-full p-6 bg-white">
                <h2 className="text-3xl font-bold text-blue-700 mb-5 pb-3 border-b-2 border-blue-200 inline-block flex items-center">
                  <span className="w-10 h-10 bg-amber-500 text-white rounded-full mr-4 flex items-center justify-center">策略</span>
                  竞争分析与报价策略
                </h2>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">竞争情报分析</h3>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-lg font-medium text-blue-800 mb-3">深圳燃气信息化项目投标分析</p>
                      
                      <div className="bg-white p-3 rounded-lg mb-3">
                        <p className="font-medium text-gray-800 mb-2">近3年中标供应商分布</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 bg-blue-100 rounded">
                            <p className="text-sm font-medium">公司A</p>
                            <p className="text-xs">5个项目</p>
                          </div>
                          <div className="p-2 bg-blue-100 rounded">
                            <p className="text-sm font-medium">公司B</p>
                            <p className="text-xs">3个项目</p>
                          </div>
                          <div className="p-2 bg-blue-100 rounded">
                            <p className="text-sm font-medium">公司C</p>
                            <p className="text-xs">2个项目</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg">
                        <p className="font-medium text-gray-800 mb-2">同类咨询项目报价区间</p>
                        <div className="h-8 bg-gradient-to-r from-green-100 via-blue-100 to-red-100 rounded-lg relative">
                          <div className="absolute left-[10%] top-full mt-1 text-xs">30万</div>
                          <div className="absolute left-[65%] top-full mt-1 text-xs">35万</div>
                          <div className="absolute right-0 top-full mt-1 text-xs">40万</div>
                          <div className="absolute left-[45%] top-0 -mt-2 text-xs font-medium">中标集中区</div>
                          <div className="absolute left-[45%] w-[20%] h-full border-2 border-dashed border-blue-500 bg-blue-100 bg-opacity-50 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-medium text-yellow-800 mb-2">竞争对手技术评分分析</p>
                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-sm text-gray-700 mb-2">AI咨询项目评分关键差异点：</p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            <p className="text-sm">公司A优势：燃气行业经验丰富，案例针对性强</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            <p className="text-sm">公司B优势：AI技术先进性，行业专家团队</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <p className="text-sm">我方优势：方法论完备，实施路径清晰</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">智能报价策略</h3>
                    
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 text-white">
                      <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-2">
                        <p className="font-medium">智标系统 - 报价策略推荐</p>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-3 mb-3">
                        <p className="text-sm font-medium mb-2">深圳燃气项目最优报价区间</p>
                        <div className="p-2 bg-green-800 bg-opacity-30 rounded text-xs">
                          <p className="mb-1">建议报价区间：<span className="text-green-300 font-medium">35-38万元</span></p>
                          <p>理由：</p>
                          <ul className="pl-4 list-disc space-y-1 mt-1">
                            <li>历史中标数据显示35-37万最具竞争力</li>
                            <li>与限价保持适当距离，避免评委质疑</li>
                            <li>利润率与中标率的最佳平衡点</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 rounded p-3">
                        <p className="text-sm font-medium mb-2">关键模块报价分配建议</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 bg-gray-600 rounded">
                            <p className="font-medium">AI咨询与规划服务</p>
                            <p className="text-blue-300">22.5万元 (60%)</p>
                          </div>
                          <div className="p-2 bg-gray-600 rounded">
                            <p className="font-medium">行业调研分析服务</p>
                            <p className="text-blue-300">7.5万元 (20%)</p>
                          </div>
                          <div className="p-2 bg-gray-600 rounded">
                            <p className="font-medium">AI蓝图设计服务</p>
                            <p className="text-blue-300">5.6万元 (15%)</p>
                          </div>
                          <div className="p-2 bg-gray-600 rounded">
                            <p className="font-medium">其他专业服务</p>
                            <p className="text-blue-300">1.9万元 (5%)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-medium text-green-800 mb-2">中标概率与利润平衡分析</p>
                      <div className="p-3 bg-white rounded">
                        <div className="grid grid-cols-3 gap-2 text-center mb-3">
                          <div className="p-2">
                            <p className="text-xs text-gray-500">低价策略</p>
                            <p className="text-sm font-medium">32万元</p>
                            <p className="text-xs text-red-500">低利润</p>
                          </div>
                          <div className="p-2 bg-blue-50 rounded border border-blue-200">
                            <p className="text-xs text-gray-500">平衡策略</p>
                            <p className="text-sm font-medium">37.5万元</p>
                            <p className="text-xs text-green-500">最优选择</p>
                          </div>
                          <div className="p-2">
                            <p className="text-xs text-gray-500">高价策略</p>
                            <p className="text-sm font-medium">39.8万元</p>
                            <p className="text-xs text-red-500">低中标率</p>
                          </div>
                        </div>
                        
                        <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                          <p className="text-xs text-center">基于历史数据分析，37.5万元报价可实现65%中标率与25%利润率的最佳平衡</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* 底部控制栏 - 更现代化设计 */}
      <div className="h-16 bg-blue-800 text-white flex items-center justify-center shadow-md">
        <div className="flex items-center space-x-6">
          <div className="text-sm opacity-80">
            使用键盘 ← → 箭头键导航
          </div>
          <div className="flex items-center">
            <div className="w-8 h-1 rounded-full bg-white opacity-60"></div>
            {[...Array(totalSlides)].map((_, index) => (
              <div 
                key={index} 
                onClick={() => setCurrentSlide(index + 1)}
                className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentSlide === index + 1 ? 'bg-white' : 'bg-white bg-opacity-40 hover:bg-opacity-60'}`}
              ></div>
            ))}
            <div className="w-8 h-1 rounded-full bg-white opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

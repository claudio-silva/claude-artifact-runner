import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart2, Clock, DollarSign, CheckCircle, Users, Award, FileText, Search, Layout, PenTool, ArrowRight, Zap, Database, Book } from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* 幻灯片容器 */}
      <div className="w-full h-full">
        {currentSlide === 0 && <CoverSlide />}
        {currentSlide === 1 && <IntroductionSlide />}
        {currentSlide === 2 && <SmartReviewOverviewSlide />}
        {currentSlide === 3 && <SmartReviewEfficiencySlide />}
        {currentSlide === 4 && <SmartReviewValueSlide />}
        {currentSlide === 5 && <DataEngineSlide />}
        {currentSlide === 6 && <SolutionMasterSlide />}
        {currentSlide === 7 && <IntegrationSlide />}
        {currentSlide === 8 && <FutureSlide />}
        {currentSlide === 9 && <SummarySlide />}
      </div>

      {/* 导航按钮 */}
      <div className="absolute bottom-5 right-5 flex items-center space-x-4">
        <span className="text-gray-600 text-sm">{currentSlide + 1} / {totalSlides}</span>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-100'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`p-2 rounded-full ${currentSlide === totalSlides - 1 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-100'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 幻灯片进度条 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}  
        ></div>
      </div>
    </div>
  );
};

// 幻灯片1：封面
const CoverSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-12">
      <div className="absolute top-6 left-6">
        <img src="/api/placeholder/80/40" alt="中通信息南方设计" className="rounded" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">创新成果 创新无限</h1>
        <h2 className="text-3xl mb-8">中通信息南方设计2025年第一季度AI创新成果</h2>
        <div className="w-20 h-1 bg-white mx-auto my-12"></div>
        <p className="text-xl mt-8">2025年第一季度技术专家总结会</p>
      </div>
      <div className="absolute bottom-6 right-6 text-sm opacity-70">
        演示日期：2025年5月15日
      </div>
    </div>
  );
};

// 幻灯片2：AI创新背景与概述
const IntroductionSlide = () => {
  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <SlideHeader title="AI创新驱动业务发展" />
      
      <div className="grid grid-cols-2 gap-8 mt-16">
        <div>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">创新理念</h3>
            <p className="text-lg text-gray-700">让AI走进业务，让创新创造价值</p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-4">业务挑战</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-red-500">•</div>
                <div>设计文档审核效率低下，人工审核标准不一致</div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-red-500">•</div>
                <div>项目数据分析支撑不足，决策依据缺乏</div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-red-500">•</div>
                <div>技术方案撰写资源瓶颈，依赖少数专家</div>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4">三大创新成果</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-center mb-2 text-blue-600">
                  <FileText size={28} />
                </div>
                <div className="font-medium text-gray-800">智文审核</div>
                <div className="text-sm text-gray-600">设计文档智能审核</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-center mb-2 text-blue-600">
                  <Database size={28} />
                </div>
                <div className="font-medium text-gray-800">数擎</div>
                <div className="text-sm text-gray-600">项目数据分析与决策</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-center mb-2 text-blue-600">
                  <PenTool size={28} />
                </div>
                <div className="font-medium text-gray-800">方案大师</div>
                <div className="text-sm text-gray-600">技术方案智能生成</div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">价值创造</h3>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-purple-600">500万+</div>
              <div className="ml-4 text-gray-700">
                <div>年化直接创造价值</div>
                <div className="text-sm">间接带动业务增长15%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={2} />
    </div>
  );
};

// 幻灯片3：《智文审核》概述
const SmartReviewOverviewSlide = () => {
  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <SlideHeader title="《智文审核》—设计文档智能审核系统" />
      
      <div className="grid grid-cols-2 gap-12 mt-12">
        <div>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">核心价值</h3>
            <p className="text-lg text-gray-700">
              AI赋能设计文档审核，实现标准化、自动化、智能化
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-4">部署进展</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-green-600 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div className="text-gray-700">
                  已成功部署至电信集团并嵌入生产流程
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-green-600 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div className="text-gray-700">
                  成为业务不可缺少的核心能力组件
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">系统能力</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-blue-700 flex justify-center mb-2">
                  <Search size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-800">10万+</div>
                <div className="text-gray-600">国家和行业规范自动采编</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-blue-700 flex justify-center mb-2">
                  <CheckCircle size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-800">35个</div>
                <div className="text-gray-600">专业审核点全覆盖</div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-700 text-white p-6 rounded-lg">
            <div className="flex items-center justify-center">
              <FileText size={64} />
              <ArrowRight size={40} className="mx-6" />
              <div className="text-center">
                <div className="text-3xl font-bold">智能审核</div>
                <div className="opacity-80 mt-2">提升文档质量 · 降低审核成本</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={3} />
    </div>
  );
};

// 幻灯片4：《智文审核》效率提升分析
const SmartReviewEfficiencySlide = () => {
  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <SlideHeader title="《智文审核》—显著提升审核效率" />
      
      <div className="mt-10 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-6">效率对比分析</h3>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">传统人工审核</span>
              <span className="text-gray-800 font-medium">4-5小时/项目</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full w-full">
              <div className="h-4 rounded-full bg-gray-500 w-full"></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">基准时间</div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">智能审核辅助</span>
              <span className="text-blue-700 font-medium">0.5-1小时/项目</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full w-full">
              <div className="h-4 rounded-full bg-blue-600 w-1/5"></div>
            </div>
            <div className="text-sm text-blue-600 mt-1">降低80%审核时间</div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-700">80%</div>
              <div className="text-xl text-gray-700 mt-2">审核效率提升</div>
              <div className="mt-4 text-gray-600">
                从传统的4-5小时缩短至0.5-1小时，显著提高工作效率
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-6">审核效果对比</h3>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-red-100 text-red-600 mr-3">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-medium">传统人工审核</div>
                  <div className="text-sm text-gray-500">耗时长，效率低</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm pl-10">
                <li className="list-disc">单个项目需要4-5小时审核</li>
                <li className="list-disc">审核标准因人而异，不稳定</li>
                <li className="list-disc">审核结果无法量化分析</li>
                <li className="list-disc">高级工程师时间成本高</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="font-medium">智能审核系统</div>
                  <div className="text-sm text-gray-500">快速，准确，标准</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm pl-10">
                <li className="list-disc">单个项目仅需0.5-1小时</li>
                <li className="list-disc">标准一致，规范统一</li>
                <li className="list-disc">自动生成修改建议</li>
                <li className="list-disc">可量化跟踪审核效果</li>
              </ul>
            </div>
            
            <div className="text-sm text-gray-600 italic border-l-4 border-blue-300 pl-4">
              "智文审核系统极大简化了我们的文档审核流程，让我能够更专注于创新设计而非繁琐检查。"
              <div className="mt-1 text-right">— 项目设计师</div>
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={4} />
    </div>
  );
};

// 幻灯片5：《智文审核》价值与效益
const SmartReviewValueSlide = () => {
  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <SlideHeader title="《智文审核》—创造实质业务价值" />
      
      <div className="grid grid-cols-2 gap-10 mt-10">
        <div>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <DollarSign size={24} className="mr-2" />
              人力资源优化
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">初级审核工作替代率</span>
                  <span className="font-medium text-green-700">70-80%</span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full">
                  <div className="h-2.5 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-green-700">100万+</div>
                <div className="text-gray-600 mt-1">年人力成本节省</div>
              </div>
              
              <div className="bg-white rounded-lg p-3 text-sm text-gray-600">
                <div className="font-medium text-gray-700 mb-1">成本节省分析</div>
                <ul className="space-y-1 pl-5">
                  <li className="list-disc">减少专职审核人员配置</li>
                  <li className="list-disc">降低重复工作时间成本</li>
                  <li className="list-disc">高效定位问题，减少返工</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Search size={24} className="mr-2" />
              质量标准提升
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">标准执行偏差降低</span>
                  <span className="font-medium text-blue-700">15-20%</span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full">
                  <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: '18%' }}></div>
                </div>
                <div className="text-sm text-gray-500 mt-1">消除因工程师经验差异导致的标准执行偏差</div>
              </div>
              
              <div className="bg-white rounded-lg p-3 text-sm text-gray-600">
                <div className="font-medium text-gray-700 mb-1">质量闭环体系</div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center w-1/3">
                    <Search size={20} className="text-blue-500 mb-1" />
                    <div className="text-center">智能识别问题</div>
                  </div>
                  <ArrowRight size={16} className="text-gray-400" />
                  <div className="flex flex-col items-center w-1/3">
                    <PenTool size={20} className="text-blue-500 mb-1" />
                    <div className="text-center">精准修改建议</div>
                  </div>
                  <ArrowRight size={16} className="text-gray-400" />
                  <div className="flex flex-col items-center w-1/3">
                    <CheckCircle size={20} className="text-blue-500 mb-1" />
                    <div className="text-center">高效修正文档</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <Zap size={24} className="mr-2" />
              推广价值
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-purple-700 mb-2">工程全生命周期</h4>
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="text-center p-2 bg-purple-50 rounded">
                    <div>立项阶段</div>
                    <div className="mt-1">
                      <CheckCircle size={16} className="inline text-green-500" />
                    </div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div>设计阶段</div>
                    <div className="mt-1">
                      <CheckCircle size={16} className="inline text-green-500" />
                    </div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded">
                    <div>验收阶段</div>
                    <div className="mt-1">
                      <CheckCircle size={16} className="inline text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-purple-700 mb-2">跨部门应用</h4>
                <div className="flex justify-around text-sm">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-1">财</div>
                    <div>财务部门</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">采</div>
                    <div>采购部门</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-1">法</div>
                    <div>法务部门</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-purple-700 mb-2">跨行业推广</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <div>金融行业合规文件审核</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div>医疗行业临床文档审核</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <div>教育行业教材审核</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
            <div className="text-2xl font-bold mb-1">智能审核 赋能未来</div>
            <div>一次投入 多处收益 持续创值</div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={5} />
    </div>
  );
};

// 幻灯片6：《数擎》—项目数据分析与决策助手
const DataEngineSlide = () => {
  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <SlideHeader title="《数擎》—让项目数据说话" />
      
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">应用场景</h3>
            <p className="text-gray-700">
              中通南方七分公司经手大量项目数据，但缺乏高效分析工具，决策依据不足。《数擎》将项目经验数据化，辅助科学决策，大幅提升项目管理能力。
            </p>
          </div>
          
          <div className="bg-blue-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">核心价值</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <BarChart2 size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">数据可视化</div>
                  <div className="text-sm text-blue-200 mt-1">直观呈现项目关键指标</div>
                </div>
              </div>
              <div className="bg-blue-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Layout size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">多维分析</div>
                  <div className="text-sm text-blue-200 mt-1">跨项目对比与异常识别</div>
                </div>
              </div>
              <div className="bg-blue-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Search size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">风险预警</div>
                  <div className="text-sm text-blue-200 mt-1">量化风险评估与预测</div>
                </div>
              </div>
              <div className="bg-blue-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Zap size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">决策辅助</div>
                  <div className="text-sm text-blue-200 mt-1">优化建议与报告生成</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-800 text-white p-5 rounded-lg mb-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium">项目数据分析与决策助手</div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2 text-blue-700 border-b pb-2">
                <div className="font-medium">项目对比分析</div>
                <div className="text-xs text-gray-500">数据更新: 2025-04-30</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-5 gap-1">
                  <div className="font-medium">项目</div>
                  <div className="font-medium">预算(万)</div>
                  <div className="font-medium">实际(万)</div>
                  <div className="font-medium">差异</div>
                  <div className="font-medium">完成度</div>
                </div>
                
                <div className="grid grid-cols-5 gap-1 bg-green-50 p-1 rounded">
                  <div>项目A</div>
                  <div>580</div>
                  <div>550</div>
                  <div className="text-green-600">-5.2%</div>
                  <div>100%</div>
                </div>
                
                <div className="grid grid-cols-5 gap-1 bg-red-50 p-1 rounded">
                  <div>项目B</div>
                  <div>420</div>
                  <div>470</div>
                  <div className="text-red-600">+11.9%</div>
                  <div>90%</div>
                </div>
                
                <div className="grid grid-cols-5 gap-1 p-1 rounded">
                  <div>项目C</div>
                  <div>750</div>
                  <div>745</div>
                  <div className="text-green-600">-0.7%</div>
                  <div>65%</div>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t">
                <div className="text-blue-700 font-medium mb-2">智能优化建议</div>
                <div className="flex items-start text-xs">
                  <Zap size={14} className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>项目B成本超支11.9%，建议调整采购计划，可节省约3.5%成本</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">应用效果</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-blue-600 flex justify-center mb-1">
                  <Clock size={24} />
                </div>
                <div className="text-xl font-bold text-blue-700">70%</div>
                <div className="text-sm text-gray-600">项目分析时间减少</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-blue-600 flex justify-center mb-1">
                  <BarChart2 size={24} />
                </div>
                <div className="text-xl font-bold text-blue-700">25%</div>
                <div className="text-sm text-gray-600">成本预测准确度提升</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={6} />
    </div>
  );
};

// 幻灯片7：《方案大师》—技术方案智能生成平台
const SolutionMasterSlide = () => {
  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <SlideHeader title="《方案大师》—AI赋能技术方案" />
      
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-4">应用场景</h3>
            <p className="text-gray-700">
              技术方案撰写是七分公司核心业务，但传统方式依赖少数专家，效率低下。《方案大师》通过AI赋能，快速生成专业技术方案，提升公司核心竞争力。
            </p>
          </div>
          
          <div className="bg-green-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">核心功能</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Layout size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">方案智能框架</div>
                  <div className="text-sm text-green-200 mt-1">自动生成方案结构</div>
                </div>
              </div>
              <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Book size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">行业最佳实践</div>
                  <div className="text-sm text-green-200 mt-1">一键引用专业标准</div>
                </div>
              </div>
              <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Layout size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">技术组件推荐</div>
                  <div className="text-sm text-green-200 mt-1">智能推荐架构方案</div>
                </div>
              </div>
              <div className="bg-green-800 bg-opacity-30 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <PenTool size={28} />
                </div>
                <div className="text-center">
                  <div className="font-medium">图表自动生成</div>
                  <div className="text-sm text-green-200 mt-1">文字转专业架构图</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-800 text-white p-5 rounded-lg mb-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium">技术方案智能生成平台</div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white text-gray-800 rounded-lg p-3 text-sm">
                <div className="text-green-700 font-medium mb-2">方案智能框架</div>
                <ul className="space-y-1">
                  <li className="font-medium text-blue-600">1. 项目概述</li>
                  <li className="ml-3 text-gray-600">1.1 背景与目标</li>
                  <li className="ml-3 text-gray-600">1.2 业务需求</li>
                  <li className="font-medium text-blue-600">2. 总体架构</li>
                  <li className="ml-3 text-gray-600">2.1 系统架构图</li>
                  <li className="ml-3 text-gray-600">2.2 技术选型</li>
                  <li className="font-medium text-blue-600">3. 核心模块设计</li>
                  <li className="ml-3 text-gray-600">3.1 功能模块</li>
                </ul>
              </div>
              
              <div className="bg-white text-gray-800 rounded-lg p-3 text-sm">
                <div className="text-green-700 font-medium mb-2">技术组件推荐</div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>云原生微服务架构</span>
                      <span className="text-green-600">96%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>容器编排与自动扩缩</span>
                      <span className="text-green-600">94%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>分布式缓存系统</span>
                      <span className="text-green-600">92%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-4">应用效果</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-green-600 flex justify-center mb-1">
                  <Clock size={24} />
                </div>
                <div className="text-xl font-bold text-green-700">60%+</div>
                <div className="text-sm text-gray-600">方案编制时间缩短</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-green-600 flex justify-center mb-1">
                  <CheckCircle size={24} />
                </div>
                <div className="text-xl font-bold text-green-700">30%</div>
                <div className="text-sm text-gray-600">方案一次通过率提升</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-green-600 flex justify-center mb-1">
                  <Users size={24} />
                </div>
                <div className="text-xl font-bold text-green-700">50%</div>
                <div className="text-sm text-gray-600">高级人员工作负担减轻</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="text-green-600 flex justify-center mb-1">
                  <Award size={24} />
                </div>
                <div className="text-xl font-bold text-green-700">25%</div>
                <div className="text-sm text-gray-600">客户满意度提升</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={7} />
    </div>
  );
};

// 幻灯片8：三大创新应用整合展示（重新设计版）
const IntegrationSlide = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-12 overflow-auto">
      <SlideHeader title="AI创新成果矩阵" />
      
      <div className="mt-6">
        {/* 创新成果概览 - 使用网格布局替代中心辐射设计 */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">三大核心创新应用</h3>
          
          {/* 三个创新应用卡片 - 使用网格布局 */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all">
              <div className="h-2 bg-blue-600"></div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                    <FileText size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">智文审核</h3>
                    <div className="text-xs text-gray-500">设计文档智能审核系统</div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">审核效率提升</span>
                      <span className="font-medium text-blue-700">80%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-blue-500" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">年节省成本</span>
                      <span className="font-medium text-blue-700">100万+</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">标准执行偏差降低</span>
                      <span className="font-medium text-blue-700">15%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-blue-500" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">应用进度</div>
                    <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">已部署生产</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all">
              <div className="h-2 bg-purple-600"></div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                    <Database size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">数擎</h3>
                    <div className="text-xs text-gray-500">项目数据分析决策平台</div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">分析时间缩短</span>
                      <span className="font-medium text-purple-700">70%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-purple-500" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">成本预测准确率提升</span>
                      <span className="font-medium text-purple-700">25%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-purple-500" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">经理决策时间缩短</span>
                      <span className="font-medium text-purple-700">40%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-purple-500" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">应用进度</div>
                    <div className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">试点应用中</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all">
              <div className="h-2 bg-green-600"></div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                    <PenTool size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">方案大师</h3>
                    <div className="text-xs text-gray-500">技术方案智能生成平台</div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">编制时间缩短</span>
                      <span className="font-medium text-green-700">60%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">一次通过率提升</span>
                      <span className="font-medium text-green-700">30%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">高级人员工作负担减轻</span>
                      <span className="font-medium text-green-700">50%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full bg-green-500" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">应用进度</div>
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">测试完成</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 业务流程覆盖图 - 六边形网格设计 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">业务流程覆盖分析</h3>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center mb-6">
              {/* 业务流程环形图 */}
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-600">核心业务</div>
                        <div className="text-xs text-gray-500 mt-1">全流程覆盖</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 业务节点 - 沿圆形均匀分布 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white shadow-md rounded-lg p-3 w-28">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <FileText size={16} className="text-blue-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">立项阶段</div>
                        <div className="flex space-x-1 mt-1">
                          <span className="block w-2 h-2 rounded-full bg-blue-600"></span>
                          <span className="block w-2 h-2 rounded-full bg-green-600"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 right-0 translate-x-1/2">
                  <div className="bg-white shadow-md rounded-lg p-3 w-28">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <PenTool size={16} className="text-blue-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">设计阶段</div>
                        <div className="flex space-x-1 mt-1">
                          <span className="block w-2 h-2 rounded-full bg-blue-600"></span>
                          <span className="block w-2 h-2 rounded-full bg-purple-600"></span>
                          <span className="block w-2 h-2 rounded-full bg-green-600"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 right-0 translate-x-1/2">
                  <div className="bg-white shadow-md rounded-lg p-3 w-28">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <CheckCircle size={16} className="text-blue-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">审核阶段</div>
                        <div className="flex space-x-1 mt-1">
                          <span className="block w-2 h-2 rounded-full bg-blue-600"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white shadow-md rounded-lg p-3 w-28">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <Layout size={16} className="text-blue-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">实施阶段</div>
                        <div className="flex space-x-1 mt-1">
                          <span className="block w-2 h-2 rounded-full bg-purple-600"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 left-0 -translate-x-1/2">
                  <div className="bg-white shadow-md rounded-lg p-3 w-28">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <Award size={16} className="text-blue-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">验收阶段</div>
                        <div className="flex space-x-1 mt-1">
                          <span className="block w-2 h-2 rounded-full bg-purple-600"></span>
                          <span className="block w-2 h-2 rounded-full bg-green-600"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 图例 */}
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-xs text-gray-600">智文审核</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-xs text-gray-600">数擎</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                <span className="text-xs text-gray-600">方案大师</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 综合价值展示 - 现代仪表盘设计 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg rounded-xl p-6 text-white">
          <h3 className="text-xl font-semibold text-center mb-6">综合创新价值</h3>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white flex items-center justify-center text-blue-700 mb-2">
                <Clock size={20} />
              </div>
              <div className="text-xs opacity-80">效率提升</div>
              <div className="text-2xl font-bold mt-1">70%</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white flex items-center justify-center text-green-700 mb-2">
                <DollarSign size={20} />
              </div>
              <div className="text-xs opacity-80">年创造价值</div>
              <div className="text-2xl font-bold mt-1">500万+</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white flex items-center justify-center text-purple-700 mb-2">
                <CheckCircle size={20} />
              </div>
              <div className="text-xs opacity-80">质量提升</div>
              <div className="text-2xl font-bold mt-1">25%</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white flex items-center justify-center text-amber-600 mb-2">
                <Users size={20} />
              </div>
              <div className="text-xs opacity-80">人才赋能</div>
              <div className="text-2xl font-bold mt-1">50%</div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex items-center justify-center">
              <BarChart2 size={24} className="mr-2" />
              <div className="text-lg font-medium">业务增长率 <span className="font-bold text-xl">15%</span></div>
            </div>
            <div className="mt-2 text-xs opacity-80">
              通过AI创新三大应用的协同效应，显著提升公司核心竞争力
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={8} />
    </div>
  );
};

// 幻灯片9：集成价值与未来规划
const FutureSlide = () => {
  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <SlideHeader title="集成价值与未来展望" />
      
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">综合效益</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                  <DollarSign size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">直接价值</div>
                  <div className="text-gray-600">三大核心应用年化创造价值500万+</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">间接价值</div>
                  <div className="text-gray-600">提升公司核心竞争力，带动业务增长15%</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-3 flex-shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">人才建设</div>
                  <div className="text-gray-600">培养AI应用开发专业队伍，建立创新文化</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">未来规划</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                  <Layout size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">能力扩展</div>
                  <div className="text-gray-600">将AI应用从设计环节扩展至项目全生命周期</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                  <Search size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">场景深化</div>
                  <div className="text-gray-600">针对重点业务场景开发更专业化的AI助手</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-3 flex-shrink-0">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">价值量化</div>
                  <div className="text-gray-600">建立更完善的价值评估和反馈机制</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">验收准备</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-700 mb-2">验收文档体系</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-5">
                  <li className="list-disc">《DeepSeek部署技术白皮书》</li>
                  <li className="list-disc">《AI应用开发成果报告》</li>
                  <li className="list-disc">《应用效益量化分析》</li>
                  <li className="list-disc">《未来发展规划》</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-green-700 mb-2">系统展示准备</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-5">
                  <li className="list-disc">构建统一展示平台</li>
                  <li className="list-disc">准备多场景演示流程</li>
                  <li className="list-disc">设计用户体验路径</li>
                  <li className="list-disc">准备常见问题解答</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-purple-700 mb-2">效果量化展示</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-5">
                  <li className="list-disc">应用前后效率对比</li>
                  <li className="list-disc">用户满意度调查结果</li>
                  <li className="list-disc">成本节约与价值创造分析</li>
                  <li className="list-disc">技术创新点总结</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-red-700 mb-2">重点验收指标</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-5">
                  <li className="list-disc">模型部署完成度：100%</li>
                  <li className="list-disc">核心应用开发数量：≥3个</li>
                  <li className="list-disc">应用可用性：≥99.9%</li>
                  <li className="list-disc">用户满意度：≥90%</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">发展路线图</h3>
            <div className="relative py-6">
              <div className="absolute left-0 top-1/2 w-full h-1 bg-white bg-opacity-30"></div>
              
              <div className="flex justify-between relative">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <div className="text-sm">AI能力构建</div>
                  <div className="text-xs text-blue-100">2025 Q1</div>
                </div>
                
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <div className="text-sm">业务深度融合</div>
                  <div className="text-xs text-blue-100">2025 Q2-Q3</div>
                </div>
                
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <div className="text-sm">生态拓展</div>
                  <div className="text-xs text-blue-100">2025 Q4</div>
                </div>
                
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <div className="text-sm">价值倍增</div>
                  <div className="text-xs text-blue-100">2026+</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="font-medium">智能企业 数智未来</div>
              <div className="text-sm text-blue-100 mt-1">以AI创新驱动业务发展的新时代</div>
            </div>
          </div>
        </div>
      </div>
      
      <SlideFooter slideNumber={9} />
    </div>
  );
};

// 幻灯片10：总结与致谢
const SummarySlide = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-12 overflow-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">创新永不止步</h1>
      
      <div className="grid grid-cols-2 gap-10 mt-12 mb-16">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-6">核心思想</h3>
          <p className="text-lg leading-relaxed">
            技术创新不是为了创新而创新，而是要真正解决业务痛点，创造实际价值。
            我们的AI创新实践证明，深度融合业务场景的AI应用才能产生最大价值。
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-6">成功要素</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="p-1 rounded-full bg-white text-blue-600 mr-3 flex-shrink-0">
                <CheckCircle size={16} />
              </div>
              <div>紧密结合业务痛点，解决实际问题</div>
            </li>
            <li className="flex items-start">
              <div className="p-1 rounded-full bg-white text-blue-600 mr-3 flex-shrink-0">
                <CheckCircle size={16} />
              </div>
              <div>注重应用效果，追求价值创造</div>
            </li>
            <li className="flex items-start">
              <div className="p-1 rounded-full bg-white text-blue-600 mr-3 flex-shrink-0">
                <CheckCircle size={16} />
              </div>
              <div>持续迭代优化，不断提升能力</div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold mb-4">致谢</h3>
        <p className="text-lg">
          感谢公司领导的大力支持，感谢团队的辛勤付出，<br />
          感谢各位专家的宝贵建议！
        </p>
      </div>
      
      <div className="text-center mt-8">
        <div className="text-3xl font-bold mb-2">创新成果，创新无限</div>
        <div className="text-lg opacity-80">中通信息南方设计研发团队</div>
      </div>
      
      <div className="absolute bottom-6 right-6">
        <img src="/api/placeholder/80/40" alt="中通信息南方设计" className="rounded" />
      </div>
    </div>
  );
};

// 通用页脚组件
const SlideFooter = ({ slideNumber }) => {
  return (
    <div className="absolute bottom-4 left-0 w-full flex justify-between items-center px-12 text-sm text-gray-500">
      <div>中通信息南方设计 - 2025年第一季度技术专家总结会</div>
      <div>{slideNumber} / 10</div>
    </div>
  );
};

// 通用页头组件
const SlideHeader = ({ title }) => {
  return (
    <div className="mb-6">
      <div className="absolute top-4 left-12">
        <img src="/api/placeholder/60/30" alt="中通信息南方设计" className="rounded" />
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
    </div>
  );
};

export default App;
import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, className = '' }) => (
  <div className={`w-full h-full flex items-center justify-center p-4 md:p-8 bg-white rounded-lg shadow-lg ${className}`}>
    <div className="w-full max-w-7xl">
      {children}
    </div>
  </div>
);

const Chapter3Part1Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 封面页
    <Slide key="cover" className="flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6">项目实施要点与经验分享</h1>
      <div className="text-xl text-gray-600 mb-4">数字政府咨询项目实施指南</div>
      <div className="text-lg text-blue-600">打造高质量数字政府建设的实践路径</div>
    </Slide>,

    // 成功原则
    <Slide key="success-principles">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center">成功原则：以客户为中心</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-blue-800">深入理解需求</h3>
                  <p className="text-gray-600">用心厘清发展目标、痛点及需求，主动提供咨询服务</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-green-800">服务至上</h3>
                  <p className="text-gray-600">始终保持专业、积极的服务态度，注重服务质量</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-purple-800">换位思考</h3>
                  <p className="text-gray-600">熟悉甲方业务流程，从客户角度思考问题</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-800 font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-orange-800">持续创新</h3>
                  <p className="text-gray-600">定期团队头脑风暴，挖掘商机与价值点</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 进度与质量控制
    <Slide key="quality-control">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center">进度与质量控制</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-blue-800 mb-4">进度管理</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                制定详细的项目计划时间表
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                设立关键节点里程碑
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                定期跟进项目进度
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                及时识别和解决延期风险
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-green-800 mb-4">质量控制</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                建立完整的质量管理体系
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                定期质量检查和评估
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                执行标准化的review流程
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                及时记录和解决质量问题
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 问题处理流程
    <Slide key="problem-solving">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center">问题处理流程</h2>
        <div className="space-y-8">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-800">问题发现</h3>
                <p className="text-sm text-gray-600 mt-2">及时识别问题</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-800">分析评估</h3>
                <p className="text-sm text-gray-600 mt-2">团队讨论分析</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800">制定方案</h3>
                <p className="text-sm text-gray-600 mt-2">明确解决方案</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-orange-800">跟进反馈</h3>
                <p className="text-sm text-gray-600 mt-2">持续跟进直至解决</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10"></div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-800 mb-4">核心原则</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    迎难而上，不回避问题
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    及时沟通，保持透明
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    明确时间点，按期反馈
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    闭环管理，确保解决
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 验收管理关键点
    <Slide key="verification">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center">验收管理关键点</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-blue-800 mb-4">验收准备</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  完整的验收测试方案
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  科学的验收指标体系
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  规范的验收工作流程
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  齐全的验收相关文档
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-green-800 mb-4">验收过程</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  功能测试验证
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  性能测试评估
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  安全测试检查
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  集成测试验证
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-purple-800 mb-4">验收总结</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  系统性收集整理验收资料
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  深入分析项目实施效果
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  总结项目建设经验教训
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  编制详实的项目总结报告
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-orange-800 mb-4">持续优化</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  持续跟踪系统运行情况
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  及时响应优化需求
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  定期进行系统评估
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  建立长效运维机制
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToPrevChapter = () => {
    window.location.href = '/slides-2';
  };

  const goToNextChapter = () => {
    window.location.href = '/slides-4';
  };

  return (
    <div className="w-full min-h-screen flex flex-col relative bg-gray-100">
      {/* 主要内容区域 */}
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full h-full">
          {slides[currentSlide]}
        </div>
      </div>
      
      {/* 导航控制区域 - 固定在底部 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* 上一章节按钮 */}
          <button
            onClick={goToPrevChapter}
            className="w-[100px] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1"
          >
            <ChevronLeft size={16} />
            上一章
          </button>
          
          {/* 幻灯片导航 */}
          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-gray-600 font-medium min-w-[60px] text-center">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* 下一章节按钮 */}
          <button
            onClick={goToNextChapter}
            className="w-[100px] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1"
          >
            下一章
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      {/* 底部空白占位，防止内容被固定导航栏遮挡 */}
      <div className="h-16"></div>
    </div>
  );
};

export default Chapter3Part1Slides;
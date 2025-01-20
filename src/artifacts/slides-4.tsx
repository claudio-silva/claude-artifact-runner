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

const Chapter4Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 封面页
    <Slide key="title" className="flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6">商机获取与投标技巧</h1>
      <div className="text-xl text-gray-600 mb-4">数字政府咨询项目商机把握</div>
      <div className="text-lg text-blue-600">提升项目获取能力的实战指南</div>
    </Slide>,

    // 高效团队协作
    <Slide key="market-collaboration">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800 text-center">高效团队协作</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-800 mb-4">市场部支持</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>专业人员配备方案</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>资质要求精准匹配</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>招标文件内部预审</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>全流程高效协同</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-green-800 mb-4">项目部配合</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>技术标书积极参与</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>AI平台辅助编写</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>快速响应需求变更</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>专业技术支持</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 投标全流程优化
    <Slide key="bidding-process">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800 text-center">投标全流程优化</h2>
        <div className="space-y-8">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-800">招标文件分析</h3>
                <p className="text-sm text-gray-600 mt-2">Day 1-2</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-800">投标准备</h3>
                <p className="text-sm text-gray-600 mt-2">Day 3-5</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800">投标文件定稿</h3>
                <p className="text-sm text-gray-600 mt-2">Day 6-7</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-orange-800">合同签订</h3>
                <p className="text-sm text-gray-600 mt-2">Day 8-10</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-blue-800 mb-4">效率提升要点</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>团队协作无缝衔接</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI工具提升编写效率</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>标准化模板应用</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>并行工作流程优化</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-green-800 mb-4">质量保障措施</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>多层级审核把关</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>专业人员全程参与</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>文件完整性检查</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>合规性严格把控</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 成功案例分享
    <Slide key="success-metrics">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800 text-center">成功案例分享</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-800 mb-4">关键指标</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-gray-700">全流程完成时间</span>
                <span className="font-bold text-blue-800">10天</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-gray-700">团队协作效率</span>
                <span className="font-bold text-blue-800">100%</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-gray-700">文件质量达标率</span>
                <span className="font-bold text-blue-800">98%</span>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-green-800 mb-4">经验总结</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>强强联手，部门通力合作</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>智能工具辅助提升效率</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>标准化流程保障质量</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>全流程把控确保高效</span>
              </li>
            </ul>
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
    window.location.href = '/slides-3';
  };

  const goToNextChapter = () => {
    window.location.href = '/slides-5';
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

export default Chapter4Slides;
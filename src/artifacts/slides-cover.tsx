import React, { useState, ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

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

const CoverSlide = () => {
  const [currentSlide] = useState(0);
  
  const slides = [
    <Slide key="cover">
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-12">
        {/* 标题区域 */}
        <div className="text-center space-y-6">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-lg font-medium">
            数字政府
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            全过程咨询实践分享
          </h1>
          <div className="text-xl md:text-2xl text-blue-600 font-medium">
            以广州市公共文化云平台项目为例
          </div>
        </div>

        {/* 分隔线 */}
        <div className="w-24 h-1 bg-blue-500 rounded-full"></div>

        {/* 主讲人信息 */}
        <div className="text-center space-y-4">
          <div className="text-lg text-gray-600">
            <span className="font-medium">主讲人：</span>
            <span>七分项目一部-洪浩东</span>
          </div>
          <div className="text-lg text-gray-600">
            <span className="font-medium">时间：</span>
            <span>2025年1月15日 14:00-15:30</span>
          </div>
        </div>

        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-20 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
    </Slide>
  ];

  const goToNextChapter = () => {
    window.location.href = '/slides-myself';
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
          {/* 占位 */}
          <div className="w-[100px]"></div>
          
          {/* 幻灯片信息 */}
          <div className="flex items-center gap-8">
            <span className="text-gray-600 font-medium">
              封面
            </span>
          </div>

          {/* 下一章节按钮 */}
          <button
            onClick={goToNextChapter}
            className="w-[100px] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1"
          >
            下一页
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      {/* 底部空白占位，防止内容被固定导航栏遮挡 */}
      <div className="h-16"></div>
    </div>
  );
};

export default CoverSlide; 
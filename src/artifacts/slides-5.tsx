import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Brain, MessageCircle, Lightbulb, Target } from 'lucide-react';

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

const Chapter5Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 封面页
    <Slide key="title" className="flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6">总结与探讨</h1>
      <div className="text-xl text-gray-600 mb-4">课程回顾与经验交流</div>
      <div className="text-lg text-blue-600">让我们一起探讨数字政府咨询的未来</div>
    </Slide>,

    // 课程要点回顾
    <Slide key="summary">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">课程核心要点回顾</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="text-blue-500" size={24} />
              <h3 className="font-bold text-lg">业务认知</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                <span>全过程咨询的定义与价值</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                <span>数字政府领域咨询特点</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                <span>团队组建与人员配置</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-green-500" size={24} />
              <h3 className="font-bold text-lg">实践案例</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                <span>广州文化云平台项目经验</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                <span>五大核心服务内容</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                <span>项目成功要素分析</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-purple-500" size={24} />
              <h3 className="font-bold text-lg">实施经验</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                <span>进度与质量管控方法</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                <span>问题处理与风险防控</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                <span>验收关键点把控</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-orange-500" size={24} />
              <h3 className="font-bold text-lg">商机获取</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                <span>投标策略与技巧</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                <span>团队高效协作</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                <span>全流程优化方法</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 探讨环节
    <Slide key="discussion">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">开放性探讨</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">探讨主题建议</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-blue-800 mb-2">1. 技术创新与应用</p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• AI在咨询服务中的应用前景</li>
                  <li>• 新技术对传统咨询模式的影响</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-blue-800 mb-2">2. 服务模式升级</p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• 如何提供差异化咨询服务</li>
                  <li>• 服务质量持续提升的方法</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-blue-800 mb-2">3. 团队能力建设</p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• 人才培养与梯队建设</li>
                  <li>• 专业能力提升路径</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-blue-800 mb-2">4. 行业发展趋势</p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• 数字政府建设新方向</li>
                  <li>• 咨询服务创新机遇</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">互动交流</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-green-800 mb-2">实践经验分享</p>
                <div className="text-sm text-gray-600">
                  欢迎分享您在项目实施过程中的:
                  <ul className="mt-2 space-y-1">
                    <li>• 创新方法与工具</li>
                    <li>• 难点突破案例</li>
                    <li>• 经验教训总结</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-green-800 mb-2">问题探讨</p>
                <div className="text-sm text-gray-600">
                  针对实际工作中遇到的问题进行探讨:
                  <ul className="mt-2 space-y-1">
                    <li>• 技术难点解决</li>
                    <li>• 管理经验交流</li>
                    <li>• 创新思路碰撞</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 未来展望
    <Slide key="future">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">未来展望</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">行业趋势</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>数字政府建设持续深化</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>咨询服务模式创新升级</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>智能化工具广泛应用</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></div>
                <span>跨领域融合加速推进</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">能力提升</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>持续学习新技术应用</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>深化行业专业能力</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>提升项目管理水平</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                <span>加强创新思维培养</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mt-6">
          <h3 className="font-bold text-xl mb-4 text-center">共创美好未来</h3>
          <div className="text-center text-gray-700">
            <p>让我们携手并进，以专业的能力和创新的思维</p>
            <p>推动数字政府建设走向更高水平</p>
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

          {/* 空白占位，保持布局对称 */}
          <div className="w-[100px]"></div>
        </div>
      </div>
      {/* 底部空白占位，防止内容被固定导航栏遮挡 */}
      <div className="h-16"></div>
    </div>
  );
};

export default Chapter5Slides;
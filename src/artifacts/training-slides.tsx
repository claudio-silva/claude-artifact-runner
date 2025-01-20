import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, className = '' }) => (
  <div className={`h-full p-12 ${className}`}>
    {children}
  </div>
);

const TrainingSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 封面页
    <Slide key="0" className="bg-gradient-to-br from-white to-blue-50">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">数字政府全过程咨询业务概述</h1>
        <div className="text-xl text-gray-600">内部培训课程</div>
      </div>
    </Slide>,

    // 第1节：全过程咨询的定义与价值
    <Slide key="1" className="bg-gradient-to-br from-white to-purple-50">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">1. 全过程咨询的定义与价值</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">定义</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-600">全过程咨询是指咨询单位受业主委托，提供贯穿项目全生命周期的专业技术服务，从项目决策、实施到运营的各个阶段提供持续性的智力支持。</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">价值</h3>
          <div className="space-y-3">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">质量与风险</h4>
              <p className="text-gray-600">提升项目整体质量，降低建设风险</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">资源优化</h4>
              <p className="text-gray-600">优化资源配置，提高投资效益</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">过程管控</h4>
              <p className="text-gray-600">加强过程管控，确保如期交付</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">专业支撑</h4>
              <p className="text-gray-600">统筹协调各方，提供专业支撑</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 第2节：数字政府领域全过程咨询特点
    <Slide key="2" className="bg-gradient-to-br from-white to-green-50">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">2. 数字政府领域全过程咨询特点</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">技术特点</h3>
            <div className="bg-purple-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>技术更新迭代快</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>系统集成度高</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>安全要求严格</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">业务特点</h3>
            <div className="bg-orange-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>政策依从性强</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>跨部门协同多</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>服务对象广泛</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">管理特点</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>项目周期较长</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>过程监管严格</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>文档要求规范</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">效益特点</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>社会效益显著</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>带动作用强大</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>示范效应明显</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 第3节：咨询团队组建要求与人员配置
    <Slide key="3" className="bg-gradient-to-br from-white to-yellow-50">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">3. 咨询团队组建要求与人员配置</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">核心团队配置</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">项目经理</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>计算机/通信专业本科以上</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>高级工程师职称</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>信息系统项目管理师</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">技术负责人</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>计算机/通信专业本科以上</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>高级工程师职称</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>PMP及信息安全认证</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">团队要求</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">专业互补</h4>
              <p className="text-gray-600">覆盖技术、管理、咨询等领域</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">经验丰富</h4>
              <p className="text-gray-600">具备类似项目实施经验</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">稳定可靠</h4>
              <p className="text-gray-600">人员变动需提前报备审批</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">持续服务</h4>
              <p className="text-gray-600">保障项目全周期的服务质量</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  ];

  return (
    <Card className="w-full aspect-video max-h-[80vh]">
      <div className="h-full relative">
        {slides[currentSlide]}
        <div className="absolute bottom-4 w-full flex justify-between items-center px-8">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-lg font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-50 transition-colors"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TrainingSlides;
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
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

const caseProgressData = [
  { name: '立项阶段', value: 25 },
  { name: '调研阶段', value: 33 },
  { name: '规划阶段', value: 55 },
  { name: '咨询服务', value: 45 },
  { name: '全过程项目', value: 75 }
];

const CaseStudySlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 封面页
    <Slide key="0" className="bg-gradient-to-br from-white to-blue-50">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">案例分享</h1>
        <h2 className="text-2xl text-blue-600 mb-4">广州市公共文化云平台全过程工程支撑管理服务项目</h2>
        <div className="text-xl text-gray-600">合同金额：44.588万元</div>
      </div>
    </Slide>,

    // 项目背景与目标
    <Slide key="1" className="bg-gradient-to-br from-white to-purple-50">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">项目背景与目标</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">项目背景</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>前期完成多个成功项目，建立深度合作</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>累计合作金额超75万元</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>获得甲方对专业能力的充分认可</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>具备全过程咨询服务经验</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">项目目标</h3>
          <div className="bg-green-50 p-4 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>打造标杆性文化云平台</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>提升平台服务效能</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>优化业务管理流程</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>确保建设投资效益</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">项目进展趋势</h3>
          <div className="flex justify-center">
            <LineChart width={800} height={200} data={caseProgressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </div>
        </div>
      </div>
    </Slide>,

    // 五大核心服务内容-1
    <Slide key="2" className="bg-gradient-to-br from-white to-green-50">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">五大核心服务内容（上）</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">1. 顶层规划设计</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>开展国内外文化云平台发展趋势研究</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>进行标杆城市对标分析</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>制定3-5年中长期发展规划</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>梳理优化现有业务场景</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">2. 需求调研分析</h3>
          <div className="bg-green-50 p-4 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>覆盖图书馆、博物馆、文化馆等机构</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>开展问卷调查和实地走访</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>组织用户访谈和研讨会</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>梳理系统集成方案</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">3. 项目监督管理</h3>
          <div className="bg-purple-50 p-4 rounded-lg">
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>优化现有管理流程</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>跟踪项目实施进度</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>监控质量指标完成情况</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>及时协调解决技术问题</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 五大核心服务内容-2
    <Slide key="3" className="bg-gradient-to-br from-white to-yellow-50">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">五大核心服务内容（下）</h2>
      <div className="grid grid-cols-2 gap-8 h-4/5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">4. 验收评估支撑</h3>
          <div className="bg-orange-50 p-4 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>设计完整的验收测试方案</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>协助开展功能测试验证</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>进行性能和安全测试</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>编制项目总结报告</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">5. 软件成本评估</h3>
          <div className="bg-teal-50 p-4 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>审核软件开发工作量</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>评估功能点计价合理性</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>核查第三方产品报价</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>测算运营维护成本</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">关键成功要素</h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">优质服务</h4>
              <p className="text-gray-600">持续提供高质量专业服务</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">深入调研</h4>
              <p className="text-gray-600">准确把握客户核心需求</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">专业能力</h4>
              <p className="text-gray-600">技术与管理能力并重</p>
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

export default CaseStudySlides;
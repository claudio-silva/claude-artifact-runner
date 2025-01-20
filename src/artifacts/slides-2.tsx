import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Layers, Search, Shield, ClipboardCheck, Calculator, ArrowRightCircle, Award, Target, Users } from 'lucide-react';

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

const Chapter2Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 成功案例封面
    <Slide key="cover" className="flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6">从案例到实践：数字政府咨询服务</h1>
      <div className="text-xl text-gray-600 mb-4">成功案例分析与经验总结</div>
      <div className="text-lg text-blue-600">深入解析数字政府咨询服务的实践之道</div>
    </Slide>,

    // 成功故事
    <Slide key="success-story">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600 text-center">
            从初次进场到深度合作的成功之路
          </h2>
          <div className="text-lg md:text-xl text-gray-600 text-center">广州市文化广电旅游局项目经验分享</div>
        </div>

        {/* 项目历程时间轴 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg relative group">
            <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRightCircle className="text-blue-500" />
            </div>
            <h3 className="font-bold text-blue-600">首个项目</h3>
            <p className="text-sm text-gray-600">智慧文旅工程扩建立项</p>
            <div className="mt-2 text-sm">
              <div className="font-bold">20万元</div>
              <div className="text-gray-600">按照广州市政务信息化建设标准编制项目立项方案</div>
            </div>
          </div>

          <div className="bg-green-50 p-4 md:p-6 rounded-lg relative group">
            <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRightCircle className="text-green-500" />
            </div>
            <h3 className="font-bold text-green-600">深入调研</h3>
            <p className="text-sm text-gray-600">文旅融合平台现状分析</p>
            <div className="mt-2 text-sm">
              <div className="font-bold">8万元</div>
              <div className="text-gray-600">15个调研对象的深入访谈</div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 md:p-6 rounded-lg relative group">
            <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRightCircle className="text-purple-500" />
            </div>
            <h3 className="font-bold text-purple-600">拓展机遇</h3>
            <p className="text-sm text-gray-600">25年预算申报</p>
            <div className="mt-2 text-sm">
              <div className="font-bold">55万元规划</div>
              <div className="text-gray-600">全过程咨询服务方案获认可</div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 md:p-6 rounded-lg">
            <h3 className="font-bold text-orange-600">深化合作</h3>
            <p className="text-sm text-gray-600">全过程咨询服务项目</p>
            <div className="mt-2 text-sm">
              <div className="font-bold">45万元</div>
              <div className="text-gray-600">为25年扩建项目实施打下基础</div>
            </div>
          </div>
        </div>

        {/* 成果展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-transform">
            <div className="font-bold text-2xl md:text-3xl text-blue-600 mb-2">75万</div>
            <div className="text-sm md:text-base text-gray-600">半年合同金额</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-transform">
            <div className="font-bold text-2xl md:text-3xl text-blue-600 mb-2">3个</div>
            <div className="text-sm md:text-base text-gray-600">成功项目</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-transform">
            <div className="font-bold text-2xl md:text-3xl text-blue-600 mb-2">100万+</div>
            <div className="text-sm md:text-base text-gray-600">25年商机</div>
          </div>
        </div>

        {/* 成功要素 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-bold flex items-center gap-2">
              <Award className="text-blue-500" size={20} />
              优质服务赢得信任
            </h3>
            <ul className="text-sm mt-2 list-disc pl-4 space-y-1">
              <li>高标准完成首个项目</li>
              <li>专业的服务能力展现</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-bold flex items-center gap-2">
              <Target className="text-green-500" size={20} />
              深入了解客户需求
            </h3>
            <ul className="text-sm mt-2 list-disc pl-4 space-y-1">
              <li>扎实开展调研工作</li>
              <li>准确把握客户痛点</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-bold flex items-center gap-2">
              <Users className="text-purple-500" size={20} />
              专业能力得到认可
            </h3>
            <ul className="text-sm mt-2 list-disc pl-4 space-y-1">
              <li>前瞻性的规划视野</li>
              <li>务实的解决方案</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 项目概述
    <Slide key="project-overview">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
            广州市公共文化云平台全过程工程支撑管理服务
          </h2>
          <div className="text-lg md:text-xl text-gray-600">服务内容与实施成效分析</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
            <h3 className="font-bold mb-4">项目背景</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>初次立项合作建立信任基础</li>
              <li>深入调研发现系统优化需求</li>
              <li>全过程咨询需求应运而生</li>
              <li>合同总额44.588万元</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 md:p-6 rounded-lg">
            <h3 className="font-bold mb-4">项目特点</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>覆盖文化馆、图书馆、博物馆等多个部门</li>
              <li>涉及系统建设全生命周期</li>
              <li>服务内容深入且全面</li>
              <li>注重实效性与可持续性</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
          <h3 className="font-bold mb-4">五大核心服务内容概览</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
              <Layers className="mx-auto text-blue-500 mb-2" />
              <div className="font-bold">顶层规划</div>
              <div className="text-sm text-gray-600">战略定位分析</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
              <Search className="mx-auto text-green-500 mb-2" />
              <div className="font-bold">需求调研</div>
              <div className="text-sm text-gray-600">多维度分析</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
              <Shield className="mx-auto text-purple-500 mb-2" />
              <div className="font-bold">监督管理</div>
              <div className="text-sm text-gray-600">全程质量把控</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
              <ClipboardCheck className="mx-auto text-orange-500 mb-2" />
              <div className="font-bold">验收评估</div>
              <div className="text-sm text-gray-600">严格交付审核</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
              <Calculator className="mx-auto text-red-500 mb-2" />
              <div className="font-bold">成本评估</div>
              <div className="text-sm text-gray-600">专业造价咨询</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 五大服务内容详解-1
    <Slide key="service-detail-1">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">五大服务内容详解（上）</h2>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-blue-500" size={24} />
              <h3 className="font-bold text-lg">顶层规划设计</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>深度调研文化场馆
                <div className="text-sm text-gray-600 ml-4">- 覆盖文化馆、图书馆、博物馆等机构</div>
                <div className="text-sm text-gray-600 ml-4">- 系统梳理业务痛点和需求</div>
              </li>
              <li>问题剖析与定位
                <div className="text-sm text-gray-600 ml-4">- 分析现有系统存在问题</div>
                <div className="text-sm text-gray-600 ml-4">- 明确未来发展方向</div>
              </li>
              <li>规划设计输出
                <div className="text-sm text-gray-600 ml-4">- 制定中长期发展规划</div>
                <div className="text-sm text-gray-600 ml-4">- 为新建项目提供依据</div>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Search className="text-green-500" size={24} />
              <h3 className="font-bold text-lg">需求调研分析</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>多维度调研
                <div className="text-sm text-gray-600 ml-4">- 对标其他地级市建设现状</div>
                <div className="text-sm text-gray-600 ml-4">- 分析优秀案例经验</div>
              </li>
              <li>需求分析与对标
                <div className="text-sm text-gray-600 ml-4">- 汇总调研发现与建议</div>
                <div className="text-sm text-gray-600 ml-4">- 提出优化改进方向</div>
              </li>
              <li>持续沟通反馈
                <div className="text-sm text-gray-600 ml-4">- 定期向甲方汇报进展</div>
                <div className="text-sm text-gray-600 ml-4">- 及时调整优化方案</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 五大服务内容详解-2
    <Slide key="service-detail-2">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">五大服务内容详解（下）</h2>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-purple-500" size={24} />
              <h3 className="font-bold text-lg">项目监督管理</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>差异化指导
                <div className="text-sm text-gray-600 ml-4">- 针对不同水平人员制定指导方案</div>
                <div className="text-sm text-gray-600 ml-4">- 提供专业咨询支持</div>
              </li>
              <li>过程监督管理
                <div className="text-sm text-gray-600 ml-4">- 协助问题协调处理</div>
                <div className="text-sm text-gray-600 ml-4">- 确保项目有序推进</div>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="text-orange-500" size={24} />
              <h3 className="font-bold text-lg">验收评估支撑</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>验收流程指导
                <div className="text-sm text-gray-600 ml-4">- 制定验收工作方案</div>
                <div className="text-sm text-gray-600 ml-4">- 明确验收标准要求</div>
              </li>
              <li>交付物审核
                <div className="text-sm text-gray-600 ml-4">- 系统功能验证评估</div>
                <div className="text-sm text-gray-600 ml-4">- 源码完整性审核</div>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="text-red-500" size={24} />
              <h3 className="font-bold text-lg">软件成本评估</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>专业评估服务
                <div className="text-sm text-gray-600 ml-4">- 提供专项成本预评估</div>
                <div className="text-sm text-gray-600 ml-4">- 确保投资合理性</div>
              </li>
              <li>优化建议
                <div className="text-sm text-gray-600 ml-4">- 分析成本构成</div>
                <div className="text-sm text-gray-600 ml-4">- 提出优化方案</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 项目亮点和成效
    <Slide key="highlights">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">项目亮点与实施成效</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-4">服务亮点</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>深度调研
                <div className="text-sm text-gray-600 ml-4">- 15个调研对象深入访谈</div>
                <div className="text-sm text-gray-600 ml-4">- 多层面需求收集分析</div>
              </li>
              <li>专业服务
                <div className="text-sm text-gray-600 ml-4">- 全过程精细化管理</div>
                <div className="text-sm text-gray-600 ml-4">- 专业化咨询支持</div>
              </li>
              <li>成本管控
                <div className="text-sm text-gray-600 ml-4">- 严格的造价评估</div>
                <div className="text-sm text-gray-600 ml-4">- 合理的资源配置</div>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 md:p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-4">实施成效</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>规划引领
                <div className="text-sm text-gray-600 ml-4">- 明确发展方向</div>
                <div className="text-sm text-gray-600 ml-4">- 优化建设路径</div>
              </li>
              <li>过程管控
                <div className="text-sm text-gray-600 ml-4">- 提升项目质量</div>
                <div className="text-sm text-gray-600 ml-4">- 降低建设风险</div>
              </li>
              <li>效益提升
                <div className="text-sm text-gray-600 ml-4">- 优化资源配置</div>
                <div className="text-sm text-gray-600 ml-4">- 提高投资效益</div>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 bg-yellow-50 p-4 md:p-6 rounded-lg">
            <h3 className="font-bold mb-4">后续展望</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-blue-600 mb-2">继续深化服务</div>
                <div className="text-sm">持续提供高质量咨询支持</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-blue-600 mb-2">拓展合作空间</div>
                <div className="text-sm">争取25年扩建项目实施</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-blue-600 mb-2">挖掘新机遇</div>
                <div className="text-sm">持续发掘新的商业机会</div>
              </div>
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
    window.location.href = '/slides-1';
  };

  const goToNextChapter = () => {
    window.location.href = '/slides-3';
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

export default Chapter2Slides; 
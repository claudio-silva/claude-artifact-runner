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

const Chapter1Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 封面页
    <Slide key="0" className="flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6">数字政府全过程咨询业务概述</h1>
      <div className="text-xl text-gray-600 mb-4">从业务认知到实践落地</div>
      <div className="text-lg text-blue-600">提升政府数字化转型效能的必由之路</div>
    </Slide>,

    // 基础认知
    <Slide key="1">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">数字政府咨询业务基础认知</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold mb-4">核心理解要点</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>全过程的范围
              <div className="text-sm text-gray-600 ml-4">- 从前期规划到建设运维全周期</div>
              <div className="text-sm text-gray-600 ml-4">- 覆盖技术、业务、管理等维度</div>
            </li>
            <li>咨询的重点内容
              <div className="text-sm text-gray-600 ml-4">- 业务流程优化与再造</div>
              <div className="text-sm text-gray-600 ml-4">- 数字化转型顶层设计</div>
              <div className="text-sm text-gray-600 ml-4">- 系统建设技术方案</div>
            </li>
            <li>常见项目类型
              <div className="text-sm text-gray-600 ml-4">- 政务服务一体化平台</div>
              <div className="text-sm text-gray-600 ml-4">- 数据共享交换平台</div>
              <div className="text-sm text-gray-600 ml-4">- 智慧应用专项系统</div>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="font-bold mb-4">业务特点分析</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>政策法规要求高
              <div className="text-sm text-gray-600 ml-4">- 需符合等保要求</div>
              <div className="text-sm text-gray-600 ml-4">- 满足政务云迁移规范</div>
            </li>
            <li>业务协同难度大
              <div className="text-sm text-gray-600 ml-4">- 跨部门数据共享</div>
              <div className="text-sm text-gray-600 ml-4">- 业务流程再造</div>
            </li>
            <li>实施周期相对长
              <div className="text-sm text-gray-600 ml-4">- 立项审批流程长</div>
              <div className="text-sm text-gray-600 ml-4">- 建设周期跨年度</div>
            </li>
          </ul>
        </div>
      </div>
    </Slide>,

    // 咨询服务全流程图解
    <Slide key="2">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">咨询服务全流程图解</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">一、规划阶段</h3>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">前期准备</p>
              <ul className="list-disc pl-4 text-sm">
                <li>收集相关政策文件</li>
                <li>了解建设单位现状</li>
                <li>分析信息化水平</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">规划编制</p>
              <ul className="list-disc pl-4 text-sm">
                <li>总体架构设计</li>
                <li>发展路径规划</li>
                <li>项目清单梳理</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">二、设计阶段</h3>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">需求分析</p>
              <ul className="list-disc pl-4 text-sm">
                <li>业务流程梳理</li>
                <li>功能需求分析</li>
                <li>数据需求调研</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">方案设计</p>
              <ul className="list-disc pl-4 text-sm">
                <li>技术方案编制</li>
                <li>概算编制审核</li>
                <li>实施计划制定</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">三、建设阶段</h3>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">过程管理</p>
              <ul className="list-disc pl-4 text-sm">
                <li>进度监督控制</li>
                <li>质量检查评估</li>
                <li>文档规范审核</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">评估验收</p>
              <ul className="list-disc pl-4 text-sm">
                <li>测试方案审核</li>
                <li>验收材料审查</li>
                <li>整改建议提供</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">四、运营阶段</h3>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">运维保障</p>
              <ul className="list-disc pl-4 text-sm">
                <li>运维体系搭建</li>
                <li>应急预案制定</li>
                <li>培训方案设计</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">持续优化</p>
              <ul className="list-disc pl-4 text-sm">
                <li>效果评估分析</li>
                <li>优化建议提供</li>
                <li>迭代计划制定</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 咨询团队组建要求
    <Slide key="3">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">咨询团队组建要求</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-3">核心团队配置</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>项目经理（1名）
                <div className="text-sm text-gray-600 ml-4">- 高级工程师职称</div>
                <div className="text-sm text-gray-600 ml-4">- PMP认证</div>
                <div className="text-sm text-gray-600 ml-4">- 5年以上经验</div>
              </li>
              <li>技术总监（1名）
                <div className="text-sm text-gray-600 ml-4">- 系统架构师</div>
                <div className="text-sm text-gray-600 ml-4">- 技术方案把控</div>
              </li>
              <li>咨询顾问（2-3名）
                <div className="text-sm text-gray-600 ml-4">- 业务分析能力</div>
                <div className="text-sm text-gray-600 ml-4">- 方案编写能力</div>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-3">专业能力要求</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>业务能力
                <div className="text-sm text-gray-600 ml-4">- 政务服务流程</div>
                <div className="text-sm text-gray-600 ml-4">- 数据治理规范</div>
                <div className="text-sm text-gray-600 ml-4">- 项目管理体系</div>
              </li>
              <li>技术能力
                <div className="text-sm text-gray-600 ml-4">- 主流技术架构</div>
                <div className="text-sm text-gray-600 ml-4">- 安全防护体系</div>
                <div className="text-sm text-gray-600 ml-4">- 集成测试规范</div>
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-3">团队管理制度</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>人员管理
                <div className="text-sm text-gray-600 ml-4">- 岗位职责明确</div>
                <div className="text-sm text-gray-600 ml-4">- 考核机制完善</div>
              </li>
              <li>质量管理
                <div className="text-sm text-gray-600 ml-4">- 成果审核机制</div>
                <div className="text-sm text-gray-600 ml-4">- 复核校验流程</div>
              </li>
              <li>知识管理
                <div className="text-sm text-gray-600 ml-4">- 经验案例积累</div>
                <div className="text-sm text-gray-600 ml-4">- 培训交流机制</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-bold mb-3">团队建设要点</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-3 rounded shadow">
              <div className="font-bold text-blue-600">专业互补</div>
              <div className="text-sm mt-2">技术、业务、管理等领域专业能力互补</div>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <div className="font-bold text-blue-600">经验丰富</div>
              <div className="text-sm mt-2">具备类似项目经验，熟悉业务特点</div>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <div className="font-bold text-blue-600">稳定可靠</div>
              <div className="text-sm mt-2">核心成员稳定，响应及时高效</div>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <div className="font-bold text-blue-600">持续学习</div>
              <div className="text-sm mt-2">保持知识更新，跟踪技术发展</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 成功要素与效益分析
    <Slide key="4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">成功要素与效益分析</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold mb-4">关键成功要素</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-600">高层重视与支持</p>
              <ul className="list-disc pl-6 text-sm">
                <li>明确工作责任制</li>
                <li>协调解决重大问题</li>
                <li>保障资源投入</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-600">专业的咨询团队</p>
              <ul className="list-disc pl-6 text-sm">
                <li>丰富的项目经验</li>
                <li>扎实的专业功底</li>
                <li>优秀的沟通能力</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-600">科学的工作方法</p>
              <ul className="list-disc pl-6 text-sm">
                <li>规范的项目管理</li>
                <li>完善的质量控制</li>
                <li>有效的风险防范</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="font-bold mb-4">项目效益分析</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-green-600">社会效益</p>
              <ul className="list-disc pl-6 text-sm">
                <li>提升政府服务水平</li>
                <li>增强群众获得感</li>
                <li>促进政府治理现代化</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-green-600">经济效益</p>
              <ul className="list-disc pl-6 text-sm">
                <li>降低行政运行成本</li>
                <li>提高资源使用效率</li>
                <li>带动相关产业发展</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-green-600">管理效益</p>
              <ul className="list-disc pl-6 text-sm">
                <li>优化业务流程</li>
                <li>提升管理效率</li>
                <li>增强决策科学性</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-yellow-50 p-6 rounded-lg">
          <h3 className="font-bold mb-4">实践经验总结</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="font-bold text-blue-600 mb-2">前期准备阶段</div>
              <ul className="list-disc pl-4 text-sm">
                <li>充分的需求调研</li>
                <li>详细的现状分析</li>
                <li>准确的问题诊断</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="font-bold text-blue-600 mb-2">实施推进阶段</div>
              <ul className="list-disc pl-4 text-sm">
                <li>科学的推进方法</li>
                <li>及时的过程监控</li>
                <li>有效的风险管理</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="font-bold text-blue-600 mb-2">收尾总结阶段</div>
              <ul className="list-disc pl-4 text-sm">
                <li>全面的效果评估</li>
                <li>系统的经验总结</li>
                <li>持续的优化改进</li>
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

  const goToNextChapter = () => {
    window.location.href = '/slides-2';
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
          {/* 空白占位，保持布局对称 */}
          <div className="w-[100px]"></div>
          
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

export default Chapter1Slides;
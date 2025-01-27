import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const BackgroundSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 背景概览页
    {
      type: 'overview',
      content: {
        title: '一、宏观背景与项目动因',
        subtitle: '数字化转型浪潮下的机遇与挑战',
        points: [
          '业务数字化转型大趋势',
          '省地协同联动需求',
          '业主项目部职责变化'
        ]
      }
    },
    // 数字化转型趋势页
    {
      type: 'digital-transformation',
      content: {
        title: '1.1 业务数字化转型大趋势',
        items: [
          {
            title: '行业趋势',
            points: [
              '电力行业数字化转型进入深水区',
              '企业对数字化赋能业务提出更高要求',
              '传统需求管理模式难以支撑复杂多变的业务需求'
            ]
          },
          {
            title: '挑战与痛点',
            points: [
              '业务系统建设"能用"与"好用"之间存在差距',
              '需求响应速度难以满足业务快速迭代需求',
              '数字化转型效果与业务期望之间存在落差'
            ]
          }
        ]
      }
    },
    // 省地协同需求页
    {
      type: 'collaboration',
      content: {
        title: '1.2 省地协同联动需求',
        sections: [
          {
            icon: '📜',
            title: '政策要求',
            content: '公司《关于成立公司信息化项目业主项目部的通知》等文件出台'
          },
          {
            icon: '🔄',
            title: '机制创新',
            content: '进一步加强"自上而下"与"自下而上"相结合的数字化建设机制'
          },
          {
            icon: '🎯',
            title: '目标明确',
            content: '明确各专业条线、省地协同开展业务数字化的目标'
          }
        ]
      }
    },
    // 业主项目部职责变化页
    {
      type: 'responsibility',
      content: {
        title: '1.3 业主项目部职责变化',
        changes: [
          {
            title: '角色转变',
            before: '需求被动接收方',
            after: '核心组织者与牵引者',
            key: '主动性增强'
          },
          {
            title: '职责扩展',
            before: '单一需求管理',
            after: '全流程统筹管理',
            key: '管理范围扩大'
          },
          {
            title: '能力要求',
            before: '基础沟通协调',
            after: '专业化项目管理',
            key: '能力要求提升'
          }
        ]
      }
    },
    // 小结页
    {
      type: 'summary',
      content: {
        title: '背景小结',
        summary: [
          '数字化转型已成为电力行业发展的必然趋势',
          '省地协同联动机制亟需加强和完善',
          '业主项目部角色定位和职责范围发生重大变化',
          '建立规范的需求管理体系迫在眉睫'
        ]
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderOverviewSlide = (content) => (
    <div className="flex flex-col items-center justify-center h-full text-center p-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">{content.title}</h1>
      <h2 className="text-2xl mb-12 text-gray-700">{content.subtitle}</h2>
      <div className="flex flex-col space-y-6">
        {content.points.map((point, index) => (
          <div key={index} className="text-xl bg-blue-50 p-4 rounded-lg text-blue-700 border border-blue-200">
            {point}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDigitalTransformationSlide = (content) => (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">{content.title}</h2>
      <div className="grid grid-cols-2 gap-8">
        {content.items.map((item, index) => (
          <Card key={index} className="bg-gray-50 p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">{item.title}</h3>
            <ul className="space-y-3 text-gray-700">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCollaborationSlide = (content) => (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">{content.title}</h2>
      <div className="grid grid-cols-3 gap-8">
        {content.sections.map((section, index) => (
          <Card key={index} className="bg-gray-50 p-6 text-center shadow-md">
            <div className="text-4xl mb-4">{section.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">{section.title}</h3>
            <p className="text-gray-700">{section.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderResponsibilitySlide = (content) => (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">{content.title}</h2>
      <div className="space-y-8">
        {content.changes.map((change, index) => (
          <Card key={index} className="bg-gray-50 p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">{change.title}</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-medium mb-2 text-gray-700">原有定位</div>
                <div className="bg-red-50 p-2 rounded text-red-700 border border-red-200">
                  {change.before}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium mb-2 text-gray-700">转变重点</div>
                <div className="bg-yellow-50 p-2 rounded text-yellow-700 border border-yellow-200">
                  {change.key}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium mb-2 text-gray-700">现有定位</div>
                <div className="bg-green-50 p-2 rounded text-green-700 border border-green-200">
                  {change.after}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSummarySlide = (content) => (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">{content.title}</h2>
      <div className="space-y-6">
        {content.summary.map((point, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg text-gray-700 border border-blue-200">
            <span className="text-blue-700 font-medium">{index + 1}. </span>
            {point}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'overview':
        return renderOverviewSlide(slide.content);
      case 'digital-transformation':
        return renderDigitalTransformationSlide(slide.content);
      case 'collaboration':
        return renderCollaborationSlide(slide.content);
      case 'responsibility':
        return renderResponsibilitySlide(slide.content);
      case 'summary':
        return renderSummarySlide(slide.content);
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto">
        <div className="relative h-screen flex items-center justify-center">
          {/* Slide content */}
          <div className="w-full max-w-6xl">
            {renderSlide(slides[currentSlide])}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-lg text-gray-700">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700"
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlides;
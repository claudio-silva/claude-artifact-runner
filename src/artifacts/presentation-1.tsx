import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Zap, Users, LineChart, Layers, GitBranch, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        prevSlide();
      } else if (event.key === 'Escape') {
        navigate('/presentation-0');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);

  const slides = [
    // 宏观背景
    {
      type: 'background',
      content: {
        title: '一、宏观背景与项目动因',
        points: [
          {
            title: '数字化转型趋势',
            content: '电力行业数字化加速推进，企业对"数字化赋能业务"提出更高要求',
            icon: <Zap className="w-8 h-8 text-blue-600" />
          },
          {
            title: '省地协同需求',
            content: '加强"自上而下"与"自下而上"相结合的数字化建设机制',
            icon: <GitBranch className="w-8 h-8 text-blue-600" />
          },
          {
            title: '业主项目部转型',
            content: '从需求接收方转变为核心组织者与牵引者',
            icon: <Users className="w-8 h-8 text-blue-600" />
          }
        ]
      }
    },
    // 立项必要性
    {
      type: 'necessity',
      content: {
        title: '二、立项必要性分析',
        problems: [
          {
            title: '需求管理痛点',
            items: [
              '缺乏明确的工作指引',
              '产品管理标准不足',
              '难以保证需求管理质量'
            ]
          },
          {
            title: '产品建设挑战',
            items: [
              '需求质量不高、变更频繁',
              '迭代周期长、资源浪费大',
              '创新性和可持续性不足'
            ]
          }
        ]
      }
    },
    // 目标价值
    {
      type: 'value',
      content: {
        title: '三、目标与预期价值',
        targets: [
          {
            icon: <Target className="w-10 h-10 text-blue-600" />,
            title: '完善需求管理体系',
            desc: '建立标准化流程和质量评价体系'
          },
          {
            icon: <Users className="w-10 h-10 text-blue-600" />,
            title: '实现高效协同',
            desc: '省地联动、多部门配合'
          },
          {
            icon: <LineChart className="w-10 h-10 text-blue-600" />,
            title: '提升建设效率',
            desc: '缩短交付周期，提高资源利用率'
          }
        ]
      }
    },
    // 战略关联
    {
      type: 'strategy',
      content: {
        title: '四、与企业发展战略的关联',
        points: [
          {
            title: '支撑数字化转型',
            content: '提供可复制、可推广的实践经验',
            icon: <Layers className="w-8 h-8 text-blue-600" />
          },
          {
            title: '深化省地联动',
            content: '统筹资源配置，发挥基层优势',
            icon: <GitBranch className="w-8 h-8 text-blue-600" />
          },
          {
            title: '树立标杆示范',
            content: '打造业主项目部需求管理标杆',
            icon: <Target className="w-8 h-8 text-blue-600" />
          }
        ]
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= slides.length) {
        // 如果是最后一页，返回目录
        navigate('/presentation-0');
        return prev;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        // 如果是第一页，返回目录
        navigate('/presentation-0');
        return prev;
      }
      return prev - 1;
    });
  };

  const goHome = () => {
    navigate('/presentation-0');
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'background':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="space-y-8">
              {slide.content.points.map((point, index) => (
                <div key={index} className="bg-gray-50 shadow-sm p-6 rounded-lg flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{point.title}</h3>
                    <p className="text-lg text-gray-600">{point.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'necessity':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.content.problems.map((problem, index) => (
                <div key={index} className="bg-gray-50 shadow-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{problem.title}</h3>
                  <ul className="space-y-3">
                    {problem.items.map((item, idx) => (
                      <li key={idx} className="text-lg text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'value':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-3 gap-8">
              {slide.content.targets.map((target, index) => (
                <div key={index} className="bg-gray-50 shadow-sm p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">{target.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{target.title}</h3>
                  <p className="text-lg text-gray-600">{target.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="space-y-6">
              {slide.content.points.map((point, index) => (
                <div key={index} className="bg-gray-50 shadow-sm p-6 rounded-lg flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{point.title}</h3>
                    <p className="text-lg text-gray-600">{point.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto">
        <div className="relative h-screen flex items-center justify-center">
          {/* Slide content */}
          <div className="w-full max-w-6xl">
            {renderSlide(slides[currentSlide])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
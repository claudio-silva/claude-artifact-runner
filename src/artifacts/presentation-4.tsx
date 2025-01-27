import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Users, LineChart, Monitor, GitMerge, Wrench, ClipboardList, BookOpen, Flag, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const SolutionSlides = () => {
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
    // 总体思路
    {
      type: 'overview',
      content: {
        title: '解决方案总体思路',
        subtitle: '端到端的需求管理体系',
        keyPoints: [
          {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: '业务需求驱动',
            desc: '建立端到端需求管理体系，全流程透明化管理'
          },
          {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: '双项目经理制',
            desc: '明确责任边界和协作机制，打通信息通道'
          },
          {
            icon: <LineChart className="w-8 h-8 text-blue-600" />,
            title: '国际标准结合',
            desc: 'ISO 9001与CMMI5模型相结合，确保质量管理'
          }
        ]
      }
    },
    // 核心流程
    {
      type: 'process',
      content: {
        title: '需求管理核心流程',
        steps: [
          {
            phase: '需求收集',
            activities: [
              '多渠道全方位收集',
              '标准模板快速筛选',
              '初步优先级划分'
            ]
          },
          {
            phase: '分析评审',
            activities: [
              '多方参与讨论',
              '统一评审标准',
              '确定需求范围'
            ]
          },
          {
            phase: '设计实现',
            activities: [
              '需求规格说明',
              '业务流程设计',
              '技术实现跟踪'
            ]
          },
          {
            phase: '验证交付',
            activities: [
              '标准化验收',
              '用户试用反馈',
              '迭代优化改进'
            ]
          },
          {
            phase: '变更管理',
            activities: [
              '变更评估机制',
              '影响分析评估',
              '完整记录追溯'
            ]
          }
        ]
      }
    },
    // 方法论
    {
      type: 'methodology',
      content: {
        title: '方法论与最佳实践',
        frameworks: [
          {
            name: 'ISO 9001',
            features: [
              '过程方法应用',
              'PDCA循环实践',
              '质量管理体系'
            ]
          },
          {
            name: 'CMMI5',
            features: [
              '关键过程域对标',
              '持续改进机制',
              '成熟度评估体系'
            ]
          },
          {
            name: '双项目经理制',
            features: [
              '横向协同机制',
              '纵向联动机制',
              '资源共享机制'
            ]
          }
        ]
      }
    },
    // 管理标准
    {
      type: 'standards',
      content: {
        title: '需求管理标准体系',
        standards: [
          {
            category: '管理标准',
            items: [
              '需求文档模板',
              '角色责任定义',
              '评审签字流程'
            ]
          },
          {
            category: '质量评价',
            items: [
              '质量属性定义',
              '量化评价指标',
              '评估频次规范'
            ]
          }
        ]
      }
    },
    // 工具平台
    {
      type: 'tools',
      content: {
        title: '工具与平台支持',
        platforms: [
          {
            icon: <Monitor className="w-8 h-8 text-blue-600" />,
            name: '需求管理平台',
            features: [
              '全流程电子化',
              '多系统集成',
              '实时状态追踪'
            ]
          },
          {
            icon: <GitMerge className="w-8 h-8 text-blue-600" />,
            name: '协同与可视化',
            features: [
              '实时协作工具',
              '可视化看板',
              '进度跟踪图表'
            ]
          }
        ]
      }
    },
    // 实施保障
    {
      type: 'implementation',
      content: {
        title: '实施保障与落地',
        guarantees: [
          {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: '组织保障',
            desc: '设立专门的需求管理小组，明确各方职责'
          },
          {
            icon: <BookOpen className="w-8 h-8 text-blue-600" />,
            title: '培训推广',
            desc: '分阶段开展培训，建立经验交流机制'
          },
          {
            icon: <Flag className="w-8 h-8 text-blue-600" />,
            title: '试点改进',
            desc: '重点领域试点，持续收集反馈优化'
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
      case 'overview':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <h3 className="text-xl text-gray-600 mb-8">{slide.content.subtitle}</h3>
            <div className="grid grid-cols-3 gap-8">
              {slide.content.keyPoints.map((point, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{point.title}</h3>
                  <p className="text-sm text-gray-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-5 gap-4">
              {slide.content.steps.map((step, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{step.phase}</h3>
                  <ul className="space-y-2">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'methodology':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-3 gap-8">
              {slide.content.frameworks.map((framework, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{framework.name}</h3>
                  <ul className="space-y-3">
                    {framework.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'standards':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.content.standards.map((standard, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{standard.category}</h3>
                  <ul className="space-y-3">
                    {standard.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.content.platforms.map((platform, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{platform.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{platform.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'implementation':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-3 gap-8">
              {slide.content.guarantees.map((guarantee, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="text-4xl mb-4">{guarantee.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{guarantee.title}</h3>
                  <p className="text-sm text-gray-600">{guarantee.desc}</p>
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

export default SolutionSlides;
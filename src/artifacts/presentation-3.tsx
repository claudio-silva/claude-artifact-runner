import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe, Database, Users, BarChart, Timer, RefreshCw, GitMerge, FileCheck, Scale, ClipboardCheck, Target, Search, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RequirementChallenges = () => {
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
    // 概览页
    {
      type: 'overview',
      content: {
        title: '需求管理难点分析',
        subtitle: '系统性解析当前需求管理面临的挑战',
        description: '通过深入调研，我们发现需求管理主要存在六大关键难点'
      }
    },
    // 需求收集难点
    {
      type: 'challenge',
      content: {
        title: '需求收集缺乏统一机制',
        challenges: [
          {
            icon: <GitMerge className="w-8 h-8 text-blue-600" />,
            title: '上下游衔接不畅',
            desc: '业务部门、技术部门、管理层、基层单位的信息沟通渠道不统一'
          },
          {
            icon: <FileCheck className="w-8 h-8 text-blue-600" />,
            title: '需求收集方式松散',
            desc: '缺少流程化、标准化的需求收集模板或制度，容易出现遗漏或重复需求'
          },
          {
            icon: <Scale className="w-8 h-8 text-blue-600" />,
            title: '需求优先级不明',
            desc: '缺少客观的评判标准，无法科学分配资源'
          }
        ]
      }
    },
    // 需求分析与评审难点
    {
      type: 'challenge',
      content: {
        title: '需求分析与评审过程复杂',
        challenges: [
          {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: '多方利益诉求',
            desc: '不同专业条线和部门对同一需求的理解可能存在冲突'
          },
          {
            icon: <BarChart className="w-8 h-8 text-blue-600" />,
            title: '评审标准不一致',
            desc: '缺乏统一的评审指标或质量评价标准，"拍脑袋"式的决策较多'
          },
          {
            icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
            title: '变更频繁',
            desc: '需求在分析、评审阶段容易被多次修改，导致进度和成本失控'
          }
        ]
      }
    },
    // 需求设计难点
    {
      type: 'challenge',
      content: {
        title: '需求设计与实现衔接不足',
        challenges: [
          {
            icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
            title: '文档化程度不够',
            desc: '需求设计文件或原型缺乏详实标准，无法支撑后续开发或配置'
          },
          {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: '实施可行性评估不足',
            desc: '缺少对技术可行性、业务影响、风险等系统性评估，导致设计不落地'
          },
          {
            icon: <Search className="w-8 h-8 text-blue-600" />,
            title: '目标对齐不足',
            desc: '在需求设计过程中，业务目标和用户体验可能被忽视，导致产出偏离实际需求'
          }
        ]
      }
    },
    // 管理标准难点
    {
      type: 'challenge',
      content: {
        title: '需求管理标准与评价体系缺失',
        challenges: [
          {
            icon: <Scale className="w-8 h-8 text-blue-600" />,
            title: '质量衡量难',
            desc: '需求"好不好"主要靠个人经验判断，主观性强'
          },
          {
            icon: <BarChart className="w-8 h-8 text-blue-600" />,
            title: '缺乏度量指标',
            desc: '无法对需求质量或需求管理绩效进行量化评估'
          },
          {
            icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
            title: '缺少持续改进机制',
            desc: '没有正式的回溯、复盘流程，难以及时纠偏和优化'
          }
        ]
      }
    },
    // 协同难点
    {
      type: 'challenge',
      content: {
        title: '多方协同难度大',
        challenges: [
          {
            icon: <Globe className="w-8 h-8 text-blue-600" />,
            title: '省地协同落实难',
            desc: '省公司、地市公司、外部合作单位之间角色交错、责任边界模糊'
          },
          {
            icon: <Database className="w-8 h-8 text-blue-600" />,
            title: '信息孤岛',
            desc: '使用不同的工具和平台，数据/信息不能实时共享'
          },
          {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: '双项目经理制磨合',
            desc: '新机制缺乏成熟方法论，角色协作经验不足'
          }
        ]
      }
    },
    // 资源管控难点
    {
      type: 'challenge',
      content: {
        title: '资源和进度管控挑战',
        challenges: [
          {
            icon: <BarChart className="w-8 h-8 text-blue-600" />,
            title: '项目资源调度复杂',
            desc: '同一阶段多个需求并行，人员、预算难于合理分配'
          },
          {
            icon: <Timer className="w-8 h-8 text-blue-600" />,
            title: '周期管理不透明',
            desc: '因需求定义模糊、评审冗长导致周期拉长，后续影响整体进度'
          },
          {
            icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
            title: '需求变更导致浪费',
            desc: '频繁的需求变更造成返工、重复开发，增加人力和时间成本'
          }
        ]
      }
    },
    // 总结页
    {
      type: 'summary',
      content: {
        title: '需求管理难点总结',
        points: [
          '缺乏统一性、标准化和有效的协同机制',
          '管理标准和评价体系存在空白',
          '省地协同与双项目经理制需要系统化设计'
        ],
        conclusion: '这些难点亟需通过系统化的解决方案来进行优化和改进'
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
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{slide.content.title}</h1>
            <h2 className="text-2xl text-gray-600 mb-8">{slide.content.subtitle}</h2>
            <p className="text-xl text-gray-700">{slide.content.description}</p>
          </div>
        );

      case 'challenge':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-3 gap-8">
              {slide.content.challenges.map((challenge, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{challenge.title}</h3>
                  <p className="text-sm text-gray-600">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="space-y-6 mb-8">
              {slide.content.points.map((point, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-4">
                  <p className="text-lg text-gray-700">• {point}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-xl text-center text-gray-700">{slide.content.conclusion}</p>
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

export default RequirementChallenges;
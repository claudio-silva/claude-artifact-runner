import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, BarChart2, Users, ClipboardList, Map, Rocket, BookOpen, Settings, Shield, Flag, LineChart, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudySlides = () => {
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
    // 项目概览
    {
      type: 'overview',
      content: {
        title: '数智型交易平台成熟度评估与建设路径',
        subtitle: '南方联合产权交易中心数字化转型案例',
        highlights: [
          {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: '项目规模',
            desc: '覆盖多个电子化交易平台及系统'
          },
          {
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
            title: '项目周期',
            desc: '完整经历从评估到落地的全过程'
          },
          {
            icon: <Settings className="w-8 h-8 text-blue-600" />,
            title: '创新价值',
            desc: '首创数智型交易平台成熟度评估模型'
          }
        ]
      }
    },
    // 项目背景
    {
      type: 'background',
      content: {
        title: '项目背景与目标',
        sections: [
          {
            title: '项目背景',
            points: [
              '已建设"粤易租""粤采易"等多个交易平台',
              '数字经济浪潮推动平台升级需求',
              '从"信息化"向"数智化"转型的迫切性'
            ]
          },
          {
            title: '项目目标',
            points: [
              '全面评估平台数智化成熟度',
              '制定数智化建设路径规划',
              '为平台可持续发展奠定基础'
            ]
          }
        ]
      }
    },
    // 研究方法
    {
      type: 'methodology',
      content: {
        title: '主要研究内容与方法',
        methods: [
          {
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
            title: '成熟度评估',
            steps: [
              '建立多维度评估模型',
              '实地调研与数据采集',
              '对标分析找出差距'
            ]
          },
          {
            icon: <Settings className="w-8 h-8 text-blue-600" />,
            title: '建设路径',
            steps: [
              '技术架构演进路线',
              '业务场景深化融合',
              '安全合规体系建设'
            ]
          },
          {
            icon: <LineChart className="w-8 h-8 text-blue-600" />,
            title: '可行性分析',
            steps: [
              '评估现有建设基础',
              '分析转型必要性',
              '制定实施策略'
            ]
          }
        ]
      }
    },
    // 实施过程
    {
      type: 'implementation',
      content: {
        title: '实施过程与关键举措',
        phases: [
          {
            phase: '项目启动',
            actions: [
              '目标确认与范围界定',
              '组建专业研究团队',
              '开展现状调研'
            ]
          },
          {
            phase: '评估诊断',
            actions: [
              '构建指标体系',
              '开展数据分析',
              '形成评估报告'
            ]
          },
          {
            phase: '路径设计',
            actions: [
              '制定阶段目标',
              '规划具体方案',
              '测算投资预算'
            ]
          },
          {
            phase: '成果落地',
            actions: [
              '定期汇报评审',
              '形成最终报告',
              '推进方案实施'
            ]
          }
        ]
      }
    },
    // 项目成果
    {
      type: 'achievements',
      content: {
        title: '项目成果与价值体现',
        results: [
          {
            icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
            title: '评估模型',
            value: '形成完整的数智化成熟度评估体系'
          },
          {
            icon: <Map className="w-8 h-8 text-blue-600" />,
            title: '建设路径',
            value: '制定分阶段、可落地的实施方案'
          },
          {
            icon: <Rocket className="w-8 h-8 text-blue-600" />,
            title: '转型推进',
            value: '显著提升平台核心竞争力'
          },
          {
            icon: <BookOpen className="w-8 h-8 text-blue-600" />,
            title: '经验积累',
            value: '形成可复制推广的实践方法'
          }
        ]
      }
    },
    // 经验启示
    {
      type: 'insights',
      content: {
        title: '可复用经验与启示',
        insights: [
          {
            title: '科学评估',
            desc: '量化指标评估助力精准定位',
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />
          },
          {
            title: '双轮驱动',
            desc: '技术与业务深度融合',
            icon: <Settings className="w-8 h-8 text-blue-600" />
          },
          {
            title: '安全为重',
            desc: '数据安全与合规不可忽视',
            icon: <Shield className="w-8 h-8 text-blue-600" />
          },
          {
            title: '稳步推进',
            desc: '顶层设计与分步实施相结合',
            icon: <Flag className="w-8 h-8 text-blue-600" />
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{slide.content.title}</h2>
            <h3 className="text-xl text-gray-600 mb-12">{slide.content.subtitle}</h3>
            <div className="grid grid-cols-3 gap-8">
              {slide.content.highlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'background':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.content.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {point}</li>
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
              {slide.content.methods.map((method, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{method.title}</h3>
                  <ul className="space-y-2">
                    {method.steps.map((step, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {step}</li>
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
            <div className="grid grid-cols-4 gap-4">
              {slide.content.phases.map((phase, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.actions.map((action, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {action}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.content.results.map((result, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6 flex items-center">
                  <div className="text-4xl mr-4">{result.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{result.title}</h3>
                    <p className="text-sm text-gray-600">{result.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.content.insights.map((insight, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6 flex items-center">
                  <div className="text-4xl mr-4">{insight.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{insight.title}</h3>
                    <p className="text-sm text-gray-600">{insight.desc}</p>
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

export default CaseStudySlides;
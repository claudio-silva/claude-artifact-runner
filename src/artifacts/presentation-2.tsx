import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, RefreshCw, Shield, Database, GitMerge, Wrench, Target, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PowerIndustrySlides = () => {
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
    // Slide 1: 总览
    {
      type: 'overview',
      content: {
        title: '电力行业数字化建设特点分析',
        subtitle: '深度解析电力行业数字化转型关键要素'
      }
    },
    // Slide 2: 行业特征
    {
      type: 'features',
      content: {
        title: '电力行业数字化建设核心特征',
        features: [
          {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: '高可靠性要求',
            points: [
              '7×24小时不间断运行',
              '故障响应时间严格要求',
              '系统稳定性至关重要'
            ]
          },
          {
            icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
            title: '业务复杂性',
            points: [
              '发输配售全链条协同',
              '多层级垂直管理模式',
              '省-地市协同要求'
            ]
          },
          {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: '安全合规性',
            points: [
              '关键基础设施保护',
              '数据安全等级保护',
              '业务合规性要求'
            ]
          }
        ]
      }
    },
    // Slide 3: 建设难点
    {
      type: 'challenges',
      content: {
        title: '数字化建设关键难点',
        challenges: [
          {
            title: '架构复杂度',
            desc: '需要支撑省市多级架构，确保数据一致性和业务连续性',
            icon: <GitMerge className="w-8 h-8 text-blue-600" />
          },
          {
            title: '性能要求',
            desc: '海量数据处理、实时响应、高并发访问的性能挑战',
            icon: <Zap className="w-8 h-8 text-blue-600" />
          },
          {
            title: '集成难度',
            desc: '传统系统与新技术的融合，确保平稳过渡和兼容性',
            icon: <Wrench className="w-8 h-8 text-blue-600" />
          },
          {
            title: '标准规范',
            desc: '需符合电力行业特有的技术标准和管理规范要求',
            icon: <Target className="w-8 h-8 text-blue-600" />
          }
        ]
      }
    },
    // Slide 4: 我们的理解
    {
      type: 'insights',
      content: {
        title: '我们对电力行业的深刻理解',
        insights: [
          {
            icon: <Database className="w-8 h-8 text-blue-600" />,
            title: '数据资产管理',
            desc: '深入理解电力数据特征，建立完整数据治理体系'
          },
          {
            icon: <GitMerge className="w-8 h-8 text-blue-600" />,
            title: '业务协同模式',
            desc: '熟悉省地协同特点，打造高效联动机制'
          },
          {
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            title: '技术演进路径',
            desc: '把握技术发展趋势，规划最优升级路线'
          },
          {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: '落地实施经验',
            desc: '积累丰富实践案例，确保平稳实施交付'
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
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">{slide.content.title}</h1>
            <h2 className="text-2xl text-gray-600">{slide.content.subtitle}</h2>
          </div>
        );

      case 'features':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-3 gap-8">
              {slide.content.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {slide.content.challenges.map((challenge, index) => (
                <div key={index} 
                     className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{challenge.title}</h3>
                  <p className="text-sm text-gray-600">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{slide.content.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {slide.content.insights.map((insight, index) => (
                <div key={index} className="bg-gray-50 shadow-sm rounded-lg p-6 flex items-start">
                  <div className="text-3xl mr-4">{insight.icon}</div>
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

export default PowerIndustrySlides;
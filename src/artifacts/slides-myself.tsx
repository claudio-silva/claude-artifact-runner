import React, { useState, useEffect } from 'react';
import { Star, Award, Book, Briefcase, Code, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SpeakerIntro = () => {
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

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= slides.length) {
        navigate('/presentation-0');
        return prev;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        navigate('/presentation-0');
        return prev;
      }
      return prev - 1;
    });
  };

  const slides = [
    {
      type: 'intro',
      content: {
        title: '介绍',
        name: '洪浩东',
        role: '三级技术专家 | 系统架构师',
        sections: [
          {
            title: '标杆项目',
            icon: <Star className="w-8 h-8 text-blue-600" />,
            items: [
              '南方联合产权智慧投行服务平台',
              '广州市文旅局公共文化云信创改造'
            ],
            bgColor: 'bg-blue-50'
          },
          {
            title: '专业认证',
            icon: <Book className="w-8 h-8 text-green-600" />,
            items: [
              '软考中级（软件设计师）',
              '人工智能（高级）',
              '注册信息安全工程师（CISP）'
            ],
            bgColor: 'bg-green-50'
          },
          {
            title: '荣誉成就',
            icon: <Award className="w-8 h-8 text-purple-600" />,
            items: [
              '2023年度优秀科技新星称号',
              '2022-2023年度优秀员工',
              '苹果开发者大会奖学金获得者'
            ],
            bgColor: 'bg-purple-50'
          },
          {
            title: '技术创新',
            icon: <Code className="w-8 h-8 text-orange-600" />,
            items: [
              '主导开发智能检索及AI问答系统',
              '开发智能表格数据处理工具',
              '设计微服务架构管理平台',
              '主导智能投行服务平台建设'
            ],
            bgColor: 'bg-orange-50'
          },
          {
            title: '专业背景',
            icon: <Briefcase className="w-8 h-8 text-red-600" />,
            items: [
              '华南农业大学毕业',
              '从事专业工作5年',
              '擅长人工智能应用开发',
              '系统架构设计经验丰富'
            ],
            bgColor: 'bg-red-50'
          },
          {
            title: '内部赋能',
            icon: <Users className="w-8 h-8 text-cyan-600" />,
            items: [
              '组织AI技术内部培训',
              '推广AI技术在设计中的应用',
              '参与数字化转型调研',
              '推动技术创新突破'
            ],
            bgColor: 'bg-cyan-50'
          }
        ]
      }
    }
  ];

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'intro':
        return (
          <div className="p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900">{slide.content.title}</h1>
              <div className="text-2xl text-gray-700 mt-4">{slide.content.name}</div>
              <div className="text-xl text-gray-600 mt-2">{slide.content.role}</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {slide.content.sections.map((section, index) => (
                <div 
                  key={index} 
                  className={`${section.bgColor} shadow-sm rounded-lg p-6`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 bg-current rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
          <div className="w-full max-w-6xl">
            {renderSlide(slides[currentSlide])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerIntro;
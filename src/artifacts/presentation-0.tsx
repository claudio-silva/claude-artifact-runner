import React, { useState, useEffect } from 'react';
import { Target, Zap, Search, Lightbulb, LineChart, ClipboardList, Maximize2, Minimize2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const TableOfContents = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const currentIndex = sections.findIndex(section => section.path === location.pathname);
      
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        if (currentIndex < sections.length - 1) {
          navigate(sections[currentIndex + 1].path);
        }
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        if (currentIndex > 0) {
          navigate(sections[currentIndex - 1].path);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate, location.pathname]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Could not enter fullscreen mode:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err) => {
        console.error('Could not exit fullscreen mode:', err);
      });
    }
  };

  const sections = [
    {
      number: '01',
      title: '立项背景与必要性',
      desc: '深入分析项目背景与价值',
      icon: <Target className="w-8 h-8 text-blue-600" />,
      path: '/presentation-1'
    },
    {
      number: '02',
      title: '电力行业数字化建设特点',
      desc: '行业洞察与专业理解',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      path: '/presentation-2'
    },
    {
      number: '03',
      title: '需求管理难点分析',
      desc: '六大核心难点详解',
      icon: <Search className="w-8 h-8 text-blue-600" />,
      path: '/presentation-3'
    },
    {
      number: '04',
      title: '解决方案思路',
      desc: '流程、方法论与标准',
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      path: '/presentation-4'
    },
    {
      number: '05',
      title: '过往经验与案例分享',
      desc: '成功经验与价值实现',
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      path: '/presentation-5'
    },
    {
      number: '06',
      title: '项目实施规划',
      desc: '组织、计划与行动方案',
      icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
      path: '/presentation-6'
    }
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        <div className="mb-16 relative">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">基于数字化产品需求管理促进业技融合的创新研究和实践</h1>
          <p className="text-xl text-gray-600">需求管理体系优化与省地协同建设方案</p>
          <button
            onClick={toggleFullscreen}
            className="absolute top-0 right-0 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            title={isFullscreen ? '退出全屏' : '进入全屏'}
          >
            {isFullscreen ? ( 
              <Minimize2 className="w-6 h-6" />
            ) : (
              <Maximize2 className="w-6 h-6" />
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="bg-gray-50 shadow-sm rounded-lg p-8 flex items-center hover:bg-gray-100 transition-all cursor-pointer"
              onClick={() => handleNavigate(section.path)}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center mr-6">
                {section.icon}
              </div>
              <div className="flex-grow">
                <div className="text-sm text-blue-600 mb-2">Chapter {section.number}</div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{section.title}</h2>
                <p className="text-sm text-gray-600">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
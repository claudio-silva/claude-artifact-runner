import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Target, Users, Rocket, TrendingUp, Award, Lightbulb, Zap, Heart, Star } from 'lucide-react';

const PresentationSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const slides = [
    {
      type: "cover",
      title: "推动战略升级 青年先行",
      subtitle: "中国通服广东公司青年马克思主义者培养工程",
      theme: "云改数转智惠 战略研讨汇报"
    },
    {
      type: "content",
      title: "一、战略升级背景",
      items: [
        {
          icon: <TrendingUp className="w-10 h-10" />,
          heading: "时代机遇",
          text: "2025年是人工智能规模应用元年，新一轮科技革命和产业变革加速演进，为企业发展带来重大战略机遇"
        },
        {
          icon: <Sparkles className="w-10 h-10" />,
          heading: "战略升级",
          text: "中国电信推动企业战略由云改数转向云改数转智惠升级，全面拥抱人工智能时代"
        },
        {
          icon: <Target className="w-10 h-10" />,
          heading: "核心目标",
          text: "打造服务型、科技型、安全型企业，成为数字中国建设的国家队和主力军"
        }
      ]
    },
    {
      type: "twocol",
      title: "二、云改数转智惠核心内容",
      columns: [
        {
          heading: "一体化智能云服务体系",
          icon: <Zap className="w-8 h-8" />,
          items: [
            "算力：构建智能算力基础设施，打造国产万卡集群",
            "平台：升级息壤智能云能力平台",
            "数据：汇聚多模态高质量数据，建设星海数据中台",
            "模型：提升星辰基础大模型，引入第三方模型",
            "应用：围绕政务、交通、制造等领域深度赋能"
          ]
        },
        {
          heading: "1+1+1+M+N发展布局",
          icon: <Lightbulb className="w-8 h-8" />,
          items: [
            "1个基础设施：云网融合基础设施",
            "1个核心平台：息壤智能云平台",
            "1个基础大模型：星辰大模型",
            "M个行业大模型：覆盖工业、应急、教育等",
            "N个智能体应用：服务超2万家行业客户"
          ]
        }
      ]
    },
    {
      type: "cards",
      title: "三、中国电信五大战略定位",
      cards: [
        {
          icon: <Rocket className="w-12 h-12" />,
          title: "智能算力主要提供者",
          desc: "构建全国一体化算力网络，提供普惠智算服务"
        },
        {
          icon: <Sparkles className="w-12 h-12" />,
          title: "通用大模型先行者",
          desc: "打造星辰基础大模型，引领AI技术创新"
        },
        {
          icon: <Users className="w-12 h-12" />,
          title: "行业大模型共拓者",
          desc: "联合央企打造80+行业大模型和智能体"
        },
        {
          icon: <Target className="w-12 h-12" />,
          title: "智能服务普惠者",
          desc: "降低AI使用门槛，让智能红利惠及千行百业"
        },
        {
          icon: <Award className="w-12 h-12" />,
          title: "AI安全守护者",
          desc: "构建全方位AI动态防护体系，确保安全可控"
        }
      ]
    },
    {
      type: "content",
      title: "四、青年的使命与担当",
      items: [
        {
          icon: <Users className="w-10 h-10" />,
          heading: "思想引领",
          text: "深入学习马克思主义，坚定理想信念，永远跟党走，做新时代有担当的青年"
        },
        {
          icon: <Rocket className="w-10 h-10" />,
          heading: "创新先锋",
          text: "把握AI时代机遇，勇于创新实践，成为战略升级的生力军和突击队"
        },
        {
          icon: <Target className="w-10 h-10" />,
          heading: "专业精进",
          text: "提升数字化、智能化能力，掌握云网融合、大模型等前沿技术"
        },
        {
          icon: <Award className="w-10 h-10" />,
          heading: "责任担当",
          text: "服务国家战略，投身数字中国建设，为企业高质量发展贡献青春力量"
        }
      ]
    },
    {
      type: "grid",
      title: "五、青年先行行动计划",
      actions: [
        {
          number: "01",
          phase: "学习提升",
          items: [
            "深入学习云改数转智惠战略内涵",
            "掌握AI、云计算、大数据等核心技术",
            "参与青马工程培训，提升理论素养"
          ]
        },
        {
          number: "02",
          phase: "创新实践",
          items: [
            "积极参与AI+应用场景创新",
            "推动内部流程智能化改造",
            "探索行业大模型应用落地"
          ]
        },
        {
          number: "03",
          phase: "协同共创",
          items: [
            "跨部门组建青年创新团队",
            "开展技术攻关和项目实践",
            "分享经验，形成创新成果"
          ]
        },
        {
          number: "04",
          phase: "示范引领",
          items: [
            "树立青年先锋标杆",
            "带动更多青年参与战略实施",
            "为企业转型升级注入青春动能"
          ]
        }
      ]
    },
    {
      type: "cases",
      title: "六、青年创新实践方向",
      cases: [
        {
          number: "01",
          title: "内部降本增效",
          desc: "围绕云网运营、客户服务、渠道营销等领域，推动AI应用落地，实现降本提质增效"
        },
        {
          number: "02",
          title: "行业解决方案",
          desc: "参与政务、交通、制造等行业大模型开发，打造标杆应用，赋能千行百业数智化转型"
        },
        {
          number: "03",
          title: "技术创新攻关",
          desc: "投身国产算力、模型安全、数据标注等技术研发，突破关键技术瓶颈"
        },
        {
          number: "04",
          title: "生态合作共建",
          desc: "参与央企AI+创新联合体，开展跨界合作，构建开放共赢的智能云生态"
        }
      ]
    },
    {
      type: "ending",
      title: "青春当燃 奋楫笃行",
      quotes: [
        "新时代赋予青年新使命，战略升级呼唤青年先行。让我们以青马学员的标准严格要求自己，以马克思主义思想武装头脑，以创新实践推动战略落地。",
        "在云改数转智惠的伟大征程中，我们要勇立潮头、敢为人先，用青春和智慧书写中国通服高质量发展的新篇章！",
        "永远跟党走，青春献通服，让我们携手共进，为建设网络强国、数字中国贡献青年力量！"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 当到达最后一页时触发彩纸效果
  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [currentSlide, slides.length]);

  const currentData = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 bg-gradient-to-br from-red-600 via-red-500 to-rose-600 p-10 overflow-auto relative">
        <div className="max-w-7xl mx-auto h-full flex flex-col">

          {currentData.type === "cover" && (
            <div className="flex-1 flex flex-col items-center justify-center text-white">
              <div className="text-center space-y-8 animate-fade-in">
                <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md rounded-full text-base font-medium border border-white/30 shadow-lg">
                  中国通服广东公司 2025年青年马克思主义者培养工程
                </div>
                <h1 className="text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">{currentData.title}</h1>
                <div className="flex items-center justify-center space-x-4 my-6">
                  <div className="w-20 h-1 bg-white/60 rounded"></div>
                  <Sparkles className="w-8 h-8" />
                  <div className="w-20 h-1 bg-white/60 rounded"></div>
                </div>
                <p className="text-3xl font-light tracking-wide">{currentData.theme}</p>
              </div>
              <div className="absolute bottom-24 text-white/80 text-base font-medium">
                广东·江门邮电职业技术学院 | 2025年10月21日
              </div>
            </div>
          )}

          {currentData.type === "content" && (
            <div className="flex-1 flex flex-col text-white py-6">
              <h1 className="text-5xl font-bold mb-10 pb-6 border-b-4 border-white/40">{currentData.title}</h1>
              <div className="flex-1 space-y-6">
                {currentData.items.map((item, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 hover:bg-white/25 hover:scale-[1.02] transition-all duration-300 shadow-2xl">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 bg-white/25 p-4 rounded-xl shadow-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3">{item.heading}</h3>
                        <p className="text-xl leading-relaxed opacity-95">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentData.type === "twocol" && (
            <div className="flex-1 flex flex-col text-white py-6">
              <h1 className="text-5xl font-bold mb-10 pb-6 border-b-4 border-white/40">{currentData.title}</h1>
              <div className="flex-1 grid grid-cols-2 gap-8">
                {currentData.columns.map((col, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 shadow-2xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-white/25 p-3 rounded-xl">
                        {col.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{col.heading}</h3>
                    </div>
                    <ul className="space-y-3">
                      {col.items.map((item, i) => (
                        <li key={i} className="text-lg flex items-start leading-relaxed">
                          <span className="mr-3 mt-1.5 text-xl">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentData.type === "cards" && (
            <div className="flex-1 flex flex-col text-white py-6">
              <h1 className="text-5xl font-bold mb-10 pb-6 border-b-4 border-white/40">{currentData.title}</h1>
              <div className="flex-1 grid grid-cols-3 gap-6">
                {currentData.cards.map((card, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl flex flex-col items-center text-center">
                    <div className="bg-white/25 p-5 rounded-2xl mb-5 shadow-lg">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-snug">{card.title}</h3>
                    <p className="text-base opacity-95 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentData.type === "grid" && (
            <div className="flex-1 flex flex-col text-white py-6">
              <h1 className="text-5xl font-bold mb-10 pb-6 border-b-4 border-white/40">{currentData.title}</h1>
              <div className="flex-1 grid grid-cols-2 gap-6">
                {currentData.actions.map((action, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-md rounded-2xl p-7 border-2 border-white/30 hover:bg-white/25 transition-all shadow-2xl">
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center text-2xl font-black mr-4 shadow-lg">
                        {action.number}
                      </div>
                      <h3 className="text-3xl font-bold">{action.phase}</h3>
                    </div>
                    <ul className="space-y-3">
                      {action.items.map((item, i) => (
                        <li key={i} className="flex items-start text-lg leading-relaxed">
                          <span className="mr-3 mt-1 text-xl">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentData.type === "cases" && (
            <div className="flex-1 flex flex-col text-white py-6">
              <h1 className="text-5xl font-bold mb-10 pb-6 border-b-4 border-white/40">{currentData.title}</h1>
              <div className="flex-1 grid grid-cols-2 gap-6">
                {currentData.cases.map((caseItem, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-md rounded-2xl p-7 border-2 border-white/30 hover:bg-white/25 hover:scale-[1.02] transition-all shadow-2xl">
                    <div className="flex items-center mb-5">
                      <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center text-3xl font-black mr-5 shadow-lg">
                        {caseItem.number}
                      </div>
                      <h3 className="text-3xl font-bold">{caseItem.title}</h3>
                    </div>
                    <p className="text-lg leading-relaxed opacity-95 pl-1">{caseItem.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentData.type === "ending" && (
            <div className="flex-1 flex flex-col items-center justify-center text-white px-12 relative overflow-hidden">
              {/* 背景装饰元素 */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {showConfetti && [...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-20px`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  >
                    {i % 3 === 0 ? (
                      <Star className="w-6 h-6 text-yellow-300 opacity-80" fill="currentColor" />
                    ) : i % 3 === 1 ? (
                      <Heart className="w-6 h-6 text-pink-300 opacity-80" fill="currentColor" />
                    ) : (
                      <Sparkles className="w-6 h-6 text-blue-300 opacity-80" fill="currentColor" />
                    )}
                  </div>
                ))}
              </div>

              {/* 主标题 */}
              <div className="relative z-10">
                <h1 className="text-7xl font-black mb-12 drop-shadow-2xl animate-scale-in bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                  {currentData.title}
                </h1>
              </div>

              {/* 引用卡片 */}
              <div className="space-y-6 max-w-5xl relative z-10">
                {currentData.quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    className="bg-white/15 backdrop-blur-lg rounded-3xl p-10 border-2 border-white/30 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-slide-up"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-6xl text-white/40 font-serif leading-none">"</div>
                      <p className="text-2xl leading-relaxed font-light text-center flex-1 pt-2">
                        {quote}
                      </p>
                      <div className="text-6xl text-white/40 font-serif leading-none self-end">"</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 感谢语 */}
              <div className="mt-20 relative z-10">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-pulse"></div>
                  <div className="relative text-6xl font-black animate-bounce-slow drop-shadow-2xl bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
                    谢谢大家！
                  </div>
                </div>
                {/* 装饰性星星 */}
                <div className="flex justify-center gap-4 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-yellow-300 animate-twinkle"
                      fill="currentColor"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 左侧切换按钮 */}
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="fixed left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl border border-white/30"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* 右侧切换按钮 */}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="fixed right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl border border-white/30"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}

        {/* 右下角页码 */}
        <div className="fixed right-8 bottom-8 text-white/60 font-medium text-lg">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default PresentationSlide;

// 添加自定义动画样式
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateY(-20px) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes scale-in {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(0.8);
    }
  }

  .animate-float {
    animation: float 5s linear infinite;
  }

  .animate-scale-in {
    animation: scale-in 0.8s ease-out forwards;
  }

  .animate-slide-up {
    animation: slide-up 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
  }

  .animate-twinkle {
    animation: twinkle 1.5s ease-in-out infinite;
  }
`;
document.head.appendChild(style);
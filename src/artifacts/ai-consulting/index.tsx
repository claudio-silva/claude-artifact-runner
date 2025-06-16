import React from 'react';
import { ArrowRight, Clock, Users, Brain, Building, Sparkles, Award, Calendar, User } from 'lucide-react';

export const meta = {
  title: "二分公司2025年第二期融智技术论坛",
  description: "企业AI项目咨询规划实践 - 洪浩东",
  isHidden: false,
  category: "AI项目规划咨询",
  order: 0
};

const AiConsultingIndex: React.FC = () => {
  const lectures = [
    {
      id: 1,
      title: "AI+咨询顾问：专业性+写作+表达能力",
      subtitle: "第一部分：AI时代咨询能力的进化",
      duration: "25分钟",
      link: "./ai-consulting-lecture",
      description: "探讨AI如何重塑咨询顾问的核心能力，包括专业性增强、写作能力革新和表达能力升级",
      highlights: ["咨询行业AI转型压力", "AI赋能三大核心能力", "四种咨询场景分析", "顾问AI转型路径"],
      color: "from-blue-500 to-indigo-600",
      icon: Brain
    },
    {
      id: 2,
      title: "南方产权AI项目规划实践",
      subtitle: "第二部分：真实案例深度解析",
      duration: "35分钟",
      link: "./ai-consulting-practice",
      description: "基于南方联合产权交易中心的真实项目，展示AI规划咨询的完整实施过程",
      highlights: ["项目背景与挑战", "AI规划方法论应用", "核心场景设计", "技术架构与实施"],
      color: "from-green-500 to-emerald-600",
      icon: Building
    },
    {
      id: 3,
      title: "AI规划咨询 - 国央企转型的新引擎",
      subtitle: "第三部分：战略高度看AI转型",
      duration: "30分钟",
      link: "./ai-consulting-transformation",
      description: "从国央企转型的战略视角，解析AI规划咨询的五大价值和实施路径",
      highlights: ["国央企AI转型背景", "五大价值维度", "AI-POWER方法论", "最佳实践案例"],
      color: "from-purple-500 to-pink-600",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* 头部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold">二分公司2025年第二期融智技术论坛</h1>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                企业AI项目咨询规划实践
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
                <div className="flex items-center">
                  <User className="w-6 h-6 mr-2" />
                  <span>主讲人：洪浩东</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-6 h-6 mr-2" />
                  <span>七分公司</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  <span>公司三级技术专家</span>
                </div>
              </div>
              <div className="mt-4 text-sm opacity-90">
                公司2024-2025年杰出青年
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 讲师介绍 */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">讲师介绍</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">洪浩东</h4>
                <p className="text-gray-600 mb-4">
                  七分公司公司三级技术专家，公司2024-2025年杰出青年。在AI规划咨询、应用开发和信息化可研设计方面具有丰富的实践经验。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="font-medium">擅长领域：</span>
                  </div>
                  <div className="ml-5 space-y-1 text-gray-600">
                    <div>• AI 规划咨询</div>
                    <div>• AI 应用开发</div>
                    <div>• 公司信息化可研设计</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h5 className="font-semibold text-gray-800 mb-3">主要成就</h5>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-700">公司三级技术专家认定</span>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-700">2024-2025年杰出青年</span>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-700">多个AI项目规划咨询经验</span>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-700">企业数字化转型专家</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 讲座内容 */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">讲座内容</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              本次讲座分为三个部分，从理论到实践，从案例到方法论，全面解析AI时代咨询顾问的能力进化与转型路径
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lectures.map((lecture) => {
              const IconComponent = lecture.icon;
              return (
                <div
                  key={lecture.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 flex items-center justify-center relative border-b">
                    <div className="relative z-10 text-center text-gray-700">
                      <IconComponent className="w-10 h-10 mx-auto mb-2" />
                      <div className="text-3xl font-bold opacity-40 absolute top-2 right-3">
                        {lecture.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {lecture.duration}
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700 border">
                        第{lecture.id}部分
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{lecture.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{lecture.subtitle}</p>
                    <p className="text-xs text-gray-700 mb-4 line-clamp-3">{lecture.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-800 mb-2 text-sm">核心内容</h5>
                      <div className="space-y-1">
                        {lecture.highlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {highlight}
                          </div>
                        ))}
                        {lecture.highlights.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{lecture.highlights.length - 2} 更多内容...
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <a
                      href={lecture.link}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg hover:scale-105 transition-all duration-200 border border-gray-300"
                    >
                      进入
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 总结 */}
          <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 text-gray-800 text-center border shadow-lg">
            <h3 className="text-2xl font-bold mb-4">讲座总结</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
              通过本次讲座，您将全面了解AI时代咨询顾问的能力要求，掌握AI规划咨询的实用方法论，
              并通过真实案例学习如何在实际项目中应用这些知识和技能。
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white border px-3 py-2 rounded-lg shadow-sm">
                <Users className="w-4 h-4 mr-2 text-gray-600" />
                <span className="text-gray-700">适合人群：咨询顾问、企业管理者、技术专家</span>
              </div>
              <div className="flex items-center bg-white border px-3 py-2 rounded-lg shadow-sm">
                <Clock className="w-4 h-4 mr-2 text-gray-600" />
                <span className="text-gray-700">总时长：90分钟</span>
              </div>
              <div className="flex items-center bg-white border px-3 py-2 rounded-lg shadow-sm">
                <Award className="w-4 h-4 mr-2 text-gray-600" />
                <span className="text-gray-700">实战经验分享</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultingIndex;
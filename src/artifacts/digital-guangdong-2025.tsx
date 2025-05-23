import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, CheckCircle } from 'lucide-react';

export default function DigitalGuangdong2025() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动事件，为顶部导航栏添加阴影
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* 顶部导航 */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">粤</span>
            </div>
            <h1 className="text-xl font-bold text-blue-900">数字广东建设</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">首页</a>
            <a href="#section1" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">数字化发展引擎</a>
            <a href="#section2" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">数字经济发展</a>
            <a href="#section3" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">数字政府改革</a>
            <a href="#section4" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">数字社会建设</a>
            <a href="#section5" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">数字基础设施</a>
            <a href="#section6" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">建设环境优化</a>
            <a href="#footer" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">关于我们</a>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-blue-900">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 z-50">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">首页</a>
              <a href="#section1" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">数字化发展引擎</a>
              <a href="#section2" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">数字经济发展</a>
              <a href="#section3" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">数字政府改革</a>
              <a href="#section4" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">数字社会建设</a>
              <a href="#section5" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">数字基础设施</a>
              <a href="#section6" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">建设环境优化</a>
              <a href="#footer" className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2">关于我们</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero区域 */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">数字广东建设2025年工作要点</h1>
                <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
                  以整体、系统、协同的数字化建设赋能全省经济社会高质量发展
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                    查看详细内容
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                    了解相关政策
                  </button>
                </div>
              </div>
              <div className="md:col-span-2 hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: "6", label: "大板块" },
                      { number: "19", label: "子板块" },
                      { number: "62", label: "工作任务" },
                      { number: "2025", label: "实施年度" }
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">{item.number}</div>
                        <div className="text-sm text-blue-100">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 开篇概述 */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">数字广东 · 六大核心板块</h2>
              <p className="text-blue-700 text-lg max-w-2xl mx-auto mb-10">系统规划、全面部署、深度协同，以数字化驱动全省经济社会现代化</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-gray-700">大板块</div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
                  <div className="text-gray-700">子板块</div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="text-4xl font-bold text-blue-600 mb-2">62</div>
                  <div className="text-gray-700">工作任务</div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2025</div>
                  <div className="text-gray-700">目标年度</div>
                </div>
              </div>
            </div>
            
            <div className="mb-16 text-center">
              <h3 className="inline-block bg-blue-600 text-white text-xl font-bold py-2 px-8 rounded-full mb-10">子板块总览</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* 板块1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-bold">1. 加快培育数字化发展引擎</h3>
                </div>
                <div className="p-6">
                  <ol className="list-decimal pl-6 space-y-3">
                    <li className="text-gray-700">打造数字技术创新高地</li>
                    <li className="text-gray-700">深化数据要素市场化配置改革</li>
                    <li className="text-gray-700">深入开展"人工智能+"行动</li>
                  </ol>
                </div>
              </div>
              
              {/* 板块2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="text-xl font-bold">2. 大力推动数字经济高质量发展</h3>
                </div>
                <div className="p-6">
                  <ol className="list-decimal pl-6 space-y-3" start={4}>
                    <li className="text-gray-700">提升数字产业发展能级</li>
                    <li className="text-gray-700">加快产业数字化转型</li>
                    <li className="text-gray-700">强化创新示范建设</li>
                  </ol>
                </div>
              </div>
              
              {/* 板块3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-purple-600 text-white p-4">
                  <h3 className="text-xl font-bold">3. 深化数字政府改革建设</h3>
                </div>
                <div className="p-6">
                  <ol className="list-decimal pl-6 space-y-3" start={7}>
                    <li className="text-gray-700">提升利企便民服务质效</li>
                    <li className="text-gray-700">提升政府数字化履职效能</li>
                    <li className="text-gray-700">加强政务数据共享流通</li>
                  </ol>
                </div>
              </div>
              
              {/* 板块4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-yellow-500 text-white p-4">
                  <h3 className="text-xl font-bold">4. 加快推进数字社会建设</h3>
                </div>
                <div className="p-6">
                  <ol className="list-decimal pl-6 space-y-3" start={10}>
                    <li className="text-gray-700">加快"数字湾区"建设</li>
                    <li className="text-gray-700">发展普惠数字公共服务</li>
                    <li className="text-gray-700">深化社会智慧治理</li>
                    <li className="text-gray-700">构筑全民畅享的数字生活</li>
                    <li className="text-gray-700">推动数字城乡试点建设</li>
                  </ol>
                </div>
              </div>
              
              {/* 板块5 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-red-600 text-white p-4">
                  <h3 className="text-xl font-bold">5. 夯实数字基础设施和数字安全底座</h3>
                </div>
                <div className="p-6">
                  <ol className="list-decimal pl-6 space-y-3" start={15}>
                    <li className="text-gray-700">加快数字基础设施建设</li>
                    <li className="text-gray-700">筑牢数字安全防线</li>
                  </ol>
                </div>
              </div>
              
              {/* 板块6 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-indigo-600 text-white p-4">
                  <h3 className="text-xl font-bold">6. 优化数字广东建设环境</h3>
                </div>
                <div className="p-6">
                  <ol className="list-decimal pl-6 space-y-3" start={17}>
                    <li className="text-gray-700">加强数字广东建设整体统筹</li>
                    <li className="text-gray-700">强化数字广东建设要素保障</li>
                    <li className="text-gray-700">完善数字化交流合作机制</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
              <p className="text-blue-900 text-lg leading-relaxed">
                这19个子板块涵盖了从数字技术创新、产业发展、政府改革到社会建设、基础设施和环境优化的完整体系，体现了数字广东建设的系统性和全面性。通过整体推进，将有力支撑广东经济社会高质量发展。
              </p>
            </div>
          </div>
        </section>
        
        {/* 所有板块内容 */}
        {sectionData.map((section) => (
          <section id={`section${section.id}`} key={section.id} className="py-8 px-4 bg-gray-50 border-t border-gray-200 mb-4">
            <div className="container mx-auto max-w-4xl">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className={`py-6 px-6 border-b border-gray-100 flex items-center justify-between ${getBgColorClass(section.id)}`}>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-3xl mr-3">{section.icon}</span>
                    {section.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.id} className="border-b border-gray-100 last:border-b-0 py-4">
                      <div className="font-medium text-gray-900 mb-4">{subsection.title}</div>
                      <div className="pl-4 border-l-2 border-gray-100 space-y-4">
                        {subsection.tasks.map((task) => (
                          <div key={task.id} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <CheckCircle size={18} className="text-green-500 mt-0.5" />
                              <h4 className="font-medium text-gray-900">{task.id}. {task.title}</h4>
                            </div>
                            <div className="mt-3 pl-9">
                              <p className="text-gray-700 text-sm leading-relaxed">{task.content}</p>
                              {task.departments && (
                                <p className="text-gray-500 text-xs mt-2">
                                  <span className="font-medium">责任单位：</span>
                                  {task.departments}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* 实施目标 */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">实施目标与进度</h2>
            
            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <ProgressCard title="数字产业发展" percent={65} description="培育数字化发展引擎" />
                <ProgressCard title="数字政府改革" percent={58} description="深化政府数字化转型" />
                <ProgressCard title="数字社会建设" percent={42} description="提升公共服务质量" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer id="footer" className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">粤</span>
                </div>
                <h2 className="text-xl font-bold">数字广东建设</h2>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                深入实施数字广东战略，加快数字技术与经济社会发展深度融合，促进治理体系和治理能力现代化，为全省高质量发展提供强大动力支撑。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
                <li><a href="#section1" className="text-gray-400 hover:text-white transition-colors">数字化发展引擎</a></li>
                <li><a href="#section2" className="text-gray-400 hover:text-white transition-colors">数字经济发展</a></li>
                <li><a href="#section3" className="text-gray-400 hover:text-white transition-colors">数字政府改革</a></li>
                <li><a href="#section4" className="text-gray-400 hover:text-white transition-colors">数字社会建设</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">👤</span>
                  <span className="text-gray-400">施唯</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">📞</span>
                  <span className="text-gray-400">13632266802</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">📍</span>
                  <span className="text-gray-400">中国 · 广东省 · 深圳市南山区深圳科技生态园11栋A座33楼</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 数字广东建设工作领导小组办公室 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 进度卡片组件
const ProgressCard = ({ title, percent, description }) => {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto relative mb-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle 
            className="text-blue-100" 
            strokeWidth="8" 
            stroke="currentColor" 
            fill="transparent" 
            r="40" 
            cx="50" 
            cy="50" 
          />
          <circle 
            className="text-blue-600" 
            strokeWidth="8" 
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * (100 - percent) / 100}`}
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="transparent" 
            r="40" 
            cx="50" 
            cy="50" 
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-900">{percent}%</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// 获取背景颜色类的辅助函数
function getBgColorClass(sectionId) {
  const colors = {
    1: 'bg-blue-50',
    2: 'bg-green-50',
    3: 'bg-purple-50',
    4: 'bg-yellow-50',
    5: 'bg-red-50',
    6: 'bg-indigo-50',
  };
  return colors[sectionId] || 'bg-gray-50';
}

// 完整的六大板块数据
const sectionData = [
  {
    id: 1,
    title: "加快培育数字化发展引擎",
    description: "打造数字技术创新高地、深化数据要素市场化配置改革、深入开展\"人工智能+\"行动",
    icon: "🚀",
    subsections: [
      {
        id: "1-1",
        title: "打造数字技术创新高地",
        tasks: [
          { 
            id: "1", 
            title: "实施关键核心技术攻关", 
            content: "优化鹏城、广州国家实验室央地协同管理机制，深化粤港澳大湾区量子科学中心等重大平台建设。支持建设概念验证中心和成果转化中试平台，构建新型技术转移转化体系。深入实施\"广东强芯\"、核心软件攻关等工程，聚焦新型储能与新能源、人工智能等领域，优化实施一批产业技术攻关重大旗舰项目，推动芯片及编译软件、工业软件、智能机器人等产业应用，加快重大项目投产达产。",
            departments: "省科技厅、工业和信息化厅按职责分工负责，各地级以上市人民政府结合实际落实"
          },
          { 
            id: "2", 
            title: "推进产业协同创新", 
            content: "持续完善以制造业创新中心为核心节点的制造业协同创新体系。支持国家印刷及柔性显示、高性能医疗器械、5G中高频器件、超高清视频（共建）、新型储能等创新中心提升创新能力，开展共性技术攻关，有序推进省级制造业创新中心梯队建设。",
            departments: "省工业和信息化厅牵头"
          }
        ]
      },
      {
        id: "1-2",
        title: "深化数据要素市场化配置改革",
        tasks: [
          { 
            id: "3", 
            title: "完善数据要素制度体系", 
            content: "加快推进《广东省数据条例》立法进程，印发省加快公共数据资源开发利用的实施意见。修订《广东省公共数据开放暂行办法》，编制公共数据授权运营制度文件。完善数据交易所监管规则，开展数据产权登记试点工作，引导企业开展数据资产入表。",
            departments: "省政务和数据局牵头"
          },
          { 
            id: "4", 
            title: "推进数据资源融合利用", 
            content: "建设公共数据资源登记平台，推进省级公共数据授权运营，鼓励各地市结合本地产业基础开展公共数据授权运营。推动普惠金融、卫生健康、低空经济等重点领域数据供需对接、省市协同，培育一批优秀应用场景，形成一批高质量数据产品和服务。",
            departments: "省政务和数据局牵头"
          },
          { 
            id: "5", 
            title: "培育壮大数据产业", 
            content: "编制省促进数据产业高质量发展行动方案，提升广州、深圳数据交易所能级，争创大湾区国家级数据交易场所。加快组建省数据集团。探索推进具有区域特征的数据标注产业标准体系建设，支持清远、韶关等地发展数据标注产业，推动广州、深圳等地探索智能标注应用实践。深化数据经纪人试点工作，探索开展数据企业认定，加快培育一批优质数据企业。做好2025年\"数据要素×\"大赛广东分赛组织。",
            departments: "省政务和数据局牵头，省国资委等单位按职责分工负责"
          }
        ]
      },
      {
        id: "1-3",
        title: "深入开展\"人工智能+\"行动",
        tasks: [
          { 
            id: "6", 
            title: "加快大模型研发应用", 
            content: "积极支持企事业单位开展人工智能大模型研发、备案和落地应用，依托重点产业集群开展人工智能赋能新型工业化试点，对研发工业领域大模型和应用解决案例给予支持。支持建设开源社区、开源平台，鼓励企业面向人工智能领域布局开源项目。推动科学研究、智慧能源、医疗卫生等重点行业建设高质量数据集。",
            departments: "省工业和信息化厅、科技厅、政务和数据局等单位按职责分工负责"
          },
          { 
            id: "7", 
            title: "拓展人工智能应用场景", 
            content: "加快拓展行业大模型和具身智能的地方特色应用场景，鼓励教育、医疗、先进制造等重点领域主动开放应用场景，探索标准化、可复制、可推广的行业应用模式。开展\"机器人+\"行动，围绕工业、农业、城市管理、医疗、养老服务、特种作业等领域，深入挖掘开放应用场景。",
            departments: "省工业和信息化厅牵头，各有关单位按职责分工负责"
          },
          { 
            id: "8", 
            title: "发展壮大人工智能产业", 
            content: "支持企业整合人工智能与机器人产业链、创新链资源，推动集聚发展，整体提升产业链协同创新能力。构建以单项冠军企业、专精特新中小企业为骨干的人工智能与机器人领域企业梯次培育体系。统筹省市资源对全省人工智能与机器人重点项目开通\"绿色通道\"。持续围绕智能机器人\"大脑、小脑、本体\"等领域开展核心技术攻关，支撑智能机器人产业高质量发展。",
            departments: "省工业和信息化厅牵头，省科技厅按职责分工负责"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "大力推动数字经济高质量发展",
    description: "提升数字产业发展能级、加快产业数字化转型、强化创新示范建设",
    icon: "📈",
    subsections: [
      {
        id: "2-1",
        title: "提升数字产业发展能级",
        tasks: [
          { 
            id: "9", 
            title: "发展新一代电子信息产业", 
            content: "强化集群协调联动推进合力，支持龙头企业加强 AI 手机、AI PC 等新兴产业技术研发。促进电子元器件高端化，加强北斗、虚拟现实等新兴产业培育。做好\"链主\"企业培育和重点电子整机企业跟踪服务，做好投产重大项目、续建项目、新开工重大项目的跟踪服务，推动项目建设尽快形成实物投资量。做大做强现有特色产业园区，培育若干个产业特色鲜明、产业集中度较高的新一代电子信息特色产业园区。",
            departments: "省工业和信息化厅牵头"
          },
          { 
            id: "10", 
            title: "发展软件与信息服务产业", 
            content: "强化产业运行态势、重点企业经营情况的监测分析，多措并举培育企业入规入统。开展软件和信息技术服务统计报表制度宣贯和培训，促进软件产品增值税即征即退等政策落地生效。强化广州、深圳两个中国软件名城的产业集聚效应和辐射带动作用，支持重点园区创建省级特色产业园。",
            departments: "省工业和信息化厅牵头"
          },
          { 
            id: "11", 
            title: "发展半导体与集成电路产业", 
            content: "加快华润微、方正微、粤芯、增芯等重大项目建设和产能爬坡，补齐集成电路制造、先进封测等短板，大力发展材料及装备产业，谋划建设光芯片产业创新平台，打造全国集成电路\"第三极\"。",
            departments: "省发展改革委牵头，省工业和信息化厅按职责分工负责"
          },
          { 
            id: "12", 
            title: "发展超高清视频产业", 
            content: "发展新型显示终端，加强新型显示与行业融合应用，面向智能座舱、数字文旅、智慧教育等场景，形成场景化解决方案，发展超高清视频系统级产品，推动工业、文旅、教育、商业等领域更新显示终端设备。推动制作机构利用AIGC等新技术降本增效，增加优质超高清内容供给。实施超高清入户行动，提高有线电视超高清机顶盒占比至75%。",
            departments: "省工业和信息化厅、广电局牵头"
          },
          { 
            id: "13", 
            title: "发展区块链产业", 
            content: "优化调整区块链产业集群顶层设计，做好相关产业集群的培育工作。在通信与网络、人工智能、芯片设计与制造等领域开展核心技术攻关，支撑区块链相关领域创新发展。发挥好实验室体系、高水平研究院、新型研发机构、工程技术研究中心等重大科技创新平台作用，为区块链技术及产业发展提供强大的智力支撑。",
            departments: "省科技厅牵头"
          },
          { 
            id: "14", 
            title: "发展数字创意产业", 
            content: "提升无人智能游览、可穿戴设备、智能终端等智能装备技术水平。积极培育数字文化消费新场景，促进动漫游戏、云展览、电子竞技、数字艺术等新业态集聚发展。加快电影、广播电视数字化，鼓励利用新技术、新创意发展基于互联网的内容创作与文化传播，支持弘扬主旋律、具有中国文化或岭南文化特色的数字内容作品创作。",
            departments: "省工业和信息化厅牵头，省委宣传部、文化和旅游厅、广电局、体育局按职责分工负责"
          },
          { 
            id: "15", 
            title: "发展智能物联网产业", 
            content: "壮大开源智能物联网操作系统产业生态。推广开源生产范式，支持开源生态企业发展壮大，推动建设省级开源鸿蒙创新中心，搭建生态构建、产业聚集、技术创新、人才培养等服务平台，加大面向行业场景和消费等领域应用，发挥好产业协会作用，强化开源鸿蒙核心技术攻关和人才培养，大力推动开源智能物联网操作系统产业应用集聚和生态繁荣。",
            departments: "省工业和信息化厅牵头，省政务和数据局按职责分工负责"
          },
          { 
            id: "16", 
            title: "发展低空产业", 
            content: "加快构建全省应用和产业互促、低空制造和服务融合的发展格局。起草全省支持低空经济发展的若干措施，做强低空制造促进产业集聚发展。探索开展省低空经济应用场景示范创建。出台数据赋能低空经济高质量发展实施方案，推动数据要素与低空经济协同发展，推进政务领域无人机应用推广，上线政务无人机调度平台。",
            departments: "省发展改革委牵头，省工业和信息化厅、政务和数据局按职责分工负责"
          }
        ]
      },
      {
        id: "2-2",
        title: "加快产业数字化转型",
        tasks: [
          { 
            id: "17", 
            title: "推进工业数字化", 
            content: "出台省制造业数字化转型行动方案，加快2个国家制造业新型技术改造城市试点和4个国家中小企业数字化转型城市试点建设，高标准建设省制造业数字化转型促进中心，力争实现4000家以上重点行业数字化\"链式改造\"。开展智能工厂梯度培育，加大对中小企业数字化转型的支持。举办第七届中小企业数字化\"链式转型\"活动和专题展览，召开\"广东制造业数字化转型50人会\"品牌活动。",
            departments: "省工业和信息化厅牵头"
          },
          { 
            id: "18", 
            title: "推进智慧农业发展", 
            content: "建设广东农业智慧大脑，探索全面提升农业生产全链条精准化、智慧化和信息化水平。推进数字化技术融入农产品\"12221\"市场营销体系建设，持续实施\"互联网+\"农产品出村进城工程，推进\"农业AI\"\"微短剧\"\"电商+数字达人\"。持续开展\"电商助力百千万工程\"活动，拓宽农产品线上销售渠道。",
            departments: "省农业农村厅牵头，省商务厅、供销社按职责分工负责"
          },
          { 
            id: "19", 
            title: "推进服务业数字化", 
            content: "支持国家数字服务出口基地做大做强，培育一批数字贸易重点企业。支持数字贸易企业参加大型综合性服务贸易展会，开拓国内外市场。打造广东省跨境电子商务综试区建设升级版，大力推动\"跨境电商+产业带\"工作。支持交通物流企业整合各类运输方式数据信息，充分利用信息技术提高运输衔接效率，提升综合物流信息服务。",
            departments: "省商务厅、交通运输厅按职责分工负责"
          },
          { 
            id: "20", 
            title: "发展数字金融", 
            content: "推动辖内银行保险机构优化数字金融治理机制，提升重点领域的数字金融服务能力。探索数字金融和科技金融、绿色金融、普惠金融、养老金融协同发展的有效路径，丰富数字人民币应用场景。提高金融监管数字化水平，加强数字金融风险防范。鼓励金融科技企业在资本市场挂牌上市、并购融资，推动持牌金融机构在广东设立金融科技子公司。",
            departments: "人民银行广东省分行牵头，省委金融办，广东金融监管局、中国证监会广东监管局按职责分工负责"
          }
        ]
      },
      {
        id: "2-3",
        title: "强化创新示范建设",
        tasks: [
          { 
            id: "21", 
            title: "打造数字经济创新示范", 
            content: "开展国家数字经济创新发展试验区建设，出台建设方案，开展数字经济领域创新热点探索实践，推动试验区建设任务在部分数字经济基础好的地市及区县率先落地。促进平台企业创新发展，完善重点数据类平台企业沟通联络机制，推动\"数实融合\"创新示范。",
            departments: "省政务和数据局牵头"
          },
          { 
            id: "22", 
            title: "强化数字经济监测分析", 
            content: "探索建立具有广东特色的指标体系，组织重点市和产业园区开展数字经济监测分析。探索创新运用填报工具、大模型分析、数据谱系等手段，开展数字经济运行情况分析。",
            departments: "省政务和数据局牵头，省工业和信息化厅、统计局按职责分工负责"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "深化数字政府改革建设",
    description: "提升利企便民服务质效、提升政府数字化履职效能、加强政务数据共享流通",
    icon: "🏛️",
    subsections: [
      {
        id: "3-1",
        title: "提升利企便民服务质效",
        tasks: [
          { 
            id: "23", 
            title: "高标准落实\"高效办成一件事\"任务", 
            content: "健全重点事项清单管理和常态化推进机制。梳理业务标准，优化办事流程，编制\"一件事\"工作指引和办事指南。强化跨部门政策、业务、系统协同和数据共享，持续推进\"一件事\"高效办理。",
            departments: "省政务和数据局牵头，各有关单位按职责分工负责"
          },
          { 
            id: "24", 
            title: "提升涉企服务水平", 
            content: "深化\"信用广东\"建设，完善信用修复和数据共享机制，拓展信用报告代替无违法违规证明覆盖领域范围，试点推行信用替代投标保证金模式，为市场主体简化办理程序、提高服务效能、降低经营成本。推动\"投资广东\"平台社会化运营，探索试行\"政府授权品牌，企业建设运营\"的模式，促进平台服务优化和可持续发展。",
            departments: "省发展改革委、商务厅、政务和数据局，省税务局按职责分工负责"
          },
          { 
            id: "25", 
            title: "推进政务服务标准化规范化便利化", 
            content: "优化升级省一体化政务服务平台，制定相关建设标准规范和管理办法。持续优化粤省事、粤商通等重点平台便民利企服务能力，研究拓展增值服务内容。开展各级政务服务中心培训，组织\"政务服务活动月\"主题活动，办好第二届全省政务服务技能大赛。召开政务服\"跨省通办\"合作联席会议，加快跨区域政务服务一体化进程。",
            departments: "省政务和数据局牵头"
          }
        ]
      },
      {
        id: "3-2",
        title: "提升政府数字化履职效能",
        tasks: [
          { 
            id: "26", 
            title: "开展\"一网统管\"提升行动", 
            content: "印发省域治理\"一网统管\"提升行动方案，推动数字化治理模式创新，打造一批城市数字化治理典型场景。健全政府治理\"一网统管·驾驶舱\"管理机制，汇聚更多治理类专题应用。深化\"粤治慧\"平台能力建设，建立全省共性组件收储、复用机制，打造共性组件资源库。",
            departments: "省政务和数据局牵头，各有关单位按职责分工负责"
          },
          { 
            id: "27", 
            title: "强化数字赋能\"百千万工程\"", 
            content: "推进省\"百千万工程\"信息综合平台建设，探索建立\"政府搭台、企业参与、多元投入\"众创模式，持续完善平台业务板块，做深做透专题栏目。推动数据活化，提升信息综合平台数据自动抓取和智能质检能力，减少基层填报，推进数据谱系建设；探索打造行业人工智能大模型，赋能决策咨询、信息研判、图像对比等场景。",
            departments: "省政务和数据局牵头"
          },
          { 
            id: "28", 
            title: "构建经济治理数字化新模式", 
            content: "完善经济安全监测预警平台，优化高频数据预测模型，打通接入更多市县区经济数据，提高经济运行监测预测能力。积极探索应用区块链、数字人民币和人工智能等前沿数字技术，提升财政资金数字化监管能力和精细化管理水平。创新\"粤经济\"平台建设，提升经济对比分析能力，选择试点地市探索建设经济治理可信数据空间。",
            departments: "省发展改革委、财政厅、政务和数据局、统计局按职责分工负责"
          },
          { 
            id: "29", 
            title: "提升智慧监管水平", 
            content: "依托统一时空基准体系、自然资源三维时空数据库，提升自然资源监测监管能力。推动城市生命线工程监测平台及\"互联网+监管\"燃气信息化平台建设，健全完善城市生命线工程标准体系。打造市场监管信息化融合监管通、食品安全通等应用，构建省市场监管数字安全运营中心，持续推进市场监管\"数字+执法\"能力提升三年行动，加强网络交易市场监管。",
            departments: "省自然资源厅、住房城乡建设厅、农业农村厅、市场监管局，省海洋综合执法总队按职责分工负责"
          },
          { 
            id: "30", 
            title: "推进生态环境保护数智化", 
            content: "完善生态环境智慧云平台建设，优化水污染防治挂图作战、大气污染防治综合应用等业务系统，加快推动生态环境数智化转型。深化自然生态保护数字化应用，加强业务协同和数据综合分析应用，支撑土壤、地下水和农村生态环境保护工作。",
            departments: "省自然资源厅、生态环境厅按职责分工负责"
          }
        ]
      },
      {
        id: "3-3",
        title: "加强政务数据共享流通",
        tasks: [
          { 
            id: "34", 
            title: "推进核心业务数据化", 
            content: "编制完善省、市两级政府部门职能数据清单和政务数据共享、开放清单，推动省相关单位按规范采集数据和编制数据目录。健全核心业务指标全流程管理机制，构建业务指标图谱和指标数据库，加强核心业务指标数据汇聚。",
            departments: "省政务和数据局牵头，省各有关单位按职责分工负责"
          },
          { 
            id: "35", 
            title: "打造共享智能的数据服务", 
            content: "对接国务院部门发布的数据资源，推动公共数据按属地、按需回流。完善政务数据共享制度机制，推进\"块数据\"试点建设，建设省市县镇村五级联动的基层数据共享应用平台，推动实现基层数据一次填报、动态更新、多方共用。",
            departments: "省政务和数据局牵头"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "加快推进数字社会建设",
    description: "加快\"数字湾区\"建设、发展普惠数字公共服务、深化社会智慧治理",
    icon: "🌆",
    subsections: [
      {
        id: "4-1",
        title: "加快\"数字湾区\"建设",
        tasks: [
          { 
            id: "36", 
            title: "持续优化粤港澳大湾区跨境往来综合服务", 
            content: "推动港澳居民来往内地通行证全流程电子化办理。推动政务服务\"跨境通办\"，推进广东与港澳双向部署投放自助服务设备。以重点场景牵引\"湾事通\"平台服务优化升级。推动粤港澳跨境交通出行服务数字化整合。",
            departments: "省公安厅、交通运输厅、政务和数据局按职责分工负责"
          },
          { 
            id: "37", 
            title: "深入推动粤港澳大湾区口岸通关便利化", 
            content: "优化粤港澳海关通关资讯平台服务功能，深化拓展资讯平台应用。积极推动\"跨境一锁\"\"组合港\"\"一港通\"等项目优化完善。探索通过\"粤港澳大湾区三地船舶安全检查协同信息平台\"交换粤港澳三地海事机构水上交通安全信息，推广协同检查远程复查措施。促进粤港澳游艇互认互通，建设\"粤港澳游艇自由行\"信息管理综合服务模块，便利港澳游艇自由行办理手续。",
            departments: "海关总署广东分署、广东海事局按职责分工负责"
          },
          { 
            id: "38", 
            title: "推动粤港澳大湾区\"数据特区\"建设", 
            content: "探索构建数据安全合规有序跨境流通机制。搭建跨境可信数据空间等基础设施，加快打造粤港澳大湾区核心信息要素交互枢纽，依托重大平台稳妥有序推进大湾区\"数据特区\"建设。",
            departments: "省委网信办，省政务和数据局按职责分工负责"
          },
          { 
            id: "39", 
            title: "推进粤港澳大湾区智慧城市群建设", 
            content: "强化粤港两地联动，召开专责小组会议，推动制定合作事项清单。制定大湾区互联互通整体路线图，推进香港车联网产业标准体系建设，推动深港车联网互通项目以及深港互通香港侧的智慧道路建设。推进粤港澳大湾区水路高等级航道基础设施数字化改造。加强粤港在数字科技研发、成果转化、应用拓展、信息化建设等方面的合作。推进智慧全运，全力落实十五运会和残特奥会信息化保障任务。",
            departments: "省政务和数据局牵头，省科技厅、工业和信息化厅、交通运输厅、体育局按职责分工负责"
          }
        ]
      },
      {
        id: "4-2",
        title: "发展普惠数字公共服务",
        tasks: [
          { 
            id: "40", 
            title: "教育服务数字化", 
            content: "深入推进国家中小学智慧教育平台全域全员全流程应用，建设智慧教育实验省，促进基础教育扩优提质、区域均衡发展。推进教育数据治理，建设开放共享、数据互通、技术集成、应用协同、交互可用的教育数字中台和基座。整合现有政务信息系统，建设教育综合服务大平台。",
            departments: "省教育厅牵头"
          },
          { 
            id: "41", 
            title: "医疗服务数字化", 
            content: "加快便捷就医数字化转型应用场景建设，发展远程医疗，规范开展互联网诊疗、健康咨询等线上服务。深化医保码推广应用，扩大医保移动支付、电子处方、亲情代办等数字化服务覆盖面，依托\"粤医保\"移动公共服务平台持续迭代提供优质的线上医保便民服务，推动凭医保码就医购药及办事的全流程\"掌上办\"服务。推进医保事项\"数智咨询\"、药品信息精准追溯等场景应用，提升群众办理医保业务的便利度和体验感。",
            departments: "省卫生健康委、医保局按职责分工负责"
          },
          { 
            id: "42", 
            title: "养老服务数字化", 
            content: "深化省养老服务管理系统全省应用，依托省政务服务网及\"粤省事\"平台提供养老服务设施、养老机构及长者饭堂信息查询等，扩展养老机构管理、老年人服务相关功能。推进适老助残无障碍设施与公共服务数字化改造。",
            departments: "省民政厅牵头"
          },
          { 
            id: "43", 
            title: "提升社保与就业服务数字化水平", 
            content: "深化社会保障卡居民服务\"一卡通\"，拓展公共交通、文化旅游等场景，探索住宿登记等场景，推动各地完善终端用卡设备。持续优化完善全省就业一体化信息平台，稳步推进社保等相关业务系统升级改造。",
            departments: "省人力资源社会保障厅牵头"
          }
        ]
      },
      {
        id: "4-3",
        title: "深化社会智慧治理",
        tasks: [
          { 
            id: "44", 
            title: "加强应急指挥能力建设", 
            content: "升级完善\"智慧大应急\"综合应用平台，强化视频和数据资源汇聚与创新应用，探索利用大模型加强智能调度功能建设，完善自然灾害风险监测预警综合分析、融合应用与辅助决策，持续提升风险防控与应急指挥能力。",
            departments: "省应急管理厅牵头"
          },
          { 
            id: "45", 
            title: "提升社会治安综合治理效能", 
            content: "推动\"粤平安\"社会治安综合治理云平台基层矛盾纠纷事件\"应录尽录\"和全量汇聚，推动平台与信访矛盾纠纷数据共享对接。探索接入人工智能，提升平台矛盾纠纷风险研判和态势分析决策能力。",
            departments: "省委政法委牵头"
          },
          { 
            id: "47", 
            title: "提升12345热线民意速办能力", 
            content: "修订《广东省12345政务服务便民热线管理办法》。提升12345热线\"民意速办\"效能，推动民生诉求事项清单化标准化管理，加强数据治理语分析研判。",
            departments: "省政务和数据局牵头"
          },
          { 
            id: "48", 
            title: "提升法治数字化水平", 
            content: "加强数字法院建设，推进电子卷宗深度应用，支撑省法院全流程数字化办案，探索智能化应用服务审判业务，巩固提升审判质效。推进数字检察战略，推进大数据法律监督模型应用场景体系建设。加快推进省级数字检察中心和大数据平台、公益诉讼指挥系统等指挥中心建设。",
            departments: "省法院、检察院按职责分工负责"
          }
        ]
      },
      {
        id: "4-4",
        title: "构筑全民畅享的数字生活",
        tasks: [
          { 
            id: "49", 
            title: "打造绿色智慧生活", 
            content: "加强能源数据融合创新，推进源网荷储一体化发展，提升能源调度智能化水平。探索推进省市县一体化碳达峰、碳中和数智化管理，开展重点行业和区域碳排放智能化监测分析，在产业园区、商务区推广建设零碳智慧园区、绿色智能建筑。创新应用场景，完善林业综合管理平台和林业监测数据管理平台建设。强化林业数据支撑，上线森林质量精准提升管理应用，协调丰富绿美广东公共服务平台功能。",
            departments: "省生态环境厅、林业局、能源局按职责分工负责"
          },
          { 
            id: "50", 
            title: "推动文旅新业态发展", 
            content: "深入挖掘地方特色数字文化资源，丰富数字文化产品供给，加强地方特色文化遗产的数字化保护与应用。加强\"文化广东\"平台建设，推动省级以上文物保护单位数字化建设，推动实现全省数字文化资源共享。加强全省文化艺术团体线上线下融合能力。开展全媒体推广，提升\"活力广东时尚湾区\"品牌形象。构建全省文化及相关产业发展数据库，实现依托人工智能对全省文化产业数字化服务指导。",
            departments: "省文化和旅游厅牵头"
          },
          { 
            id: "51", 
            title: "强化数字技术赋能美好生活", 
            content: "实施消费品工业\"数字三品\"行动，推动食品、家电、家具等行业加快数字化转型。发布《数字家庭评价标准》，进一步推动我省数字家庭提质扩面。大力推动智能网联汽车试点项目建设。持续推进交通运输部自动驾驶先导应用试点（广州南沙城市出行服务）建设。",
            departments: "省工业和信息化厅、住房城乡建设厅、交通运输厅按职责分工负责"
          }
        ]
      },
      {
        id: "4-5",
        title: "推动数字城乡试点建设",
        tasks: [
          { 
            id: "52", 
            title: "深化城市全域数字化转型和数字乡村试点", 
            content: "深入推进省城市全域数字化转型试点，推动重点地市发布标杆场景，遴选优秀产品及运营方案。指导有条件的地市探索超大特大城市数字化治理新路径。深入推进数字乡村试点建设，引导社会力量参与，探索数字乡村特色发展路径。",
            departments: "省政务和数据局、农业农村厅按职责分工负责"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "夯实数字基础设施和数字安全底座",
    description: "加快数字基础设施建设、筑牢数字安全防线",
    icon: "🔐",
    subsections: [
      {
        id: "5-1",
        title: "加快数字基础设施建设",
        tasks: [
          { 
            id: "53", 
            title: "推进基础网络设施泛在智联", 
            content: "完善\"双千兆\"网络建设覆盖，强化欠发达地区网络建设，支持在有条件地区开展万兆光网试点。支持深圳、韶关申报国家级互联网骨干直联点，支持深圳先行先试开放互联网数据中心等增值电信业务。推动5G规模化应用\"扬帆\"行动，不断加强5G网络设施建设和丰富5G产业供给。立足全省\"1+3\"的低空飞行保障体系，前瞻布局谋划低空基础设施。",
            departments: "省发展改革委、工业和信息化厅，省通信管理局按职责分工负责"
          },
          { 
            id: "54", 
            title: "推动算力高质量发展", 
            content: "建立健全全省算力统筹协调机制，制定《广东省算力基础设施优化布局的意见》《推动广东省算力基础设施发展的若干措施清单》等政策，开展算力、电力、网络基础设施协同布局规划，支持韶关加快数据中心集群建设，推动省内算力基础设施持续优化布局，分类分批推进低效数据中心节能降碳改造，推动数据中心向智算中心转型升级。推动全省数据中心算力监测调度。",
            departments: "省政务和数据局牵头，省发展改革委、工业和信息化厅、能源局，省通信管理局等按职责分工负责"
          },
          { 
            id: "55", 
            title: "积极部署数据基础设施", 
            content: "推动数据交易所建设数据可信流通基础设施，探索数据安全存储、授权鉴权等技术应用。深化落实\"一所多基地多平台\"体系，鼓励发挥龙头企业牵引作用，加快孵化行业数据空间。支持有条件的地市及区县探索建设城市数据空间。根据数据跨境流通需求，按需推进跨境信息通信基础设施建设。",
            departments: "省政务和数据局牵头，省通信管理局按职责分工负责"
          },
          { 
            id: "56", 
            title: "提升政务基础设施支撑能力", 
            content: "提升政务云、网服务能力，加强集约化建设，整合优化政务云、政务网、身份认证、电子印章等服务的申办、审核、运营、计费、监测能力，实现一本账统筹、一站式办理、一体化监控。构建省统一电子印章服务异地双中心架构和多节点服务能力，探索提供移动端服务、全省印章目录管理等创新业务场景。",
            departments: "省政务和数据局牵头"
          },
          { 
            id: "57", 
            title: "优化布局数字消费新基建", 
            content: "促进数字新基建与数字消费同频共振。发展支撑智慧医疗、智慧教育等新模式的基础设施。支持电子竞技、社交电商、直播电商等领域新基建发展。推动综合能源服务与智慧社区、智慧园区、智慧楼宇等用能场景深度耦合，利用数字技术提升综合能源服务绿色低碳效益。推动新能源汽车融入新型电力系统，推进智能基础设施与智能网联汽车协同发展。推进广州南沙、珠海横琴和深圳、中山全市域数字电网示范性建设。",
            departments: "省教育厅、工业和信息化厅、住房城乡建设厅、商务厅、文化和旅游厅、卫生健康委、能源局等按职责分工负责"
          }
        ]
      },
      {
        id: "5-2",
        title: "筑牢数字安全防线",
        tasks: [
          { 
            id: "58", 
            title: "强化网络安全和数据安全管理", 
            content: "健全全方位网络安全联防联控机制，强化省、市一体化安全运营，增强网络安全保障能力。加强攻防演练，加强网络安全预警通报，提升网络安全应急处置能力。健全数据安全管理体系，明确数据安全责任人及机构，加强重要数据和个人信息保护，建立健全数据安全监测、审计、风险评估及安全事件应急处理机制。提升密码基础设施管理水平，加强密码资源使用指导。常态化开展安全培训、安全审计、安全测评、漏洞排查和供应链安全管理。",
            departments: "省委网信办，省保密局、密码管理局，省公安厅、政务和数据局，省通信管理局按职责分工负责"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "优化数字广东建设环境",
    description: "加强数字广东建设整体统筹、强化数字广东建设要素保障、完善数字化交流合作机制",
    icon: "🌱",
    subsections: [
      {
        id: "6-1",
        title: "加强数字广东建设整体统筹",
        tasks: [
          { 
            id: "59", 
            title: "强化统筹协调", 
            content: "发挥好数字广东建设领导小组作用，建立健全工作机制，提升数字广东整体性、系统性、协同性，优化全省\"一盘棋\"工作推进格局。组建数字广东专家委员会，科学编制数字广东\"十五五\"规划。",
            departments: "省政务和数据局牵头"
          }
        ]
      },
      {
        id: "6-2",
        title: "强化数字广东建设要素保障",
        tasks: [
          { 
            id: "60", 
            title: "强化资金要素保障", 
            content: "积极申请和用好中央预算内投资、超长期特别国债等各类财政资金，发挥好产业投资基金引导带动作用，吸引创投、天使基金和社会资本投入。引导鼓励金融机构加大对数字化重点领域金融供给。继续用好数字政府基础能力均衡化发展省级奖补资金，支持欠发达地市夯实基础，打造一批可复制推广的示范应用。",
            departments: "省委金融办，省发展改革委、财政厅、政务和数据局，人民银行广东省分行、广东金融监管局按职责分工负责"
          },
          { 
            id: "61", 
            title: "加强数字化人才培养", 
            content: "深入实施省加快数字人才培育支撑数字经济发展若干措施，实施数字技术工程师培育项目，加强数字技能人才培养培训和评价，强化技工院校与数字产业开展校企合作。创新数字人才引进模式，健全数字人才引进绿色通道，集聚一批人工智能、智能制造等领域高层次人才。有序开展大数据工程技术人才职称评定工作，搭建大数据专业技术人才培养交流平台，组建大数据行业人才库。",
            departments: "省教育厅、人力资源社会保障厅、政务和数据局按职责分工负责"
          }
        ]
      },
      {
        id: "6-3",
        title: "完善数字化交流合作机制",
        tasks: [
          { 
            id: "62", 
            title: "推动数字化合作交流", 
            content: "做好数字援疆、援藏等工作，深化与外省（区、市）、香港、澳门的数字化交流合作。充分发挥产业联盟、行业协会及相关中介机构的桥梁纽带作用，大力支持省内高校院所、企业等创新主体，面向创新型国家和共建\"一带一路\"国家开展数字领域国际交流合作。",
            departments: "省有关部门按职责分工负责"
          }
        ]
      }
    ]
  }
];

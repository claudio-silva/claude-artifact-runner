import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, 
  BarChart, BarChart2, PieChart, TrendingUp, 
  Users, Zap, 
  Check, FileText, Compass, Lightbulb, Target, 
  Network, Phone, Mail, MapPin, Brain, TrendingDown, Activity, Shield, Database,
  Building, Calendar, Briefcase, GitBranch, Globe, Cpu, Layers, Wrench,
  ChevronRight, ArrowUpRight, Star, Award, Grid, LayoutDashboard, Sparkles
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SouthernPropertyPlatform = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // 初始化时检查系统主题偏好
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 切换主题模式
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 切换菜单
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 处理滚动到指定区域
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  // 定义导航菜单项
  const navItems = [
    { id: 'overview', label: '项目概览' },
    { id: 'background', label: '背景与挑战' },
    { id: 'methodology', label: '咨询方法' },
    { id: 'assessment', label: '评估发现' },
    { id: 'strategy', label: '战略规划' },
    { id: 'implementation', label: '实施路径' },
    { id: 'value', label: '价值创造' },
    { id: 'ai-planning', label: 'AI规划咨询' },
    { id: 'case-study', label: '深燃AI咨询规划方案' },
  ];


  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* 顶部导航栏 */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/95 backdrop-blur-sm border-gray-800' : 'bg-white/95 backdrop-blur-sm border-gray-200'} border-b shadow-md`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className={`mr-3 rounded-full p-2 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}>
              <LayoutDashboard size={22} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <h1 className="text-xl font-bold md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              AI咨询规划 | 数智化转型解决方案
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            {/* 主题切换按钮 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`rounded-full ${darkMode ? 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
              aria-label="切换深色/浅色模式"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            {/* 桌面导航菜单 */}
            <nav className="hidden md:flex ml-2">
              <ul className="flex space-x-1">
                {navItems.map(item => (
                  <li key={item.id}>
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "rounded-full px-3 py-2 text-sm font-medium transition-all",
                        activeSection === item.id 
                          ? (darkMode 
                              ? "bg-blue-950/70 text-blue-300" 
                              : "bg-blue-100 text-blue-700")
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* 移动端菜单按钮 */}
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleMenu} 
              className="md:hidden"
              aria-label="菜单"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
        
        {/* 移动端下拉菜单 */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900/95 backdrop-blur-sm border-gray-800' : 'bg-white/95 backdrop-blur-sm border-gray-200'} border-t`}>
            <ul className="py-2 px-2 grid grid-cols-2 gap-1">
              {navItems.map(item => (
                <li key={item.id}>
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "w-full justify-start text-left",
                      activeSection === item.id 
                        ? (darkMode 
                            ? "bg-blue-600/70 hover:bg-blue-600/80" 
                            : "bg-blue-600 hover:bg-blue-600/90")
                        : ""
                    )}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* 项目概览 */}
        <section id="overview" className="mb-24">
          <div className="max-w-5xl mx-auto">
            <Card className={`${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-100'} mb-8 relative overflow-hidden shadow-lg`}>
              {/* 装饰元素 */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple-500 opacity-10 blur-2xl animate-pulse"></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-indigo-500 opacity-5 blur-xl"></div>
              
              <CardContent className="relative z-10 p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-2">
                      <Badge variant="outline" className={`${darkMode ? 'border-blue-700 bg-blue-950/50 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'} rounded-full px-3 py-1 text-xs font-medium`}>
                        <Sparkles size={12} className="mr-1" /> 咨询项目案例
                      </Badge>
                    </div>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      某产权数智型交易平台
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
                      成熟度评估与建设路径咨询项目
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      本项目旨在帮助某产权交易中心构建数智型交易平台，提升数字化成熟度，加速业务转型升级。通过系统性评估与规划，为客户提供全面的数字化转型解决方案。
                    </p>
                  </div>
                  
                  <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/50'} backdrop-blur-sm p-4 rounded-2xl hidden lg:flex flex-col items-center justify-center min-w-40`}>
                    <Database size={52} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3 opacity-90`} />
                    <Badge variant="secondary" className="font-semibold mb-1">数智化转型</Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2024年项目</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className={`border-0 ${darkMode ? 'bg-gray-800/60' : 'bg-white/80'} backdrop-blur-sm shadow-md`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                          <FileText size={20} className="text-blue-500" />
                        </div>
                        <CardTitle className="text-lg">项目信息</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Building size={16} className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                          <div>
                            <span className="font-medium">客户:</span>
                            <span className="ml-2">某产权交易中心有限责任公司</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar size={16} className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                          <div>
                            <span className="font-medium">项目周期:</span>
                            <span className="ml-2">2024年</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Briefcase size={16} className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                          <div>
                            <span className="font-medium">服务类型:</span>
                            <span className="ml-2">数字化成熟度评估与转型规划咨询</span>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className={`border-0 ${darkMode ? 'bg-gray-800/60' : 'bg-white/80'} backdrop-blur-sm shadow-md`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                          <Users size={20} className="text-blue-500" />
                        </div>
                        <CardTitle className="text-lg">咨询团队</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3">由7位专家组成，涵盖多个专业领域：</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className={`${darkMode ? 'bg-blue-900/50 hover:bg-blue-900/70 text-blue-300' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}>
                          数字化转型
                        </Badge>
                        <Badge variant="secondary" className={`${darkMode ? 'bg-green-900/50 hover:bg-green-900/70 text-green-300' : 'bg-green-100 hover:bg-green-200 text-green-800'}`}>
                          产权交易
                        </Badge>
                        <Badge variant="secondary" className={`${darkMode ? 'bg-purple-900/50 hover:bg-purple-900/70 text-purple-300' : 'bg-purple-100 hover:bg-purple-200 text-purple-800'}`}>
                          数据治理
                        </Badge>
                        <Badge variant="secondary" className={`${darkMode ? 'bg-orange-900/50 hover:bg-orange-900/70 text-orange-300' : 'bg-orange-100 hover:bg-orange-200 text-orange-800'}`}>
                          IT架构
                        </Badge>
                        <Badge variant="secondary" className={`${darkMode ? 'bg-red-900/50 hover:bg-red-900/70 text-red-300' : 'bg-red-100 hover:bg-red-200 text-red-800'}`}>
                          业务创新
                        </Badge>
                        <Badge variant="secondary" className={`${darkMode ? 'bg-indigo-900/50 hover:bg-indigo-900/70 text-indigo-300' : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800'}`}>
                          AI战略
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mt-8">              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="gap-1 px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
                  <Zap size={16} /> 数字化转型
                </Badge>
                <Badge className="gap-1 px-3 py-1.5 text-sm bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-700 dark:hover:bg-emerald-800">
                  <BarChart2 size={16} /> 成熟度评估
                </Badge>
                <Badge className="gap-1 px-3 py-1.5 text-sm bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800">
                  <MapPin size={16} /> 路径规划
                </Badge>
                <Badge className="gap-1 px-3 py-1.5 text-sm bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-700 dark:hover:bg-amber-800">
                  <Database size={16} /> 数据治理
                </Badge>
                <Badge className="gap-1 px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-800">
                  <Wrench size={16} /> AI规划咨询
                </Badge>
              </div>
              
              <div className={`p-6 rounded-xl border ${darkMode ? 'border-gray-800 bg-gray-800/30' : 'border-gray-200 bg-gray-50'}`}>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Award size={20} className={`mr-2 ${darkMode ? 'text-amber-400' : 'text-amber-500'}`} />
                  项目价值
                </h3>
                <p className="text-lg leading-relaxed mb-0">
                  通过本项目的实施，帮助产权交易中心在数字经济时代保持竞争优势，提升业务效率，创新服务模式，打造数智化转型标杆。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 项目背景与挑战 */}
        <section id="background" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-red-900/30' : 'bg-red-100'}`}>
                <TrendingDown size={20} className={darkMode ? 'text-red-400' : 'text-red-600'} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">项目背景与挑战</h2>
            </div>
            <Separator className={`mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
            
            <Card className={`${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-blue-50/50 border-blue-100'} mb-10`}>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  某产权交易中心作为广东省属国有资本市场的重要平台，肩负着以阳光交易、发现价格、发现价值的方式促进国有资本存量流动、优化配置的重要使命。面临数字经济发展新形势下的多重挑战：
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className={`border ${darkMode ? 'border-gray-700 bg-gradient-to-br from-gray-800 to-gray-800/80' : 'border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50'} shadow-md overflow-hidden`}>
                <div className={`h-2 ${darkMode ? 'bg-red-700' : 'bg-red-500'}`}></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingDown size={18} className={darkMode ? 'text-red-400' : 'text-red-600'} />
                    行业竞争挑战
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">1</Badge>
                      <span>沪深交易所等传统证券类交易场所加大创新力度</span>
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">2</Badge>
                      <span>北京产权交易所等同业机构布局粤港澳大湾区</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`border ${darkMode ? 'border-gray-700 bg-gradient-to-br from-gray-800 to-gray-800/80' : 'border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50'} shadow-md overflow-hidden`}>
                <div className={`h-2 ${darkMode ? 'bg-yellow-700' : 'bg-yellow-500'}`}></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Database size={18} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
                    数据价值挑战
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">1</Badge>
                      <span>存在"信息孤岛"问题，数据共享机制不完善</span>
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">2</Badge>
                      <span>无法充分发挥数据要素价值，难以支撑精准决策</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`border ${darkMode ? 'border-gray-700 bg-gradient-to-br from-gray-800 to-gray-800/80' : 'border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50'} shadow-md overflow-hidden`}>
                <div className={`h-2 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-500'}`}></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Network size={18} className={darkMode ? 'text-indigo-400' : 'text-indigo-600'} />
                    系统协同挑战
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">1</Badge>
                      <span>核心业务系统间集成度不高，跨系统协同效率低下</span>
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">2</Badge>
                      <span>难以提供一站式综合服务</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className={`border ${darkMode ? 'border-gray-700 bg-gradient-to-br from-gray-800 to-gray-800/80' : 'border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50'} shadow-md overflow-hidden`}>
                <div className={`h-2 ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Brain size={18} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                    转型规划挑战
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">1</Badge>
                      <span>数字化建设处于"零散化探索阶段"</span>
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">2</Badge>
                      <span>缺乏整体战略引领和科学评估体系</span>
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="rounded-full min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5">3</Badge>
                      <span>数字化专业人才队伍建设滞后，复合型人才储备不足</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className={`${darkMode ? 'bg-red-900/20 border-red-900/30' : 'bg-red-50 border-red-200'} p-4 mt-6`}>
              <CardContent className="p-2 flex items-start gap-3">
                <div className="mt-1">
                  <Shield size={24} className={darkMode ? 'text-red-400' : 'text-red-600'} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">挑战总结</h4>
                  <p className="leading-relaxed">
                    在此背景下，产权交易中心亟需开展系统性评估，找准定位，明晰路径，加快构建数智型交易平台，实现高质量发展。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 咨询方法与流程 */}
        <section id="methodology" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                <GitBranch size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">咨询方法与流程</h2>
            </div>
            <Separator className={`mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
            
            <Card className={`${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-blue-50/50 border-blue-100'} mb-10`}>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  我们采用整体性、系统化的咨询方法，确保评估全面客观、规划切实可行：
                </p>
              </CardContent>
            </Card>
            
            <div className="relative">
              {/* 连接线 */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${darkMode ? 'bg-blue-600' : 'bg-blue-600'} shadow-lg z-10`}>1</div>
                  </div>
                  
                  <Card className={`flex-1 border ${darkMode ? 'border-gray-700 bg-gray-800/80' : 'border-blue-200 bg-white'} shadow-md overflow-hidden`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Lightbulb size={20} className={darkMode ? 'text-amber-400' : 'text-amber-500'} />
                        指标体系构建阶段
                      </CardTitle>
                      <CardDescription>建立科学的评估框架和指标体系</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-blue-900/20 border-blue-700/50' : 'bg-blue-50 border-blue-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>1</Badge>
                              <div>
                                <span className="font-semibold block text-sm">理论研究</span>
                                <span className="text-sm text-muted-foreground">深入研究企业组织理论、流程再造理论、变革管理理论和数字化成熟度模型</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-blue-900/20 border-blue-700/50' : 'bg-blue-50 border-blue-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>2</Badge>
                              <div>
                                <span className="font-semibold block text-sm">标杆分析</span>
                                <span className="text-sm text-muted-foreground">考察行业领先机构实践，提炼数字化转型关键成功因素</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-blue-900/20 border-blue-700/50' : 'bg-blue-50 border-blue-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>3</Badge>
                              <div>
                                <span className="font-semibold block text-sm">专家研讨</span>
                                <span className="text-sm text-muted-foreground">召开多轮专家讨论会，凝聚行业共识，优化评估框架</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-blue-900/20 border-blue-700/50' : 'bg-blue-50 border-blue-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>4</Badge>
                              <div>
                                <span className="font-semibold block text-sm">指标设计</span>
                                <span className="text-sm text-muted-foreground">构建8大能力要素×19个能力域×38个能力子域三级评估框架</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-blue-900/20 border-blue-700/50' : 'bg-blue-50 border-blue-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>5</Badge>
                              <div>
                                <span className="font-semibold block text-sm">指标验证</span>
                                <span className="text-sm text-muted-foreground">通过试评估验证指标体系的科学性和可操作性，并进行优化完善</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold mb-3">8大评估能力要素</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "数字化治理", "数据管理", "数字化基础设施", "产品和服务数字化",
                            "经营管理数字化", "运营数字化", "内控体系数字化", "可持续发展基础"
                          ].map((item, index) => (
                            <Badge key={index} variant="secondary" className={`${darkMode ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-blue-50 hover:bg-blue-100'}`}>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${darkMode ? 'bg-indigo-600' : 'bg-indigo-600'} shadow-lg z-10`}>2</div>
                  </div>
                  
                  <Card className={`flex-1 border ${darkMode ? 'border-gray-700 bg-gray-800/80' : 'border-blue-200 bg-white'} shadow-md overflow-hidden`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <BarChart2 size={20} className={darkMode ? 'text-green-400' : 'text-green-500'} />
                        现状评估与诊断阶段
                      </CardTitle>
                      <CardDescription>全面评估当前数字化成熟度状态</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                        {[
                          { title: "资料收集", desc: "梳理分析战略规划、业务流程、系统架构、数据治理等内部文档600余份" },
                          { title: "实地调研", desc: "对19个部门进行访谈，了解业务痛点和数字化需求" },
                          { title: "问卷调查", desc: "开展全员数字化认知和能力调查，回收有效问卷115份" },
                          { title: "专项测试", desc: "对核心信息系统和数据质量进行专项测试，量化评估性能和可靠性" },
                          { title: "标杆对比", desc: "与北京产权交易所、宁夏科技与资源产权交易所等进行对标分析" },
                          { title: "数据分析", desc: "运用定量评分与定性分析相结合的方法，形成各维度成熟度等级判定" },
                          { title: "专家评审", desc: "组织内外部专家对评估结果进行评审验证，确保评估客观公正" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-indigo-900/20 border-indigo-700/50' : 'bg-indigo-50 border-indigo-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>{index+1}</Badge>
                            <div>
                              <span className="font-semibold block text-sm">{item.title}</span>
                              <span className="text-sm text-muted-foreground">{item.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2">
                        <div className={`p-2 rounded-lg ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'} flex flex-col items-center justify-center text-center`}>
                          <span className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>600+</span>
                          <span className="text-xs md:text-sm">文档分析</span>
                        </div>
                        <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'} flex flex-col items-center justify-center text-center`}>
                          <span className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>19</span>
                          <span className="text-xs md:text-sm">部门访谈</span>
                        </div>
                        <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'} flex flex-col items-center justify-center text-center`}>
                          <span className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-green-300' : 'text-green-600'}`}>115</span>
                          <span className="text-xs md:text-sm">问卷收集</span>
                        </div>
                        <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'} flex flex-col items-center justify-center text-center`}>
                          <span className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>8</span>
                          <span className="text-xs md:text-sm">能力要素</span>
                        </div>
                        <div className={`p-2 rounded-lg ${darkMode ? 'bg-amber-900/30' : 'bg-amber-50'} flex flex-col items-center justify-center text-center`}>
                          <span className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-amber-300' : 'text-amber-600'}`}>38</span>
                          <span className="text-xs md:text-sm">能力子域</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${darkMode ? 'bg-purple-600' : 'bg-purple-600'} shadow-lg z-10`}>3</div>
                  </div>
                  
                  <Card className={`flex-1 border ${darkMode ? 'border-gray-700 bg-gray-800/80' : 'border-blue-200 bg-white'} shadow-md overflow-hidden`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Target size={20} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
                        建设路径规划阶段
                      </CardTitle>
                      <CardDescription>制定详细的实施策略和行动方案</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className={`p-5 rounded-lg border-l-4 ${darkMode ? 'bg-gray-800 border-purple-600' : 'bg-purple-50 border-purple-400'}`}>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Badge variant="secondary" className={`${darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>战略规划</Badge>
                          </h4>
                          <ul className="space-y-2 pl-1">
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">结合评估结果与行业趋势，明确产权数智化发展的战略定位</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">制定五年数字化转型规划，明确阶段性目标</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className={`p-5 rounded-lg border-l-4 ${darkMode ? 'bg-gray-800 border-blue-600' : 'bg-blue-50 border-blue-400'}`}>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Badge variant="secondary" className={`${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>路径设计</Badge>
                          </h4>
                          <ul className="space-y-2 pl-1">
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">针对评估发现的问题和短板，设计六大关键建设路径</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">与企业管理层共同确定重点突破方向</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className={`p-5 rounded-lg border-l-4 ${darkMode ? 'bg-gray-800 border-green-600' : 'bg-green-50 border-green-400'}`}>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Badge variant="secondary" className={`${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'}`}>举措细化</Badge>
                          </h4>
                          <ul className="space-y-2 pl-1">
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">提出24项具体实施举措，并制定详细的责任分工和时间表</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">确定关键里程碑和成功指标，便于后续跟踪评估</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className={`p-5 rounded-lg border-l-4 ${darkMode ? 'bg-gray-800 border-amber-600' : 'bg-amber-50 border-amber-400'}`}>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Badge variant="secondary" className={`${darkMode ? 'bg-amber-900/50 text-amber-300' : 'bg-amber-100 text-amber-800'}`}>实施保障</Badge>
                          </h4>
                          <ul className="space-y-2 pl-1">
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">设计从组织、资源、制度等多方面的配套保障措施</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm">通过研讨会对规划方案进行讨论完善，提高方案可行性</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-center">
                        <Badge variant="outline" className={`px-3 py-1 ${darkMode ? 'border-purple-500 text-purple-400' : 'border-purple-400 text-purple-700'}`}>
                          <Star size={14} className="mr-1" /> 产出：数智型交易平台建设实施路线图
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 深度评估发现 */}
        <section id="assessment" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                <BarChart2 size={20} className={darkMode ? 'text-green-400' : 'text-green-600'} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">深度评估发现</h2>
            </div>
            <Separator className={`mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
            
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Badge className={`${darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700'}`}>
                  成熟度评估
                </Badge>
                <span>整体结果</span>
              </h3>
              
              <Card className={`${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-blue-100'} mb-8 overflow-hidden`}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm uppercase font-medium text-muted-foreground mb-1">综合成熟度等级</h4>
                          <div className="text-3xl font-bold">三级（发展级）</div>
                          <div className="mt-1 text-lg"><span className="font-semibold text-green-500 dark:text-green-400">3.16</span> 分（满分5分）</div>
                        </div>
                        
                        <div className="pt-4">
                          <blockquote className={`pl-4 border-l-4 ${darkMode ? 'border-green-500' : 'border-green-500'} italic text-muted-foreground`}>
                            "形成系统的中长期规划，数字化体系日趋完善，应用场景不断拓展，开始形成规模效应。"
                          </blockquote>
                        </div>
                        
                        <div className="pt-2">
                          <Badge variant="outline" className={`${darkMode ? 'border-green-500 text-green-400' : 'border-green-500 text-green-700'} px-3 py-1`}>
                            整体处于行业中上水平
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 flex justify-center items-center">
                      <div className="w-64 h-64 relative">
                        {/* 绘制仪表盘背景 */}
                        <div className={`absolute inset-0 rounded-full border-[16px] ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}></div>
                        
                        {/* 绘制五个等级区域 */}
                        {[...Array(5)].map((_, index) => (
                          <div 
                            key={index}
                            className={`absolute top-0 left-0 bottom-0 right-0 rounded-full border-[16px] ${
                              index === 2 ? (darkMode ? 'border-green-500' : 'border-green-500') :
                              (darkMode ? 'border-gray-700/50' : 'border-gray-100')
                            } opacity-${index === 2 ? '100' : '30'}`}
                            style={{
                              clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((index+1)/5 * 2 * Math.PI)}% ${50 - 50 * Math.sin((index+1)/5 * 2 * Math.PI)}%, 50% 50%)`,
                              transform: 'rotate(-90deg)'
                            }}
                          ></div>
                        ))}
                        
                        {/* 绘制当前分数的指针 */}
                        <div 
                          className={`absolute top-0 left-0 bottom-0 right-0 rounded-full border-[16px] ${darkMode ? 'border-blue-500' : 'border-blue-600'} border-t-transparent border-l-transparent border-r-transparent`}
                          style={{
                            transform: `rotate(${-90 + (3.16/5) * 180}deg)`
                          }}
                        ></div>
                        
                        {/* 中心文字 */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-blue-500">3.16</span>
                          <span className="text-sm text-muted-foreground">发展级</span>
                        </div>
                        
                        {/* 刻度标记 */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-xs font-medium">5</div>
                        <div className="absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 text-xs font-medium">3.75</div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-xs font-medium">2.5</div>
                        <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 text-xs font-medium">1.25</div>
                        
                        {/* 等级标签 */}
                        <div className="absolute -bottom-6 w-full text-center">
                          <div className="flex justify-between px-2">
                            <span className="text-xs">初始级</span>
                            <span className="text-xs">管理级</span>
                            <span className="text-xs font-semibold text-green-500">发展级</span>
                            <span className="text-xs">量化级</span>
                            <span className="text-xs">优化级</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Tabs defaultValue="table" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="table">详细评分表格</TabsTrigger>
                  <TabsTrigger value="chart">能力维度分析</TabsTrigger>
                </TabsList>
                
                <TabsContent value="table" className="mt-0">
                  <Card className={`${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <CardContent className="p-0 sm:p-2">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            <tr>
                              <th className="py-3 px-4 text-left font-medium text-xs sm:text-sm">能力要素</th>
                              <th className="py-3 px-4 text-left font-medium text-xs sm:text-sm">权重</th>
                              <th className="py-3 px-4 text-left font-medium text-xs sm:text-sm">得分</th>
                              <th className="py-3 px-2 text-left font-medium text-xs sm:text-sm hidden md:table-cell">能力域</th>
                              <th className="py-3 px-2 text-left font-medium text-xs sm:text-sm hidden lg:table-cell">典型问题</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                name: "数字化治理",
                                weight: "15%",
                                score: 3.85,
                                domains: "战略规划(4.0)、组织管理(3.75)",
                                issues: "战略实施效果监测不足，创新文化建设有待加强",
                                color: "blue"
                              },
                              {
                                name: "数据管理",
                                weight: "15%",
                                score: 2.82,
                                domains: "数据规范(2.65)、数据融合(2.70)、数据保护(2.0)",
                                issues: "数据标准缺失，部门间数据壁垒明显，数据质量参差不齐",
                                color: "red"
                              },
                              {
                                name: "数字基础设施",
                                weight: "15%",
                                score: 3.21,
                                domains: "数据中心(3.15)、通信网络(2.0)、安全防护(3.0)",
                                issues: "设备老旧问题突出，云化率不足50%，智能运维水平较低",
                                color: "amber"
                              },
                              {
                                name: "产品服务数字化",
                                weight: "15%",
                                score: 3.20,
                                domains: "线上渠道(4.0)、线下渠道(2.0)",
                                issues: "线上业务流程优化不足，缺乏个性化智能推荐能力",
                                color: "green"
                              },
                              {
                                name: "经营管理数字化",
                                weight: "15%",
                                score: 3.15,
                                domains: "数字办公(3.0)、数字经营(3.2)、敏捷创新(3.0)",
                                issues: "业务与技术协同不足，创新项目落地机制不完善",
                                color: "indigo"
                              },
                              {
                                name: "运营数字化",
                                weight: "10%",
                                score: 3.00,
                                domains: "流程标准化(3.0)、流程自动化(3.0)",
                                issues: "流程自动化率不足60%，重复性工作占比高",
                                color: "purple"
                              },
                              {
                                name: "内控数字化",
                                weight: "10%",
                                score: 2.85,
                                domains: "合规管理(2.5)、风险管理(2.9)、审计管理(3.0)",
                                issues: "风险监测预警不及时，合规管理平台有待升级",
                                color: "pink"
                              },
                              {
                                name: "可持续发展基础",
                                weight: "5%",
                                score: 3.00,
                                domains: "标准体系建设(3.0)",
                                issues: "标准制修订参与广度不够，标准应用深度不足",
                                color: "emerald"
                              }
                            ].map((item, index) => (
                              <tr key={index} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/30' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                                <td className="py-3 px-4 font-medium text-xs sm:text-sm">
                                  <div className="flex items-center">
                                    <div className={`w-2 h-2 rounded-full bg-${item.color}-500 mr-2`}></div>
                                    {item.name}
                                  </div>
                                </td>
                                <td className="py-3 px-4 text-xs sm:text-sm">{item.weight}</td>
                                <td className="py-3 px-4 text-xs sm:text-sm">
                                  <div className="flex items-center gap-2">
                                    <span className={`font-medium ${
                                      item.score >= 4 ? 'text-green-500 dark:text-green-400' :
                                      item.score >= 3 ? 'text-blue-500 dark:text-blue-400' :
                                      'text-amber-500 dark:text-amber-400'
                                    }`}>{item.score}</span>
                                    <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full rounded-full ${
                                          item.score >= 4 ? 'bg-green-500' :
                                          item.score >= 3 ? 'bg-blue-500' :
                                          'bg-amber-500'
                                        }`}
                                        style={{ width: `${(item.score / 5) * 100}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3 px-2 text-xs sm:text-sm hidden md:table-cell">{item.domains}</td>
                                <td className="py-3 px-2 text-xs sm:text-sm hidden lg:table-cell text-muted-foreground">{item.issues}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="chart" className="mt-0">
                  <Card className={`${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <CardContent className="p-6">
                      <div className="h-80 flex items-center justify-center">
                        <div className="w-full max-w-lg">
                          {/* 绘制雷达图 */}
                          <div className="relative h-72 w-72 mx-auto">
                            {/* 背景网格 - 5个层级 */}
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div 
                                key={level}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-full`}
                                style={{
                                  width: `${level * 20}%`,
                                  height: `${level * 20}%`,
                                }}
                              ></div>
                            ))}
                            
                            {/* 8个维度的轴线 */}
                            {[...Array(8)].map((_, index) => {
                              const angle = (Math.PI * 2 * index) / 8;
                              const x2 = Math.sin(angle) * 50 + 50;
                              const y2 = -Math.cos(angle) * 50 + 50;
                              
                              return (
                                <div 
                                  key={index}
                                  className={`absolute top-1/2 left-1/2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                                  style={{
                                    width: '1px',
                                    height: '50%',
                                    transformOrigin: 'bottom center',
                                    transform: `rotate(${index * 45}deg)`,
                                  }}
                                ></div>
                              );
                            })}
                            
                            {/* 数据点和填充区域 */}
                            <svg 
                              viewBox="0 0 100 100" 
                              className="absolute inset-0 w-full h-full"
                            >
                              <polygon 
                                points="
                                  ${50 + Math.sin(0) * 3.85 * 10}, ${50 - Math.cos(0) * 3.85 * 10}
                                  ${50 + Math.sin(Math.PI/4) * 2.82 * 10}, ${50 - Math.cos(Math.PI/4) * 2.82 * 10}
                                  ${50 + Math.sin(Math.PI/2) * 3.21 * 10}, ${50 - Math.cos(Math.PI/2) * 3.21 * 10}
                                  ${50 + Math.sin(3*Math.PI/4) * 3.20 * 10}, ${50 - Math.cos(3*Math.PI/4) * 3.20 * 10}
                                  ${50 + Math.sin(Math.PI) * 3.15 * 10}, ${50 - Math.cos(Math.PI) * 3.15 * 10}
                                  ${50 + Math.sin(5*Math.PI/4) * 3.00 * 10}, ${50 - Math.cos(5*Math.PI/4) * 3.00 * 10}
                                  ${50 + Math.sin(3*Math.PI/2) * 2.85 * 10}, ${50 - Math.cos(3*Math.PI/2) * 2.85 * 10}
                                  ${50 + Math.sin(7*Math.PI/4) * 3.00 * 10}, ${50 - Math.cos(7*Math.PI/4) * 3.00 * 10}
                                "
                                fill={darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.2)'}
                                stroke={darkMode ? '#3b82f6' : '#3b82f6'}
                                strokeWidth="1"
                              />
                              
                              {/* 数据点 */}
                              {[
                                { score: 3.85, angle: 0 },
                                { score: 2.82, angle: Math.PI/4 },
                                { score: 3.21, angle: Math.PI/2 },
                                { score: 3.20, angle: 3*Math.PI/4 },
                                { score: 3.15, angle: Math.PI },
                                { score: 3.00, angle: 5*Math.PI/4 },
                                { score: 2.85, angle: 3*Math.PI/2 },
                                { score: 3.00, angle: 7*Math.PI/4 }
                              ].map((point, index) => {
                                const x = 50 + Math.sin(point.angle) * point.score * 10;
                                const y = 50 - Math.cos(point.angle) * point.score * 10;
                                
                                return (
                                  <circle 
                                    key={index}
                                    cx={x} 
                                    cy={y} 
                                    r="2" 
                                    fill={darkMode ? '#3b82f6' : '#3b82f6'}
                                  />
                                );
                              })}
                            </svg>
                            
                            {/* 标签 */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-xs font-medium">数字化治理</div>
                            <div className="absolute top-[15%] right-[15%] text-xs font-medium translate-x-1">数据管理</div>
                            <div className="absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 text-xs font-medium">数字基础设施</div>
                            <div className="absolute bottom-[15%] right-[15%] text-xs font-medium translate-x-1">产品服务数字化</div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-xs font-medium">经营管理数字化</div>
                            <div className="absolute bottom-[15%] left-[15%] text-xs font-medium -translate-x-1">运营数字化</div>
                            <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 text-xs font-medium">内控数字化</div>
                            <div className="absolute top-[15%] left-[15%] text-xs font-medium -translate-x-1">可持续发展基础</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                        <div className="text-center">
                          <div className={`text-lg font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>3.85</div>
                          <div className="text-xs text-muted-foreground">最高分项</div>
                          <div className="text-sm font-medium">数字化治理</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-lg font-bold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>2.82</div>
                          <div className="text-xs text-muted-foreground">最低分项</div>
                          <div className="text-sm font-medium">数据管理</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-lg font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>1.03</div>
                          <div className="text-xs text-muted-foreground">最大差距</div>
                          <div className="text-sm font-medium">项目间波动</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-lg font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>3.16</div>
                          <div className="text-xs text-muted-foreground">综合得分</div>
                          <div className="text-sm font-medium">发展级</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <Card className={`border overflow-hidden ${darkMode ? 'border-red-700/30 bg-gray-800/80' : 'border-red-200 bg-red-50/40'}`}>
                  <div className={`h-1.5 w-full ${darkMode ? 'bg-red-700' : 'bg-red-500'}`}></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <TrendingDown size={18} className={darkMode ? 'text-red-400' : 'text-red-600'} />
                      外部挑战
                    </CardTitle>
                    <CardDescription>来自市场和行业的竞争压力</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "沪深交易所等传统证券类交易场所加大创新力度",
                        "北京产权交易所等同业机构布局粤港澳大湾区",
                        "区域竞争日益激烈"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-red-900/20 border-red-700/50' : 'bg-red-50 border-red-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>{index+1}</Badge>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className={`border overflow-hidden ${darkMode ? 'border-amber-700/30 bg-gray-800/80' : 'border-amber-200 bg-amber-50/40'}`}>
                  <div className={`h-1.5 w-full ${darkMode ? 'bg-amber-700' : 'bg-amber-500'}`}></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Activity size={18} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                      内部痛点
                    </CardTitle>
                    <CardDescription>内部系统和能力的关键短板</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "数据价值难以发挥，存在\"信息孤岛\"问题",
                        "业务系统割裂，跨系统协同效率低下",
                        "转型缺乏系统规划，数字化建设处于\"零散化探索阶段\"",
                        "人才支撑不足，复合型人才储备不足"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Badge variant="outline" className={`rounded-full ${darkMode ? 'bg-amber-900/20 border-amber-700/50' : 'bg-amber-50 border-amber-200'} min-w-6 h-6 p-0 flex items-center justify-center mr-3 mt-0.5`}>{index+1}</Badge>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800/30' : 'bg-blue-50 border border-blue-200'} max-w-2xl text-center`}>
                  <div className="flex justify-center mb-2">
                    <ArrowUpRight size={24} className="text-blue-500" />
                  </div>
                  <p className="text-sm md:text-base">
                    <span className="font-medium">关键发现：</span>
                    产权交易中心数字化转型进入"发展级"阶段，已具备一定数字化基础，
                    但在<span className="font-medium text-red-500 dark:text-red-400">数据管理</span>和
                    <span className="font-medium text-amber-500 dark:text-amber-400">内控数字化</span>
                    方面存在明显短板，亟需系统规划和重点突破。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 典型差距与问题分析 */}
        <section id="problems" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">典型差距与问题分析</h2>
            
            <div className="space-y-8">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">1. 数据治理基础薄弱</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">核心问题</h4>
                    <p>未建成企业级数据中台，缺乏统一数据视图</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">具体表现</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">数据标准化程度低，不同系统中相同业务概念存在多种定义</li>
                      <li className="list-disc">缺乏数据资产目录，难以全面掌握数据资源情况</li>
                      <li className="list-disc">元数据、主数据管理滞后，影响数据质量和一致性</li>
                      <li className="list-disc">数据共享机制不健全，跨部门数据调用流程复杂</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">根本原因</h4>
                    <p>缺乏顶层规划，数据管理职责不明确，数据标准制定和执行机制不完善</p>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">2. 系统集成与智能化水平不足</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">核心问题</h4>
                    <p>各业务系统相对独立，集成度低，智能化水平不足</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">具体表现</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">交易、投行、融资等业务系统间数据共享机制不畅</li>
                      <li className="list-disc">系统间跨业务协同效率低下，无法提供一站式服务</li>
                      <li className="list-disc">人工智能、区块链等新技术应用不足，系统智能化程度较低</li>
                      <li className="list-disc">技术架构老旧，难以支撑业务快速迭代创新</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">根本原因</h4>
                    <p>信息化建设相对分散，缺乏统一的技术架构规划和标准规范</p>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                  <h3 className="text-xl font-semibold">3. 数字化人才体系不完善</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">核心问题</h4>
                    <p>数字化转型所需的复合型人才储备不足</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">具体表现</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="list-disc">既懂业务又懂技术的复合型人才匮乏</li>
                      <li className="list-disc">人才引进机制不够灵活，难以吸引高端AI、大数据人才</li>
                      <li className="list-disc">数字技能培训体系不完善，员工数字素养提升缓慢</li>
                      <li className="list-disc">缺乏针对数字化创新的激励机制，创新活力不足</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">根本原因</h4>
                    <p>传统人才管理模式与数字化转型要求不匹配，激励和考核机制不够科学</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 战略规划与建设路径 */}
        <section id="strategy" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">战略规划与建设路径</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">战略定位与愿景</h3>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} mb-6`}>
                <h4 className="text-lg font-medium mb-4 text-center">基于评估结果，我们提出产权数智型交易平台的战略定位：</h4>
                <blockquote className={`p-4 border-l-4 ${darkMode ? 'border-blue-400 bg-gray-700' : 'border-blue-600 bg-white'} rounded-r-lg`}>
                  <p className="text-lg font-medium">打造集约高效、智能精准的现代化综合性产权交易平台，构建开放共享、协同创新的服务生态，成为面向粤港澳大湾区乃至全国的产业赋能、生态引领的重要枢纽。</p>
                </blockquote>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6">"四化"建设理念解析</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <BarChart size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">数字化：数据驱动、流程再造</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">数据战略:</span>
                      <span>将数据视为核心战略资产，实施全方位数据治理</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">流程优化:</span>
                      <span>基于数据洞察，重塑业务流程，提升运营效率</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">构建统一的数据管理平台，打通数据孤岛</li>
                      <li className="list-disc">制定数据分类分级标准，建立数据资产目录</li>
                      <li className="list-disc">以数据为导向重构核心业务流程</li>
                      <li className="list-disc">建立数据质量管理体系，提高数据价值</li>
                    </ul>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <Zap size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">智能化：技术引领、模式创新</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">技术驱动:</span>
                      <span>以AI、区块链为代表的前沿技术重塑业务模式</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">智能应用:</span>
                      <span>开发智能投顾、智能风控、智能客服等场景应用</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">建立金融科技实验室，开展前沿技术研发</li>
                      <li className="list-disc">打造智能投资分析平台，提供个性化投资建议</li>
                      <li className="list-disc">运用区块链技术创新数字资产交易模式</li>
                      <li className="list-disc">利用自然语言处理技术提升客户服务体验</li>
                    </ul>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <PieChart size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">平台化：汇聚资源、创造价值</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">能力开放:</span>
                      <span>构建业务中台，开放API接口，实现能力复用</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">资源汇聚:</span>
                      <span>吸引多方参与，形成资源集聚效应</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">打造统一的业务中台，沉淀可复用的业务能力</li>
                      <li className="list-disc">建立开放API平台，向合作伙伴开放核心能力</li>
                      <li className="list-disc">构建产融生态圈，连接资金、项目和服务资源</li>
                      <li className="list-disc">打造一站式综合服务平台，提供全流程解决方案</li>
                    </ul>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} shadow-md`}>
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-14 h-14 flex items-center justify-center mb-4`}>
                    <Users size={24} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-2">生态化：内外联动、合作共赢</h4>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">生态构建:</span>
                      <span>打造产权交易领域的开放生态系统</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">价值共创:</span>
                      <span>与合作伙伴共同创造和分享生态价值</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <h5 className="font-medium mb-1">关键举措:</h5>
                    <ul className="space-y-1 ml-4">
                      <li className="list-disc">建立产权数据共享联盟，促进数据资源流通</li>
                      <li className="list-disc">打造产业创新联合体，共同孵化创新项目</li>
                      <li className="list-disc">搭建跨境合作平台，促进粤港澳大湾区资源互通</li>
                      <li className="list-disc">构建产权+科技+金融的融合发展生态</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-6">"一核多元"发展战略详解</h3>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} mb-8`}>
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-40 h-40 rounded-full ${darkMode ? 'bg-blue-800' : 'bg-blue-600'} flex items-center justify-center text-white z-10 relative`}>
                      <div className="text-center">
                        <div className="font-bold">核心</div>
                        <div className="text-sm mt-1">产权交易主业</div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-full border-4 border-dashed border-blue-300 dark:border-blue-500 animate-spin-slow"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                    <h4 className="font-medium mb-2">做优做强</h4>
                    <p>产权交易主业</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                    <h4 className="font-medium mb-2">做实做精</h4>
                    <p>数据增值服务</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} text-center`}>
                    <h4 className="font-medium mb-2">做专做深</h4>
                    <p>科技创新驱动</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h4 className="font-semibold mb-3 text-center">核心：做优做强产权交易主业</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>规则优化：创新交易规则，提升市场运行效率</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>品种丰富：培育知识产权、数据要素等新型交易品种</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>方式创新：推动交易全流程线上化，发展区块链等技术支撑的新型交易方式</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>品牌塑造：打造具有全国影响力的产权交易服务品牌</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h4 className="font-semibold mb-3 text-center">延伸：做实做精数据增值服务</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>数据治理：全面升级数据管理体系，构建数据资产目录</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>能力建设：打造大数据平台，提升数据分析和应用能力</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>产品创新：开发数据分析、风险监测等创新数据产品</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>价值转化：培育数据交易、数据评估等新业态</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h4 className="font-semibold mb-3 text-center">赋能：做专做深科技创新驱动</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>平台构建：建设产权大数据中心和金融科技实验室</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>技术攻关：在区块链、AI等前沿领域开展关键技术研究</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>成果转化：推动科技成果快速转化为创新服务和产品</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`inline-block w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 mr-2`}></div>
                        <span>人才培养：构建创新型、复合型人才培养体系</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>在此背景下，产权亟需开展系统性评估，找准定位，明晰路径，加快构建数智型交易平台，实现高质量发展。</p>
            </div>
          </div>
        </section>

        {/* 建设路径与实施策略 */}
        <section id="implementation" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">建设路径与实施策略</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-6">
              <p>基于评估结果，我们提出六大关键建设路径，并细化为可执行的实施策略：</p>
            </div>
            
            <div className="space-y-8">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">1</span>
                    <h3 className="text-xl font-semibold">强化数字化顶层设计与统筹规划</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">战略规划制定</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">成立数字化转型领导小组，由董事长担任组长</li>
                          <li className="list-disc">制定五年数字化转型规划，明确阶段性目标</li>
                          <li className="list-disc">建立专项投入机制，确保每年研发投入强度不低于8%</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">建立数字化转型战略定期评估与调整机制</li>
                          <li className="list-disc">将数字化转型纳入公司战略核心</li>
                          <li className="list-disc">制定行业领先的数字化标准体系</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">组织架构优化</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">设立首席数据官(CDO)和首席信息官(CIO)岗位</li>
                          <li className="list-disc">组建跨部门的数据治理委员会，明确数据责任制</li>
                          <li className="list-disc">成立数字化创新中心，整合研发和创新资源</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建扁平化、敏捷型组织结构</li>
                          <li className="list-disc">建立业务与技术融合的矩阵式组织架构</li>
                          <li className="list-disc">打造"小前台、大中台、强后台"的组织模式</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">2</span>
                    <h3 className="text-xl font-semibold">夯实数据资源管理利用基础</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">数据治理体系建设</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">制定数据治理政策和标准，建立数据分类分级体系</li>
                          <li className="list-disc">开展数据资产普查，建立统一的数据资产目录</li>
                          <li className="list-disc">制定数据生命周期管理规范</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建企业级数据中台，统一数据管理和服务</li>
                          <li className="list-disc">建立数据质量评估和持续改进机制</li>
                          <li className="list-disc">推动数据资产化和价值评估体系建设</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">数据安全保障</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">完善数据安全管理制度，强化数据访问控制</li>
                          <li className="list-disc">开展重要数据识别与保护工作，实施分级保护</li>
                          <li className="list-disc">建立数据安全应急预案和响应机制</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">部署数据全生命周期安全防护体系</li>
                          <li className="list-disc">实施数据安全态势感知和智能防御</li>
                          <li className="list-disc">建立数据安全合规评估和认证体系</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mt-6`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">3</span>
                    <h3 className="text-xl font-semibold">加快关键信息系统应用升级</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">交易系统现代化改造</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">推进核心交易系统云原生架构升级</li>
                          <li className="list-disc">完善电子化交易功能，实现全流程线上办理</li>
                          <li className="list-disc">开发移动端APP，提升用户体验</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">引入区块链技术，创新资产确权和交易模式</li>
                          <li className="list-disc">构建智能撮合引擎，提升交易匹配效率</li>
                          <li className="list-disc">打造开放API平台，支持生态化发展</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">智能化平台建设</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建AI中台，提供机器学习、自然语言处理等基础能力</li>
                          <li className="list-disc">开发智能客服和智能辅助决策系统</li>
                          <li className="list-disc">建设智能风控平台，提升风险管理能力</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建智能投研体系，提供精准投资分析</li>
                          <li className="list-disc">开发知识图谱应用，挖掘潜在业务机会</li>
                          <li className="list-disc">实现系统间的智能协同和自主决策</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">4</span>
                    <h3 className="text-xl font-semibold">培育"平台经济+开放生态"发展格局</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">开放平台构建</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">梳理核心能力，设计开放API体系</li>
                          <li className="list-disc">搭建开发者平台，吸引第三方应用开发</li>
                          <li className="list-disc">建立合作伙伴认证和管理机制</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建完整的开放生态体系，形成多方共赢格局</li>
                          <li className="list-disc">打造产权交易领域的"超级APP"和服务中台</li>
                          <li className="list-disc">建立生态价值共创和利益分配机制</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">数字产权交易新业态培育</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">开展数据要素交易试点，探索数据定价模式</li>
                          <li className="list-disc">建设知识产权交易平台，推动无形资产流通</li>
                          <li className="list-disc">开发数字藏品交易解决方案，探索新型业务模式</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">打造全国领先的数据要素交易中心</li>
                          <li className="list-disc">推动数字资产证券化和创新金融产品开发</li>
                          <li className="list-disc">构建数字经济新基建和产业生态</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">5</span>
                    <h3 className="text-xl font-semibold">深化机制体制改革与模式创新</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">管理机制创新</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">实施经理层成员任期制和契约化管理</li>
                          <li className="list-disc">建立数字化转型绩效考核体系</li>
                          <li className="list-disc">完善创新容错机制，鼓励探索创新</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">推进混合所有制改革，优化治理结构</li>
                          <li className="list-disc">建立市场化的激励约束机制</li>
                          <li className="list-disc">打造敏捷高效的决策执行体系</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">业务模式创新</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">梳理优化核心业务流程，推动线上线下融合</li>
                          <li className="list-disc">探索"产权+金融"创新模式，丰富服务内涵</li>
                          <li className="list-disc">开展供应链金融试点，服务中小企业融资</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建"数据+产权+金融"的创新生态</li>
                          <li className="list-disc">打造产业链供应链协同平台</li>
                          <li className="list-disc">发展数字经济新业态和新模式</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white`}>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-3">6</span>
                    <h3 className="text-xl font-semibold">加快数字化人才队伍建设</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">人才引进与培养</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">制定数字化人才引进计划，聚焦AI、大数据等关键领域</li>
                          <li className="list-disc">建立数字技能培训体系，提升全员数字素养</li>
                          <li className="list-disc">开展与高校院所的人才联合培养</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">构建数字化人才生态系统，形成人才磁场效应</li>
                          <li className="list-disc">建立复合型人才培养基地和创新实验室</li>
                          <li className="list-disc">打造数字化转型专家团队和内部讲师队伍</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">激励机制创新</h4>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h5 className="font-medium mb-2">短期行动</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">完善科技创新激励政策，提高创新收益分享比例</li>
                          <li className="list-disc">实施项目跟投机制，强化风险共担、收益共享</li>
                          <li className="list-disc">开展创新大赛和闯关活动，激发创新活力</li>
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mt-4`}>
                        <h5 className="font-medium mb-2">中长期部署</h5>
                        <ul className="space-y-1 ml-4">
                          <li className="list-disc">建立科技成果转化收益分配机制</li>
                          <li className="list-disc">实施股权激励和分红激励制度</li>
                          <li className="list-disc">构建多层次、多元化的激励体系</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 实施成效与价值创造 */}
        <section id="value" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">实施成效与价值创造</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p>通过系统化咨询服务，项目为产权数智化转型带来了显著价值：</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">战略成果</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>明确了数智型交易平台的功能定位、发展理念和战略布局</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>构建了科学完备的成熟度评估体系，为持续改进提供了方法论</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>设计了六大关键建设路径，提供了可操作的实施路径图</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">实施价值</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>数据资产提升：</strong>通过数据治理，数据资产价值预计提升30%</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>运营效率提高：</strong>通过流程再造和自动化，运营效率预计提升40%</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>成本节约：</strong>通过系统整合和云化改造，IT运维成本预计降低25%</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span><strong>收入增长：</strong>通过数字化创新，预计可带来15-20%的业务增长</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">能力突破</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>构建完整的数字化能力评估体系，形成持续监测和改进机制</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>建立数据驱动的运营模式，提升精准决策能力</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>培育创新业务孵化机制，增强可持续发展动力</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <div className={`p-4 ${darkMode ? 'bg-green-800' : 'bg-green-600'} text-white`}>
                  <h3 className="text-xl font-semibold">交付成果</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>《数智型交易平台成熟度指标体系构建报告》</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>《某产权交易中心数智型交易平台成熟度评估诊断报告》</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>《某产权交易中心数智型交易平台建设路径研究报告》</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>实施路线图与三年行动计划</span>
                    </li>
                    <li className="flex items-start">
                      <FileText size={20} className={`${darkMode ? 'text-green-400' : 'text-green-600'} mr-2 mt-1 flex-shrink-0`} />
                      <span>数字化转型关键项目库（25个）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI规划咨询 */}
        <section id="ai-planning" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">AI规划咨询：国央企转型的新引擎</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
              <p>当前，国央企正处于数字化转型的深水区，面临着多重挑战。AI作为新一轮产业变革的核心引擎，正在为国央企转型提供新动能。</p>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-600'} text-white`}>
                <h3 className="text-xl font-semibold">为何国央企需要AI规划咨询？</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Brain size={20} className="mr-2" />
                      复杂性挑战
                    </h4>
                    <p>业务条线多、组织层级复杂、系统架构庞大</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <TrendingDown size={20} className="mr-2" />
                      效率挑战
                    </h4>
                    <p>人工流程多、决策链条长、运营成本高</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Lightbulb size={20} className="mr-2" />
                      创新挑战
                    </h4>
                    <p>创新机制不健全、技术应用滞后、转型动力不足</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Users size={20} className="mr-2" />
                      人才挑战
                    </h4>
                    <p>专业人才缺乏、知识结构老化、学习更新慢</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6">国央企AI规划咨询的五大价值</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Compass size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">战略引领</h4>
                  <p className="text-sm mb-3">定义AI转型愿景与路径</p>
                  <ul className="text-sm space-y-1">
                    <li>• 梳理组织数字基因，找准AI切入点</li>
                    <li>• 明确AI战略定位与价值主张</li>
                    <li>• 设计战略路线图与关键举措</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Zap size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">能力打造</h4>
                  <p className="text-sm mb-3">构建AI核心竞争力</p>
                  <ul className="text-sm space-y-1">
                    <li>• 评估现有AI能力与差距</li>
                    <li>• 设计AI能力体系架构</li>
                    <li>• 规划技术平台与数据底座</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Lightbulb size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">场景创新</h4>
                  <p className="text-sm mb-3">发掘AI应用新价值</p>
                  <ul className="text-sm space-y-1">
                    <li>• 识别高价值AI应用场景</li>
                    <li>• 设计创新业务模式</li>
                    <li>• 打造差异化竞争优势</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Target size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">落地保障</h4>
                  <p className="text-sm mb-3">确保AI项目成功实施</p>
                  <ul className="text-sm space-y-1">
                    <li>• 制定实施路线与优先级</li>
                    <li>• 设计组织保障与人才策略</li>
                    <li>• 建立投资回报评估体系</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-4`}>
                    <Network size={24} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                  </div>
                  <h4 className="text-lg font-medium mb-3">生态共建</h4>
                  <p className="text-sm mb-3">构建AI创新生态圈</p>
                  <ul className="text-sm space-y-1">
                    <li>• 规划开放合作机制</li>
                    <li>• 设计产学研协同模式</li>
                    <li>• 打造行业影响力</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-600'} text-white`}>
                <h3 className="text-xl font-semibold">我们的AI规划咨询方法论</h3>
              </div>
              <div className="p-6">
                <p className="mb-6">基于产权等多个成功案例，我们构建了针对国央企的"AI-POWER"咨询方法论：</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">A</div>
                    <div>
                      <h4 className="font-medium">Assessment</h4>
                      <p className="text-sm">全面评估数字基础与AI就绪度</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">I</div>
                    <div>
                      <h4 className="font-medium">Insight</h4>
                      <p className="text-sm">深度洞察业务痛点与机会点</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">P</div>
                    <div>
                      <h4 className="font-medium">Prioritization</h4>
                      <p className="text-sm">科学确定场景优先级</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">O</div>
                    <div>
                      <h4 className="font-medium">Opportunity</h4>
                      <p className="text-sm">设计创新应用蓝图</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">W</div>
                    <div>
                      <h4 className="font-medium">Workflow</h4>
                      <p className="text-sm">重塑AI驱动的业务流程</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">E</div>
                    <div>
                      <h4 className="font-medium">Enablement</h4>
                      <p className="text-sm">构建技术与组织保障</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} flex items-start`}>
                    <div className="font-bold text-lg mr-3">R</div>
                    <div>
                      <h4 className="font-medium">Roadmap</h4>
                      <p className="text-sm">制定分步实施路线图</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 深圳燃气集团AI规划案例 */}
        <section id="case-study" className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">燃气行业AI咨询规划方案</h2>
            
            {/* 行业洞察与AI机遇 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                <h3 className="text-xl font-semibold">一、行业洞察与AI机遇分析</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">燃气行业数字化发展趋势</h4>
                    <p className="text-sm">分析全球及国内领先燃气企业数字化转型路径，挖掘行业共性问题与发展机会</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">同业标杆案例解析</h4>
                    <p className="text-sm">华润燃气、港华燃气、中国燃气等AI实践对标，提炼最佳实践</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">燃气企业AI应用价值点识别</h4>
                    <p className="text-sm">安全生产、管网运维、客户服务等领域AI赋能机会，量化价值测算</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h4 className="font-medium mb-2">燃气行业AI应用挑战与对策</h4>
                    <p className="text-sm">数据壁垒、专业知识转化、安全合规等行业特殊性挑战及解决方案</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 深燃集团AI现状诊断 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                <h3 className="text-xl font-semibold">二、集团AI现状诊断</h3>
              </div>
              <div className="p-6">
                {/* AI成熟度评估框架介绍 */}
                <div className={`mb-6 p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-200'}`}>
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>AI成熟度评估框架介绍</h4>
                  <p className="mb-4">为了科学评估深圳燃气集团的AI发展现状，我们引入国际通用的AI成熟度评估框架，通过系统化的方法对企业当前AI能力进行全面诊断。这一框架不仅能帮助识别现有差距，更能为后续AI战略规划提供数据支撑和方向指引。</p>
                  
                  {/* 评估维度设计 */}
                  <div className="mb-4">
                    <h5 className={`font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-600'}`}>评估维度设计</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        {icon: <BarChart2 size={18} />, title: "战略与治理", desc: "企业AI战略清晰度、与业务战略的一致性以及AI治理机制"},
                        {icon: <Users size={18} />, title: "组织与人才", desc: "企业AI组织架构、人才储备及培养机制"},
                        {icon: <Database size={18} />, title: "数据基础", desc: "企业数据资产质量、数据治理能力及数据价值挖掘水平"},
                        {icon: <Cpu size={18} />, title: "技术能力", desc: "企业AI技术平台、基础设施及研发能力"},
                        {icon: <Layers size={18} />, title: "应用场景", desc: "企业AI应用的广度、深度及价值实现程度"},
                        {icon: <GitBranch size={18} />, title: "流程与标准", desc: "企业AI项目管理流程、质量标准及最佳实践"},
                        {icon: <Globe size={18} />, title: "生态合作", desc: "企业与外部AI生态的合作广度与深度"}
                      ].map((item, index) => (
                        <div key={index} className={`p-3 rounded-md flex items-start ${darkMode ? 'bg-gray-600' : 'bg-white'} border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>{item.icon}</div>
                          <div>
                            <div className="font-medium text-sm">{index+1}. {item.title}</div>
                            <div className="text-xs mt-1 opacity-80">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 成熟度等级划分 */}
                  <div>
                    <h5 className={`font-medium mb-3 ${darkMode ? 'text-blue-200' : 'text-blue-600'}`}>成熟度等级划分</h5>
                    <div className={`relative h-14 rounded-lg overflow-hidden ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} mb-3`}>
                      <div className="absolute inset-0 flex">
                        <div className={`flex-1 ${darkMode ? 'bg-red-900/70' : 'bg-red-500/30'} border-r border-white/20 flex items-center justify-center`}>
                          <span className="text-xs font-medium">初始阶段</span>
                        </div>
                        <div className={`flex-1 ${darkMode ? 'bg-orange-800/70' : 'bg-orange-400/30'} border-r border-white/20 flex items-center justify-center`}>
                          <span className="text-xs font-medium">可重复阶段</span>
                        </div>
                        <div className={`flex-1 ${darkMode ? 'bg-yellow-700/70' : 'bg-yellow-300/40'} border-r border-white/20 flex items-center justify-center`}>
                          <span className="text-xs font-medium">已定义阶段</span>
                        </div>
                        <div className={`flex-1 ${darkMode ? 'bg-green-800/70' : 'bg-green-400/30'} border-r border-white/20 flex items-center justify-center`}>
                          <span className="text-xs font-medium">可管理阶段</span>
                        </div>
                        <div className={`flex-1 ${darkMode ? 'bg-blue-800/70' : 'bg-blue-400/30'} flex items-center justify-center`}>
                          <span className="text-xs font-medium">优化阶段</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 w-full flex text-center">
                        <div className="flex-1 text-[10px] opacity-70">第1级</div>
                        <div className="flex-1 text-[10px] opacity-70">第2级</div>
                        <div className="flex-1 text-[10px] opacity-70">第3级</div>
                        <div className="flex-1 text-[10px] opacity-70">第4级</div>
                        <div className="flex-1 text-[10px] opacity-70">第5级</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-xs">
                      <div>零散应用，缺乏系统性</div>
                      <div>初步形成应用模式，但缺乏标准化</div>
                      <div>建立标准流程，形成规范化应用</div>
                      <div>形成量化管理，持续优化改进</div>
                      <div>实现创新引领，形成行业最佳实践</div>
                    </div>
                  </div>
                </div>
                
                {/* 诊断方法与工具 */}
                <div className={`mb-6 p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border ${darkMode ? 'border-gray-600' : 'border-purple-200'}`}>
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>诊断方法与工具</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                      <div className={`w-9 h-9 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center mb-3`}>
                        <FileText size={18} className={darkMode ? 'text-purple-200' : 'text-purple-600'} />
                      </div>
                      <h5 className="font-medium mb-2 text-sm">数据收集方法</h5>
                      <ul className="text-xs space-y-1 list-disc pl-4">
                        <li>文档审阅：战略规划、架构等文档</li>
                        <li>问卷调研：针对不同层级人员设计差异化问卷</li>
                        <li>深度访谈：与关键人员进行一对一访谈</li>
                        <li>现场调研：实地考察IT基础设施等</li>
                        <li>标杆对比：行业领先企业AI应用案例对标</li>
                      </ul>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                      <div className={`w-9 h-9 rounded-full ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'} flex items-center justify-center mb-3`}>
                        <Wrench size={18} className={darkMode ? 'text-indigo-200' : 'text-indigo-600'} />
                      </div>
                      <h5 className="font-medium mb-2 text-sm">评估工具包</h5>
                      <ul className="text-xs space-y-1 list-disc pl-4">
                        <li>AI战略评估模型：战略与业务匹配度</li>
                        <li>数据成熟度评估工具：质量、完整性评估</li>
                        <li>技术能力评估矩阵：技术栈完整性分析</li>
                        <li>应用场景价值评估模型：业务价值分析</li>
                        <li>人才能力评估框架：队伍规模结构评估</li>
                      </ul>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                      <div className={`w-9 h-9 rounded-full ${darkMode ? 'bg-teal-900' : 'bg-teal-100'} flex items-center justify-center mb-3`}>
                        <PieChart size={18} className={darkMode ? 'text-teal-200' : 'text-teal-600'} />
                      </div>
                      <h5 className="font-medium mb-2 text-sm">分析方法</h5>
                      <ul className="text-xs space-y-1 list-disc pl-4">
                        <li>差距分析：与行业最佳实践对比</li>
                        <li>SWOT分析：优势、劣势、机会和威胁</li>
                        <li>价值链分析：AI在企业价值链各环节应用</li>
                        <li>投资回报分析：AI投资回报和优先级</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* 诊断实施路径 */}
                <div className={`mb-6 p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'} border ${darkMode ? 'border-gray-600' : 'border-green-200'}`}>
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>诊断实施路径</h4>
                  
                  <div className="relative">
                    {/* 竖线 */}
                    <div className={`absolute h-full w-0.5 ${darkMode ? 'bg-green-800' : 'bg-green-200'} left-3 top-0 md:left-1/2`}></div>
                    
                    <div className="space-y-6">
                      {/* 第一阶段 */}
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 relative pl-10 md:pl-0 md:pr-10 pb-6 md:pb-0">
                          <div className={`absolute left-0 md:right-0 md:left-auto w-6 h-6 rounded-full ${darkMode ? 'bg-green-800' : 'bg-green-500'} z-10 flex items-center justify-center`}>
                            <span className="text-white text-xs">1</span>
                          </div>
                          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                            <h5 className={`font-medium mb-2 ${darkMode ? 'text-green-300' : 'text-green-600'}`}>第一阶段：准备与规划（1-2周）</h5>
                            <ul className="text-xs space-y-1 list-disc pl-4">
                              <li>确定诊断范围和目标</li>
                              <li>组建诊断团队，明确分工</li>
                              <li>制定详细的诊断计划</li>
                              <li>准备诊断工具和模板</li>
                            </ul>
                          </div>
                        </div>
                        <div className="md:w-1/2"></div>
                      </div>
                      
                      {/* 第二阶段 */}
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2"></div>
                        <div className="md:w-1/2 relative pl-10 md:pl-10 pb-6 md:pb-0">
                          <div className={`absolute left-0 w-6 h-6 rounded-full ${darkMode ? 'bg-green-800' : 'bg-green-500'} z-10 flex items-center justify-center`}>
                            <span className="text-white text-xs">2</span>
                          </div>
                          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                            <h5 className={`font-medium mb-2 ${darkMode ? 'text-green-300' : 'text-green-600'}`}>第二阶段：数据收集（2-3周）</h5>
                            <ul className="text-xs space-y-1 list-disc pl-4">
                              <li>发放并回收问卷</li>
                              <li>开展深度访谈</li>
                              <li>收集相关文档</li>
                              <li>进行现场调研</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* 第三阶段 */}
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 relative pl-10 md:pl-0 md:pr-10 pb-6 md:pb-0">
                          <div className={`absolute left-0 md:right-0 md:left-auto w-6 h-6 rounded-full ${darkMode ? 'bg-green-800' : 'bg-green-500'} z-10 flex items-center justify-center`}>
                            <span className="text-white text-xs">3</span>
                          </div>
                          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                            <h5 className={`font-medium mb-2 ${darkMode ? 'text-green-300' : 'text-green-600'}`}>第三阶段：分析与评估（2-3周）</h5>
                            <ul className="text-xs space-y-1 list-disc pl-4">
                              <li>整理和分析收集的数据</li>
                              <li>应用评估模型进行打分</li>
                              <li>识别关键差距和机会</li>
                              <li>形成初步诊断结论</li>
                            </ul>
                          </div>
                        </div>
                        <div className="md:w-1/2"></div>
                      </div>
                      
                      {/* 第四阶段 */}
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2"></div>
                        <div className="md:w-1/2 relative pl-10 md:pl-10">
                          <div className={`absolute left-0 w-6 h-6 rounded-full ${darkMode ? 'bg-green-800' : 'bg-green-500'} z-10 flex items-center justify-center`}>
                            <span className="text-white text-xs">4</span>
                          </div>
                          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                            <h5 className={`font-medium mb-2 ${darkMode ? 'text-green-300' : 'text-green-600'}`}>第四阶段：报告与建议（1-2周）</h5>
                            <ul className="text-xs space-y-1 list-disc pl-4">
                              <li>编制详细的诊断报告</li>
                              <li>提出针对性改进建议</li>
                              <li>制定AI发展路线图</li>
                              <li>召开诊断结果研讨会</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 诊断重点关注方向 */}
                <div className={`mb-6 p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-amber-50'} border ${darkMode ? 'border-gray-600' : 'border-amber-200'}`}>
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>诊断重点关注方向</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        icon: <Shield size={20} />, 
                        title: "安全生产智能化",
                        items: ["管网泄漏智能预测与预警能力", "设备智能巡检与预测性维护水平", "应急处置智能决策支持能力"]
                      },
                      {
                        icon: <Zap size={20} />, 
                        title: "运营效率智能化",
                        items: ["燃气调度智能优化能力", "能源需求预测准确性", "资源配置智能化水平"]
                      },
                      {
                        icon: <Users size={20} />, 
                        title: "客户服务智能化",
                        items: ["智能客服应用深度", "用户画像精准度", "服务流程智能化程度"]
                      },
                      {
                        icon: <BarChart size={20} />, 
                        title: "决策支持智能化",
                        items: ["数据分析与可视化能力", "智能决策支持系统应用情况", "风险预警与管控能力"]
                      },
                      {
                        icon: <Compass size={20} />, 
                        title: "新业务拓展智能化",
                        items: ["综合能源服务智能化水平", "低碳转型AI支撑能力", "创新业务模式AI赋能程度"]
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}>
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-amber-900' : 'bg-amber-100'} flex items-center justify-center mr-3`}>
                            <div className={darkMode ? 'text-amber-200' : 'text-amber-600'}>
                              {item.icon}
                            </div>
                          </div>
                          <h5 className="font-medium">{item.title}</h5>
                        </div>
                        <ul className="text-xs space-y-2 list-disc pl-4">
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI战略与顶层设计 */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} mb-8`}>
              <div className={`p-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
                <h3 className="text-xl font-semibold">三、AI战略与顶层设计</h3>
              </div>
              <div className="p-6">
                {/* 战略定位与愿景 */}
                <div className="mb-8">
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>战略定位与愿景</h4>
                  <div className={`p-5 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-200'} mb-4`}>
                    <p className="text-center font-medium mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900/60' : 'bg-blue-100'} mb-1`}>
                        以AI驱动智慧能源转型，打造国内领先的智慧燃气与综合能源服务商
                      </span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: <Activity size={20} />,
                        title: "全面智能化运营体系",
                        desc: "建立全面智能化的燃气运营体系，提升安全性和效率"
                      },
                      {
                        icon: <BarChart size={20} />,
                        title: "数据驱动决策支持",
                        desc: "构建数据驱动的决策支持系统，增强经营管理能力"
                      },
                      {
                        icon: <Globe size={20} />,
                        title: "智慧能源生态平台",
                        desc: "打造智慧能源生态平台，推动多能互补和综合能源服务发展"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-blue-900/60' : 'bg-blue-100'} flex items-center justify-center mr-3`}>
                            <div className={darkMode ? 'text-blue-300' : 'text-blue-600'}>
                              {item.icon}
                            </div>
                          </div>
                          <h5 className="font-medium">{item.title}</h5>
                        </div>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 战略目标 */}
                <div className="mb-8">
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>战略目标</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-green-900/60' : 'bg-green-100'} flex items-center justify-center mb-3 mx-auto`}>
                        <span className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-600'}`}>1-2</span>
                      </div>
                      <h5 className="font-medium text-center mb-3">近期目标（1-2年）</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-green-400' : 'text-green-500'}`}><Check size={14} /></div>
                          <span>建立AI治理框架和数据基础设施</span>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-green-400' : 'text-green-500'}`}><Check size={14} /></div>
                          <span>实施2-3个高价值AI试点项目</span>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-green-400' : 'text-green-500'}`}><Check size={14} /></div>
                          <span>组建AI核心团队，培养关键人才</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-blue-900/60' : 'bg-blue-100'} flex items-center justify-center mb-3 mx-auto`}>
                        <span className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>3-4</span>
                      </div>
                      <h5 className="font-medium text-center mb-3">中期目标（3-4年）</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}><Check size={14} /></div>
                          <span>AI应用覆盖核心业务流程，实现安全事故率降低30%</span>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}><Check size={14} /></div>
                          <span>运营成本降低15%，客户满意度提升20%</span>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}><Check size={14} /></div>
                          <span>建立企业级AI平台，支持业务创新</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-purple-900/60' : 'bg-purple-100'} flex items-center justify-center mb-3 mx-auto`}>
                        <span className={`font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>5+</span>
                      </div>
                      <h5 className="font-medium text-center mb-3">长期目标（5年及以上）</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}><Check size={14} /></div>
                          <span>形成行业领先的AI创新能力</span>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}><Check size={14} /></div>
                          <span>新业务收入占比提升至30%</span>
                        </li>
                        <li className="flex items-start">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}><Check size={14} /></div>
                          <span>成为能源行业AI应用的标杆企业</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* 战略框架：1-3-5-N */}
                <div className="mb-8">
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>战略框架："1-3-5-N"</h4>
                  
                  {/* 1个核心 */}
                  <div className={`mb-5 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-amber-50'} border ${darkMode ? 'border-gray-600' : 'border-amber-200'}`}>
                    <h5 className={`font-medium mb-2 text-center ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-600 text-white mb-1">1个核心</span>
                    </h5>
                    <div className="flex justify-center">
                      <div className={`w-32 h-32 rounded-full ${darkMode ? 'bg-amber-900/60' : 'bg-amber-100'} flex flex-col items-center justify-center p-4 text-center`}>
                        <Database size={28} className={darkMode ? 'text-amber-300' : 'text-amber-600'} />
                        <span className="font-medium mt-1">数据价值</span>
                        <span className="text-xs mt-1">构建企业数据资产，驱动业务创新</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 3大支柱 */}
                  <div className={`mb-5 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-200'}`}>
                    <h5 className={`font-medium mb-3 text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white mb-1">3大支柱</span>
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          icon: <Shield size={24} />,
                          title: "安全生产智能化",
                          desc: "利用AI提升管网安全和运营效率"
                        },
                        {
                          icon: <Users size={24} />,
                          title: "客户服务智能化",
                          desc: "通过AI优化客户体验和服务质量"
                        },
                        {
                          icon: <BarChart2 size={24} />,
                          title: "经营决策智能化",
                          desc: "基于AI实现数据驱动的科学决策"
                        }
                      ].map((item, idx) => (
                        <div key={idx} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border ${darkMode ? 'border-gray-500' : 'border-gray-200'} text-center`}>
                          <div className="flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-blue-900/60' : 'bg-blue-100'} flex items-center justify-center mb-2`}>
                              <div className={darkMode ? 'text-blue-300' : 'text-blue-600'}>
                                {item.icon}
                              </div>
                            </div>
                            <h5 className="font-medium text-sm mb-1">{item.title}</h5>
                            <p className="text-xs">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 5大能力 */}
                  <div className={`mb-5 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'} border ${darkMode ? 'border-gray-600' : 'border-green-200'}`}>
                    <h5 className={`font-medium mb-3 text-center ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-green-600 text-white mb-1">5大能力</span>
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                      {[
                        { icon: <Cpu size={20} />, title: "AI基础设施能力", desc: "构建支撑AI应用的技术平台" },
                        { icon: <Database size={20} />, title: "数据治理能力", desc: "建立全面的数据管理和价值挖掘体系" },
                        { icon: <Layers size={20} />, title: "AI应用开发能力", desc: "形成快速响应业务需求的AI解决方案能力" },
                        { icon: <Users size={20} />, title: "AI人才培养能力", desc: "建立多层次的AI人才发展体系" },
                        { icon: <GitBranch size={20} />, title: "AI生态合作能力", desc: "构建开放共赢的AI创新生态" }
                      ].map((item, idx) => (
                        <div key={idx} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border ${darkMode ? 'border-gray-500' : 'border-gray-200'} text-center`}>
                          <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-green-900/60' : 'bg-green-100'} flex items-center justify-center mb-2`}>
                              <div className={darkMode ? 'text-green-300' : 'text-green-600'}>
                                {item.icon}
                              </div>
                            </div>
                            <h5 className="font-medium text-xs mb-1">{item.title}</h5>
                            <p className="text-[10px] leading-tight">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* N个场景 */}
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border ${darkMode ? 'border-gray-600' : 'border-purple-200'}`}>
                    <h5 className={`font-medium mb-3 text-center ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-white mb-1">N个场景</span>
                    </h5>
                    <p className="text-sm mb-3 text-center">根据业务需求，持续拓展AI应用场景：</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        "管网泄漏智能预测与预警",
                        "设备预测性维护",
                        "智能调度优化",
                        "能源需求预测",
                        "智能客服",
                        "用户画像与精准营销",
                        "综合能源管理"
                      ].map((item, idx) => (
                        <span 
                          key={idx} 
                          className={`inline-block px-3 py-1.5 rounded-full text-xs ${
                            darkMode 
                              ? 'bg-purple-900/40 text-purple-300 border border-purple-700' 
                              : 'bg-purple-100 text-purple-700'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 组织保障 */}
                <div className="mb-8">
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>组织保障</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* AI治理架构 */}
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-200'}`}>
                      <h5 className={`font-medium mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>AI治理架构</h5>
                      <ul className="space-y-3">
                        <li className="flex">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-blue-900/60' : 'bg-blue-100'} flex items-center justify-center mr-3 shrink-0`}>
                            <span className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>1</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">AI战略委员会</p>
                            <p className="text-xs mt-0.5">由高层领导牵头，负责AI战略决策</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-blue-900/60' : 'bg-blue-100'} flex items-center justify-center mr-3 shrink-0`}>
                            <span className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>2</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">AI创新中心</p>
                            <p className="text-xs mt-0.5">统筹AI项目实施和技术研发</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-blue-900/60' : 'bg-blue-100'} flex items-center justify-center mr-3 shrink-0`}>
                            <span className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>3</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">业务-IT-AI融合团队</p>
                            <p className="text-xs mt-0.5">推动AI在各业务领域的应用</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    {/* 人才发展计划 */}
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'} border ${darkMode ? 'border-gray-600' : 'border-green-200'}`}>
                      <h5 className={`font-medium mb-3 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>人才发展计划</h5>
                      <ul className="space-y-3">
                        <li className="flex">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-green-900/60' : 'bg-green-100'} flex items-center justify-center mr-3 shrink-0`}>
                            <Users size={16} className={darkMode ? 'text-green-300' : 'text-green-600'} />
                          </div>
                          <div>
                            <p className="font-medium text-sm">高端人才引进</p>
                            <p className="text-xs mt-0.5">引进AI领域高端人才，建立核心技术团队</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-green-900/60' : 'bg-green-100'} flex items-center justify-center mr-3 shrink-0`}>
                            <Lightbulb size={16} className={darkMode ? 'text-green-300' : 'text-green-600'} />
                          </div>
                          <div>
                            <p className="font-medium text-sm">全员AI素养培训</p>
                            <p className="text-xs mt-0.5">开展全员AI素养培训，提升数字化意识</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-green-900/60' : 'bg-green-100'} flex items-center justify-center mr-3 shrink-0`}>
                            <Network size={16} className={darkMode ? 'text-green-300' : 'text-green-600'} />
                          </div>
                          <div>
                            <p className="font-medium text-sm">产学研合作</p>
                            <p className="text-xs mt-0.5">与高校、研究机构合作，建立人才培养基地</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* 实施路径 */}
                <div>
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>实施路径</h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* 第一阶段 */}
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-200'} relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 -translate-x-1/2 translate-y-1/2 bg-blue-500 opacity-10 rounded-full blur-xl"></div>
                      <h5 className={`font-medium mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>第一阶段：基础构建（2025-2026）</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}><Check size={14} /></div>
                          <span>完成AI战略规划和组织架构调整</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}><Check size={14} /></div>
                          <span>建设数据基础设施和AI开发平台</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}><Check size={14} /></div>
                          <span>启动关键业务领域AI试点项目</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}><Check size={14} /></div>
                          <span>开展AI人才培养和技术储备</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* 第二阶段 */}
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-indigo-50'} border ${darkMode ? 'border-gray-600' : 'border-indigo-200'} relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 -translate-x-1/2 translate-y-1/2 bg-indigo-500 opacity-10 rounded-full blur-xl"></div>
                      <h5 className={`font-medium mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>第二阶段：全面推进（2027-2028）</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`}><Check size={14} /></div>
                          <span>扩大AI应用范围，覆盖主要业务流程</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`}><Check size={14} /></div>
                          <span>建立AI应用评估和持续优化机制</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`}><Check size={14} /></div>
                          <span>形成AI应用标准和最佳实践</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`}><Check size={14} /></div>
                          <span>深化AI生态合作，推动创新发展</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* 第三阶段 */}
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border ${darkMode ? 'border-gray-600' : 'border-purple-200'} relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 -translate-x-1/2 translate-y-1/2 bg-purple-500 opacity-10 rounded-full blur-xl"></div>
                      <h5 className={`font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>第三阶段：创新引领（2029-2030）</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}><Check size={14} /></div>
                          <span>实现AI与业务的深度融合</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}><Check size={14} /></div>
                          <span>形成行业领先的AI创新能力</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}><Check size={14} /></div>
                          <span>打造智慧能源生态平台</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <div className={`mt-1 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}><Check size={14} /></div>
                          <span>向行业输出AI解决方案和经验</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <p className="text-center text-sm italic">
                      通过系统性的AI战略与顶层设计，深圳燃气集团将实现从传统燃气企业向智慧能源服务商的转型，在能源行业数字化变革中占据领先地位。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        
        {/* 联系我们 */}
        <section id="contact" className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">联系我们</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-6">
              <p>对数字化转型或AI规划咨询感兴趣？欢迎联系我们，探讨您的业务需求。</p>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} shadow-md`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <Phone size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} />
                  <div>
                    <h3 className="font-medium mb-1">电话</h3>
                    <p>13602801537</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} />
                  <div>
                    <h3 className="font-medium mb-1">邮箱</h3>
                    <p>orienthong@foxmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-1`} />
                  <div>
                    <h3 className="font-medium mb-1">地址</h3>
                    <p>广州市海珠区海洲路 32 号东升云鼎 B 塔 603</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="italic">赋能数字未来，成就卓越企业</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <footer className={`py-6 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 洪浩东. 版权所有.</p>
        </div>
      </footer>
    </div>
  );
};

export default SouthernPropertyPlatform;
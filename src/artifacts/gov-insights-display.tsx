import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Book, 
  Lightbulb, 
  Target, 
  FileText, 
  Search, 
  ChevronRight,
  Sparkles,
  TrendingUp,
  Shield,
  BarChart4,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const InsightsDisplay = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 添加滚动动画效果
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const insights = [
    {
      id: 1,
      type: '政策解读',
      title: '《政务数据共享管理办法》解读',
      content: '该办法明确了政务数据共享的基本原则、范围及流程，促进政务数据有序共享与高效利用...',
      date: '2024-11-20',
      department: '数字政府司',
      tags: ['数据共享', '政务服务'],
      priority: 'high'
    },
    {
      id: 2,
      type: '行业动态',
      title: '某省数字政府改革进展',
      content: '在数字化改革推进下，政务服务实现"一网通办"，群众办事更加便捷高效...',
      date: '2024-11-18',
      department: '省政府办公厅',
      tags: ['数字化改革', '一网通办'],
      priority: 'medium'
    },
    {
      id: 3,
      type: '技术趋势',
      title: '区块链在政务服务中的应用',
      content: '区块链技术助力政务数据安全共享，提升政务服务透明度与可信度...',
      date: '2024-11-15',
      department: '信息中心',
      tags: ['区块链', '数据安全'],
      priority: 'medium'
    },
    {
      id: 4,
      type: '政策解读',
      title: '数字政府建设"十四五"规划要点',
      content: '规划明确了未来五年数字政府建设的主要目标、重点任务和保障措施...',
      date: '2024-11-12',
      department: '国家发改委',
      tags: ['十四五', '数字政府'],
      priority: 'high'
    }
  ];

  const tabs = [
    { id: '全部', icon: FileText, color: 'from-blue-600 to-blue-400' },
    { id: '政策解读', icon: Book, color: 'from-indigo-600 to-indigo-400' },
    { id: '行业动态', icon: Target, color: 'from-emerald-600 to-emerald-400' },
    { id: '技术趋势', icon: Lightbulb, color: 'from-amber-600 to-amber-400' }
  ];

  const filteredInsights = insights
    .filter(item => activeTab === '全部' || item.type === activeTab)
    .filter(item => 
      searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // 获取当前选中标签的颜色
  const getActiveTabColor = () => {
    const activeTabObj = tabs.find(tab => tab.id === activeTab);
    return activeTabObj ? activeTabObj.color : 'from-blue-600 to-blue-400';
  };

  // 根据优先级获取边框样式
  const getPriorityBorderStyle = (priority) => {
    switch(priority) {
      case 'high':
        return 'border-l-4 border-l-red-500';
      case 'medium':
        return 'border-l-4 border-l-amber-500';
      default:
        return 'border-l-4 border-l-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-white p-4 md:p-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* 顶部装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500"></div>
        
        {/* Header Section */}
        <motion.div 
          className="mb-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 border border-blue-100 relative overflow-hidden"
          style={{ opacity: headerOpacity }}
        >
          {/* 背景装饰 */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl"></div>
          
          <div className="relative mb-8">
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 text-blue-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-full h-full" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  数字政府行业资讯
                </span>
              </h1>
              <p className="text-gray-600 text-lg flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-500" />
                及时掌握最新政策动态与行业趋势
              </p>
            </motion.div>
            
            {/* 统计数据卡片 */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">政策文件</p>
                  <p className="text-xl font-bold text-blue-700">128</p>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">行业动态</p>
                  <p className="text-xl font-bold text-indigo-700">56</p>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">安全公告</p>
                  <p className="text-xl font-bold text-emerald-700">24</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 flex items-center space-x-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <BarChart4 className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">数据报告</p>
                  <p className="text-xl font-bold text-amber-700">42</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="搜索资讯..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-300 shadow-sm"
            />
            <Search className="absolute left-4 top-4 text-blue-400" size={20} />
            
            {/* 搜索框动画效果 */}
            <motion.div 
              className="absolute inset-0 rounded-xl border-2 border-blue-300/30"
              animate={{ 
                boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 8px rgba(59, 130, 246, 0.3)', '0 0 0px rgba(59, 130, 246, 0)']
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id 
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg` 
                    : 'text-gray-600 hover:bg-blue-50 bg-white/70 border border-gray-100'
                }`}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon size={18} className="mr-2" />
                {tab.id}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-5">
          {filteredInsights.length === 0 ? (
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">未找到相关资讯</h3>
              <p className="text-gray-500">请尝试使用其他关键词搜索</p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              {filteredInsights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: isLoaded ? index * 0.1 : 0 }}
                >
                  <Card className={`group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm border-blue-100 ${getPriorityBorderStyle(insight.priority)}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                            <span className={`px-3 py-1 bg-gradient-to-r ${getActiveTabColor()} text-white rounded-lg font-medium`}>
                              {insight.type}
                            </span>
                            <div className="flex items-center text-gray-500">
                              <Calendar size={16} className="mr-1 text-blue-400" />
                              {insight.date}
                            </div>
                            <span className="text-gray-500 flex items-center">
                              <Target size={16} className="mr-1 text-indigo-400" />
                              {insight.department}
                            </span>
                          </div>
                          
                          <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                            {insight.title}
                          </h2>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">{insight.content}</p>
                          
                          <div className="flex flex-wrap items-center gap-2">
                            {insight.tags.map(tag => (
                              <motion.span 
                                key={tag} 
                                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium group-hover:bg-blue-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 md:ml-6 transform transition-transform group-hover:translate-x-2">
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                          >
                            <ChevronRight className="w-6 h-6 text-blue-500" />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
        
        {/* 底部装饰 */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2024 数字政府资讯平台 · 每日更新</p>
        </div>
      </motion.div>
    </div>
  );
};

export default InsightsDisplay;
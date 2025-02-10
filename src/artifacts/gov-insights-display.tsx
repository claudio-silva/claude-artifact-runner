import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Book, 
  Lightbulb, 
  Target, 
  FileText, 
  Search, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InsightsDisplay = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  
  const insights = [
    {
      id: 1,
      type: '政策解读',
      title: '《政务数据共享管理办法》解读',
      content: '该办法明确了政务数据共享的基本原则、范围及流程...',
      date: '2024-11-20',
      department: '数字政府司',
      tags: ['数据共享', '政务服务']
    },
    {
      id: 2,
      type: '行业动态',
      title: '某省数字政府改革进展',
      content: '在数字化改革推进下，政务服务实现"一网通办"...',
      date: '2024-11-18',
      department: '省政府办公厅',
      tags: ['数字化改革', '一网通办']
    },
    {
      id: 3,
      type: '技术趋势',
      title: '区块链在政务服务中的应用',
      content: '区块链技术助力政务数据安全共享...',
      date: '2024-11-15',
      department: '信息中心',
      tags: ['区块链', '数据安全']
    }
  ];

  const tabs = [
    { id: '全部', icon: FileText },
    { id: '政策解读', icon: Book },
    { id: '行业动态', icon: Target },
    { id: '技术趋势', icon: Lightbulb }
  ];

  const filteredInsights = insights
    .filter(item => activeTab === '全部' || item.type === activeTab)
    .filter(item => 
      searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50 p-8 relative overflow-hidden">
      {/* 添加动态背景元素 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `hsl(${210 + i * 30}, 70%, 70%)`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-100/50 relative overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative mb-8">
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 text-blue-500"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="w-full h-full" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                数字政府行业资讯
              </span>
            </h1>
            <p className="text-gray-600 text-lg font-medium">及时掌握最新政策动态与行业趋势</p>
          </div>
          
          <div className="relative mb-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="搜索资讯..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-blue-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 backdrop-blur-sm transition-all duration-300 shadow-sm"
              />
              <Search className="absolute left-4 top-4 text-blue-400" size={20} />
            </motion.div>
          </div>

          <div className="flex space-x-4">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon size={20} className="mr-2" />
                {tab.id}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/90 backdrop-blur-xl border-blue-100/50 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between relative">
                      <motion.div 
                        className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 text-sm mb-4">
                          <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-medium shadow-sm">
                            {insight.type}
                          </span>
                          <span className="text-gray-300">|</span>
                          <div className="flex items-center text-gray-500">
                            <Calendar size={16} className="mr-1 text-blue-400" />
                            {insight.date}
                          </div>
                          <span className="text-gray-300">|</span>
                          <span className="text-gray-500">{insight.department}</span>
                        </div>
                        
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                          {insight.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-5 line-clamp-2 leading-relaxed">{insight.content}</p>
                        
                        <div className="flex items-center space-x-3">
                          {insight.tags.map(tag => (
                            <motion.span 
                              key={tag} 
                              className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium group-hover:bg-blue-100 transition-colors"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <motion.div 
                        className="ml-6"
                        whileHover={{ scale: 1.1, x: 5 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors shadow-sm">
                          <ChevronRight className="w-6 h-6 text-blue-500" />
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InsightsDisplay;
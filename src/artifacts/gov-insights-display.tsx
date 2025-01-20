import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Book, Lightbulb, Target, FileText, Search, ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">数字政府行业资讯</h1>
          
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="搜索资讯..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          <div className="flex space-x-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon size={18} className="mr-2" />
                {tab.id}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          {filteredInsights.map(insight => (
            <Card key={insight.id} className="hover:shadow-md transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 text-sm text-gray-500 mb-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                        {insight.type}
                      </span>
                      <span>|</span>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {insight.date}
                      </div>
                      <span>|</span>
                      <span>{insight.department}</span>
                    </div>
                    
                    <h2 className="text-lg font-semibold mb-2 text-gray-900">
                      {insight.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4">{insight.content}</p>
                    
                    <div className="flex items-center space-x-2">
                      {insight.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ChevronRight className="text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsDisplay;
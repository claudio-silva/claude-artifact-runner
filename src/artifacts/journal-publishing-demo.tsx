import React, { useState } from 'react';
import { 
  FileText, BookOpen, Layers, CheckCircle, 
  Calendar, Download, Printer, Send, Settings, 
  Plus, X, ChevronLeft, ChevronRight, Copy, 
  Eye, Save, FileUp, List, Grid, Search, Filter, AlertCircle,
  ChevronUp, ChevronDown
} from 'lucide-react';

const JournalPublishingDemo = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showPreview, setShowPreview] = useState(false);
  
  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="text-red-600 mr-2" size={20} />
          <h2 className="text-lg font-medium text-gray-800">
            《广州信息》2025年第42期
          </h2>
          <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">
            待发布
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 rounded flex items-center text-sm">
            <Eye size={16} className="mr-1" />
            预览
          </button>
          <button className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 rounded flex items-center text-sm">
            <Save size={16} className="mr-1" />
            保存
          </button>
          <button className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 rounded flex items-center text-sm">
            <Download size={16} className="mr-1" />
            下载
          </button>
          <button className="px-2.5 py-1.5 bg-red-600 text-white rounded flex items-center text-sm">
            <Send size={16} className="mr-1" />
            发布
          </button>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="bg-white border-b px-4 py-2 flex justify-between">
        <div className="flex items-center space-x-2">
          <select className="border rounded p-1.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option>默认模板</option>
            <option>红头文件模板</option>
            <option>简报模板</option>
            <option>每日要情模板</option>
          </select>
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded flex items-center text-sm">
            <Plus size={16} className="mr-1" />
            添加内容
          </button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded flex items-center text-sm">
            <FileUp size={16} className="mr-1" />
            导入稿件
          </button>
          <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded flex items-center text-sm">
            <CheckCircle size={16} className="mr-1" />
            一键套红
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex border rounded overflow-hidden">
            <button 
              className={`p-1.5 text-sm ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </button>
            <button 
              className={`p-1.5 text-sm ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </button>
          </div>
          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
            <Settings size={16} />
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Document List */}
        <div className="w-1/4 border-r bg-white overflow-y-auto">
          <div className="p-3">
            <div className="mb-3 relative">
              <input 
                type="text" 
                placeholder="搜索稿件..." 
                className="w-full p-2 pl-8 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">已选稿件 (8)</h3>
              <button className="text-xs text-blue-600 hover:text-blue-800">全部展开</button>
            </div>
            
            <div className="space-y-2">
              <div className="border rounded bg-blue-50 border-blue-200 p-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-blue-800">封面</h4>
                  <div className="flex space-x-1">
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronUp size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronDown size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded bg-blue-50 border-blue-200 p-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-blue-800">目录</h4>
                  <div className="flex space-x-1">
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronUp size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronDown size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded p-2">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-medium text-gray-700">领导动态</h4>
                  <div className="flex space-x-1">
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronUp size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronDown size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <X size={14} />
                    </button>
                  </div>
                </div>
                <div className="pl-2 border-l-2 border-gray-200 ml-1 mt-2 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <div className="flex-1">市委书记赴南沙区调研数字政府建设工作</div>
                    <button className="p-0.5 text-gray-400 hover:text-gray-600">
                      <X size={12} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <div className="flex-1">市长主持召开数字化转型专题会议</div>
                    <button className="p-0.5 text-gray-400 hover:text-gray-600">
                      <X size={12} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded p-2">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-medium text-gray-700">工作动态</h4>
                  <div className="flex space-x-1">
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronUp size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronDown size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <X size={14} />
                    </button>
                  </div>
                </div>
                <div className="pl-2 border-l-2 border-blue-300 ml-1 mt-2 space-y-2">
                  <div className="flex justify-between items-center text-xs font-medium text-blue-700">
                    <div className="flex-1">广州南沙区大力推进数字政府建设的创新实践与成效</div>
                    <button className="p-0.5 text-gray-400 hover:text-gray-600">
                      <X size={12} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <div className="flex-1">广州市数字政府"一网通办"平台正式上线运行</div>
                    <button className="p-0.5 text-gray-400 hover:text-gray-600">
                      <X size={12} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <div className="flex-1">黄埔区推出线上政务服务"指尖通"小程序</div>
                    <button className="p-0.5 text-gray-400 hover:text-gray-600">
                      <X size={12} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded p-2">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-medium text-gray-700">经验交流</h4>
                  <div className="flex space-x-1">
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronUp size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <ChevronDown size={14} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700">
                      <X size={14} />
                    </button>
                  </div>
                </div>
                <div className="pl-2 border-l-2 border-gray-200 ml-1 mt-2 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <div className="flex-1">关于完善基层治理数字化平台建设的几点思考</div>
                    <button className="p-0.5 text-gray-400 hover:text-gray-600">
                      <X size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Editor and Preview */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="bg-white border-b px-4 py-2 flex">
            <button className="px-4 py-1 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
              编辑
            </button>
            <button className="px-4 py-1 text-gray-600 hover:text-gray-800 text-sm"
              onClick={() => setShowPreview(true)}>
              预览
            </button>
          </div>
          
          {/* Editor Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 bg-white min-h-full">
              <div className="mb-8 text-center">
                <div className="text-3xl font-bold text-red-600 mb-4">广州信息</div>
                <div className="text-sm text-gray-500 mb-2">2025年 第42期（总第1268期）</div>
                <div className="text-sm text-gray-500">中共广州市委办公厅 主办</div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-center mb-2">目录</h2>
                <div className="border-t border-b py-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">领导动态</span>
                    <span className="text-gray-500">1</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 text-right">·</span>
                    <span className="flex-1 ml-2">市委书记赴南沙区调研数字政府建设工作</span>
                    <span className="text-gray-500">1</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 text-right">·</span>
                    <span className="flex-1 ml-2">市长主持召开数字化转型专题会议</span>
                    <span className="text-gray-500">2</span>
                  </div>
                  
                  <div className="flex justify-between mb-2 mt-4">
                    <span className="font-medium">工作动态</span>
                    <span className="text-gray-500">3</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 text-right">·</span>
                    <span className="flex-1 ml-2">广州南沙区大力推进数字政府建设的创新实践与成效</span>
                    <span className="text-gray-500">3</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 text-right">·</span>
                    <span className="flex-1 ml-2">广州市数字政府"一网通办"平台正式上线运行</span>
                    <span className="text-gray-500">4</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 text-right">·</span>
                    <span className="flex-1 ml-2">黄埔区推出线上政务服务"指尖通"小程序</span>
                    <span className="text-gray-500">5</span>
                  </div>
                  
                  <div className="flex justify-between mb-2 mt-4">
                    <span className="font-medium">经验交流</span>
                    <span className="text-gray-500">6</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 text-right">·</span>
                    <span className="flex-1 ml-2">关于完善基层治理数字化平台建设的几点思考</span>
                    <span className="text-gray-500">6</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold border-b pb-2 mb-4">
                  广州南沙区大力推进数字政府建设的创新实践与成效
                </h2>
                
                <div className="text-gray-800 leading-7">
                  <p className="mb-4 indent-8">
                    近年来，广州市南沙区大力推进数字政府建设，着力构建"用数据说话、用数据决策、用数据管理、用数据创新"的现代化治理体系，在政务服务、社会治理等领域取得了显著成效。
                  </p>
                  
                  <p className="mb-4 indent-8">
                    一是构建了全区统一的政务服务平台。整合110多个部门业务系统，打通数据壁垒，实现"一网通办"。目前，南沙区政务服务事项网上可办率达98.7%，平均办理时间缩短60%，群众满意度达到96.3%，位居全市前列。
                  </p>
                  
                  <p className="mb-4 indent-8">
                    二是创新推出"湾区通"一站式服务。针对粤港澳大湾区跨境办事需求，开发"湾区通"服务平台，支持港澳居民远程办理教育、医疗、就业、交通等63类高频政务服务，日均访问量超过3000人次，服务人次累计超过24万，大大方便了港澳居民在南沙工作生活。
                  </p>
                  
                  <p className="mb-4 indent-8">
                    三是打造智慧社区治理新模式。建设"智慧社区"管理平台，整合城市管理、民生服务、安全监控等功能，实现社区民生问题"一键上报、智能分流、限时办结"。2024年一季度，南沙区平均问题解决时效提升35%，居民满意度环比提升15个百分点。
                  </p>
                  
                  <p className="mb-4 indent-8">
                    四是推进数字经济发展。依托数字政府建设成果，南沙区吸引了一批数字经济领域龙头企业落户，初步形成了人工智能、大数据、区块链等新兴技术产业集群，2024年一季度数字经济核心产业增加值同比增长23.8%。
                  </p>
                  
                  <p className="mb-4 indent-8">
                    下一步，南沙区将继续深化数字政府建设，重点推进数据资源整合共享、智能化应用场景拓展、数字素养提升等工作，为粤港澳大湾区建设提供有力支撑。
                  </p>
                  
                  <p className="text-right text-sm text-gray-600 mt-6">
                    (南沙区委办公室)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - Document Pool */}
        <div className="w-1/4 border-l bg-gray-50 flex flex-col overflow-hidden">
          <div className="bg-white border-b px-4 py-3">
            <h3 className="font-medium text-gray-700 flex items-center">
              <Layers size={16} className="text-blue-600 mr-1.5" />
              稿件库
            </h3>
          </div>
          
          <div className="p-3">
            <div className="mb-3 relative">
              <input 
                type="text" 
                placeholder="搜索可用稿件..." 
                className="w-full p-2 pl-8 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
              <Filter className="absolute right-2.5 top-2.5 text-gray-400 cursor-pointer hover:text-gray-600" size={14} />
            </div>
            
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-600">最近上报稿件</div>
              <button className="text-xs text-blue-600 hover:text-blue-800">更多筛选</button>
            </div>
            
            <div className="space-y-2 overflow-y-auto" style={{maxHeight: 'calc(100vh - 220px)'}}>
              <div className="bg-white border rounded p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-medium text-gray-800">荔湾区数字政府建设工作推进会召开</h4>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-400 hover:text-blue-600">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xs text-gray-500">荔湾区委办公室 | 2025-04-08</div>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">工作动态</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  4月7日，荔湾区召开数字政府建设工作推进会，部署下一阶段数字政府建设重点任务。会议总结了前期工作成效，明确了"数字荔湾"建设的目标和路径...
                </p>
              </div>
              
              <div className="bg-white border rounded p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-medium text-gray-800">全市"互联网+监管"系统应用培训会举行</h4>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-400 hover:text-blue-600">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xs text-gray-500">市政务服务数据管理局 | 2025-04-07</div>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">工作动态</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  为加快推进"互联网+监管"系统在我市的应用，4月6日，市政务服务数据管理局组织举办全市"互联网+监管"系统应用培训会...
                </p>
              </div>
              
              <div className="bg-white border rounded p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-medium text-gray-800">白云区数字乡村建设试点项目启动</h4>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-400 hover:text-blue-600">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xs text-gray-500">白云区委办公室 | 2025-04-06</div>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">工作动态</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  近日，白云区数字乡村建设试点项目正式启动。该项目将在太和镇、人和镇等5个镇街的10个行政村开展试点，通过建设智慧农业平台、农产品溯源系统...
                </p>
              </div>
              
              <div className="bg-white border rounded p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-medium text-gray-800">广州市营商环境数字化改革试点经验交流会召开</h4>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-400 hover:text-blue-600">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xs text-gray-500">市发展改革委 | 2025-04-05</div>
                  <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs">经验交流</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  为深入推进营商环境数字化改革，加快打造国际一流营商环境，市发展改革委日前组织召开广州市营商环境数字化改革试点经验交流会...
                </p>
              </div>
              
              <div className="bg-white border rounded p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-medium text-gray-800">番禺区"智慧城管"平台成效显著</h4>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-400 hover:text-blue-600">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xs text-gray-500">番禺区委办公室 | 2025-04-04</div>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">工作动态</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  番禺区"智慧城管"平台自上线以来，城市管理问题处置效率提升显著。平台整合了视频监控、物联网感知等多种数据源，结合AI识别技术...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Suggestions Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowPreview(false)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">期刊预览</h3>
              <button 
                className="p-1 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100"
                onClick={() => setShowPreview(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded flex items-center text-sm">
                  <Printer size={16} className="mr-1.5" />
                  打印
                </button>
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded flex items-center text-sm">
                  <Download size={16} className="mr-1.5" />
                  下载PDF
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm">1/15</span>
                <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded flex justify-center">
              <div className="bg-white w-full max-w-2xl shadow-lg rounded p-8">
                <div className="mb-8 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-4">广州信息</div>
                  <div className="text-sm text-gray-500 mb-2">2025年 第42期（总第1268期）</div>
                  <div className="text-sm text-gray-500">中共广州市委办公厅 主办</div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-center mb-2">目录</h2>
                  <div className="border-t border-b py-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">领导动态</span>
                      <span className="text-gray-500">1</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 text-right">·</span>
                      <span className="flex-1 ml-2">市委书记赴南沙区调研数字政府建设工作</span>
                      <span className="text-gray-500">1</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 text-right">·</span>
                      <span className="flex-1 ml-2">市长主持召开数字化转型专题会议</span>
                      <span className="text-gray-500">2</span>
                    </div>
                    
                    <div className="flex justify-between mb-2 mt-4">
                      <span className="font-medium">工作动态</span>
                      <span className="text-gray-500">3</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 text-right">·</span>
                      <span className="flex-1 ml-2">广州南沙区大力推进数字政府建设的创新实践与成效</span>
                      <span className="text-gray-500">3</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 text-right">·</span>
                      <span className="flex-1 ml-2">广州市数字政府"一网通办"平台正式上线运行</span>
                      <span className="text-gray-500">4</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 text-right">·</span>
                      <span className="flex-1 ml-2">黄埔区推出线上政务服务"指尖通"小程序</span>
                      <span className="text-gray-500">5</span>
                    </div>
                    
                    <div className="flex justify-between mb-2 mt-4">
                      <span className="font-medium">经验交流</span>
                      <span className="text-gray-500">6</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 text-right">·</span>
                      <span className="flex-1 ml-2">关于完善基层治理数字化平台建设的几点思考</span>
                      <span className="text-gray-500">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalPublishingDemo;

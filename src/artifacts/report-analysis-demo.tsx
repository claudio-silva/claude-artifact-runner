import React, { useState } from 'react';
import { 
  BarChart, FileText, Calendar, Download, Printer, 
  Filter, Search, RefreshCw, ChevronDown, Sliders, 
  Eye, ArrowUpRight, TrendingUp, AlertCircle, 
  BarChart2, Activity, Clock, Users, FileUp
} from 'lucide-react';

const ReportAnalysisDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow border border-gray-200">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <BarChart2 className="text-blue-600 mr-2" size={20} />
          <h2 className="text-lg font-medium text-gray-800">数据分析报表</h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center border rounded overflow-hidden">
            <div className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm border-r flex items-center">
              <Calendar size={14} className="mr-1.5" />
              时间范围
            </div>
            <select className="px-3 py-1.5 focus:outline-none text-sm">
              <option>本月</option>
              <option>本季度</option>
              <option>本年度</option>
              <option>自定义</option>
            </select>
          </div>
          <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded text-sm flex items-center">
            <Download size={16} className="mr-1.5" />
            导出
          </button>
          <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded text-sm flex items-center">
            <Printer size={16} className="mr-1.5" />
            打印
          </button>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b px-4 flex">
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          总览
        </button>
        <button 
          onClick={() => setActiveTab('file-stats')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'file-stats' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          上报文件统计
        </button>
        <button 
          onClick={() => setActiveTab('journal-stats')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'journal-stats' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          期刊统计
        </button>
        <button 
          onClick={() => setActiveTab('trend')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'trend' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          趋势分析
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">上报稿件总数</h3>
                  <div className="p-1.5 rounded-lg bg-blue-50">
                    <FileText size={18} className="text-blue-500" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-800">1,247</span>
                  <span className="ml-2 text-xs text-green-600 flex items-center">
                    <ArrowUpRight size={12} className="mr-0.5" /> 12.5%
                  </span>
                </div>
                <div className="mt-1 text-xs text-gray-500">较上月增长</div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">采用稿件数</h3>
                  <div className="p-1.5 rounded-lg bg-green-50">
                    <FileText size={18} className="text-green-500" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-800">876</span>
                  <span className="ml-2 text-xs text-green-600 flex items-center">
                    <ArrowUpRight size={12} className="mr-0.5" /> 8.3%
                  </span>
                </div>
                <div className="mt-1 text-xs text-gray-500">较上月增长</div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">采用率</h3>
                  <div className="p-1.5 rounded-lg bg-purple-50">
                    <Activity size={18} className="text-purple-500" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-800">70.2%</span>
                  <span className="ml-2 text-xs text-red-600 flex items-center">
                    <ArrowUpRight size={12} className="mr-0.5 rotate-90" /> 2.1%
                  </span>
                </div>
                <div className="mt-1 text-xs text-gray-500">较上月下降</div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">平均上报响应时间</h3>
                  <div className="p-1.5 rounded-lg bg-yellow-50">
                    <Clock size={18} className="text-yellow-500" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-800">1.8小时</span>
                  <span className="ml-2 text-xs text-green-600 flex items-center">
                    <ArrowUpRight size={12} className="mr-0.5 rotate-180" /> 15.4%
                  </span>
                </div>
                <div className="mt-1 text-xs text-gray-500">较上月降低</div>
              </div>
            </div>
            
            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">上报稿件趋势</h3>
                  <div className="flex items-center">
                    <select className="text-sm border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2">
                      <option>近6个月</option>
                      <option>近3个月</option>
                      <option>近12个月</option>
                    </select>
                    <RefreshCw size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示上报趋势图表</div>
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">各类型稿件分布</h3>
                  <div className="flex items-center">
                    <select className="text-sm border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2">
                      <option>按主题分类</option>
                      <option>按单位分类</option>
                      <option>按期刊分类</option>
                    </select>
                    <RefreshCw size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示分布饼图</div>
                </div>
              </div>
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded shadow p-4 col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">单位上报情况对比</h3>
                  <div className="flex items-center">
                    <button className="text-sm text-blue-600 hover:text-blue-800">查看全部</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位名称</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">上报数</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">采用数</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">采用率</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">环比变化</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">南沙区委办公室</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">85</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">73</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            85.9%
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-green-600 flex items-center justify-center">
                          <ArrowUpRight size={14} className="mr-1" /> 12.4%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">越秀区委办公室</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">78</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">68</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            87.2%
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-green-600 flex items-center justify-center">
                          <ArrowUpRight size={14} className="mr-1" /> 5.7%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">海珠区委办公室</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">73</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">56</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                            76.7%
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-red-600 flex items-center justify-center">
                          <ArrowUpRight size={14} className="mr-1 rotate-90" /> 3.2%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">白云区委办公室</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">68</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">51</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                            75.0%
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-green-600 flex items-center justify-center">
                          <ArrowUpRight size={14} className="mr-1" /> 2.8%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">天河区委办公室</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">65</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-600">47</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                            72.3%
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-green-600 flex items-center justify-center">
                          <ArrowUpRight size={14} className="mr-1" /> 4.5%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">期刊发布统计</h3>
                  <RefreshCw size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">广州信息</span>
                      <span className="text-sm font-medium text-gray-700">32期</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">每日要情</span>
                      <span className="text-sm font-medium text-gray-700">92期</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">每天快报</span>
                      <span className="text-sm font-medium text-gray-700">78期</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">专题报告</span>
                      <span className="text-sm font-medium text-gray-700">12期</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-700">发布时效</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock size={14} className="mr-1.5 text-blue-500" />
                        平均编辑时长
                      </span>
                      <span className="text-sm font-medium text-gray-700">1.7小时</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock size={14} className="mr-1.5 text-green-500" />
                        平均审核时长
                      </span>
                      <span className="text-sm font-medium text-gray-700">0.8小时</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock size={14} className="mr-1.5 text-purple-500" />
                        总体处理时长
                      </span>
                      <span className="text-sm font-medium text-gray-700">2.5小时</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'file-stats' && (
          <div>
            {/* Filter Section */}
            <div className="bg-white rounded shadow p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-700">上报文件统计</h3>
                <div className="flex items-center">
                  <button className="flex items-center text-gray-600 bg-gray-100 px-3 py-1.5 rounded text-sm hover:bg-gray-200">
                    <Sliders size={14} className="mr-1.5" />
                    高级筛选
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">统计维度</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>按上报单位</option>
                    <option>按稿件类型</option>
                    <option>按采用情况</option>
                    <option>按主题分类</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">上报单位</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>全部</option>
                    <option>区县党委办公室</option>
                    <option>市直属单位</option>
                    <option>直报点</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">稿件类型</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>全部</option>
                    <option>领导动态</option>
                    <option>工作动态</option>
                    <option>经验交流</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">统计周期</label>
                  <div className="flex">
                    <input type="date" className="w-full border rounded-l p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <span className="border-t border-b py-2 px-2 text-gray-500">至</span>
                    <input type="date" className="w-full border rounded-r p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm mr-2 hover:bg-blue-700">
                  统计查询
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded text-sm hover:bg-gray-300">
                  重置
                </button>
              </div>
            </div>
            
            {/* Statistics Results */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">按单位统计</h3>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-1">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示按单位统计图表</div>
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">按类型统计</h3>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-1">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示按类型统计图表</div>
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">按时间统计</h3>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-1">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示按时间统计图表</div>
                </div>
              </div>
            </div>
            
            {/* Detailed Statistics Table */}
            <div className="bg-white rounded shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-medium text-gray-700">详细统计数据</h3>
                <div className="flex items-center">
                  <div className="relative mr-2">
                    <input 
                      type="text" 
                      placeholder="搜索..." 
                      className="w-48 border rounded p-2 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <Download size={16} className="mr-1" />
                    导出数据
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位名称</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">上报总数</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">领导动态</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">工作动态</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">经验交流</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">采用数</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">采用率</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">南沙区委办公室</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">85</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">18</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">51</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">16</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">73</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600">
                        85.9%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">越秀区委办公室</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">78</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">21</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">42</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">68</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600">
                        87.2%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">海珠区委办公室</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">73</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">13</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">56</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-yellow-600">
                        76.7%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">白云区委办公室</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">68</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">14</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">42</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">51</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-yellow-600">
                        75.0%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">天河区委办公室</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">65</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">13</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">47</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-yellow-600">
                        72.3%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
                <div className="flex-1 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      显示 <span className="font-medium">1</span> 至 <span className="font-medium">5</span> 条，共 <span className="font-medium">11</span> 条
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">上一页</span>
                        <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-gray-50">
                        1
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        2
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        3
                      </a>
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">下一页</span>
                        <ChevronDown className="h-5 w-5 -rotate-90" aria-hidden="true" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'journal-stats' && (
          <div>
            {/* Filter Section */}
            <div className="bg-white rounded shadow p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-700">期刊统计</h3>
                <div className="flex items-center">
                  <button className="flex items-center text-gray-600 bg-gray-100 px-3 py-1.5 rounded text-sm hover:bg-gray-200">
                    <FileUp size={14} className="mr-1.5" />
                    导入统计模板
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">统计维度</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>按期刊类型</option>
                    <option>按内容来源</option>
                    <option>按发布时间</option>
                    <option>按主题分类</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">期刊类型</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>全部</option>
                    <option>广州信息</option>
                    <option>每天快报</option>
                    <option>专题报告</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">内容来源</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>全部</option>
                    <option>区县党委办公室</option>
                    <option>市直属单位</option>
                    <option>直报点</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">统计周期</label>
                  <div className="flex">
                    <input type="date" className="w-full border rounded-l p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <span className="border-t border-b py-2 px-2 text-gray-500">至</span>
                    <input type="date" className="w-full border rounded-r p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm mr-2 hover:bg-blue-700">
                  统计查询
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded text-sm hover:bg-gray-300">
                  重置
                </button>
              </div>
            </div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">期刊发布总数</h3>
                  <div className="p-1.5 rounded-lg bg-blue-50">
                    <FileText size={18} className="text-blue-500" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800">214</div>
                <div className="mt-1 text-xs text-gray-500 flex items-center">
                  <ArrowUpRight size={12} className="mr-0.5 text-green-500" /> 
                  <span className="text-green-500 mr-1">8.2%</span>
                  较上月增长
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">内容总篇数</h3>
                  <div className="p-1.5 rounded-lg bg-green-50">
                    <FileText size={18} className="text-green-500" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800">876</div>
                <div className="mt-1 text-xs text-gray-500 flex items-center">
                  <ArrowUpRight size={12} className="mr-0.5 text-green-500" /> 
                  <span className="text-green-500 mr-1">12.5%</span>
                  较上月增长
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">期刊阅读量</h3>
                  <div className="p-1.5 rounded-lg bg-purple-50">
                    <Users size={18} className="text-purple-500" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800">5,243</div>
                <div className="mt-1 text-xs text-gray-500 flex items-center">
                  <ArrowUpRight size={12} className="mr-0.5 text-green-500" /> 
                  <span className="text-green-500 mr-1">15.8%</span>
                  较上月增长
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-500">平均发布周期</h3>
                  <div className="p-1.5 rounded-lg bg-yellow-50">
                    <Clock size={18} className="text-yellow-500" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800">2.3天</div>
                <div className="mt-1 text-xs text-gray-500 flex items-center">
                  <ArrowUpRight size={12} className="mr-0.5 text-red-500 rotate-90" /> 
                  <span className="text-red-500 mr-1">0.5天</span>
                  较上月增加
                </div>
              </div>
            </div>
            
            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">期刊发布趋势</h3>
                  <div className="flex items-center">
                    <select className="text-sm border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2">
                      <option>近6个月</option>
                      <option>近3个月</option>
                      <option>近12个月</option>
                    </select>
                    <RefreshCw size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示期刊发布趋势图表</div>
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">各类期刊比例</h3>
                  <div className="flex items-center">
                    <select className="text-sm border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2">
                      <option>按发布数量</option>
                      <option>按内容数量</option>
                      <option>按阅读量</option>
                    </select>
                    <RefreshCw size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示各类期刊比例饼图</div>
                </div>
              </div>
            </div>
            
            {/* Detailed Journal Stats */}
            <div className="bg-white rounded shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-medium text-gray-700">期刊详细统计</h3>
                <div className="flex items-center">
                  <div className="relative mr-2">
                    <input 
                      type="text" 
                      placeholder="搜索期刊..." 
                      className="w-48 border rounded p-2 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <Download size={16} className="mr-1" />
                    导出数据
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">期刊名称</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">发布数量</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">总篇数</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">平均篇数</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">阅读量</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">平均处理时长</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">环比变化</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">广州信息</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">32期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">384篇</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">12篇/期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">2,156</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">3.2小时</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600 flex items-center justify-center">
                        <ArrowUpRight size={14} className="mr-1" /> 10.5%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">每天快报</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">78期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">312篇</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">4篇/期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">1,872</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">1.5小时</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600 flex items-center justify-center">
                        <ArrowUpRight size={14} className="mr-1" /> 8.7%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">专题报告</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">12期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">36篇</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">3篇/期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">432</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">8.5小时</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600 flex items-center justify-center">
                        <ArrowUpRight size={14} className="mr-1" /> 25.0%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">每日要情</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">92期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">144篇</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">1.6篇/期</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">1,058</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">0.8小时</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-red-600 flex items-center justify-center">
                        <ArrowUpRight size={14} className="mr-1 rotate-90" /> 2.1%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
                <div className="flex-1 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      显示 <span className="font-medium">1</span> 至 <span className="font-medium">4</span> 条，共 <span className="font-medium">4</span> 条
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">上一页</span>
                        <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-gray-50">
                        1
                      </a>
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">下一页</span>
                        <ChevronDown className="h-5 w-5 -rotate-90" aria-hidden="true" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'trend' && (
          <div>
            {/* Alert Message */}
            <div className="flex items-center p-4 mb-6 text-yellow-800 border-l-4 border-yellow-300 bg-yellow-50">
              <AlertCircle size={20} className="mr-3 text-yellow-600" />
              <div>
                <div className="font-medium">热点预警提示</div>
                <div className="text-sm mt-1">系统检测到"数字政府建设"相关上报信息近期增长迅速，可能成为重点关注领域。</div>
              </div>
            </div>
            
            {/* Filter Row */}
            <div className="bg-white rounded shadow p-4 mb-6">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">分析维度</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>主题趋势</option>
                    <option>单位对比</option>
                    <option>内容质量</option>
                    <option>采用情况</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">热点主题</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>全部</option>
                    <option>数字政府建设</option>
                    <option>经济高质量发展</option>
                    <option>社会民生工作</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">分析周期</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>最近6个月</option>
                    <option>最近3个月</option>
                    <option>最近12个月</option>
                    <option>自定义</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">数据粒度</label>
                  <select className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>月度</option>
                    <option>周度</option>
                    <option>日度</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Trend Charts */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">主题热度趋势</h3>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-1">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示主题热度趋势图表</div>
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">单位上报变化趋势</h3>
                  <div className="flex items-center">
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-1">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 italic">此处将显示单位上报变化趋势图表</div>
                </div>
              </div>
            </div>
            
            {/* Hot Topics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded shadow p-4 col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">热点主题详情</h3>
                  <div className="flex items-center">
                    <select className="text-sm border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2">
                      <option>全部热点</option>
                      <option>新兴热点</option>
                      <option>持续热点</option>
                      <option>衰退热点</option>
                    </select>
                    <RefreshCw size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">热点主题</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">上报数量</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">采用率</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">热度趋势</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">关注单位</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <div className="flex items-center justify-center">
                            <TrendingUp className="text-green-500 mr-1" size={14} />
                            <span className="text-green-600">上升</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">8个</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            活跃
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">经济高质量发展</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">98</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">82.7%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <div className="flex items-center justify-center">
                            <TrendingUp className="text-green-500 mr-1" size={14} />
                            <span className="text-green-600">平稳</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">6个</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            活跃
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">社会民生工作</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">85</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">79.4%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <div className="flex items-center justify-center">
                            <TrendingUp className="text-yellow-500 mr-1 rotate-45" size={14} />
                            <span className="text-yellow-600">波动</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">5个</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                            关注
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">城市规划建设</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">76</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">75.0%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <div className="flex items-center justify-center">
                            <TrendingUp className="text-red-500 mr-1 rotate-90" size={14} />
                            <span className="text-red-600">下降</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">4个</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                            一般
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">党建工作</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">72</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">77.8%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <div className="flex items-center justify-center">
                            <TrendingUp className="text-green-500 mr-1" size={14} />
                            <span className="text-green-600">上升</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">7个</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            活跃
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white rounded shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">热点预测</h3>
                  <RefreshCw size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg bg-green-50 border-green-200">
                    <div className="flex items-center mb-2">
                      <TrendingUp size={16} className="text-green-600 mr-2" />
                      <h4 className="font-medium text-green-800">上升趋势预测</h4>
                    </div>
                    <p className="text-sm text-gray-700">系统预测"数字政府建设"、"党建工作"主题在未来3个月内将持续上升，建议关注。</p>
                  </div>
                  
                  <div className="p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                    <div className="flex items-center mb-2">
                      <AlertCircle size={16} className="text-yellow-600 mr-2" />
                      <h4 className="font-medium text-yellow-800">新兴热点预警</h4>
                    </div>
                    <p className="text-sm text-gray-700">"智慧城市建设"、"数字乡村"主题近期上报增加，可能成为新兴热点。</p>
                  </div>
                  
                  <div className="p-3 border rounded-lg bg-blue-50 border-blue-200">
                    <div className="flex items-center mb-2">
                      <Activity size={16} className="text-blue-600 mr-2" />
                      <h4 className="font-medium text-blue-800">季节性预测</h4>
                    </div>
                    <p className="text-sm text-gray-700">根据历史数据，临近年底"经济总结"、"年度考核"相关信息将会增加。</p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-700 mb-3">AI建议</h4>
                    <div className="p-3 border rounded-lg bg-purple-50 border-purple-200">
                      <p className="text-sm text-gray-700">
                        建议加强"数字政府建设"相关主题的深度报道，特别是在应用成效方面；同时关注"智慧城市建设"新兴热点，可适当引导上报单位增加此类主题的优质信息上报。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportAnalysisDemo;
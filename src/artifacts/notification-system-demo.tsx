import React, { useState } from 'react';
import { 
  Bell, Plus, Search, Filter, ChevronDown, 
  Users, Calendar, Clock, Eye, Download, Send, 
  Edit, Trash2, X, Check, AlertCircle, FileText,
  MessageSquare, RefreshCw, Mail, Smartphone, CheckCircle, Sparkles, Link
} from 'lucide-react';

const NotificationSystemDemo = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [showAIDialog, setShowAIDialog] = useState(false);
  
  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg border border-gray-200 shadow">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Bell className="text-orange-600 mr-2" size={20} />
          <h2 className="text-lg font-medium text-gray-800">通知公告系统</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1.5 bg-orange-600 text-white rounded text-sm hover:bg-orange-700 flex items-center">
            <Plus size={16} className="mr-1.5" />
            新建通知
          </button>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b px-4 flex">
        <button 
          onClick={() => setActiveTab('create')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'create' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          创建通知
        </button>
        <button 
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'pending' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          待发通知
        </button>
        <button 
          onClick={() => setActiveTab('sent')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'sent' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          已发通知
        </button>
        <button 
          onClick={() => setActiveTab('recycle')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'recycle' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          回收站
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'create' && (
          <div className="bg-white rounded shadow">
            <div className="p-4 border-b">
              <h3 className="font-medium text-gray-700">创建新通知</h3>
            </div>
            
            <div className="p-6">
              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">通知标题 <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="请输入通知标题..." 
                      className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    />
                    <button 
                      className="absolute right-2 top-2 text-gray-400 hover:text-orange-600"
                      onClick={() => setShowAIDialog(true)}
                    >
                      <Sparkles size={18} />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">发送对象 <span className="text-red-500">*</span></label>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex items-center">
                      <input type="radio" id="allUnits" name="target" className="mr-1.5" />
                      <label htmlFor="allUnits" className="text-sm text-gray-700">全部单位</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="districtUnits" name="target" className="mr-1.5" />
                      <label htmlFor="districtUnits" className="text-sm text-gray-700">区县单位</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="cityUnits" name="target" className="mr-1.5" />
                      <label htmlFor="cityUnits" className="text-sm text-gray-700">市直属单位</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="customUnits" name="target" className="mr-1.5" checked />
                      <label htmlFor="customUnits" className="text-sm text-gray-700">自定义</label>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-1/3 border rounded-l overflow-y-auto" style={{height: '150px'}}>
                      <div className="p-2 bg-gray-50 border-b text-sm font-medium">全部单位</div>
                      <div className="p-2">
                        <div className="mb-1.5 flex items-center">
                          <input type="checkbox" id="unit1" className="mr-1.5" />
                          <label htmlFor="unit1" className="text-sm text-gray-700">越秀区委办公室</label>
                        </div>
                        <div className="mb-1.5 flex items-center">
                          <input type="checkbox" id="unit2" className="mr-1.5" checked />
                          <label htmlFor="unit2" className="text-sm text-gray-700">海珠区委办公室</label>
                        </div>
                        <div className="mb-1.5 flex items-center">
                          <input type="checkbox" id="unit3" className="mr-1.5" />
                          <label htmlFor="unit3" className="text-sm text-gray-700">天河区委办公室</label>
                        </div>
                        <div className="mb-1.5 flex items-center">
                          <input type="checkbox" id="unit4" className="mr-1.5" checked />
                          <label htmlFor="unit4" className="text-sm text-gray-700">白云区委办公室</label>
                        </div>
                        <div className="mb-1.5 flex items-center">
                          <input type="checkbox" id="unit5" className="mr-1.5" />
                          <label htmlFor="unit5" className="text-sm text-gray-700">黄埔区委办公室</label>
                        </div>
                        <div className="mb-1.5 flex items-center">
                          <input type="checkbox" id="unit6" className="mr-1.5" checked />
                          <label htmlFor="unit6" className="text-sm text-gray-700">南沙区委办公室</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center px-4">
                      <button className="p-1.5 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 mb-2">
                        <ChevronDown className="rotate-90" size={16} />
                      </button>
                      <button className="p-1.5 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
                        <ChevronDown className="-rotate-90" size={16} />
                      </button>
                    </div>
                    
                    <div className="w-1/3 border rounded-r overflow-y-auto" style={{height: '150px'}}>
                      <div className="p-2 bg-gray-50 border-b text-sm font-medium">已选单位</div>
                      <div className="p-2">
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm text-gray-700">海珠区委办公室</span>
                          <button className="text-gray-400 hover:text-red-600">
                            <X size={14} />
                          </button>
                        </div>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm text-gray-700">白云区委办公室</span>
                          <button className="text-gray-400 hover:text-red-600">
                            <X size={14} />
                          </button>
                        </div>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm text-gray-700">南沙区委办公室</span>
                          <button className="text-gray-400 hover:text-red-600">
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">通知内容 <span className="text-red-500">*</span></label>
                  <div className="border rounded overflow-hidden">
                    <div className="bg-gray-50 p-1 border-b flex">
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded mr-1">B</button>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded mr-1"><i>I</i></button>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded mr-1"><u>U</u></button>
                      <span className="mx-1 text-gray-300">|</span>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded mr-1">
                        <FileText size={14} />
                      </button>
                      <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded mr-1">
                        <Link size={14} />
                      </button>
                    </div>
                    <textarea 
                      rows="8" 
                      className="w-full p-3 focus:outline-none"
                      placeholder="请输入通知内容..."
                    ></textarea>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">附件</label>
                    <div className="border rounded p-6 border-dashed text-center">
                      <div className="flex flex-col items-center">
                        <FileText size={24} className="text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">点击或拖拽文件到此处上传</p>
                        <p className="text-xs text-gray-400">支持常见文档格式，单个文件不超过20MB</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">发送选项</label>
                    <div className="border rounded p-4">
                      <div className="mb-3">
                        <div className="flex items-center mb-2">
                          <input type="checkbox" id="urgent" className="mr-1.5" />
                          <label htmlFor="urgent" className="text-sm text-gray-700">紧急通知</label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input type="checkbox" id="needFeedback" className="mr-1.5" />
                          <label htmlFor="needFeedback" className="text-sm text-gray-700">需要反馈</label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input type="checkbox" id="scheduled" className="mr-1.5" />
                          <label htmlFor="scheduled" className="text-sm text-gray-700">定时发送</label>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label className="block text-sm text-gray-700 mb-1">发送时间</label>
                        <input type="datetime-local" className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">推送渠道</label>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <input type="checkbox" id="systemNotification" className="mr-1.5" checked />
                            <label htmlFor="systemNotification" className="text-sm text-gray-700">系统通知</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="emailNotification" className="mr-1.5" />
                            <label htmlFor="emailNotification" className="text-sm text-gray-700">邮件通知</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="smsNotification" className="mr-1.5" />
                            <label htmlFor="smsNotification" className="text-sm text-gray-700">短信通知</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
                  保存草稿
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  预览
                </button>
                <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 flex items-center">
                  <Send size={16} className="mr-1.5" />
                  发送
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'pending' && (
          <div>
            <div className="bg-white rounded shadow p-4 mb-4 flex justify-between items-center">
              <div className="relative w-64">
                <input 
                  type="text" 
                  placeholder="搜索待发通知..." 
                  className="w-full border rounded p-2 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
              </div>
              <div className="flex items-center">
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-2">
                  <RefreshCw size={16} />
                </button>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-2">
                  <Filter size={16} />
                </button>
                <select className="border rounded p-1.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                  <option>按创建时间排序</option>
                  <option>按计划发送时间排序</option>
                  <option>按紧急程度排序</option>
                </select>
              </div>
            </div>
            
            <div className="bg-white rounded shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-medium text-gray-700">待发通知 (3)</h3>
                <div className="flex items-center">
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-2">
                    <Eye size={16} />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                    <Download size={16} />
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="w-8 px-3 py-3 text-left">
                        <input type="checkbox" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">通知标题</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">接收单位</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">计划发送时间</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建人</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <AlertCircle size={16} className="text-red-500 mr-2" />
                          <span className="text-sm text-gray-900">关于开展数字政府建设工作情况调研的通知</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        全部单位
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-08 14:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-10 09:00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        张编辑
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          定时发送
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900 mr-3">
                            <Trash2 size={16} />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Send size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">2025年信息上报工作考核细则发布</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        区县党委办公室
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-08 11:15
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        - 
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        李主任
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          草稿
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900 mr-3">
                            <Trash2 size={16} />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Send size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">关于举办2025年信息员业务培训的通知</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        全部单位
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-07 16:45
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-15 09:00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        王编辑
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          定时发送
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900 mr-3">
                            <Trash2 size={16} />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Send size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
                <div className="flex-1 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      显示 <span className="font-medium">1</span> 至 <span className="font-medium">3</span> 条，共 <span className="font-medium">3</span> 条
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">上一页</span>
                        <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-orange-50 text-sm font-medium text-orange-600 hover:bg-gray-50">
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
            
            <div className="mt-4 flex justify-between items-center">
              <div>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded mr-2 hover:bg-gray-300 text-sm">
                  全选
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 text-sm">
                  取消选择
                </button>
              </div>
              <div>
                <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm flex items-center">
                  <Send size={16} className="mr-1.5" />
                  批量发送
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'sent' && (
          <div>
            <div className="bg-white rounded shadow p-4 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="relative w-64 mr-4">
                  <input 
                    type="text" 
                    placeholder="搜索已发通知..." 
                    className="w-full border rounded p-2 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                  <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="text-gray-400 mr-1.5" />
                  <input 
                    type="date" 
                    className="border rounded p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                  <span className="mx-2 text-gray-500">至</span>
                  <input 
                    type="date" 
                    className="border rounded p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <select className="border rounded p-1.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                  <option>全部通知</option>
                  <option>紧急通知</option>
                  <option>普通通知</option>
                </select>
              </div>
            </div>
            
            <div className="bg-white rounded shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-medium text-gray-700">已发通知</h3>
                <div className="flex items-center">
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded mr-2">
                    <Eye size={16} />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                    <Download size={16} />
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="w-8 px-3 py-3 text-left">
                        <input type="checkbox" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">通知标题</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">接收单位</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">发送时间</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">发送人</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">已读率</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">推送方式</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <AlertCircle size={16} className="text-red-500 mr-2" />
                          <span className="text-sm text-gray-900">关于落实市委重点工作部署的通知</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        全部单位
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-08 09:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        刘主任
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-sm text-gray-500">92%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <Bell size={14} className="text-gray-400" />
                          <Mail size={14} className="text-gray-400" />
                          <Smartphone size={14} className="text-gray-400" />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Eye size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">关于开展2025年第一季度信息工作评优的通知</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        区县党委办公室
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-05 14:15
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        张编辑
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{width: '100%'}}></div>
                          </div>
                          <span className="text-sm text-gray-500">100%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <Bell size={14} className="text-gray-400" />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Eye size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">信息报送系统功能更新公告</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        全部单位
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-02 10:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        系统管理员
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                            <div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '78%'}}></div>
                          </div>
                          <span className="text-sm text-gray-500">78%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <Bell size={14} className="text-gray-400" />
                          <Mail size={14} className="text-gray-400" />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Eye size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
                <div className="flex-1 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      显示 <span className="font-medium">1</span> 至 <span className="font-medium">3</span> 条，共 <span className="font-medium">12</span> 条
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">上一页</span>
                        <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-orange-50 text-sm font-medium text-orange-600 hover:bg-gray-50">
                        1
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        2
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        3
                      </a>
                      <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        4
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
        
        {activeTab === 'recycle' && (
          <div>
            <div className="bg-white rounded shadow p-4 mb-4 flex justify-between items-center">
              <div className="relative w-64">
                <input 
                  type="text" 
                  placeholder="搜索回收站..." 
                  className="w-full border rounded p-2 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
              </div>
              <div className="flex items-center">
                <button className="px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 mr-2 flex items-center">
                  <Trash2 size={14} className="mr-1.5" />
                  清空回收站
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded shadow">
              <div className="p-4 border-b">
                <h3 className="font-medium text-gray-700">已删除通知</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="w-8 px-3 py-3 text-left">
                        <input type="checkbox" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">通知标题</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">接收单位</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">删除时间</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">删除人</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">关于信息上报工作要求的调整通知</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        全部单位
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-08 16:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        王编辑
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-green-600 hover:text-green-900 mr-3">
                            <RefreshCw size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">信息上报系统临时维护通知</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        全部单位
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2025-04-07 10:15
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        系统管理员
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center">
                          <button className="text-green-600 hover:text-green-900 mr-3">
                            <RefreshCw size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
                <div className="flex-1 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      显示 <span className="font-medium">1</span> 至 <span className="font-medium">2</span> 条，共 <span className="font-medium">2</span> 条
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                      <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">上一页</span>
                        <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
                      </a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-orange-50 text-sm font-medium text-orange-600 hover:bg-gray-50">
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
            
            <div className="mt-4 flex justify-between items-center">
              <div>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded mr-2 hover:bg-gray-300 text-sm">
                  全选
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 text-sm">
                  取消选择
                </button>
              </div>
              <div>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm flex items-center">
                  <RefreshCw size={16} className="mr-1.5" />
                  批量恢复
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* AI Dialog */}
      {showAIDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center">
                <Sparkles size={18} className="text-orange-500 mr-2" />
                AI智能助手
              </h3>
              <button 
                className="p-1 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100"
                onClick={() => setShowAIDialog(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-600 text-sm">AI助手可以帮助您快速生成通知标题和内容，提高工作效率。请选择要使用的功能：</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium text-gray-800 mb-1">智能生成通知标题</h4>
                <p className="text-sm text-gray-600">根据您的需求和主题，自动生成专业规范的通知标题。</p>
              </div>
              
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium text-gray-800 mb-1">智能生成通知内容</h4>
                <p className="text-sm text-gray-600">根据您提供的关键信息，自动生成完整的通知内容。</p>
              </div>
              
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium text-gray-800 mb-1">智能推荐接收单位</h4>
                <p className="text-sm text-gray-600">根据通知内容和历史发送记录，智能推荐最相关的接收单位。</p>
              </div>
              
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium text-gray-800 mb-1">优化现有通知</h4>
                <p className="text-sm text-gray-600">对您已编写的通知进行语言优化和规范性检查。</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50 mb-6">
              <h4 className="font-medium text-gray-800 mb-2">快速输入</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="告诉AI你需要什么样的通知..." 
                  className="w-full border rounded p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button className="absolute right-2 top-2 text-orange-500 hover:text-orange-700">
                  <Send size={16} />
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300">
                  约稿通知
                </button>
                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300">
                  会议通知
                </button>
                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300">
                  工作部署通知
                </button>
                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300">
                  培训通知
                </button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded mr-2 hover:bg-gray-300"
                onClick={() => setShowAIDialog(false)}
              >
                取消
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 flex items-center">
                <Sparkles size={16} className="mr-1.5" />
                生成
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystemDemo;

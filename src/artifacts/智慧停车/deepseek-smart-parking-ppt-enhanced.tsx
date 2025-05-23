import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Car, Battery, CreditCard, PieChart, Database, Zap, Layers, Activity, LineChart, BarChart, Cpu, Server, Users, Award, DollarSign, Globe, Compass } from 'lucide-react';

// 精美的渐变背景样式
const gradientBg = {
  backgroundColor: 'rgb(247,245,255)',
};

// 创建图表数据
const efficiencyData = [
  { name: '传统方式', 效率: 65 },
  { name: 'AI赋能', 效率: 95 },
];

const costData = [
  { name: '人力成本', before: 100, after: 70 },
  { name: '运营成本', before: 85, after: 65 },
  { name: '维护成本', before: 90, after: 60 },
];

// 幻灯片数据
const slides = [
  // 第三章：智慧停车场AI应用场景
  {
    id: '3-1',
    chapter: '三',
    title: '智慧停车场AI应用场景',
    subtitle: '深度场景剖析',
    content: (
      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="bg-white/90 rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
              <Car className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-700">智能车位管理</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span>精确定位与车位引导</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span>车位占用率实时监控</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span>预约系统与空位预测</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span>车辆推荐与最优停放</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/90 rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-full mr-4">
              <Battery className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-green-700">新能源充电管理</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>充电桩智能调度</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>充电过程实时监控</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>充电需求预测与均衡</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span>电网负荷智能分配</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/90 rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-purple-100 rounded-full mr-4">
              <CreditCard className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-purple-700">支付与收费优化</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1">•</span>
              <span>无感支付系统</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1">•</span>
              <span>动态定价机制</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1">•</span>
              <span>多方式支付整合</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1">•</span>
              <span>优惠策略智能推荐</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/90 rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-red-100 rounded-full mr-4">
              <PieChart className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-red-700">数据分析与预测</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">•</span>
              <span>车流量模式识别</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">•</span>
              <span>峰值预测与资源调配</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">•</span>
              <span>用户行为分析</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">•</span>
              <span>运营效率评估</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  
  // 第三章第二页：应用场景价值链
  {
    id: '3-2',
    chapter: '三',
    title: '智慧停车场AI应用场景',
    subtitle: '完整价值链整合',
    content: (
      <div className="mt-6">
        <div className="bg-white/90 rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">DeepSeek AI赋能全场景价值链</h3>
          
          <div className="relative">
            {/* 流程图 */}
            <div className="flex justify-between items-center mb-8 relative">
              {/* 连接箭头 */}
              <div className="absolute h-1 bg-blue-400 left-24 right-24 top-10 z-0"></div>
              
              {/* 步骤节点 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-2 shadow-md">
                  <Users size={32} className="text-blue-600" />
                </div>
                <span className="font-semibold text-blue-700">用户需求</span>
              </div>
              
              <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-2 shadow-md">
                  <Database size={32} className="text-indigo-600" />
                </div>
                <span className="font-semibold text-indigo-700">数据收集</span>
              </div>
              
              <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-2 shadow-md">
                  <Cpu size={32} className="text-purple-600" />
                </div>
                <span className="font-semibold text-purple-700">AI分析</span>
              </div>
              
              <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mb-2 shadow-md">
                  <Compass size={32} className="text-pink-600" />
                </div>
                <span className="font-semibold text-pink-700">服务输出</span>
              </div>
              
              <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-2 shadow-md">
                  <Award size={32} className="text-red-600" />
                </div>
                <span className="font-semibold text-red-700">价值创造</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2">数据采集层</h4>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  车辆出入识别数据
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  车位占用状态数据
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  充电设施使用数据
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  用户行为数据
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2">AI处理层</h4>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  DeepSeek模型推理
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  车流模式识别
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  行为预测分析
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  优化策略生成
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2">服务输出层</h4>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  智能引导服务
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  智能收费服务
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  充电调度服务
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  个性化推荐服务
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2">价值创造层</h4>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  运营效率提升
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  资源利用最大化
                </li>
                <li className="flex items-center mb-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  用户体验优化
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  商业价值挖掘
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // 第四章第一页：DeepSeek赋能解决方案
  {
    id: '4-1',
    chapter: '四',
    title: 'DeepSeek赋能解决方案',
    subtitle: '核心解决方案构成',
    content: (
      <div className="mt-6">
        <div className="bg-white/90 rounded-xl shadow-lg p-8 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-green-100 rounded-full opacity-40"></div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-6 relative z-10">DeepSeek大模型赋能三大核心系统</h3>
          
          <div className="grid grid-cols-3 gap-6 relative z-10">
            <div className="bg-gradient-to-br from-blue-50/90 to-blue-100/90 rounded-xl p-6 shadow-md border border-blue-200">
              <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                <Compass className="text-blue-700" size={32} />
              </div>
              <h4 className="text-xl font-bold text-blue-700 mb-3">智能决策系统</h4>
              <p className="text-gray-700 mb-4 text-sm">基于DeepSeek强大的预测和推理能力，提供智能决策支持</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">车位需求预测引擎</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">动态定价策略系统</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">智能路径规划模块</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">资源配置优化引擎</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50/90 to-green-100/90 rounded-xl p-6 shadow-md border border-green-200">
              <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                <Activity className="text-green-700" size={32} />
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-3">运营管理平台</h4>
              <p className="text-gray-700 mb-4 text-sm">整合车场全方位数据，提供智能化运营管理能力</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">数据可视化分析中心</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">设备健康监控系统</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">充电资源调度平台</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">异常预警与处理机制</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50/90 to-purple-100/90 rounded-xl p-6 shadow-md border border-purple-200">
              <div className="w-16 h-16 bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-purple-700" size={32} />
              </div>
              <h4 className="text-xl font-bold text-purple-700 mb-3">多模态交互系统</h4>
              <p className="text-gray-700 mb-4 text-sm">为用户与停车场系统间提供自然、智能的交互体验</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">语音控制与导航助手</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">智能客服问答系统</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">视觉识别与监控分析</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">个性化服务推荐引擎</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50/90 rounded-lg border border-yellow-200 relative z-10">
            <h4 className="text-lg font-bold text-yellow-700 mb-2">DeepSeek核心优势</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-start">
                <div className="p-2 bg-yellow-100 rounded-full mr-2">
                  <Zap className="text-yellow-600" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">高效本地化推理</p>
                  <p className="text-gray-600 text-xs">支持边缘设备部署</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-yellow-100 rounded-full mr-2">
                  <Database className="text-yellow-600" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">数据私密性保障</p>
                  <p className="text-gray-600 text-xs">敏感数据不出本地网络</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-yellow-100 rounded-full mr-2">
                  <Layers className="text-yellow-600" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">多模态输入理解</p>
                  <p className="text-gray-600 text-xs">处理文本、图像等多源数据</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // 第四章第二页：解决方案详情
  {
    id: '4-2',
    chapter: '四',
    title: 'DeepSeek赋能解决方案',
    subtitle: '方案详细应用场景',
    content: (
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4 border-b border-blue-100 pb-2">场景一：智能车位管理</h3>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">痛点问题</h4>
              <p className="text-sm text-gray-600">车位利用率低、寻找空位耗时长、高峰期拥堵严重</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">DeepSeek赋能方案</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">基于历史数据训练车流预测模型</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">实时计算最优车位分配策略</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">智能导航引导车辆就位</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-1">实现效果</h4>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="text-center">
                  <p className="text-blue-700 font-bold text-xl">↑25%</p>
                  <p className="text-xs text-gray-500">车位利用率</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-700 font-bold text-xl">↓60%</p>
                  <p className="text-xs text-gray-500">寻车时间</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-700 font-bold text-xl">↑30%</p>
                  <p className="text-xs text-gray-500">停车场周转率</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-green-700 mb-4 border-b border-green-100 pb-2">场景二：新能源充电优化</h3>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">痛点问题</h4>
              <p className="text-sm text-gray-600">充电桩使用冲突、充电高峰等待长、电网负载不均衡</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">DeepSeek赋能方案</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-green-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">电动车充电需求预测模型</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">智能预约与动态分配系统</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">负载均衡与峰谷填平策略</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-1">实现效果</h4>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="text-center">
                  <p className="text-green-700 font-bold text-xl">↑35%</p>
                  <p className="text-xs text-gray-500">充电桩利用率</p>
                </div>
                <div className="text-center">
                  <p className="text-green-700 font-bold text-xl">↓45%</p>
                  <p className="text-xs text-gray-500">平均等待时间</p>
                </div>
                <div className="text-center">
                  <p className="text-green-700 font-bold text-xl">↓20%</p>
                  <p className="text-xs text-gray-500">电网峰值负载</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4 border-b border-purple-100 pb-2">场景三：智能收费系统</h3>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">痛点问题</h4>
              <p className="text-sm text-gray-600">固定收费不灵活、出场结算拥堵、差异化定价难实现</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">DeepSeek赋能方案</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">基于使用场景的动态定价引擎</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">无感支付与自动结算系统</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">个性化会员优惠策略生成</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-1">实现效果</h4>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="text-center">
                  <p className="text-purple-700 font-bold text-xl">↑15%</p>
                  <p className="text-xs text-gray-500">平均收费效率</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-700 font-bold text-xl">↓100%</p>
                  <p className="text-xs text-gray-500">出场等待结算</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-700 font-bold text-xl">↑20%</p>
                  <p className="text-xs text-gray-500">客户满意度</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-red-100 pb-2">场景四：运营分析平台</h3>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">痛点问题</h4>
              <p className="text-sm text-gray-600">数据分散难整合、运营决策依赖经验、缺乏有效分析工具</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700 mb-1">DeepSeek赋能方案</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-red-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">多源数据整合与清洗平台</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">运营KPI实时监控与预警</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1 mt-1">→</span>
                  <span className="text-gray-600">基于AI的运营策略推荐</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-1">实现效果</h4>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-xl">↑40%</p>
                  <p className="text-xs text-gray-500">决策效率</p>
                </div>
                <div className="text-center">
                  <p className="text-red-700 font-bold text-xl">↓30%</p>
                  <p className="text-xs text-gray-500">运营成本</p>
                </div>
                <div className="text-center">
                  <p className="text-red-700 font-bold text-xl">↑25%</p>
                  <p className="text-xs text-gray-500">营收增长</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // 第五章第一页：技术架构与实施路径
  {
    id: '5-1',
    chapter: '五',
    title: '技术架构与实施路径',
    subtitle: '整体技术架构',
    content: (
      <div className="mt-6">
        <div className="bg-white/90 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">DeepSeek智慧停车解决方案架构</h3>
          
          <div className="relative overflow-hidden bg-gray-50/80 p-4 rounded-lg mb-6">
            {/* 架构图 */}
            <div className="grid grid-cols-5 gap-2">
              {/* 第一行：用户层 */}
              <div className="col-span-5 bg-blue-100 p-3 rounded-lg mb-2 text-center font-bold text-blue-800">
                用户接口层
              </div>
              
              {/* 第二行：子系统 */}
              <div className="col-span-1 bg-blue-50 p-2 rounded-lg text-center text-sm text-blue-700 shadow-sm">
                移动端APP
              </div>
              <div className="col-span-1 bg-blue-50 p-2 rounded-lg text-center text-sm text-blue-700 shadow-sm">
                Web管理平台
              </div>
              <div className="col-span-1 bg-blue-50 p-2 rounded-lg text-center text-sm text-blue-700 shadow-sm">
                第三方平台
              </div>
              <div className="col-span-1 bg-blue-50 p-2 rounded-lg text-center text-sm text-blue-700 shadow-sm">
                语音交互
              </div>
              <div className="col-span-1 bg-blue-50 p-2 rounded-lg text-center text-sm text-blue-700 shadow-sm">
                大屏展示
              </div>
              
              {/* 第三行：应用层 */}
              <div className="col-span-5 bg-green-100 p-3 rounded-lg my-2 text-center font-bold text-green-800">
                应用服务层
              </div>
              
              {/* 第四行：应用模块 */}
              <div className="col-span-1 bg-green-50 p-2 rounded-lg text-center text-sm text-green-700 shadow-sm">
                车位管理系统
              </div>
              <div className="col-span-1 bg-green-50 p-2 rounded-lg text-center text-sm text-green-700 shadow-sm">
                充电调度系统
              </div>
              <div className="col-span-1 bg-green-50 p-2 rounded-lg text-center text-sm text-green-700 shadow-sm">
                智能收费系统
              </div>
              <div className="col-span-1 bg-green-50 p-2 rounded-lg text-center text-sm text-green-700 shadow-sm">
                运营管理系统
              </div>
              <div className="col-span-1 bg-green-50 p-2 rounded-lg text-center text-sm text-green-700 shadow-sm">
                安防监控系统
              </div>
              
              {/* 第五行：AI层 */}
              <div className="col-span-5 bg-purple-100 p-3 rounded-lg my-2 text-center font-bold text-purple-800">
                AI推理层
              </div>
              
              {/* 第六行：AI模块 */}
              <div className="col-span-2 bg-purple-50 p-4 rounded-lg text-center text-purple-700 shadow-sm flex items-center justify-center">
                <span className="font-bold">DeepSeek本地化推理引擎</span>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-2">
                <div className="bg-purple-50 p-2 rounded-lg text-center text-sm text-purple-700 shadow-sm">
                  预测模型
                </div>
                <div className="bg-purple-50 p-2 rounded-lg text-center text-sm text-purple-700 shadow-sm">
                  优化算法
                </div>
                <div className="bg-purple-50 p-2 rounded-lg text-center text-sm text-purple-700 shadow-sm">
                  决策引擎
                </div>
              </div>
              
              {/* 第七行：数据层 */}
              <div className="col-span-5 bg-yellow-100 p-3 rounded-lg my-2 text-center font-bold text-yellow-800">
                数据中台层
              </div>
              
              {/* 第八行：数据模块 */}
              <div className="col-span-1 bg-yellow-50 p-2 rounded-lg text-center text-sm text-yellow-700 shadow-sm">
                数据采集
              </div>
              <div className="col-span-1 bg-yellow-50 p-2 rounded-lg text-center text-sm text-yellow-700 shadow-sm">
                数据存储
              </div>
              <div className="col-span-1 bg-yellow-50 p-2 rounded-lg text-center text-sm text-yellow-700 shadow-sm">
                数据处理
              </div>
              <div className="col-span-1 bg-yellow-50 p-2 rounded-lg text-center text-sm text-yellow-700 shadow-sm">
                数据分析
              </div>
              <div className="col-span-1 bg-yellow-50 p-2 rounded-lg text-center text-sm text-yellow-700 shadow-sm">
                数据服务
              </div>
              
              {/* 第九行：基础层 */}
              <div className="col-span-5 bg-red-100 p-3 rounded-lg my-2 text-center font-bold text-red-800">
                边缘计算层
              </div>
              
              {/* 第十行：基础模块 */}
              <div className="col-span-1 bg-red-50 p-2 rounded-lg text-center text-sm text-red-700 shadow-sm">
                车场摄像头
              </div>
              <div className="col-span-1 bg-red-50 p-2 rounded-lg text-center text-sm text-red-700 shadow-sm">
                传感器网络
              </div>
              <div className="col-span-1 bg-red-50 p-2 rounded-lg text-center text-sm text-red-700 shadow-sm">
                充电设备
              </div>
              <div className="col-span-1 bg-red-50 p-2 rounded-lg text-center text-sm text-red-700 shadow-sm">
                无线通信
              </div>
              <div className="col-span-1 bg-red-50 p-2 rounded-lg text-center text-sm text-red-700 shadow-sm">
                终端设备
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-50/80 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                <Server className="text-blue-600 mr-2" size={20} />
                本地化部署优势
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>数据隐私保护，敏感数据不出本地网络</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>低延迟响应，实时处理关键业务决策</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>定制化能力，适应不同停车场特性</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>成本可控，无需按量计费的云API费用</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50/80 p-4 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                <Cpu className="text-green-600 mr-2" size={20} />
                DeepSeek模型技术特点
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>MoE架构设计，推理效率高，成本可控</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>模型压缩技术，适配边缘计算设备</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>垂直领域微调，停车场专用模型优化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>开源开放，支持二次开发与定制</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // 第五章第二页：实施路径
  {
    id: '5-2',
    chapter: '五',
    title: '技术架构与实施路径',
    subtitle: '项目实施路径',
    content: (
      <div className="mt-6">
        <div className="bg-white/90 rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">DeepSeek智慧停车项目实施四阶段</h3>
          
          <div className="relative mb-10">
            {/* 进度条 */}
            <div className="absolute h-1 bg-gray-200 left-0 right-0 top-10 z-0"></div>
            <div className="absolute h-1 bg-blue-500 left-0 w-3/4 top-10 z-0"></div>
            
            {/* 实施阶段节点 */}
            <div className="flex justify-between items-center relative z-10">
              {/* 阶段1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mb-2 shadow-lg">
                  <span>阶段一</span>
                </div>
                <span className="font-bold text-blue-700">评估规划</span>
                <span className="text-gray-500 text-sm">2-4周</span>
              </div>
              
              {/* 阶段2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mb-2 shadow-lg">
                  <span>阶段二</span>
                </div>
                <span className="font-bold text-blue-700">基础部署</span>
                <span className="text-gray-500 text-sm">4-8周</span>
              </div>
              
              {/* 阶段3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-300 text-white flex items-center justify-center font-bold mb-2 shadow-lg">
                  <span>阶段三</span>
                </div>
                <span className="font-bold text-blue-600">场景开发</span>
                <span className="text-gray-500 text-sm">6-12周</span>
              </div>
              
              {/* 阶段4 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold mb-2 shadow-lg">
                  <span>阶段四</span>
                </div>
                <span className="font-bold text-gray-600">持续优化</span>
                <span className="text-gray-500 text-sm">长期</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50/80 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-bold text-blue-700 mb-2">阶段一：评估规划 (2-4周)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">1.</span>
                  <span className="text-gray-700">停车场现状调研与痛点分析</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">2.</span>
                  <span className="text-gray-700">现有系统与数据评估</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">3.</span>
                  <span className="text-gray-700">DeepSeek模型选型与方案设计</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">4.</span>
                  <span className="text-gray-700">投资回报评估与项目规划</span>
                </li>
              </ul>
              <div className="mt-3 bg-white p-2 rounded text-sm text-gray-600">
                <strong className="text-blue-600">关键产出:</strong> 需求分析报告、系统架构设计、项目实施计划
              </div>
            </div>
            
            <div className="bg-blue-50/80 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-bold text-blue-700 mb-2">阶段二：基础部署 (4-8周)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">1.</span>
                  <span className="text-gray-700">硬件基础设施部署与网络配置</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">2.</span>
                  <span className="text-gray-700">DeepSeek大模型本地化部署</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">3.</span>
                  <span className="text-gray-700">数据连接与标准化处理</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">4.</span>
                  <span className="text-gray-700">基础接口开发与系统集成</span>
                </li>
              </ul>
              <div className="mt-3 bg-white p-2 rounded text-sm text-gray-600">
                <strong className="text-blue-600">关键产出:</strong> 基础平台部署、数据处理流程、系统集成测试报告
              </div>
            </div>
            
            <div className="bg-gray-50/80 p-4 rounded-lg border-l-4 border-blue-300">
              <h4 className="font-bold text-blue-600 mb-2">阶段三：场景开发 (6-12周)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">1.</span>
                  <span className="text-gray-700">停车场专有知识库构建</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">2.</span>
                  <span className="text-gray-700">业务场景模型定制与微调</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">3.</span>
                  <span className="text-gray-700">应用系统开发与集成测试</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">4.</span>
                  <span className="text-gray-700">用户界面开发与体验优化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">5.</span>
                  <span className="text-gray-700">场景试运行与效果验证</span>
                </li>
              </ul>
              <div className="mt-3 bg-white p-2 rounded text-sm text-gray-600">
                <strong className="text-blue-500">关键产出:</strong> 场景应用系统、效果验证报告、培训文档
              </div>
            </div>
            
            <div className="bg-gray-50/80 p-4 rounded-lg border-l-4 border-gray-300">
              <h4 className="font-bold text-gray-600 mb-2">阶段四：持续优化 (长期)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-500 font-bold mr-2">1.</span>
                  <span className="text-gray-700">运行数据收集与模型迭代优化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 font-bold mr-2">2.</span>
                  <span className="text-gray-700">新场景需求分析与开发</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 font-bold mr-2">3.</span>
                  <span className="text-gray-700">性能监控与系统维护</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 font-bold mr-2">4.</span>
                  <span className="text-gray-700">DeepSeek模型版本升级</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 font-bold mr-2">5.</span>
                  <span className="text-gray-700">业务价值评估与持续改进</span>
                </li>
              </ul>
              <div className="mt-3 bg-white p-2 rounded text-sm text-gray-600">
                <strong className="text-gray-600">关键产出:</strong> 优化迭代计划、运营报告、新功能方案
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // 第六章第一页：项目价值与效益分析
  {
    id: '6-1',
    chapter: '六',
    title: '项目价值与效益分析',
    subtitle: '全方位价值提升',
    content: (
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <Activity className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-700">运营效率提升</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">车位利用率</span>
                <span className="text-blue-600 font-bold">+25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">设备维护效率</span>
                <span className="text-blue-600 font-bold">+40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">决策响应时间</span>
                <span className="text-blue-600 font-bold">-60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">数据分析效率</span>
                <span className="text-blue-600 font-bold">+50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <DollarSign className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-green-700">成本节约与收益增长</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">人力成本降低</span>
                <span className="text-green-600 font-bold">-30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">能源使用优化</span>
                <span className="text-green-600 font-bold">-20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">停车收入增长</span>
                <span className="text-green-600 font-bold">+15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">增值服务收入</span>
                <span className="text-green-600 font-bold">+25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-purple-700">用户体验提升</h3>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">寻车时间缩短</span>
                <span className="text-purple-600 font-bold">-70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">结算等待时间</span>
                <span className="text-purple-600 font-bold">-95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">充电便利性</span>
                <span className="text-purple-600 font-bold">+60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">用户满意度</span>
                <span className="text-purple-600 font-bold">+40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <Globe className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-700">社会与环境价值</h3>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">减少碳排放</span>
                <span className="text-red-600 font-bold">-15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">交通拥堵改善</span>
                <span className="text-red-600 font-bold">-20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">城市空间节约</span>
                <span className="text-red-600 font-bold">+25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">新能源推广</span>
                <span className="text-red-600 font-bold">+30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // 第六章第二页：投资回报分析
  {
    id: '6-2',
    chapter: '六',
    title: '项目价值与效益分析',
    subtitle: '投资回报与经济效益',
    content: (
      <div className="mt-6">
        <div className="bg-white/90 rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">投资回报周期分析</h3>
          
          <div className="flex items-center justify-center my-6">
            <div className="relative h-64 w-3/4">
              {/* 这里假装绘制了ROI曲线图 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg"></div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
              <div className="absolute left-0 bottom-0 top-0 w-1 bg-gray-300"></div>
              
              {/* ROI线 */}
              <div className="absolute left-0 bottom-0 h-12 w-12 bg-red-400 rounded-full flex items-center justify-center text-white font-bold">
                投入
              </div>
              
              <div className="absolute left-[30%] bottom-[10%] h-12 w-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                回本点
              </div>
              
              <div className="absolute right-6 top-6 h-12 w-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">
                盈利
              </div>
              
              {/* 曲线 */}
              <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 C10,95 20,80 30,70 C40,60 60,40 70,30 C80,20 90,10 100,0" stroke="blue" strokeWidth="2" fill="none" />
              </svg>
              
              {/* 标注 */}
              <div className="absolute left-[30%] bottom-[20%] transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs">
                14-18个月回本点
              </div>
              
              <div className="absolute right-6 top-16 bg-white px-2 py-1 rounded shadow-sm text-xs">
                36个月ROI：280%
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-blue-700 font-bold text-xl mb-1">18个月</div>
              <div className="text-gray-600 text-sm">投资回收期</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-green-700 font-bold text-xl mb-1">3.2倍</div>
              <div className="text-gray-600 text-sm">5年投资回报率</div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center">
              <div className="text-purple-700 font-bold text-xl mb-1">25%</div>
              <div className="text-gray-600 text-sm">年度收益增长</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg text-center">
              <div className="text-red-700 font-bold text-xl mb-1">30%</div>
              <div className="text-gray-600 text-sm">运营成本降低</div>
            </div>
          </div>
          
          <div className="bg-gray-50/80 p-4 rounded-lg mb-6">
            <h4 className="font-bold text-gray-700 mb-3">投资回报构成分析</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-600 mb-2 text-sm">收入提升项</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">停车费收入增长 (+15%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">充电服务收入 (+30%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">增值服务收入 (+25%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">车位周转率提升 (+40%)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-600 mb-2 text-sm">成本节约项</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">人力成本降低 (-30%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">能源消耗优化 (-20%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">设备维护成本 (-25%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">运营效率提升 (-35%)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50/90 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-700 mb-2">投资建议</h4>
            <p className="text-gray-700 text-sm mb-3">
              基于投资回报分析，建议分阶段实施DeepSeek智慧停车解决方案，先从核心场景切入，快速实现价值，再逐步扩展完整功能体系。
            </p>
            <ul className="text-sm space-y-1">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">1.</span>
                <span className="text-gray-600">阶段一：基础智能决策系统部署，18个月内实现投资回收</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">2.</span>
                <span className="text-gray-600">阶段二：扩展运营管理平台，提升运营效率，降低成本</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">3.</span>
                <span className="text-gray-600">阶段三：完善多模态交互系统，创造差异化竞争优势</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
];

// 幻灯片组件
const Slide = ({ data }) => {
  return (
    <div className="h-full p-8 rounded-xl" style={gradientBg}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {data.chapter}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
          {data.subtitle && <p className="text-gray-600">{data.subtitle}</p>}
        </div>
      </div>
      
      {data.content}
    </div>
  );
};

// 幻灯片控制组件
const SlideControls = ({ currentSlide, totalSlides, handlePrev, handleNext }) => (
  <div className="flex justify-between items-center mt-4">
    <button 
      onClick={handlePrev} 
      disabled={currentSlide === 0}
      className={`flex items-center px-4 py-2 rounded ${currentSlide === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
    >
      <ChevronLeft size={20} className="mr-1" />
      上一页
    </button>
    <div className="text-lg font-medium">
      {currentSlide + 1} / {totalSlides}
    </div>
    <button 
      onClick={handleNext} 
      disabled={currentSlide === totalSlides - 1}
      className={`flex items-center px-4 py-2 rounded ${currentSlide === totalSlides - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
    >
      下一页
      <ChevronRight size={20} className="ml-1" />
    </button>
  </div>
);

// 主要演示组件
const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  // 键盘快捷键处理
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="aspect-w-16 aspect-h-9 bg-white rounded-xl shadow-xl mb-4 overflow-hidden">
        <div className="h-full">
          <Slide data={slides[currentSlide]} />
        </div>
      </div>
      <SlideControls 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Presentation;

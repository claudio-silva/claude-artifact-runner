import React, { useState } from 'react';

const ZhihuaSVGDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [processingStatus, setProcessingStatus] = useState('idle');
  const [textInput, setTextInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [generatedSVG, setGeneratedSVG] = useState(null);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim() === '') return;
    
    // 模拟处理过程
    setProcessingStatus('processing');
    setTimeout(() => {
      setProcessingStatus('completed');
      setShowResult(true);
      setGeneratedSVG(getRandomSVG());
    }, 2000);
  };
  
  const getRandomSVG = () => {
    // 模拟生成的SVG - 这里使用随机选择的预设SVG
    const svgs = [
      // 网络拓扑图
      {
        type: "网络拓扑图",
        complexity: "中等",
        elements: 12,
        svg: `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#f8f9fa" rx="10" ry="10"/>
          <text x="300" y="30" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">核心交换网络拓扑图</text>
          
          <!-- 核心交换机 -->
          <rect x="270" y="80" width="60" height="30" rx="5" fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
          <text x="300" y="100" font-family="Arial" font-size="12" text-anchor="middle" fill="white">核心交换机 A</text>
          
          <rect x="270" y="130" width="60" height="30" rx="5" fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
          <text x="300" y="150" font-family="Arial" font-size="12" text-anchor="middle" fill="white">核心交换机 B</text>
          
          <!-- 汇聚交换机 -->
          <rect x="150" y="200" width="60" height="30" rx="5" fill="#10b981" stroke="#059669" stroke-width="2"/>
          <text x="180" y="220" font-family="Arial" font-size="12" text-anchor="middle" fill="white">汇聚交换机 1</text>
          
          <rect x="390" y="200" width="60" height="30" rx="5" fill="#10b981" stroke="#059669" stroke-width="2"/>
          <text x="420" y="220" font-family="Arial" font-size="12" text-anchor="middle" fill="white">汇聚交换机 2</text>
          
          <!-- 接入交换机 -->
          <rect x="90" y="280" width="60" height="30" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="120" y="300" font-family="Arial" font-size="12" text-anchor="middle" fill="white">接入交换机 1</text>
          
          <rect x="210" y="280" width="60" height="30" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="240" y="300" font-family="Arial" font-size="12" text-anchor="middle" fill="white">接入交换机 2</text>
          
          <rect x="330" y="280" width="60" height="30" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="360" y="300" font-family="Arial" font-size="12" text-anchor="middle" fill="white">接入交换机 3</text>
          
          <rect x="450" y="280" width="60" height="30" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="480" y="300" font-family="Arial" font-size="12" text-anchor="middle" fill="white">接入交换机 4</text>
          
          <!-- 防火墙 -->
          <rect x="270" y="30" width="60" height="30" rx="5" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
          <text x="300" y="50" font-family="Arial" font-size="12" text-anchor="middle" fill="white">防火墙</text>
          
          <!-- 连接线 -->
          <line x1="300" y1="60" x2="300" y2="80" stroke="#6b7280" stroke-width="2"/>
          <line x1="300" y1="110" x2="300" y2="130" stroke="#6b7280" stroke-width="2"/>
          
          <line x1="270" y1="145" x2="180" y2="200" stroke="#6b7280" stroke-width="2"/>
          <line x1="330" y1="145" x2="420" y2="200" stroke="#6b7280" stroke-width="2"/>
          
          <line x1="180" y1="230" x2="120" y2="280" stroke="#6b7280" stroke-width="2"/>
          <line x1="180" y1="230" x2="240" y2="280" stroke="#6b7280" stroke-width="2"/>
          <line x1="420" y1="230" x2="360" y2="280" stroke="#6b7280" stroke-width="2"/>
          <line x1="420" y1="230" x2="480" y2="280" stroke="#6b7280" stroke-width="2"/>
          
          <!-- 图例 -->
          <rect x="480" y="30" width="15" height="15" fill="#3b82f6" stroke="#2563eb" stroke-width="1"/>
          <text x="500" y="42" font-family="Arial" font-size="10" fill="#333">核心层</text>
          
          <rect x="480" y="50" width="15" height="15" fill="#10b981" stroke="#059669" stroke-width="1"/>
          <text x="500" y="62" font-family="Arial" font-size="10" fill="#333">汇聚层</text>
          
          <rect x="480" y="70" width="15" height="15" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
          <text x="500" y="82" font-family="Arial" font-size="10" fill="#333">接入层</text>
          
          <rect x="480" y="90" width="15" height="15" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
          <text x="500" y="102" font-family="Arial" font-size="10" fill="#333">安全设备</text>
        </svg>`
      },
      // 系统架构图
      {
        type: "系统架构图",
        complexity: "高",
        elements: 18,
        svg: `<svg width="600" height="450" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="450" fill="#f8f9fa" rx="10" ry="10"/>
          <text x="300" y="30" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">智慧城市平台系统架构</text>
          
          <!-- 系统层级框架 -->
          <rect x="50" y="60" width="500" height="70" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
          <text x="300" y="85" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">应用层</text>
          <text x="300" y="110" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">城市大脑 | 指挥中心 | 治理平台 | 公众服务 | 产业应用</text>
          
          <rect x="50" y="140" width="500" height="70" rx="5" fill="#e0f2fe" stroke="#3b82f6" stroke-width="1"/>
          <text x="300" y="165" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">平台层</text>
          <text x="300" y="190" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">数据中台 | 业务中台 | AI中台 | 开放平台 | 安全体系</text>
          
          <rect x="50" y="220" width="500" height="70" rx="5" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
          <text x="300" y="245" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">数据层</text>
          <text x="300" y="270" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">数据采集 | 数据治理 | 数据处理 | 数据存储 | 数据共享</text>
          
          <rect x="50" y="300" width="500" height="70" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
          <text x="300" y="325" font-family="Arial" font-size="14" text-anchor="middle" fill="#333" font-weight="bold">基础设施层</text>
          <text x="300" y="350" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">云计算 | 边缘计算 | 物联网 | 网络通信 | 数据中心</text>
          
          <!-- 垂直贯穿的安全体系 -->
          <rect x="560" y="60" width="25" height="310" rx="5" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1"/>
          <text x="572" y="215" font-family="Arial" font-size="14" text-anchor="middle" fill="#8b5cf6" font-weight="bold" transform="rotate(90, 572, 215)">安全体系</text>
          
          <!-- 垂直贯穿的标准规范 -->
          <rect x="15" y="60" width="25" height="310" rx="5" fill="#fce7f3" stroke="#ec4899" stroke-width="1"/>
          <text x="27" y="215" font-family="Arial" font-size="14" text-anchor="middle" fill="#ec4899" font-weight="bold" transform="rotate(-90, 27, 215)">标准规范</text>
          
          <!-- 连接线 -->
          <path d="M300,130 L300,140" stroke="#6b7280" stroke-width="2"/>
          <path d="M300,210 L300,220" stroke="#6b7280" stroke-width="2"/>
          <path d="M300,290 L300,300" stroke="#6b7280" stroke-width="2"/>
          
          <!-- 图例 -->
          <rect x="150" y="390" width="15" height="15" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
          <text x="170" y="402" font-family="Arial" font-size="10" fill="#333">应用层</text>
          
          <rect x="230" y="390" width="15" height="15" fill="#e0f2fe" stroke="#3b82f6" stroke-width="1"/>
          <text x="250" y="402" font-family="Arial" font-size="10" fill="#333">平台层</text>
          
          <rect x="310" y="390" width="15" height="15" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
          <text x="330" y="402" font-family="Arial" font-size="10" fill="#333">数据层</text>
          
          <rect x="390" y="390" width="15" height="15" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
          <text x="410" y="402" font-family="Arial" font-size="10" fill="#333">基础设施层</text>
        </svg>`
      },
      // 流程图
      {
        type: "流程图",
        complexity: "中等",
        elements: 10,
        svg: `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#f8f9fa" rx="10" ry="10"/>
          <text x="300" y="30" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">客户服务流程图</text>
          
          <!-- 开始节点 -->
          <ellipse cx="300" cy="70" rx="50" ry="25" fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
          <text x="300" y="75" font-family="Arial" font-size="12" text-anchor="middle" fill="white">开始</text>
          
          <!-- 流程节点 -->
          <rect x="250" y="120" width="100" height="40" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="300" y="145" font-family="Arial" font-size="12" text-anchor="middle" fill="white">客户请求</text>
          
          <rect x="250" y="190" width="100" height="40" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="300" y="215" font-family="Arial" font-size="12" text-anchor="middle" fill="white">需求分析</text>
          
          <polygon points="300,260 330,290 300,320 270,290" fill="#10b981" stroke="#059669" stroke-width="2"/>
          <text x="300" y="295" font-family="Arial" font-size="12" text-anchor="middle" fill="white">是否可行</text>
          
          <rect x="150" y="270" width="100" height="40" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="200" y="295" font-family="Arial" font-size="12" text-anchor="middle" fill="white">提供替代方案</text>
          
          <rect x="250" y="340" width="100" height="40" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="300" y="365" font-family="Arial" font-size="12" text-anchor="middle" fill="white">执行服务</text>
          
          <!-- 连接线和箭头 -->
          <path d="M300,95 L300,120" stroke="#6b7280" stroke-width="2"/>
          <polygon points="300,120 295,110 305,110" fill="#6b7280"/>
          
          <path d="M300,160 L300,190" stroke="#6b7280" stroke-width="2"/>
          <polygon points="300,190 295,180 305,180" fill="#6b7280"/>
          
          <path d="M300,230 L300,260" stroke="#6b7280" stroke-width="2"/>
          <polygon points="300,260 295,250 305,250" fill="#6b7280"/>
          
          <path d="M270,290 L250,290" stroke="#6b7280" stroke-width="2"/>
          <polygon points="250,290 260,285 260,295" fill="#6b7280"/>
          <text x="260" y="280" font-family="Arial" font-size="10" fill="#6b7280">否</text>
          
          <path d="M300,320 L300,340" stroke="#6b7280" stroke-width="2"/>
          <polygon points="300,340 295,330 305,330" fill="#6b7280"/>
          <text x="310" y="330" font-family="Arial" font-size="10" fill="#6b7280">是</text>
          
          <path d="M150,290 L130,290 L130,365 L250,365" stroke="#6b7280" stroke-width="2"/>
          <polygon points="250,365 240,360 240,370" fill="#6b7280"/>
          
          <!-- 图例 -->
          <ellipse cx="430" cy="70" rx="15" ry="10" fill="#3b82f6" stroke="#2563eb" stroke-width="1"/>
          <text x="460" y="73" font-family="Arial" font-size="10" fill="#333">开始/结束</text>
          
          <rect x="430" y="90" width="20" height="15" rx="2" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
          <text x="465" y="102" font-family="Arial" font-size="10" fill="#333">处理步骤</text>
          
          <polygon points="440,120 450,130 440,140 430,130" fill="#10b981" stroke="#059669" stroke-width="1"/>
          <text x="465" y="130" font-family="Arial" font-size="10" fill="#333">判断</text>
        </svg>`
      },
      // 泳道图
      {
        type: "泳道图",
        complexity: "高",
        elements: 15,
        svg: `<svg width="600" height="500" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="500" fill="#f8f9fa" rx="10" ry="10"/>
          <text x="300" y="30" font-family="Arial" font-size="16" text-anchor="middle" fill="#333" font-weight="bold">订单处理泳道图</text>
          
          <!-- 泳道标题 -->
          <rect x="50" y="50" width="100" height="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>
          <text x="100" y="70" font-family="Arial" font-size="12" text-anchor="middle" fill="#1e40af">客户</text>
          
          <rect x="50" y="180" width="100" height="30" fill="#c7d2fe" stroke="#6366f1" stroke-width="1"/>
          <text x="100" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#3730a3">销售</text>
          
          <rect x="50" y="310" width="100" height="30" fill="#ddd6fe" stroke="#8b5cf6" stroke-width="1"/>
          <text x="100" y="330" font-family="Arial" font-size="12" text-anchor="middle" fill="#5b21b6">仓库</text>
          
          <rect x="50" y="440" width="100" height="30" fill="#fbcfe8" stroke="#ec4899" stroke-width="1"/>
          <text x="100" y="460" font-family="Arial" font-size="12" text-anchor="middle" fill="#9d174d">物流</text>
          
          <!-- 泳道分隔线 -->
          <line x1="50" y1="80" x2="550" y2="80" stroke="#3b82f6" stroke-width="1"/>
          <line x1="50" y1="210" x2="550" y2="210" stroke="#6366f1" stroke-width="1"/>
          <line x1="50" y1="340" x2="550" y2="340" stroke="#8b5cf6" stroke-width="1"/>
          <line x1="50" y1="470" x2="550" y2="470" stroke="#ec4899" stroke-width="1"/>
          
          <line x1="50" y1="50" x2="50" y2="470" stroke="#6b7280" stroke-width="1"/>
          <line x1="150" y1="50" x2="150" y2="470" stroke="#6b7280" stroke-width="1"/>
          <line x1="550" y1="50" x2="550" y2="470" stroke="#6b7280" stroke-width="1"/>
          
          <!-- 客户泳道流程 -->
          <ellipse cx="200" cy="70" rx="30" ry="15" fill="#3b82f6" stroke="#2563eb" stroke-width="1"/>
          <text x="200" y="74" font-family="Arial" font-size="10" text-anchor="middle" fill="white">开始</text>
          
          <rect x="170" y="100" width="60" height="30" rx="3" fill="#93c5fd" stroke="#3b82f6" stroke-width="1"/>
          <text x="200" y="120" font-family="Arial" font-size="10" text-anchor="middle" fill="#1e3a8a">提交订单</text>
          
          <rect x="170" y="140" width="60" height="30" rx="3" fill="#93c5fd" stroke="#3b82f6" stroke-width="1"/>
          <text x="200" y="160" font-family="Arial" font-size="10" text-anchor="middle" fill="#1e3a8a">确认支付</text>
          
          <!-- 销售泳道流程 -->
          <rect x="250" y="160" width="60" height="30" rx="3" fill="#a5b4fc" stroke="#6366f1" stroke-width="1"/>
          <text x="280" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="#312e81">接收订单</text>
          
          <rect x="250" y="220" width="60" height="30" rx="3" fill="#a5b4fc" stroke="#6366f1" stroke-width="1"/>
          <text x="280" y="240" font-family="Arial" font-size="10" text-anchor="middle" fill="#312e81">处理订单</text>
          
          <polygon points="280,270 295,290 280,310 265,290" fill="#818cf8" stroke="#6366f1" stroke-width="1"/>
          <text x="280" y="290" font-family="Arial" font-size="8" text-anchor="middle" fill="#312e81">库存?</text>
          
          <!-- 仓库泳道流程 -->
          <rect x="330" y="275" width="60" height="30" rx="3" fill="#c4b5fd" stroke="#8b5cf6" stroke-width="1"/>
          <text x="360" y="295" font-family="Arial" font-size="10" text-anchor="middle" fill="#4c1d95">查询库存</text>
          
          <rect x="330" y="350" width="60" height="30" rx="3" fill="#c4b5fd" stroke="#8b5cf6" stroke-width="1"/>
          <text x="360" y="370" font-family="Arial" font-size="10" text-anchor="middle" fill="#4c1d95">打包订单</text>
          
          <!-- 物流泳道流程 -->
          <rect x="410" y="390" width="60" height="30" rx="3" fill="#f9a8d4" stroke="#ec4899" stroke-width="1"/>
          <text x="440" y="410" font-family="Arial" font-size="10" text-anchor="middle" fill="#831843">安排配送</text>
          
          <rect x="410" y="430" width="60" height="30" rx="3" fill="#f9a8d4" stroke="#ec4899" stroke-width="1"/>
          <text x="440" y="450" font-family="Arial" font-size="10" text-anchor="middle" fill="#831843">发货</text>
          
          <ellipse cx="500" cy="450" rx="30" ry="15" fill="#ec4899" stroke="#be185d" stroke-width="1"/>
          <text x="500" y="454" font-family="Arial" font-size="10" text-anchor="middle" fill="white">结束</text>
          
          <!-- 箭头连接 -->
          <path d="M200,85 L200,100" stroke="#6b7280" stroke-width="1"/>
          <path d="M200,130 L200,140" stroke="#6b7280" stroke-width="1"/>
          <path d="M230,155 L250,160" stroke="#6b7280" stroke-width="1"/>
          <path d="M280,190 L280,220" stroke="#6b7280" stroke-width="1"/>
          <path d="M280,250 L280,270" stroke="#6b7280" stroke-width="1"/>
          <path d="M295,290 L330,290" stroke="#6b7280" stroke-width="1"/>
          <path d="M390,290 L410,290 L410,390" stroke="#6b7280" stroke-width="1"/>
          <path d="M280,310 L280,360 L330,360" stroke="#6b7280" stroke-width="1"/>
          <path d="M390,360 L400,360 L400,390" stroke="#6b7280" stroke-width="1"/>
          <path d="M440,420 L440,430" stroke="#6b7280" stroke-width="1"/>
          <path d="M470,450 L500,450" stroke="#6b7280" stroke-width="1"/>
          
          <!-- 文字标注 -->
          <text x="315" y="270" font-family="Arial" font-size="8" fill="#6b7280">是</text>
          <text x="280" y="330" font-family="Arial" font-size="8" fill="#6b7280">否</text>
        </svg>`
      }
    ];
    
    return svgs[Math.floor(Math.random() * svgs.length)];
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 顶部导航栏 */}
      <nav className="bg-indigo-700 text-white px-6 py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 21.832c4.587.38 7.602-6.45 12.326-9.673-2.591-.196-4.152-.3-7.065 1.211.266-1.363 2.556-9.737 10.658-11.787-1.594-.346-2.363-.292-3.353.097C18.755.237 15.87-.4 13.04.398c-2.03.562-3.175 1.53-4.188 2.467C7.724.859 7.13.683 6.52.683c-.595 0-1.174.176-1.667.516.255-.102.515-.29.996-.092-.5.09-.995.203-1.5.334" />
            </svg>
            <span className="text-xl font-bold">《智绘》图形智能生成平台</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-indigo-800 rounded-full text-sm">中通信息/南方设计</span>
            <div className="w-8 h-8 bg-white text-indigo-700 rounded-full flex items-center justify-center font-bold">
              洪
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 侧边栏导航 */}
          <div className="lg:w-64 bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col space-y-1">
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span>系统概览</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'text2svg' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('text2svg')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>文本绘图</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'elements' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('elements')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <span>元素库</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'editor' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('editor')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>图形编辑</span>
              </button>
              <button 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === 'history' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('history')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>历史项目</span>
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">生成统计</h3>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">本月已生成</span>
                  <span className="text-sm font-semibold text-green-600">187 张图形</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '62%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-3 mb-1">
                  <span className="text-sm">API调用次数</span>
                  <span className="text-sm font-semibold text-blue-600">892 次</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mt-3 mb-1">
                  <span className="text-sm">导出图形数量</span>
                  <span className="text-sm font-semibold text-purple-600">156 张</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '52%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 主要内容 */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">《智绘》系统概览</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">设计效率提升</h3>
                        <p className="text-3xl font-bold text-purple-700">85%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">标书图形数量提升</h3>
                        <p className="text-3xl font-bold text-blue-700">120%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">可视化质量改善</h3>
                        <p className="text-3xl font-bold text-green-700">95%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">图形智能生成流程</h3>
                  <div className="relative">
                    <div className="absolute left-4 inset-y-0 w-0.5 bg-gray-200"></div>
                    
                    {[
                      {
                        title: "文本描述输入",
                        desc: "输入详细的图形需求描述，指定图形类型、主要元素和结构关系等",
                        time: "2分钟"
                      },
                      {
                        title: "AI理解与分析",
                        desc: "DeepSeek大模型分析文本内容，识别关键图形元素与结构关系",
                        time: "10秒" 
                      },
                      {
                        title: "专业元素匹配",
                        desc: "从电信行业专用图形元素库中匹配合适的图标、组件和模板",
                        time: "15秒"
                      },
                      {
                        title: "图形布局生成",
                        desc: "智能布局引擎根据描述和设计规范，生成初始图形结构",
                        time: "20秒"
                      },
                      {
                        title: "元素关系构建",
                        desc: "分析并构建元素之间的连接关系，生成连接线、箭头和标注",
                        time: "15秒"
                      },
                      {
                        title: "生成与优化",
                        desc: "完成初始图形生成，应用智能美化与排版优化算法",
                        time: "10秒"
                      }
                    ].map((step, index) => (
                      <div key={index} className="relative pl-10 pb-8">
                        <div className={`absolute left-2 rounded-full w-6 h-6 flex items-center justify-center ${index < 3 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                          {index < 3 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-md font-semibold">{step.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                          </div>
                          <span className="text-sm font-medium bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center text-green-600 font-medium mt-4">
                      总耗时：约2分钟（传统方式需要数小时）
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">支持的图形类型</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-indigo-50 p-3 rounded-lg flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span>网络拓扑图</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                        <span>系统架构图</span>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                        <span>流程图</span>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        <span>泳道图</span>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-lg flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                        <span>数据图表</span>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>组织架构图</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">行业专用元素库</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>网络设备图标库（交换机、路由器、防火墙等 100+）</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>系统架构组件库（服务器、存储、云服务等 80+）</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>电信业务图标库（5G、物联网、云计算等 60+）</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>流程图标准元素库（更符合电信行业规范）</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>行业标准配色方案与设计模板</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">开始使用</h3>
                  
                  <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      <div>
                        <h4 className="text-lg font-semibold text-indigo-800">立即体验智能图形生成</h4>
                        <p className="text-sm text-indigo-600">输入文本描述，一键生成专业图形，提升工作效率</p>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center"
                      onClick={() => setActiveTab('text2svg')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      开始创建图形
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'text2svg' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">文本转图形生成</h2>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                  <form onSubmit={handleTextSubmit}>
                    <div className="mb-4">
                      <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
                        描述你想要的图形
                      </label>
                      <textarea 
                        id="text-input" 
                        className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="例如：设计一个包含两台核心交换机、四台接入交换机和一台防火墙的网络拓扑图"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">选择图形类型：</p>
                      <div className="flex flex-wrap gap-2">
                        {['网络拓扑图', '系统架构图', '流程图', '泳道图', '数据图表', '组织架构图'].map((type) => (
                          <span key={type} className="px-3 py-1 bg-white border border-indigo-200 text-indigo-700 rounded-full text-sm hover:bg-indigo-50 cursor-pointer">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button 
                        type="submit"
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition flex items-center justify-center"
                        disabled={processingStatus === 'processing'}
                      >
                        {processingStatus === 'processing' ? (
                          <>
                            <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent mr-2"></div>
                            生成中...
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            生成图形
                          </>
                        )}
                      </button>
                      <button 
                        type="button"
                        className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                        模板库
                      </button>
                    </div>
                  </form>
                  
                  {processingStatus === 'processing' && (
                    <div className="mt-6 text-center">
                      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
                      <p className="mt-4 text-sm text-gray-600">DeepSeek大模型正在分析描述并生成图形，请稍候...</p>
                      <div className="mt-4 bg-white border border-gray-200 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-2">处理步骤：</p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs">分析文本描述</span>
                          </div>
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs">识别图形类型和元素</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-4 w-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                            <span className="text-xs">构建图形结构...</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <div className="h-4 w-4 border border-dashed border-gray-300 rounded-full mr-2"></div>
                            <span className="text-xs">应用样式与布局</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <div className="h-4 w-4 border border-dashed border-gray-300 rounded-full mr-2"></div>
                            <span className="text-xs">优化与导出</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {showResult && generatedSVG && (
                    <div className="mt-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium text-green-700">图形生成成功！</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">AI已根据您的描述生成了{generatedSVG.type}，您可以点击下方按钮进行编辑或导出</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                        <div dangerouslySetInnerHTML={{ __html: generatedSVG.svg }}></div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-gray-50 rounded-lg">
                        <div className="mb-4 md:mb-0">
                          <h4 className="text-sm font-medium text-gray-700 mb-1">图形信息</h4>
                          <div className="flex space-x-3 text-xs text-gray-500">
                            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">{generatedSVG.type}</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">复杂度：{generatedSVG.complexity}</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">{generatedSVG.elements}个元素</span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button 
                            className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm flex items-center"
                            onClick={() => setActiveTab('editor')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            编辑
                          </button>
                          <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            导出
                          </button>
                          <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                            保存项目
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">图形模板</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                      <div className="p-3 bg-gray-50 border-b border-gray-200">
                        <h4 className="font-medium">三层网络拓扑图</h4>
                      </div>
                      <div className="p-4">
                        <svg width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="120" fill="#f8f9fa" rx="5" ry="5"/>
                          
                          {/* 核心层 */}
                          <rect x="100" y="10" width="40" height="20" rx="3" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
                          <rect x="150" y="10" width="40" height="20" rx="3" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
                          
                          {/* 汇聚层 */}
                          <rect x="75" y="50" width="40" height="20" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1"/>
                          <rect x="175" y="50" width="40" height="20" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1"/>
                          
                          {/* 接入层 */}
                          <rect x="40" y="90" width="30" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                          <rect x="80" y="90" width="30" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                          <rect x="160" y="90" width="30" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                          <rect x="200" y="90" width="30" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                          
                          {/* 连接线 */}
                          <line x1="120" y1="30" x2="95" y2="50" stroke="#6b7280" strokeWidth="1"/>
                          <line x1="170" y1="30" x2="195" y2="50" stroke="#6b7280" strokeWidth="1"/>
                          <line x1="95" y1="70" x2="55" y2="90" stroke="#6b7280" strokeWidth="1"/>
                          <line x1="95" y1="70" x2="95" y2="90" stroke="#6b7280" strokeWidth="1"/>
                          <line x1="195" y1="70" x2="175" y2="90" stroke="#6b7280" strokeWidth="1"/>
                          <line x1="195" y1="70" x2="215" y2="90" stroke="#6b7280" strokeWidth="1"/>
                        </svg>
                      </div>
                      <div className="px-4 py-2 border-t border-gray-200 flex justify-between items-center">
                        <div className="flex space-x-1">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">网络拓扑</span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">三层架构</span>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm">使用</button>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                      <div className="p-3 bg-gray-50 border-b border-gray-200">
                        <h4 className="font-medium">四层系统架构图</h4>
                      </div>
                      <div className="p-4">
                        <svg width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="120" fill="#f8f9fa" rx="5" ry="5"/>
                          
                          {/* 系统层级框架 */}
                          <rect x="10" y="10" width="260" height="20" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="1"/>
                          <text x="140" y="24" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">应用层</text>
                          
                          <rect x="10" y="40" width="260" height="20" rx="3" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="1"/>
                          <text x="140" y="54" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">服务层</text>
                          
                          <rect x="10" y="70" width="260" height="20" rx="3" fill="#d1fae5" stroke="#10b981" strokeWidth="1"/>
                          <text x="140" y="84" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">数据层</text>
                          
                          <rect x="10" y="100" width="260" height="10" rx="3" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
                          <text x="140" y="108" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">基础设施层</text>
                        </svg>
                      </div>
                      <div className="px-4 py-2 border-t border-gray-200 flex justify-between items-center">
                        <div className="flex space-x-1">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">系统架构</span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">分层</span>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm">使用</button>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                      <div className="p-3 bg-gray-50 border-b border-gray-200">
                        <h4 className="font-medium">业务流程图</h4>
                      </div>
                      <div className="p-4">
                        <svg width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="120" fill="#f8f9fa" rx="5" ry="5"/>
                          
                          {/* 开始节点 */}
                          <ellipse cx="40" cy="30" rx="25" ry="15" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
                          <text x="40" y="33" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="white">开始</text>
                          
                          {/* 流程节点 */}
                          <rect x="90" y="20" width="50" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                          <text x="115" y="33" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="white">处理</text>
                          
                          <polygon points="190,30 205,40 190,50 175,40" fill="#10b981" stroke="#059669" strokeWidth="1"/>
                          <text x="190" y="43" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="white">判断</text>
                          
                          <rect x="90" y="70" width="50" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                          <text x="115" y="83" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="white">处理</text>
                          
                          <ellipse cx="240" cy="80" rx="25" ry="15" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
                          <text x="240" y="83" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="white">结束</text>
                          
                          {/* 连接线 */}
                          <line x1="65" y1="30" x2="90" y2="30" stroke="#6b7280" strokeWidth="1"/>
                          <polygon points="90,30 85,28 85,32" fill="#6b7280"/>
                          
                          <line x1="140" y1="30" x2="175" y2="40" stroke="#6b7280" strokeWidth="1"/>
                          <polygon points="175,40 168,37 170,43" fill="#6b7280"/>
                          
                          <line x1="190" y1="50" x2="115" y2="70" stroke="#6b7280" strokeWidth="1"/>
                          <polygon points="115,70 120,65 123,70" fill="#6b7280"/>
                          
                          <line x1="140" y1="80" x2="215" y2="80" stroke="#6b7280" strokeWidth="1"/>
                          <polygon points="215,80 210,78 210,82" fill="#6b7280"/>
                        </svg>
                      </div>
                      <div className="px-4 py-2 border-t border-gray-200 flex justify-between items-center">
                        <div className="flex space-x-1">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">流程图</span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">业务</span>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm">使用</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <button className="px-4 py-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      查看更多模板
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'elements' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">专业图形元素库</h2>
                
                <div className="flex border-b border-gray-200 mb-6">
                  <button 
                    className={`px-4 py-2 border-b-2 font-medium text-sm ${selectedTemplate === 'network' || !selectedTemplate ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setSelectedTemplate('network')}
                  >
                    网络设备
                  </button>
                  <button 
                    className={`px-4 py-2 border-b-2 font-medium text-sm ${selectedTemplate === 'system' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setSelectedTemplate('system')}
                  >
                    系统架构
                  </button>
                  <button 
                    className={`px-4 py-2 border-b-2 font-medium text-sm ${selectedTemplate === 'flow' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setSelectedTemplate('flow')}
                  >
                    流程图
                  </button>
                  <button 
                    className={`px-4 py-2 border-b-2 font-medium text-sm ${selectedTemplate === 'telecom' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setSelectedTemplate('telecom')}
                  >
                    电信业务
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="搜索元素..."
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <button className="absolute right-3 top-2 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                  {Array.from({ length: 18 }).map((_, index) => (
                    <div 
                      key={index} 
                      className={`border rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition ${selectedElement === index ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                      onClick={() => setSelectedElement(index)}
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                        {(index % 6 === 0) && (
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="16" fill="#3b82f6" rx="2" />
                            <rect y="16" width="48" height="16" fill="#2563eb" rx="2" />
                            <rect y="32" width="48" height="16" fill="#1d4ed8" rx="2" />
                          </svg>
                        )}
                        {(index % 6 === 1) && (
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#e0f2fe" rx="3" />
                            <rect x="8" y="8" width="32" height="32" fill="#3b82f6" rx="3" />
                            <rect x="16" y="16" width="16" height="16" fill="#1d4ed8" rx="3" />
                          </svg>
                        )}
                        {(index % 6 === 2) && (
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#f59e0b" rx="24" />
                            <rect x="8" y="8" width="32" height="32" fill="#fef3c7" rx="16" />
                            <rect x="16" y="16" width="16" height="16" fill="#f59e0b" rx="8" />
                          </svg>
                        )}
                        {(index % 6 === 3) && (
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="24,0 48,24 24,48 0,24" fill="#10b981" />
                            <polygon points="24,8 40,24 24,40 8,24" fill="#d1fae5" />
                            <polygon points="24,16 32,24 24,32 16,24" fill="#10b981" />
                          </svg>
                        )}
                        {(index % 6 === 4) && (
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="#f43f5e" rx="3" />
                            <rect x="4" y="4" width="40" height="16" fill="#fff" rx="2" />
                            <rect x="4" y="28" width="40" height="16" fill="#fff" rx="2" />
                          </svg>
                        )}
                        {(index % 6 === 5) && (
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="24" cy="24" rx="24" ry="16" fill="#8b5cf6" />
                            <ellipse cx="24" cy="24" rx="16" ry="10" fill="#ede9fe" />
                            <ellipse cx="24" cy="24" rx="8" ry="5" fill="#8b5cf6" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs text-center">元素 {index + 1}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm">
                    上传自定义元素
                  </button>
                  <div className="flex space-x-1">
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">2</button>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm">3</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">4</button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'editor' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">图形编辑器</h2>
                
                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <div className="mb-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                      </button>
                      <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                      <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </button>
                      <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                      <select className="p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm text-gray-600">
                        <option>100%</option>
                        <option>75%</option>
                        <option>50%</option>
                        <option>125%</option>
                        <option>150%</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4 border border-gray-200 rounded-lg p-4 h-96 bg-gray-50 flex items-center justify-center">
                    {generatedSVG ? (
                      <div dangerouslySetInnerHTML={{ __html: generatedSVG.svg }}></div>
                    ) : (
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-2 text-gray-500">请先生成或选择一张图形</p>
                        <button 
                          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                          onClick={() => setActiveTab('text2svg')}
                        >
                          创建新图形
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      编辑元素
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      添加元素
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                      布局选项
                    </button>
                    <div className="flex-1"></div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                      保存
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <h3 className="text-lg font-semibold mb-4">属性编辑器</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-500 text-center">请先选择一个图形元素进行编辑</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">图层管理</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-64 overflow-y-auto">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded">
                          <span className="text-sm">图层 1</span>
                          <div className="flex items-center space-x-1">
                            <button className="p-1 text-gray-500 hover:text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button className="p-1 text-gray-500 hover:text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                        </li>
                        <li className="flex items-center justify-between p-2 bg-indigo-50 border border-indigo-200 rounded">
                          <span className="text-sm font-medium text-indigo-700">图层 2</span>
                          <div className="flex items-center space-x-1">
                            <button className="p-1 text-indigo-500 hover:text-indigo-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button className="p-1 text-indigo-500 hover:text-indigo-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </button>
                          </div>
                        </li>
                        {Array.from({ length: 3 }).map((_, index) => (
                          <li key={index} className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded">
                            <span className="text-sm">图层 {index + 3}</span>
                            <div className="flex items-center space-x-1">
                              <button className="p-1 text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </button>
                              <button className="p-1 text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'history' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">历史项目</h2>
                
                <div className="mb-6 flex justify-between items-center">
                  <div className="relative w-64">
                    <input 
                      type="text" 
                      className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="搜索项目..."
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  <div className="flex space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>全部类型</option>
                      <option>网络拓扑图</option>
                      <option>系统架构图</option>
                      <option>流程图</option>
                      <option>泳道图</option>
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>最近修改</option>
                      <option>最近创建</option>
                      <option>名称升序</option>
                      <option>名称降序</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                      <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                        <h4 className="font-medium">项目 {index + 1}</h4>
                        <div className="flex space-x-1">
                          <button className="p-1 text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button className="p-1 text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 h-48 flex items-center justify-center">
                        {/* 随机显示不同类型的简化图形 */}
                        {index % 3 === 0 && (
                          <svg width="160" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect width="160" height="120" fill="#f8f9fa" rx="5" ry="5"/>
                            <rect x="60" y="20" width="40" height="20" rx="3" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
                            <rect x="30" y="60" width="40" height="20" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1"/>
                            <rect x="90" y="60" width="40" height="20" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1"/>
                            <line x1="80" y1="40" x2="50" y2="60" stroke="#6b7280" strokeWidth="1"/>
                            <line x1="80" y1="40" x2="110" y2="60" stroke="#6b7280" strokeWidth="1"/>
                          </svg>
                        )}
                        {index % 3 === 1 && (
                          <svg width="160" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect width="160" height="120" fill="#f8f9fa" rx="5" ry="5"/>
                            <rect x="10" y="10" width="140" height="20" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="1"/>
                            <rect x="10" y="40" width="140" height="20" rx="3" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="1"/>
                            <rect x="10" y="70" width="140" height="20" rx="3" fill="#d1fae5" stroke="#10b981" strokeWidth="1"/>
                            <rect x="10" y="100" width="140" height="10" rx="3" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
                          </svg>
                        )}
                        {index % 3 === 2 && (
                          <svg width="160" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect width="160" height="120" fill="#f8f9fa" rx="5" ry="5"/>
                            <ellipse cx="30" cy="30" rx="20" ry="10" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
                            <rect x="70" y="20" width="40" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                            <polygon points="130,30 145,40 130,50 115,40" fill="#10b981" stroke="#059669" strokeWidth="1"/>
                            <line x1="50" y1="30" x2="70" y2="30" stroke="#6b7280" strokeWidth="1"/>
                            <line x1="110" y1="30" x2="115" y2="40" stroke="#6b7280" strokeWidth="1"/>
                            <rect x="70" y="70" width="40" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                            <line x1="130" y1="50" x2="90" y2="70" stroke="#6b7280" strokeWidth="1"/>
                          </svg>
                        )}
                      </div>
                      <div className="p-3 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex space-x-1">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                              {index % 3 === 0 ? '网络拓扑图' : index % 3 === 1 ? '系统架构图' : '流程图'}
                            </span>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">
                              {index % 2 === 0 ? '已完成' : '编辑中'}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">2天前</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          智标系统用图 · 20个元素
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                    创建新项目
                  </button>
                  <div className="flex space-x-1">
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">2</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">3</button>
                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* 底部状态条 */}
      <footer className="bg-white shadow-md py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                DeepSeek-32B模型已连接
              </span>
              <span>|</span>
              <span>最后更新: 2025/05/15 10:30</span>
            </div>
            <div className="text-sm text-gray-600">
              智绘系统 v1.2.0 | 中通信息/南方设计
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZhihuaSVGDemo;
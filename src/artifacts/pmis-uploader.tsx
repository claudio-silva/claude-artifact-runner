import React, { useState, useEffect } from 'react';
import { Upload, Clock, Settings, FileText, Database, CheckCircle, XCircle, RefreshCw, Search, File, FileUp, Layers, PenTool, Image, Calculator, Map, BarChart, Globe, Server, TableProperties, Code, ArrowUpDown, Activity, Table, UploadCloud, List, Book, SplitSquareVertical, BarChartHorizontal, Lock, Users, LineChart, BookOpen, FileSearch, MessageSquare, Eye, FolderPlus, ChevronsUp, Download, Archive, CloudLightning, Network } from 'lucide-react';

const DesignToolsPlatform = () => {
  const [activeModule, setActiveModule] = useState('pmis');
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('idle'); // idle, logging, uploading, completed
  const [progress, setProgress] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [showStats, setShowStats] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoModalContent, setDemoModalContent] = useState({title: '', content: ''});

  // 添加日志
  const addLog = (message, type = 'info') => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { time, message, type }]);
  };

  useEffect(() => {
    if (activeModule === 'pmis') {
      setLogs([
        { time: '09:45:23', message: '欢迎使用PMIS资料自动上传助手', type: 'info' },
        { time: '09:45:24', message: '请选择项目和需要上传的文件', type: 'info' }
      ]);
    } else if (activeModule === 'drawing') {
      setLogs([
        { time: '09:45:23', message: '欢迎使用无线设计增效出图工具', type: 'info' },
        { time: '09:45:24', message: '基于库（基础数据）+模板+操作中心+辅助工具架构', type: 'info' }
      ]);
    } else if (activeModule === 'intelligent') {
      setLogs([
        { time: '09:45:23', message: '欢迎使用智勘智设平台', type: 'info' },
        { time: '09:45:24', message: '实现标准化、数字化、智慧化的项目交付', type: 'info' }
      ]);
    } else if (activeModule === 'mysql') {
      setLogs([
        { time: '09:45:23', message: '欢迎使用MySQL数据库管理工具', type: 'info' },
        { time: '09:45:24', message: '连接到项目数据库...', type: 'info' },
        { time: '09:45:25', message: '连接成功，可以开始操作', type: 'success' }
      ]);
    } else if (activeModule === 'cad') {
      setLogs([
        { time: '09:45:23', message: '欢迎使用设计CAD工具', type: 'info' },
        { time: '09:45:24', message: '正在初始化CAD组件...', type: 'info' },
        { time: '09:45:25', message: '初始化完成，可以开始制图', type: 'success' }
      ]);
    } else if (activeModule === 'excel') {
      setLogs([
        { time: '09:45:23', message: '欢迎使用EXCEL表格工具', type: 'info' },
        { time: '09:45:24', message: '已自动连接项目数据源', type: 'success' }
      ]);
    } else {
      setLogs([
        { time: '09:45:23', message: `欢迎使用${getModuleName(activeModule)}`, type: 'info' },
        { time: '09:45:24', message: '正在加载模块数据...', type: 'info' },
        { time: '09:45:25', message: '加载完成', type: 'success' }
      ]);
    }
    setActiveTab('overview');
  }, [activeModule]);

  const getModuleName = (moduleId) => {
    const modules = {
      'pmis': 'PMIS资料自动上传助手',
      'pms': 'PMS系统管理工具',
      'mysql': 'MySQL数据库管理',
      'database': '数据库管理',
      'drawing': '无线设计增效出图工具',
      'cad': '设计CAD工具',
      'cadpdf': 'CAD/PDF转换工具',
      'word': 'WORD文档工具',
      'excel': 'EXCEL表格工具',
      'intelligent': '智勘智设平台',
      'knowledge': '知识检索工具',
      'document': '设计文档工具',
      'pdf': '设计PDF工具'
    };
    return modules[moduleId] || moduleId;
  };

  // 模拟登录过程
  const handleLogin = () => {
    setStatus('logging');
    addLog('正在登录PMIS系统...', 'info');
    
    setTimeout(() => {
      addLog('登录成功: https://pmis.cmcs.cn/a/login', 'success');
      addLog('用户名: 洪浩东', 'info');
      addLog('登录状态: 成功', 'success');
      setStatus('idle');
    }, 2000);
  };

  // 模拟上传过程
  const handleUpload = () => {
    if (activeModule !== 'pmis') {
      addLog(`正在执行${getModuleName(activeModule)}的操作...`, 'info');
      setTimeout(() => {
        addLog('操作执行成功', 'success');
      }, 1500);
      return;
    }
    
    if (selectedFiles.length === 0) {
      addLog('请先选择要上传的文件', 'error');
      return;
    }
    
    if (!selectedProject) {
      addLog('请先选择项目', 'error');
      return;
    }
    
    setStatus('uploading');
    setProgress(0);
    
    addLog(`开始上传 ${selectedFiles.length} 个文件到项目: ${selectedProject}`, 'info');
    
    let currentFile = 0;
    const uploadInterval = setInterval(() => {
      if (currentFile < selectedFiles.length) {
        const success = Math.random() > 0.2; // 80% 的成功率
        const file = selectedFiles[currentFile];
        
        if (success) {
          addLog(`文件 "${file.name}" 上传成功`, 'success');
        } else {
          addLog(`文件 "${file.name}" 上传失败，将重试...`, 'error');
          addLog(`文件 "${file.name}" 重试上传成功`, 'success');
        }
        
        currentFile++;
        setProgress(Math.floor((currentFile / selectedFiles.length) * 100));
      } else {
        clearInterval(uploadInterval);
        addLog('所有文件上传完成', 'success');
        setStatus('completed');
        setShowStats(true);
      }
    }, 1500);
  };

  // 处理文件选择
  const handleFileSelect = (e) => {
    const fileList = e.target.files;
    const filesArray = Array.from(fileList).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type
    }));
    setSelectedFiles(filesArray);
    addLog(`已选择 ${filesArray.length} 个文件`, 'info');
  };

  // 打开演示模态框
  const openDemoModal = (title, content) => {
    setDemoModalContent({title, content});
    setShowDemoModal(true);
  };

  // 模态框组件
  const DemoModal = () => {
    if (!showDemoModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{demoModalContent.title}</h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowDemoModal(false)}
            >
              ✕
            </button>
          </div>
          <div className="prose">
            {demoModalContent.content}
          </div>
          <div className="mt-6 flex justify-end">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowDemoModal(false)}
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    );
  };

  // 功能菜单项
  const menuItems = [
    { id: 'mysql', name: 'mysql数据库', icon: <Database className="w-4 h-4 mr-2" /> },
    { id: 'database', name: '数据库库', icon: <Server className="w-4 h-4 mr-2" /> },
    { id: 'pmis', name: 'PMIS系统', active: true, icon: <Upload className="w-4 h-4 mr-2" /> },
    { id: 'pms', name: 'PMS系统', icon: <Layers className="w-4 h-4 mr-2" /> },
    { id: 'drawing', name: '无线设计增效工具', icon: <PenTool className="w-4 h-4 mr-2" /> },
    { id: 'cad', name: '设计CAD工具', icon: <Image className="w-4 h-4 mr-2" /> },
    { id: 'cadpdf', name: 'CAD/PDF', icon: <File className="w-4 h-4 mr-2" /> },
    { id: 'word', name: 'WORD文档工具', icon: <FileText className="w-4 h-4 mr-2" /> },
    { id: 'excel', name: 'EXCEL表格工具', icon: <BarChart className="w-4 h-4 mr-2" /> },
    { id: 'intelligent', name: '智勘智设平台', icon: <Globe className="w-4 h-4 mr-2" /> },
    { id: 'knowledge', name: '知识检索工具', icon: <Search className="w-4 h-4 mr-2" /> },
    { id: 'document', name: '设计文档工具', icon: <FileText className="w-4 h-4 mr-2" /> },
    { id: 'pdf', name: '设计PDF工具', icon: <FileUp className="w-4 h-4 mr-2" /> }
  ];

  // 项目列表
  const projects = [
    { id: '1', name: '广州5G工程-2024' },
    { id: '2', name: '深圳基站建设项目' },
    { id: '3', name: '东莞无线网络优化' },
    { id: '4', name: '佛山通信设备更新' }
  ];

  // 模板列表
  const templates = {
    'cad': [
      { id: 'template1', name: '5G基站平面图模板' },
      { id: 'template2', name: '天面布置图模板' },
      { id: 'template3', name: '室内分布系统模板' },
      { id: 'template4', name: '传输线路方案模板' }
    ],
    'word': [
      { id: 'template1', name: '勘察报告模板' },
      { id: 'template2', name: '设计说明书模板' },
      { id: 'template3', name: '项目建议书模板' },
      { id: 'template4', name: '技术方案模板' }
    ],
    'excel': [
      { id: 'template1', name: '基站预算模板' },
      { id: 'template2', name: '传输线路预算模板' },
      { id: 'template3', name: '物料清单模板' },
      { id: 'template4', name: '网优项目预算模板' }
    ]
  };

  // 数据库表列表
  const databaseTables = [
    { name: 'projects', description: '项目信息表', records: 128 },
    { name: 'sites', description: '站点信息表', records: 3456 },
    { name: 'equipment', description: '设备信息表', records: 10245 },
    { name: 'budget_items', description: '预算项目表', records: 5602 },
    { name: 'users', description: '用户信息表', records: 86 },
    { name: 'tasks', description: '任务信息表', records: 2568 },
    { name: 'materials', description: '物料信息表', records: 3924 }
  ];

  // CAD命令列表
  const cadCommands = [
    '自动绘制天馈线路',
    '自动插入设备符号',
    '自动生成标题栏',
    '快速插入常用图块',
    '智能尺寸标注',
    '批量图纸打印',
    'CAD转PDF',
    '图纸版本比对',
    '自动图层管理'
  ];

  // 知识库分类
  const knowledgeCategories = [
    { name: '无线技术', count: 256 },
    { name: '传输技术', count: 198 },
    { name: '核心网技术', count: 124 },
    { name: '设计规范', count: 87 },
    { name: '行业标准', count: 103 },
    { name: '工程案例', count: 76 },
    { name: '常见问题', count: 312 }
  ];

  // PMS系统模块
  const pmsModules = [
    { name: '项目管理', description: '管理项目生命周期' },
    { name: '资源管理', description: '人员、设备资源调度' },
    { name: '进度管理', description: '项目进度跟踪与管控' },
    { name: '质量管理', description: '质量检查与问题跟踪' },
    { name: '文档管理', description: '项目文档集中管理' },
    { name: '成本管理', description: '项目成本核算与控制' },
    { name: '数据分析', description: '项目数据统计与分析' }
  ];

  // 渲染PMIS模块内容
  const renderPMISModule = () => {
    return (
      <div className="flex flex-col h-full">
        {/* 顶部工具栏 */}
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">处理项目:</span>
            <select 
              className="border p-1 rounded" 
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="">请选择项目</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
          </div>
          <div className="flex space-x-2">
            <button 
              className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors"
              onClick={handleLogin}
              disabled={status === 'logging' || status === 'uploading'}
            >
              <Settings className="w-4 h-4 mr-1" />
              登录
            </button>
            <button 
              className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors"
              onClick={handleUpload}
              disabled={status === 'uploading'}
            >
              <Upload className="w-4 h-4 mr-1" />
              上传
            </button>
            <label className="bg-blue-600 text-white px-3 py-1 rounded flex items-center cursor-pointer hover:bg-blue-700 transition-colors">
              <FileText className="w-4 h-4 mr-1" />
              选择文件
              <input 
                type="file" 
                multiple 
                className="hidden" 
                onChange={handleFileSelect}
                disabled={status === 'uploading'}
              />
            </label>
            <button 
              className="bg-gray-500 text-white px-3 py-1 rounded flex items-center hover:bg-gray-600 transition-colors"
              onClick={() => {
                setLogs([]);
                setStatus('idle');
                setProgress(0);
                setShowStats(false);
              }}
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              清空
            </button>
          </div>
        </div>
        
        {/* 主内容区 */}
        <div className="flex-1 p-2 overflow-hidden flex flex-col">
          {/* 效率统计卡片 */}
          {showStats && (
            <div className="mb-4 bg-white p-4 border rounded shadow">
              <h3 className="text-lg font-semibold mb-2">效率提升统计</h3>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <span className="text-red-600 font-bold text-xl">180-300秒</span>
                  <span className="text-sm text-gray-500">传统上传时间</span>
                </div>
                <div className="flex-1 h-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-green-500 rounded"></div>
                  <div className="absolute right-0 top-1/2 transform translate-y-6 text-sm">
                    效率提升 <span className="font-bold">90%</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-green-600 font-bold text-xl">15-25秒</span>
                  <span className="text-sm text-gray-500">自动上传时间</span>
                </div>
              </div>
            </div>
          )}
          
          {/* 日志区域 */}
          <div className="border border-gray-300 flex-1 p-2 bg-white overflow-auto">
            {logs.map((log, index) => (
              <div key={index} className="mb-1 font-mono text-sm">
                <span className="text-gray-500">[{log.time}] </span>
                {log.type === 'success' && <CheckCircle className="w-4 h-4 inline text-green-500 mr-1" />}
                {log.type === 'error' && <XCircle className="w-4 h-4 inline text-red-500 mr-1" />}
                {log.type === 'info' && <Clock className="w-4 h-4 inline text-blue-500 mr-1" />}
                <span className={
                  log.type === 'success' ? 'text-green-600' : 
                  log.type === 'error' ? 'text-red-600' : 'text-blue-600'
                }>
                  {log.message}
                </span>
              </div>
            ))}
          </div>
          
          {/* 底部状态栏 */}
          <div className="h-8 bg-gray-200 flex items-center px-2 mt-2">
            <div className="flex-1">
              <div className="text-sm">状态: {
                status === 'idle' ? '待命' : 
                status === 'logging' ? '登录中...' : 
                status === 'uploading' ? '上传中...' : 
                '上传完成'
              }</div>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{progress}%</span>
              <div className="w-32 bg-gray-300 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 渲染无线设计增效出图工具模块
  const renderDrawingToolModule = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">设计项目:</span>
            <select className="border p-1 rounded">
              <option value="">请选择项目</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors">
              <PenTool className="w-4 h-4 mr-1" />
              绘图
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors">
              <Calculator className="w-4 h-4 mr-1" />
              预算
            </button>
            <button className="bg-purple-500 text-white px-3 py-1 rounded flex items-center hover:bg-purple-600 transition-colors" onClick={handleUpload}>
              <FileUp className="w-4 h-4 mr-1" />
              出版
            </button>
            <button className="bg-orange-500 text-white px-3 py-1 rounded flex items-center hover:bg-orange-600 transition-colors" onClick={handleUpload}>
              <Image className="w-4 h-4 mr-1" />
              改图
            </button>
          </div>
        </div>

        <div className="flex-1 p-2 overflow-hidden flex flex-col">
          <div className="p-4 border bg-white shadow rounded mb-4">
            <h3 className="font-bold mb-2">无线设计增效出图工具</h3>
            <p className="text-sm text-gray-600 mb-3">针对无线设计预算、信息重复填写，图纸错误不可控的问题，提出解决问题思路架构：库（基础数据）+模板+操作中心+辅助工具，实现基础数据信息规范化表达、输入输出自动化和批量化，有效减少人员投入，提升图纸质量。</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border p-2 rounded bg-gray-50">
                <h4 className="font-semibold">常规资料输出耗时</h4>
                <div className="flex items-center mt-1">
                  <div className="bg-red-500 text-white px-2 py-1 rounded">80分</div>
                  <div className="bg-red-300 text-white px-2 py-1 rounded ml-1">25秒</div>
                  <div className="ml-4 text-green-500 text-sm">优化后: 15-25秒</div>
                </div>
              </div>
              <div className="border p-2 rounded bg-gray-50">
                <h4 className="font-semibold">设计方案出版耗时</h4>
                <div className="flex items-center mt-1">
                  <div className="bg-red-500 text-white px-2 py-1 rounded">1天</div>
                  <div className="bg-red-300 text-white px-2 py-1 rounded ml-1">20分</div>
                  <div className="ml-4 text-green-500 text-sm">优化后: 1-2小时</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 border border-gray-300 p-2 bg-white overflow-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-3 rounded">
                <h4 className="font-bold text-center border-b pb-2 mb-3">自动化功能</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 自动插入设备材料表</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 自动插入安全风险点</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 自动生成备注</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 自动修改图衔信息</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 自动格式调整</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 批量打印</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 自动生成对应的设计文档</li>
                </ul>
              </div>
              <div className="border p-3 rounded">
                <h4 className="font-bold text-center border-b pb-2 mb-3">基础数据库</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center"><Database className="w-3 h-3 text-blue-500 mr-1" /> 设备材料库</li>
                  <li className="flex items-center"><Database className="w-3 h-3 text-blue-500 mr-1" /> 支撑系统</li>
                  <li className="flex items-center"><Database className="w-3 h-3 text-blue-500 mr-1" /> 定额列表</li>
                  <li className="flex items-center"><Database className="w-3 h-3 text-blue-500 mr-1" /> 图纸模板</li>
                  <li className="flex items-center"><Database className="w-3 h-3 text-blue-500 mr-1" /> 预算模板</li>
                  <li className="flex items-center"><Database className="w-3 h-3 text-blue-500 mr-1" /> 设计说明模板</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-8 bg-gray-200 flex items-center px-2 mt-2">
            <div className="flex-1 text-sm">绘图自动化状态: 就绪</div>
            <div className="flex items-center text-sm">
              <span>模板版本: 2024.03</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 渲染智勘智设平台模块
  const renderIntelligentPlatformModule = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">平台模块:</span>
            <select className="border p-1 rounded">
              <option value="integration">设计协同</option>
              <option value="survey">智能查勘</option>
              <option value="drawing">智能绘图</option>
              <option value="calculation">智能预算</option>
              <option value="process">智能流程</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors">
              <Map className="w-4 h-4 mr-1" />
              查勘
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors">
              <PenTool className="w-4 h-4 mr-1" />
              设计
            </button>
            <button className="bg-purple-500 text-white px-3 py-1 rounded flex items-center hover:bg-purple-600 transition-colors" onClick={handleUpload}>
              <Layers className="w-4 h-4 mr-1" />
              流程
            </button>
          </div>
        </div>

        <div className="flex-1 p-2 overflow-hidden flex flex-col">
          <div className="p-4 border bg-white shadow rounded mb-4">
            <h3 className="font-bold mb-2">"三化一体"项目交付模式</h3>
            <p className="text-sm text-gray-600 mb-3">公司在项目交付领域，承接落实AI²卓越绩效管理模式，形成以预防为主的"标准化"、"数字化"、"智慧化"的"三化一体"项目交付模式，不断提高项目交付效率和交付质量。</p>
            
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div className="border p-2 rounded bg-blue-50">
                <h4 className="font-semibold text-blue-700">标准化</h4>
                <p className="text-xs text-gray-600 mt-1">建设11标一体的标准化体系；编制设计类项目作业标准《咨询、设计常用手册》、各专业《调研/勘察细则》、各专业《设计深度要求》等50多项。</p>
              </div>
              <div className="border p-2 rounded bg-green-50">
                <h4 className="font-semibold text-green-700">数字化</h4>
                <p className="text-xs text-gray-600 mt-1">自主研发的全生命周期智慧生产管理系统（智勘智设）实现设计项目全生命周期数字化生产。</p>
              </div>
              <div className="border p-2 rounded bg-purple-50">
                <h4 className="font-semibold text-purple-700">智慧化</h4>
                <p className="text-xs text-gray-600 mt-1">利用AI技术实现智慧生产，各环节资源共享、专业集成、过程集约、作业自动化。</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 border border-gray-300 p-2 bg-white overflow-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-3 rounded">
                <h4 className="font-bold text-center border-b pb-2 mb-3">智勘智设平台功能</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border p-2 rounded bg-blue-50">
                    <span className="font-medium text-blue-700">智勘</span>
                    <p className="text-xs">信息采集能力，提供AI能力，降低作业要求</p>
                  </div>
                  <div className="border p-2 rounded bg-green-50">
                    <span className="font-medium text-green-700">智图</span>
                    <p className="text-xs">图纸绘制能力，自动化的工程图纸绘制工具</p>
                  </div>
                  <div className="border p-2 rounded bg-yellow-50">
                    <span className="font-medium text-yellow-700">智算</span>
                    <p className="text-xs">预算编制能力，支持各省预算表、计量方式</p>
                  </div>
                  <div className="border p-2 rounded bg-red-50">
                    <span className="font-medium text-red-700">智文</span>
                    <p className="text-xs">文本处理能力，提供标准文档格式</p>
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded">
                <h4 className="font-bold text-center border-b pb-2 mb-3">精细化管理</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 勘察数据台账精细化</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 设计过程管理精细化</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 时间管理精细化</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 人员管理精细化</li>
                  <li className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-1" /> 造价管理</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-8 bg-gray-200 flex items-center px-2 mt-2">
            <div className="flex-1 text-sm">智勘智设平台状态: 运行中</div>
            <div className="flex items-center text-sm">
              <span>系统版本: 2024.07</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 渲染MySQL数据库管理模块
  const renderMySQLModule = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">数据库连接:</span>
            <select className="border p-1 rounded">
              <option>project_db (已连接)</option>
              <option>design_db</option>
              <option>survey_db</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors">
              <Code className="w-4 h-4 mr-1" />
              执行SQL
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors">
              <ArrowUpDown className="w-4 h-4 mr-1" />
              导入/导出
            </button>
            <button className="bg-purple-500 text-white px-3 py-1 rounded flex items-center hover:bg-purple-600 transition-colors">
              <Activity className="w-4 h-4 mr-1" />
              性能分析
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {/* 选项卡导航 */}
          <div className="flex border-b bg-white">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              数据库概览
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'tables' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('tables')}
            >
              表管理
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'query' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('query')}
            >
              查询工具
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'integration' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('integration')}
            >
              系统集成
            </button>
          </div>

          {/* 选项卡内容 */}
          <div className="flex-1 p-4 bg-white overflow-auto">
            {activeTab === 'overview' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">数据库概览</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-3 rounded border border-blue-100">
                      <div className="text-sm text-gray-500">数据库总数</div>
                      <div className="text-2xl font-bold text-blue-600">3</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-100">
                      <div className="text-sm text-gray-500">表总数</div>
                      <div className="text-2xl font-bold text-green-600">28</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                      <div className="text-sm text-gray-500">记录总数</div>
                      <div className="text-2xl font-bold text-purple-600">18,742</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded border border-orange-100">
                      <div className="text-sm text-gray-500">数据库大小</div>
                      <div className="text-2xl font-bold text-orange-600">245 MB</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">数据库表</h3>
                  <div className="border rounded overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">表名</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">记录数</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {databaseTables.map((table, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{table.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{table.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{table.records.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-blue-600 hover:text-blue-800 mr-2">查看</button>
                              <button className="text-green-600 hover:text-green-800">导出</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">集成功能</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <TableProperties className="text-blue-500 w-5 h-5 mr-2" />
                        <span className="font-medium">PMIS数据同步</span>
                      </div>
                      <p className="text-sm text-gray-500">自动同步PMIS系统数据到本地数据库</p>
                    </div>
                    <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Table className="text-green-500 w-5 h-5 mr-2" />
                        <span className="font-medium">Excel导入导出</span>
                      </div>
                      <p className="text-sm text-gray-500">将Excel数据导入数据库或导出数据到Excel</p>
                    </div>
                    <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer" onClick={() => openDemoModal('智能数据分析', 
                      <div>
                        <p>智能数据分析功能可以自动分析数据库中的项目数据，生成以下报告：</p>
                        <ul className="list-disc pl-5 mt-2 mb-4">
                          <li>项目进度分析：按时间维度展示项目完成率</li>
                          <li>资源利用分析：不同资源的分配和使用效率</li>
                          <li>成本分析：项目预算与实际成本对比</li>
                          <li>质量分析：问题数量、分类及解决速度</li>
                        </ul>
                        <p>系统会生成可视化图表，帮助管理者快速掌握项目情况，辅助决策。</p>
                        <div className="mt-4 border-t pt-4">
                          <h4 className="font-bold mb-2">AI辅助功能</h4>
                          <p>智能数据分析还支持AI辅助功能，可以：</p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>自动识别异常数据点</li>
                            <li>预测项目可能的延期风险</li>
                            <li>推荐优化资源分配的方案</li>
                            <li>根据历史数据提供成本控制建议</li>
                          </ul>
                        </div>
                      </div>)}>
                      <div className="flex items-center mb-2">
                        <BarChartHorizontal className="text-purple-500 w-5 h-5 mr-2" />
                        <span className="font-medium">智能数据分析</span>
                      </div>
                      <p className="text-sm text-gray-500">使用AI分析项目数据，生成报告和图表</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tables' && (
              <div>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">数据库表管理</h3>
                    <div className="flex space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center">
                        <Database className="w-4 h-4 mr-1" />
                        新建表
                      </button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center">
                        <UploadCloud className="w-4 h-4 mr-1" />
                        导入
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">表名</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">引擎</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排序规则</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">行数</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">数据大小</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {databaseTables.map((table, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{table.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">InnoDB</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">utf8mb4_general_ci</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{table.records.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.floor(table.records * 0.2).toLocaleString()} KB</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">浏览</button>
                            <button className="text-green-600 hover:text-green-800">结构</button>
                            <button className="text-red-600 hover:text-red-800">删除</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'query' && (
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">SQL查询工具</h3>
                  <div className="mb-4">
                    <textarea 
                      className="w-full border rounded p-3 font-mono text-sm" 
                      rows={6}
                      placeholder="输入SQL查询..."
                      defaultValue="SELECT p.project_name, COUNT(s.id) as site_count, SUM(b.total_amount) as total_budget
FROM projects p
LEFT JOIN sites s ON p.id = s.project_id
LEFT JOIN budget_items b ON p.id = b.project_id
GROUP BY p.id
ORDER BY total_budget DESC
LIMIT 10;"
                    ></textarea>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">执行查询</button>
                      <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm">格式化SQL</button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">保存查询</button>
                    </div>
                    <div>
                      <select className="border rounded p-1 text-sm">
                        <option>最近执行的查询</option>
                        <option>项目进度统计</option>
                        <option>站点设备清单</option>
                        <option>预算使用情况</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">查询结果</h4>
                  <div className="border rounded overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目名称</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">站点数量</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">总预算</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">广州5G工程-2024</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">356</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥4,580,000</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">深圳基站建设项目</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">289</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥3,840,000</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">东莞无线网络优化</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">184</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥2,150,000</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">佛山通信设备更新</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">146</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥1,920,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-2 text-right text-sm text-gray-500">
                    显示 1 到 4，共 4 条记录
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integration' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4">系统集成</h3>
                  <p className="mb-4">数据库系统可以与以下系统集成，实现数据互通:</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="border p-4 rounded hover:bg-blue-50 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <UploadCloud className="text-blue-500 w-5 h-5 mr-2" />
                        <span className="font-medium">PMIS系统集成</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">自动同步PMIS系统数据，确保工程数据一致性</p>
                      <div className="flex justify-between items-center mt-4 border-t pt-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">已连接</span>
                        <button className="text-sm text-blue-600">配置</button>
                      </div>
                    </div>
                    
                    <div className="border p-4 rounded hover:bg-blue-50 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Table className="text-green-500 w-5 h-5 mr-2" />
                        <span className="font-medium">CAD系统集成</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">从数据库提取设计参数到CAD，实现数据驱动设计</p>
                      <div className="flex justify-between items-center mt-4 border-t pt-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">待配置</span>
                        <button className="text-sm text-blue-600">配置</button>
                      </div>
                    </div>
                    
                    <div className="border p-4 rounded hover:bg-blue-50 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Calculator className="text-purple-500 w-5 h-5 mr-2" />
                        <span className="font-medium">预算系统集成</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">自动从数据库获取物料信息，生成项目预算</p>
                      <div className="flex justify-between items-center mt-4 border-t pt-2">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">部分连接</span>
                        <button className="text-sm text-blue-600">配置</button>
                      </div>
                    </div>
                    
                    <div className="border p-4 rounded hover:bg-blue-50 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <CloudLightning className="text-orange-500 w-5 h-5 mr-2" />
                        <span className="font-medium">智勘智设平台集成</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">全面对接智勘智设平台，实现数据无缝流转</p>
                      <div className="flex justify-between items-center mt-4 border-t pt-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">已连接</span>
                        <button className="text-sm text-blue-600">配置</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold mb-3">数据同步计划</h4>
                    <div className="border rounded overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">系统</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">同步方向</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">频率</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上次同步</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr className="bg-white">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PMIS系统</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">双向</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">每4小时</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">今天 09:15</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">成功</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-blue-600 hover:text-blue-800">立即同步</button>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">智勘智设平台</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">双向</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">每天</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">昨天 18:30</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">成功</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-blue-600 hover:text-blue-800">立即同步</button>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CAD系统</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">导入</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">手动</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">--</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">未配置</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-blue-600 hover:text-blue-800">配置</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="h-8 bg-gray-200 flex items-center px-2">
          <div className="flex-1 text-sm">数据库状态: 已连接</div>
          <div className="text-sm text-gray-600">数据库版本: MySQL 8.0.26</div>
        </div>
      </div>
    );
  };

  // 渲染PMS系统管理工具
  const renderPMSModule = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">项目视图:</span>
            <select className="border p-1 rounded">
              <option>甘特图视图</option>
              <option>看板视图</option>
              <option>列表视图</option>
              <option>日历视图</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors">
              <FolderPlus className="w-4 h-4 mr-1" />
              新建项目
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors">
              <ChevronsUp className="w-4 h-4 mr-1" />
              批量升级
            </button>
            <button className="bg-purple-500 text-white px-3 py-1 rounded flex items-center hover:bg-purple-600 transition-colors" onClick={() => openDemoModal('PMS与PMIS系统集成', 
              <div>
                <p>PMS系统与PMIS系统集成后，可以实现以下功能：</p>
                <ul className="list-disc pl-5 mt-2 mb-4">
                  <li>项目创建自动同步：在PMS创建的项目会自动同步到PMIS系统</li>
                  <li>进度数据互通：项目进度信息在两系统间实时更新</li>
                  <li>文档自动归档：PMIS上传的文档自动在PMS中建立索引和关联</li>
                  <li>自动权限映射：用户权限在两系统间自动映射，无需重复设置</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded border border-blue-100 mb-4">
                  <h4 className="font-bold text-blue-700 mb-1">数据同步机制</h4>
                  <p>系统采用双向实时同步机制，确保两个系统的数据一致性：</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>实时API调用：关键操作通过API实时同步</li>
                    <li>定时批量同步：非关键数据每30分钟批量同步一次</li>
                    <li>冲突解决策略：根据时间戳和优先级自动解决数据冲突</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded border border-green-100">
                  <h4 className="font-bold text-green-700 mb-1">集成效益</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>减少90%的重复数据录入工作</li>
                    <li>提高项目信息一致性，避免因信息不同步导致的沟通问题</li>
                    <li>缩短项目文档处理时间平均30%</li>
                    <li>提供完整的项目全生命周期数据视图</li>
                  </ul>
                </div>
              </div>)}>
              <Network className="w-4 h-4 mr-1" />
              PMIS集成
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {/* 选项卡导航 */}
          <div className="flex border-b bg-white">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              项目概览
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('resources')}
            >
              资源管理
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'tasks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('tasks')}
            >
              任务管理
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'reports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('reports')}
            >
              报表中心
            </button>
          </div>

          {/* 选项卡内容 */}
          <div className="flex-1 p-4 bg-white overflow-auto">
            {activeTab === 'overview' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">PMS系统概览</h3>
                  <p className="text-gray-600 mb-4">PMS系统是一个全面的项目管理系统，集成了项目规划、资源管理、进度跟踪、质量控制和成本管理等功能，提供项目全生命周期的管理支持。</p>
                  
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded border border-blue-100">
                      <div className="text-sm text-gray-500">活跃项目</div>
                      <div className="text-2xl font-bold text-blue-600">24</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-100">
                      <div className="text-sm text-gray-500">项目进度</div>
                      <div className="text-2xl font-bold text-green-600">76%</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                      <div className="text-sm text-gray-500">总资源数</div>
                      <div className="text-2xl font-bold text-purple-600">156</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded border border-orange-100">
                      <div className="text-sm text-gray-500">待处理任务</div>
                      <div className="text-2xl font-bold text-orange-600">128</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">系统模块</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {pmsModules.map((module, index) => (
                      <div key={index} className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="font-medium mb-1">{module.name}</div>
                        <p className="text-sm text-gray-500">{module.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">最近项目</h3>
                  <div className="border rounded overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目名称</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">负责人</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">开始日期</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">完成日期</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">进度</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">广州5G工程-2024</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">李工</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-02-15</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-10-30</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                            </div>
                            <span className="text-xs">75%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">进行中</span>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">深圳基站建设项目</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">王工</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-10</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-09-20</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                            </div>
                            <span className="text-xs">60%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">进行中</span>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">东莞无线网络优化</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">张工</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-05</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-30</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                            </div>
                            <span className="text-xs">90%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">验收中</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">资源管理</h3>
                    <div className="flex space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        添加资源
                      </button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        导出资源表
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded border border-blue-100">
                    <div className="text-sm text-gray-500">设计人员</div>
                    <div className="text-2xl font-bold text-blue-600">45</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-100">
                    <div className="text-sm text-gray-500">勘察人员</div>
                    <div className="text-2xl font-bold text-green-600">32</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-100">
                    <div className="text-sm text-gray-500">项目经理</div>
                    <div className="text-2xl font-bold text-purple-600">12</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">资源分配</h4>
                  <div className="border rounded overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">专业</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">工作量</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">当前项目</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">李明</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">设计师</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">无线</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                            </div>
                            <span className="text-xs">65%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">广州5G工程-2024</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">详情</button>
                            <button className="text-green-600 hover:text-green-800">分配</button>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">王芳</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">勘察员</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">传输</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-yellow-600 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            <span className="text-xs">85%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">深圳基站建设项目</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">详情</button>
                            <button className="text-green-600 hover:text-green-800">分配</button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">张伟</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">项目经理</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">综合</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-red-600 h-2 rounded-full" style={{width: '95%'}}></div>
                            </div>
                            <span className="text-xs">95%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">多个项目</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">详情</button>
                            <button className="text-green-600 hover:text-green-800">分配</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">资源统计</h4>
                  <div className="border p-4 rounded bg-gray-50">
                    <div className="mb-4">
                      <h5 className="font-medium mb-2">资源利用率</h5>
                      <div className="flex items-end space-x-2">
                        <div className="h-24 w-12 bg-blue-200 relative">
                          <div className="absolute bottom-0 left-0 right-0 bg-blue-500" style={{height: '70%'}}></div>
                          <div className="absolute -bottom-6 left-0 right-0 text-center text-xs">设计</div>
                          <div className="absolute top-0 left-0 right-0 text-center text-xs">70%</div>
                        </div>
                        <div className="h-24 w-12 bg-green-200 relative">
                          <div className="absolute bottom-0 left-0 right-0 bg-green-500" style={{height: '85%'}}></div>
                          <div className="absolute -bottom-6 left-0 right-0 text-center text-xs">勘察</div>
                          <div className="absolute top-0 left-0 right-0 text-center text-xs">85%</div>
                        </div>
                        <div className="h-24 w-12 bg-purple-200 relative">
                          <div className="absolute bottom-0 left-0 right-0 bg-purple-500" style={{height: '60%'}}></div>
                          <div className="absolute -bottom-6 left-0 right-0 text-center text-xs">预算</div>
                          <div className="absolute top-0 left-0 right-0 text-center text-xs">60%</div>
                        </div>
                        <div className="h-24 w-12 bg-yellow-200 relative">
                          <div className="absolute bottom-0 left-0 right-0 bg-yellow-500" style={{height: '90%'}}></div>
                          <div className="absolute -bottom-6 left-0 right-0 text-center text-xs">管理</div>
                          <div className="absolute top-0 left-0 right-0 text-center text-xs">90%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h5 className="font-medium mb-2">资源需求预测</h5>
                      <p className="text-sm text-gray-600">根据项目规划和历史数据，系统预测未来3个月资源需求：</p>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="border p-2 rounded bg-white">
                          <div className="text-sm font-medium">7月</div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">设计师：</span>
                            <span className="text-xs font-medium text-blue-600">需求增加20%</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">勘察员：</span>
                            <span className="text-xs font-medium text-green-600">需求增加15%</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">项目经理：</span>
                            <span className="text-xs font-medium text-red-600">需求饱和</span>
                          </div>
                        </div>
                        <div className="border p-2 rounded bg-white">
                          <div className="text-sm font-medium">8月</div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">设计师：</span>
                            <span className="text-xs font-medium text-blue-600">需求增加10%</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">勘察员：</span>
                            <span className="text-xs font-medium text-green-600">需求增加5%</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">项目经理：</span>
                            <span className="text-xs font-medium text-yellow-600">需求稳定</span>
                          </div>
                        </div>
                        <div className="border p-2 rounded bg-white">
                          <div className="text-sm font-medium">9月</div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">设计师：</span>
                            <span className="text-xs font-medium text-blue-600">需求增加25%</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">勘察员：</span>
                            <span className="text-xs font-medium text-green-600">需求增加30%</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 w-20">项目经理：</span>
                            <span className="text-xs font-medium text-red-600">需求紧张</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // 渲染Word文档工具模块
  const renderWordModule = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">文档模板:</span>
            <select 
              className="border p-1 rounded"
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
            >
              <option value="">选择模板</option>
              {templates.word.map(template => (
                <option key={template.id} value={template.id}>{template.name}</option>
              ))}
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors">
              <FileText className="w-4 h-4 mr-1" />
              新建文档
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors">
              <Archive className="w-4 h-4 mr-1" />
              批量处理
            </button>
            <button className="bg-purple-500 text-white px-3 py-1 rounded flex items-center hover:bg-purple-600 transition-colors">
              <Eye className="w-4 h-4 mr-1" />
              预览
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 bg-white overflow-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded p-4">
              <h3 className="font-bold mb-4">文档模板库</h3>
              <div className="space-y-3">
                {templates.word.map(template => (
                  <div key={template.id} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <FileText className="w-5 h-5 text-blue-500 mr-2" />
                    <div className="flex-1">
                      <div className="font-medium">{template.name}</div>
                      <div className="text-xs text-gray-500">上次更新: 2024-03-15</div>
                    </div>
                    <button className="text-blue-600 text-sm">使用</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded p-4">
              <h3 className="font-bold mb-4">最近文档</h3>
              <div className="space-y-3">
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <FileText className="w-5 h-5 text-green-500 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium">广州5G工程勘察报告</div>
                    <div className="text-xs text-gray-500">修改于: 2024-03-20 15:30</div>
                  </div>
                  <button className="text-blue-600 text-sm">打开</button>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <FileText className="w-5 h-5 text-green-500 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium">深圳基站建设技术方案</div>
                    <div className="text-xs text-gray-500">修改于: 2024-03-19 10:15</div>
                  </div>
                  <button className="text-blue-600 text-sm">打开</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-4">文档处理工具</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center mb-2">
                  <Book className="text-blue-500 w-5 h-5 mr-2" />
                  <span className="font-medium">智能排版</span>
                </div>
                <p className="text-sm text-gray-500">自动调整文档格式，确保符合规范要求</p>
              </div>
              <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center mb-2">
                  <SplitSquareVertical className="text-green-500 w-5 h-5 mr-2" />
                  <span className="font-medium">内容提取</span>
                </div>
                <p className="text-sm text-gray-500">从文档中提取关键信息和数据</p>
              </div>
              <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center mb-2">
                  <MessageSquare className="text-purple-500 w-5 h-5 mr-2" />
                  <span className="font-medium">批注管理</span>
                </div>
                <p className="text-sm text-gray-500">管理和追踪文档审阅意见</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-8 bg-gray-200 flex items-center px-2">
          <div className="flex-1 text-sm">Word工具状态: 就绪</div>
          <div className="text-sm text-gray-600">模板版本: 2024.03</div>
        </div>
      </div>
    );
  };

  // 渲染文档工具模块
  const renderDocumentModule = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">文档类型:</span>
            <select className="border p-1 rounded">
              <option>设计说明书</option>
              <option>技术方案</option>
              <option>勘察报告</option>
              <option>预算文档</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors">
              <FileSearch className="w-4 h-4 mr-1" />
              搜索文档
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors">
              <BookOpen className="w-4 h-4 mr-1" />
              批量处理
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 bg-white overflow-auto">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">文档管理</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-blue-50 p-3 rounded border border-blue-100">
                <div className="text-sm text-gray-500">总文档数</div>
                <div className="text-2xl font-bold text-blue-600">1,245</div>
              </div>
              <div className="bg-green-50 p-3 rounded border border-green-100">
                <div className="text-sm text-gray-500">本月新增</div>
                <div className="text-2xl font-bold text-green-600">78</div>
              </div>
              <div className="bg-purple-50 p-3 rounded border border-purple-100">
                <div className="text-sm text-gray-500">待审核</div>
                <div className="text-2xl font-bold text-purple-600">12</div>
              </div>
              <div className="bg-orange-50 p-3 rounded border border-orange-100">
                <div className="text-sm text-gray-500">已归档</div>
                <div className="text-2xl font-bold text-orange-600">986</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-4">最近文档</h3>
            <div className="border rounded overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文档名称</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">广州5G工程设计说明书</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">设计说明书</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-20</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">已审核</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">查看</button>
                      <button className="text-green-600 hover:text-green-800">编辑</button>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">深圳基站建设技术方案</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">技术方案</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-19</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">审核中</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">查看</button>
                      <button className="text-green-600 hover:text-green-800">编辑</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-4">文档工具</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center mb-2">
                  <LineChart className="text-blue-500 w-5 h-5 mr-2" />
                  <span className="font-medium">数据分析</span>
                </div>
                <p className="text-sm text-gray-500">从文档中提取和分析数据</p>
              </div>
              <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center mb-2">
                  <Lock className="text-green-500 w-5 h-5 mr-2" />
                  <span className="font-medium">文档加密</span>
                </div>
                <p className="text-sm text-gray-500">加密重要文档，确保安全</p>
              </div>
              <div className="border p-4 rounded hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center mb-2">
                  <Users className="text-purple-500 w-5 h-5 mr-2" />
                  <span className="font-medium">协作管理</span>
                </div>
                <p className="text-sm text-gray-500">管理文档协作和权限</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-8 bg-gray-200 flex items-center px-2">
          <div className="flex-1 text-sm">文档工具状态: 运行中</div>
          <div className="text-sm text-gray-600">系统版本: 2024.03</div>
        </div>
      </div>
    );
  };

  // 渲染PDF工具模块
  const renderPDFModule = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-200 p-2 flex items-center">
          <div className="flex-1">
            <span className="mr-2">PDF操作:</span>
            <select className="border p-1 rounded">
              <option>合并PDF</option>
              <option>拆分PDF</option>
              <option>转换格式</option>
              <option>添加水印</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors">
              <Upload className="w-4 h-4 mr-1" />
              上传PDF
            </button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center hover:bg-green-600 transition-colors">
              <Download className="w-4 h-4 mr-1" />
              下载PDF
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 bg-white overflow-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded p-4">
              <h3 className="font-bold mb-4">PDF转换</h3>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">Word转PDF</h4>
                  <p className="text-sm text-gray-600 mb-2">支持批量转换Word文档为PDF格式</p>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">开始转换</button>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">CAD转PDF</h4>
                  <p className="text-sm text-gray-600 mb-2">支持将CAD图纸转换为PDF格式</p>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">开始转换</button>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">图片转PDF</h4>
                  <p className="text-sm text-gray-600 mb-2">支持将多张图片合并为PDF文档</p>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">开始转换</button>
                </div>
              </div>
            </div>

            <div className="border rounded p-4">
              <h3 className="font-bold mb-4">PDF工具</h3>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">PDF合并</h4>
                  <p className="text-sm text-gray-600 mb-2">将多个PDF文件合并为一个文档</p>
                  <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">合并文件</button>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">PDF拆分</h4>
                  <p className="text-sm text-gray-600 mb-2">将PDF文档拆分为多个文件</p>
                  <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">拆分文件</button>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-2">添加水印</h4>
                  <p className="text-sm text-gray-600 mb-2">为PDF文档添加文字或图片水印</p>
                  <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">添加水印</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-4">最近处理的文件</h3>
            <div className="border rounded overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文件名</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作类型</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">处理时间</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">设计图纸.pdf</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">添加水印</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-20 15:30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">完成</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">下载</button>
                      <button className="text-red-600 hover:text-red-800">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="h-8 bg-gray-200 flex items-center px-2">
          <div className="flex-1 text-sm">PDF工具状态: 就绪</div>
          <div className="text-sm text-gray-600">处理引擎版本: 2024.03</div>
        </div>
      </div>
    );
  };

  // 根据当前活跃模块选择要渲染的内容
  const renderContent = () => {
    switch (activeModule) {
      case 'pmis':
        return renderPMISModule();
      case 'pms':
        return renderPMSModule();
      case 'mysql':
        return renderMySQLModule();
      case 'drawing':
        return renderDrawingToolModule();
      case 'intelligent':
        return renderIntelligentPlatformModule();
      case 'word':
        return renderWordModule();
      case 'document':
        return renderDocumentModule();
      case 'pdf':
        return renderPDFModule();
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500">请选择一个模块</div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-xl font-bold">设计工具平台</h2>
          <p className="text-sm text-gray-500 mt-1">v2024.03</p>
        </div>
        <div className="px-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`w-full flex items-center px-3 py-2 text-sm rounded mb-1 ${
                activeModule === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveModule(item.id)}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col">
        {renderContent()}
      </div>

      {/* 演示模态框 */}
      <DemoModal />
    </div>
  );
};

export default DesignToolsPlatform;
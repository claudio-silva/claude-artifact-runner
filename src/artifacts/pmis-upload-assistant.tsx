import React, { useState, useEffect } from 'react';
import { Upload, Button, Table, Input, Card, Divider, Progress, Message, Select, Switch, Space, List } from 'lucide-react';

const PMISUploadAssistant = () => {
  // 状态管理
  const [loginStatus, setLoginStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123456');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState('');
  const [uploadedCount, setUploadedCount] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [logMessages, setLogMessages] = useState([]);
  const [uploadResults, setUploadResults] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState('PMIS系统');
  const [autoMode, setAutoMode] = useState(true);
  const [serverUrl, setServerUrl] = useState('https://pmis.gmcc.net/a/login');

  // 模拟文件列表
  const mockFiles = [
    { name: '设计方案.pdf', size: '2.5MB', type: '设计文档' },
    { name: '施工图纸.dwg', size: '4.8MB', type: '工程图纸' },
    { name: '预算表.xlsx', size: '1.2MB', type: '预算文档' },
    { name: '技术规范.docx', size: '3.7MB', type: '技术文档' },
    { name: '工程进度表.xlsx', size: '0.9MB', type: '进度文档' },
    { name: '质量检验报告.pdf', size: '5.2MB', type: '质量文档' },
  ];

  // 记录日志
  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogMessages(prev => [...prev, `[${timestamp}] ${message}`]);
  };

  // 模拟登录
  const handleLogin = () => {
    addLog(`正在登录系统: ${selectedSystem}，服务器: ${serverUrl}`);
    setUploading(true);
    
    // 模拟登录延迟
    setTimeout(() => {
      setLoginStatus(true);
      setUploading(false);
      addLog('登录成功！系统已就绪');
      message.info('登录成功！');
    }, 2000);
  };

  // 模拟上传单个文件
  const uploadFile = (file, index) => {
    return new Promise((resolve) => {
      setCurrentFile(file.name);
      const duration = Math.random() * 2000 + 1000; // 1-3秒随机上传时间
      
      // 模拟上传进度
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        if (progress >= 100) {
          clearInterval(interval);
          progress = 100;
          
          // 随机生成上传结果
          const success = Math.random() > 0.1; // 90%成功率
          
          const result = {
            id: index + 1,
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type,
            uploadTime: new Date().toLocaleString(),
            status: success ? '成功' : '失败',
            message: success ? '上传完成' : '网络超时，请重试'
          };
          
          addLog(`文件 ${file.name} 上传${success ? '成功' : '失败'}: ${result.message}`);
          setUploadResults(prev => [...prev, result]);
          setUploadedCount(prev => prev + 1);
          
          resolve(result);
        }
        setUploadProgress(progress);
      }, duration / 20);
    });
  };

  // 模拟批量上传
  const handleUpload = async () => {
    if (!loginStatus) {
      message.error('请先登录系统！');
      return;
    }
    
    setUploading(true);
    setUploadedCount(0);
    setTotalFiles(mockFiles.length);
    addLog(`开始批量上传 ${mockFiles.length} 个文件`);
    
    // 逐个上传文件
    for (let i = 0; i < mockFiles.length; i++) {
      await uploadFile(mockFiles[i], i);
    }
    
    setUploading(false);
    addLog('批量上传任务完成');
    message.success('上传任务已完成！');
  };

  // 清除日志
  const clearLogs = () => {
    setLogMessages([]);
  };

  // 退出登录
  const handleLogout = () => {
    setLoginStatus(false);
    setUploadedCount(0);
    setUploadProgress(0);
    setCurrentFile('');
    addLog('已退出系统');
  };

  // 渲染界面
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-4">
      <header className="bg-blue-600 text-white p-4 rounded-lg mb-4">
        <h1 className="text-2xl font-bold">PMIS资料自动上传助手</h1>
        <p className="text-sm mt-1">实现无人值守批量上传，提高工作效率</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 左侧面板：系统设置 */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 border-b pb-2 flex items-center">
            <span className="mr-2">系统设置</span>
          </h2>
          
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">选择系统:</label>
            <select 
              className="w-full p-2 border rounded"
              value={selectedSystem}
              onChange={(e) => setSelectedSystem(e.target.value)}
              disabled={loginStatus}
            >
              <option>PMIS系统</option>
              <option>PMS系统</option>
              <option>建设CAD</option>
              <option>其他系统</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">服务器地址:</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded"
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
              disabled={loginStatus}
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">用户名:</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loginStatus}
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">密码:</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loginStatus}
            />
          </div>
          
          <div className="mb-4 flex items-center">
            <label className="block mr-2 text-gray-700">自动模式:</label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                checked={autoMode}
                onChange={() => setAutoMode(!autoMode)}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label 
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${autoMode ? 'bg-green-400' : 'bg-gray-300'}`}
              ></label>
            </div>
            <span className="text-sm text-gray-700">{autoMode ? '启用' : '禁用'}</span>
          </div>
          
          <div className="flex space-x-2">
            {!loginStatus ? (
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                onClick={handleLogin}
                disabled={uploading}
              >
                {uploading ? '登录中...' : '登录系统'}
              </button>
            ) : (
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
                onClick={handleLogout}
                disabled={uploading}
              >
                退出登录
              </button>
            )}
          </div>
        </div>
        
        {/* 中间面板：上传控制 */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 border-b pb-2 flex items-center">
            <span className="mr-2">上传控制</span>
            {loginStatus && <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">已连接</span>}
          </h2>
          
          {loginStatus ? (
            <>
              <div className="mb-4">
                <h3 className="font-medium mb-2">待上传文件列表</h3>
                <div className="border rounded max-h-64 overflow-y-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文件名</th>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">大小</th>
                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockFiles.map((file, index) => (
                        <tr key={index} className={uploadedCount > index ? 'bg-green-50' : ''}>
                          <td className="py-2 px-3 whitespace-nowrap">{file.name}</td>
                          <td className="py-2 px-3 whitespace-nowrap">{file.size}</td>
                          <td className="py-2 px-3 whitespace-nowrap">{file.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {uploading && (
                <div className="mb-4">
                  <h3 className="font-medium mb-2">当前进度</h3>
                  <div className="mb-2 text-sm flex justify-between">
                    <span>正在上传: {currentFile}</span>
                    <span>{uploadedCount}/{totalFiles} 文件</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-blue-600 h-4 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="flex space-x-2">
                <button 
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                  onClick={handleUpload}
                  disabled={uploading}
                >
                  {uploading ? '上传中...' : '开始上传'}
                </button>
                {uploading && (
                  <button 
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  >
                    暂停
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="flex h-64 items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="mb-4">请先登录系统</p>
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
            </div>
          )}
        </div>
        
        {/* 右侧面板：日志记录 */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-bold">操作日志</h2>
            <button 
              className="text-sm text-gray-500 hover:text-gray-700"
              onClick={clearLogs}
            >
              清空
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto bg-gray-100 p-2 rounded font-mono text-xs">
            {logMessages.length > 0 ? (
              logMessages.map((log, index) => (
                <div key={index} className="py-1 border-b border-gray-200 last:border-0">
                  {log}
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-center py-4">暂无日志记录</div>
            )}
          </div>
          
          <h2 className="text-lg font-bold mb-2 mt-4 border-b pb-2">上传结果</h2>
          <div className="overflow-y-auto max-h-48">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文件名</th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {uploadResults.map((result) => (
                  <tr key={result.id}>
                    <td className="py-2 px-3 whitespace-nowrap">{result.fileName}</td>
                    <td className="py-2 px-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 text-xs font-semibold rounded-full ${
                        result.status === '成功' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {result.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <footer className="mt-4 text-center text-gray-500 text-sm">
        <p>PMIS资料自动上传助手 v1.0 © 2025</p>
      </footer>
      
      {/* CSS for toggle switch */}
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #68D391;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #68D391;
        }
        .toggle-checkbox {
          right: 0;
          z-index: 5;
        }
        .toggle-label {
          display: block;
          overflow: hidden;
          cursor: pointer;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default PMISUploadAssistant;
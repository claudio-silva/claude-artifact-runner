import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Copy, FileUp, Download, AlertCircle, X } from 'lucide-react';
import { createPreviewHTML } from './preview-components';

interface ErrorType {
  message: string;
  stack?: string;
}

// 简化版的React预览组件
const ReactPreviewLite: React.FC = () => {
  const DEFAULT_CODE = `
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">React 计数器示例</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="text-6xl font-bold">{count}</div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setCount(count - 1)}
              disabled={count <= 0}
            >
              减少
            </Button>
            <Button onClick={() => setCount(count + 1)}>
              增加
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
`;

  const [code, setCode] = useState<string>(DEFAULT_CODE);
  const [error, setError] = useState<ErrorType | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [lastRefreshTime, setLastRefreshTime] = useState<string>('');
  const [needsRefresh, setNeedsRefresh] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [timeoutWarning, setTimeoutWarning] = useState<boolean>(false);
  
  // 刷新预览
  const handleRefresh = () => {
    if (iframeRef.current) {
      setLoading(true);
      setError(null);
      setLogs([]);
      setTimeoutWarning(false);
      
      // 设置超时警告，如果10秒后仍然在加载则显示警告
      const timeoutTimer = setTimeout(() => {
        if (loading) {
          setTimeoutWarning(true);
        }
      }, 10000);
      
      const iframe = iframeRef.current;
      const html = createPreviewHTML(code);
      
      iframe.srcdoc = html;
      setLastRefreshTime(new Date().toLocaleTimeString());
      setNeedsRefresh(false);
      
      // 清除超时定时器
      return () => clearTimeout(timeoutTimer);
    }
  };
  
  // 监听代码变化
  useEffect(() => {
    setNeedsRefresh(true);
  }, [code]);
  
  // 初始加载
  useEffect(() => {
    // 短暂延迟，确保组件已完全挂载
    const timer = setTimeout(() => {
      handleRefresh();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 监听来自 iframe 的消息
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'error') {
        setError(event.data.error);
        setLoading(false);
      } else if (event.data.type === 'console') {
        setLogs(prev => [...prev, ...event.data.args]);
      } else if (event.data.type === 'ready') {
        // iframe已准备就绪
        console.log('iframe已准备就绪');
        // 不立即设置loading=false，等待组件实际渲染完成
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  
  // 监听 iframe 加载完成
  useEffect(() => {
    const handleLoad = () => {
      console.log('iframe内容已加载');
      // 给一点时间让内部JavaScript执行
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
      
      return () => {
        iframe.removeEventListener('load', handleLoad);
      };
    }
  }, []);
  
  // 代码编辑器组件
  const CodeEditor = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setCode(e.target.result);
        }
      };
      reader.readAsText(file);
    };
    
    const handleCopyCode = () => {
      navigator.clipboard.writeText(code);
    };
    
    const handleUploadClick = () => {
      fileInputRef.current?.click();
    };
    
    const handleDownloadCode = () => {
      const blob = new Blob([code], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'react-component.jsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
    
    const handleResetCode = () => {
      if (window.confirm('确定要重置为默认代码示例吗？')) {
        setCode(DEFAULT_CODE);
      }
    };
    
    return (
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-2 py-2 border-b">
          <div className="text-sm font-medium">React 代码</div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleResetCode}
              className="h-8"
            >
              重置示例
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleUploadClick}
              className="h-8"
            >
              <FileUp className="h-4 w-4 mr-1" /> 上传
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCopyCode}
              className="h-8"
            >
              <Copy className="h-4 w-4 mr-1" /> 复制
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDownloadCode}
              className="h-8"
            >
              <Download className="h-4 w-4 mr-1" /> 下载
            </Button>
          </div>
        </div>
        <div className="relative flex-1 border rounded-md overflow-hidden">
          <textarea
            className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            placeholder="// 粘贴 React 代码到这里"
          />
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileUpload} 
            accept=".jsx,.js,.tsx,.ts,.txt" 
            className="hidden"
          />
        </div>
      </div>
    );
  };
  
  // 预览组件
  const IframePreview = () => {
    return (
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-2 py-2 border-b">
          <div className="text-sm font-medium">
            预览 {lastRefreshTime && `(${lastRefreshTime})`}
          </div>
          <div className="flex items-center space-x-3">
            {needsRefresh && (
              <span className="text-xs text-yellow-600 font-medium">代码已更改，需要刷新</span>
            )}
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleRefresh}
              className="h-8"
              disabled={loading && !timeoutWarning}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {timeoutWarning ? '加载时间较长，点击取消' : '加载中...'}
                </span>
              ) : (
                <>
                  <svg 
                    className="h-4 w-4 mr-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                    />
                  </svg>
                  刷新
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="flex-1 border rounded-md overflow-hidden relative">
          {/* 加载中动画层 */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-10">
              <div className="text-center">
                <svg className="mx-auto animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {timeoutWarning ? 
                    '加载时间较长，可能是网络问题或代码复杂度高' : 
                    '正在渲染组件...'}
                </p>
                {timeoutWarning && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLoading(false)}
                    className="mt-4"
                  >
                    <X className="h-4 w-4 mr-1" /> 取消加载
                  </Button>
                )}
              </div>
            </div>
          )}
          
          {/* iframe 容器 */}
          <iframe
            ref={iframeRef}
            title="预览"
            className="w-full h-full"
            sandbox="allow-scripts allow-forms allow-same-origin"
          />
          
          {/* 错误提示层 */}
          {error && (
            <div className="absolute inset-0 bg-white dark:bg-gray-900 p-4 overflow-auto">
              <div className="max-w-3xl mx-auto">
                <div className="border rounded-lg p-5 shadow bg-white dark:bg-gray-800">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-medium text-red-600">渲染错误</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    代码运行时出现错误，请检查并修复以下问题:
                  </p>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm font-mono overflow-auto">
                    <p className="text-red-600">{error.message}</p>
                    {error.stack && (
                      <pre className="mt-2 text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {error.stack}
                      </pre>
                    )}
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setError(null)}
                    >
                      关闭
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {logs.length > 0 && (
          <div className="mt-4 border rounded-md bg-black text-white p-2 h-32 overflow-auto">
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs font-semibold">控制台输出:</div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLogs([])}
                className="h-6 text-xs py-0 px-2 bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
              >
                清除
              </Button>
            </div>
            {logs.map((log, i) => (
              <div key={i} className="text-xs font-mono">{log}</div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="container mx-auto p-6 h-screen flex flex-col">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">React 预览器</h1>
        <p className="text-muted-foreground">在右侧编辑代码，左侧实时预览渲染效果</p>
      </header>
      
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 border rounded-lg overflow-hidden"
      >
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full p-4">
            <IframePreview />
          </div>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full p-4">
            <CodeEditor />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      
      <footer className="mt-6 text-center text-sm text-muted-foreground">
        <p>优化版React组件预览 - 使用国内CDN加速</p>
      </footer>
    </div>
  );
};

export default ReactPreviewLite; 
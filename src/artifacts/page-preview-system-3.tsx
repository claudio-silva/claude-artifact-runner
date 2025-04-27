import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Frame from 'react-frame-component';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { 
  Code, Maximize2, Minimize2, Copy, 
  CheckCircle2, Trash2, ExternalLink
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Users, ClipboardList, Calendar, Target, Flag, Rocket, Map, BarChart2, Monitor, FileCheck, Wrench, GitMerge, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



// 默认的初始代码
const defaultCode = `function MyPage() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">我的React页面</h1>
      <p className="text-lg text-gray-700 mb-4">
        这是一个简单的React页面。请在左侧编辑区修改这段代码，右侧会实时显示预览效果。
      </p>
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-700">计数器: {count}</p>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-md mt-2"
          onClick={() => setCount(count + 1)}
        >
          增加
        </button>
      </div>
    </div>
  );
}`;

// 模拟外部依赖导入
const mockImports = `
// 这些导入在预览环境中自动可用
import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
`;

const PagePreviewSystem = () => {
  const [code, setCode] = useState(defaultCode);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fullScreenPreview, setFullScreenPreview] = useState(false);
  const [showMockImports, setShowMockImports] = useState(true);
  const { toast } = useToast();

  // 复制代码到剪贴板
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "复制成功",
        description: "代码已复制到剪贴板",
      });
    });
  };

  // 清空编辑器
  const clearEditor = () => {
    if (confirm('确定要清空编辑器吗？当前代码将会丢失。')) {
      setCode('');
      toast({
        title: "已清空",
        description: "编辑器已清空",
      });
    }
  };

  // 重置编辑器到默认状态
  const resetEditor = () => {
    if (code !== defaultCode && confirm('确定要重置编辑器吗？当前代码将会丢失。')) {
      setCode(defaultCode);
      toast({
        title: "已重置",
        description: "编辑器已重置为默认状态",
      });
    }
  };

  // 所有可用组件的作用域
  const scope = {
    React, 
    useState: React.useState, 
    useEffect: React.useEffect,
    useNavigate: useNavigate,
    Card, CardHeader, CardTitle, CardDescription, CardContent,
    ChevronLeft, ChevronRight, Users, ClipboardList, Calendar, Target, Flag, Rocket, Map, BarChart2, Monitor, FileCheck, Wrench, GitMerge, Home,
    // 模拟framer-motion
    motion: {
      div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
    Tabs: Tabs,
    Button: Button,
    
  };

  // 在全屏模式下的样式
  const fullScreenStyle = fullScreenPreview ? {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 50,
    background: darkMode ? '#1e1e1e' : 'white',
  } : {};

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto p-4 bg-background text-foreground">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">React页面预览系统</h1>
              <p className="text-muted-foreground">实时预览和编辑完整的React页面</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor="show-imports">显示模拟导入</Label>
                <Switch 
                  id="show-imports" 
                  checked={showMockImports} 
                  onCheckedChange={setShowMockImports} 
                />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="dark-mode">暗色模式</Label>
                <Switch 
                  id="dark-mode" 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode} 
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="mr-6">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="dark-mode" className="min-w-24">暗色模式预览</Label>
                  <Switch 
                    id="dark-mode" 
                    checked={darkMode} 
                    onCheckedChange={setDarkMode} 
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={clearEditor}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>清空编辑器</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={resetEditor}>
                      <Code className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>重置到默认代码</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={copyToClipboard}>
                      {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copied ? "已复制" : "复制代码"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => setFullScreenPreview(!fullScreenPreview)}>
                      {fullScreenPreview ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{fullScreenPreview ? "退出全屏" : "全屏预览"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          {fullScreenPreview ? (
            <div style={fullScreenStyle}>
              <div className="absolute top-4 right-4 z-50">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setFullScreenPreview(false)}
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
              </div>
              <LiveProvider code={code} scope={scope} noInline={code.includes('render()')}>
                <Frame 
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  head={
                    <>
                      <link rel="stylesheet" href="/src/index.css" />
                      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
                      {darkMode && <style>{`:root { color-scheme: dark; }`}</style>}
                    </>
                  }
                  className={darkMode ? 'dark' : ''}
                >
                  <div className={`h-full p-4 ${darkMode ? 'dark bg-background text-foreground' : 'bg-white'}`}>
                    <LivePreview />
                  </div>
                </Frame>
              </LiveProvider>
            </div>
          ) : (
            <ResizablePanelGroup direction="horizontal" className="min-h-[700px] border rounded-lg overflow-hidden">
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="h-full flex flex-col">
                  <div className="p-2 bg-muted/20 border-b flex justify-between items-center">
                    <div className="flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      <h3 className="font-medium">代码编辑器</h3>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      React.js
                    </Badge>
                  </div>
                  <div className="flex-1 overflow-auto">
                    {showMockImports && (
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 text-xs font-mono overflow-x-auto">
                        <pre>{`// 这些库在预览环境中自动可用
import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'framer-motion';`}</pre>
                      </div>
                    )}
                    <LiveProvider code={code} scope={scope} noInline={code.includes('render()')}>
                      <div className="h-full p-4">
                        <LiveEditor 
                          onChange={setCode}
                          style={{ 
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 14,
                            minHeight: showMockImports ? 'calc(100% - 100px)' : '100%',
                            background: 'transparent',
                            overflowY: 'auto',
                            height: '100%'
                          }}
                        />
                      </div>
                    </LiveProvider>
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle />
              
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="h-full flex flex-col">
                  <div className="p-2 bg-muted/10 border-b flex justify-between items-center">
                    <div className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <h3 className="font-medium">页面预览</h3>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8"
                            onClick={() => setFullScreenPreview(true)}
                          >
                            <Maximize2 className="h-3 w-3 mr-1" />
                            全屏预览
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>在全屏模式下预览页面</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <LiveProvider code={code} scope={scope}>
                      <Frame 
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        head={
                          <>
                            <base target="_blank" />
                            <style>
                              {`
                                html, body { 
                                  margin: 0; 
                                  padding: 0; 
                                  height: 100%; 
                                  background: ${darkMode ? '#1e1e1e' : '#ffffff'};
                                  color: ${darkMode ? '#ffffff' : '#000000'};
                                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                                }
                                .container { max-width: 1200px; margin: 0 auto; padding: 1rem; }
                                
                                /* 基础颜色 */
                                .text-white { color: #ffffff; }
                                .bg-white { background-color: #ffffff; }
                                .text-gray-500 { color: #6b7280; }
                                .text-gray-600 { color: #4b5563; }
                                .text-gray-700 { color: #374151; }
                                .bg-gray-50 { background-color: #f9fafb; }
                                .bg-gray-100 { background-color: #f3f4f6; }
                                .bg-gray-200 { background-color: #e5e7eb; }
                                .border-gray-200 { border-color: #e5e7eb; }
                                
                                /* 蓝色 */
                                .text-blue-600 { color: #2563eb; }
                                .text-blue-700 { color: #1d4ed8; }
                                .text-blue-800 { color: #1e40af; }
                                .bg-blue-50 { background-color: #eff6ff; }
                                .bg-blue-600 { background-color: #2563eb; }
                                .bg-blue-800 { background-color: #1e40af; }
                                .border-blue-200 { border-color: #bfdbfe; }
                                
                                /* 绿色 */
                                .text-green-600 { color: #16a34a; }
                                .text-green-700 { color: #15803d; }
                                .text-green-800 { color: #166534; }
                                .bg-green-50 { background-color: #f0fdf4; }
                                .bg-green-500 { background-color: #22c55e; }
                                
                                /* 黄色 */
                                .text-amber-600 { color: #d97706; }
                                .text-amber-700 { color: #b45309; }
                                .text-amber-800 { color: #92400e; }
                                .bg-amber-50 { background-color: #fffbeb; }
                                
                                /* 红色 */
                                .text-red-800 { color: #991b1b; }
                                .bg-red-50 { background-color: #fef2f2; }
                                .bg-red-500 { background-color: #ef4444; }
                                .border-red-200 { border-color: #fecaca; }
                                
                                /* 基础布局 */
                                .flex { display: flex; }
                                .grid { display: grid; }
                                .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
                                .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                                .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                                .gap-4 { gap: 1rem; }
                                .gap-6 { gap: 1.5rem; }
                                .space-y-2 > * + * { margin-top: 0.5rem; }
                                .space-y-4 > * + * { margin-top: 1rem; }
                                .space-y-6 > * + * { margin-top: 1.5rem; }
                                
                                /* 文本样式 */
                                .text-xs { font-size: 0.75rem; }
                                .text-sm { font-size: 0.875rem; }
                                .text-lg { font-size: 1.125rem; }
                                .text-2xl { font-size: 1.5rem; }
                                .text-3xl { font-size: 1.875rem; }
                                .font-medium { font-weight: 500; }
                                .font-semibold { font-weight: 600; }
                                .font-bold { font-weight: 700; }
                                
                                /* 边框和圆角 */
                                .border { border: 1px solid #e5e7eb; }
                                .border-b { border-bottom: 1px solid #e5e7eb; }
                                .rounded-lg { border-radius: 0.5rem; }
                                .rounded-full { border-radius: 9999px; }
                                
                                /* 尺寸和间距 */
                                .p-4 { padding: 1rem; }
                                .p-6 { padding: 1.5rem; }
                                .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
                                .px-4 { padding-left: 1rem; padding-right: 1rem; }
                                .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
                                .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
                                .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
                                .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
                                .mb-1 { margin-bottom: 0.25rem; }
                                .mb-2 { margin-bottom: 0.5rem; }
                                .mb-4 { margin-bottom: 1rem; }
                                .mb-6 { margin-bottom: 1.5rem; }
                                .mt-1 { margin-top: 0.25rem; }
                                .mt-2 { margin-top: 0.5rem; }
                                .mt-4 { margin-top: 1rem; }
                                .mt-6 { margin-top: 1.5rem; }
                                .mr-3 { margin-right: 0.75rem; }
                                .ml-auto { margin-left: auto; }
                                
                                /* 布局和定位 */
                                .relative { position: relative; }
                                .overflow-hidden { overflow: hidden; }
                                .overflow-x-auto { overflow-x: auto; }
                                .justify-between { justify-content: space-between; }
                                .items-center { align-items: center; }
                                .items-start { align-items: flex-start; }
                                
                                /* 杂项 */
                                .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                                .whitespace-nowrap { white-space: nowrap; }
                                .cursor-pointer { cursor: pointer; }
                                .uppercase { text-transform: uppercase; }
                                
                                /* 表格样式 */
                                table { width: 100%; border-collapse: collapse; }
                                th { text-align: left; padding: 0.75rem 1rem; font-weight: 500; }
                                td { padding: 1rem; }
                                .divide-y > * + * { border-top: 1px solid #e5e7eb; }
                                
                                /* 响应式 */
                                @media (min-width: 768px) {
                                  .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                                  .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                                }
                                
                                /* 渐变 */
                                .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
                                .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(37, 99, 235, 0)); }
                                .to-blue-800 { --tw-gradient-to: #1e40af; }
                                
                                /* 进度条 */
                                .h-2\\.5 { height: 0.625rem; }
                                .w-full { width: 100%; }
                                
                                /* 暗黑模式 */
                                ${darkMode ? `
                                  .bg-white { background-color: #1e1e1e; }
                                  .text-gray-500 { color: #9ca3af; }
                                  .text-gray-600 { color: #d1d5db; }
                                  .text-gray-700 { color: #e5e7eb; }
                                  .bg-gray-50 { background-color: #374151; }
                                  .bg-gray-100 { background-color: #4b5563; }
                                  .bg-gray-200 { background-color: #6b7280; }
                                  .border-gray-200 { border-color: #4b5563; }
                                  .border { border-color: #4b5563; }
                                ` : ''}
                              `}
                            </style>
                          </>
                        }
                      >
                        <div style={{ padding: '16px', height: '100%', overflow: 'auto' }}>
                          <LivePreview />
                          <LiveError style={{ 
                            color: '#ef4444',
                            backgroundColor: '#fee2e2',
                            padding: '8px',
                            marginTop: '16px',
                            borderRadius: '4px',
                            whiteSpace: 'pre-wrap',
                            fontSize: '14px'
                          }} />
                        </div>
                      </Frame>
                    </LiveProvider>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          )}
        </div>
      </div>


    </div>
  );
};

export default PagePreviewSystem;
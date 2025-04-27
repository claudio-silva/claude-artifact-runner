import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Frame from 'react-frame-component';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

import { 
  Code, Maximize2, Minimize2, Copy, 
  CheckCircle2, Trash2, ExternalLink
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';

// 默认的初始代码
const defaultCode = `import React from 'react';

const MyPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">我的React页面</h1>
      <p className="text-lg text-gray-700 mb-4">
        这是一个简单的React页面。请在左侧编辑区修改这段代码，右侧会实时显示预览效果。
      </p>
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-700">您可以尝试添加组件、修改样式或添加交互功能。</p>
      </div>
    </div>
  );
};

export default MyPage;`;

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
    motion: {
      div: ({ children, ...props }) => <div {...props}>{children}</div>,
      initial: () => ({}),
      animate: () => ({}),
      transition: () => ({})
    },
    Tabs: {
      Root: ({ children, ...props }) => <div {...props}>{children}</div>,
      List: ({ children, ...props }) => <div {...props}>{children}</div>,
      Trigger: ({ children, ...props }) => <button {...props}>{children}</button>,
      Content: ({ children, ...props }) => <div {...props}>{children}</div>
    },
    ResponsiveContainer: ({ children, ...props }) => <div style={{ height: '300px', width: '100%' }} {...props}>{children}</div>,
    LineChart: ({ children, ...props }) => <div style={{ height: '100%', width: '100%', background: '#f0f0f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...props}>线形图</div>,
    BarChart: ({ children, ...props }) => <div style={{ height: '100%', width: '100%', background: '#f0f0f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...props}>柱状图</div>,
    PieChart: ({ children, ...props }) => <div style={{ height: '100%', width: '100%', background: '#f0f0f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...props}>饼图</div>,
    Line: () => null,
    Bar: () => null,
    Pie: () => null,
    Cell: () => null,
    XAxis: () => null,
    YAxis: () => null,
    CartesianGrid: () => null,
    Tooltip: () => <div />,
    Legend: () => null,
    Button,
    Card, CardContent, CardHeader, CardTitle, CardDescription,
    TabsContent, TabsList, TabsTrigger,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
    ResizablePanelGroup, ResizablePanel, ResizableHandle,
    Switch, Label, Input, Textarea,
    Badge
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
                      <LiveEditor 
                        onChange={setCode}
                        style={{ 
                          fontFamily: '"Fira code", "Fira Mono", monospace',
                          fontSize: 14,
                          minHeight: showMockImports ? 'calc(100% - 100px)' : '100%',
                          background: 'transparent'
                        }}
                      />
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
                      <div className="p-2">
                        <LiveError className="text-red-500 p-2 mt-2 bg-red-50 dark:bg-red-950 rounded text-xs" />
                      </div>
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

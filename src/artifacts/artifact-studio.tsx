import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Home, Code, PanelLeft, Library, Eye, CheckCircle2 } from 'lucide-react';

// 代码编辑器组件
const CodeEditor = ({ code, setCode }) => {
  const fileInputRef = React.useRef(null);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
    };
    reader.readAsText(file);
  };
  
  const handleDropZoneClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">编辑器</span>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleDropZoneClick}
          className="text-xs h-8"
        >
          上传文件
        </Button>
      </div>
      <div className="relative w-full h-[450px] rounded-md border border-input bg-background">
        <textarea
          className="w-full h-full p-3 font-mono text-sm resize-none focus:outline-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// 粘贴Claude生成的代码到这里"
        />
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileUpload} 
          accept=".tsx,.jsx,.js,.ts" 
          className="hidden"
        />
      </div>
    </div>
  );
};

// 组件预览
const ArtifactPreview = ({ code }) => {
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('preview'); // 'preview' or 'code'
  const [previewScale, setPreviewScale] = useState(1);
  
  if (!code.trim()) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>输入代码后在此处预览</p>
      </div>
    );
  }
  
  const detectComponentType = () => {
    // 简单检测代码中包含的组件类型
    if (code.includes('@/components/ui/table') || code.includes('Table')) {
      return '数据表格组件';
    } else if (code.includes('@/components/ui/form') || code.includes('form') || code.includes('input')) {
      return '表单组件';
    } else if (code.includes('useState') || code.includes('useEffect')) {
      return '带状态管理的组件';
    } else {
      return '基础UI组件';
    }
  };
  
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="border-b p-2 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <Button 
            variant={viewMode === 'preview' ? 'default' : 'outline'} 
            size="sm"
            className="h-7 text-xs px-2"
            onClick={() => setViewMode('preview')}
          >
            预览
          </Button>
          <Button 
            variant={viewMode === 'code' ? 'default' : 'outline'} 
            size="sm"
            className="h-7 text-xs px-2"
            onClick={() => setViewMode('code')}
          >
            代码
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">缩放:</span>
          <Button 
            variant="outline" 
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => setPreviewScale(Math.max(0.5, previewScale - 0.1))}
          >
            -
          </Button>
          <span className="text-xs">{Math.round(previewScale * 100)}%</span>
          <Button 
            variant="outline" 
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => setPreviewScale(Math.min(2, previewScale + 0.1))}
          >
            +
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        {viewMode === 'preview' ? (
          <div className="p-4">
            <div className="mb-2 flex justify-between items-center">
              <span className="text-xs font-medium">组件类型: {detectComponentType()}</span>
              <span className="text-xs text-muted-foreground">代码长度: {code.length} 字符</span>
            </div>
            
            <div 
              className="border p-6 rounded-md bg-slate-50 dark:bg-slate-900 transition-all" 
              style={{transform: `scale(${previewScale})`, transformOrigin: 'top left'}}
            >
              <div className="min-h-[120px] flex items-center justify-center">
                <Alert>
                  <div className="flex flex-col">
                    <p className="text-amber-600 font-medium">预览模式</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      实际实现中，这里会动态渲染组件，目前仅为示意
                    </p>
                  </div>
                </Alert>
              </div>
            </div>
            
            <div className="mt-4 p-4 border rounded-md bg-blue-50 dark:bg-blue-950">
              <h4 className="font-medium text-sm">实现说明</h4>
              <p className="text-xs text-muted-foreground mt-1">
                完整实现需要使用如React.lazy、动态import和安全的eval策略来渲染组件。
                还可以使用沙箱技术如iframes来隔离执行环境，确保安全性。
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 h-full">
            <pre className="text-xs overflow-auto p-4 bg-slate-100 dark:bg-slate-800 rounded-md h-full">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

// 组件库浏览器
const ComponentBrowser = () => {
  const componentCategories = [
    {
      name: '表单组件',
      components: [
        { name: 'Button', description: '按钮组件，支持多种变体和尺寸' },
        { name: 'Input', description: '输入框组件，用于收集用户输入' },
        { name: 'Checkbox', description: '复选框组件，用于多选场景' },
        { name: 'Select', description: '下拉选择框，支持单选和多选' },
        { name: 'Textarea', description: '文本域组件，用于多行文本输入' },
      ]
    },
    {
      name: '布局组件',
      components: [
        { name: 'Card', description: '卡片组件，用于包裹内容' },
        { name: 'Dialog', description: '对话框组件，用于显示重要信息' },
        { name: 'Tabs', description: '标签页组件，用于内容分类展示' },
        { name: 'Accordion', description: '手风琴组件，用于折叠内容' },
      ]
    },
    {
      name: '导航组件',
      components: [
        { name: 'Breadcrumb', description: '面包屑导航，显示当前页面位置' },
        { name: 'Dropdown', description: '下拉菜单，提供多级操作选项' },
        { name: 'Pagination', description: '分页组件，用于大量数据分页显示' },
      ]
    },
    {
      name: '数据展示',
      components: [
        { name: 'Table', description: '表格组件，用于结构化数据展示' },
        { name: 'Avatar', description: '头像组件，用于用户信息展示' },
        { name: 'Badge', description: '徽章组件，用于状态或数量提示' },
      ]
    },
  ];

  return (
    <div className="p-4">
      {componentCategories.map((category, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.components.map((component, j) => (
              <Card key={j} className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{component.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">查看示例</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {i < componentCategories.length - 1 && <Separator className="my-6" />}
        </div>
      ))}
    </div>
  );
};

// 代码模板
const codeTemplates = {
  basic: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MyComponent = () => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>我的组件</CardTitle>
        </CardHeader>
        <CardContent>
          <p>这是一个基础组件模板，可以根据需要修改。</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyComponent;`,

  withState: `import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>计数器组件</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-2xl font-bold">{count}</p>
          <div className="flex justify-center space-x-2">
            <Button onClick={() => setCount(count - 1)}>减少</Button>
            <Button onClick={() => setCount(count + 1)}>增加</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounterComponent;`,

  dataDisplay: `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DataDisplayComponent = () => {
  const data = [
    { id: 1, name: '张三', age: 28, role: '开发者' },
    { id: 2, name: '李四', age: 32, role: '设计师' },
    { id: 3, name: '王五', age: 24, role: '产品经理' },
  ];

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>数据展示组件</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>姓名</TableHead>
                <TableHead>年龄</TableHead>
                <TableHead>角色</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataDisplayComponent;`
};

// 主界面组件
const ArtifactStudio = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const [code, setCode] = useState('');
  const [fileName, setFileName] = useState('NewArtifact.tsx');
  const [error, setError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  
  // 清除成功消息
  useEffect(() => {
    if (saveSuccess) {
      const timer = setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [saveSuccess]);

  // 处理代码保存
  const handleSaveCode = () => {
    if (!code.trim()) {
      setError('请输入代码内容');
      return;
    }
    
    if (!fileName.endsWith('.tsx') && !fileName.endsWith('.jsx')) {
      setError('文件名必须以.tsx或.jsx结尾');
      return;
    }
    
    // 这里实际应用中需连接后端API保存文件
    // 模拟保存成功
    setError('');
    setSaveSuccess(true);
    
    // 实际项目中，这里应该调用API保存文件到src/artifacts/目录
    console.log('保存文件:', fileName, '内容长度:', code.length);
  };

  // 导航到主页
  const goToHome = () => {
    // 在实际应用中这里使用导航
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center px-4">
          <div className="flex items-center space-x-2 font-bold">
            <PanelLeft className="h-6 w-6" />
            <span>Artifact Studio</span>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={goToHome}>
              <Home className="mr-2 h-4 w-4" />
              返回主页
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="editor" className="flex items-center">
                <Code className="mr-2 h-4 w-4" />
                代码编辑器
              </TabsTrigger>
              <TabsTrigger value="components" className="flex items-center">
                <Library className="mr-2 h-4 w-4" />
                组件库浏览器
              </TabsTrigger>
            </TabsList>
            
            {activeTab === 'editor' && (
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowTemplates(!showTemplates)}
                  >
                    使用模板
                  </Button>
                  
                  {showTemplates && (
                    <div className="absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        <button 
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => {
                            setCode(codeTemplates.basic);
                            setFileName('BasicComponent.tsx');
                            setShowTemplates(false);
                          }}
                        >
                          基础组件模板
                        </button>
                        <button 
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => {
                            setCode(codeTemplates.withState);
                            setFileName('CounterComponent.tsx');
                            setShowTemplates(false);
                          }}
                        >
                          状态管理组件模板
                        </button>
                        <button 
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => {
                            setCode(codeTemplates.dataDisplay);
                            setFileName('DataDisplayComponent.tsx');
                            setShowTemplates(false);
                          }}
                        >
                          数据展示组件模板
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={handleSaveCode}
                >
                  保存代码
                </Button>
              </div>
            )}
          </div>
          
          <TabsContent value="editor" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    代码编辑器
                  </CardTitle>
                  <CardDescription>
                    粘贴或编辑Claude生成的组件代码
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid w-full items-center gap-2">
                      <label htmlFor="fileName" className="text-sm font-medium">
                        文件名
                      </label>
                      <input
                        id="fileName"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                      />
                    </div>
                    <CodeEditor code={code} setCode={setCode} />
                  </div>
                </CardContent>
                <CardFooter>
                  {error && (
                    <Alert variant="destructive" className="w-full">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  {saveSuccess && (
                    <Alert className="w-full border-green-500">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <AlertDescription className="text-green-500">代码保存成功</AlertDescription>
                    </Alert>
                  )}
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="mr-2 h-5 w-5" />
                    实时预览
                  </CardTitle>
                  <CardDescription>
                    实时查看组件渲染效果
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[500px] border rounded-md overflow-hidden">
                  <ArtifactPreview code={code} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Library className="mr-2 h-5 w-5" />
                  Shadcn UI 组件库浏览器
                </CardTitle>
                <CardDescription>
                  浏览和探索可用的UI组件
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[70vh] rounded-md border">
                  <ComponentBrowser />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ArtifactStudio;

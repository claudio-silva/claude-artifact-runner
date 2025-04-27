import React, { useState, useEffect } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Frame from 'react-frame-component';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, Save, Download, Share2, Clipboard, CheckCircle2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import * as Accordion from '@/components/ui/accordion';
import * as Alert from '@/components/ui/alert';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Checkbox from '@/components/ui/checkbox';
import * as Dialog from '@/components/ui/dialog';
import * as DropdownMenu from '@/components/ui/dropdown-menu';
import * as Input from '@/components/ui/input';
import * as Popover from '@/components/ui/popover';
import * as Progress from '@/components/ui/progress';
import * as RadioGroup from '@/components/ui/radio-group';
import * as Separator from '@/components/ui/separator';
import * as Slider from '@/components/ui/slider';
import * as Textarea from '@/components/ui/textarea';
import * as Toast from '@/components/ui/toast';
import * as Tooltip from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';

// 预设组件示例
const examples = {
  'Button': `<Button variant="default">
  Click Me
</Button>`,
  'Card': `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
</Card>`,
  'Form': `() => {
  const [value, setValue] = React.useState("");
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input 
          id="name" 
          placeholder="Enter your name" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Button disabled={!value}>Submit</Button>
    </div>
  );
}`,
  'Tabs': `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings</TabsContent>
  <TabsContent value="password">Change password</TabsContent>
</Tabs>`,
  'Progress': `() => {
  const [progress, setProgress] = React.useState(13);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return <Progress value={progress} className="w-full" />;
}`,
  'Dialog': `() => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <Dialog.Dialog open={open} onOpenChange={setOpen}>
      <Dialog.DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent>
        <Dialog.DialogHeader>
          <Dialog.DialogTitle>Dialog Title</Dialog.DialogTitle>
          <Dialog.DialogDescription>
            This is a dialog description.
          </Dialog.DialogDescription>
        </Dialog.DialogHeader>
        <div className="py-4">Dialog content goes here</div>
        <Dialog.DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Dialog.DialogFooter>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}`
};

// 自定义模板组件示例
const templates = {
  'Empty': `// 输入你的代码
<div>
  <h1 className="text-2xl font-bold">Hello World</h1>
</div>`,
  'Basic Layout': `// 基础布局模板
<div className="p-4 max-w-4xl mx-auto">
  <header className="mb-6">
    <h1 className="text-3xl font-bold">页面标题</h1>
    <p className="text-gray-500">页面描述信息</p>
  </header>
  <main className="space-y-6">
    <section className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">区块标题</h2>
      <p>区块内容...</p>
    </section>
  </main>
</div>`,
  'Dashboard Card': `// 数据卡片模板
<Card>
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardTitle className="text-sm font-medium">总销售额</CardTitle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-muted-foreground"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">¥45,231.89</div>
    <p className="text-xs text-muted-foreground">
      +20.1% 较上月
    </p>
    <div className="mt-4 h-1 w-full bg-gray-100">
      <div className="h-1 bg-blue-500 w-3/4"></div>
    </div>
  </CardContent>
</Card>`,
  'Form Layout': `// 表单布局模板
() => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>用户信息</CardTitle>
        <CardDescription>请填写您的个人信息</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">邮箱</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <Button className="w-full">
            提交
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}`
};

const initialCode = examples['Button'];

const ComponentPreview = () => {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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

  // 加载示例代码
  const loadExample = (key) => {
    setCode(examples[key]);
  };

  // 加载模板代码
  const loadTemplate = (key) => {
    setCode(templates[key]);
  };

  // 所有可用组件的作用域
  const scope = {
    React, 
    useState: React.useState, 
    useEffect: React.useEffect,
    Button,
    Card, CardContent, CardHeader, CardTitle, CardDescription,
    Tabs, TabsContent, TabsList, TabsTrigger,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
    ResizablePanelGroup, ResizablePanel, ResizableHandle,
    Switch, Label, Input: Input.Input, Textarea: Textarea.Textarea,
    Progress: Progress.Progress,
    ...Accordion, ...Alert, ...Avatar, ...Badge, ...Checkbox,
    ...Dialog, ...DropdownMenu, ...Popover, ...RadioGroup,
    ...Separator, ...Slider, ...Toast, ...Tooltip
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto p-4 bg-background text-foreground">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">组件预览系统</h1>
            <div className="flex items-center space-x-2">
              <Label htmlFor="dark-mode">暗色模式</Label>
              <Switch 
                id="dark-mode" 
                checked={darkMode} 
                onCheckedChange={setDarkMode} 
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div>
              <Label>组件示例</Label>
              <Select onValueChange={loadExample}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="选择组件" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(examples).map((key) => (
                    <SelectItem key={key} value={key}>{key}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>模板</Label>
              <Select onValueChange={loadTemplate}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="选择模板" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(templates).map((key) => (
                    <SelectItem key={key} value={key}>{key}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end ml-auto">
              <Button variant="outline" onClick={copyToClipboard} className="flex gap-2">
                {copied ? <CheckCircle2 className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                {copied ? "已复制" : "复制代码"}
              </Button>
            </div>
          </div>
          
          <ResizablePanelGroup direction="horizontal" className="min-h-[600px] border rounded-lg overflow-hidden">
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="h-full p-2 bg-muted/20">
                <LiveProvider code={code} scope={scope} noInline={code.trim().startsWith('()')}>
                  <LiveEditor 
                    onChange={setCode}
                    style={{ 
                      fontFamily: '"Fira code", "Fira Mono", monospace',
                      fontSize: 14,
                      minHeight: '100%',
                      background: 'transparent'
                    }}
                  />
                </LiveProvider>
              </div>
            </ResizablePanel>
            
            <ResizableHandle />
            
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="p-2 bg-muted/10 border-b">
                  <h3 className="font-medium">预览</h3>
                </div>
                <div className="flex-1 p-4 overflow-auto">
                  <LiveProvider code={code} scope={scope} noInline={code.trim().startsWith('()')}>
                    <Frame 
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      head={
                        <>
                          <link rel="stylesheet" href="/src/index.css" />
                          {darkMode && <style>{`:root { color-scheme: dark; }`}</style>}
                        </>
                      }
                      className={darkMode ? 'dark' : ''}
                    >
                      <div className={`h-full p-4 ${darkMode ? 'dark bg-background text-foreground' : 'bg-white'}`}>
                        <LivePreview />
                      </div>
                    </Frame>
                    <LiveError className="text-red-500 p-2 mt-2 bg-red-50 rounded" />
                  </LiveProvider>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default ComponentPreview;

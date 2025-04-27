import React from 'react';
import { 
  Code, 
  Layers, 
  Box, 
  Zap, 
  FileText, 
  PlusCircle, 
  BookOpen, 
  BarChart3, 
  ChevronRight 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

// 为该页面添加元数据，方便在目录中显示
export const meta = {
  title: "项目介绍",
  description: "Claude Artifact Runner 项目概览",
  isHidden: false,
  category: "文档",
  order: 1
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      {/* 头部介绍 */}
      <div className="mb-12 text-center">
        <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
          <Code className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Claude Artifact Runner</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          一个专为运行和展示 Claude AI 生成的 Artifacts 设计的现代化 React 应用
        </p>
      </div>

      {/* 功能特点卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <FeatureCard 
          icon={<Box className="w-6 h-6 text-blue-500" />}
          title="基于文件的路由"
          description="每个 Artifact 文件自动成为一个可访问的路由页面，无需额外配置"
        />
        <FeatureCard 
          icon={<Layers className="w-6 h-6 text-purple-500" />}
          title="现代技术栈"
          description="基于 React 18、TypeScript、Vite 和 Tailwind CSS 构建的现代前端应用"
        />
        <FeatureCard 
          icon={<Zap className="w-6 h-6 text-yellow-500" />}
          title="丰富组件库"
          description="整合了 Shadcn UI、Recharts 等组件库，快速构建美观的界面"
        />
      </div>

      {/* 标签页内容 */}
      <Tabs defaultValue="overview" className="mb-16">
        <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-8">
          <TabsTrigger value="overview">项目概览</TabsTrigger>
          <TabsTrigger value="structure">文件结构</TabsTrigger>
          <TabsTrigger value="guide">使用指南</TabsTrigger>
        </TabsList>

        {/* 概览标签内容 */}
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>项目概览</CardTitle>
              <CardDescription>Claude Artifact Runner 的核心功能和设计理念</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Claude Artifact Runner 是一个专为展示和运行 Claude AI 生成的作品而设计的应用平台。它提供了一个简单、直观的方式来浏览和交互 AI 生成的内容。
                </p>
                <p>
                  <strong>主要功能：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>自动化路由系统，为每个 Artifact 文件创建独立路由</li>
                  <li>交互式目录浏览界面，方便导航到各个 Artifact</li>
                  <li>支持嵌套目录结构，便于组织大量 Artifact</li>
                  <li>基于 React 的响应式 UI，适配各种设备尺寸</li>
                  <li>内置多种可视化组件，支持数据可视化展示</li>
                  <li>易于部署和分享的架构设计</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 结构标签内容 */}
        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle>文件结构</CardTitle>
              <CardDescription>项目的主要目录和文件组织</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="font-mono text-sm p-4 bg-gray-50 rounded-md">
                  <pre className="whitespace-pre-wrap">
{`claude-artifact-runner/
  ├── src/
  │   ├── artifacts/         # 存放 Artifact 文件，每个文件自动成为一个路由
  │   │   ├── examples/      # 示例 Artifact 文件
  │   │   └── directory.tsx  # 目录浏览组件
  │   ├── components/        # UI 组件
  │   │   └── ui/            # Shadcn UI 组件
  │   ├── lib/               # 工具函数和辅助方法
  │   └── main.tsx           # 应用入口点，处理路由配置
  ├── public/                # 静态资源目录
  └── dist/                  # 编译输出目录`}
                  </pre>
                </div>
                <p>
                  项目的核心是 <code>src/artifacts/</code> 目录，所有放置在此目录下的 <code>.tsx</code> 文件都将自动成为可访问的页面。
                  系统会自动为每个文件生成对应的路由，并在目录浏览页面中显示。
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 指南标签内容 */}
        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle>使用指南</CardTitle>
              <CardDescription>如何创建和管理 Artifact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>创建新的 Artifact：</strong>
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>在 <code>src/artifacts/</code> 目录中创建新的 <code>.tsx</code> 文件</li>
                  <li>编写 React 组件，确保导出默认组件</li>
                  <li>可选：添加元数据以自定义在目录中的显示方式</li>
                </ol>

                <div className="p-4 bg-gray-50 rounded-md my-4">
                  <p className="font-semibold mb-2">Artifact 文件示例：</p>
                  <pre className="font-mono text-sm whitespace-pre-wrap">
{`// 示例：src/artifacts/my-artifact.tsx
import React from 'react';

// 可选：添加元数据
export const meta = {
  title: "我的 Artifact",
  description: "这是一个示例 Artifact",
  isHidden: false,
  category: "示例",
  order: 1
};

const MyComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">我的 Artifact</h1>
      <p>这是一个示例 Artifact 内容</p>
    </div>
  );
};

export default MyComponent;`}
                  </pre>
                </div>

                <p>
                  <strong>支持的库与组件：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>UI 组件：Shadcn UI 组件库</li>
                  <li>数据可视化：Recharts</li>
                  <li>图标：Lucide React</li>
                  <li>样式：Tailwind CSS</li>
                  <li>路由：React Router</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 快速链接 */}
      <h2 className="text-2xl font-bold mb-6">快速链接</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <LinkCard
          title="示例目录"
          description="浏览 Artifact 示例文件"
          onClick={() => navigate('/examples')}
          icon={<FileText className="w-5 h-5" />}
        />
        <LinkCard
          title="创建新 Artifact"
          description="学习如何创建自己的 Artifact"
          onClick={() => window.open('https://github.com/your-repo/claude-artifact-runner', '_blank')}
          icon={<PlusCircle className="w-5 h-5" />}
        />
        <LinkCard
          title="项目文档"
          description="查阅详细的项目文档"
          onClick={() => navigate('/documentation')}
          icon={<BookOpen className="w-5 h-5" />}
        />
        <LinkCard
          title="数据可视化示例"
          description="查看数据可视化相关的 Artifact 示例"
          onClick={() => navigate('/data-visualization')}
          icon={<BarChart3 className="w-5 h-5" />}
        />
      </div>

      {/* 底部 CTA */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">开始使用 Claude Artifact Runner</h3>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          探索 AI 生成的 Artifact，或创建自己的交互式内容
        </p>
        <Button size="lg" onClick={() => navigate('/')}>
          浏览项目目录
          <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

// 功能特点卡片组件
const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader className="pb-2">
      <div className="flex items-center space-x-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

// 链接卡片组件
const LinkCard = ({ title, description, icon, onClick }) => (
  <div 
    className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
    onClick={onClick}
  >
    <div className="p-3 bg-blue-100 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />
  </div>
);

export default About; 
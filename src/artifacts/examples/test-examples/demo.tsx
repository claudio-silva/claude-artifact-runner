import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { InfoIcon, AlertCircle, CheckCircle2 } from 'lucide-react';

// 添加页面元数据
export const meta = {
  title: "示例页面",
  description: "展示常用组件和交互效果的示例页面",
  isHidden: true,
  category: "示例",
  order: 1
};

const DemoPage = () => {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('basic');

  // 示例数据
  const features = [
    {
      title: '组件展示',
      description: '展示常用的UI组件和布局',
      icon: <InfoIcon className="w-4 h-4" />
    },
    {
      title: '交互演示',
      description: '展示状态管理和动画效果',
      icon: <AlertCircle className="w-4 h-4" />
    },
    {
      title: '最佳实践',
      description: '展示React开发的最佳实践',
      icon: <CheckCircle2 className="w-4 h-4" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4"
    >
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">组件示例页面</h1>
        <p className="text-gray-600">这个页面展示了各种常用组件和交互效果</p>
      </div>

      {/* 特性卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 标签页展示 */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList>
          <TabsTrigger value="basic">基础组件</TabsTrigger>
          <TabsTrigger value="interactive">交互组件</TabsTrigger>
          <TabsTrigger value="alerts">提示组件</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>基础组件示例</CardTitle>
              <CardDescription>展示常用的基础UI组件</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button variant="default">默认按钮</Button>
                <Button variant="secondary">次要按钮</Button>
                <Button variant="outline">轮廓按钮</Button>
                <Button variant="ghost">幽灵按钮</Button>
              </div>
              <div className="flex gap-2">
                <Badge>默认标签</Badge>
                <Badge variant="secondary">次要标签</Badge>
                <Badge variant="outline">轮廓标签</Badge>
                <Badge variant="destructive">警告标签</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactive">
          <Card>
            <CardHeader>
              <CardTitle>交互组件示例</CardTitle>
              <CardDescription>展示状态管理和动画效果</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCount(count - 1)}
                >
                  减少
                </Button>
                <span className="text-2xl font-bold">{count}</span>
                <Button 
                  variant="outline" 
                  onClick={() => setCount(count + 1)}
                >
                  增加
                </Button>
              </div>
              <motion.div
                animate={{ scale: count % 2 === 0 ? 1 : 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-gray-100 rounded-lg text-center"
              >
                计数器值: {count}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <div className="space-y-4">
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>提示</AlertTitle>
              <AlertDescription>
                这是一条普通信息提示
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>警告</AlertTitle>
              <AlertDescription>
                这是一条警告信息提示
              </AlertDescription>
            </Alert>
            <Alert className="bg-green-100 border-green-500">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <AlertTitle className="text-green-800">成功</AlertTitle>
              <AlertDescription className="text-green-700">
                这是一条成功信息提示
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>
      </Tabs>

      {/* 动画卡片 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>动画效果演示</CardTitle>
            <CardDescription>
              这个卡片在悬停时会有缩放效果
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              使用 Framer Motion 可以轻松实现各种动画效果。
              试试把鼠标悬停在这个卡片上！
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default DemoPage;

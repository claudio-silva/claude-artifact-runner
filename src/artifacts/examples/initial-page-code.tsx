import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// 添加页面元数据
export const meta = {
  title: "初始页面",
  isHidden: false,
  category: "示例",
  order: 1
};

const InitialPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">我的React页面</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>示例卡片</CardTitle>
            <CardDescription>这是一个示例卡片组件</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">你可以编辑这个页面，添加你自己的内容和组件。</p>
            <div className="flex items-center space-x-2">
              <Button onClick={() => setCount(count - 1)}>-</Button>
              <span className="font-bold">{count}</span>
              <Button onClick={() => setCount(count + 1)}>+</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>使用说明</CardTitle>
            <CardDescription>如何使用页面预览系统</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>在左侧编辑代码</li>
              <li>右侧实时预览页面效果</li>
              <li>使用顶部工具栏切换不同示例</li>
              <li>可以导入自己的代码或保存当前代码</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InitialPage;

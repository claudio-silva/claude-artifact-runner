import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Grid } from 'lucide-react';

// 自动导入所有页面组件
const pages = import.meta.glob('./*.tsx', { eager: true }) as Record<string, { 
  default: React.ComponentType;
  meta?: {
    title?: string;
    description?: string;
  };
}>;

// 生成页面信息列表
const pageList = Object.entries(pages).map(([path, module]) => {
  const routePath = path
    .replace('./', '/')
    .replace('.tsx', '')
    .toLowerCase();

  // 跳过目录页面本身
  if (routePath === '/directory') return null;

  // 使用文件名作为默认标题
  const defaultTitle = path.replace('./', '').replace('.tsx', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    path: routePath,
    title: module.meta?.title || defaultTitle,
    description: module.meta?.description || `${defaultTitle} 页面`
  };
}).filter(Boolean);

const Directory = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <Grid className="w-6 h-6" />
        <h1 className="text-2xl font-bold">页面目录</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageList.map((page) => (
          <Card 
            key={page.path}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(page.path)}
          >
            <CardHeader>
              <CardTitle>{page.title}</CardTitle>
              <CardDescription>{page.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Directory; 
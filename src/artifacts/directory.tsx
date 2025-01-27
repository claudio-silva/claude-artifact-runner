import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Grid } from 'lucide-react';

import { Folder } from 'lucide-react';

// 自动导入所有页面组件，包括子文件夹
const pages = import.meta.glob('./**/*.tsx', { eager: true }) as Record<string, { 
  default: React.ComponentType;
  meta?: {
    title?: string;
    description?: string;
  };
}>;

// 生成页面和文件夹信息
const generatePageList = (currentPath = '') => {
  const items = Object.entries(pages)
    .filter(([path]) => {
      const relativePath = path.replace('./', '');
      const parentDir = relativePath.split('/')[0];
      return currentPath
        ? relativePath.startsWith(currentPath + '/')
        : !relativePath.includes('/');
    })
    .map(([path, module]) => {
      const relativePath = path.replace('./', '');
      const routePath = '/' + relativePath.replace('.tsx', '').toLowerCase();
      
      // 跳过目录页面本身
      if (routePath === '/directory') return null;
      
      // 检查是否是文件夹
      if (relativePath.includes('/')) {
        const folderName = relativePath.split('/')[0];
        const folderPath = '/' + folderName.toLowerCase();
        return {
          type: 'folder',
          path: folderPath,
          title: folderName,
          description: `${folderName} 目录`
        };
      }

      // 处理文件
      const defaultTitle = path.replace('./', '').replace('.tsx', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        type: 'file',
        path: routePath,
        title: module.meta?.title || defaultTitle,
        description: module.meta?.description || `${defaultTitle} 页面`
      };
    })
    .filter(Boolean);

  // 去重文件夹
  return Array.from(new Map(items.map(item => [item.path, item])).values());
};

const useCurrentPath = () => {
  const location = window.location.pathname;
  return location === '/' ? '' : location;
};

const Directory = () => {
  const navigate = useNavigate();
  const currentPath = useCurrentPath();
  const pageList = generatePageList(currentPath);

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <Grid className="w-6 h-6" />
        <h1 className="text-2xl font-bold">
          {currentPath ? `${currentPath.substring(1)} 目录` : '页面目录'}
        </h1>
        {currentPath && (
          <button
            onClick={() => navigate('/')}
            className="ml-auto text-sm text-blue-600 hover:text-blue-800"
          >
            返回主目录
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageList.map((item) => (
          <Card 
            key={item.path}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(item.path)}
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                {item.type === 'folder' ? (
                  <Folder className="w-5 h-5 text-blue-500" />
                ) : null}
                <CardTitle>{item.title}</CardTitle>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Directory;
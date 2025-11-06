import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Grid, Folder, ChevronLeft, FileText, Search } from 'lucide-react';

const pages = import.meta.glob('./**/*.tsx', { eager: true }) as Record<string, { 
  default: React.ComponentType;
  meta?: {
    title?: string;
    description?: string;
    isHidden?: boolean;
    category?: string;
    order?: number;
  };
}>;

interface DirectoryProps {
  basePath?: string;
}

interface DirectoryItem {
  type: 'file' | 'folder';
  path: string;
  title: string;
  description: string;
  meta?: {
    title?: string;
    description?: string;
    isHidden?: boolean;
    category?: string;
    order?: number;
  };
}

const Directory = ({ basePath = '' }: DirectoryProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // 生成页面和文件夹信息
  const generatePageList = (currentPath = ''): DirectoryItem[] => {
    const normalizedCurrentPath = currentPath.replace(/^\/+|\/+$/g, '');
    
    // 获取所有文件路径
    const allPaths = Object.entries(pages).map(([path, module]) => ({
      path: path.replace('./', ''),
      module
    })).filter(({ path }) => path !== 'directory.tsx');

    // 处理文件和目录
    const processedItems = new Map<string, DirectoryItem>();
    
    // 遍历所有路径，找到当前目录下的直接子项
    allPaths.forEach(({ path, module }) => {
      if (path === 'directory.tsx') return;
      
      // 计算相对于当前路径的路径
      let relativePath: string;
      
      if (!normalizedCurrentPath) {
        // 在根目录
        relativePath = path;
      } else {
        // 在子目录中，只处理以当前路径开头的文件
        if (!path.startsWith(normalizedCurrentPath + '/')) {
          return; // 跳过不属于当前目录的文件
        }
        relativePath = path.slice(normalizedCurrentPath.length + 1);
      }
      
      const parts = relativePath.split('/');
      
      if (parts.length === 1) {
        // 这是当前目录下的直接文件
        if (path.endsWith('.tsx')) {
          const fileName = parts[0].replace('.tsx', '');
          if (!processedItems.has(fileName)) {
            processedItems.set(fileName, {
              type: 'file',
              path: normalizedCurrentPath ? `/${normalizedCurrentPath}/${fileName}` : `/${fileName}`,
              title: module.meta?.title || fileName,
              description: module.meta?.description || `${fileName} 页面`,
              meta: module.meta
            });
          }
        }
      } else {
        // 这是当前目录下的子目录
        const dirName = parts[0];
        if (!processedItems.has(dirName)) {
          processedItems.set(dirName, {
            type: 'folder',
            path: normalizedCurrentPath 
              ? `/${normalizedCurrentPath}/${dirName}`
              : `/${dirName}`,
            title: dirName.charAt(0).toUpperCase() + dirName.slice(1),
            description: `${dirName} 目录`
          });
        }
      }
    });

    return Array.from(processedItems.values())
      .filter(item => item.type === 'folder' || !item.meta?.isHidden)
      .sort((a, b) => {
        if (a.type === 'folder' && b.type !== 'folder') return -1;
        if (a.type !== 'folder' && b.type === 'folder') return 1;
        const orderA = a.meta?.order ?? Infinity;
        const orderB = b.meta?.order ?? Infinity;
        if (orderA !== orderB) return orderA - orderB;
        return a.title.localeCompare(b.title);
      });
  };

  const pageList = generatePageList(basePath);
  
  // 过滤页面列表
  const filteredPageList = pageList.filter(item => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  const handleItemClick = (item: DirectoryItem) => {
    navigate(item.type === 'folder' ? item.path : `${item.path}`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        {basePath && (
          <button
            onClick={() => navigate(basePath.split('/').slice(0, -1).join('/') || '/')}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <Grid className="w-6 h-6" />
        <h1 className="text-2xl font-bold">
          {basePath ? `${basePath.substring(1)} 目录` : '页面目录'}
        </h1>
      </div>
      
      <div className="mb-6">
        <Input
          icon={<Search className="w-4 h-4 text-gray-500" />}
          placeholder="搜索页面..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>
      
      {searchQuery && (
        <div className="mb-4 text-sm text-gray-600">
          找到 {filteredPageList.length} 个结果
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPageList.length === 0 && searchQuery ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            没有找到匹配 "{searchQuery}" 的页面
          </div>
        ) : (
          filteredPageList.map((item) => (
          <Card 
            key={item.path}
            className="cursor-pointer transition-all hover:shadow-md hover:-translate-y-1"
            onClick={() => handleItemClick(item)}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                {item.type === 'folder' ? (
                  <Folder className="w-5 h-5 text-blue-500" />
                ) : (
                  <FileText className="w-5 h-5 text-gray-500" />
                )}
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-1">{item.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Directory;

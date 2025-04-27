import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Maximize2, Minimize2 } from 'lucide-react';
import Directory from './artifacts/directory';
import './index.css'

// 修改 glob 模式以包含子目录
const pages = import.meta.glob('./artifacts/**/*.tsx', { eager: true }) as Record<string, { 
  default: React.ComponentType;
  meta?: {
    title?: string;
    description?: string;
    isHidden?: boolean;
    category?: string;
    order?: number;
  };
}>;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <div className="relative">
      {/* <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-50"
        title={isFullscreen ? '退出全屏' : '进入全屏'}
      >
        {isFullscreen ? (
          <Minimize2 className="w-6 h-6" />
        ) : (
          <Maximize2 className="w-6 h-6" />
        )}
      </button> */}
      {children}
    </div>
  );
};

function App() {
  // 生成路由配置
  const customRoutes: RouteObject[] = [
    { 
      path: '/', 
      element: <Layout><Directory /></Layout> 
    }
  ];

  // 处理所有页面路由
  Object.entries(pages).forEach(([path, module]) => {
    const Component = module.default;
    
    // 从文件路径提取路由路径
    const routePath = path
      .replace('./artifacts/', '') // 移除前缀
      .replace('.tsx', ''); // 移除扩展名

    // 如果是 directory.tsx，跳过
    if (routePath === 'directory') {
      return;
    }

    // 添加页面路由
    customRoutes.push({
      path: `/${routePath}`,
      element: <Layout><Component /></Layout>
    });

    // 处理目录路由
    const pathParts = routePath.split('/');
    let currentPath = '';
    
    // 为每一级目录添加路由
    pathParts.forEach((_, index) => {
      if (index < pathParts.length - 1) {
        const dirPath = '/' + pathParts.slice(0, index + 1).join('/');
        if (!customRoutes.find(r => r.path === dirPath)) {
          customRoutes.push({
            path: dirPath,
            element: <Layout><Directory basePath={dirPath} /></Layout>
          });
        }
      }
    });
  });

  return useRoutes(customRoutes);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

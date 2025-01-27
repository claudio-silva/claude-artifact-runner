import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Maximize2, Minimize2 } from 'lucide-react';
import Directory from './artifacts/directory';
import './index.css'

// 自动导入所有页面组件
const pages = import.meta.glob('./artifacts/*.tsx', { eager: true }) as Record<string, { default: React.ComponentType }>;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Could not enter fullscreen mode:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err) => {
        console.error('Could not exit fullscreen mode:', err);
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-50"
        title={isFullscreen ? '退出全屏' : '进入全屏'}
      >
        {isFullscreen ? (
          <Minimize2 className="w-6 h-6" />
        ) : (
          <Maximize2 className="w-6 h-6" />
        )}
      </button>
      {children}
    </div>
  );
};

function App() {
  // 自动生成路由配置
  const customRoutes: RouteObject[] = [
    { 
      path: '/', 
      element: <Layout><Directory /></Layout> 
    },
    // 遍历所有页面组件生成路由
    ...Object.entries(pages).map(([path, module]): RouteObject => {
      // 从文件路径中提取路由路径
      const routePath = path
        .replace('./artifacts/', '/')
        .replace('.tsx', '')
        .toLowerCase();
      
      const Component = module.default;
      return {
        path: routePath,
        element: <Layout><Component /></Layout>
      };
    })
  ];

  const element = useRoutes(customRoutes);
  return element;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
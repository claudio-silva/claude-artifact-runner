import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Layout from './components/layout';
import Directory from './artifacts/directory';
import './App.css'

// 自动导入所有页面组件
const pages = import.meta.glob('./artifacts/*.tsx', { eager: true }) as Record<string, { default: React.ComponentType }>;

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
      
      // 跳过目录页面本身
      if (routePath === '/directory') {
        return {
          path: '*',
          element: <Layout><Directory /></Layout>
        };
      }
      
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

export default App;
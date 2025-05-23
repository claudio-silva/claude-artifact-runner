import React, { useEffect } from 'react';

const StagewiseToolbar: React.FC = () => {
  useEffect(() => {
    // 只在开发模式下初始化工具栏
    if (process.env.NODE_ENV === 'development') {
      const initToolbar = async () => {
        try {
          const { StagewiseToolbar } = await import('@stagewise/toolbar-react');
          
          // stagewise配置
          const stagewiseConfig = {
            plugins: []
          };

          // 创建独立的容器元素
          const toolbarContainer = document.createElement('div');
          toolbarContainer.id = 'stagewise-toolbar-container';
          document.body.appendChild(toolbarContainer);

          // 在独立的React根中渲染工具栏
          const { createRoot } = await import('react-dom/client');
          const root = createRoot(toolbarContainer);
          root.render(React.createElement(StagewiseToolbar, { config: stagewiseConfig }));
        } catch (error) {
          console.warn('Stagewise工具栏加载失败:', error);
        }
      };

      initToolbar();
    }
  }, []);

  // 在开发模式下不渲染任何内容，工具栏由副作用创建
  return null;
};

export default StagewiseToolbar; 
/**
 * React预览组件库
 * 为iframe提供HTML模板和代码预处理功能
 */

// 创建一个预处理函数，替换导入语句
export function preprocessCode(code: string): string {
  return code
    // 替换 lucide-react 导入
    .replace(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/g, '// Lucide组件已全局可用')
    // 替换 shadcn 组件导入
    .replace(/import\s+{([^}]+)}\s+from\s+['"]@\/components\/ui\/([^'"]+)['"]/g, '// ShadCN组件已全局可用')
    // 替换 cn 工具函数导入
    .replace(/import\s+{\s*cn\s*}\s+from\s+['"]@\/lib\/utils['"]/g, '// cn函数已全局可用')
    // 替换 React 导入
    .replace(/import\s+React(?:,\s+{([^}]+)})?\s+from\s+['"]react['"]/g, '// React已全局可用')
    .replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]react['"]/g, '// React hooks已全局可用');
}

// 创建打包这些组件的HTML
export function createPreviewHTML(userCode: string): string {
  const processedCode = preprocessCode(userCode);
  
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React预览</title>
  
  <!-- 资源加载超时检测 -->
  <script>
    // 设置最大加载时间为10秒
    const LOAD_TIMEOUT = 10000;
    
    // 资源加载状态跟踪
    window.__loadingResources = {
      react: false,
      reactDom: false,
      babel: false,
      tailwind: false
    };
    
    // 超时检测
    setTimeout(() => {
      const notLoaded = Object.entries(window.__loadingResources)
        .filter(([_, loaded]) => !loaded)
        .map(([name]) => name);
        
      if (notLoaded.length > 0) {
        console.error('资源加载超时: ' + notLoaded.join(', '));
        window.parent.postMessage({
          type: 'error',
          error: {
            message: '资源加载超时: ' + notLoaded.join(', '),
            stack: '部分外部资源加载失败，请检查网络连接或使用本地资源'
          }
        }, '*');
      }
    }, LOAD_TIMEOUT);
    
    // 记录资源加载完成
    function resourceLoaded(name) {
      window.__loadingResources[name] = true;
      console.log(name + ' 已加载');
    }
  </script>
  
  <!-- 核心依赖 - React & ReactDOM -->
  <script src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js" 
    onload="resourceLoaded('react')" onerror="console.error('React 加载失败')"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js" 
    onload="resourceLoaded('reactDom')" onerror="console.error('ReactDOM 加载失败')"></script>
  
  <!-- Babel (用于JSX转换) -->
  <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.22.9/babel.min.js" 
    onload="resourceLoaded('babel')" onerror="console.error('Babel 加载失败')"></script>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com" 
    onload="resourceLoaded('tailwind')" onerror="console.error('Tailwind 加载失败')"></script>
  
  <!-- 内联工具库 -->
  <script>
    // 简化版 clsx 工具函数
    window.clsx = function clsx() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        
        var argType = typeof arg;
        
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          classes.push(clsx.apply(null, arg));
        } else if (argType === 'object') {
          for (var key in arg) {
            if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(' ');
    };
    
    // 简化版 tailwind-merge
    window.tailwindMerge = {
      twMerge: function() {
        // 非常简化的实现
        return window.clsx.apply(null, arguments);
      }
    };
    
    // 最小化的lucide图标实现
    window.lucideReact = {
      // 创建基本的图标组件
      createIcon: (name, path) => {
        return function Icon(props) {
          const { size = 24, color = 'currentColor', ...rest } = props;
          return React.createElement('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: size,
            height: size,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: color,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            ...rest,
            children: path
          });
        };
      }
    };
    
    // 定义常用图标
    const pathMap = {
      AlertCircle: React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
      Mail: [
        React.createElement('rect', { key: 1, x: 2, y: 4, width: 20, height: 16, rx: 2 }),
        React.createElement('path', { key: 2, d: 'M22 7l-10 5L2 7' })
      ],
      Lock: [
        React.createElement('rect', { key: 1, x: 3, y: 11, width: 18, height: 11, rx: 2, ry: 2 }),
        React.createElement('path', { key: 2, d: 'M7 11V7a5 5 0 0110 0v4' })
      ]
    };
    
    // 创建图标组件
    for (const [name, path] of Object.entries(pathMap)) {
      window.lucideReact[name] = window.lucideReact.createIcon(name, path);
    }
  </script>
  
  <style>
    :root {
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      
      --background: 0 0% 100%;
      --foreground: 222.2 84% 4.9%;
      --card: 0 0% 100%;
      --card-foreground: 222.2 84% 4.9%;
      --primary: 221.2 83.2% 53.3%;
      --primary-foreground: 210 40% 98%;
      --secondary: 210 40% 96.1%;
      --secondary-foreground: 222.2 47.4% 11.2%;
      --muted: 210 40% 96.1%;
      --muted-foreground: 215.4 16.3% 46.9%;
      --accent: 210 40% 96.1%;
      --accent-foreground: 222.2 47.4% 11.2%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 210 40% 98%;
      --border: 214.3 31.8% 91.4%;
      --input: 214.3 31.8% 91.4%;
      --ring: 221.2 83.2% 53.3%;
      --radius: 0.5rem;
    }

    .dark {
      --background: 222.2 84% 4.9%;
      --foreground: 210 40% 98%;
      --card: 222.2 84% 4.9%;
      --card-foreground: 210 40% 98%;
      --popover: 222.2 84% 4.9%;
      --popover-foreground: 210 40% 98%;
      --primary: 217.2 91.2% 59.8%;
      --primary-foreground: 222.2 47.4% 11.2%;
      --secondary: 217.2 32.6% 17.5%;
      --secondary-foreground: 210 40% 98%;
      --muted: 217.2 32.6% 17.5%;
      --muted-foreground: 215 20.2% 65.1%;
      --accent: 217.2 32.6% 17.5%;
      --accent-foreground: 210 40% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 210 40% 98%;
      --border: 217.2 32.6% 17.5%;
      --input: 217.2 32.6% 17.5%;
      --ring: 224.3 76.3% 48%;
    }
    
    html, body, #root {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-feature-settings: "rlig" 1, "calt" 1;
      font-family: var(--font-sans);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
    }

    /* 添加加载状态样式 */
    .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: hsl(var(--background));
      z-index: 9999;
    }
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top-color: hsl(var(--primary));
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
  
  <script>
    // tailwind配置
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          fontFamily: {
            sans: ["var(--font-sans)"],
          },
        },
      },
    };
    
    // 错误处理和日志
    
    // 收集错误
    window.addEventListener('error', function(event) {
      console.error('捕获到错误:', event.message);
      window.parent.postMessage({
        type: 'error',
        error: {
          message: event.message,
          stack: event.error?.stack
        }
      }, '*');
    });

    // 未捕获的promise拒绝
    window.addEventListener('unhandledrejection', function(event) {
      console.error('未处理的Promise拒绝:', event.reason);
      window.parent.postMessage({
        type: 'error',
        error: {
          message: 'Promise拒绝: ' + (event.reason?.message || event.reason || '未知错误'),
          stack: event.reason?.stack
        }
      }, '*');
    });

    // 捕获console输出
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      window.parent.postMessage({
        type: 'console',
        method: 'log',
        args: args.map(arg => String(arg))
      }, '*');
      originalConsoleLog.apply(console, args);
    };
    
    // 拦截 console.error
    const originalConsoleError = console.error;
    console.error = (...args) => {
      window.parent.postMessage({
        type: 'error',
        error: {
          message: args.map(arg => String(arg)).join(' ')
        }
      }, '*');
      originalConsoleError.apply(console, args);
    };
    
    // 创建加载指示器
    document.addEventListener('DOMContentLoaded', function() {
      const loadingContainer = document.createElement('div');
      loadingContainer.className = 'loading-container';
      loadingContainer.id = 'loading-indicator';
      
      const spinner = document.createElement('div');
      spinner.className = 'spinner';
      
      const loadingText = document.createElement('p');
      loadingText.textContent = '加载组件中...';
      loadingText.style.marginTop = '1rem';
      
      loadingContainer.appendChild(spinner);
      loadingContainer.appendChild(loadingText);
      document.body.appendChild(loadingContainer);
      
      // 通知父窗口已准备就绪
      window.parent.postMessage({ type: 'ready' }, '*');
      
      // 2秒后如果还没有渲染出组件，显示加载超时提示
      setTimeout(() => {
        const loadingIndicator = document.getElementById('loading-indicator');
        if (loadingIndicator && document.body.contains(loadingIndicator)) {
          loadingText.textContent = '加载时间较长，请耐心等待...';
        }
      }, 2000);
    });
  </script>
</head>
<body>
  <div id="root"></div>
  
  <script type="text/babel">
    // 工具函数
    const cn = (...inputs) => {
      return window.tailwindMerge.twMerge(window.clsx(...inputs));
    };
    
    // 获取Lucide图标
    const {
      AlertCircle, Mail, Lock
    } = window.lucideReact;
    
    // React hooks
    const { useState, useEffect, useRef, useCallback, useMemo } = React;
    
    // 实现基础的Shadcn组件
    const Alert = ({className, variant = "default", ...props}) => {
      return (
        <div 
          className={cn(
            "relative w-full rounded-lg border p-4",
            variant === "destructive" && "border-destructive/50 text-destructive dark:border-destructive",
            className
          )}
          {...props}
        />
      )
    };
    
    const AlertDescription = ({className, ...props}) => {
      return (
        <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
      )
    };
    
    const Button = ({className, variant = "default", size = "default", ...props}) => {
      return (
        <button 
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
            variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
            variant === "link" && "text-primary underline-offset-4 hover:underline",
            size === "default" && "h-10 px-4 py-2",
            size === "sm" && "h-9 rounded-md px-3",
            size === "lg" && "h-11 rounded-md px-8",
            size === "icon" && "h-10 w-10",
            className
          )}
          {...props}
        />
      )
    };
    
    const Card = ({className, ...props}) => {
      return (
        <div 
          className={cn(
            "rounded-lg border bg-card text-card-foreground shadow-sm", 
            className
          )}
          {...props}
        />
      )
    };
    
    const CardHeader = ({className, ...props}) => {
      return (
        <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
      )
    };
    
    const CardTitle = ({className, ...props}) => {
      return (
        <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
      )
    };
    
    const CardContent = ({className, ...props}) => {
      return (
        <div className={cn("p-6 pt-0", className)} {...props} />
      )
    };
    
    const Input = ({className, ...props}) => {
      return (
        <input 
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
      )
    };
    
    const Label = ({className, ...props}) => {
      return (
        <label 
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className
          )}
          {...props}
        />
      )
    };
    
    // 用户代码
    ${processedCode}
    
    // 渲染应用
    try {
      // 查找要渲染的组件
      let ComponentToRender = null;
      
      if (typeof SignupForm !== 'undefined') {
        ComponentToRender = SignupForm;
      } else if (typeof App !== 'undefined') {
        ComponentToRender = App;
      } else if (typeof Main !== 'undefined') {
        ComponentToRender = Main;
      } else if (typeof default_1 !== 'undefined') {
        ComponentToRender = default_1;
      }
      
      if (ComponentToRender) {
        ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>
            <ComponentToRender />
          </React.StrictMode>
        );
        console.log('组件渲染成功');
        
        // 隐藏加载指示器
        const loadingIndicator = document.getElementById('loading-indicator');
        if (loadingIndicator) {
          loadingIndicator.style.display = 'none';
        }
      } else {
        throw new Error('未找到可渲染的组件');
      }
    } catch (error) {
      console.error('渲染错误:', error);
      ReactDOM.createRoot(document.getElementById('root')).render(
        <div style={{padding: '20px', color: 'red', border: '1px solid red', borderRadius: '4px', margin: '20px'}}>
          <h3>错误</h3>
          <p>{error.message}</p>
          <pre style={{overflow: 'auto', maxHeight: '200px', marginTop: '10px', fontSize: '12px'}}>{error.stack}</pre>
        </div>
      );
      
      // 隐藏加载指示器
      const loadingIndicator = document.getElementById('loading-indicator');
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
    }
  </script>
</body>
</html>
  `;
} 
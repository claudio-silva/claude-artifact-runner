# Stagewise 工具栏集成

本项目已成功集成了 Stagewise 开发工具栏，用于提供 AI 驱动的编辑功能。

## 功能特性

- **仅开发模式**：工具栏只在开发环境中显示，不会影响生产构建
- **浏览器工具栏**：通过浏览器界面与代码编辑器中的AI代理连接
- **元素选择**：可以在Web应用中选择元素，添加注释
- **AI辅助编辑**：基于上下文让AI代理进行代码修改

## 技术实现

### 安装的包
- `@stagewise/toolbar-react`: React专用的stagewise工具栏

### 集成方式
1. **组件文件**: `src/components/StagewiseToolbar.tsx`
   - 使用懒加载，只在开发模式下动态导入
   - 创建独立的React根避免与主应用冲突
   - 包含错误处理机制

2. **主应用集成**: `src/main.tsx`
   - 在Layout组件中条件性渲染工具栏
   - 使用React.Suspense包装懒加载组件

3. **构建配置**: `vite.config.ts`
   - 在生产构建中排除stagewise相关模块
   - 明确定义环境变量

## 使用方式

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 在浏览器中访问应用，工具栏会自动显示

3. 使用工具栏功能：
   - 选择页面元素
   - 添加注释或修改请求
   - 与代码编辑器中的AI代理协作

## 注意事项

- 工具栏仅在 `NODE_ENV=development` 时加载
- 生产构建中完全排除，不会增加bundle大小
- 如果stagewise包加载失败，会静默处理，不影响应用正常运行

## 配置自定义

可以在 `src/components/StagewiseToolbar.tsx` 中修改 `stagewiseConfig` 对象来自定义工具栏行为：

```typescript
const stagewiseConfig = {
  plugins: [
    // 在此添加自定义插件
  ]
};
``` 
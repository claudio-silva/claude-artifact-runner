# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy using deploy.sh script (to server at spdi.orienthong.cn)

## Code Style Guidelines
- **Routing**: Files in `src/artifacts/` automatically become routes
- **Imports**: Use aliases like `@/*` for src directory paths
- **Naming**:
  - React components use PascalCase
  - Functions use camelCase
  - Files use kebab-case
- **React Patterns**:
  - Use functional components with hooks
  - Export meta objects for Artifact metadata (title, description, isHidden, category, order)
- **UI Components**: Prefer Shadcn UI components from `src/components/ui`
- **Styling**: Use Tailwind CSS classes directly in components
- **Types**: TypeScript is configured with relaxed settings (strict: false)
- **Language**: Use Chinese for UI text and comments

## Project Structure
- `src/artifacts/` - Main directory for Claude artifacts (pages)
  - Files in this directory become routes automatically
  - Subdirectories create nested routes
  - `index.tsx` is the default route
  - Structure within artifacts directory is reflected in URL paths
- `src/components/` - Reusable UI components 
- `src/lib/` - Utility functions and helpers
- `netlify/functions/` - Serverless functions for backend functionality

## Route Metadata
When creating new artifacts, export a meta object with these properties:
```typescript
export const meta = {
  title: "页面标题",
  description: "页面描述",
  isHidden: false, // 是否在目录中隐藏
  category: "分类", // 可选
  order: 1 // 用于排序
};
```

## Authentication and Authorization
- Admin login is handled through a password verification system
- Protected routes require admin token in sessionStorage
- Route access settings are managed through Netlify functions

## Deployment Process
- The deploy.sh script handles both frontend and backend deployment
- Frontend is deployed to `/opt/1panel/apps/openresty/openresty/www/sites/spdi.orienthong.cn/index/`
- Backend functions are deployed to `/opt/1panel/apps/openresty/openresty/www/sites/spdi.orienthong.cn/functions/`
- The script also sets up a Node.js server to run Netlify functions
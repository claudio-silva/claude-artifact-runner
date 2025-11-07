import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import Layout from './components/layout';
import './index.css';

const useHash = typeof window !== 'undefined' && window.location?.protocol === 'file:';

// Get base path from Vite config, or auto-detect from current location
function getBasePath(): string {
  // Use Vite's BASE_URL if configured (from vite.config.ts base option)
  const viteBase = import.meta.env.BASE_URL;
  
  // If BASE_URL is set to something other than '/', use it
  if (viteBase && viteBase !== '/') {
    // Normalize: ensure it starts with / and remove trailing slash (React Router prefers no trailing slash)
    let normalized = viteBase.startsWith('/') ? viteBase : `/${viteBase}`;
    normalized = normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;
    // Ensure we don't return empty string or weird values
    if (normalized && normalized !== '/' && normalized !== '/.') {
      return normalized;
    }
  }
  
  // Auto-detect base path from current location (fallback for cases where
  // base wasn't configured but app is deployed to subdirectory)
  if (typeof window !== 'undefined') {
    // First, try to get from <base> tag if present (Vite injects this when base is configured)
    const baseTag = document.querySelector('base');
    if (baseTag?.href) {
      try {
        const baseUrl = new URL(baseTag.href, window.location.origin);
        if (baseUrl.pathname && baseUrl.pathname !== '/') {
          const path = baseUrl.pathname.endsWith('/') 
            ? baseUrl.pathname.slice(0, -1) 
            : baseUrl.pathname;
          if (path && path !== '/' && path !== '/.') {
            return path;
          }
        }
      } catch {
        // Invalid base URL, fall through to pathname detection
      }
    }
    
    // Fallback: detect from pathname structure
    const pathname = window.location.pathname;
    
    // Check if we're at a root-like path (ends with / or index.html)
    const rootMatch = pathname.match(/^(.+\/)(?:index\.html)?$/);
    if (rootMatch && rootMatch[1] && rootMatch[1] !== '/') {
      // Remove trailing slash for React Router basename
      const detected = rootMatch[1].slice(0, -1);
      if (detected && detected !== '/' && detected !== '/.') {
        return detected;
      }
    }
    
    // If not at root, try to detect base by looking for path segments
    // This is a best-effort fallback - users should configure base in vite.config.ts
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 1) {
      // Assume the base might be everything except the last segment
      const possibleBase = '/' + pathSegments.slice(0, -1).join('/');
      if (possibleBase && possibleBase !== '/' && possibleBase !== '/.') {
        return possibleBase;
      }
    }
  }
  
  return '/';
}

const basePath = getBasePath();
const mkRoutes = routes.map((route) => ({
  ...route,
  element: <Layout>{route.element}</Layout>,
}));
const router = useHash 
  ? createHashRouter(mkRoutes, { basename: basePath !== '/' ? basePath : undefined })
  : createBrowserRouter(mkRoutes, { basename: basePath !== '/' ? basePath : undefined });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
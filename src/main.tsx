import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import Layout from './components/layout';
import './index.css';

const useHash = typeof window !== 'undefined' && window.location?.protocol === 'file:';
const mkRoutes = routes.map((route) => ({
  ...route,
  element: <Layout>{route.element}</Layout>,
}));
const router = useHash ? createHashRouter(mkRoutes) : createBrowserRouter(mkRoutes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
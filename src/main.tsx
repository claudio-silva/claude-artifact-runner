import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import Layout from './components/layout';
import './index.css';

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: <Layout>{route.element}</Layout>,
  }))
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
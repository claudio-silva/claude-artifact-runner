import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import Layout from './components/layout'; // Create a Layout component
import './App.css'

function App() {
  // Add the default route explicitly
  const customRoutes = [
    { path: '/', element: <Layout><DefaultPage /></Layout> }, // Default route
    ...routes.map((route) => ({
      ...route,
      element: <Layout>{route.element}</Layout>,
    })),
  ];

  // Generate routes
  const element = useRoutes(customRoutes);
  return element;
}

// Import the DefaultPage component explicitly
import DefaultPage from './artifacts/default';

export default App;
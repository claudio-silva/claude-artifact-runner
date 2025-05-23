import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: [{ dir: 'src/artifacts', baseRoute: '' }],
      extensions: ['jsx', 'tsx'],   
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'src': path.resolve(__dirname, './src'),
    },
  },
  define: {
    // 确保在生产环境中NODE_ENV为production
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // 在生产构建中排除stagewise相关模块
        if (process.env.NODE_ENV === 'production' && id.includes('@stagewise')) {
          return true;
        }
        return false;
      }
    }
  }
})

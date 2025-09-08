import { defineConfig, loadEnv } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile';
import react from '@vitejs/plugin-react'
import path from 'path'
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const single = env.VITE_SINGLE_FILE === 'true';
  return {
    plugins: [
      react(),
      Pages({
        dirs: [{ dir: 'src/artifacts', baseRoute: '' }],
        extensions: ['jsx', 'tsx'],
      }),
      single && viteSingleFile({ /* options if needed */ }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'src': path.resolve(__dirname, './src'),
      },
    }
  }
})

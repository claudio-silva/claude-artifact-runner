import { defineConfig, loadEnv } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile';
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'node:fs';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const single = env.VITE_SINGLE_FILE === 'true';

  // Favicon inlining plugin
  const faviconPlugin = {
    name: 'inline-favicon',
    apply(config: any, { command }: { command: string }) {
      return command === 'build';
    },
    transformIndexHtml: {
      order: 'pre' as const,
      handler(html: string) {
        const icoPath = path.resolve(__dirname, 'public/favicon.ico');

        if (!fs.existsSync(icoPath)) {
          return html; // Silently skip if no favicon
        }

        const icoBase64 = fs.readFileSync(icoPath).toString('base64');
        const tag = `<link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,${icoBase64}">`;

        return html.includes('rel="icon"')
          ? html.replace(/<link[^>]*rel=["'](?:icon|shortcut icon)["'][^>]*>/, tag)
          : html.replace('</head>', `${tag}\n</head>`);
      }
    }
  };

  // Cleanup plugin to remove favicon from dist after build
  const cleanupPlugin = {
    name: 'cleanup-favicon',
    apply(config: any, { command }: { command: string }) {
      return command === 'build';
    },
    closeBundle() {
      const faviconPath = path.resolve('dist/favicon.ico');
      if (fs.existsSync(faviconPath)) {
        fs.unlinkSync(faviconPath);
      }
    }
  };

  return {
    plugins: [
      react(),
      Pages({
        dirs: [{ dir: 'src/artifacts', baseRoute: '' }],
        extensions: ['jsx', 'tsx'],
      }),
      faviconPlugin, // Always include favicon plugin
      cleanupPlugin, // Cleanup favicon from dist after build
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

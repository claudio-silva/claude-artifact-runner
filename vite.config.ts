import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'node:fs';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig(() => {

  // For multi-file builds, do not inline the favicon. Ensure a standard link exists (optional safeguard).
  const ensureFaviconLinkPlugin = {
    name: 'ensure-favicon-link',
    apply(_config: unknown, { command }: { command: string }) {
      return command === 'build';
    },
    transformIndexHtml: {
      order: 'pre' as const,
      handler(html: string) {
        const icoPath = path.resolve(__dirname, 'public/favicon.ico');
        if (!fs.existsSync(icoPath)) return html;
        const tag = `<link rel="icon" type="image/x-icon" href="/favicon.ico">`;
        return html.includes('rel="icon"')
          ? html
          : html.replace('</head>', `${tag}\n</head>`);
      }
    }
  };

  // No cleanup for multi-file builds; keep favicon.ico in output

  return {
    plugins: [
      react(),
      Pages({
        dirs: [{ dir: 'src/artifacts', baseRoute: '' }],
        extensions: ['jsx', 'tsx'],
      }),
      ensureFaviconLinkPlugin,
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'src': path.resolve(__dirname, './src'),
      },
    }
  }
})

import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';
import { viteSingleFile } from 'vite-plugin-singlefile';
import fs from 'node:fs';
import path from 'node:path';

const inlineFaviconPost = {
  name: 'inline-favicon-post',
  transformIndexHtml: {
    order: 'post' as const,
    handler(html: string) {
      const icoPath = path.resolve(__dirname, 'public/favicon.ico');
      if (!fs.existsSync(icoPath)) return html;
      const icoBase64 = fs.readFileSync(icoPath).toString('base64');
      const tag = `<link rel=\"icon\" type=\"image/x-icon\" href=\"data:image/x-icon;base64,${icoBase64}\">`;
      return html.includes('rel="icon"')
        ? html.replace(/<link[^>]*rel=["'](?:icon|shortcut icon)["'][^>]*>/, tag)
        : html.replace('</head>', `${tag}\n</head>`);
    }
  }
};

export default defineConfig((env) => {
  const base = typeof baseConfig === 'function' ? (baseConfig as any)(env) : (baseConfig as any);
  return mergeConfig(base, {
    plugins: [...(base.plugins || []), viteSingleFile(), inlineFaviconPost]
  });
});



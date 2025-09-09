import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig((env) => {
  const base = typeof baseConfig === 'function' ? (baseConfig as any)(env) : (baseConfig as any);
  return mergeConfig(base, {
    plugins: [...(base.plugins || []), viteSingleFile()]
  });
});



import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    plugins: [createVuePlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    build: {
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        input: resolve(__dirname, `src/smashboard-components.js`),
        external: ['vue'],
        output: {
          dir: 'dist',
          format: 'iife',
          name: 'SmashboardComponents',
          inlineDynamicImports: true,
          entryFileNames: `smashboard-components.min.js`,
        }
      }
    }
  }
});
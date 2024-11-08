import { fileURLToPath, URL } from 'node:url'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { paraglide } from "@inlang/paraglide-vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    paraglide({
      project: "./project.inlang", //Path to your inlang project
      outdir: "./src/shared/lib/i18n", //Where you want the generated files to be placed
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
    Icons({
      compiler: 'vue3',
      defaultClass: 'size-4 flex-shrink-0',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@i18n': fileURLToPath(new URL('./src/shared/lib/i18n', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})

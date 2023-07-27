import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { tagNames as litWebComponentsTagNames } from '@kotice/lit-web-components-sandbox'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => (litWebComponentsTagNames as string[]).includes(tag)
      }
    }
  })],
})

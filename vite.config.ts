import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsx from '@vitejs/plugin-vue-jsx'
import glslify from 'vite-plugin-glslify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), tsx(), glslify()],
})

/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/responsive.scss";',
      },
    },
  },
  server: {
    port: 8080,
    host: true,
    fs: {
      allow: ['../'],
    },
  },
});

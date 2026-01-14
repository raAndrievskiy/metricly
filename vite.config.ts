import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   outDir: './build',
  // },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/mixins.scss"; @import "./src/styles/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [react()],
})

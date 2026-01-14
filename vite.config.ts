// import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/mixins.scss"; @import "./src/styles/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      // '@assets': path.resolve(__dirname, './src/assets'),
      // '@components': path.resolve(__dirname, './src/components'),
      // '@constants': path.resolve(__dirname, './src/constants'),
      // '@hooks': path.resolve(__dirname, './src/hooks'),
      // '@pages': path.resolve(__dirname, './src/pages'),
      // '@providers': path.resolve(__dirname, './src/providers'),
      // '@styles': path.resolve(__dirname, './src/styles'),
      // '@types': path.resolve(__dirname, './src/types'),
      // '@utils': path.resolve(__dirname, './src/utils'),
      // '@hoc': path.resolve(__dirname, './src/hoc'),
      // '@icons': path.resolve(__dirname, './src/icons'),
    },
  },
  plugins: [react()],
})

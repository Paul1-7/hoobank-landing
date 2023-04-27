import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(process.cwd(), './src'),
      static: path.resolve(process.cwd(), './public/static')
    }
  },
  plugins: [react()]
})

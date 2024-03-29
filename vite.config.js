import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/portafolio-con-react000/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['fsevents']
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  
    port: 8080,
    strictPort: true, // Ensures Vite doesn’t change the port
    cors: true   ,
    proxy: {
    '/api': {
      target: 'https://script.google.com/macros/s/AKfycbz92Zurvj3RXTV8IF5FZIDLoBSQm1wu_f6XtNeaB28m1vddt1KMJjSfSpxDfKh2eZWh/exec',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
      secure:false
    }
  }  
  }
})


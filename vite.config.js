import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['localhost', '4c39-171-79-48-89.ngrok-free.app', "*", "0.0.0.0", "*.ngrok-free.app"],
    host: true, // This enables listening on all local IPs
  }
})
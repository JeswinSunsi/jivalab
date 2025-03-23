import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['localhost', '9266-2401-4900-6143-3924-205f-874f-5801-a82b.ngrok-free.app', "*", "0.0.0.0", "*.ngrok-free.app"],
    host: true, // This enables listening on all local IPs
  }
})
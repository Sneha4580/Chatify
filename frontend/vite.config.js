import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Chatify/', // Use lowercase - GitHub Pages URLs are case-sensitive
})
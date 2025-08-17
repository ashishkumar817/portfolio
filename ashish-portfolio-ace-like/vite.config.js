import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ashish-portfolio-ace-like/', // must match your repo name exactly!
})

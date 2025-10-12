import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages: use /<repo>/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/bornfidis-funnel/',
})

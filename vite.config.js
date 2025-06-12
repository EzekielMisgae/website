import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use /website/ for production builds (GitHub Pages), / for everything else
  const base = mode === 'production' ? '/website/' : '/'
  
  return {
    plugins: [react()],
    base: base,
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  // Only use /website/ base path for production builds (GitHub Pages)
  if (command === 'build' && mode === 'production') {
    config.base = '/website/'
  }

  return config
})

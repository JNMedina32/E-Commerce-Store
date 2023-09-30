import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https:://jnmedina32.github.io/E-Commerce-Store/',
  plugins: [react()],
})

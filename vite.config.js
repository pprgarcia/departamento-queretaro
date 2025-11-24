// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // Esto le dice a Vercel: "este es un proyecto Vite"
  // y entonces SÍ inyecta window.VITE_...
  build: {
    outDir: 'public',
    emptyOutDir: false,
  },
})
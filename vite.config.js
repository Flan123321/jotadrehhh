import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ¡ESTE NOMBRE DEBE COINCIDIR EXACTAMENTE CON EL NOMBRE DE TU REPOSITORIO!
const repoName = 'jotadreh.github.io'; 

export default defineConfig({
  base: "/", // <--- Así se corrige la ruta en GitHub Pages
  plugins: [react()],
})
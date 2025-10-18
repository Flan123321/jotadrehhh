// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// **IMPORTANTE:** Reemplaza 'NOMBRE-DEL-REPO' con el nombre EXACTO de tu repositorio de GitHub.
const repoName = 'NOMBRE-DEL-REPO'; 

export default defineConfig({
  // ↓↓↓ AÑADE ESTA LÍNEA ↓↓↓
  base: `/${repoName}/`,
  // ↑↑↑ AÑADE ESTA LÍNEA ↑↑↑
  plugins: [react()],
})
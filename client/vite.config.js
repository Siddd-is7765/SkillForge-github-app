import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages set base to `/YOUR-REPO-NAME/`.
export default defineConfig({
  base: '/SkillForge/',
  plugins: [react()]
})

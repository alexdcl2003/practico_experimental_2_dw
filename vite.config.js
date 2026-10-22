import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages sirve el sitio bajo /practico_experimental_2_dw/,
  // así que solo aplicamos ese base path al hacer `npm run build`.
  base: command === 'build' ? '/practico_experimental_2_dw/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        registro: fileURLToPath(new URL('./registro.html', import.meta.url)),
      },
    },
  },
}))

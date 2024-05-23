import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/setupTests.js', // Optional: If you have setup files
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
})

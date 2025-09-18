import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Development server configuration
  server: {
    port: 3200,
    open: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },

  // Build configuration
  build: {
    outDir: 'dist',
    target: 'es2022',
    rollupOptions: {
      output: {
        // Custom filenames for main entry files
        entryFileNames: 'template.js',
        chunkFileNames: (chunkName) => {
          console.log('chunkName', chunkName)
          if (['vendor', 'router'].includes(chunkName.name ?? '')) {
            return `${chunkName.name}.js`
          }
          return '[name]-[hash].js'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'template.css'
          }
          return '[name]-[hash].[ext]'
        },
        // Generate separate chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },

  // Preview server configuration (for production build preview)
  preview: {
    port: 3200,
    cors: true,
  },

  // Static assets configuration
  publicDir: 'public',

  // Resolve configuration
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
})

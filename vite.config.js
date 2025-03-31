import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    proxy: {
      '/.netlify/identity': {
        target: 'https://api.netlify.com',
        changeOrigin: true,
        pathRewrite: {
          '^/.netlify/identity': '/.netlify/identity'
        }
      },
      '/netlify-identity-widget.js': {
        target: 'https://unpkg.com/netlify-identity-widget@^1.9.2',
        changeOrigin: true,
        rewrite: (path) => '/dist/netlify-identity-widget.js'
      },
      '/styles': {
        target: 'http://localhost:4321',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/styles/, '/src/styles')
      },
      '/.netlify/git': {
        target: 'https://api.netlify.com',
        changeOrigin: true
      }
    }
  }
});
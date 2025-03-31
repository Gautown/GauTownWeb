import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    proxy: {
      '/.netlify/identity': {
        target: 'https://api.netlify.com',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        pathRewrite: {
          '^/.netlify/identity': '/.netlify/identity'
        }
      },
      '/netlify-identity-widget.js': {
        target: 'https://unpkg.com/netlify-identity-widget@latest/dist',
        changeOrigin: true
      },
      '/.netlify/git': {
        target: 'https://api.netlify.com',
        changeOrigin: true
      }
    }
  }
});
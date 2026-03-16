import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: "https://landing.bohd4n.dev",
  integrations: [tailwind(), react()],

  // optional
  output: "static",

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'react-icons': ['react-icons/fi', 'react-icons/ri', 'react-icons/fa'],
          },
        },
      },
    },
  },

  adapter: cloudflare(),
});
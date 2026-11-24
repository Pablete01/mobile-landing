import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.elmatecompany.com",
  integrations: [tailwind(), react(), sitemap()],
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
});

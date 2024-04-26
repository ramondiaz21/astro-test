import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: {
    hostname: "https://ramondiaz21.github.io", // Cambia esto a tu URL de GitHub Pages
    assets: "/astro-test/", // Cambia esto al nombre de tu repositorio en GitHub
  },
});

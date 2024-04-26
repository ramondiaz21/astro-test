import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://ramondiaz21.github.io",
  base: "astro-test",
  experiments: {
    externalDependencies: true,
  },
  routes: [
    { path: "/", component: "./src/pages/index.astro" },
    { path: "/:slug", component: "./src/pages/[slug].astro" },
  ],
});

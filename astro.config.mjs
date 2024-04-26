import { createRequire } from "module";
const require = createRequire(import.meta.url);

import astroSass from "astro-sass";

export default {
  buildOptions: {
    site: {
      baseURL: "", // Puedes especificar la URL base de tu sitio aquí si es necesario
    },
  },
  site: {
    hostname: "https://ramondiaz21.github.io", // Cambia esto a tu URL de GitHub Pages
    assets: "/astro-test/", // Cambia esto al nombre de tu repositorio en GitHub
  },
};

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://raphmt117.github.io',
  base:'/buqueChocoRosas',
    integrations: [tailwind()],
    experimental: {
        viewTransitions: true,
        assets: true,
    },
});

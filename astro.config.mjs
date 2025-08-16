// @ts-check
import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    adapter: netlify(),
  },
});
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

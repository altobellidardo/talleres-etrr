import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import db from "@astrojs/db";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    signInFallbackRedirectUrl: '/new-user'
  }), db(), react(), tailwind()],
  adapter: node({
    mode: "standalone"
  }),
  output: "server"
});
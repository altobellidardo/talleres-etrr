import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    signInFallbackRedirectUrl: '/new-user'
  }), db()],
  adapter: node({
    mode: "standalone"
  }),
  output: "server"
});
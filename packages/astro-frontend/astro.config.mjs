import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import htmx from "astro-htmx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    mode: "advanced",
    runtime: {
      mode: "local",
      type: 'pages',
      bindings: {        
        "authService": {
          type: "service",
          service: "user-mgmt",
          address: "127.0.0.1:51512",

        }
      }
    },
  }),
  integrations: [tailwind(), htmx()],
});

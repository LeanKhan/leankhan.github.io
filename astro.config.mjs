import preact from "@astrojs/preact"
import { defineConfig } from "astro/config";

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

export default defineConfig({
	site: "https://e.segunlean.com/",
  integrations: [preact()],
});

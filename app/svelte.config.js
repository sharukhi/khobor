import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    alias: {
      $components: "src/components",
      $lib: "src/components",
      $routes: "src/routes",
      "@/*": "./path/to/lib/*",
    },
  },
}

export default config

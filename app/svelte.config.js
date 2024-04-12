import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter({}),
    alias: {
      $components: "src/components",
      $lib: "src/components",
      $routes: "src/routes",
      "@/*": "./path/to/lib/*",
    },
  },
}

export default config

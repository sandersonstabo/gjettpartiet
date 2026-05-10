import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { sveltekit_effect_runtime } from "svelte-effect-runtime/v4/vite";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        dedupe: ["effect"],
    },
    plugins: [sveltekit_effect_runtime(), tailwindcss(), sveltekit()],
});

import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { effect } from "svelte-effect-runtime/v4";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        dedupe: ["effect"],
    },
    plugins: [effect(), tailwindcss(), sveltekit()],
});

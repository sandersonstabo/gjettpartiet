import adapter from '@sveltejs/adapter-vercel';
import { effect_preprocess } from 'svelte-effect-runtime/v4/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [effect_preprocess()],
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
		experimental: {
			async: true
		}
	},
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		}
	}
};

export default config;

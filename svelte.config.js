import staticAdapter from '@sveltejs/adapter-auto';

import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer()]
			}
		}),
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter: staticAdapter()
	}
};

export default config;

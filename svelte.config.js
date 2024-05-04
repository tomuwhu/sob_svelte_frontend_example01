import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	}
};

export default config;

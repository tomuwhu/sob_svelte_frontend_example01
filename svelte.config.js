import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: process.argv.includes('dev') ? '/github_repo_name' : process.env.BASE_PATH
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			precompress: false,
			strict: true
		})
	}
}

export default config

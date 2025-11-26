import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'
import { analyzer } from 'vite-bundle-analyzer'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.nabilsnigdho.dev',
	trailingSlash: 'always',
	build: {
		format: 'directory',
	},
	vite: {
		plugins: [
			Icons({
				compiler: 'astro',
			}),
			analyzer({
				analyzerMode: 'static',
			}),
			tailwindcss(),
		],
	},
})

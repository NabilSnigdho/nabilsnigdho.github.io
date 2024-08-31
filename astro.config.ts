import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import Icons from 'unplugin-icons/vite'
import { analyzer } from 'vite-bundle-analyzer'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.nabilsnigdho.dev',
	trailingSlash: 'always',
	build: {
		format: 'directory',
	},
	integrations: [
		UnoCSS({
			injectReset: true,
		}),
	],
	vite: {
		plugins: [
			Icons({
				compiler: 'astro',
			}),
			analyzer({
				analyzerMode: 'static',
			}),
		],
	},
})

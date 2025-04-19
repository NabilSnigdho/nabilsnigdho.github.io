import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/data/projects' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			ss: image(),
			url: z.string().url(),
			gh: z.string().url(),
		}),
})

export const collections = { projects }

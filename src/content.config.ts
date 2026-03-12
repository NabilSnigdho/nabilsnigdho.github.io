import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/data/projects' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			ss: image(),
			url: z.url(),
			gh: z.url(),
		}),
})

export const collections = { projects }

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),

			// Content categorization
			tags: z.array(z.string()).default([]),
			category: z.enum([
				'software-development',
				'cybersecurity',
				'artificial-intelligence',
				'hacking-culture',
				'programming-tutorials',
				'tech-analysis',
				'tools-reviews',
				'industry-news'
			]).default('tech-analysis'),

			// Content flags
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),

			// Enhanced SEO fields (all optional)
			seo: z.object({
				metaTitle: z.string().max(60).optional(),
				metaDescription: z.string().max(160).optional(),
				ogImage: z.string().optional(),
				ogImageAlt: z.string().optional(),
				keywords: z.array(z.string()).optional(),
				noindex: z.boolean().default(false),
				nofollow: z.boolean().default(false),
				canonical: z.string().url().optional(),
				author: z.string().optional(),
				articleSection: z.string().optional(),
			}).optional(),
		}),
});

export const collections = { blog };

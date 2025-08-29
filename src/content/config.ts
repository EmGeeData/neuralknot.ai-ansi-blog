import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    
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
  })
});

export const collections = { blog };
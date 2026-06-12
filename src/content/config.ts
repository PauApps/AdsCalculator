import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    pubDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    keywords: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};

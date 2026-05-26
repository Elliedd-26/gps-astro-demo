import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_zh: z.string(),
    date: z.date(),
    location: z.string(),
    location_zh: z.string(),
    host: z.string(),
    cover_emoji: z.string(),
  }),
});

export const collections = { events };

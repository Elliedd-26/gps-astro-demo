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
    cover_image: z.string(),
    description: z.string().optional(),
    description_zh: z.string().optional(),
    photo_caption: z.string().optional(),
    photo_caption_zh: z.string().optional(),
  }),
});

export const collections = { events };

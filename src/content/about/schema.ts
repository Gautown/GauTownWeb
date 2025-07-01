import { defineCollection } from 'astro:content';

import { z } from 'zod';

const aboutCollection = defineCollection({
  type: 'content',
  schema: {
    title: z.string(),
    description: z.string().optional(),
    content: z.string()
  }
});

export const collections = {
  'about': aboutCollection,
};
import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 这里可以根据实际需求定义blog集合的schema
  }),
});

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 这里可以根据实际需求定义resources集合的schema
  }),
});

export const collections = {
  blog: blogCollection,
  resources: resourcesCollection,
};
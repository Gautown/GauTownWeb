import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    tags: z.array(z.string()),
    date: z.date().default(new Date())
  })
});

export const collections = {
  'projects': projectsCollection,
  'about': defineCollection({
    schema: z.object({
      title: z.string(),
      introduction: z.string(),
      philosophy: z.object({
        title: z.string(),
        content: z.string()
      }),
      services: z.array(z.object({
        title: z.string(),
        items: z.array(z.string())
      })),
      team: z.object({
        title: z.string(),
        content: z.string()
      })
    }),
  }),
};
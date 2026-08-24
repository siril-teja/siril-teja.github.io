import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    type: z.enum([
      'journal',
      'book-chapter',
      'conference-talk',
      'conference-poster',
      'manuscript',
      'preprint',
      'thesis-phd',
      'thesis-bachelor',
    ]),
    venue: z.string().optional(),
    location: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    volume: z.coerce.string().optional(),
    issue: z.coerce.string().optional(),
    pages: z.coerce.string().optional(),
    summary: z.string().optional(),
    abstract: z.string().optional(),
    note: z.string().optional(),
    code: z.string().optional(),
    data: z.string().optional(),
    figure: z.string().nullable().optional(),
    selected: z.boolean().optional(),
    tags: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'building-physical-models',
      'building-computational-models',
      'testing-validating-models',
      'bringing-models-together',
    ]),
    summary: z.string(),
    description: z.string(),
    themes: z.array(z.string()).default([]),
    hero: z.string().optional(),
    images: z.array(z.string()).default([]),
    related_publications: z.array(z.string()).default([]),
    external_links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { publications, projects };

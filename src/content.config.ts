import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    track: z.enum(['professional', 'personal']),
    category: z.enum([
      'commentaries',
      'essays',
      'food-reviews',
      'legal',
      'biographicals',
      'diaries',
      'readings',
      'others',
    ]),
    lang: z.enum(['en', 'zh-Hant', 'zh-Hans', 'bilingual']).default('en'),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    toc: z.boolean().default(false),
    comments: z.boolean().default(true),
    // Optional metadata for Food Reviews (Professional)
    food: z
      .object({
        restaurant: z.string(),
        location: z.string(),
        cuisine: z.string(),
        dateVisited: z.string().optional(),
        verdict: z.string().optional(),
        photos: z
          .array(
            z.object({
              src: z.string(),
              caption: z.string(),
              dish: z.string().optional(),
            })
          )
          .default([]),
      })
      .optional(),
    // Optional metadata for Readings (Personal)
    book: z
      .object({
        title: z.string(),
        author: z.string(),
        publisher: z.string().optional(),
        year: z.string().optional(),
        translator: z.string().optional(),
      })
      .optional(),
  }),
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    type: z.enum(['concert', 'recording', 'writing']),
    lang: z.enum(['en', 'zh-Hant', 'zh-Hans', 'bilingual']).default('en'),
    excerpt: z.string(),
    composers: z.array(z.string()).default([]),
    performers: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    toc: z.boolean().default(false),
    comments: z.boolean().default(true),
    // Optional Concert Programme Metadata
    concert: z
      .object({
        concertDate: z.string(),
        venue: z.string(),
        city: z.string().optional(),
        orchestra: z.string().optional(),
        conductor: z.string().optional(),
        soloists: z.array(z.string()).default([]),
        repertoire: z
          .array(
            z.object({
              composer: z.string(),
              work: z.string(),
            })
          )
          .default([]),
      })
      .optional(),
    // Optional Recording Review Metadata
    recording: z
      .object({
        work: z.string(),
        performers: z.string(),
        conductor: z.string().optional(),
        orchestra: z.string().optional(),
        label: z.string(),
        catalogOrYear: z.string(),
        format: z.string().optional(),
      })
      .optional(),
  }),
});

const film = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/film' }),
  schema: z.object({
    title: z.string(),
    rollNumber: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    season: z.string(),
    camera: z.string(),
    lens: z.string().optional(),
    filmStock: z.string(),
    excerpt: z.string(),
    coverPhoto: z.string(),
    comments: z.boolean().default(true),
    photos: z.array(
      z.object({
        src: z.string(),
        title: z.string().optional(),
        caption: z.string(),
        location: z.string().optional(),
        frame: z.string().optional(),
        aspect: z.enum(['landscape', 'portrait', 'square']).default('landscape'),
      })
    ),
  }),
});

export const collections = {
  writings,
  music,
  film,
};

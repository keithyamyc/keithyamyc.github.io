import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';

export async function GET(context: APIContext) {
  const writings = await getCollection('writings');
  const music = await getCollection('music');
  const film = await getCollection('film');

  const items = [
    ...writings.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.date,
      link: `/writings/${entry.id}/`,
      categories: [entry.data.track, entry.data.category, ...entry.data.tags],
    })),
    ...music.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.date,
      link: `/music/${entry.id}/`,
      categories: [entry.data.type, ...entry.data.composers],
    })),
    ...film.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.date,
      link: `/film/${entry.id}/`,
      categories: [entry.data.rollNumber, entry.data.location],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
    customData: '<language>en</language>',
  });
}

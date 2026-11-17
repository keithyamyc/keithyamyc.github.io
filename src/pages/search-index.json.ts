import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {
  categoryLabel,
  excerptOf,
  musicTypeLabel,
  stripMarkdown,
  trackLabel,
} from '../lib/format';

type Doc = {
  title: string;
  url: string;
  section: string;
  category: string;
  date: string;
  lang: string;
  text: string;
};

export const GET: APIRoute = async () => {
  const docs: Doc[] = [];

  const writings = await getCollection('writings');
  for (const entry of writings) {
    docs.push({
      title: entry.data.title,
      url: `/writings/${entry.id}/`,
      section: 'Writings',
      category: `${trackLabel(entry.data.track)} · ${categoryLabel(entry.data.category)}`,
      date: entry.data.date.toISOString().slice(0, 10),
      lang: entry.data.lang,
      text: [
        entry.data.excerpt,
        entry.data.subtitle ?? '',
        entry.data.tags.join(' '),
        entry.data.food
          ? `${entry.data.food.restaurant} ${entry.data.food.location} ${entry.data.food.cuisine}`
          : '',
        entry.data.book
          ? `${entry.data.book.title} ${entry.data.book.author}`
          : '',
        stripMarkdown(entry.body ?? ''),
      ]
        .join(' ')
        .slice(0, 4000),
    });
  }

  const music = await getCollection('music');
  for (const entry of music) {
    docs.push({
      title: entry.data.title,
      url: `/music/${entry.id}/`,
      section: 'Music',
      category: musicTypeLabel(entry.data.type),
      date: entry.data.date.toISOString().slice(0, 10),
      lang: entry.data.lang,
      text: [
        entry.data.excerpt,
        entry.data.subtitle ?? '',
        entry.data.composers.join(' '),
        entry.data.performers.join(' '),
        entry.data.concert ? `${entry.data.concert.venue} ${entry.data.concert.orchestra ?? ''}` : '',
        entry.data.recording ? `${entry.data.recording.work} ${entry.data.recording.label}` : '',
        stripMarkdown(entry.body ?? ''),
      ]
        .join(' ')
        .slice(0, 4000),
    });
  }

  const film = await getCollection('film');
  for (const entry of film) {
    docs.push({
      title: entry.data.title,
      url: `/film/${entry.id}/`,
      section: 'Film & Travel',
      category: `${entry.data.rollNumber} · ${entry.data.location}`,
      date: entry.data.date.toISOString().slice(0, 10),
      lang: 'en',
      text: [
        entry.data.excerpt,
        entry.data.location,
        entry.data.camera,
        entry.data.lens ?? '',
        entry.data.filmStock,
        entry.data.photos.map((p) => p.caption).join(' '),
        stripMarkdown(entry.body ?? ''),
      ]
        .join(' ')
        .slice(0, 4000),
    });
  }

  docs.sort((a, b) => (a.date < b.date ? 1 : -1));

  return new Response(JSON.stringify(docs), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};

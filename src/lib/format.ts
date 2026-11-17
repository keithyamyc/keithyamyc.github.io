import { PROFESSIONAL_CATEGORIES, PERSONAL_CATEGORIES, MUSIC_TYPES } from '../config/site';

export const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export function formatDate(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

export function formatDateLong(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function year(date: Date): string {
  return String(date.getUTCFullYear());
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function langLabel(lang: string): string {
  switch (lang) {
    case 'zh-Hant':
      return '繁';
    case 'zh-Hans':
      return '简';
    case 'bilingual':
      return 'EN · 中';
    default:
      return 'EN';
  }
}

export function isChinese(lang: string): boolean {
  return lang === 'zh-Hant' || lang === 'zh-Hans';
}

export function categoryLabel(category: string): string {
  const all = [...PROFESSIONAL_CATEGORIES, ...PERSONAL_CATEGORIES];
  return all.find((c) => c.id === category)?.label ?? 'Writing';
}

export function categoryLabelZh(category: string): string {
  const all = [...PROFESSIONAL_CATEGORIES, ...PERSONAL_CATEGORIES];
  return all.find((c) => c.id === category)?.labelZh ?? '';
}

export function musicTypeLabel(type: string): string {
  return MUSIC_TYPES.find((t) => t.id === type)?.label ?? 'Music';
}

export function trackLabel(track: string): string {
  return track === 'professional' ? 'Professional' : 'Personal';
}

export function readingTime(body: string): number {
  const text = body.replace(/```[\s\S]*?```/g, ' ');
  const cjk = (text.match(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g) ?? []).length;
  const latin = text
    .replace(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = latin / 220 + cjk / 460;
  return Math.max(1, Math.round(minutes));
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ł/g, 'l')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9\u3400-\u4dbf\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Strip markdown syntax for search snippets and plain-text excerpts. */
export function stripMarkdown(input: string): string {
  return input
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[\^[^\]]*\]/g, ' ')
    .replace(/[*_~`>#]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function excerptOf(body: string, length = 165): string {
  const clean = stripMarkdown(body);
  return clean.length > length ? `${clean.slice(0, length).trimEnd()}…` : clean;
}

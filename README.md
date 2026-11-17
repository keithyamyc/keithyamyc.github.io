# Keith Yam — Personal Website

A static, editorial-style personal website built with [Astro](https://astro.build).
No database, no CMS, no tracking. Every page is pre-built HTML.

- **Sections:** Home · Writings (Professional / Personal) · Music (concerts, recordings, essays) · Film & Travel · About & CV
- **Search:** full-site, bilingual (English + 繁體/简体), static index
- **Comments:** Giscus (GitHub Discussions) — optional, one config line
- **Hosting:** GitHub Pages via GitHub Actions

The requirements this was built against are in [`PRD.md`](./PRD.md).

---

## 1. Run it locally

Requires Node 20+ (this machine has it at
`/Users/keithyam/.workbuddy-ai/binaries/node/versions/22.22.2-6/bin`).

```bash
export PATH="/Users/keithyam/.workbuddy-ai/binaries/node/versions/22.22.2-6/bin:$PATH"
npm install
npm run dev        # http://localhost:4321
```

Other commands:

```bash
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

---

## 2. Where everything lives

```
src/
  config/site.ts          ← your name, email, socials, categories, CV data, Giscus IDs
  content.config.ts       ← schemas (what fields each post must have)
  styles/global.css       ← the whole design system (colours, type, components)
  layouts/Base.astro      ← <head>, header, footer, theme + search wiring
  components/             ← cards, gallery/lightbox, comments, TOC, search
  lib/format.ts           ← date formatting, reading time, search helpers
  pages/
    index.astro           ← home
    writings/             ← list + article template
    music/                ← list, article, /composer/[name], /performer/[name]
    film/                 ← list + roll template
    cv.astro              ← About & CV
    search.astro          ← search page
    search-index.json.ts  ← builds the search index at build time
    rss.xml.ts            ← RSS feed
content/
  writings/*.md  music/*.md  film/*.md
public/
  images/film/  images/food/   ← photographs
  keith-yam-cv.pdf             ← downloadable CV
```

---

## 3. Adding a post

Create a file in the right folder. The filename becomes the URL
(`src/content/writings/my-piece.md` → `/writings/my-piece/`).

### Writing — professional

```yaml
---
title: 'Title'
subtitle: 'Optional standfirst'
date: 2026-11-20
track: professional          # professional | personal
category: commentaries       # professional: commentaries | essays | food-reviews | legal | others
lang: en                     # en | zh-Hant | zh-Hans | bilingual
excerpt: 'One or two sentences used in lists and search results.'
tags: ['public law', 'accountability']
toc: true                    # optional: show a table of contents
featured: false
comments: true
---
```

Personal writings use the same fields but `track: personal` with
`category: essays | biographicals | diaries | readings | others`.

**Food reviews** may add:

```yaml
food:
  restaurant: 'Wah Kee Noodle House 華記麵家'
  location: 'Sheung Wan, Hong Kong'
  cuisine: 'Cantonese — wonton noodles'
  dateVisited: 'September 2026'
  verdict: 'Worth waking up for.'
  photos:
    - src: '/images/food/wonton-01.svg'
      caption: 'The bowl arrives at 6:12 a.m.'
      dish: 'Wonton noodles'
```

**Readings** may add:

```yaml
book:
  title: 'The Rings of Saturn'
  author: 'W. G. Sebald'
  publisher: 'New Directions'
  year: '1998'
  translator: 'Michael Hulse'
```

### Music

```yaml
---
title: 'Mahler’s Ninth, and the Sound of a Hall Holding Its Breath'
date: 2026-10-13
type: concert                # concert | recording | writing
lang: en
excerpt: '...'
composers: ['Gustav Mahler']                       # powers the composer index
performers: ['Hong Kong Philharmonic Orchestra', 'Jaap van Zweden']
concert:                     # only for type: concert
  concertDate: '12 October 2026'
  venue: 'Hong Kong Cultural Centre, Concert Hall'
  city: 'Hong Kong'
  orchestra: 'Hong Kong Philharmonic Orchestra'
  conductor: 'Jaap van Zweden'
  soloists: []
  repertoire:
    - composer: 'Gustav Mahler'
      work: 'Symphony No. 9 in D major'
---
```

For `type: recording`, use a `recording:` block instead:

```yaml
recording:
  work: 'Beethoven: Symphonies Nos. 5 & 7'
  performers: 'Vienna Philharmonic Orchestra'
  conductor: 'Carlos Kleiber'
  orchestra: 'Vienna Philharmonic Orchestra'
  label: 'Deutsche Grammophon'
  catalogOrYear: '1975 / 1976; reissued 2023'
  format: 'LP'
```

Names in `composers` and `performers` automatically create index pages at
`/music/composer/<slug>/` and `/music/performer/<slug>/`. Use the same spelling
every time (`Gustav Mahler`, not `Mahler`) so entries group correctly.

### Film roll

```yaml
---
title: 'Kyoto, in the Season of Turning'
rollNumber: 'Roll 04'
location: 'Kyoto & Uji, Japan'
date: 2026-11-15
season: 'Autumn 2026'
camera: 'Leica M6 TTL'
lens: 'Summicron 35mm f/2 (v4)'
filmStock: 'Kodak Portra 400'
excerpt: '...'
coverPhoto: '/images/film/kyoto-01.svg'
photos:
  - src: '/images/film/kyoto-01.svg'
    caption: 'Togetsukyo Bridge at 6:40 a.m.'
    location: 'Arashiyama, Kyoto'
    frame: '04 / 12'
    aspect: landscape        # landscape | portrait | square
---
```

### Images

Drop files into `public/images/…` and reference them from the site root
(`/images/film/kyoto-01.jpg`). The four `.svg` plates in `public/images/film/`
and the two in `public/images/food/` are placeholders — delete them once your own
scans are in.

---

## 4. Editing yourself into the site

Everything personal is in **`src/config/site.ts`**:

- `SITE.email`, `SITE.social.*`, `SITE.location`
- `CV_DATA` — summary, experience, education, languages, interests
  (this is the content of the CV page)
- `SITE.giscus` — comments settings

Two things need your attention:

1. **Email** — `keith@example.com` is a placeholder.
2. **CV bullet points** — "Chambers / Law Firm (Replace with your firm)" and
   "University Name (Edit in src/config/site.ts)" are placeholders.

### Regenerating the CV PDF

`public/keith-yam-cv.pdf` was printed from the CV page. After editing
`CV_DATA`, rebuild and reprint:

```bash
npm run build
cd dist && python3 -m http.server 4399 &
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="../public/keith-yam-cv.pdf" http://localhost:4399/cv/
```

The **Print** button on `/cv/` also uses the print stylesheet, so
"Save as PDF" from the browser gives the same result.

---

## 5. Turning on comments

The site ships with Giscus wired up but **not yet connected** — until IDs are
provided it shows a short setup note instead of a comment box.

1. Push this repository to GitHub and make it public.
2. Repository → Settings → General → Features → enable **Discussions**.
3. Install the [Giscus app](https://github.com/apps/giscus) on the repository.
4. Go to [giscus.app](https://giscus.app), enter the repo, choose the
   `Announcements` category, and copy `data-repo-id` and `data-category-id`.
5. Paste them into `src/config/site.ts`:

```ts
giscus: {
  enabled: true,
  repo: 'keithyam/keithyam.github.io',
  repoId: 'R_kgDO…',
  category: 'Announcements',
  categoryId: 'DIC_kwDO…',
},
```

Comments appear at the bottom of every entry where `comments: true`.

---

## 6. Publishing to GitHub Pages

The workflow is already in `.github/workflows/deploy.yml`.

1. Create a **public** repository named **`keithyam.github.io`**
   (the name matters: it makes the site live at the root domain).
2. Push this folder to it:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/keithyam.github.io.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` rebuilds and publishes the site (~1 minute).
   The URL will be `https://<your-username>.github.io`.

If you later use a custom domain, add a `CNAME` file in `public/` with the domain,
and update `SITE.url` and `site` in `astro.config.mjs`.

> The `site` value in `astro.config.mjs` is `https://keithyam.github.io`.
> Change it if your GitHub username is different — it affects RSS and social
> preview links.

---

## 7. Search

`/search-index.json` is generated at build time from every entry's title,
excerpt, tags, metadata and body text. The overlay (`/` or `⌘K`) and the
`/search` page both read that one file, so search results are always in sync
with the published site. Nothing to configure.

---

## 8. Design notes

- **Type:** Newsreader (Latin serif), Noto Serif TC/SC (Chinese), Inter (UI),
  JetBrains Mono (dates, metadata, catalogue numbers).
- **Colour:** warm paper `#faf7f2`, ink `#1c1b18`, oxblood accent `#7a2e2e`,
  with a warm charcoal dark mode (`dark` button in the header).
- **Bilingual details:** Chinese entries get a `lang="zh"` body class with looser
  line-height and no drop cap; CJK/Latin spacing is handled by the font stack.
- **Print:** `/cv/` has a dedicated print stylesheet (hides chrome, removes
  colour fills, avoids page breaks inside entries).

All of this is in `src/styles/global.css` — the tokens at the top control the
whole site.

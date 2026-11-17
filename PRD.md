# Programme Requirements Document (PRD): Keith Yam — Personal Website

**Project Name:** Keith Yam — Personal Editorial Website & Portfolio  
**Author / Owner:** Keith Yam  
**Date:** November 17, 2026  
**Status:** Finalized & Approved

---

## 1. Vision & Purpose
Build a warm, personal, literary-style website for **Keith Yam** that reflects who he is and what he does—balancing intellectual rigor with personal warmth. The website serves as a permanent home for:
1. **Professional Writings:** Commentaries, Essays, Food Reviews (with restaurant metadata & dish photography), Legal pieces, and Others.
2. **Personal Writings:** Essays, Biographicals, Diaries, Readings (with book metadata), and Others.
3. **Music:** A dedicated classical music hub uniting **Concert Notes** (live performance blogs), **Recording Reviews** (album/recording critiques), and **Music Writings** (essays on music), complete with interactive **Composer** and **Selected Performer** indices.
4. **Film & Travel:** Curated galleries of 35mm/120mm film photography from travels a few times a year, with camera and film stock metadata.
5. **About & CV:** A personal introduction alongside an editorial-style professional CV with a downloadable/printable PDF option.
6. **Full-Site Search:** Instant search across all English, Traditional Chinese, and Simplified Chinese articles, music notes, and film logs.

---

## 2. Visual Identity & Design System ("Editorial Print & Film")

### 2.1 Aesthetic Direction
- **Inspiration:** Literary magazines (*The Paris Review*, *London Review of Books*, *Kinfolk*), classical concert programme booklets, and analog contact sheets.
- **Masthead:** Displays **"Keith Yam"** in classic editorial serif typography.
- **Tone:** Thoughtful, unhurried, tactile, and warm.

### 2.2 Color Palette
- **Paper Background (Light Mode Default):** Warm ivory / off-white (`#FAF7F2` / `#F3EFE6` for cards & borders).
- **Darkroom Mode (Toggleable):** Warm charcoal (`#181715`) with soft parchment text (`#E6E1D6`)—ideal for viewing film photography and night reading.
- **Primary Ink:** Deep charcoal (`#1C1B18`) for high-contrast readability without harsh pure black.
- **Muted Ink:** Warm slate/taupe (`#6E6A63`) for captions, metadata, dates, and footnotes.
- **Accent Color:** Deep Burgundy / Oxblood (`#7A2E2E`) for links, active states, and editorial highlights.

### 2.3 Bilingual Typography (EN + TC/SC)
- **Headings & Essay Body (Serif):**
  - *English:* `Newsreader` or `Source Serif 4`.
  - *Chinese (TC & SC):* `Noto Serif TC` & `Noto Serif SC` (思源宋體 / 思源宋体), falling back to system Songti/Mingti (`Songti SC`, `STSong`, `PMingLiU`).
- **UI, Navigation & Metadata (Sans-Serif / Monospace):**
  - *Sans:* `Inter` with `PingFang TC` / `PingFang SC` / `Noto Sans CJK`.
  - *Monospace (Film roll metadata, dates, catalogue numbers):* `JetBrains Mono`.
- **Typographic Details:**
  - Generous line height (`1.75`–`1.85`) and comfortable measure (`65ch`) optimized for both English and dense Chinese characters.
  - Native Markdown **Footnotes** (`[^1]`) and automatic **Table of Contents** for longer Legal, Commentary, Essay, and Biographical articles.

---

## 3. Site Architecture & Navigation

### Top-Level Navigation (`Keith Yam` Masthead)
1. **Home (`/`)**
   - Warm personal introduction ("Who I am & what I do").
   - Featured / latest entries split across **Professional Writings** and **Personal Writings**.
   - Highlighted recent **Music** entries (Concert Notes, Recording Reviews, Music Writings).
   - Preview strip of the latest **Film & Travel** roll.
2. **Writings (`/writings`)** — Split clearly into two main tracks with category filters:
   - **Professional Writings:**
     - *Commentaries* (時事/評論)
     - *Essays* (論述/文章)
     - *Food Reviews* (飲食評論) — Includes structured **Restaurant Metadata Card** (*Restaurant Name, City/Neighborhood, Cuisine, Date Visited*) and support for **dish photo galleries** + inline images with lightbox preview.
     - *Legal* (法律) — Supports Table of Contents and clean legal footnotes.
     - *Others* (其他)
   - **Personal Writings:**
     - *Essays* (隨筆/散文)
     - *Biographicals* (人物/傳記)
     - *Diaries* (日記)
     - *Readings* (讀書筆記/書評) — Includes structured **Book Metadata Card** (*Book Title, Author, Publisher / Year*).
     - *Others* (其他)
3. **Music (`/music`)** — Dedicated hub for classical music:
   - **Three Sub-Sections:**
     - **Concert Notes (`concert`):** Live concert reviews with a structured **Programme Header** (*Date, Venue, Orchestra/Ensemble, Conductor, Soloists, Repertoire*).
     - **Recording Reviews (`recording`):** Critiques of albums and historical/modern recordings with a **Recording Metadata Header** (*Composer & Work, Performers/Conductor, Orchestra, Label & Year*).
     - **Music Writings (`writing`):** General essays on classical music history, composers, interpretation, and musical life.
   - **Composer & Selected Performer Indices:**
     - Interactive index/filter pills for **Composers** (e.g., *Mahler*, *Bruckner*, *J.S. Bach*, *Schubert*, *Beethoven*) and **Selected Performers** (e.g., *Carlos Kleiber*, *Claudio Abbado*, *Martha Argerich*, *Hong Kong Philharmonic*, *Berlin Philharmonic*), allowing readers to view all concerts, recordings, and essays related to a specific composer or artist.
4. **Film & Travel (`/film`)**
   - Organized as **"Film Rolls" / Trips** (e.g., *Roll 04 — Kyoto, Autumn 2026*).
   - Each roll displays metadata: *Location, Date, Camera, Lens, Film Stock* (e.g., *Kodak Portra 400 / Ilford HP5*).
   - Clicking a roll opens a photo essay / gallery with captions and a full-screen lightbox view.
5. **About & CV (`/cv`)**
   - **Personal Bio:** Extended story of Keith Yam's background, interests, and contact links.
   - **Editorial CV:** Education, legal/professional experience, publications, skills, and languages formatted cleanly on the page.
   - **Download / Print PDF Button:** One-click download/print of a formal PDF resume.
6. **Search (`/search` & Header Search Modal `⌘K` / `/`)**
   - Instant full-text search across all sections (Professional & Personal Writings, Music, Composers, Performers, Film & Travel).
   - Supports searching in English, Traditional Chinese, and Simplified Chinese, with section/track badges.

---

## 4. Technical Stack & Hosting

- **Framework:** **Astro** (v5) with TypeScript and Content Collections.
- **Comments Section:** **Giscus** (GitHub Discussions) embedded at the bottom of articles, with a clean preview/setup fallback until connected to the live GitHub repo.
- **Hosting:** **GitHub Pages** configured for a root domain (`https://<username>.github.io`) with an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

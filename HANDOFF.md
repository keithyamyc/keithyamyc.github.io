# Handoff — working on this site

Keith's personal site. Astro, static, Markdown content, published on GitHub Pages.

## Where it is

```
/Users/keithyam/Documents/Opencode/Personal
https://github.com/keithyamyc/keithyamyc.github.io   (public)
https://keithyamyc.github.io                        (live)
```

Read `README.md` first — it documents every frontmatter field, the image syntax,
the photo-essay layout, and how publishing works. `PRD.md` explains the design
decisions.

## Running it

Node is installed outside PATH:

```bash
export PATH="/Users/keithyam/.workbuddy-ai/binaries/node/versions/22.22.2-6/bin:$PATH"
cd /Users/keithyam/Documents/Opencode/Personal
npm run dev        # http://localhost:4321
npm run build      # dist/
```

## Publishing

`git push` works — a credential is stored in the macOS keychain. No codes needed.
Every push to `main` rebuilds the site in about a minute via GitHub Actions.

Reprint the CV PDF after editing `CV_DATA` in `src/config/site.ts`:

```bash
npm run build
cd dist && python3 -m http.server 4399 &
# then, from the project root:
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/keith-yam-cv.pdf" http://localhost:4399/cv/
```

## What Keith may ask for

- Turning a draft (Word, PDF, plain text, or pasted prose) into a properly
  frontmattered entry under `src/content/{writings,music,film}/`
- Placing photographs: inline (`![caption](/images/x.jpg)`), beside the text
  (`"side"` as the image title), in a side column (film rolls), or as a photo
  essay (`layout: photo`)
- Setting `updated:` when he revises something
- Resizing or converting images, then adding them to `public/images/`
- Wording, typos, layout adjustments

## Ground rules

- **Do not rewrite his prose.** Preserve wording, punctuation and Chinese
  characters exactly; format around the text, don't polish it.
- **Do not invent facts.** No catalogue numbers, dates, venues, or quotes that
  aren't in the source he supplied.
- **Ask before deleting** entries, images, or sections.
- English and Chinese (繁體 and 简体) are both used. Chinese entries take
  `lang: zh-Hant` or `zh-Hans`.
- His public CV must not carry phone numbers.

## One gotcha

If you delete content files while `npm run dev` is running, the dev server's
cache can resurrect them in the next build. Stop the dev server first, then:

```bash
rm -rf .astro dist && npm run build
```

CI builds from a clean checkout, so this only affects local builds.

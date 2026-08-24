# siril.me — V2

Personal research website of Siril Teja Dukkipati, built with [Astro](https://astro.build).

**Design direction:** dark editorial research studio — show the work first, introduce the person behind it second.

## Stack

- Astro 5, static output, zero client frameworks
- Self-hosted fonts (Fraunces, Inter, IBM Plex Mono)
- Content collections (`src/content/`) for publications and projects
- Optimized responsive images via `astro:assets`
- Small vanilla-JS enhancements only: mobile nav, publication filters, scroll reveal (all optional; the site works without JavaScript)

## Develop

```sh
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  content/
    publications/   # one YAML per publication (schema in src/content.config.ts)
    projects/       # selected work entries, grouped into 4 editorial categories
  components/       # section + entry components
  components/home/  # homepage sections (01–06)
  layouts/          # base layout (fonts, meta, nav, footer, reveal script)
  pages/            # /, /work/, /publications/, /teaching/, /about/, 404
  assets/           # research figures, portrait, teaching photo (optimized at build)
  styles/           # design tokens + global styles
public/
  cv/               # downloadable CV PDF
assets/             # incoming source assets (CV LaTeX/PDF, headshot) — staging area
```

## Content rules

- The LaTeX CV (`assets/`) is the factual source of truth for dates, titles, and links.
- Publication entries are maintained as YAML in `src/content/publications/`.
- No proprietary MDsim/SPINEsim material is published; SPINEsim appears once, at a high level.
- Generated imagery (e.g. the homepage spine illustration) is explicitly conceptual artwork, never research evidence.

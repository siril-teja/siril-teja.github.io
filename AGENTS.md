# Website Development Instructions

## Development

This is an Astro website.

Development server:
npm run dev -- --host 0.0.0.0

Production build:
npm run build

## Definition of Done

Never consider a website task complete merely because the source code has been modified.

After implementing a change:

1. Run the production build.
2. Fix all build errors.
3. Open the local development site using Playwright.
4. Inspect the rendered page.
5. Check the browser console for errors.
6. Check navigation and internal links.
7. Check desktop rendering.
8. Check mobile rendering.
9. Inspect screenshots when visual verification is necessary.
10. Fix problems discovered during browser inspection.
11. Rebuild.
12. Recheck the affected pages.
13. Repeat until the implementation passes both build and browser checks.

Do not stop after the first implementation if browser inspection reveals problems.

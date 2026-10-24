# enigma.sh

The Enigma Technologies Solutions website: a static React SPA (Vite, React Router),
served by GitHub Pages from `Enigma-Technologies-Solutions/enigma-sh-website` at
**enigma.sh** (A records at Namecheap; `www` is a CNAME to the org's github.io, which
GitHub 301s to the bare domain). `.github/workflows/pages.yml` builds and deploys every
push to `main`. Pages has no SPA fallback, so `scripts/static-routes.mjs` writes a copy of
index.html for each URL in `public/sitemap.xml`, plus `404.html` for everything else.
Pages can't set response headers.

## Layout

```
client/
  App.tsx               routes
  site.css              all styles (tokens follow sanctum.enigma.sh / sigil.enigma.sh: light
                        by default, volt as a fill only, Poppins / Inter / Space Mono)
  global.css            fonts + Tailwind's base reset (no utility classes are used)
  components/Layout.tsx nav and footer, shared by every page
  pages/                Index, KeyGenerationCeremony, NotFound
public/                 favicons, og.png, manifest, robots.txt, sitemap.xml, CNAME
scripts/static-routes.mjs  per-route HTML copies for Pages (runs after vite build)
brand/                  generators for everything in public/ that is an image
```

## Commands

```bash
pnpm install
pnpm dev          # http://localhost:5000
pnpm typecheck
pnpm build        # dist/, with the per-route copies
pnpm preview      # serve dist/ on :5000
git push          # to main: Actions deploys enigma.sh
pnpm brand        # regenerate icons + og.png (needs Chrome and ImageMagick)
```

## Brand assets

The ETS badge follows the brand styleguide (`ETS_styleguide_light.html`, v1.1): a sharp
black 3:2 tile, "ETS" in Inter 800. `brand/gen-mark.py` (needs `pip install fonttools
brotli`) writes `brand/badge.svg` and `public/favicon.svg` from the font outlines;
`brand/gen-brand.mjs` renders the PNGs, `favicon.ico` and `og.png` from them. Don't
hand-edit their output.

## Adding a page

Create `client/pages/MyPage.tsx` wrapped in `<Layout>`, add a `<Route>` in `App.tsx`
above the catch-all, and list the URL in `public/sitemap.xml` (that list is also what gets a static
HTML copy, so an unlisted route would 404 on a direct load). Social previews come from
the static tags in `index.html` (crawlers don't run the SPA).

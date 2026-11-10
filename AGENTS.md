# ARIYO — development notes

A Vite + React single-page storefront (no backend, no database, no secrets).

## Run

```bash
docker compose -f docker-compose.base44.yml up -d
```

- Host port 3000 → Vite dev server on 5173 inside the container. The dev server serves
  the bind-mounted source, so edits hot-reload; no image rebuild is needed for code changes.
- `npm install` runs at container start and installs into the named volume
  `ariyo_node_modules`. After changing `package.json`, restart the service
  (`docker compose -f docker-compose.base44.yml restart web`).
- No environment variables are required. `/run/base44/app.env` is wired in for future use.

## Verify

Routes: `/` (home), `/shop` (all pieces), `/product/:slug` (product detail).

- The bag persists in `localStorage` under `ariyo-bag`; adding a piece opens the drawer.
- Product page: thumbnail strip swaps the gallery image, size guide opens a modal,
  size choice feeds "Add to Cart".
- Scroll-reveal sections (`.reveal`) start at `opacity: 0` until they intersect the
  viewport — a full-page screenshot shows them blank. Scroll to a section before capturing it.

## Imagery

All photography lives in `public/images/*.jpg` and is referenced through `src/images.js`
(section keys) and `src/data/products.js` (per-product `shot` / `gallery`). Swapping a
photograph is a one-line change in those files.

## Content

`src/data/products.js` holds the six pieces, their copy, sizes and gallery mapping.
`src/sections/*` holds the home page sections; `src/pages/Product.jsx` is the detail page.

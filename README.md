# Serein — UI‑only MVP (Light)

A polished, mobile‑first PWA UI for quick stress relief. Runs client‑side, no backend. Tailwind configured. Mock media provider ships offline.

## Quick start

```bash
pnpm i
pnpm dev
# or: npm i && npm run dev
```

Open http://localhost:3000

## Build & run

```bash
pnpm build && pnpm start
```

## Media providers

Mock mode is default and requires no keys.

To switch later:
- `NEXT_PUBLIC_MEDIA_PROVIDER=unsplash` or `pexels`
- Add `NEXT_PUBLIC_UNSPLASH_KEY` or `NEXT_PUBLIC_PEXELS_KEY`
- Update `lib/media.ts` to add a real fetch (left simple on purpose).

## Pocket Sanctuary

- One-tap pairing (image + mantra + breathing).
- Optional Picture‑in‑Picture breathing ring (falls back with alert).
- Toggle 1m / 2m.
- Subtle haptics when available.

## Yoga / Fitness

- MDX content in `content/yoga/*` and `content/fitness/*`.
- Rendered via `@next/mdx` plugin.

## Local‑only state

- Journal is stored in localStorage. Export as JSON.

## PWA

- `public/manifest.webmanifest`
- `public/sw.js` caches app shell + mock media assets for offline.
- Registration in `app/register-sw.tsx`.

## Stripe (stub)

- `lib/payments.ts` exports `isPremium=false`. Replace later when wiring Stripe Checkout.

## Colors

Defined in CSS variables in `app/globals.css` and mapped in Tailwind config.

```
--bg: #FAFAFB
--card: #FFFFFF
--text: #0F172A
--muted: #64748B
--brand: #6AA6FF
--brand-2: #95D5B2
--accent: #FFD6A5
```

## Routes

- `/` Home (Daily Calm)
- `/tools` + breathing, sos, grounding, body-scan, cbt
- `/yoga`, `/yoga/flows`
- `/fitness/gym-tips`
- `/media`
- `/advice`
- `/journal`
- `/sanctuary`
- `/pricing`
- `/about`, `/privacy`

## Notes

- Keep animations subtle; pacer respects reduced motion by slowing updates.
- All features run without API keys in mock mode.
- Deploy to Vercel normally (no special config required).

Happy calming ✨
# serein-ui-mvp-2

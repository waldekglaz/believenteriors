# Believe Interiors

Marketing website for **Believe Interiors** — bespoke fitted furniture (wardrobes,
kitchens, studies, media walls). Built with Next.js (App Router), TypeScript and
Tailwind CSS v4, with a luxury-minimalist design system: black premium sections,
generous whitespace, and gold used sparingly as an accent.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Pages

| Route             | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `/`               | Hero, 6-step process, "what's included" features, CTA            |
| `/our-work`       | Filterable project gallery + testimonial                         |
| `/design-details` | Construction, carcass finish swatches, shaker & slab door styles |
| `/about`          | "Why Believe", values, approach timeline                         |
| `/contact`        | Split layout: validated contact form + contact details           |

## Project structure

```
src/
  app/                 # routes (one folder per page) + layout, globals.css
  components/          # reusable UI (Button, Section, Gallery, ContactForm, …)
  lib/
    data.ts            # ALL copy & content: process, features, finishes, doors…
    nav.ts             # navigation links
```

## Design system

Defined as Tailwind v4 tokens in [`src/app/globals.css`](src/app/globals.css):

- **Colors:** `ink` (#000), `paper` (#fff), `gold` (#D4AF37), `cream` (#F9F7F4),
  `sand` (#E8E5E0), `taupe` (#62605D), `umber` (#48463F)
- **Fonts:** `font-serif` = Playfair Display (headings), `font-sans` = system stack (body)
- **`.label`** utility = uppercase gold eyebrow text

Use the `<Section tone="ink|cream|paper">` wrapper for consistent section padding.

## Editing content

All copy lives in [`src/lib/data.ts`](src/lib/data.ts) — process steps, features,
gallery projects, finish swatches (name/code/hex), door styles, and contact info.

## Adding real photography

Image placeholders are rendered by [`Frame`](src/components/Frame.tsx). To use real
photos, add a `src` to the relevant item in `data.ts` (e.g. `projects[].src`) or pass
`src` directly to `<Frame>`. For remote images, add the host to `images.remotePatterns`
in [`next.config.ts`](next.config.ts). `Frame` uses `next/image` automatically when a
`src` is present.

## Contact form

[`ContactForm`](src/components/ContactForm.tsx) does client-side validation and shows a
success state. It is not yet wired to a backend — add a Formspree/Netlify endpoint (or a
`fetch` to your API) in the `onSubmit` handler to deliver submissions.

## Deployment

Deploy to [Vercel](https://vercel.com/new): import the repo and accept the detected
Next.js defaults. Add a custom domain and Vercel Analytics from the dashboard if desired.

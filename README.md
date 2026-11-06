# Willow & Stone Skin Studio (sample site)

A 10-page portfolio demo for a **fictional** independent med spa in Portland, Oregon.
All names, addresses, phone numbers and people are made up. Built by BryBerry Systems
with Next.js (App Router), TypeScript and Tailwind CSS.

## Run locally

Requires Node.js 20.9+ (22.13+ recommended).

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build
npm start          # serves the production build
```

The `.npmrc` adds `--experimental-require-module`, which only matters on Node 22.11 and
older (the Tailwind plugin loads an ES module with `require`). On newer Node it is a no-op.

## Where things live

- `src/data/categories.ts`: the five treatment categories and their treatments (all treatment copy)
- `src/data/site.ts`: clinic name, address, phone, email, hours, booking URL
- `src/app/globals.css`: color and font tokens, container and section spacing
- `src/components/`: Header, Footer, SectionHeader, Card, Button, CtaBand, TreatmentSection, CategoryNav, PlaceholderImage
- `src/app/`: the 10 routes (`/services/[slug]` renders the five category pages from data)

## Deploy to Vercel from GitHub

1. Create an empty repository on GitHub.
2. Push this project to it:
   ```bash
   git remote add origin https://github.com/<you>/willow-stone.git
   git push -u origin main
   ```
3. In Vercel, choose **Add New → Project**, import the repository, and keep the
   detected **Next.js** framework preset (build command `next build`, no environment
   variables needed).
4. Click **Deploy**. Later pushes to `main` redeploy automatically; other branches get
   preview URLs.

The contact form is a sample and sends nothing. The booking button points to
`https://example.com/book`; change `bookingUrl` in `src/data/site.ts` for a real clinic.

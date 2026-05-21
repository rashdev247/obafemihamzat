<p align="center">
  <a href="https://www.obafemihamzat.com/" target="_blank">
    <img src="./public/logo.webp" width="120" alt="Obafemi Hamzat campaign logo" />
  </a>
</p>

# Dr. Kadri Obafemi Hamzat Website

This repository contains the Next.js website for Dr. Kadri Obafemi Hamzat's public profile and Lagos 2027 campaign platform.

The site presents the "For A Greater Lagos" movement through biography content, achievements, Vision 2027 priorities, campaign updates, image-led storytelling, and a join/volunteer flow.

## Project Links

- Production: https://drobafemihamzat.vercel.app
- Official website: https://www.obafemihamzat.com/

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Embla Carousel
- Cypress

## Main Routes

- `/` - campaign homepage
- `/about` - biography and leadership journey
- `/vision-2027` - Lagos 2027 vision pillars and roadmap
- `/achievements` - public service impact and gallery
- `/join` - volunteer and movement participation

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open the site locally:

```txt
http://localhost:3000
```

## Available Scripts

```sh
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Start the production server after building
npm run cy:open  # Open Cypress
```

## Environment Variables

The site can run locally without private credentials for most static pages. The following variables are used by optional integrations:

```env
NEXT_PUBLIC_BLOB_API_URL=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_ID=
CODA_API_TOKEN=
CODA_DOC_ID=
CODA_TABLE_ID=
REVALIDATE_SECRET=
```

## Content Structure

- Campaign copy, links, gallery items, stats, roadmap, and movement roles live in `src/data/campaignContent.ts`.
- SEO defaults live in `src/lib/seo.ts`.
- Main page implementations live in `src/pages`.
- Shared campaign layout and content primitives live in `src/components/campaign`.

## Testing

Open Cypress with:

```sh
npm run cy:open
```

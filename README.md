# Gabriel Patel — Technical Portfolio

A responsive one-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS and designed for remote roles across AI implementation, full-stack development, automation, and technical solutions.

## What the site demonstrates

- Responsive interface design across desktop, tablet, and mobile
- A custom animated technical hero environment
- Accessible keyboard and reduced-motion behavior
- Interactive project topology with live project previews
- A capability ledger and development-pipeline presentation
- Resume, GitHub, LinkedIn, and direct-contact integration
- Production deployment through Vercel

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Vercel Analytics

## Local development

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Production build

```bash
pnpm build
pnpm start
```

## Project structure

- `app/` — route, metadata, and global styles
- `components/` — portfolio sections and UI components
- `lib/content.ts` — profile, project, skill, and learning content
- `public/` — static assets and the public resume PDF

## Resume

The portfolio links to:

`/Gabriel_Patel_Resume_Tech_2026.pdf`

Keep the PDF in `public/` so the route remains stable after deployment.

## Design principles

The interface uses a restrained midnight/graphite foundation, sapphire structural accents, ice-blue informational accents, and sparse warm-ember activity cues. Motion is intended to communicate hierarchy, system activity, and transitions rather than exist as decoration.

## Deployment

The project is intended for Vercel. Connect the GitHub repository to Vercel and deploy the `main` branch. Preview deployments should be reviewed at desktop, tablet, and mobile widths before production promotion.

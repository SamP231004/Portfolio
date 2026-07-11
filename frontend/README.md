# Samarth Patel — Portfolio

Personal developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Framer Motion**, **React Hook Form**, and **Zod**.

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `yarn dev` / `yarn start` — start dev server (0.0.0.0:3000)
- `yarn build` — production build
- `yarn serve` — start production server

## Structure

```
app/               # Next.js App Router
components/
  layout/          # Navbar, Footer
  sections/        # Home page sections
  ui/              # shadcn/ui components
data/              # Centralized portfolio data
lib/               # Utilities
public/            # Static assets (drop resume.pdf here)
```

## Deployment

Optimized for **Vercel**. Push to GitHub and import the project on Vercel — no environment variables are required for the static portfolio. To wire up a real email backend (e.g., Resend) for the contact form, add an API route and swap the `mailto:` handler in `components/sections/contact.tsx`.

## Resume

Drop your resume as `public/resume.pdf`; the Resume button opens it in a new tab.

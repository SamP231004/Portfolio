# Samarth Patel Portfolio — PRD

## Original Problem Statement
Build a complete, production-ready personal developer portfolio website for Samarth Patel — a Software Engineer & Full-Stack Developer. Premium, minimal, engineering-focused dark theme. Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion + React Hook Form + Zod. Deployment target: Vercel.

## Tech Stack
- Next.js 14.2.30 (App Router), TypeScript, Tailwind CSS 3
- Fonts: Geist Sans + Geist Mono (via `geist` package)
- shadcn/ui primitives (Button, Input, Textarea, Label, Sonner)
- Lucide React icons + custom X (Twitter) icon
- Framer Motion (rotating role text + nav active indicator)
- React Hook Form + Zod (contact form validation)
- Accent color: Indigo `#6366F1`

## Architecture
```
app/               # App Router (layout, page, robots, sitemap, globals.css)
components/
  layout/          # Navbar, Footer
  sections/        # Hero, Highlights, About, Experience, FeaturedProjects,
                   # MoreProjects, OpenSource, Skills, Learning, Contact
  ui/              # Button, Input, Textarea, Label, Sonner, SectionHeader,
                   # Reveal, SocialIcons
data/              # profile, socials, experience, projects, skills, open-source
lib/               # cn utility
public/            # (drop resume.pdf here)
```

## Implemented (Dec 2025 – initial build)
- Sticky nav with active section indicator, mobile slide-down menu, GitHub/LinkedIn/X icons, Resume button
- Hero (two-column) with availability badge, name, headline, rotating role text (Framer Motion AnimatePresence), profile card with floating tech badges (Java, Spring Boot, React, Next.js, Node.js, AWS), grid + radial glow background
- Engineering Highlights: 4-card row (Production Applications, Cloud Deployment, Full-Stack Engineering, Open Source)
- About: heading + long-form copy + 3 side cards (What I Build, How I Work, Currently Exploring)
- Experience timeline: DeepNeurons.ai (with certificate button) + SmartInternz
- Featured Projects: 6 large alternating cards (EchoOwl flagship, Mystery Messages, Stream Sphere, Blog Platform, Group Chat Extension, Payment Integration) with browser-window screenshots, tech tags, Live/GitHub/Android buttons
- More Projects: 3 compact cards (Rice Classification, 8-Puzzle Game, Guess The Number Game) + "View All on GitHub" button
- Open Source: professional empty state with terminal-style CTA to GitHub activity
- Skills: 7 grouped categories (Languages, Frontend, Backend, Databases & ORM, Cloud & DevOps, Tools & Services, Core Engineering) — no progress bars
- Learning: 6 topic cards (System Design, Scalable Backend Architecture, Advanced Java & Spring, Cloud Infrastructure, Open Source, Production Engineering)
- Contact: two-column (info + form). RHF+Zod validation, Sonner toasts, mailto fallback (ready for Resend backend later)
- Footer: minimal, credit + social + copyright
- SEO: OpenGraph, Twitter cards, canonical URL, robots.ts, sitemap.ts, JSON-LD Person schema
- Accessibility: semantic HTML, keyboard nav, focus rings, aria-labels, prefers-reduced-motion respected
- data-testid on all interactive elements

## Configuration Notes
- Supervisor runs `yarn start` → maps to `next dev -H 0.0.0.0 -p 3000`
- Reveal animations use CSS `@keyframes fadeInUp` (hydration-safe)
- Resume button links to `/resume.pdf` — user should drop actual file into `public/`
- Contact form uses `mailto:` fallback; ready to swap for Resend API route

## Backlog (P0/P1/P2)
- **P1** — Wire Resend for real contact-form email delivery (replace mailto fallback)
- **P1** — Populate `data/open-source.ts` with real contributions when documented
- **P2** — Add real resume PDF to `public/resume.pdf`
- **P2** — Consider blog/writing section if Samarth publishes technical writing
- **P2** — Analytics (Vercel Analytics / Plausible)

## Deployment
Push to GitHub → import project on Vercel (no env vars required for MVP).

## Next Action Items
- Testing agent validation
- Add real resume PDF and (optionally) enable Resend

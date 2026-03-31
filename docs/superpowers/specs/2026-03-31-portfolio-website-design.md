# Portfolio Website Design Spec

**Author:** Rupesh Bharambe
**Date:** 2026-03-31
**Status:** Draft

---

## Overview

A multi-page portfolio website for Rupesh Bharambe — final-year B.Tech AI & Data Science student, 5x national hackathon winner, and software engineer intern. The site serves three audiences simultaneously: recruiters evaluating for roles, fellow developers/hackathon peers, and the broader tech community.

## Goals

1. **Recruiter conversion** — Key stats, experience, and resume visible within 30 seconds of landing
2. **Community credibility** — Hackathon wins, project depth, and GitHub activity establish builder reputation
3. **Personal brand** — Consistent visual identity across a polished, modern site that itself demonstrates frontend skill

## Tech Stack

- **Framework:** Next.js 16 (App Router) — SSR/SSG for SEO, image optimization, Vercel deployment
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion (polished level — scroll reveals, counters, page transitions, hover effects)
- **Deployment:** Vercel
- **Language:** TypeScript

## Visual Direction: Hybrid Fusion

Clean layout structure with techy monospace accents. Gradient highlights on key stats and CTAs. Code-style labels paired with bold typography for headings.

### Design Tokens

- **Background:** Dark base (`#0a0a0f` for Obsidian default)
- **Cards:** `#111118` with `#1e1e2e` borders
- **Typography:** System sans-serif for body, monospace for labels/accents
- **Gradients:** Theme-dependent accent gradients on CTAs, stat numbers, and logo mark
- **Borders:** 1px solid `#1e1e2e` standard, accent-colored borders on featured/win cards

### Theme System

10 switchable themes persisted in localStorage. Each theme defines: background, card background, primary accent, secondary accent, border color.

| Theme | Background | Primary | Secondary | Mode |
|-------|-----------|---------|-----------|------|
| Obsidian | `#0a0a0f` | `#8b5cf6` | `#06b6d4` | Dark |
| Pearl | `#fafafa` | `#7c3aed` | `#0891b2` | Light |
| Neon | `#0f0a1a` | `#ec4899` | `#10b981` | Dark |
| Aurora | `#0a1628` | `#22d3ee` | `#a855f7` | Dark |
| Oceanic | `#0c1426` | `#3b82f6` | `#06b6d4` | Dark |
| Ember | `#1a0a0a` | `#f97316` | `#eab308` | Dark |
| Forest | `#0a1a0f` | `#22c55e` | `#84cc16` | Dark |
| Sakura | `#1a0f14` | `#f472b6` | `#fb7185` | Dark |
| Mono | `#0a0a0a` | `#a1a1aa` | `#fafafa` | Dark |
| Solarized | `#002b36` | `#268bd2` | `#2aa198` | Dark |

Theme switcher lives in the navbar as a dropdown. Themes applied via CSS variables on `<html>`.

---

## Page Structure (5 Pages)

### Shared Components

**Navbar** (all pages):
- Logo: gradient RB mark (rounded square) + "Rupesh" text
- Links: Home, About, Projects, Achievements, Contact
- Active page indicator (highlighted text)
- Theme switcher dropdown (right side)
- Mobile: hamburger menu with slide-out drawer

**Footer** (all pages):
- Name + tagline ("AI/ML Engineer")
- "Built with Next.js + Framer Motion" tech signal
- Quick nav links
- Social icon links (GitHub, LinkedIn, Discord, Instagram)
- Copyright

**Page header pattern** (inner pages):
- Monospace comment label (`// about-me`, `// projects`, etc.)
- Bold page title (24px+, font-weight 900)
- Gradient underline bar (60px width, primary → secondary)

---

### Page 1: Home (Landing)

**Purpose:** First impression. Recruiter gets the full picture in 30 seconds.

**Sections in order:**

1. **Hero**
   - Profile photo (circular, gradient border)
   - Name: "Rupesh Bharambe" (32px, weight 900)
   - Typing tagline: rotates through "intelligent systems", "AI solutions", "real-world impact" with cursor blink
   - Subtitle: "AI/ML Engineer · 5x Hackathon Winner · SIH'24 Grand Finale Winner"
   - Two CTAs: "View Projects" (gradient fill) + "Download Resume" (outline)

2. **Highlights Stats Bar**
   - Dark card with 4 stats in a row, separated by vertical dividers
   - Stats: 5 (hackathons.won), 15+ (finalist.finishes), 9+ (projects.shipped), 2 (internships)
   - Monospace labels below each number
   - Animated counters (0 → value) triggered on scroll

3. **Featured Projects**
   - Section header: "Featured Projects" + `// hand-picked highlights` + "View all →" link
   - 3 compact project cards in a row (top 3 from featured list: EDFS, Face Liveness, @scale)
   - Each card: category badge, year, title, one-line description, tech chips
   - Links to full Projects page

4. **About + Skills Teaser**
   - Two-column layout
   - Left: short bio (3-4 lines) + "Read more →" link to About page
   - Right: tech stack chip cloud (top 5-6 skills + "+40 more" chip) linking to About page

**Animations:**
- Hero: photo scales in → name fades up → tagline starts typing → buttons stagger in
- Stats: counter animation triggered on scroll-into-view
- Project cards: stagger reveal from bottom, tilt + glow border on hover
- About/Skills: slide in from left/right respectively
- Page entry: fade-in from opacity 0

---

### Page 2: About

**Purpose:** Full story for those who want depth. Education, experience, leadership, resume.

**Sections in order:**

1. **Bio**
   - Photo (rectangular, rounded corners, 120x140px) + bio text side-by-side
   - Bio: 2 paragraphs covering background, passion, approach
   - Role badges below: "AI/ML Engineer", "Full-Stack Dev", "Team Leader"

2. **Education**
   - Single card: B.Tech AI & Data Science, CSMSS CSCOE, Nov 2022 — Jun 2026, CGPA 7.0
   - College name + location on left, dates + CGPA on right

3. **Experience Timeline**
   - Vertical timeline with gradient line (primary → secondary)
   - Dot markers on timeline (colored per role)
   - **Biopan Scientific** (Oct 2025 — Present): green "Current" badge, 3 bullet points
   - **Intersense Technologies** (Apr 2024 — May 2024): gray "Completed" badge, 3 bullet points

4. **Leadership**
   - Two cards side-by-side
   - VP AI & Data Science Students Association (May 2025 — May 2026)
   - Event Head Coordinator, InnoHack Robotics & AI Hackathon (Jun 2025)

5. **Resume**
   - Card with title + last updated date
   - Two buttons: "Preview" (outline, opens modal/inline viewer) + "Download" (gradient fill)

**Animations:**
- Photo: scale-in with subtle rotation
- Bio text: fade-up after photo
- Timeline: line draws downward, dots pop in sequentially, cards slide in from left
- Leadership cards: stagger reveal from bottom
- Resume card: gentle slide-up on scroll

---

### Page 3: Projects

**Purpose:** Complete project showcase with filtering. Demonstrates range and depth.

**Sections in order:**

1. **Featured Projects** (3 hackathon winners)
   - Label: "Featured" + `// hackathon winners`
   - 3 expanded horizontal cards stacked vertically
   - Each card: left panel (trophy badge + project logo/name + subtitle) + right panel (category, dates, description, metrics, tech chips, links)
   - Unique accent gradient per card:
     - **EDFS (SIH'24 Winner)** — orange/gold accent
     - **Face Liveness (RACKATHON Winner)** — pink/purple accent
     - **@scale AI Suite (@scale Winner)** — purple/cyan accent
   - Each card shows 2-3 key metrics (accuracy, latency, data scale) with bold numbers + monospace labels

2. **All Projects** (filterable grid)
   - Section divider: "All Projects" with horizontal line
   - Category filter chips: All, AI/ML, Computer Vision, LLM/RAG, IoT, HealthTech, Full-Stack
   - Active filter has gradient background, others are outline
   - 3-column grid of compact cards
   - Projects: MOSDAC-Bot, TerraByte, SLDTS, AyuUnity, CrowdShield, E-Wise (+ any future additions)
   - In-progress projects get a green "Active" dot badge
   - Each card: category badge, year/status, title, one-line description, tech chips

**Card hover behavior:** Subtle lift (translateY -4px) + border glow in theme accent color

**Animations:**
- Featured cards: stagger reveal on page load
- Filter switching: AnimatePresence — cards exit/enter with layout animation
- Standard cards: masonry-style cascade reveal
- Metric numbers: counter animation when card enters viewport

---

### Page 4: Achievements

**Purpose:** Trophy case. Establishes competitive credibility immediately.

**Sections in order:**

1. **Stats Summary Bar**
   - 4 cards in a row, each with unique accent color + subtle gradient background
   - Stats: 5 (hackathons.won / orange), 15+ (finalist.finishes / purple), 1 (international / cyan), 7 (certifications / pink)
   - Animated counters on page load

2. **Hackathon Wins — Trophy Wall**
   - Label: "Hackathon Wins" + `// the big ones`
   - 2-column grid, 5 cards total (last card spans full width)
   - Each card: trophy emoji, hackathon name, award text, description, role + year
   - Unique accent border + radial glow per card:
     - SIH 2024 (orange)
     - @scale AI 2026 (purple)
     - RACKATHON 2025 (pink)
     - ORCHATHON 2K25 (cyan)
     - HackCelestial 2.0 (green, full-width)

3. **Other Honors**
   - Compact list rows
   - SIH 2025 Grand Finale (Top 5) — VETRA
   - Avishkar 2024 Silver (Zonal Level)
   - Pune Agri International Finalist
   - Expandable "show more" for remaining 10+ finalist appearances

4. **Certifications**
   - 3-column grid, 7 cards
   - Each card: icon, cert name, issuer
   - Certs included:
     - NVIDIA Fundamentals of Deep Learning
     - NPTEL Deep Learning
     - NPTEL ML (IIT Kharagpur)
     - GCP Core Infrastructure (Coursera)
     - Coursera GenAI Specialization
     - Cisco Introduction to Cybersecurity
     - Postman API Fundamentals Student Expert

**Animations:**
- Stats: counter animation on page load
- Trophy cards: stagger reveal with scale-in + subtle glow pulse
- Honor rows: slide-in from left, staggered
- Cert cards: fade-up in grid pattern

---

### Page 5: Contact

**Purpose:** Clear path to reach out. Shows availability and active coding presence.

**Sections in order:**

1. **Two-Column Layout**
   - Left (wider): Contact form
   - Right: Quick Reach + Social Profiles + Open To

2. **Contact Form**
   - Fields: name, email, subject, message
   - Monospace labels above each field
   - Gradient "Send Message" submit button
   - Form handling via server action or email API (Resend/EmailJS)

3. **Quick Reach**
   - Icon cards for: email (rupeshbharambe2004@gmail.com), phone (+91 9421756386), location (Chh. Sambhajinagar, Maharashtra)

4. **Social Profiles**
   - GitHub (white/black), LinkedIn (blue), Discord (purple), Instagram (gradient)
   - Each: branded icon box + platform name + username + arrow link

5. **"Currently Open To"**
   - Gradient-bordered card with colored badges:
   - Full-time Roles (green), Hackathons (purple), Research (cyan), Open Source (orange)

6. **GitHub Activity**
   - Contribution graph fetched from GitHub API, themed in primary accent color
   - Shows repo count + contribution legend
   - Wave animation: squares fade in one-by-one

7. **Footer** (shared component, detailed above)

**Animations:**
- Form fields: stagger reveal top to bottom
- Right column cards: slide in from right, staggered
- Social links hover: slight lift + glow in platform brand color
- GitHub graph: squares fade in with wave pattern
- Submit button: magnetic hover effect

---

## Animation Strategy (Framer Motion)

**Level: Polished** — noticeable but not overwhelming.

### Global Animations
- **Page transitions:** Shared layout animation between pages (fade + slight slide)
- **Scroll reveals:** `whileInView` with `once: true` on all sections (fade up, 30px translateY)
- **Stagger children:** 50-80ms delay between sibling elements

### Per-Component
| Component | Animation |
|-----------|-----------|
| Hero photo | scale: 0.8 → 1, opacity: 0 → 1 |
| Typing tagline | Character-by-character reveal with blinking cursor |
| Stat counters | Animate from 0 → value over 1.5s (ease-out) |
| Project cards | translateY: 20px → 0, opacity: 0 → 1, stagger 80ms |
| Card hover | translateY: -4px, border color → accent, boxShadow glow |
| Timeline | Line height animates from 0 → 100%, dots scale-in |
| Filter chips | layoutId animation for active indicator |
| GitHub graph | Squares fade in with 10ms wave delay |
| Magnetic button | Transform follows cursor position within button bounds |
| Page enter | opacity: 0 → 1, y: 10 → 0, duration 0.3s |

### Performance Considerations
- All animations use `transform` and `opacity` only (GPU-accelerated)
- `will-change` applied sparingly
- `once: true` on scroll animations to avoid re-triggering
- Respect `prefers-reduced-motion` — disable animations for accessibility

---

## Data Architecture

All portfolio data stored in TypeScript files under `data/` at project root:

```
data/
├── profile.ts        # Name, bio, taglines, social links, contact info
├── experience.ts     # Internships with bullet points
├── education.ts      # B.Tech details
├── leadership.ts     # VP, Event Head roles
├── projects.ts       # All projects with featured flag, category, tech, metrics, links
├── hackathons.ts     # All hackathon entries with award level
├── certifications.ts # 7 high-signal certifications
├── skills.ts         # 6 categories × 8 skills each
├── themes.ts         # 10 theme definitions
└── navigation.ts     # Page routes and labels
```

### Project Data Shape
```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "ai-ml" | "cv" | "llm-rag" | "iot" | "healthtech" | "fullstack";
  featured: boolean;
  hackathonWin?: string; // e.g., "SIH'24 Winner"
  status: "completed" | "active";
  dateRange: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  links: { github?: string; demo?: string };
}
```

---

## SEO Strategy

- **Metadata:** Per-page `generateMetadata()` with title, description, OpenGraph images
- **Dynamic OG images:** Generated via `@vercel/og` (Satori) — name + title + key stat per page
- **Structured data:** JSON-LD for Person schema (name, role, social links)
- **Sitemap:** Auto-generated via Next.js sitemap config
- **Performance:** Static generation for all pages (no dynamic data), optimized images via `next/image`

---

## Responsive Design

| Breakpoint | Layout Changes |
|------------|----------------|
| Desktop (1024px+) | Full layouts as designed |
| Tablet (768-1023px) | 2-column grids → 2 columns, featured cards stack vertically |
| Mobile (< 768px) | Single column, hamburger nav, stacked cards, smaller type scale |

Key mobile adaptations:
- Navbar → hamburger with slide-out drawer
- Stats bar → 2×2 grid instead of 4-column
- Project featured cards → stacked vertically (no horizontal layout)
- Contact → single column (form above, info below)
- GitHub graph → horizontally scrollable

---

## File Structure

```
rupesh-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, theme provider, navbar, footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── projects/page.tsx   # Projects page
│   ├── achievements/page.tsx # Achievements page
│   ├── contact/page.tsx    # Contact page
│   ├── globals.css         # Tailwind + CSS variables for themes
│   └── not-found.tsx       # 404 page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── page-header.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── stats-bar.tsx
│   │   ├── featured-projects.tsx
│   │   └── about-skills-teaser.tsx
│   ├── about/
│   │   ├── bio.tsx
│   │   ├── education.tsx
│   │   ├── experience-timeline.tsx
│   │   ├── leadership.tsx
│   │   └── resume-section.tsx
│   ├── projects/
│   │   ├── featured-project-card.tsx
│   │   ├── project-card.tsx
│   │   └── project-filters.tsx
│   ├── achievements/
│   │   ├── stats-summary.tsx
│   │   ├── trophy-wall.tsx
│   │   ├── other-honors.tsx
│   │   └── certifications.tsx
│   ├── contact/
│   │   ├── contact-form.tsx
│   │   ├── quick-reach.tsx
│   │   ├── social-profiles.tsx
│   │   ├── open-to.tsx
│   │   └── github-activity.tsx
│   └── shared/
│       ├── animated-counter.tsx
│       ├── typing-text.tsx
│       ├── scroll-reveal.tsx
│       ├── magnetic-button.tsx
│       └── theme-switcher.tsx
├── data/
│   ├── profile.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── leadership.ts
│   ├── projects.ts
│   ├── hackathons.ts
│   ├── certifications.ts
│   ├── skills.ts
│   ├── themes.ts
│   └── navigation.ts
├── hooks/
│   ├── use-theme.ts
│   └── use-scroll-animation.ts
├── lib/
│   ├── utils.ts            # cn() helper
│   └── github.ts           # GitHub API fetcher
├── public/
│   ├── resume.pdf
│   └── images/
│       └── profile.jpg
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Dependencies

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest",
    "tailwind-merge": "latest",
    "clsx": "latest",
    "class-variance-authority": "latest",
    "lucide-react": "latest",
    "@radix-ui/react-dropdown-menu": "latest",
    "@radix-ui/react-dialog": "latest",
    "@radix-ui/react-tooltip": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "@types/react": "latest",
    "@types/node": "latest",
    "tailwindcss": "latest",
    "autoprefixer": "latest",
    "postcss": "latest"
  }
}
```

---

## Out of Scope

- Blog/journal functionality
- CMS integration
- Authentication
- Database
- Custom cursor trails, particle backgrounds, film grain effects
- Testimonials section (no data available yet)
- Internationalization

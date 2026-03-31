# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 5-page portfolio website for Rupesh Bharambe with Next.js 16, Tailwind CSS, shadcn/ui, Framer Motion, and a 10-theme system.

**Architecture:** Next.js App Router with static pages. All data lives in TypeScript files under `data/`. Theme system via CSS variables + React context. Framer Motion for scroll reveals, counters, typing effects, and page transitions. Deployed on Vercel.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide Icons, Vercel

**Spec:** `docs/superpowers/specs/2026-03-31-portfolio-website-design.md`

---

## File Map

```
app/
├── layout.tsx              # Root layout: ThemeProvider, Navbar, Footer
├── page.tsx                # Home page
├── globals.css             # Tailwind + CSS variables for all 10 themes
├── not-found.tsx           # 404 page
├── about/page.tsx
├── projects/page.tsx
├── achievements/page.tsx
└── contact/page.tsx

components/
├── ui/                     # shadcn/ui (installed via CLI)
├── layout/
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── page-header.tsx
├── shared/
│   ├── scroll-reveal.tsx
│   ├── animated-counter.tsx
│   ├── typing-text.tsx
│   └── magnetic-button.tsx
├── home/
│   ├── hero.tsx
│   ├── stats-bar.tsx
│   ├── featured-projects-home.tsx
│   └── about-skills-teaser.tsx
├── about/
│   ├── bio.tsx
│   ├── education.tsx
│   ├── experience-timeline.tsx
│   ├── leadership.tsx
│   └── resume-section.tsx
├── projects/
│   ├── featured-project-card.tsx
│   ├── project-card.tsx
│   └── project-filters.tsx
├── achievements/
│   ├── stats-summary.tsx
│   ├── trophy-wall.tsx
│   ├── other-honors.tsx
│   └── certifications-grid.tsx
└── contact/
    ├── contact-form.tsx
    ├── quick-reach.tsx
    ├── social-profiles.tsx
    ├── open-to.tsx
    └── github-activity.tsx

data/
├── profile.ts
├── experience.ts
├── education.ts
├── leadership.ts
├── projects.ts
├── hackathons.ts
├── certifications.ts
├── skills.ts
├── themes.ts
└── navigation.ts

hooks/
├── use-theme.ts
└── use-animated-counter.ts

lib/
├── utils.ts
└── github.ts

public/
├── resume.pdf
└── images/
    └── profile.jpg
```

---

## Task 1: Initialize Next.js + Tailwind + shadcn/ui + Framer Motion

**Files:**
- Create: entire project scaffold
- Create: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`
- Create: `lib/utils.ts`

- [ ] **Step 1: Create Next.js project**

```bash
cd D:/Projects/rupesh-portfolio
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Select defaults when prompted. This creates the App Router project with Tailwind.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```

When prompted:
- Style: Default
- Base color: Zinc
- CSS variables: Yes

- [ ] **Step 4: Install shadcn/ui components we need**

```bash
npx shadcn@latest add button dropdown-menu dialog tooltip badge separator
```

- [ ] **Step 5: Verify lib/utils.ts exists**

shadcn/ui init creates `lib/utils.ts` with `cn()`. Verify it contains:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 6: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts at http://localhost:3000, default Next.js page renders.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js with Tailwind, shadcn/ui, and Framer Motion"
```

---

## Task 2: Theme System

**Files:**
- Create: `data/themes.ts`
- Create: `hooks/use-theme.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create theme data**

Create `data/themes.ts`:

```typescript
export interface Theme {
  id: string;
  name: string;
  description: string;
  mode: "dark" | "light";
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardBorder: string;
    primary: string;
    secondary: string;
    muted: string;
    mutedForeground: string;
  };
}

export const themes: Theme[] = [
  {
    id: "obsidian",
    name: "Obsidian",
    description: "Deep dark elegance",
    mode: "dark",
    colors: {
      background: "10 10 15",
      foreground: "250 250 250",
      card: "17 17 24",
      cardBorder: "30 30 46",
      primary: "139 92 246",
      secondary: "6 182 212",
      muted: "39 39 42",
      mutedForeground: "161 161 170",
    },
  },
  {
    id: "pearl",
    name: "Pearl",
    description: "Clean light mode",
    mode: "light",
    colors: {
      background: "250 250 250",
      foreground: "10 10 15",
      card: "255 255 255",
      cardBorder: "228 228 231",
      primary: "124 58 237",
      secondary: "8 145 178",
      muted: "244 244 245",
      mutedForeground: "113 113 122",
    },
  },
  {
    id: "neon",
    name: "Neon",
    description: "Vibrant cyberpunk",
    mode: "dark",
    colors: {
      background: "15 10 26",
      foreground: "250 250 250",
      card: "20 15 35",
      cardBorder: "40 30 60",
      primary: "236 72 153",
      secondary: "16 185 129",
      muted: "39 39 42",
      mutedForeground: "161 161 170",
    },
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Northern lights",
    mode: "dark",
    colors: {
      background: "10 22 40",
      foreground: "250 250 250",
      card: "15 28 50",
      cardBorder: "25 45 75",
      primary: "34 211 238",
      secondary: "168 85 247",
      muted: "39 39 42",
      mutedForeground: "161 161 170",
    },
  },
  {
    id: "oceanic",
    name: "Oceanic",
    description: "Deep sea blues",
    mode: "dark",
    colors: {
      background: "12 20 38",
      foreground: "250 250 250",
      card: "16 26 48",
      cardBorder: "25 40 70",
      primary: "59 130 246",
      secondary: "6 182 212",
      muted: "39 39 42",
      mutedForeground: "161 161 170",
    },
  },
  {
    id: "ember",
    name: "Ember",
    description: "Warm fire tones",
    mode: "dark",
    colors: {
      background: "26 10 10",
      foreground: "250 250 250",
      card: "35 17 17",
      cardBorder: "55 30 30",
      primary: "249 115 22",
      secondary: "234 179 8",
      muted: "39 39 42",
      mutedForeground: "161 161 170",
    },
  },
  {
    id: "forest",
    name: "Forest",
    description: "Natural greens",
    mode: "dark",
    colors: {
      background: "10 26 15",
      foreground: "250 250 250",
      card: "15 35 20",
      cardBorder: "25 55 35",
      primary: "34 197 94",
      secondary: "132 204 22",
      muted: "39 39 42",
      mutedForeground: "161 161 170",
    },
  },
  {
    id: "sakura",
    name: "Sakura",
    description: "Cherry blossom",
    mode: "dark",
    colors: {
      background: "26 15 20",
      foreground: "250 250 250",
      card: "35 20 28",
      cardBorder: "55 35 45",
      primary: "244 114 182",
      secondary: "251 113 133",
      muted: "39 39 42",
      mutedForeground: "161 161 170",
    },
  },
  {
    id: "mono",
    name: "Mono",
    description: "Minimal grayscale",
    mode: "dark",
    colors: {
      background: "10 10 10",
      foreground: "250 250 250",
      card: "20 20 20",
      cardBorder: "38 38 38",
      primary: "161 161 170",
      secondary: "250 250 250",
      muted: "39 39 42",
      mutedForeground: "113 113 122",
    },
  },
  {
    id: "solarized",
    name: "Solarized",
    description: "Classic developer",
    mode: "dark",
    colors: {
      background: "0 43 54",
      foreground: "238 232 213",
      card: "7 54 66",
      cardBorder: "0 63 78",
      primary: "38 139 210",
      secondary: "42 161 152",
      muted: "0 63 78",
      mutedForeground: "147 161 161",
    },
  },
];

export const defaultTheme = themes[0]; // Obsidian
```

- [ ] **Step 2: Create theme hook**

Create `hooks/use-theme.ts`:

```typescript
"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { themes, defaultTheme, type Theme } from "@/data/themes";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setTheme: () => {},
  themes,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeProvider() {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedId = localStorage.getItem("portfolio-theme");
    if (savedId) {
      const found = themes.find((t) => t.id === savedId);
      if (found) setThemeState(found);
    }
  }, []);

  const setTheme = useCallback((themeId: string) => {
    const found = themes.find((t) => t.id === themeId);
    if (found) {
      setThemeState(found);
      localStorage.setItem("portfolio-theme", themeId);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const c = theme.colors;
    root.style.setProperty("--background", c.background);
    root.style.setProperty("--foreground", c.foreground);
    root.style.setProperty("--card", c.card);
    root.style.setProperty("--card-border", c.cardBorder);
    root.style.setProperty("--primary", c.primary);
    root.style.setProperty("--secondary", c.secondary);
    root.style.setProperty("--muted", c.muted);
    root.style.setProperty("--muted-foreground", c.mutedForeground);
    root.classList.toggle("dark", theme.mode === "dark");
    root.classList.toggle("light", theme.mode === "light");
  }, [theme, mounted]);

  return { theme, setTheme, themes, mounted };
}
```

- [ ] **Step 3: Write globals.css with CSS variable system**

Replace `app/globals.css` with:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: 10 10 15;
  --foreground: 250 250 250;
  --card: 17 17 24;
  --card-border: 30 30 46;
  --primary: 139 92 246;
  --secondary: 6 182 212;
  --muted: 39 39 42;
  --muted-foreground: 161 161 170;
}

body {
  background-color: rgb(var(--background));
  color: rgb(var(--foreground));
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Utility classes for theme colors */
.bg-theme-bg { background-color: rgb(var(--background)); }
.bg-theme-card { background-color: rgb(var(--card)); }
.border-theme { border-color: rgb(var(--card-border)); }
.text-theme-primary { color: rgb(var(--primary)); }
.text-theme-secondary { color: rgb(var(--secondary)); }
.text-theme-muted { color: rgb(var(--muted-foreground)); }

.gradient-primary {
  background: linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)));
}

.gradient-text {
  background: linear-gradient(135deg, rgb(var(--primary)), rgb(var(--secondary)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Scrollbar styling for dark themes */
.dark ::-webkit-scrollbar { width: 8px; }
.dark ::-webkit-scrollbar-track { background: rgb(var(--background)); }
.dark ::-webkit-scrollbar-thumb {
  background: rgb(var(--muted));
  border-radius: 4px;
}
```

- [ ] **Step 4: Create ThemeProvider wrapper and update layout.tsx**

Replace `app/layout.tsx` with:

```typescript
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupesh Bharambe — AI/ML Engineer & 5x Hackathon Winner",
  description:
    "Portfolio of Rupesh Bharambe — AI/ML Engineer, 5x National Hackathon Winner, SIH'24 Grand Finale Winner. Building intelligent systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

Create `components/layout/theme-provider.tsx`:

```typescript
"use client";

import { ThemeContext, useThemeProvider } from "@/hooks/use-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = useThemeProvider();

  return (
    <ThemeContext.Provider value={{ theme: value.theme, setTheme: value.setTheme, themes: value.themes }}>
      <div className={value.mounted ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 0.2s" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
```

- [ ] **Step 5: Add a temp page to verify themes work**

Replace `app/page.tsx` with:

```typescript
"use client";

import { useTheme } from "@/hooks/use-theme";

export default function Home() {
  const { theme, setTheme, themes } = useTheme();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-black gradient-text">Rupesh Bharambe</h1>
      <p className="text-theme-muted">Current theme: {theme.name}</p>
      <div className="flex flex-wrap gap-2">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className="rounded-lg border border-theme bg-theme-card px-3 py-1.5 text-sm text-theme-primary hover:opacity-80 transition-opacity"
          >
            {t.name}
          </button>
        ))}
      </div>
    </main>
  );
}
```

- [ ] **Step 6: Verify themes switch correctly**

```bash
npm run dev
```

Open http://localhost:3000. Click each theme button. Verify:
- Background color changes
- Text "Rupesh Bharambe" gradient matches theme primary → secondary
- Theme persists after page refresh (localStorage)

- [ ] **Step 7: Commit**

```bash
git add data/themes.ts hooks/use-theme.ts app/globals.css app/layout.tsx app/page.tsx components/layout/theme-provider.tsx
git commit -m "feat: add 10-theme system with CSS variables and localStorage persistence"
```

---

## Task 3: All Data Files

**Files:**
- Create: `data/profile.ts`, `data/experience.ts`, `data/education.ts`, `data/leadership.ts`, `data/projects.ts`, `data/hackathons.ts`, `data/certifications.ts`, `data/skills.ts`, `data/navigation.ts`

- [ ] **Step 1: Create profile data**

Create `data/profile.ts`:

```typescript
export const profile = {
  name: "Rupesh Bharambe",
  title: "AI/ML Engineer",
  subtitle: "AI/ML Engineer · 5x Hackathon Winner · SIH'24 Grand Finale Winner",
  taglines: [
    "intelligent systems",
    "AI solutions",
    "real-world impact",
    "production software",
  ],
  bio: [
    "I'm a final-year B.Tech student in AI & Data Science, passionate about building intelligent systems that solve real-world problems. From winning Smart India Hackathon 2024 to developing ISRO's satellite data assistant, I thrive at the intersection of research and production engineering.",
    "When I'm not building AI solutions, I lead the AI & Data Science Students Association as Vice President, mentor junior developers, and coordinate hackathon events. I believe in learning by building — every project is a chance to push boundaries.",
  ],
  roles: ["AI/ML Engineer", "Full-Stack Dev", "Team Leader"],
  email: "rupeshbharambe2004@gmail.com",
  phone: "+91 9421756386",
  location: "Chh. Sambhajinagar, Maharashtra",
  social: {
    github: "https://github.com/rupeshbharambe24",
    linkedin: "https://www.linkedin.com/in/rupesh-bharambe-056a12257/",
    discord: "https://discord.com/users/1284519829427978240",
    instagram: "https://instagram.com/rupesh__rt4",
  },
  openTo: [
    { label: "Full-time Roles", color: "green" },
    { label: "Hackathons", color: "purple" },
    { label: "Research", color: "cyan" },
    { label: "Open Source", color: "orange" },
  ],
};
```

- [ ] **Step 2: Create experience data**

Create `data/experience.ts`:

```typescript
export interface Experience {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  status: "current" | "completed";
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Biopan Scientific Pvt. Ltd.",
    role: "Software Engineer Intern",
    location: "Chh. Sambhajinagar",
    dateRange: "Oct 2025 — Present",
    status: "current",
    bullets: [
      "Built and maintained regulated scientific-instrument desktop software (LC, bioreactor, plate reader, RT-qPCR), owning UI/UX, MVVM architecture, backend logic, data processing, and reporting end-to-end.",
      "Implemented data integrity + compliance-ready features aligned with 21 CFR Part 11 / IEC / EU Annex 11, including role-based access control, audit trails, electronic records/signature support, and tamper-evident logging.",
      "Integrating AI/ML and analytics into applications for automated insights (quality checks/anomaly flags/trend analysis), and produced technical documentation while supporting demos and business-development deliverables.",
    ],
  },
  {
    company: "Intersense Technologies LLP",
    role: "Software Developer Intern",
    location: "Chh. Sambhajinagar",
    dateRange: "Apr 2024 — May 2024",
    status: "completed",
    bullets: [
      "Built a Raspberry Pi–based PyQt HMI/edge application for shop-floor gauging: parsed serial gauge measurements, validated against tolerance limits, and enabled configurable measurement rules for multiple part dimensions.",
      "Implemented closed-loop CNC compensation by reading/writing tool offsets to HAAS CNC via Telnet, automating correction actions when measurements drifted and improving in-process quality control workflows.",
      "Designed persistent traceability logging using SQLite to store measurement and correction history, with operator configuration screens for gauge/CNC endpoints and system I/O status (GPIO alerts).",
    ],
  },
];
```

- [ ] **Step 3: Create education data**

Create `data/education.ts`:

```typescript
export const education = {
  degree: "B.Tech — Artificial Intelligence & Data Science",
  institution: "CSMSS Chh. Shahu College of Engineering",
  location: "Chh. Sambhajinagar, Maharashtra",
  dateRange: "Nov 2022 — Jun 2026",
  cgpa: "7.0",
};
```

- [ ] **Step 4: Create leadership data**

Create `data/leadership.ts`:

```typescript
export interface LeadershipRole {
  title: string;
  organization: string;
  dateRange: string;
}

export const leadershipRoles: LeadershipRole[] = [
  {
    title: "Vice President",
    organization: "AI & Data Science Students Association (AI&DSSA)",
    dateRange: "May 2025 — May 2026",
  },
  {
    title: "Event Head Coordinator",
    organization: "InnoHack Robotics & AI Hackathon",
    dateRange: "Jun 2025",
  },
];
```

- [ ] **Step 5: Create projects data**

Create `data/projects.ts`:

```typescript
export type ProjectCategory = "ai-ml" | "cv" | "llm-rag" | "iot" | "healthtech" | "fullstack";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  hackathonWin?: string;
  status: "completed" | "active";
  dateRange: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  links: { github?: string; demo?: string };
}

export const categoryLabels: Record<ProjectCategory, string> = {
  "ai-ml": "AI/ML",
  cv: "CV/Security",
  "llm-rag": "LLM/RAG",
  iot: "AgriTech/IoT",
  healthtech: "HealthTech",
  fullstack: "Full-Stack",
};

export const categoryColors: Record<ProjectCategory, string> = {
  "ai-ml": "139 92 246",
  cv: "236 72 153",
  "llm-rag": "34 211 238",
  iot: "34 197 94",
  healthtech: "236 72 153",
  fullstack: "249 115 22",
};

export const projects: Project[] = [
  {
    slug: "edfs",
    title: "Real-Time Electricity Demand Forecasting",
    description:
      "Multi-horizon forecasting for Delhi power grid using 12+ years historical data enriched with real-time weather. Deployed on GCP with auto-training pipeline.",
    category: "ai-ml",
    featured: true,
    hackathonWin: "SIH'24 Winner",
    status: "completed",
    dateRange: "Sep 2024 — Dec 2024",
    metrics: [
      { label: "accuracy", value: "98%+" },
      { label: "granularity", value: "5min" },
      { label: "data span", value: "12yr" },
    ],
    techStack: ["SARIMAX", "Transformers", "GCP", "Docker", "Firebase", "React"],
    links: { github: "https://github.com/rupeshbharambe24/Electricity-Demand-Forecasting" },
  },
  {
    slug: "face-liveness",
    title: "Face Liveness Detection System",
    description:
      "Next-gen liveness detection combining mathematical formulae + custom-trained neural network. Built custom dataset covering diverse age groups. Optimized for low-resource devices.",
    category: "cv",
    featured: true,
    hackathonWin: "RACKATHON Winner",
    status: "completed",
    dateRange: "Sep 2024 — Mar 2025",
    metrics: [
      { label: "accuracy", value: "99%" },
      { label: "latency", value: "<200ms" },
      { label: "landmarks", value: "477" },
    ],
    techStack: ["TensorFlow", "OpenCV", "MediaPipe", "Flask", "Docker"],
    links: { github: "#" },
  },
  {
    slug: "scale-ai",
    title: "Enterprise AI/ML Solution Suite",
    description:
      "End-to-end AI/ML solutions on real industry data with limited availability and high-performance constraints. Evaluated by Findability Sciences / NSBT industry experts.",
    category: "ai-ml",
    featured: true,
    hackathonWin: "@scale Winner",
    status: "completed",
    dateRange: "2026",
    metrics: [],
    techStack: ["Python", "ML", "EDA", "Feature Engineering", "Model Validation"],
    links: { github: "https://github.com/rupeshbharambe24/Scale_AI_Webapp" },
  },
  {
    slug: "mosdac-bot",
    title: "MOSDAC-Bot-ISRO",
    description:
      "Knowledge Graph + LLM conversational assistant for querying ISRO satellite data using Neo4j, FAISS, and RAG pipeline.",
    category: "llm-rag",
    featured: false,
    status: "active",
    dateRange: "Jul 2025 — Present",
    metrics: [
      { label: "data sources", value: "50+" },
      { label: "response", value: "<2s" },
      { label: "graph nodes", value: "100K+" },
    ],
    techStack: ["Neo4j", "FAISS", "HuggingFace", "React", "Docker"],
    links: { github: "https://github.com/rupeshbharambe24/MOSDAC-Bot-ISRO" },
  },
  {
    slug: "terrabyte",
    title: "TerraByte",
    description:
      "AI + IoT unified agriculture platform for crop planning, smart irrigation, and disease detection with 94% accuracy.",
    category: "iot",
    featured: false,
    status: "active",
    dateRange: "May 2025 — Present",
    metrics: [
      { label: "sensor types", value: "8" },
      { label: "disease classes", value: "38" },
      { label: "accuracy", value: "94%" },
    ],
    techStack: ["PyTorch", "Raspberry Pi", "React", "Flask", "Firebase"],
    links: { github: "#" },
  },
  {
    slug: "sldts",
    title: "SLDTS — Sign Language Translation",
    description:
      "Real-time ISL sign → text/speech and speech → sign translation using MediaPipe + LSTM hybrid. Serves 1.8M+ deaf individuals.",
    category: "cv",
    featured: false,
    status: "active",
    dateRange: "Feb 2025 — Present",
    metrics: [
      { label: "accuracy", value: "88%" },
      { label: "signs", value: "35" },
      { label: "latency", value: "<100ms" },
    ],
    techStack: ["MediaPipe", "LSTM", "Flask", "JavaScript"],
    links: { github: "https://github.com/rupeshbharambe24/SLDTS__Sign-Language-Detection-and-Translation" },
  },
  {
    slug: "ayuunity",
    title: "AyuUnity",
    description:
      "AI-driven unified digital health ecosystem with voice prescriptions, diagnostics, and ABDM/eSanjeevani integration.",
    category: "healthtech",
    featured: false,
    status: "completed",
    dateRange: "Apr 2025",
    metrics: [
      { label: "dashboards", value: "6" },
      { label: "AI models", value: "4" },
      { label: "integrations", value: "5+" },
    ],
    techStack: ["React", "Flask", "TensorFlow", "PyTorch", "PostgreSQL"],
    links: { github: "#" },
  },
  {
    slug: "crowdshield",
    title: "CrowdShield",
    description:
      "Real-time AI crowd monitoring and disaster management system using YOLOv8, WebSocket, MQTT, and geographic routing.",
    category: "cv",
    featured: false,
    status: "completed",
    dateRange: "Aug 2025",
    metrics: [],
    techStack: ["YOLOv8", "WebSocket", "MQTT", "FastAPI", "React"],
    links: { github: "https://github.com/rupeshbharambe24/CrowdShield--AI-Based-Crowd-and-Disaster-Management" },
  },
  {
    slug: "ewise",
    title: "E-Wise",
    description:
      "YOLO-based e-waste detection with multilingual chatbot and TTS recommendations. 25 detection classes, 10+ languages.",
    category: "cv",
    featured: false,
    status: "completed",
    dateRange: "Apr 2025",
    metrics: [
      { label: "classes", value: "25" },
      { label: "languages", value: "10+" },
      { label: "mAP", value: "92%" },
    ],
    techStack: ["YOLOv8", "Gemini API", "React", "Flask"],
    links: { github: "#" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const standardProjects = projects.filter((p) => !p.featured);
```

- [ ] **Step 6: Create hackathons data**

Create `data/hackathons.ts`:

```typescript
export interface Hackathon {
  name: string;
  year: number;
  award: string;
  description: string;
  role: string;
  color: string;
  isWin: boolean;
}

export const hackathonWins: Hackathon[] = [
  {
    name: "Smart India Hackathon 2024",
    year: 2024,
    award: "Grand Finale Winner",
    description: "Led team of 6 to build EDFS — AI electricity demand forecasting for Delhi power grid. National-level competition.",
    role: "Team Lead",
    color: "249 115 22",
    isWin: true,
  },
  {
    name: "@scale AI Hackathon 2026",
    year: 2026,
    award: "Winner — Marathwada",
    description: "Enterprise AI/ML on real industry data. Evaluated by Findability Sciences / NSBT experts.",
    role: "Team Lead",
    color: "139 92 246",
    isWin: true,
  },
  {
    name: "RACKATHON 2025",
    year: 2025,
    award: "Winner — GH Raisoni University",
    description: "Face liveness detection with custom neural architecture + mathematical formulae.",
    role: "Team Lead",
    color: "236 72 153",
    isWin: true,
  },
  {
    name: "ORCHATHON 2K25",
    year: 2025,
    award: "3rd Prize — NK Orchid College",
    description: "InnoMediX — AI telemedicine platform for healthcare accessibility.",
    role: "Team Lead",
    color: "34 211 238",
    isWin: true,
  },
  {
    name: "HackCelestial 2.0",
    year: 2025,
    award: "3rd Runner Up (Top 5) — Pillai College of Engg, Mumbai",
    description: "Satellite data platform built during a competitive national hackathon.",
    role: "ML Engineer",
    color: "34 197 94",
    isWin: true,
  },
];

export const otherHonors: { name: string; detail: string; year: number; icon: string }[] = [
  { name: "SIH 2025 Grand Finale", detail: "Top 5 — VETRA: Animal classification (Ministry of Fisheries)", year: 2025, icon: "medal" },
  { name: "Avishkar 2024", detail: "Silver (2nd Prize) — Zonal Level Research Convention", year: 2024, icon: "medal" },
  { name: "Pune Agri International", detail: "International Finalist — AgriTech AI Platform", year: 2024, icon: "globe" },
];
```

- [ ] **Step 7: Create certifications data**

Create `data/certifications.ts`:

```typescript
export interface Certification {
  name: string;
  issuer: string;
  icon: string;
}

export const certifications: Certification[] = [
  { name: "Fundamentals of Deep Learning", issuer: "NVIDIA", icon: "gpu" },
  { name: "Deep Learning", issuer: "IIT / NPTEL", icon: "brain" },
  { name: "Machine Learning (IIT-KHG)", issuer: "IIT Kharagpur / NPTEL", icon: "brain" },
  { name: "GCP Core Infrastructure", issuer: "Google / Coursera", icon: "cloud" },
  { name: "GenAI Specialization", issuer: "Coursera", icon: "sparkles" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", icon: "shield" },
  { name: "API Fundamentals Student Expert", issuer: "Postman", icon: "send" },
];
```

- [ ] **Step 8: Create skills data**

Create `data/skills.ts`:

```typescript
export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: "brain",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face", "OpenCV", "YOLO", "LangChain"],
  },
  {
    name: "Data Science",
    icon: "bar-chart",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "SQL", "Spark", "Jupyter"],
  },
  {
    name: "Backend Development",
    icon: "server",
    skills: ["Python", "FastAPI", "Flask", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Frontend Development",
    icon: "layout",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS", "Redux", "Zustand"],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    name: "Tools & Others",
    icon: "wrench",
    skills: ["Git", "VS Code", "Jupyter", "Postman", "Figma", "Arduino", "Raspberry Pi", "Agile/Scrum"],
  },
];
```

- [ ] **Step 9: Create navigation data**

Create `data/navigation.ts`:

```typescript
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];
```

- [ ] **Step 10: Verify all imports work**

```bash
npx tsc --noEmit
```

Expected: No errors. All data files export correctly typed objects.

- [ ] **Step 11: Commit**

```bash
git add data/
git commit -m "feat: add all portfolio data files (profile, projects, hackathons, skills, etc.)"
```

---

## Task 4: Shared Animation Components

**Files:**
- Create: `components/shared/scroll-reveal.tsx`
- Create: `components/shared/animated-counter.tsx`
- Create: `components/shared/typing-text.tsx`
- Create: `components/shared/magnetic-button.tsx`
- Create: `hooks/use-animated-counter.ts`

- [ ] **Step 1: Create scroll-reveal wrapper**

Create `components/shared/scroll-reveal.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const directionOffset = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
};

export function ScrollReveal({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create animated counter hook**

Create `hooks/use-animated-counter.ts`:

```typescript
"use client";

import { useEffect, useRef, useState } from "react";

export function useAnimatedCounter(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return { count, ref };
}
```

- [ ] **Step 3: Create animated counter component**

Create `components/shared/animated-counter.tsx`:

```typescript
"use client";

import { useAnimatedCounter } from "@/hooks/use-animated-counter";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", label, className }: AnimatedCounterProps) {
  const { count, ref } = useAnimatedCounter(value);

  return (
    <div ref={ref} className={className}>
      <div className="text-2xl font-extrabold text-theme-primary">
        {prefix}{count}{suffix}
      </div>
      <div className="font-mono text-xs text-theme-muted">{label}</div>
    </div>
  );
}
```

- [ ] **Step 4: Create typing text component**

Create `components/shared/typing-text.tsx`:

```typescript
"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypingText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className,
}: TypingTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {texts[textIndex].slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
```

- [ ] **Step 5: Create magnetic button component**

Create `components/shared/magnetic-button.tsx`:

```typescript
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
}

export function MagneticButton({ children, className, onClick, as = "button", href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Component
        style={{ x: springX, y: springY }}
        className={className}
        onClick={onClick}
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </Component>
    </motion.div>
  );
}
```

- [ ] **Step 6: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 7: Commit**

```bash
git add components/shared/ hooks/use-animated-counter.ts
git commit -m "feat: add shared animation components (scroll-reveal, counter, typing, magnetic)"
```

---

## Task 5: Navbar + Footer + Page Header

**Files:**
- Create: `components/layout/navbar.tsx`
- Create: `components/layout/footer.tsx`
- Create: `components/layout/page-header.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create Navbar**

Create `components/layout/navbar.tsx`:

```typescript
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, themes } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-theme bg-theme-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-sm font-black text-white">
            RB
          </div>
          <span className="font-bold text-[rgb(var(--foreground))]">Rupesh</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "font-medium text-[rgb(var(--foreground))]"
                  : "text-theme-muted hover:text-[rgb(var(--foreground))]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Switcher */}
          <div className="relative">
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              className="flex items-center gap-1 rounded-md border border-theme px-2 py-1 text-xs text-theme-primary transition-colors hover:bg-theme-card"
            >
              {theme.name} ▾
            </button>
            <AnimatePresence>
              {themeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-theme bg-theme-card p-2 shadow-xl"
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                        t.id === theme.id ? "bg-[rgb(var(--primary)/.1)] text-theme-primary" : "text-theme-muted hover:text-[rgb(var(--foreground))]"
                      }`}
                    >
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ background: `rgb(${t.colors.primary})` }}
                      />
                      {t.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[rgb(var(--foreground))]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-theme md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm ${
                    pathname === item.href
                      ? "bg-theme-card text-theme-primary"
                      : "text-theme-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-wrap gap-2 border-t border-theme pt-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setMobileOpen(false);
                    }}
                    className={`rounded-md px-2 py-1 text-xs ${
                      t.id === theme.id ? "bg-[rgb(var(--primary)/.15)] text-theme-primary" : "text-theme-muted"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Create Footer**

Create `components/layout/footer.tsx`:

```typescript
import Link from "next/link";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

const socialIcons = [
  { icon: Github, href: profile.social.github, label: "GitHub" },
  { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: profile.social.discord, label: "Discord" },
  { icon: Instagram, href: profile.social.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-theme">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-semibold text-[rgb(var(--foreground))]">Rupesh Bharambe</p>
            <p className="mt-1 text-sm text-theme-muted">
              AI/ML Engineer · Built with Next.js + Framer Motion
            </p>
          </div>
          <div className="flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-theme-muted transition-colors hover:text-[rgb(var(--foreground))]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-theme pt-6 md:flex-row">
          <p className="text-xs text-[rgb(var(--muted-foreground)/.5)]">
            © {new Date().getFullYear()} Rupesh Bharambe. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-theme-muted transition-colors hover:bg-theme-card hover:text-theme-primary"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Create Page Header**

Create `components/layout/page-header.tsx`:

```typescript
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface PageHeaderProps {
  comment: string;
  title: string;
  description?: string;
}

export function PageHeader({ comment, title, description }: PageHeaderProps) {
  return (
    <ScrollReveal className="mb-10">
      <p className="mb-1 font-mono text-sm text-theme-primary">// {comment}</p>
      <h1 className="text-3xl font-black tracking-tight text-[rgb(var(--foreground))] md:text-4xl">
        {title}
      </h1>
      <div className="mt-2 h-1 w-16 rounded-full gradient-primary" />
      {description && (
        <p className="mt-3 text-sm text-theme-muted">{description}</p>
      )}
    </ScrollReveal>
  );
}
```

- [ ] **Step 4: Update layout.tsx to include Navbar and Footer**

Replace `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupesh Bharambe — AI/ML Engineer & 5x Hackathon Winner",
  description:
    "Portfolio of Rupesh Bharambe — AI/ML Engineer, 5x National Hackathon Winner, SIH'24 Grand Finale Winner. Building intelligent systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify navbar and footer render**

```bash
npm run dev
```

Open http://localhost:3000. Verify:
- Navbar shows with RB logo, nav links, theme switcher
- Footer shows with name, links, social icons
- Theme switcher works
- Mobile hamburger works (resize browser)

- [ ] **Step 6: Commit**

```bash
git add components/layout/ app/layout.tsx
git commit -m "feat: add navbar with theme switcher, footer, and page header"
```

---

## Task 6: Home Page

**Files:**
- Create: `components/home/hero.tsx`
- Create: `components/home/stats-bar.tsx`
- Create: `components/home/featured-projects-home.tsx`
- Create: `components/home/about-skills-teaser.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Hero section**

Create `components/home/hero.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { TypingText } from "@/components/shared/typing-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pb-12 pt-16 text-center md:pt-24">
      {/* Photo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 h-28 w-28 overflow-hidden rounded-full border-[3px] border-theme gradient-primary p-[3px] md:h-32 md:w-32"
      >
        <div className="h-full w-full rounded-full bg-theme-card flex items-center justify-center text-4xl font-black text-theme-primary">
          R
        </div>
        {/* Replace with: <Image src="/images/profile.jpg" alt="Rupesh Bharambe" width={128} height={128} className="h-full w-full rounded-full object-cover" /> */}
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-black tracking-tight text-[rgb(var(--foreground))] md:text-5xl"
      >
        {profile.name}
      </motion.h1>

      {/* Typing tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 font-mono text-sm md:text-base"
      >
        <span className="text-theme-muted">I build </span>
        <TypingText texts={profile.taglines} className="text-theme-secondary" />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-2 text-xs text-theme-muted md:text-sm"
      >
        {profile.subtitle}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6 flex gap-3"
      >
        <MagneticButton as="a" href="/projects">
          <span className="inline-block rounded-lg gradient-primary px-5 py-2.5 text-sm font-semibold text-white">
            View Projects
          </span>
        </MagneticButton>
        <MagneticButton as="a" href="/resume.pdf">
          <span className="inline-block rounded-lg border border-theme px-5 py-2.5 text-sm font-semibold text-theme-muted hover:text-[rgb(var(--foreground))] transition-colors">
            Download Resume
          </span>
        </MagneticButton>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create Stats Bar**

Create `components/home/stats-bar.tsx`:

```typescript
"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const stats = [
  { value: 5, label: "hackathons.won" },
  { value: 15, suffix: "+", label: "finalist.finishes" },
  { value: 9, suffix: "+", label: "projects.shipped" },
  { value: 2, label: "internships" },
];

export function StatsBar() {
  return (
    <ScrollReveal className="mx-auto max-w-3xl px-6">
      <div className="flex items-center justify-between rounded-xl border border-theme bg-theme-card p-6">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-4">
            {i > 0 && <div className="h-10 w-px bg-[rgb(var(--card-border))]" />}
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="text-center"
            />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
```

- [ ] **Step 3: Create Featured Projects for Home**

Create `components/home/featured-projects-home.tsx`:

```typescript
"use client";

import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { categoryLabels, categoryColors } from "@/data/projects";
import { StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function FeaturedProjectsHome() {
  // Show first 3 featured projects as compact cards
  const topProjects = featuredProjects.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <ScrollReveal>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[rgb(var(--foreground))]">Featured Projects</h2>
            <p className="font-mono text-xs text-theme-muted">// hand-picked highlights</p>
          </div>
          <Link href="/projects" className="text-sm text-theme-primary hover:underline">
            View all →
          </Link>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid gap-4 md:grid-cols-3">
        {topProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <div className="group rounded-xl border border-theme bg-theme-card p-5 transition-all hover:-translate-y-1 hover:border-[rgb(var(--primary)/.3)] hover:shadow-[0_0_20px_rgb(var(--primary)/.1)]">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="rounded-md px-2 py-0.5 text-[10px] font-medium"
                  style={{
                    color: `rgb(${categoryColors[project.category]})`,
                    backgroundColor: `rgb(${categoryColors[project.category]} / 0.1)`,
                  }}
                >
                  {categoryLabels[project.category]}
                </span>
                <span className="text-[10px] text-theme-muted">{project.dateRange.split("—")[0].trim()}</span>
              </div>
              <h3 className="font-bold text-[rgb(var(--foreground))]">{project.title.split("—")[0].trim()}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-theme-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded bg-[rgb(var(--background))] px-1.5 py-0.5 text-[10px] text-theme-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
```

- [ ] **Step 4: Create About + Skills Teaser**

Create `components/home/about-skills-teaser.tsx`:

```typescript
"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const topSkills = skillCategories.flatMap((c) => c.skills).slice(0, 6);

export function AboutSkillsTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-4 md:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="rounded-xl border border-theme bg-theme-card p-6">
            <h3 className="font-bold text-[rgb(var(--foreground))]">About Me</h3>
            <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-theme-muted">
              {profile.bio[0]}
            </p>
            <Link href="/about" className="mt-3 inline-block text-sm text-theme-primary hover:underline">
              Read more →
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="rounded-xl border border-theme bg-theme-card p-6">
            <h3 className="mb-3 font-bold text-[rgb(var(--foreground))]">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[rgb(var(--primary)/.2)] bg-[rgb(var(--primary)/.1)] px-2.5 py-1 text-xs text-[rgb(var(--foreground))]"
                >
                  {skill}
                </span>
              ))}
              <Link
                href="/about"
                className="rounded-md border border-[rgb(var(--muted)/.3)] bg-[rgb(var(--muted)/.1)] px-2.5 py-1 text-xs text-theme-muted hover:text-[rgb(var(--foreground))]"
              >
                +40 more
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Wire up Home page**

Replace `app/page.tsx`:

```typescript
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { FeaturedProjectsHome } from "@/components/home/featured-projects-home";
import { AboutSkillsTeaser } from "@/components/home/about-skills-teaser";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjectsHome />
      <AboutSkillsTeaser />
    </>
  );
}
```

- [ ] **Step 6: Verify home page renders**

```bash
npm run dev
```

Open http://localhost:3000. Verify:
- Hero with name, typing tagline, CTAs
- Stats bar with animated counters
- 3 featured project cards
- About + Skills teaser
- All sections animate on scroll

- [ ] **Step 7: Commit**

```bash
git add components/home/ app/page.tsx
git commit -m "feat: build complete home page with hero, stats, featured projects, and teaser"
```

---

## Task 7: About Page

**Files:**
- Create: `components/about/bio.tsx`, `components/about/education.tsx`, `components/about/experience-timeline.tsx`, `components/about/leadership.tsx`, `components/about/resume-section.tsx`
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create all About section components**

Create `components/about/bio.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function Bio() {
  return (
    <ScrollReveal>
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <motion.div
          initial={{ scale: 0.9, rotate: -2 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="h-40 w-32 flex-shrink-0 overflow-hidden rounded-xl border-2 border-theme bg-theme-card flex items-center justify-center text-5xl font-black text-theme-muted"
        >
          R
          {/* Replace with: <Image src="/images/profile.jpg" ... /> */}
        </motion.div>
        <div>
          {profile.bio.map((p, i) => (
            <p key={i} className="mt-2 text-sm leading-relaxed text-theme-muted first:mt-0">
              {p}
            </p>
          ))}
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.roles.map((role) => (
              <span
                key={role}
                className="rounded-md border border-[rgb(var(--primary)/.2)] bg-[rgb(var(--primary)/.1)] px-2.5 py-1 text-xs text-theme-primary"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
```

Create `components/about/education.tsx`:

```typescript
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function Education() {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap size={16} className="text-theme-secondary" />
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">Education</h2>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-theme bg-theme-card p-5">
        <div>
          <p className="font-bold text-[rgb(var(--foreground))]">{education.degree}</p>
          <p className="mt-1 text-sm text-theme-muted">{education.institution}, {education.location}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-theme-muted">{education.dateRange}</p>
          <p className="mt-1 font-bold text-theme-primary">CGPA: {education.cgpa}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
```

Create `components/about/experience-timeline.tsx`:

```typescript
"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function ExperienceTimeline() {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-2 mb-4">
        <Briefcase size={16} className="text-theme-primary" />
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">Experience</h2>
      </div>
      <div className="relative pl-6">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-[7px] top-1 w-0.5 rounded-full gradient-primary"
        />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <div
                className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-[rgb(var(--background))]"
                style={{ background: i === 0 ? "rgb(var(--primary))" : "rgb(var(--secondary))" }}
              />

              <div className="rounded-xl border border-theme bg-theme-card p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[rgb(var(--foreground))]">{exp.role}</p>
                    <p className="text-sm" style={{ color: i === 0 ? "rgb(var(--primary))" : "rgb(var(--secondary))" }}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] ${
                      exp.status === "current"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-[rgb(var(--muted)/.1)] text-theme-muted"
                    }`}
                  >
                    {exp.status === "current" ? "Current" : "Completed"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-theme-muted">{exp.dateRange} | {exp.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-xs leading-relaxed text-theme-muted">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
```

Create `components/about/leadership.tsx`:

```typescript
import { Target } from "lucide-react";
import { leadershipRoles } from "@/data/leadership";
import { StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";

export function Leadership() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Target size={16} className="text-[rgb(var(--secondary))]" />
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">Leadership</h2>
      </div>
      <StaggerContainer className="grid gap-4 md:grid-cols-2">
        {leadershipRoles.map((role) => (
          <StaggerItem key={role.title}>
            <div className="rounded-xl border border-theme bg-theme-card p-5">
              <p className="font-bold text-[rgb(var(--foreground))]">{role.title}</p>
              <p className="mt-1 text-sm text-[rgb(var(--secondary))]">{role.organization}</p>
              <p className="mt-1 text-xs text-theme-muted">{role.dateRange}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
```

Create `components/about/resume-section.tsx`:

```typescript
import { FileText } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function ResumeSection() {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-2 mb-4">
        <FileText size={16} className="text-green-400" />
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">Resume</h2>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-theme bg-theme-card p-5">
        <div>
          <p className="font-semibold text-[rgb(var(--foreground))]">Rupesh Bharambe — Resume 2026</p>
          <p className="mt-1 text-xs text-theme-muted">Last updated: March 2026 · PDF</p>
        </div>
        <div className="flex gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg border border-[rgb(var(--primary)/.3)] bg-[rgb(var(--primary)/.1)] px-4 py-2 text-xs font-semibold text-theme-primary transition-colors hover:bg-[rgb(var(--primary)/.2)]"
          >
            Preview
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-lg gradient-primary px-4 py-2 text-xs font-semibold text-white"
          >
            Download ↓
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
```

- [ ] **Step 2: Create About page**

Create `app/about/page.tsx`:

```typescript
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Bio } from "@/components/about/bio";
import { Education } from "@/components/about/education";
import { ExperienceTimeline } from "@/components/about/experience-timeline";
import { Leadership } from "@/components/about/leadership";
import { ResumeSection } from "@/components/about/resume-section";

export const metadata: Metadata = {
  title: "About — Rupesh Bharambe",
  description: "Education, experience, and leadership roles of Rupesh Bharambe.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-12">
      <PageHeader comment="about-me" title="Get to Know Me" />
      <Bio />
      <Education />
      <ExperienceTimeline />
      <Leadership />
      <ResumeSection />
    </div>
  );
}
```

- [ ] **Step 3: Verify About page**

```bash
npm run dev
```

Open http://localhost:3000/about. Verify all sections render with animations.

- [ ] **Step 4: Commit**

```bash
git add components/about/ app/about/
git commit -m "feat: build About page with bio, education, experience timeline, leadership, resume"
```

---

## Task 8: Projects Page

**Files:**
- Create: `components/projects/featured-project-card.tsx`, `components/projects/project-card.tsx`, `components/projects/project-filters.tsx`
- Create: `app/projects/page.tsx`

- [ ] **Step 1: Create Featured Project Card**

Create `components/projects/featured-project-card.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { categoryLabels, categoryColors } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

const accentGradients: Record<string, string> = {
  edfs: "from-orange-500/10 to-yellow-500/5",
  "face-liveness": "from-pink-500/10 to-purple-500/5",
  "scale-ai": "from-purple-500/10 to-cyan-500/5",
};

export function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const color = `rgb(${categoryColors[project.category]})`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group overflow-hidden rounded-xl border border-theme bg-theme-card transition-all hover:border-[rgb(var(--primary)/.3)]"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left panel */}
        <div className={`flex flex-col items-center justify-center bg-gradient-to-br ${accentGradients[project.slug] || "from-purple-500/10 to-cyan-500/5"} p-6 md:w-48 md:border-r md:border-theme`}>
          {project.hackathonWin && (
            <span className="mb-2 rounded-md px-2 py-0.5 text-[10px] font-medium" style={{ color, backgroundColor: `${color.replace("rgb", "rgba").replace(")", " / 0.15)")}` }}>
              🏆 {project.hackathonWin.toUpperCase()}
            </span>
          )}
          <span className="text-2xl font-black gradient-text">{project.slug.toUpperCase().replace(/-/g, " ").split(" ")[0]}</span>
          <span className="mt-1 font-mono text-[10px] text-theme-muted">{project.title.split("—")[0].split("(")[0].trim().split(" ").slice(-2).join(" ")}</span>
        </div>

        {/* Right panel */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-md px-2 py-0.5 text-[10px]" style={{ color, backgroundColor: `${color.replace("rgb", "rgba").replace(")", " / 0.1)")}` }}>
              {categoryLabels[project.category]}
            </span>
            <span className="text-[10px] text-theme-muted">{project.dateRange}</span>
          </div>
          <h3 className="mt-2 text-base font-bold text-[rgb(var(--foreground))]">{project.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-theme-muted">{project.description}</p>

          {project.metrics.length > 0 && (
            <div className="mt-3 flex gap-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <span className="text-base font-extrabold" style={{ color }}>{m.value}</span>
                  <span className="ml-1 font-mono text-[9px] text-theme-muted">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded bg-[rgb(var(--background))] px-1.5 py-0.5 text-[10px] text-theme-muted">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-3 flex gap-3">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-theme-primary hover:underline">
                <Github size={12} /> GitHub
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-theme-secondary hover:underline">
                <ExternalLink size={12} /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create Project Card (standard)**

Create `components/projects/project-card.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { categoryLabels, categoryColors } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const color = `rgb(${categoryColors[project.category]})`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group rounded-xl border border-theme bg-theme-card p-5 transition-all hover:-translate-y-1 hover:border-[rgb(var(--primary)/.3)] hover:shadow-[0_0_20px_rgb(var(--primary)/.1)]"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-md px-2 py-0.5 text-[10px]" style={{ color, backgroundColor: `${color.replace("rgb", "rgba").replace(")", " / 0.1)")}` }}>
          {categoryLabels[project.category]}
        </span>
        {project.status === "active" ? (
          <span className="flex items-center gap-1 text-[10px] text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Active
          </span>
        ) : (
          <span className="text-[10px] text-theme-muted">{project.dateRange.split("—")[0].trim()}</span>
        )}
      </div>
      <h3 className="font-bold text-[rgb(var(--foreground))]">{project.title.split("—")[0].trim()}</h3>
      <p className="mt-1 line-clamp-2 text-xs text-theme-muted">{project.description}</p>

      {project.metrics.length > 0 && (
        <div className="mt-2 flex gap-3">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <span className="text-sm font-extrabold" style={{ color }}>{m.value}</span>
              <span className="ml-1 font-mono text-[8px] text-theme-muted">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-2 flex flex-wrap gap-1">
        {project.techStack.slice(0, 3).map((tech) => (
          <span key={tech} className="rounded bg-[rgb(var(--background))] px-1.5 py-0.5 text-[9px] text-theme-muted">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 3: Create Project Filters**

Create `components/projects/project-filters.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import type { ProjectCategory } from "@/data/projects";
import { categoryLabels } from "@/data/projects";

const allCategories: (ProjectCategory | "all")[] = ["all", "ai-ml", "cv", "llm-rag", "iot", "healthtech", "fullstack"];

interface ProjectFiltersProps {
  active: string;
  onChange: (category: string) => void;
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            active === cat ? "text-[rgb(var(--foreground))]" : "text-theme-muted hover:text-[rgb(var(--foreground))]"
          }`}
        >
          {active === cat && (
            <motion.div
              layoutId="active-filter"
              className="absolute inset-0 rounded-md border border-[rgb(var(--primary)/.4)] bg-[rgb(var(--primary)/.15)]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat === "all" ? "All" : categoryLabels[cat]}</span>
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create Projects page**

Create `app/projects/page.tsx`:

```typescript
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilters } from "@/components/projects/project-filters";
import { featuredProjects, standardProjects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredStandard = filter === "all"
    ? standardProjects
    : standardProjects.filter((p) => p.category === filter);

  const filteredFeatured = filter === "all"
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <PageHeader
        comment="projects"
        title="Things I've Built"
        description="Real-world AI/ML systems, hackathon-winning solutions, and production software."
      />

      {/* Featured */}
      {filteredFeatured.length > 0 && (
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-base font-bold text-[rgb(var(--foreground))]">Featured</h2>
            <span className="font-mono text-xs text-[rgb(var(--secondary))]">// hackathon winners</span>
          </div>
          <div className="flex flex-col gap-4">
            {filteredFeatured.map((project, i) => (
              <FeaturedProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* All Projects */}
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-base font-bold text-[rgb(var(--foreground))]">All Projects</h2>
        <div className="h-px flex-1 bg-[rgb(var(--card-border))]" />
      </div>

      <ProjectFilters active={filter} onChange={setFilter} />

      <AnimatePresence mode="popLayout">
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredStandard.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
```

- [ ] **Step 5: Verify Projects page**

```bash
npm run dev
```

Open http://localhost:3000/projects. Verify:
- 3 featured cards with trophy badges
- Filter chips work with layout animation
- Standard cards in 3-column grid
- Hover effects on cards

- [ ] **Step 6: Commit**

```bash
git add components/projects/ app/projects/
git commit -m "feat: build Projects page with featured cards, filters, and project grid"
```

---

## Task 9: Achievements Page

**Files:**
- Create: `components/achievements/stats-summary.tsx`, `components/achievements/trophy-wall.tsx`, `components/achievements/other-honors.tsx`, `components/achievements/certifications-grid.tsx`
- Create: `app/achievements/page.tsx`

- [ ] **Step 1: Create all Achievement components**

Create `components/achievements/stats-summary.tsx`:

```typescript
"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";

const stats = [
  { value: 5, label: "hackathons.won", color: "249 115 22" },
  { value: 15, suffix: "+", label: "finalist.finishes", color: "139 92 246" },
  { value: 1, label: "international", color: "34 211 238" },
  { value: 7, label: "certifications", color: "236 72 153" },
];

export function StatsSummary() {
  return (
    <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map((stat) => (
        <StaggerItem key={stat.label}>
          <div
            className="rounded-xl border p-5 text-center"
            style={{
              borderColor: `rgb(${stat.color} / 0.2)`,
              background: `linear-gradient(135deg, rgb(${stat.color} / 0.08), transparent)`,
            }}
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="[&>div:first-child]:text-3xl"
            />
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
```

Create `components/achievements/trophy-wall.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { hackathonWins } from "@/data/hackathons";
import { StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";

export function TrophyWall() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">Hackathon Wins</h2>
        <span className="font-mono text-xs text-[rgb(var(--secondary))]">// the big ones</span>
      </div>
      <StaggerContainer className="grid gap-3 md:grid-cols-2">
        {hackathonWins.map((hack, i) => (
          <StaggerItem key={hack.name} className={i === hackathonWins.length - 1 && hackathonWins.length % 2 !== 0 ? "md:col-span-2" : ""}>
            <div
              className="relative overflow-hidden rounded-xl border bg-theme-card p-5"
              style={{ borderColor: `rgb(${hack.color} / 0.3)` }}
            >
              <div
                className="absolute -right-3 -top-3 h-16 w-16 rounded-full"
                style={{ background: `radial-gradient(circle, rgb(${hack.color} / 0.12), transparent)` }}
              />
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🏆</span>
                <div>
                  <p className="font-bold text-[rgb(var(--foreground))]">{hack.name}</p>
                  <p className="text-xs" style={{ color: `rgb(${hack.color})` }}>{hack.award}</p>
                </div>
              </div>
              <p className="text-xs text-theme-muted">{hack.description}</p>
              <p className="mt-2 text-[10px] text-theme-muted">{hack.role} · {hack.year}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
```

Create `components/achievements/other-honors.tsx`:

```typescript
"use client";

import { Medal, Globe } from "lucide-react";
import { otherHonors } from "@/data/hackathons";
import { StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";

const iconMap: Record<string, typeof Medal> = {
  medal: Medal,
  globe: Globe,
};

export function OtherHonors() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">Other Honors</h2>
        <span className="font-mono text-xs text-theme-muted">// finalists & awards</span>
      </div>
      <StaggerContainer className="flex flex-col gap-2">
        {otherHonors.map((honor) => {
          const Icon = iconMap[honor.icon] || Medal;
          return (
            <StaggerItem key={honor.name}>
              <div className="flex items-center justify-between rounded-lg border border-theme bg-theme-card px-4 py-3">
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-theme-secondary" />
                  <div>
                    <span className="text-sm font-semibold text-[rgb(var(--foreground))]">{honor.name}</span>
                    <span className="ml-2 text-xs text-theme-muted">{honor.detail}</span>
                  </div>
                </div>
                <span className="text-xs text-theme-muted">{honor.year}</span>
              </div>
            </StaggerItem>
          );
        })}
        <p className="px-4 text-xs text-theme-muted">+ 10 more national finalist appearances</p>
      </StaggerContainer>
    </div>
  );
}
```

Create `components/achievements/certifications-grid.tsx`:

```typescript
import { Brain, Cloud, Shield, Send, Sparkles, Cpu } from "lucide-react";
import { certifications } from "@/data/certifications";
import { StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";

const iconMap: Record<string, typeof Brain> = {
  gpu: Cpu,
  brain: Brain,
  cloud: Cloud,
  sparkles: Sparkles,
  shield: Shield,
  send: Send,
};

export function CertificationsGrid() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">Certifications</h2>
        <span className="font-mono text-xs text-theme-secondary">// verified credentials</span>
      </div>
      <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {certifications.map((cert) => {
          const Icon = iconMap[cert.icon] || Brain;
          return (
            <StaggerItem key={cert.name}>
              <div className="rounded-xl border border-theme bg-theme-card p-4 text-center">
                <Icon size={20} className="mx-auto mb-2 text-theme-primary" />
                <p className="text-xs font-semibold text-[rgb(var(--foreground))]">{cert.name}</p>
                <p className="mt-1 text-[10px] text-theme-muted">{cert.issuer}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
```

- [ ] **Step 2: Create Achievements page**

Create `app/achievements/page.tsx`:

```typescript
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { StatsSummary } from "@/components/achievements/stats-summary";
import { TrophyWall } from "@/components/achievements/trophy-wall";
import { OtherHonors } from "@/components/achievements/other-honors";
import { CertificationsGrid } from "@/components/achievements/certifications-grid";

export const metadata: Metadata = {
  title: "Achievements — Rupesh Bharambe",
  description: "5x hackathon winner, 15+ finalist finishes, and professional certifications.",
};

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-12">
      <PageHeader comment="achievements" title="Wins & Recognition" />
      <StatsSummary />
      <TrophyWall />
      <OtherHonors />
      <CertificationsGrid />
    </div>
  );
}
```

- [ ] **Step 3: Verify Achievements page**

```bash
npm run dev
```

Open http://localhost:3000/achievements. Verify all sections.

- [ ] **Step 4: Commit**

```bash
git add components/achievements/ app/achievements/
git commit -m "feat: build Achievements page with trophy wall, honors, and certifications"
```

---

## Task 10: Contact Page

**Files:**
- Create: `components/contact/contact-form.tsx`, `components/contact/quick-reach.tsx`, `components/contact/social-profiles.tsx`, `components/contact/open-to.tsx`, `components/contact/github-activity.tsx`
- Create: `lib/github.ts`
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create GitHub activity fetcher**

Create `lib/github.ts`:

```typescript
export async function getGitHubStats(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      publicRepos: data.public_repos as number,
      followers: data.followers as number,
    };
  } catch {
    return null;
  }
}
```

- [ ] **Step 2: Create all Contact components**

Create `components/contact/contact-form.tsx`:

```typescript
"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-xl border border-theme bg-theme-card p-6">
      <h3 className="mb-5 font-bold text-[rgb(var(--foreground))]">Send a Message</h3>
      <StaggerContainer className="space-y-4">
        {[
          { name: "name", label: "name", type: "text", placeholder: "Your name" },
          { name: "email", label: "email", type: "email", placeholder: "your@email.com" },
          { name: "subject", label: "subject", type: "text", placeholder: "What's this about?" },
        ].map((field) => (
          <StaggerItem key={field.name}>
            <label className="block">
              <span className="mb-1 block font-mono text-xs text-theme-muted">{field.label}</span>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-theme bg-[rgb(var(--background))] px-3 py-2 text-sm text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--muted-foreground)/.4)] focus:border-[rgb(var(--primary)/.5)] focus:outline-none"
              />
            </label>
          </StaggerItem>
        ))}
        <StaggerItem>
          <label className="block">
            <span className="mb-1 block font-mono text-xs text-theme-muted">message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="w-full rounded-lg border border-theme bg-[rgb(var(--background))] px-3 py-2 text-sm text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--muted-foreground)/.4)] focus:border-[rgb(var(--primary)/.5)] focus:outline-none resize-none"
            />
          </label>
        </StaggerItem>
        <StaggerItem>
          <MagneticButton>
            <span className="inline-block w-full rounded-lg gradient-primary py-2.5 text-center text-sm font-semibold text-white">
              Send Message
            </span>
          </MagneticButton>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
}
```

Create `components/contact/quick-reach.tsx`:

```typescript
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const items = [
  { icon: Mail, label: "email", value: profile.email, color: "var(--primary)" },
  { icon: Phone, label: "phone", value: profile.phone, color: "var(--secondary)" },
  { icon: MapPin, label: "location", value: profile.location, color: "249 115 22" },
];

export function QuickReach() {
  return (
    <ScrollReveal direction="right">
      <div className="rounded-xl border border-theme bg-theme-card p-5">
        <h3 className="mb-4 font-bold text-[rgb(var(--foreground))]">Quick Reach</h3>
        <div className="space-y-3">
          {items.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{
                  borderColor: `rgb(${color} / 0.2)`,
                  backgroundColor: `rgb(${color} / 0.08)`,
                }}
              >
                <Icon size={16} style={{ color: `rgb(${color})` }} />
              </div>
              <div>
                <p className="font-mono text-[10px] text-theme-muted">{label}</p>
                <p className="text-sm text-[rgb(var(--foreground))]">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
```

Create `components/contact/social-profiles.tsx`:

```typescript
import { Github, Linkedin, MessageCircle, Instagram } from "lucide-react";
import { profile } from "@/data/profile";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const socials = [
  { icon: Github, name: "GitHub", handle: "rupeshbharambe24", href: profile.social.github, bg: "bg-zinc-100 dark:bg-zinc-800", color: "text-zinc-900 dark:text-white" },
  { icon: Linkedin, name: "LinkedIn", handle: "rupesh-bharambe", href: profile.social.linkedin, bg: "bg-[#0077b5]/10", color: "text-[#0077b5]" },
  { icon: MessageCircle, name: "Discord", handle: "rupesh", href: profile.social.discord, bg: "bg-[#5865F2]/10", color: "text-[#5865F2]" },
  { icon: Instagram, name: "Instagram", handle: "rupesh__rt4", href: profile.social.instagram, bg: "bg-pink-500/10", color: "text-pink-500" },
];

export function SocialProfiles() {
  return (
    <ScrollReveal direction="right" delay={0.1}>
      <div className="rounded-xl border border-theme bg-theme-card p-5">
        <h3 className="mb-4 font-bold text-[rgb(var(--foreground))]">Profiles</h3>
        <div className="space-y-2">
          {socials.map(({ icon: Icon, name, handle, href, bg, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-theme bg-[rgb(var(--background))] p-2.5 transition-all hover:-translate-y-0.5 hover:border-[rgb(var(--primary)/.3)]"
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-md ${bg}`}>
                <Icon size={16} className={color} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[rgb(var(--foreground))]">{name}</p>
                <p className="text-[10px] text-theme-muted">{handle}</p>
              </div>
              <span className="text-xs text-theme-primary">→</span>
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
```

Create `components/contact/open-to.tsx`:

```typescript
import { profile } from "@/data/profile";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const colorMap: Record<string, string> = {
  green: "34 197 94",
  purple: "139 92 246",
  cyan: "34 211 238",
  orange: "249 115 22",
};

export function OpenTo() {
  return (
    <ScrollReveal direction="right" delay={0.2}>
      <div className="rounded-xl border border-[rgb(var(--primary)/.2)] bg-gradient-to-br from-[rgb(var(--primary)/.06)] to-transparent p-5">
        <h3 className="mb-3 text-sm font-bold text-[rgb(var(--foreground))]">Currently Open To</h3>
        <div className="flex flex-wrap gap-2">
          {profile.openTo.map(({ label, color }) => {
            const rgb = colorMap[color] || "139 92 246";
            return (
              <span
                key={label}
                className="rounded-md border px-2.5 py-1 text-xs"
                style={{
                  color: `rgb(${rgb})`,
                  borderColor: `rgb(${rgb} / 0.2)`,
                  backgroundColor: `rgb(${rgb} / 0.08)`,
                }}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
```

Create `components/contact/github-activity.tsx`:

```typescript
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { getGitHubStats } from "@/lib/github";

export async function GitHubActivity() {
  const stats = await getGitHubStats("rupeshbharambe24");

  return (
    <ScrollReveal>
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">GitHub Activity</h2>
        <span className="font-mono text-xs text-theme-muted">// contribution graph</span>
      </div>
      <div className="rounded-xl border border-theme bg-theme-card p-5">
        {/* GitHub contribution graph embedded via img */}
        <img
          src="https://ghchart.rshah.org/8b5cf6/rupeshbharambe24"
          alt="GitHub contribution graph"
          className="w-full rounded"
          loading="lazy"
        />
        {stats && (
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-theme-muted">
              <span className="font-bold text-theme-primary">{stats.publicRepos}</span> public repos
            </p>
            <p className="text-sm text-theme-muted">
              <span className="font-bold text-theme-primary">{stats.followers}</span> followers
            </p>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
```

- [ ] **Step 3: Create Contact page**

Create `app/contact/page.tsx`:

```typescript
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { QuickReach } from "@/components/contact/quick-reach";
import { SocialProfiles } from "@/components/contact/social-profiles";
import { OpenTo } from "@/components/contact/open-to";
import { GitHubActivity } from "@/components/contact/github-activity";

export const metadata: Metadata = {
  title: "Contact — Rupesh Bharambe",
  description: "Get in touch with Rupesh Bharambe for hackathons, research, internships, or full-time roles.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <PageHeader
        comment="contact"
        title="Let's Connect"
        description="Open to hackathons, research collaborations, internships, and full-time AI/ML roles."
      />

      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <ContactForm />
        <div className="flex flex-col gap-4">
          <QuickReach />
          <SocialProfiles />
          <OpenTo />
        </div>
      </div>

      <div className="mt-12">
        <GitHubActivity />
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify Contact page**

```bash
npm run dev
```

Open http://localhost:3000/contact. Verify all sections render.

- [ ] **Step 5: Commit**

```bash
git add components/contact/ lib/github.ts app/contact/
git commit -m "feat: build Contact page with form, socials, open-to badges, and GitHub activity"
```

---

## Task 11: 404 Page + Not Found

**Files:**
- Create: `app/not-found.tsx`

- [ ] **Step 1: Create 404 page**

Create `app/not-found.tsx`:

```typescript
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-black gradient-text">404</h1>
      <p className="mt-3 font-mono text-sm text-theme-muted">// page not found</p>
      <p className="mt-2 text-sm text-theme-muted">This page doesn't exist.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg gradient-primary px-5 py-2.5 text-sm font-semibold text-white"
      >
        Go Home
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/not-found.tsx
git commit -m "feat: add 404 page"
```

---

## Task 12: SEO — Metadata, OG Images, Sitemap

**Files:**
- Modify: `app/layout.tsx` (add structured data)
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 1: Add JSON-LD structured data to layout**

In `app/layout.tsx`, add before `</head>` is implicitly closed (inside the `<html>` tag, before `<body>`):

Update `app/layout.tsx` to include a `<Script>` tag with JSON-LD in the body:

```typescript
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rupesh Bharambe — AI/ML Engineer & 5x Hackathon Winner",
    template: "%s | Rupesh Bharambe",
  },
  description:
    "Portfolio of Rupesh Bharambe — AI/ML Engineer, 5x National Hackathon Winner, SIH'24 Grand Finale Winner. Building intelligent systems.",
  keywords: ["AI", "ML", "Machine Learning", "Hackathon", "Portfolio", "Rupesh Bharambe", "SIH Winner"],
  authors: [{ name: "Rupesh Bharambe" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Rupesh Bharambe Portfolio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rupesh Bharambe",
  jobTitle: "AI/ML Engineer",
  url: "https://rupeshbharambe.vercel.app",
  sameAs: [
    "https://github.com/rupeshbharambe24",
    "https://www.linkedin.com/in/rupesh-bharambe-056a12257/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create sitemap**

Create `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rupeshbharambe.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/achievements`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
```

- [ ] **Step 3: Create robots.txt**

Create `app/robots.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rupeshbharambe.vercel.app/sitemap.xml",
  };
}
```

- [ ] **Step 4: Verify build succeeds**

```bash
npm run build
```

Expected: Build succeeds with all pages statically generated.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/sitemap.ts app/robots.ts
git commit -m "feat: add SEO metadata, JSON-LD structured data, sitemap, and robots.txt"
```

---

## Task 13: Add .gitignore and Final Cleanup

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Ensure .gitignore includes portfolio-specific entries**

Add to `.gitignore`:

```
.superpowers/
.env*.local
```

- [ ] **Step 2: Add placeholder resume**

```bash
touch public/resume.pdf
```

Note: Replace with actual resume PDF before deployment.

- [ ] **Step 3: Run final build and type check**

```bash
npx tsc --noEmit && npm run build
```

Expected: No type errors, build succeeds.

- [ ] **Step 4: Commit**

```bash
git add .gitignore public/resume.pdf
git commit -m "chore: add gitignore entries and placeholder resume"
```

---

## Post-Implementation Notes

### Replace Before Deploy
- `public/resume.pdf` → actual resume file
- Profile photo placeholder → actual `public/images/profile.jpg`
- `https://rupeshbharambe.vercel.app` → actual deployed URL in sitemap/SEO

### Contact Form Backend
The contact form currently has no backend. Options:
1. **Resend** — add a Server Action that sends email via Resend API
2. **EmailJS** — client-side email service
3. **Formspree** — form action URL, zero code

### GitHub Contribution Graph
Uses `ghchart.rshah.org` for the contribution graph image. If this service is unreliable, alternatives:
- GitHub's own contribution SVG (requires scraping)
- Build a custom component using GitHub GraphQL API

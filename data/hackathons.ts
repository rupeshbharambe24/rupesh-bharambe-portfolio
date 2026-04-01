export interface HackathonWin {
  name: string;
  year: number;
  award: string;
  description: string;
  role: string;
  color: string;
  isWin: boolean;
  photo?: string;
  newsArticles?: string[];
}

export interface Honor {
  name: string;
  year: number;
  award: string;
  description: string;
  photo?: string;
  newsArticles?: string[];
}

export const hackathonWins: HackathonWin[] = [
  {
    name: "Smart India Hackathon 2024",
    year: 2024,
    award: "Grand Finale Winner",
    description:
      "Led team of 6 to build EDFS — AI electricity demand forecasting for Delhi power grid. National-level competition.",
    role: "Team Lead",
    color: "249 115 22",
    isWin: true,
    photo: "/images/hackathons/sih2024.jpeg",
    newsArticles: ["/images/news/sih-news.jpg", "/images/news/sih-news2.jpg"],
  },
  {
    name: "@scale AI Hackathon 2026",
    year: 2026,
    award: "Winner — Marathwada",
    description:
      "Enterprise AI/ML on real industry data. Evaluated by Findability Sciences / NSBT experts.",
    role: "Team Lead",
    color: "139 92 246",
    isWin: true,
    photo: "/images/hackathons/scale-ai.jpeg",
    newsArticles: ["/images/news/scale-ai-news.jpeg"],
  },
  {
    name: "RACKATHON 2025",
    year: 2025,
    award: "Winner — GH Raisoni University",
    description:
      "Face liveness detection with custom neural architecture + mathematical formulae.",
    role: "Team Lead",
    color: "236 72 153",
    isWin: true,
    photo: "/images/hackathons/rackathon.jpg",
    newsArticles: ["/images/news/rackathon-news.jpg"],
  },
  {
    name: "ORCHATHON 2K25",
    year: 2025,
    award: "3rd Prize — NK Orchid College",
    description:
      "InnoMediX — AI telemedicine platform for healthcare accessibility.",
    role: "Team Lead",
    color: "34 211 238",
    isWin: true,
    photo: "/images/hackathons/orchathon.jpg",
    newsArticles: [
      "/images/news/orchathon-news1.jpg",
      "/images/news/orchathon-news2.jpg",
    ],
  },
  {
    name: "HackCelestial 2.0",
    year: 2025,
    award: "3rd Runner Up (Top 5) — Pillai College of Engg, Mumbai",
    description:
      "Satellite data platform built during a competitive national hackathon.",
    role: "Team Lead",
    color: "34 197 94",
    isWin: true,
    photo: "/images/hackathons/hackcelestial.jpg",
  },
];

export const otherHonors: Honor[] = [
  {
    name: "SIH 2025 Grand Finale",
    year: 2025,
    award: "Top 5",
    description:
      "VETRA: Animal classification (Ministry of Fisheries)",
  },
  {
    name: "Avishkar 2024",
    year: 2024,
    award: "Silver (2nd Prize) — Zonal Level",
    description:
      "Research Convention for innovative AI research project.",
    newsArticles: ["/images/news/avishkar-news.jpg"],
  },
  {
    name: "Pune Agri International",
    year: 2024,
    award: "International Finalist",
    description: "AgriTech AI Platform at international hackathon.",
    photo: "/images/hackathons/puneagri.jpg",
  },
];

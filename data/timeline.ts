export type TimelineEventType = "education" | "internship" | "hackathon-win" | "achievement" | "leadership";

export interface TimelineEvent {
  date: string;
  sortKey: number; // YYYYMM for sorting
  type: TimelineEventType;
  title: string;
  subtitle: string;
  description?: string;
  photo?: string;
}

export const eventColors: Record<TimelineEventType, string> = {
  education: "59 130 246",
  internship: "34 197 94",
  "hackathon-win": "249 115 22",
  achievement: "234 179 8",
  leadership: "139 92 246",
};

export const eventIcons: Record<TimelineEventType, string> = {
  education: "🎓",
  internship: "💼",
  "hackathon-win": "🏆",
  achievement: "🥈",
  leadership: "🎯",
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "Nov 2022",
    sortKey: 202211,
    type: "education",
    title: "Started B.Tech AI & Data Science",
    subtitle: "CSMSS Chh. Shahu College of Engineering",
  },
  {
    date: "Apr 2024",
    sortKey: 202404,
    type: "internship",
    title: "Software Developer Intern",
    subtitle: "Intersense Technologies LLP",
    description: "Raspberry Pi PyQt HMI, CNC compensation, SQLite traceability",
  },
  {
    date: "Sep 2024",
    sortKey: 202409,
    type: "hackathon-win",
    title: "SIH 2024 — Grand Finale Winner",
    subtitle: "Smart India Hackathon",
    description: "Led team of 6 to build EDFS — AI electricity demand forecasting for Delhi power grid",
    photo: "/images/hackathons/sih2024.jpeg",
  },
  {
    date: "Nov 2024",
    sortKey: 202411,
    type: "achievement",
    title: "Avishkar 2024 — Silver Medal",
    subtitle: "Zonal Level Research Convention",
    description: "Innovative AI research project recognized at inter-university convention",
  },
  {
    date: "Dec 2024",
    sortKey: 202412,
    type: "achievement",
    title: "Pune Agri International — Finalist",
    subtitle: "International AgriTech Hackathon",
    description: "Showcased AI-powered agricultural solutions at international exhibition",
    photo: "/images/hackathons/puneagri.jpg",
  },
  {
    date: "Feb 2025",
    sortKey: 202502,
    type: "hackathon-win",
    title: "RACKATHON 2025 — Winner",
    subtitle: "GH Raisoni University",
    description: "Face liveness detection with custom neural architecture + mathematical formulae",
    photo: "/images/hackathons/rackathon.jpg",
  },
  {
    date: "Mar 2025",
    sortKey: 202503,
    type: "hackathon-win",
    title: "ORCHATHON 2K25 — 3rd Prize",
    subtitle: "NK Orchid College",
    description: "InnoMediX — AI telemedicine platform for healthcare accessibility",
    photo: "/images/hackathons/orchathon.jpg",
  },
  {
    date: "May 2025",
    sortKey: 202505,
    type: "leadership",
    title: "Vice President — AI&DSSA",
    subtitle: "AI & Data Science Students Association",
    description: "Leading department-level student association initiatives",
  },
  {
    date: "Jun 2025",
    sortKey: 202506,
    type: "leadership",
    title: "Event Head Coordinator",
    subtitle: "InnoHack Robotics & AI Hackathon",
    description: "Coordinated and organized a robotics & AI hackathon event",
  },
  {
    date: "Sep 2025",
    sortKey: 202509,
    type: "hackathon-win",
    title: "HackCelestial 2.0 — 3rd Runner Up",
    subtitle: "Pillai College of Engg, Mumbai",
    description: "Top 5 finish at national-level hackathon",
    photo: "/images/hackathons/hackcelestial.jpg",
  },
  {
    date: "Oct 2025",
    sortKey: 202510,
    type: "internship",
    title: "Software Engineer Intern",
    subtitle: "Biopan Scientific Pvt. Ltd.",
    description: "Scientific instrument desktop software — LC, bioreactor, RT-qPCR. 21 CFR Part 11 compliance.",
  },
  {
    date: "Dec 2025",
    sortKey: 202512,
    type: "achievement",
    title: "SIH 2025 Grand Finale — Top 5",
    subtitle: "VETRA: Animal Classification",
    description: "Reached top 5 with solution for Ministry of Fisheries",
    photo: "/images/hackathons/sih2025.jpg",
  },
  {
    date: "Mar 2026",
    sortKey: 202603,
    type: "hackathon-win",
    title: "@scale AI Hackathon — Winner",
    subtitle: "Marathwada Region",
    description: "Enterprise AI/ML on real industry data. Evaluated by Findability Sciences / NSBT experts.",
    photo: "/images/hackathons/scale-ai.jpeg",
  },
  {
    date: "Jun 2026",
    sortKey: 202606,
    type: "education",
    title: "B.Tech Graduation",
    subtitle: "AI & Data Science — CSMSS CSCOE",
    description: "CGPA: 7.0",
  },
];

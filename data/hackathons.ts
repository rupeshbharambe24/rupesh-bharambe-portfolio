export interface HackathonWin {
  name: string;
  year: number;
  award: string;
  description: string;
  role: string;
  color: string;
  isWin: boolean;
}

export interface Honor {
  name: string;
  year: number;
  award: string;
  description: string;
}

export const hackathonWins: HackathonWin[] = [
  {
    name: "Smart India Hackathon (SIH)",
    year: 2024,
    award: "Grand Finale Winner",
    description:
      "Won the national grand finale of Smart India Hackathon 2024 with EDFS — Emergency Data Flow System for real-time disaster response coordination.",
    role: "Team Lead",
    color: "234 179 8",
    isWin: true,
  },
  {
    name: "RACKATHON",
    year: 2024,
    award: "1st Place",
    description:
      "Built a Face Liveness Detection System with anti-spoofing capabilities using depth estimation and micro-expression analysis.",
    role: "Team Lead",
    color: "236 72 153",
    isWin: true,
  },
  {
    name: "@scale AI Hackathon",
    year: 2025,
    award: "1st Place",
    description:
      "Developed a scalable AI inference pipeline with auto-scaling, load balancing, and model versioning for production deployments.",
    role: "Team Lead",
    color: "139 92 246",
    isWin: true,
  },
  {
    name: "InnoHack",
    year: 2024,
    award: "1st Place",
    description:
      "Won with an innovative IoT-based solution for smart resource management and real-time monitoring.",
    role: "Team Lead",
    color: "34 197 94",
    isWin: true,
  },
  {
    name: "CodeStorm",
    year: 2024,
    award: "1st Place",
    description:
      "Secured first place with a full-stack AI-powered application demonstrating end-to-end ML deployment skills.",
    role: "Team Lead",
    color: "34 211 238",
    isWin: true,
  },
];

export const otherHonors: Honor[] = [
  {
    name: "Smart India Hackathon (SIH)",
    year: 2025,
    award: "Top 5 Finalist",
    description:
      "Reached the top 5 in SIH 2025 with an advanced AI-driven solution, building on the previous year's grand finale win.",
  },
  {
    name: "Avishkar Research Convention",
    year: 2024,
    award: "Silver Medal",
    description:
      "Awarded Silver Medal at the Avishkar 2024 inter-university research convention for innovative AI research project.",
  },
  {
    name: "Pune Agri International",
    year: 2024,
    award: "Participant & Exhibitor",
    description:
      "Showcased AI-powered agricultural solutions at the Pune Agri International exhibition, demonstrating real-world applications of ML in farming.",
  },
];

export interface LeadershipRole {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const leadership: LeadershipRole[] = [
  {
    title: "Vice President",
    organization: "AI & Data Science Students Association (AI&DSSA)",
    startDate: "May 2025",
    endDate: "May 2026",
    description:
      "Leading the AI & Data Science Students Association, mentoring junior developers, and organizing technical events.",
  },
  {
    title: "Event Head",
    organization: "InnoHack",
    startDate: "Jun 2025",
    endDate: "Jun 2025",
    description:
      "Coordinated and managed the InnoHack hackathon event, overseeing logistics, judging, and participant experience.",
  },
];

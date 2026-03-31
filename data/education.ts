export interface Education {
  degree: string;
  field: string;
  institution: string;
  startDate: string;
  endDate: string;
  cgpa: number;
}

export const education: Education[] = [
  {
    degree: "B.Tech",
    field: "AI & Data Science",
    institution: "CSMSS Chh. Shahu College of Engineering",
    startDate: "Nov 2022",
    endDate: "Jun 2026",
    cgpa: 7.0,
  },
];

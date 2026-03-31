export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  status: "current" | "completed";
  location: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Biopan Scientific Pvt. Ltd.",
    role: "Software Engineer Intern",
    startDate: "Oct 2025",
    endDate: "Present",
    status: "current",
    location: "Chh. Sambhajinagar",
    highlights: [
      "Built regulated scientific-instrument desktop software (LC, bioreactor, plate reader, RT-qPCR)",
      "Implemented 21 CFR Part 11 compliance features (RBAC, audit trails, e-signatures)",
      "Integrating AI/ML analytics for quality checks and anomaly detection",
    ],
  },
  {
    company: "Intersense Technologies LLP",
    role: "Software Developer Intern",
    startDate: "Apr 2024",
    endDate: "May 2024",
    status: "completed",
    location: "Chh. Sambhajinagar",
    highlights: [
      "Raspberry Pi PyQt HMI for shop-floor gauging",
      "Closed-loop CNC compensation via Telnet",
      "SQLite traceability logging",
    ],
  },
];

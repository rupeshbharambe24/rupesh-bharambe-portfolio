export interface Certification {
  title: string;
  issuer: string;
  category: "ai-ml" | "cloud" | "security" | "api";
}

export const certifications: Certification[] = [
  {
    title: "Deep Learning",
    issuer: "NVIDIA",
    category: "ai-ml",
  },
  {
    title: "Deep Learning",
    issuer: "NPTEL",
    category: "ai-ml",
  },
  {
    title: "Machine Learning",
    issuer: "NPTEL (IIT Kharagpur)",
    category: "ai-ml",
  },
  {
    title: "Google Cloud Platform — Core Infrastructure",
    issuer: "Google Cloud (Coursera)",
    category: "cloud",
  },
  {
    title: "Generative AI",
    issuer: "Coursera",
    category: "ai-ml",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco",
    category: "security",
  },
  {
    title: "API Expert",
    issuer: "Postman",
    category: "api",
  },
];

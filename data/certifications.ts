export interface Certification {
  title: string;
  issuer: string;
  category: "ai-ml" | "cloud" | "security" | "api";
  file?: string;
}

export const certifications: Certification[] = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    category: "ai-ml",
    file: "/certificates/nvidia-deep-learning.pdf",
  },
  {
    title: "Deep Learning",
    issuer: "IIT / NPTEL",
    category: "ai-ml",
    file: "/certificates/nptel-deep-learning.pdf",
  },
  {
    title: "Machine Learning (IIT-KHG)",
    issuer: "IIT Kharagpur / NPTEL",
    category: "ai-ml",
    file: "/certificates/nptel-ml-iitkgp.pdf",
  },
  {
    title: "GCP Core Infrastructure",
    issuer: "Google / Coursera",
    category: "cloud",
    file: "/certificates/gcp-core-infra.pdf",
  },
  {
    title: "GenAI Specialization",
    issuer: "Coursera",
    category: "ai-ml",
    file: "/certificates/coursera-genai.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    category: "security",
    file: "/certificates/cisco-cybersecurity.pdf",
  },
  {
    title: "API Fundamentals Student Expert",
    issuer: "Postman",
    category: "api",
    file: "/certificates/postman-api-expert.png",
  },
];

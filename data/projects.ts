export type ProjectCategory =
  | "ai-ml"
  | "cv"
  | "llm-rag"
  | "iot"
  | "healthtech"
  | "fullstack";

export const categoryLabels: Record<ProjectCategory, string> = {
  "ai-ml": "AI / ML",
  cv: "Computer Vision",
  "llm-rag": "LLM & RAG",
  iot: "IoT",
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

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  hackathonWin?: string;
  status: "completed" | "in-progress" | "ongoing";
  dateRange: string;
  metrics: string[];
  techStack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  // ── Featured Projects ─────────────────────────────────────────────
  {
    slug: "edfs-sih24",
    title: "EDFS — Emergency Data Flow System",
    description:
      "SIH'24 Grand Finale winner. Real-time emergency response coordination system using AI-driven data flow optimization for disaster management and resource allocation.",
    category: "ai-ml",
    featured: true,
    hackathonWin: "SIH'24 Grand Finale Winner",
    status: "completed",
    dateRange: "Sep 2024 – Dec 2024",
    metrics: [
      "1st Place — Smart India Hackathon 2024",
      "National-level grand finale winner",
      "Real-time emergency data coordination",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "TensorFlow",
      "WebSocket",
      "PostgreSQL",
      "Docker",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "face-liveness-rackathon",
    title: "Face Liveness Detection System",
    description:
      "RACKATHON winning project. Anti-spoofing face authentication system using depth estimation and micro-expression analysis to detect presentation attacks.",
    category: "cv",
    featured: true,
    hackathonWin: "RACKATHON Winner",
    status: "completed",
    dateRange: "Mar 2024 – Apr 2024",
    metrics: [
      "1st Place — RACKATHON",
      "99.2% spoof detection accuracy",
      "Real-time inference under 100ms",
    ],
    techStack: [
      "Python",
      "OpenCV",
      "PyTorch",
      "MediaPipe",
      "Flask",
      "TensorFlow Lite",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "at-scale-ai",
    title: "@scale AI — Scalable AI Pipeline",
    description:
      "Hackathon-winning scalable AI inference pipeline with auto-scaling, load balancing, and model versioning for production ML deployments.",
    category: "ai-ml",
    featured: true,
    hackathonWin: "Hackathon Winner",
    status: "completed",
    dateRange: "Jan 2025 – Feb 2025",
    metrics: [
      "1st Place — @scale Hackathon",
      "Auto-scaling inference pipeline",
      "Sub-second model switching",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Redis",
      "PyTorch",
      "Nginx",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },

  // ── Standard Projects ─────────────────────────────────────────────
  {
    slug: "mosdac-bot",
    title: "MOSDAC-Bot — ISRO Satellite Data Assistant",
    description:
      "Conversational AI assistant for querying ISRO's MOSDAC satellite data repository. Uses RAG architecture to provide natural-language access to meteorological and oceanographic datasets.",
    category: "llm-rag",
    featured: false,
    status: "completed",
    dateRange: "Aug 2024 – Oct 2024",
    metrics: [
      "RAG-powered satellite data retrieval",
      "Natural language query interface",
      "Integrated with MOSDAC APIs",
    ],
    techStack: [
      "Python",
      "LangChain",
      "OpenAI API",
      "ChromaDB",
      "FastAPI",
      "React",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "terrabyte",
    title: "TerraByte — Geospatial Analysis Platform",
    description:
      "Geospatial data analysis and visualization platform for environmental monitoring, combining satellite imagery with ML-based land-use classification.",
    category: "ai-ml",
    featured: false,
    status: "completed",
    dateRange: "Jun 2024 – Aug 2024",
    metrics: [
      "Satellite imagery analysis",
      "ML-based land-use classification",
      "Interactive geospatial visualizations",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Rasterio",
      "GeoPandas",
      "Streamlit",
      "PostgreSQL",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "sldts",
    title: "SLDTS — Sign Language Detection & Translation",
    description:
      "Real-time sign language detection and translation system using computer vision and deep learning to bridge communication gaps for hearing-impaired individuals.",
    category: "cv",
    featured: false,
    status: "completed",
    dateRange: "Jan 2024 – Mar 2024",
    metrics: [
      "Real-time gesture recognition",
      "Multi-sign vocabulary support",
      "Accessible UI for hearing-impaired users",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "Streamlit",
      "NumPy",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "ayuunity",
    title: "AyuUnity — Ayurvedic Health Platform",
    description:
      "AI-powered Ayurvedic health recommendation system that combines traditional medicine knowledge with modern ML techniques for personalized wellness plans.",
    category: "healthtech",
    featured: false,
    status: "completed",
    dateRange: "Nov 2023 – Jan 2024",
    metrics: [
      "Personalized Ayurvedic recommendations",
      "ML-driven health assessments",
      "Traditional + modern medicine integration",
    ],
    techStack: [
      "Python",
      "Scikit-learn",
      "Flask",
      "React",
      "MongoDB",
      "TailwindCSS",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "crowdshield",
    title: "CrowdShield — Crowd Monitoring System",
    description:
      "Intelligent crowd density monitoring and safety alert system using computer vision for event management and public safety applications.",
    category: "cv",
    featured: false,
    status: "completed",
    dateRange: "Sep 2023 – Nov 2023",
    metrics: [
      "Real-time crowd density estimation",
      "Safety alert system",
      "Event management dashboard",
    ],
    techStack: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Flask",
      "SQLite",
      "JavaScript",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "e-wise",
    title: "E-Wise — Smart E-Waste Management",
    description:
      "IoT-enabled e-waste collection and recycling management platform with route optimization and real-time tracking for sustainable electronics disposal.",
    category: "iot",
    featured: false,
    status: "completed",
    dateRange: "Jul 2023 – Sep 2023",
    metrics: [
      "IoT-based e-waste tracking",
      "Route optimization for collection",
      "Sustainability impact dashboard",
    ],
    techStack: [
      "Python",
      "Arduino",
      "MQTT",
      "Flask",
      "React",
      "PostgreSQL",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const standardProjects = projects.filter((p) => !p.featured);

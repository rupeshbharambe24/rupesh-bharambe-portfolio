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

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  hackathonWin?: string;
  status: "completed" | "active";
  dateRange: string;
  metrics: ProjectMetric[];
  techStack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  // ── Featured Projects (hackathon winners) ─────────────────────────
  {
    slug: "edfs",
    title: "Real-Time Electricity Demand Forecasting",
    description:
      "Problem: Delhi's power grid lacked accurate short-term demand forecasting. Solution: Built SARIMAX + Transformer hybrid model on 12+ years of historical data enriched with real-time weather. Impact: 98%+ accuracy at 5-minute granularity, deployed on GCP with auto-retraining pipeline.",
    category: "ai-ml",
    featured: true,
    hackathonWin: "SIH'24 Grand Finale Winner",
    status: "completed",
    dateRange: "Sep 2024 — Dec 2024",
    metrics: [
      { label: "accuracy", value: "98%+" },
      { label: "granularity", value: "5min" },
      { label: "data span", value: "12yr" },
    ],
    techStack: ["SARIMAX", "Transformers", "GCP", "Docker", "Firebase", "React", "Chart.js"],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24/Gridalytics" },
    ],
  },
  {
    slug: "face-liveness",
    title: "Face Liveness Detection System",
    description:
      "Problem: Facial recognition systems are vulnerable to spoofing attacks (photos, videos, masks). Solution: Custom neural network with 477 facial landmarks + mathematical formulae for dynamic response-based liveness. Impact: 99% accuracy at <200ms latency, optimized for low-resource devices — applicable to KYC, banking, proctoring.",
    category: "cv",
    featured: true,
    hackathonWin: "RACKATHON 2025 Winner",
    status: "completed",
    dateRange: "Sep 2024 — Mar 2025",
    metrics: [
      { label: "accuracy", value: "99%" },
      { label: "latency", value: "<200ms" },
      { label: "landmarks", value: "477" },
    ],
    techStack: ["TensorFlow", "OpenCV", "MediaPipe", "Flask", "Docker", "scikit-learn"],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24" },
    ],
  },
  {
    slug: "scale-ai",
    title: "Enterprise AI/ML Solution Suite",
    description:
      "Problem: Real industry datasets with limited availability and high-performance constraints. Solution: End-to-end ML pipelines with forecasting, anomaly detection, and optimization on actual enterprise data. Impact: Won @scale AI Hackathon — evaluated by Findability Sciences / NSBT industry experts.",
    category: "ai-ml",
    featured: true,
    hackathonWin: "@scale 2026 Winner",
    status: "completed",
    dateRange: "Mar 2026",
    metrics: [],
    techStack: ["Python", "ML", "EDA", "Feature Engineering", "React", "FastAPI"],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24/Scale_AI_Webapp" },
    ],
  },

  // ── Standard Projects ─────────────────────────────────────────────
  {
    slug: "satsage",
    title: "SatSage — AI Satellite Data Query Assistant",
    description:
      "Problem: ISRO's MOSDAC satellite data portal is difficult to query without domain expertise. Solution: Hybrid Knowledge Graph (Neo4j) + RAG architecture with FAISS vector search, fine-tuned BERT classifier (0.92 F1), and Groq LLM with streaming responses. Impact: 828 indexed documents across 12 satellites, 154 data products, geospatial mapping, and a 38-test evaluation suite.",
    category: "llm-rag",
    featured: false,
    status: "active",
    dateRange: "Jul 2025 — Present",
    metrics: [
      { label: "documents", value: "828" },
      { label: "BERT F1", value: "0.92" },
      { label: "satellites", value: "12" },
    ],
    techStack: ["FastAPI", "Neo4j", "FAISS", "React", "TypeScript", "spaCy", "HuggingFace", "Groq"],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24/SatSage" },
    ],
  },
  {
    slug: "terrabyte",
    title: "TerraByte — AI + IoT Agriculture Platform",
    description:
      "Problem: Farmers lack data-driven tools for crop planning, irrigation, and disease detection. Solution: Unified platform with 8 sensor types, 38-class disease detection (94% accuracy), and smart irrigation. Impact: Potentially 30% yield increase and 40% water reduction.",
    category: "iot",
    featured: false,
    status: "active",
    dateRange: "May 2025 — Present",
    metrics: [
      { label: "sensor types", value: "8" },
      { label: "diseases", value: "38" },
      { label: "accuracy", value: "94%" },
    ],
    techStack: ["PyTorch", "Raspberry Pi", "Arduino", "React", "Flask", "Firebase"],
    links: [],
  },
  {
    slug: "sldts",
    title: "SLDTS — Sign Language Translation",
    description:
      "Problem: 1.8M+ deaf individuals in India face communication barriers. Solution: Real-time ISL sign → text/speech and speech → sign translation using MediaPipe + LSTM/Random Forest hybrid. Impact: 88% accuracy across 35 signs at <100ms latency.",
    category: "cv",
    featured: false,
    status: "active",
    dateRange: "Feb 2025 — Present",
    metrics: [
      { label: "accuracy", value: "88%" },
      { label: "signs", value: "35" },
      { label: "latency", value: "<100ms" },
    ],
    techStack: ["MediaPipe", "LSTM", "Flask", "JavaScript", "scikit-learn"],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24/SLDTS__Sign-Language-Detection-and-Translation" },
    ],
  },
  {
    slug: "ayuunity",
    title: "AyuUnity — Digital Health Ecosystem",
    description:
      "Problem: Healthcare in India is fragmented — patients juggle multiple apps and portals. Solution: AI-driven unified platform with voice prescriptions, diagnostics, and ABDM/eSanjeevani integration. Impact: 6 dashboards, 4 AI models, 5+ integrations including WhatsApp Cloud API.",
    category: "healthtech",
    featured: false,
    status: "completed",
    dateRange: "Apr 2025",
    metrics: [
      { label: "dashboards", value: "6" },
      { label: "AI models", value: "4" },
      { label: "integrations", value: "5+" },
    ],
    techStack: ["React", "Flask", "TensorFlow", "PyTorch", "PostgreSQL", "MongoDB"],
    links: [],
  },
  {
    slug: "crowdshield",
    title: "CrowdShield — AI Crowd Monitoring",
    description:
      "Problem: Large gatherings lack real-time crowd density monitoring for safety. Solution: YOLOv8-based crowd detection with WebSocket live feeds, MQTT alerts, and geographic routing for emergency response. Impact: Real-time monitoring with automated safety alerts.",
    category: "cv",
    featured: false,
    status: "completed",
    dateRange: "Aug 2025",
    metrics: [],
    techStack: ["YOLOv8", "WebSocket", "MQTT", "FastAPI", "React", "TypeScript"],
    links: [
      { label: "GitHub", url: "https://github.com/rupeshbharambe24/CrowdShield--AI-Based-Crowd-and-Disaster-Management" },
    ],
  },
  {
    slug: "ewise",
    title: "E-Wise — E-Waste Detection + Recycling",
    description:
      "Problem: E-waste recycling guidance is inaccessible, especially in regional languages. Solution: YOLO-based detection across 25 e-waste classes with multilingual chatbot (10+ languages) and TTS recommendations. Impact: 92% mAP, accessible recycling guidance across India.",
    category: "cv",
    featured: false,
    status: "completed",
    dateRange: "Apr 2025",
    metrics: [
      { label: "classes", value: "25" },
      { label: "languages", value: "10+" },
      { label: "mAP", value: "92%" },
    ],
    techStack: ["YOLOv8", "Gemini API", "React", "Flask", "Tailwind"],
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const standardProjects = projects.filter((p) => !p.featured);

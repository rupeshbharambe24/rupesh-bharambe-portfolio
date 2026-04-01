export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "AI & ML",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "OpenCV" },
      { name: "LangChain" },
      { name: "Hugging Face" },
      { name: "ONNX" },
      { name: "MLflow" },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Jupyter" },
      { name: "SQL" },
      { name: "Apache Spark" },
      { name: "Power BI" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML/CSS" },
      { name: "TailwindCSS" },
      { name: "Streamlit" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Vercel" },
      { name: "GitHub Actions" },
      { name: "Nginx" },
      { name: "Linux" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Arduino" },
      { name: "Raspberry Pi" },
      { name: "MQTT" },
      { name: "PyQt" },
    ],
  },
];

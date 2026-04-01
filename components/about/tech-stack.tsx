"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiHuggingface, SiMlflow,
  SiPandas, SiNumpy, SiJupyter, SiApachespark,
  SiPython, SiFastapi, SiFlask, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiRedis,
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiHtml5, SiJavascript, SiStreamlit,
  SiDocker, SiKubernetes, SiGooglecloud, SiVercel, SiNginx, SiLinux,
  SiQt, SiMqtt,
  SiGit, SiPostman, SiFigma, SiArduino, SiRaspberrypi, SiGithubactions,
} from "react-icons/si";
import { Cloud, Code2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { skills, type SkillCategory } from "@/data/skills";

type IconEntry = { icon: React.ElementType; color: string };

const iconMap: Record<string, IconEntry> = {
  // AI & ML
  TensorFlow:      { icon: SiTensorflow,      color: "#FF6F00" },
  PyTorch:         { icon: SiPytorch,         color: "#EE4C2C" },
  "Scikit-learn":  { icon: SiScikitlearn,     color: "#F7931E" },
  OpenCV:          { icon: SiOpencv,          color: "#5C3EE8" },
  "Hugging Face":  { icon: SiHuggingface,     color: "#FFD21E" },
  MLflow:          { icon: SiMlflow,          color: "#0194E2" },
  // Data Science
  Pandas:          { icon: SiPandas,          color: "#150458" },
  NumPy:           { icon: SiNumpy,           color: "#013243" },
  Jupyter:         { icon: SiJupyter,         color: "#F37626" },
  "Apache Spark":  { icon: SiApachespark,     color: "#E25A1C" },
  // Backend
  Python:          { icon: SiPython,          color: "#3776AB" },
  FastAPI:         { icon: SiFastapi,         color: "#009688" },
  Flask:           { icon: SiFlask,           color: "#000000" },
  "Node.js":       { icon: SiNodedotjs,       color: "#339933" },
  Express:         { icon: SiExpress,         color: "#000000" },
  PostgreSQL:      { icon: SiPostgresql,      color: "#4169E1" },
  MongoDB:         { icon: SiMongodb,         color: "#47A248" },
  Redis:           { icon: SiRedis,           color: "#DC382D" },
  // Frontend
  React:           { icon: SiReact,           color: "#61DAFB" },
  "Next.js":       { icon: SiNextdotjs,       color: "#000000" },
  TypeScript:      { icon: SiTypescript,      color: "#3178C6" },
  TailwindCSS:     { icon: SiTailwindcss,     color: "#06B6D4" },
  "Framer Motion": { icon: SiFramer,          color: "#0055FF" },
  "HTML/CSS":      { icon: SiHtml5,           color: "#E34F26" },
  JavaScript:      { icon: SiJavascript,      color: "#F7DF1E" },
  Streamlit:       { icon: SiStreamlit,       color: "#FF4B4B" },
  PyQt:            { icon: SiQt,              color: "#41CD52" },
  MQTT:            { icon: SiMqtt,           color: "#660066" },
  // Cloud & DevOps
  Docker:          { icon: SiDocker,          color: "#2496ED" },
  Kubernetes:      { icon: SiKubernetes,      color: "#326CE5" },
  AWS:             { icon: Cloud,              color: "#FF9900" },
  GCP:             { icon: SiGooglecloud,     color: "#4285F4" },
  Vercel:          { icon: SiVercel,          color: "#000000" },
  "GitHub Actions":{ icon: SiGithubactions,   color: "#2088FF" },
  Nginx:           { icon: SiNginx,           color: "#009639" },
  Linux:           { icon: SiLinux,           color: "#FCC624" },
  // Tools
  Git:             { icon: SiGit,             color: "#F05032" },
  "VS Code":       { icon: Code2,             color: "#007ACC" },
  Postman:         { icon: SiPostman,         color: "#FF6C37" },
  Figma:           { icon: SiFigma,           color: "#F24E1E" },
  Arduino:         { icon: SiArduino,         color: "#00979D" },
  "Raspberry Pi":  { icon: SiRaspberrypi,     color: "#A22846" },
};

const categoryColors: Record<string, string> = {
  "AI & ML":       "249 115 22",
  "Data Science":  "59 130 246",
  "Backend":       "34 197 94",
  "Frontend":      "139 92 246",
  "Cloud & DevOps":"34 211 238",
  "Tools":         "234 179 8",
};

export function TechStack() {
  const [active, setActive] = useState<string>("all");

  const categories = ["all", ...skills.map((c) => c.category)];

  const filtered: SkillCategory[] =
    active === "all"
      ? skills
      : skills.filter((c) => c.category === active);

  return (
    <section>
      <ScrollReveal>
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">
            Tech Stack
          </h2>
        </div>
        <p className="mb-6 font-mono text-xs text-theme-muted">
          // tools &amp; technologies I work with
        </p>
      </ScrollReveal>

      {/* Category filter */}
      <ScrollReveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = active === cat;
            const color =
              cat === "all" ? "var(--primary)" : categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
                  isActive
                    ? "text-white"
                    : "text-theme-muted hover:text-[rgb(var(--foreground))]"
                }`}
                style={
                  isActive
                    ? { backgroundColor: `rgb(${color})` }
                    : {
                        backgroundColor: `rgb(${color} / 0.08)`,
                        border: `1px solid rgb(${color} / 0.15)`,
                      }
                }
              >
                {cat === "all"
                  ? `All (${skills.reduce((s, c) => s + c.skills.length, 0)})`
                  : cat}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Skill grids per category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-8"
        >
          {filtered.map((cat) => {
            const catColor = categoryColors[cat.category] ?? "var(--primary)";
            return (
              <div key={cat.category}>
                {active === "all" && (
                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: `rgb(${catColor})` }}
                  >
                    {cat.category}
                  </p>
                )}
                <StaggerContainer className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                  {cat.skills.map((skill) => {
                    const entry = iconMap[skill.name];
                    const Icon = entry?.icon ?? Code2;
                    const brandColor = entry?.color ?? `rgb(${catColor})`;
                    return (
                      <StaggerItem key={skill.name}>
                        <motion.div
                          className="group flex flex-col items-center gap-2 rounded-xl border bg-theme-card px-2 py-3 text-center transition-all"
                          style={{ borderColor: `rgb(${catColor} / 0.15)` }}
                          whileHover={{
                            scale: 1.06,
                            borderColor: `${brandColor}50`,
                            boxShadow: `0 0 16px ${brandColor}30`,
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <Icon
                            size={28}
                            style={{ color: brandColor }}
                            className="transition-transform duration-200 group-hover:scale-110"
                          />
                          <span className="text-[10px] font-medium leading-tight text-theme-muted group-hover:text-[rgb(var(--foreground))]">
                            {skill.name}
                          </span>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

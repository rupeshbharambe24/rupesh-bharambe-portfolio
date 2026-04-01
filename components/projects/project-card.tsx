"use client";

import { motion } from "framer-motion";
import { categoryLabels, categoryColors, type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const catColor = categoryColors[project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex h-full flex-col rounded-xl border border-theme bg-theme-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={
        {
          "--card-accent": catColor,
        } as React.CSSProperties
      }
      whileHover={{
        borderColor: `rgb(${catColor} / 0.5)`,
        boxShadow: `0 8px 30px rgb(${catColor} / 0.1)`,
      }}
    >
      {/* Top: badge + status */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-medium"
          style={{
            color: `rgb(${catColor})`,
            backgroundColor: `rgb(${catColor} / 0.12)`,
          }}
        >
          {categoryLabels[project.category]}
        </span>

        {project.status === "active" && (
          <span className="flex items-center gap-1 text-xs text-green-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
            Active
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-theme-fg transition-colors group-hover:text-theme-primary">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-theme-muted">
        {project.description}
      </p>

      {/* Metrics (first 2) */}
      {project.metrics.length > 0 && (
        <div className="mb-4 flex gap-3">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <span
                className="text-sm font-extrabold"
                style={{ color: `rgb(${catColor})` }}
              >
                {metric.value}
              </span>
              <span className="ml-1 font-mono text-[8px] text-theme-muted">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tech chips (first 3) */}
      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-[rgb(var(--theme-muted))] px-2 py-0.5 font-mono text-[11px] text-theme-muted"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="rounded-md bg-[rgb(var(--theme-muted))] px-2 py-0.5 font-mono text-[11px] text-theme-muted">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  );
}

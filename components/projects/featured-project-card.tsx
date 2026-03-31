"use client";

import { motion } from "framer-motion";
import { Trophy, Github, ExternalLink } from "lucide-react";
import {
  type Project,
  categoryLabels,
  categoryColors,
} from "@/data/projects";

const slugGradients: Record<string, string> = {
  "edfs-sih24":
    "linear-gradient(135deg, rgb(249 115 22 / 0.15), rgb(234 179 8 / 0.08))",
  "face-liveness-rackathon":
    "linear-gradient(135deg, rgb(236 72 153 / 0.15), rgb(244 114 182 / 0.08))",
  "at-scale-ai":
    "linear-gradient(135deg, rgb(139 92 246 / 0.15), rgb(168 85 247 / 0.08))",
};

const slugAccents: Record<string, string> = {
  "edfs-sih24": "249 115 22",
  "face-liveness-rackathon": "236 72 153",
  "at-scale-ai": "139 92 246",
};

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const gradient = slugGradients[project.slug] ?? slugGradients["at-scale-ai"];
  const accent = slugAccents[project.slug] ?? "139 92 246";
  const catColor = categoryColors[project.category];

  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-theme bg-theme-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left panel */}
        <div
          className="flex flex-col items-center justify-center gap-3 px-6 py-8 md:w-[260px] md:shrink-0"
          style={{ background: gradient }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: `rgb(${accent} / 0.2)` }}
          >
            <Trophy size={20} style={{ color: `rgb(${accent})` }} />
          </span>
          <h3
            className="text-center text-xl font-black leading-tight"
            style={{
              background: `linear-gradient(135deg, rgb(${accent}), rgb(${accent} / 0.7))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {project.title.split("—")[0].trim()}
          </h3>
          {project.title.includes("—") && (
            <p className="text-center text-xs text-theme-muted">
              {project.title.split("—")[1].trim()}
            </p>
          )}
          {project.hackathonWin && (
            <span
              className="mt-1 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                color: `rgb(${accent})`,
                backgroundColor: `rgb(${accent} / 0.15)`,
              }}
            >
              {project.hackathonWin}
            </span>
          )}
        </div>

        {/* Right panel */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Top row: category + dates */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                color: `rgb(${catColor})`,
                backgroundColor: `rgb(${catColor} / 0.12)`,
              }}
            >
              {categoryLabels[project.category]}
            </span>
            <span className="font-mono text-xs text-theme-muted">
              {project.dateRange}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-theme-muted">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-lg px-3 py-1.5"
                  style={{ backgroundColor: `rgb(${accent} / 0.08)` }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: `rgb(${accent})` }}
                  >
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[rgb(var(--theme-muted))] px-2 py-0.5 font-mono text-[11px] text-theme-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="mt-auto flex gap-3 pt-1">
              {project.links.map((link) => {
                const Icon = link.label === "GitHub" ? Github : ExternalLink;
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-theme-muted transition-colors hover:text-theme-primary"
                  >
                    <Icon size={14} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

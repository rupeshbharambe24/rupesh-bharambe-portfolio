"use client";

import { motion } from "framer-motion";
import { categoryLabels, type ProjectCategory } from "@/data/projects";

const filterKeys: Array<"all" | ProjectCategory> = [
  "all",
  "ai-ml",
  "cv",
  "llm-rag",
  "iot",
  "healthtech",
  "fullstack",
];

const filterLabels: Record<string, string> = {
  all: "All",
  ...categoryLabels,
};

interface ProjectFiltersProps {
  active: string;
  onChange: (filter: string) => void;
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filterKeys.map((key) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            style={{
              color: isActive
                ? "rgb(var(--theme-foreground))"
                : "rgb(var(--theme-muted-foreground))",
            }}
          >
            {isActive && (
              <motion.div
                layoutId="active-filter"
                className="gradient-primary absolute inset-0 rounded-full"
                style={{ opacity: 0.15 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{filterLabels[key]}</span>
          </button>
        );
      })}
    </div>
  );
}

"use client";

import Link from "next/link";
import { featuredProjects, categoryLabels, categoryColors } from "@/data/projects";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/scroll-reveal";

const displayProjects = featuredProjects.slice(0, 3);

export function FeaturedProjectsHome() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-theme-fg md:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-1 font-mono text-sm text-theme-muted">
              {"// hand-picked highlights"}
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-theme-primary transition-colors hover:text-theme-secondary"
          >
            View all &rarr;
          </Link>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => {
            const catColor = categoryColors[project.category];
            return (
              <StaggerItem key={project.slug}>
                <div className="group flex h-full flex-col rounded-xl border border-theme bg-theme-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--theme-primary))/0.5] hover:shadow-lg hover:shadow-[rgb(var(--theme-primary))/0.08]">
                  {/* Badge + Year */}
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
                    <span className="font-mono text-xs text-theme-muted">
                      {project.dateRange.split("–")[0].trim().split(" ").pop()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-theme-fg group-hover:text-theme-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-theme-muted">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[rgb(var(--theme-muted))] px-2 py-0.5 text-[11px] font-mono text-theme-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="rounded-md bg-[rgb(var(--theme-muted))] px-2 py-0.5 text-[11px] font-mono text-theme-muted">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

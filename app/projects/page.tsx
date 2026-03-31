"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilters } from "@/components/projects/project-filters";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  featuredProjects,
  standardProjects,
  type ProjectCategory,
} from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredFeatured =
    filter === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === (filter as ProjectCategory));

  const filteredStandard =
    filter === "all"
      ? standardProjects
      : standardProjects.filter((p) => p.category === (filter as ProjectCategory));

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="space-y-12">
        <PageHeader comment="projects" title="Things I've Built" />

        {/* Featured Section */}
        {filteredFeatured.length > 0 && (
          <section className="space-y-6">
            <ScrollReveal>
              <p className="font-mono text-sm text-theme-primary">
                {"// "}featured &amp; award-winning
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {filteredFeatured.map((project, i) => (
                <FeaturedProjectCard
                  key={project.slug}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Projects Section */}
        <section className="space-y-6">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="h-px w-full bg-[rgb(var(--theme-card-border))]" />
              <p className="font-mono text-sm text-theme-primary">
                {"// "}all projects
              </p>
            </div>
          </ScrollReveal>

          <ProjectFilters active={filter} onChange={setFilter} />

          <AnimatePresence mode="popLayout">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStandard.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </AnimatePresence>

          {filteredStandard.length === 0 && filteredFeatured.length === 0 && (
            <p className="py-12 text-center text-sm text-theme-muted">
              No projects found for this category.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

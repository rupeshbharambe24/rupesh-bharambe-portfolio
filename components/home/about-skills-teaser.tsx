"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const topSkills = skills.flatMap((cat) => cat.skills).slice(0, 6);
const totalSkills = skills.reduce((sum, cat) => sum + cat.skills.length, 0);

export function AboutSkillsTeaser() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        {/* Left column — About */}
        <ScrollReveal direction="left">
          <div>
            <h2 className="mb-1 text-2xl font-bold text-theme-fg md:text-3xl">
              About Me
            </h2>
            <p className="mb-4 font-mono text-sm text-theme-muted">
              {"// quick intro"}
            </p>
            <p className="mb-6 leading-relaxed text-theme-muted text-sm md:text-base">
              {profile.bio[0]}
            </p>
            <Link
              href="/about"
              className="text-sm font-medium text-theme-primary transition-colors hover:text-theme-secondary"
            >
              Read more &rarr;
            </Link>
          </div>
        </ScrollReveal>

        {/* Right column — Skills */}
        <ScrollReveal direction="right">
          <div>
            <h2 className="mb-1 text-2xl font-bold text-theme-fg md:text-3xl">
              Top Skills
            </h2>
            <p className="mb-4 font-mono text-sm text-theme-muted">
              {"// tech I work with"}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-lg border border-theme bg-[rgb(var(--theme-muted))] px-3 py-1.5 text-xs font-medium text-theme-fg transition-colors hover:border-[rgb(var(--theme-primary))/0.5]"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="text-sm font-medium text-theme-primary transition-colors hover:text-theme-secondary"
            >
              +{totalSkills - 6} more &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const stats = [
  { value: 5, suffix: "", label: "hackathons.won" },
  { value: 15, suffix: "+", label: "finalist.finishes" },
  { value: 9, suffix: "+", label: "projects.shipped" },
  { value: 2, suffix: "", label: "internships" },
];

export function StatsBar() {
  return (
    <section className="px-6 pb-16">
      <ScrollReveal>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-0 rounded-xl border border-theme bg-theme-card px-4 py-6 md:py-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div className="mx-4 hidden h-10 w-px bg-[rgb(var(--theme-card-border))] sm:block md:mx-6" />
              )}
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="px-4 py-2 text-center sm:px-2"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

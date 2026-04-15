"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const stats = [
  { value: 6, label: "hackathons.won", color: "249 115 22" },
  { value: 15, suffix: "+", label: "finalist.finishes", color: "139 92 246" },
  { value: 1, label: "international", color: "34 211 238" },
  { value: 7, label: "certifications", color: "236 72 153" },
];

export function StatsSummary() {
  return (
    <ScrollReveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border p-6 text-center"
            style={{
              borderColor: `rgb(${stat.color} / 0.2)`,
              background: `linear-gradient(135deg, rgb(${stat.color} / 0.08), transparent)`,
            }}
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="text-center"
            />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

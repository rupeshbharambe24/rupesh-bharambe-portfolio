"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { experience } from "@/data/experience";

const dotColors: Record<string, string> = {
  current: "rgb(34 197 94)",
  completed: "rgb(var(--theme-muted-foreground))",
};

export function ExperienceTimeline() {
  return (
    <ScrollReveal>
      <div className="space-y-4">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <Briefcase size={22} className="text-theme-primary" />
          <h2 className="text-xl font-bold text-theme-fg">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 border-l-2 border-theme pl-8">
          {/* Animated gradient line */}
          <motion.div
            className="gradient-primary absolute left-[-2px] top-0 w-[2px] rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Dot marker */}
                <span
                  className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-theme"
                  style={{ backgroundColor: dotColors[exp.status] }}
                />

                {/* Card */}
                <div className="rounded-xl border border-theme bg-theme-card p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-theme-fg">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-theme-muted">{exp.company}</p>
                    </div>

                    <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
                      {/* Status badge */}
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          exp.status === "current"
                            ? "bg-green-500/15 text-green-400"
                            : "bg-gray-500/15 text-gray-400"
                        }`}
                      >
                        <span
                          className={`inline-block h-1.5 w-1.5 rounded-full ${
                            exp.status === "current"
                              ? "bg-green-400"
                              : "bg-gray-400"
                          }`}
                        />
                        {exp.status === "current" ? "Current" : "Completed"}
                      </span>

                      <p className="text-xs text-theme-muted">
                        {exp.startDate} &ndash; {exp.endDate}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-theme-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "rgb(var(--theme-primary))" }} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

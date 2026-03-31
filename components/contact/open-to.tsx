"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { profile } from "@/data/profile";

const colorMap: Record<string, { bg: string; text: string }> = {
  green: { bg: "rgba(34, 197, 94, 0.15)", text: "rgb(34 197 94)" },
  purple: { bg: "rgba(168, 85, 247, 0.15)", text: "rgb(168 85 247)" },
  cyan: { bg: "rgba(6, 182, 212, 0.15)", text: "rgb(6 182 212)" },
  orange: { bg: "rgba(249, 115, 22, 0.15)", text: "rgb(249 115 22)" },
};

export function OpenTo() {
  return (
    <ScrollReveal>
      <div className="relative rounded-xl border border-theme bg-theme-card p-6">
        {/* Gradient border overlay */}
        <div className="gradient-primary pointer-events-none absolute inset-0 rounded-xl opacity-20" />
        <div className="absolute inset-[1px] rounded-[11px] bg-theme-card" />

        <div className="relative">
          <h2 className="mb-4 text-lg font-bold text-theme-fg">
            Currently Open To
          </h2>

          <div className="flex flex-wrap gap-2">
            {profile.openTo.map((item) => {
              const colors = colorMap[item.color] ?? colorMap.green;
              return (
                <motion.span
                  key={item.label}
                  className="rounded-full px-3 py-1.5 text-sm font-medium"
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {item.label}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

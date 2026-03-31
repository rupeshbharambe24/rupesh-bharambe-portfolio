"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { profile } from "@/data/profile";

const roleColors = [
  "rgb(var(--theme-primary))",
  "rgb(var(--theme-secondary))",
  "rgb(168 85 247)",
];

export function Bio() {
  return (
    <ScrollReveal>
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Photo placeholder */}
        <motion.div
          className="h-40 w-36 shrink-0 self-center overflow-hidden rounded-xl border-2 border-theme md:self-start"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src="/images/profile.png"
            alt="Rupesh Bharambe"
            width={144}
            height={160}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Bio text */}
        <div className="space-y-4">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-theme-muted">
              {paragraph}
            </p>
          ))}

          {/* Role badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.roles.map((role, i) => (
              <motion.span
                key={role}
                className="rounded-full px-3 py-1 text-sm font-medium text-white"
                style={{ backgroundColor: roleColors[i % roleColors.length] }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

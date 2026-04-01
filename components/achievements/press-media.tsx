"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Newspaper } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import {
  pressItems,
  pressTagColors,
  pressTagLabels,
  type PressEventTag,
} from "@/data/press";

const filterTags: ("all" | PressEventTag)[] = [
  "all",
  "sih2024",
  "avishkar",
  "orchathon",
  "rackathon",
  "scale-ai",
];

export function PressMedia() {
  const [filter, setFilter] = useState<"all" | PressEventTag>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "all" ? pressItems : pressItems.filter((p) => p.tag === filter);

  return (
    <section>
      <ScrollReveal>
        <div className="mb-2 flex items-center gap-2">
          <Newspaper size={22} className="text-theme-primary" />
          <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">
            Press &amp; Media
          </h2>
        </div>
        <p className="mb-6 font-mono text-xs text-theme-muted">
          // featured in {pressItems.length} newspaper articles across{" "}
          {new Set(pressItems.map((p) => p.publication)).size} publications
        </p>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {filterTags.map((tag) => {
            const isActive = filter === tag;
            const color =
              tag === "all" ? "var(--primary)" : pressTagColors[tag];
            return (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
                  isActive
                    ? "text-white"
                    : "text-theme-muted hover:text-[rgb(var(--foreground))]"
                }`}
                style={
                  isActive
                    ? { backgroundColor: `rgb(${color})` }
                    : {
                        backgroundColor: `rgb(${color} / 0.08)`,
                        border: `1px solid rgb(${color} / 0.15)`,
                      }
                }
              >
                {tag === "all"
                  ? `All (${pressItems.length})`
                  : pressTagLabels[tag]}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {filtered.map((item) => {
              const color = pressTagColors[item.tag];
              return (
                <StaggerItem key={item.id}>
                  <motion.div
                    className="group cursor-pointer overflow-hidden rounded-xl border bg-theme-card transition-all"
                    style={{ borderColor: `rgb(${color} / 0.2)` }}
                    whileHover={{
                      scale: 1.03,
                      borderColor: `rgb(${color} / 0.5)`,
                      boxShadow: `0 0 20px rgb(${color} / 0.15)`,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    onClick={() => setLightbox(item.image)}
                  >
                    {/* Clipping preview */}
                    <div className="relative h-44 w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={item.image}
                        alt={`${item.publication} — ${item.event}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* Tag badge */}
                      <span
                        className="absolute right-2 top-2 rounded px-1.5 py-0.5 text-[9px] font-semibold text-white"
                        style={{ backgroundColor: `rgb(${color} / 0.85)` }}
                      >
                        {pressTagLabels[item.tag]}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="px-3 py-2.5">
                      <p
                        className="text-xs font-bold"
                        style={{ color: `rgb(${color})` }}
                      >
                        {item.publication}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-theme-muted">
                        {item.event}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm hover:bg-black/80"
              >
                <X size={18} />
              </button>
              <Image
                src={lightbox}
                alt="Newspaper clipping"
                width={700}
                height={900}
                className="max-h-[90vh] w-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

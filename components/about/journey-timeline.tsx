"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  timelineEvents,
  eventColors,
  eventIcons,
  type TimelineEventType,
} from "@/data/timeline";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const typeLabels: Record<TimelineEventType, string> = {
  education: "Education",
  internship: "Internship",
  "hackathon-win": "Hackathon Win",
  achievement: "Achievement",
  leadership: "Leadership",
  project: "Project",
};

export function JourneyTimeline() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [filter, setFilter] = useState<TimelineEventType | "all">("all");

  const filtered =
    filter === "all"
      ? timelineEvents
      : timelineEvents.filter((e) => e.type === filter);

  const filterTypes: (TimelineEventType | "all")[] = [
    "all",
    "hackathon-win",
    "internship",
    "education",
    "leadership",
    "achievement",
    "project",
  ];

  return (
    <section>
      <ScrollReveal>
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl">🛤️</span>
          <h2 className="text-lg font-bold text-[rgb(var(--foreground))]">
            My Journey
          </h2>
        </div>
        <p className="mb-6 font-mono text-xs text-theme-muted">
          // education → internships → wins → leadership
        </p>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {filterTypes.map((t) => {
            const isActive = filter === t;
            const color = t === "all" ? "var(--primary)" : eventColors[t];
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
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
                {t === "all"
                  ? `All (${timelineEvents.length})`
                  : `${eventIcons[t]} ${typeLabels[t]}`}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative">
        {/* Center line (desktop) / left line (mobile) */}
        <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary)/.2)] md:left-1/2 md:-translate-x-px" />

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((event, i) => {
              const color = eventColors[event.type];
              const icon = eventIcons[event.type];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={event.sortKey + event.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`relative flex items-start gap-4 pl-14 md:pl-0 ${
                    isEven
                      ? "md:flex-row md:pr-[calc(50%+24px)]"
                      : "md:flex-row-reverse md:pl-[calc(50%+24px)]"
                  }`}
                >
                  {/* Dot on the line */}
                  <motion.div
                    className="absolute left-[2px] top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg shadow-lg md:left-1/2 md:-translate-x-1/2"
                    style={{
                      backgroundColor: `rgb(var(--card))`,
                      borderColor: `rgb(${color})`,
                      boxShadow: `0 0 12px rgb(${color} / 0.3), 0 0 24px rgb(${color} / 0.15)`,
                    }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  >
                    {icon}
                  </motion.div>

                  {/* Card */}
                  <div
                    className="flex-1 overflow-hidden rounded-xl border bg-theme-card transition-all hover:border-[rgb(var(--primary)/.3)]"
                    style={{ borderColor: `rgb(${color} / 0.2)` }}
                  >
                    {/* Photo if available */}
                    {event.photo && (
                      <div
                        className="relative h-32 w-full cursor-pointer overflow-hidden"
                        onClick={() => setLightbox(event.photo!)}
                      >
                        <Image
                          src={event.photo}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--card))] via-transparent to-transparent" />
                      </div>
                    )}

                    <div className="p-4">
                      {/* Date + type badge */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-theme-muted">
                          {event.date}
                        </span>
                        <span
                          className="rounded px-1.5 py-0.5 text-[9px] font-medium"
                          style={{
                            color: `rgb(${color})`,
                            backgroundColor: `rgb(${color} / 0.1)`,
                          }}
                        >
                          {typeLabels[event.type]}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-[rgb(var(--foreground))]">
                        {event.title}
                      </h3>
                      <p
                        className="mt-0.5 text-xs font-medium"
                        style={{ color: `rgb(${color})` }}
                      >
                        {event.subtitle}
                      </p>
                      {event.description && (
                        <p className="mt-1.5 text-xs leading-relaxed text-theme-muted">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[85vh] max-w-4xl"
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
                alt="Timeline event"
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

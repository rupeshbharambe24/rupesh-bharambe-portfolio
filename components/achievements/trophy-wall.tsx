"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Newspaper, Camera } from "lucide-react";
import { hackathonWins } from "@/data/hackathons";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/scroll-reveal";

export function TrophyWall() {
  const isOdd = hackathonWins.length % 2 !== 0;
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section>
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Hackathon Wins</h2>
        <span className="font-mono text-sm text-theme-muted">
          {"// the big ones"}
        </span>
      </div>

      <StaggerContainer className="grid gap-4 md:grid-cols-2">
        {hackathonWins.map((hack, idx) => {
          const isLast = idx === hackathonWins.length - 1;
          const spanFull = isOdd && isLast;

          return (
            <StaggerItem
              key={hack.name + hack.year}
              className={spanFull ? "md:col-span-2" : ""}
            >
              <div
                className="relative overflow-hidden rounded-xl border bg-theme-card"
                style={{
                  borderColor: `rgb(${hack.color} / 0.3)`,
                }}
              >
                {/* Photo section */}
                {hack.photo && (
                  <div
                    className="relative h-44 w-full cursor-pointer overflow-hidden"
                    onClick={() => setLightbox({ src: hack.photo!, alt: hack.name })}
                  >
                    <Image
                      src={hack.photo}
                      alt={`${hack.name} team photo`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--card))] via-transparent to-transparent" />
                    {/* Photo icon badge */}
                    <div className="absolute right-2 top-2 rounded-md bg-black/50 p-1.5 backdrop-blur-sm">
                      <Camera size={12} className="text-white" />
                    </div>
                  </div>
                )}

                <div className="relative space-y-2 p-5">
                  {/* Radial glow */}
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl"
                    style={{
                      background: `radial-gradient(circle, rgb(${hack.color}), transparent)`,
                    }}
                  />

                  <div className="relative space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🏆</span>
                      <h3 className="text-lg font-bold text-[rgb(var(--foreground))]">
                        {hack.name}
                      </h3>
                    </div>

                    <p
                      className="font-semibold"
                      style={{ color: `rgb(${hack.color})` }}
                    >
                      {hack.award}
                    </p>

                    <p className="text-sm text-theme-muted">{hack.description}</p>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 font-mono text-xs text-theme-muted">
                        <span>{hack.role}</span>
                        <span>&middot;</span>
                        <span>{hack.year}</span>
                      </div>

                      {/* News articles button */}
                      {hack.newsArticles && hack.newsArticles.length > 0 && (
                        <button
                          onClick={() =>
                            setLightbox({
                              src: hack.newsArticles![0],
                              alt: `${hack.name} news coverage`,
                            })
                          }
                          className="flex items-center gap-1.5 rounded-md border border-theme bg-[rgb(var(--background))] px-2 py-1 text-[10px] text-theme-muted transition-colors hover:border-[rgb(var(--primary)/.3)] hover:text-theme-primary"
                        >
                          <Newspaper size={10} />
                          News Coverage
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Lightbox modal */}
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
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <X size={18} />
              </button>
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { hackathonWins } from "@/data/hackathons";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/scroll-reveal";

export function TrophyWall() {
  const isOdd = hackathonWins.length % 2 !== 0;

  return (
    <section>
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold text-theme-fg">Hackathon Wins</h2>
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
                className="relative overflow-hidden rounded-xl border bg-theme-card p-6"
                style={{
                  borderColor: `rgb(${hack.color} / 0.3)`,
                }}
              >
                {/* Radial glow decoration */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl"
                  style={{
                    background: `radial-gradient(circle, rgb(${hack.color}), transparent)`,
                  }}
                />

                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <h3 className="text-lg font-bold text-theme-fg">
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

                  <div className="flex items-center gap-2 pt-1 font-mono text-xs text-theme-muted">
                    <span>{hack.role}</span>
                    <span>&middot;</span>
                    <span>{hack.year}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}

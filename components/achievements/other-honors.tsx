"use client";

import { Medal, Globe } from "lucide-react";
import { otherHonors } from "@/data/hackathons";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/scroll-reveal";

function getIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("international") || lower.includes("agri")) {
    return Globe;
  }
  return Medal;
}

export function OtherHonors() {
  return (
    <section>
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold text-theme-fg">Other Honors</h2>
        <span className="font-mono text-sm text-theme-muted">
          {"// finalists & awards"}
        </span>
      </div>

      <StaggerContainer className="space-y-3">
        {otherHonors.map((honor) => {
          const Icon = getIcon(honor.name);

          return (
            <StaggerItem key={honor.name + honor.year}>
              <div className="flex items-center justify-between rounded-lg border border-theme bg-theme-card px-4 py-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-theme-primary" />
                  <div>
                    <span className="font-bold text-theme-fg">
                      {honor.name}
                    </span>
                    <span className="ml-2 text-sm text-theme-muted">
                      {honor.award}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-sm text-theme-muted">
                  {honor.year}
                </span>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <p className="mt-4 text-center font-mono text-sm text-theme-muted">
        + 10 more national finalist appearances
      </p>
    </section>
  );
}

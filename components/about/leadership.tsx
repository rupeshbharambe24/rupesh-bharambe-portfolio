import { Target } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/scroll-reveal";
import { leadership } from "@/data/leadership";

export function Leadership() {
  return (
    <ScrollReveal>
      <div className="space-y-4">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <Target size={22} className="text-theme-primary" />
          <h2 className="text-xl font-bold text-theme-fg">Leadership</h2>
        </div>

        {/* Cards grid */}
        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {leadership.map((role, i) => (
            <StaggerItem key={i}>
              <div className="h-full rounded-xl border border-theme bg-theme-card p-5">
                <h3 className="text-lg font-semibold text-theme-fg">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-theme-primary">
                  {role.organization}
                </p>
                <p className="mt-1 text-xs text-theme-muted">
                  {role.startDate} &ndash; {role.endDate}
                </p>
                {role.description && (
                  <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                    {role.description}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </ScrollReveal>
  );
}

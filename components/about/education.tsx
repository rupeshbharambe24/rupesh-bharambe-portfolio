import { GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { education } from "@/data/education";

export function Education() {
  const edu = education[0];

  return (
    <ScrollReveal>
      <div className="space-y-4">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <GraduationCap size={22} className="text-theme-primary" />
          <h2 className="text-xl font-bold text-theme-fg">Education</h2>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-theme bg-theme-card p-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            {/* Left */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-theme-fg">
                {edu.degree} in {edu.field}
              </h3>
              <p className="text-sm text-theme-muted">{edu.institution}</p>
            </div>

            {/* Right */}
            <div className="shrink-0 space-y-1 text-left sm:text-right">
              <p className="text-sm font-medium text-theme-primary">
                {edu.startDate} &ndash; {edu.endDate}
              </p>
              <p className="text-sm text-theme-muted">
                CGPA: <span className="font-semibold text-theme-fg">{edu.cgpa}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

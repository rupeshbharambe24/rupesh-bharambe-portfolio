"use client";

import { Cpu, Brain, Cloud, Sparkles, Shield, Send } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/scroll-reveal";

const iconMap: Record<string, typeof Cpu> = {
  gpu: Cpu,
  brain: Brain,
  cloud: Cloud,
  sparkles: Sparkles,
  shield: Shield,
  send: Send,
};

const categoryToIcon: Record<Certification["category"], string> = {
  "ai-ml": "brain",
  cloud: "cloud",
  security: "shield",
  api: "send",
};

function getIcon(category: Certification["category"]) {
  const key = categoryToIcon[category] ?? "sparkles";
  return iconMap[key] ?? Sparkles;
}

export function CertificationsGrid() {
  return (
    <section>
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold text-theme-fg">Certifications</h2>
        <span className="font-mono text-sm text-theme-muted">
          {"// verified credentials"}
        </span>
      </div>

      <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {certifications.map((cert) => {
          const Icon = getIcon(cert.category);

          return (
            <StaggerItem key={cert.title + cert.issuer}>
              <div className="flex flex-col items-center rounded-xl border border-theme bg-theme-card p-5 text-center">
                <Icon className="mb-3 h-8 w-8 text-theme-primary" />
                <h3 className="text-sm font-bold text-theme-fg">
                  {cert.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-theme-muted">
                  {cert.issuer}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}

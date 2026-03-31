"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { profile } from "@/data/profile";

const items = [
  {
    icon: Mail,
    label: "email",
    value: profile.email,
    color: "rgb(var(--theme-primary))",
  },
  {
    icon: Phone,
    label: "phone",
    value: profile.phone,
    color: "rgb(var(--theme-secondary))",
  },
  {
    icon: MapPin,
    label: "location",
    value: profile.location,
    color: "rgb(168 85 247)",
  },
];

export function QuickReach() {
  return (
    <ScrollReveal>
      <div className="rounded-xl border border-theme bg-theme-card p-6">
        <h2 className="mb-5 text-lg font-bold text-theme-fg">Quick Reach</h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              >
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: item.color, opacity: 0.15 }}
                />
                <item.icon
                  size={18}
                  className="relative"
                  style={{ color: item.color }}
                />
              </div>
              <div>
                <p className="font-mono text-xs text-theme-muted">
                  {item.label}
                </p>
                <p className="text-sm text-theme-fg">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

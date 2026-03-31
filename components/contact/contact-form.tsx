"use client";

import { Send } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function ContactForm() {
  return (
    <ScrollReveal>
      <div className="rounded-xl border border-theme bg-theme-card p-6">
        <h2 className="mb-6 text-lg font-bold text-theme-fg">
          Send a Message
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className="space-y-1.5">
            <label className="block font-mono text-xs text-theme-muted">
              name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-theme bg-[rgb(var(--theme-background))] px-4 py-2.5 text-sm text-theme-fg placeholder:text-theme-muted focus:border-[rgb(var(--theme-primary))] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block font-mono text-xs text-theme-muted">
              email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border border-theme bg-[rgb(var(--theme-background))] px-4 py-2.5 text-sm text-theme-fg placeholder:text-theme-muted focus:border-[rgb(var(--theme-primary))] focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label className="block font-mono text-xs text-theme-muted">
              subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full rounded-lg border border-theme bg-[rgb(var(--theme-background))] px-4 py-2.5 text-sm text-theme-fg placeholder:text-theme-muted focus:border-[rgb(var(--theme-primary))] focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="block font-mono text-xs text-theme-muted">
              message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-theme bg-[rgb(var(--theme-background))] px-4 py-2.5 text-sm text-theme-fg placeholder:text-theme-muted focus:border-[rgb(var(--theme-primary))] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <MagneticButton className="gradient-primary flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white">
            <Send size={16} />
            Send Message
          </MagneticButton>
        </form>
      </div>
    </ScrollReveal>
  );
}

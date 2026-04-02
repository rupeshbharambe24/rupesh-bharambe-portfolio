"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";

type FormStatus = "idle" | "loading" | "success" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <ScrollReveal>
      <div className="rounded-xl border border-theme bg-theme-card p-6">
        <h2 className="mb-6 text-lg font-bold text-theme-fg">
          Send a Message
        </h2>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <CheckCircle size={40} className="text-green-500" />
            <p className="text-lg font-semibold text-theme-fg">
              Message sent!
            </p>
            <p className="text-sm text-theme-muted">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm text-theme-primary hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Hidden fields for Web3Forms */}
            <input type="hidden" name="from_name" value="Portfolio Contact" />
            <input type="hidden" name="subject" value="New message from your portfolio" />

            {/* Name */}
            <div className="space-y-1.5">
              <label className="block font-mono text-xs text-theme-muted">
                name
              </label>
              <input
                type="text"
                name="name"
                required
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
                name="email"
                required
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
                name="subject"
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
                name="message"
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-theme bg-[rgb(var(--theme-background))] px-4 py-2.5 text-sm text-theme-fg placeholder:text-theme-muted focus:border-[rgb(var(--theme-primary))] focus:outline-none"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                <AlertCircle size={16} />
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <MagneticButton
              className="gradient-primary flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white disabled:opacity-50"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </MagneticButton>
          </form>
        )}
      </div>
    </ScrollReveal>
  );
}

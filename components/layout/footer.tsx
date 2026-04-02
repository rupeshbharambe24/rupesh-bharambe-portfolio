import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { SVGProps } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

/* ── Brand SVG icons (lucide-react v1.7+ removed brand icons) ── */

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  { href: profile.social.github, icon: GithubIcon, label: "GitHub" },
  { href: profile.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: profile.social.discord, icon: MessageCircle, label: "Discord" },
  { href: profile.social.instagram, icon: InstagramIcon, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-theme bg-theme-bg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* ── Top row ── */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Left */}
          <div>
            <p className="text-lg font-bold text-theme-fg">
              Rupesh Bharambe
            </p>
            <p className="mt-1 text-sm text-theme-muted">
              AI/ML Engineer &middot; Built with Next.js + Framer Motion
            </p>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-theme-muted transition-colors hover:text-theme-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Bottom row ── */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-theme pt-6 sm:flex-row">
          <p className="text-xs text-theme-muted">
            &copy; {new Date().getFullYear()} Rupesh Bharambe &middot; Built
            with{" "}
            <a
              href="https://claude.ai/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-primary transition-colors hover:underline"
            >
              Claude Code
            </a>
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg p-2 text-theme-muted transition-colors hover:text-theme-primary"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Palette } from "lucide-react";
import { navigation } from "@/data/navigation";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, themes } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  // Close theme dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    }
    if (themeOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [themeOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-theme bg-theme-bg/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="gradient-primary flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black text-white">
            RB
          </span>
          <span className="text-lg font-bold text-theme-fg">Rupesh</span>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-theme-primary"
                    : "text-theme-muted hover:text-theme-fg"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="navbar-active"
                    className="gradient-primary absolute inset-x-1 -bottom-[9px] h-[2px] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* ── Theme switcher (desktop) ── */}
          <div className="relative ml-3" ref={themeRef}>
            <button
              onClick={() => setThemeOpen((v) => !v)}
              className="flex items-center gap-2 rounded-lg border border-theme px-3 py-1.5 text-sm text-theme-muted transition-colors hover:text-theme-fg"
            >
              <Palette size={14} />
              <span>{theme.name}</span>
            </button>

            <AnimatePresence>
              {themeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 rounded-xl border border-theme bg-theme-card p-2 shadow-xl"
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        theme.id === t.id
                          ? "text-theme-primary bg-theme-bg"
                          : "text-theme-muted hover:text-theme-fg hover:bg-theme-bg"
                      }`}
                    >
                      <span
                        className="inline-block h-3 w-3 rounded-full shrink-0"
                        style={{
                          background: `rgb(${t.colors.primary})`,
                        }}
                      />
                      {t.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg p-2 text-theme-muted transition-colors hover:text-theme-fg md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-theme bg-theme-bg md:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-1 px-4 pb-4 pt-2">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "text-theme-primary bg-theme-card"
                        : "text-theme-muted hover:text-theme-fg hover:bg-theme-card"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* ── Theme grid (mobile) ── */}
              <div className="pt-3">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-theme-muted">
                  Theme
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setMobileOpen(false);
                      }}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        theme.id === t.id
                          ? "text-theme-primary bg-theme-card"
                          : "text-theme-muted hover:text-theme-fg hover:bg-theme-card"
                      }`}
                    >
                      <span
                        className="inline-block h-3 w-3 rounded-full shrink-0"
                        style={{
                          background: `rgb(${t.colors.primary})`,
                        }}
                      />
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

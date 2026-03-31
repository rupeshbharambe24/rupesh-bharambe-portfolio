"use client";

import { useTheme } from "@/hooks/use-theme";

export default function Home() {
  const { theme, setTheme, themes, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-theme-bg text-theme-fg transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-5xl font-bold gradient-text">
            Theme System
          </h1>
          <p className="text-theme-muted text-lg">
            Current theme:{" "}
            <span className="text-theme-primary font-semibold">
              {theme.name}
            </span>
          </p>
          <p className="text-theme-muted text-sm mt-1">{theme.description}</p>
        </div>

        {/* Theme Switcher Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 mb-16">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`group relative rounded-xl border p-4 text-left transition-all duration-200 hover:scale-105 ${
                theme.id === t.id
                  ? "border-theme bg-theme-card ring-2"
                  : "border-theme bg-theme-card/50 hover:bg-theme-card"
              }`}
              style={
                theme.id === t.id
                  ? { ["--tw-ring-color" as string]: `rgb(${t.colors.primary})` }
                  : undefined
              }
            >
              {/* Color preview dots */}
              <div className="mb-3 flex gap-1.5">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: `rgb(${t.colors.primary})` }}
                />
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: `rgb(${t.colors.secondary})` }}
                />
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: `rgb(${t.colors.background})` }}
                />
              </div>
              <div className="text-sm font-medium text-theme-fg">{t.name}</div>
              <div className="text-xs text-theme-muted mt-0.5">{t.mode}</div>
              {theme.id === t.id && (
                <div
                  className="absolute -top-1 -right-1 h-3 w-3 rounded-full"
                  style={{ backgroundColor: `rgb(${t.colors.primary})` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Preview Cards */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-theme-fg">
            Preview Components
          </h2>

          {/* Card */}
          <div className="rounded-2xl border border-theme bg-theme-card p-6">
            <h3 className="text-lg font-semibold text-theme-primary mb-2">
              Sample Card
            </h3>
            <p className="text-theme-muted text-sm leading-relaxed">
              This card demonstrates the theme system with background, border,
              and text color variables. The colors update in real-time as you
              switch between themes.
            </p>
          </div>

          {/* Gradient bar */}
          <div className="rounded-xl gradient-primary h-3" />

          {/* Color palette display */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {(
              [
                ["Primary", theme.colors.primary],
                ["Secondary", theme.colors.secondary],
                ["Background", theme.colors.background],
                ["Card", theme.colors.card],
                ["Border", theme.colors.cardBorder],
                ["Muted", theme.colors.muted],
                ["Foreground", theme.colors.foreground],
                ["Muted FG", theme.colors.mutedForeground],
              ] as const
            ).map(([label, color]) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-lg border border-theme shrink-0"
                  style={{ backgroundColor: `rgb(${color})` }}
                />
                <div>
                  <div className="text-xs font-medium text-theme-fg">
                    {label}
                  </div>
                  <div className="text-xs text-theme-muted font-mono">
                    {color}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Typography preview */}
          <div className="rounded-2xl border border-theme bg-theme-card p-6 space-y-3">
            <h3 className="text-lg font-semibold text-theme-fg">Typography</h3>
            <p className="text-theme-fg">
              Regular foreground text on the card background.
            </p>
            <p className="text-theme-primary">
              Primary colored text for emphasis.
            </p>
            <p className="text-theme-secondary">
              Secondary colored text for accents.
            </p>
            <p className="text-theme-muted">Muted text for descriptions.</p>
            <p className="gradient-text font-bold text-xl">
              Gradient text effect
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

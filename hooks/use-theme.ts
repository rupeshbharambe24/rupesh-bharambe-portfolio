"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  themes as allThemes,
  DEFAULT_THEME_ID,
  getThemeById,
  type Theme,
} from "@/data/themes";

const STORAGE_KEY = "rupesh-portfolio-theme";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (id: string) => void;
  themes: Theme[];
  mounted: boolean;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const { colors } = theme;

  root.style.setProperty("--theme-background", colors.background);
  root.style.setProperty("--theme-foreground", colors.foreground);
  root.style.setProperty("--theme-card", colors.card);
  root.style.setProperty("--theme-card-border", colors.cardBorder);
  root.style.setProperty("--theme-primary", colors.primary);
  root.style.setProperty("--theme-secondary", colors.secondary);
  root.style.setProperty("--theme-muted", colors.muted);
  root.style.setProperty("--theme-muted-foreground", colors.mutedForeground);

  if (theme.mode === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }
}

export function useThemeProvider() {
  const [theme, setThemeState] = useState<Theme>(
    () => getThemeById(DEFAULT_THEME_ID)!
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const resolved = (stored && getThemeById(stored)) || getThemeById(DEFAULT_THEME_ID)!;
    setThemeState(resolved);
    applyTheme(resolved);
    setMounted(true);
  }, []);

  const setTheme = useCallback((id: string) => {
    const next = getThemeById(id);
    if (!next) return;
    setThemeState(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, id);
  }, []);

  return {
    theme,
    setTheme,
    themes: allThemes,
    mounted,
  };
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

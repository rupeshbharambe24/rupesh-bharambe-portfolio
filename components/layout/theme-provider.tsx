"use client";

import type { ReactNode } from "react";
import { ThemeContext, useThemeProvider } from "@/hooks/use-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const value = useThemeProvider();

  return (
    <ThemeContext value={value}>
      <div
        className="contents transition-opacity duration-500"
        style={{ opacity: value.mounted ? 1 : 0 }}
      >
        {children}
      </div>
    </ThemeContext>
  );
}

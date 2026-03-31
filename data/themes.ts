export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardBorder: string;
  primary: string;
  secondary: string;
  muted: string;
  mutedForeground: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  mode: "dark" | "light";
  colors: ThemeColors;
}

export const themes: Theme[] = [
  {
    id: "obsidian",
    name: "Obsidian",
    description: "Deep dark with violet accents",
    mode: "dark",
    colors: {
      background: "10 10 15",
      foreground: "245 245 250",
      card: "18 18 25",
      cardBorder: "30 30 42",
      primary: "139 92 246",
      secondary: "6 182 212",
      muted: "30 30 42",
      mutedForeground: "140 140 160",
    },
  },
  {
    id: "pearl",
    name: "Pearl",
    description: "Clean light with violet elegance",
    mode: "light",
    colors: {
      background: "250 250 250",
      foreground: "20 20 30",
      card: "255 255 255",
      cardBorder: "228 228 235",
      primary: "124 58 237",
      secondary: "8 145 178",
      muted: "240 240 245",
      mutedForeground: "100 100 120",
    },
  },
  {
    id: "neon",
    name: "Neon",
    description: "Cyberpunk pink and emerald glow",
    mode: "dark",
    colors: {
      background: "15 10 26",
      foreground: "245 240 255",
      card: "22 16 36",
      cardBorder: "38 28 58",
      primary: "236 72 153",
      secondary: "16 185 129",
      muted: "38 28 58",
      mutedForeground: "150 130 170",
    },
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Northern lights cyan and purple",
    mode: "dark",
    colors: {
      background: "10 22 40",
      foreground: "230 240 255",
      card: "16 30 52",
      cardBorder: "26 44 72",
      primary: "34 211 238",
      secondary: "168 85 247",
      muted: "26 44 72",
      mutedForeground: "120 150 180",
    },
  },
  {
    id: "oceanic",
    name: "Oceanic",
    description: "Deep sea blues and teals",
    mode: "dark",
    colors: {
      background: "12 20 38",
      foreground: "220 235 255",
      card: "18 28 50",
      cardBorder: "28 42 70",
      primary: "59 130 246",
      secondary: "6 182 212",
      muted: "28 42 70",
      mutedForeground: "110 140 175",
    },
  },
  {
    id: "ember",
    name: "Ember",
    description: "Warm flames of orange and gold",
    mode: "dark",
    colors: {
      background: "26 10 10",
      foreground: "255 240 230",
      card: "36 18 16",
      cardBorder: "55 30 25",
      primary: "249 115 22",
      secondary: "234 179 8",
      muted: "55 30 25",
      mutedForeground: "175 130 110",
    },
  },
  {
    id: "forest",
    name: "Forest",
    description: "Lush greens of the deep woods",
    mode: "dark",
    colors: {
      background: "10 26 15",
      foreground: "230 250 235",
      card: "16 36 22",
      cardBorder: "26 55 35",
      primary: "34 197 94",
      secondary: "132 204 22",
      muted: "26 55 35",
      mutedForeground: "110 165 125",
    },
  },
  {
    id: "sakura",
    name: "Sakura",
    description: "Cherry blossom pinks and roses",
    mode: "dark",
    colors: {
      background: "26 15 20",
      foreground: "255 235 245",
      card: "36 22 30",
      cardBorder: "55 35 45",
      primary: "244 114 182",
      secondary: "251 113 133",
      muted: "55 35 45",
      mutedForeground: "175 120 145",
    },
  },
  {
    id: "mono",
    name: "Mono",
    description: "Minimalist monochrome elegance",
    mode: "dark",
    colors: {
      background: "10 10 10",
      foreground: "245 245 245",
      card: "20 20 20",
      cardBorder: "35 35 35",
      primary: "161 161 170",
      secondary: "250 250 250",
      muted: "35 35 35",
      mutedForeground: "120 120 120",
    },
  },
  {
    id: "solarized",
    name: "Solarized",
    description: "Classic solarized dark palette",
    mode: "dark",
    colors: {
      background: "0 43 54",
      foreground: "238 232 213",
      card: "7 54 66",
      cardBorder: "18 70 82",
      primary: "38 139 210",
      secondary: "42 161 152",
      muted: "18 70 82",
      mutedForeground: "131 148 150",
    },
  },
];

export const DEFAULT_THEME_ID = "obsidian";

export function getThemeById(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}

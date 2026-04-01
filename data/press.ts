export type PressEventTag = "sih2024" | "avishkar" | "orchathon" | "rackathon" | "scale-ai";

export interface PressItem {
  id: string;
  publication: string;
  event: string;
  tag: PressEventTag;
  image: string;
}

export const pressTagColors: Record<PressEventTag, string> = {
  sih2024:   "249 115 22",
  avishkar:  "234 179 8",
  orchathon: "139 92 246",
  rackathon: "34 197 94",
  "scale-ai":"34 211 238",
};

export const pressTagLabels: Record<PressEventTag, string> = {
  sih2024:   "SIH 2024",
  avishkar:  "Avishkar 2024",
  orchathon: "ORCHATHON 2K25",
  rackathon: "RACKATHON 2025",
  "scale-ai":"@scale AI",
};

export const pressItems: PressItem[] = [
  // SIH 2024 — 8 publications
  { id: "deshonnati-sih",    publication: "Deshonnati",   event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/deshonnati_sih.jpeg" },
  { id: "kesari-sih",        publication: "Kesari",        event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/kesari_sih.jpg" },
  { id: "navbharat-sih",     publication: "Navbharat",     event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/navbharat_sih.jpg" },
  { id: "pandhari-sih",      publication: "Pandhari",      event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/pandhari_sih.jpeg" },
  { id: "punya-nagari-sih",  publication: "Punya Nagari",  event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/punya_nagari_sih.jpeg" },
  { id: "sakaal-sih",        publication: "Sakaal",        event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/sakaal_sih.jpeg" },
  { id: "samna-sih-1",       publication: "Samna",         event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/samna_sih.jpeg" },
  { id: "samna-sih-2",       publication: "Samna",         event: "SIH 2024 Grand Finale Win",    tag: "sih2024",   image: "/images/news/samna_sih.jpg" },

  // Avishkar 2024 — 3 publications
  { id: "deshonnati-avishkar", publication: "Deshonnati",  event: "Avishkar 2024 — Silver Medal", tag: "avishkar",  image: "/images/news/deshounnati_aavishkar.jpg" },
  { id: "kesari-avishkar",     publication: "Kesari",       event: "Avishkar 2024 — Silver Medal", tag: "avishkar",  image: "/images/news/kesari_aavishkar.jpg" },
  { id: "navbharat-avishkar",  publication: "Navbharat",    event: "Avishkar 2024 — Silver Medal", tag: "avishkar",  image: "/images/news/navbharat_aavishkar.jpg" },

  // ORCHATHON 2K25 — 4 publications
  { id: "janmat-orchathon",      publication: "Janmat",       event: "ORCHATHON 2K25 — 3rd Prize",   tag: "orchathon", image: "/images/news/janmat_orchathon.jpg" },
  { id: "punya-nagari-orchathon",publication: "Punya Nagari", event: "ORCHATHON 2K25 — 3rd Prize",   tag: "orchathon", image: "/images/news/punya_nagari_orchathon.jpg" },
  { id: "sanchar-orchathon",     publication: "Sanchar",      event: "ORCHATHON 2K25 — 3rd Prize",   tag: "orchathon", image: "/images/news/sanchar_orchathon.jpg" },
  { id: "surajya-orchathon",     publication: "Surajya",      event: "ORCHATHON 2K25 — 3rd Prize",   tag: "orchathon", image: "/images/news/surajya_orchathon.jpg" },

  // RACKATHON 2025 — 1 publication
  { id: "lokmat-rackathon", publication: "Lokmat", event: "RACKATHON 2025 — Winner", tag: "rackathon", image: "/images/news/lokmat_rackathon.jpg" },

  // @scale AI — 1 publication
  { id: "lokmat-scale-ai", publication: "Lokmat", event: "@scale AI Hackathon — Winner", tag: "scale-ai", image: "/images/news/lokmat_scale_ai.jpeg" },
];

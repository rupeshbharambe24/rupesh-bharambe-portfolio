export interface SocialLinks {
  github: string;
  linkedin: string;
  discord: string;
  instagram: string;
}

export interface OpenToItem {
  label: string;
  color: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  taglines: string[];
  bio: string[];
  roles: string[];
  email: string;
  phone: string;
  location: string;
  social: SocialLinks;
  openTo: OpenToItem[];
}

export const profile: Profile = {
  name: "Rupesh Bharambe",
  title: "AI/ML Engineer",
  subtitle: "AI/ML Engineer · 5x Hackathon Winner · SIH'24 Grand Finale Winner",
  taglines: [
    "intelligent systems",
    "AI solutions",
    "real-world impact",
    "production software",
  ],
  bio: [
    "I'm a final-year B.Tech student in AI & Data Science, passionate about building intelligent systems that solve real-world problems. From winning Smart India Hackathon 2024 to building SatSage for ISRO's satellite data, I thrive at the intersection of research and production engineering.",
    "When I'm not building AI solutions, I lead the AI & Data Science Students Association as Vice President, mentor junior developers, and coordinate hackathon events. I believe in learning by building — every project is a chance to push boundaries.",
  ],
  roles: ["AI/ML Engineer", "Full-Stack Dev", "Team Leader"],
  email: "rupeshbharambe2004@gmail.com",
  phone: "+91 9421756386",
  location: "Chh. Sambhajinagar, Maharashtra",
  social: {
    github: "https://github.com/rupeshbharambe24",
    linkedin: "https://www.linkedin.com/in/rupesh-bharambe-056a12257/",
    discord: "https://discord.com/users/1284519829427978240",
    instagram: "https://instagram.com/rupesh__rt4",
  },
  openTo: [
    { label: "Full-time Roles", color: "green" },
    { label: "Hackathons", color: "purple" },
    { label: "Research", color: "cyan" },
    { label: "Open Source", color: "orange" },
  ],
};

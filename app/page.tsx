import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { FeaturedProjectsHome } from "@/components/home/featured-projects-home";
import { AboutSkillsTeaser } from "@/components/home/about-skills-teaser";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg">
      <Hero />
      <StatsBar />
      <FeaturedProjectsHome />
      <AboutSkillsTeaser />
    </div>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Bio } from "@/components/about/bio";
import { TechStack } from "@/components/about/tech-stack";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { ResumeSection } from "@/components/about/resume-section";

export const metadata: Metadata = {
  title: "About | Rupesh Bharambe",
  description:
    "Learn more about Rupesh Bharambe — AI/ML Engineer, hackathon winner, and full-stack developer.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="space-y-12">
        <PageHeader comment="about-me" title="Get to Know Me" />
        <Bio />
        <TechStack />
        <JourneyTimeline />
        <ResumeSection />
      </div>
    </div>
  );
}

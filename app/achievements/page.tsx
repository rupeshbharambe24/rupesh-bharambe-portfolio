import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { StatsSummary } from "@/components/achievements/stats-summary";
import { TrophyWall } from "@/components/achievements/trophy-wall";
import { OtherHonors } from "@/components/achievements/other-honors";
import { CertificationsGrid } from "@/components/achievements/certifications-grid";
import { PressMedia } from "@/components/achievements/press-media";

export const metadata: Metadata = {
  title: "Achievements | Rupesh Bharambe",
  description:
    "Hackathon wins, honors, and certifications earned by Rupesh Bharambe.",
};

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="space-y-12">
        <PageHeader comment="achievements" title="Wins & Recognition" />
        <StatsSummary />
        <TrophyWall />
        <OtherHonors />
        <CertificationsGrid />
        <PressMedia />
      </div>
    </div>
  );
}

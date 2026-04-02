import { Code2, GitFork, Users } from "lucide-react";
import { getGitHubStats } from "@/lib/github";

export async function GitHubActivity() {
  const stats = await getGitHubStats("rupeshbharambe24");

  return (
    <div className="rounded-xl border border-theme bg-theme-card p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 size={20} className="text-theme-primary" />
          <h2 className="text-lg font-bold text-theme-fg">GitHub Activity</h2>
        </div>
        <span className="font-mono text-xs text-theme-muted">
          {"// contribution graph"}
        </span>
      </div>

      {/* Contribution graph */}
      <div className="overflow-x-auto rounded-lg border border-theme p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=rupeshbharambe24&bg_color=0d1117&color=9ca3af&line=8b5cf6&point=8b5cf6&area=true&area_color=8b5cf6&hide_border=true&custom_title="
          alt="GitHub contribution graph for rupeshbharambe24"
          className="w-full rounded"
          loading="lazy"
        />
      </div>

      {/* Stats */}
      {stats && (
        <div className="mt-4 flex gap-6">
          <div className="flex items-center gap-2">
            <GitFork size={16} className="text-theme-primary" />
            <span className="text-sm text-theme-muted">
              <span className="font-semibold text-theme-fg">
                {stats.publicRepos}
              </span>{" "}
              repositories
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-theme-secondary" />
            <span className="text-sm text-theme-muted">
              <span className="font-semibold text-theme-fg">
                {stats.followers}
              </span>{" "}
              followers
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

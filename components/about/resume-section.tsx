import { FileText, Eye, Download } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function ResumeSection() {
  return (
    <ScrollReveal>
      <div className="space-y-4">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <FileText size={22} className="text-theme-primary" />
          <h2 className="text-xl font-bold text-theme-fg">Resume</h2>
        </div>

        {/* Card */}
        <div className="flex flex-col items-start gap-4 rounded-xl border border-theme bg-theme-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="gradient-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
              <FileText size={20} className="text-white" />
            </div>
            <div>
              <p className="font-medium text-theme-fg">
                Rupesh Bharambe &mdash; Resume 2026
              </p>
              <p className="text-xs text-theme-muted">PDF Document</p>
            </div>
          </div>

          <div className="flex gap-2">
            {/* Preview button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-theme px-3 py-1.5 text-sm font-medium text-theme-muted transition-colors hover:text-theme-fg"
            >
              <Eye size={14} />
              Preview
            </a>

            {/* Download button */}
            <a
              href="/resume.pdf"
              download
              className="gradient-primary inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

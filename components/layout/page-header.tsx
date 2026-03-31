import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface PageHeaderProps {
  comment: string;
  title: string;
  description?: string;
}

export function PageHeader({ comment, title, description }: PageHeaderProps) {
  return (
    <ScrollReveal>
      <div className="space-y-3">
        <p className="font-mono text-sm text-theme-primary">
          {"// "}
          {comment}
        </p>
        <h1 className="text-3xl font-black text-theme-fg">{title}</h1>
        <div className="gradient-primary h-1 w-16 rounded-full" />
        {description && (
          <p className="max-w-2xl text-theme-muted">{description}</p>
        )}
      </div>
    </ScrollReveal>
  );
}

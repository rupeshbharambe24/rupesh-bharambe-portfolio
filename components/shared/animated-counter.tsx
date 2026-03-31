"use client";

import { useAnimatedCounter } from "@/hooks/use-animated-counter";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix,
  prefix,
  label,
  className,
}: AnimatedCounterProps) {
  const { count, ref } = useAnimatedCounter({ target: value });

  return (
    <div ref={ref} className={className}>
      <span className="text-4xl font-bold text-primary">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="mt-1 block font-mono text-sm text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * CSS-only fade-in-up wrapper. Uses the shared `animate-fade-in-up` keyframe.
 * Simple, hydration-safe, and guaranteed to reveal content.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div
      className={cn("animate-fade-in-up", className)}
      style={
        delay
          ? { animationDelay: `${delay}s`, animationFillMode: "both" }
          : { animationFillMode: "both" }
      }
    >
      {children}
    </div>
  );
}

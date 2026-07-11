import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  heading,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-section-alt border-y border-border"
      data-testid="skills-section"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          label="TECH STACK"
          heading="Technologies I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 0.04}
              className="rounded-xl border border-border bg-card p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    data-testid={`skill-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="font-mono text-xs px-3 py-1.5 rounded-md border border-border bg-background/40 text-foreground hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

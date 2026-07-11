import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-section-alt border-y border-border"
      data-testid="experience-section"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeader label="EXPERIENCE" heading="Where I've worked." />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.company}
                delay={i * 0.06}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <span
                  className="absolute left-4 md:left-6 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
                  aria-hidden="true"
                />
                <div
                  className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-accent/30 transition-colors"
                  data-testid={`experience-card-${i}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-medium text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-accent">{exp.company}</p>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {exp.date}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {exp.description.map((line, li) => (
                      <li key={li} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0"
                          aria-hidden="true"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 rounded border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.certificateUrl && (
                    <div className="mt-5">
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`experience-cert-${i}`}
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
                      >
                        View Certificate
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

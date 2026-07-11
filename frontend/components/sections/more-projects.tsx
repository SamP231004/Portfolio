import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { moreProjects } from "@/data/projects";
import { profile } from "@/data/profile";

export function MoreProjects() {
  return (
    <section
      className="relative py-20 md:py-24 bg-section-alt border-y border-border"
      data-testid="more-projects-section"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="h-px w-8 bg-accent"
                aria-hidden="true"
              />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                MORE PROJECTS
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Additional experiments &amp; learning projects.
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            data-testid="view-all-projects-button"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ArrowUpRight size={14} />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreProjects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.05}
              className="group rounded-lg border border-border bg-card p-5 hover:bg-card-hover hover:border-accent/40 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-medium text-foreground">
                  {p.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-accent transition-colors shrink-0"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 flex items-center gap-3 text-xs">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`more-project-github-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Github size={12} />
                  GitHub
                </a>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

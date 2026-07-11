import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { openSourceContributions } from "@/data/open-source";
import { profile } from "@/data/profile";

export function OpenSource() {
  const hasData = openSourceContributions.length > 0;

  return (
    <section
      id="open-source"
      className="relative py-24 md:py-32"
      data-testid="open-source-section"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          label="OPEN SOURCE"
          heading="Contributing beyond my own projects."
          description="I actively contribute to open-source projects to improve existing software, collaborate with other developers, understand large codebases, and strengthen my engineering skills through real-world development workflows."
        />

        {hasData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openSourceContributions.map((c, i) => (
              <Reveal
                key={c.repo + i}
                delay={i * 0.05}
                className="rounded-xl border border-border bg-card p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={16} className="text-accent" />
                  <h3 className="text-base font-medium text-foreground">
                    {c.repo}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-accent">
                    {c.status}
                  </span>
                  <a
                    href={c.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
                  >
                    View Pull Request
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div
              className="rounded-xl border border-border bg-card p-8 md:p-10"
              data-testid="open-source-empty-state"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="max-w-xl">
                  <div className="font-mono text-xs text-accent flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    $ git log --author=&quot;Samarth&quot; --oneline
                  </div>
                  <p className="mt-4 text-base md:text-lg text-foreground">
                    Open-source contributions are being documented.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Visit my GitHub to explore my latest activity across
                    repositories, pull requests, and community projects.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  data-testid="view-github-activity-button"
                >
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Activity
                    <ArrowUpRight size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

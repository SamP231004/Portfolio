import { Reveal } from "@/components/ui/reveal";
import { learningTopics } from "@/data/skills";

export function Learning() {
  return (
    <section
      className="relative py-24 md:py-28"
      data-testid="learning-section"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-px w-8 bg-accent"
                aria-hidden="true"
              />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                LEARNING
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Always learning. Always building.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-lg">
              I believe strong engineers are built through continuous learning,
              experimentation, and shipping real products. Currently deepening
              my knowledge of system design, scalable backend architectures,
              advanced Java and Spring Boot development, distributed systems,
              cloud infrastructure, and production engineering.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
            {learningTopics.map((topic, i) => (
              <Reveal
                key={topic}
                delay={i * 0.04}
                className="rounded-lg border border-border bg-card p-4 hover:border-accent/40 hover:bg-card-hover transition-colors"
              >
                <p className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm md:text-base font-medium text-foreground">
                  {topic}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Code2, Wrench, Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  {
    icon: Code2,
    title: "What I Build",
    description:
      "SaaS platforms, backend APIs, dashboards, mobile applications, payment systems, and real-time applications.",
  },
  {
    icon: Wrench,
    title: "How I Work",
    description:
      "Clean architecture, reusable components, secure APIs, maintainable code, CI/CD pipelines, and production-focused development.",
  },
  {
    icon: Compass,
    title: "Currently Exploring",
    description:
      "System design, scalable backend architecture, distributed systems, cloud infrastructure, and advanced Java/Spring engineering.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      data-testid="about-section"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          label="ABOUT ME"
          heading="Engineering products from idea to production."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-3 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Full-Stack Software Developer focused on building
              scalable, secure, and production-ready applications.
            </p>
            <p>
              My experience spans backend engineering, frontend development,
              mobile applications, cloud deployments, payment systems, real-time
              communication, authentication, and SaaS architecture.
            </p>
            <p>
              I work primarily with{" "}
              <span className="text-foreground">Java</span>,{" "}
              <span className="text-foreground">Spring Boot</span>,{" "}
              <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">Next.js</span>,{" "}
              <span className="text-foreground">Node.js</span>,{" "}
              <span className="text-foreground">React Native</span>,{" "}
              <span className="text-foreground">PostgreSQL</span>,{" "}
              <span className="text-foreground">MongoDB</span>, and{" "}
              <span className="text-foreground">AWS</span>.
            </p>
            <p>
              Beyond building projects, I actively contribute to open-source
              software and continuously learn by working on real-world systems.
            </p>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal
                  key={c.title}
                  delay={i * 0.06}
                  className="rounded-xl border border-border bg-card p-5 hover:bg-card-hover hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md border border-border bg-background/60 flex items-center justify-center text-accent">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-medium text-foreground">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

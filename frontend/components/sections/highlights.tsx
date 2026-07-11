import { Cloud, Layers, Rocket, GitPullRequest } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    icon: Rocket,
    title: "Production Applications",
    description:
      "Built and deployed production-ready applications across web, backend, SaaS, and mobile platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Experience deploying applications and infrastructure using AWS, GCP, Vercel, and Render.",
  },
  {
    icon: Layers,
    title: "Full-Stack Engineering",
    description:
      "Experience across frontend applications, backend APIs, databases, authentication, payments, and cloud infrastructure.",
  },
  {
    icon: GitPullRequest,
    title: "Open Source",
    description:
      "Active open-source contributor with merged pull requests across community projects.",
  },
];

export function Highlights() {
  return (
    <section
      className="relative border-y border-border bg-[#0b0b0d]"
      data-testid="highlights-section"
    >
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className="bg-card p-6 md:p-7 hover:bg-card-hover transition-colors group"
              >
                <div
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border bg-background/60 text-accent group-hover:border-accent/50 transition-colors"
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

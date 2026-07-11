import Image from "next/image";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32"
      data-testid="featured-projects-section"
    >
      <div className="mx-auto max-w-content px-6">
        <SectionHeader
          label="FEATURED WORK"
          heading="Projects I've built and shipped."
        />

        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reversed={index % 2 === 1}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  reversed,
  index,
  featured,
}: {
  project: Project;
  reversed: boolean;
  index: number;
  featured?: boolean;
}) {
  return (
    <Reveal delay={0.05}>
      <article
        data-testid={`project-card-${project.slug}`}
        className={cn(
          "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "md:col-span-7 group order-1",
            reversed ? "md:order-2" : "md:order-1"
          )}
        >
          <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/40">
            {/* Browser bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-[#0d0d10]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground truncate max-w-[60%]">
                {project.liveUrl
                  ? new URL(project.liveUrl).hostname
                  : "localhost:3000"}
              </span>
              <span className="w-8" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d10]">
              <Image
                src={project.screenshot}
                alt={`${project.title} — ${project.subtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={cn(
            "md:col-span-5 order-2",
            reversed ? "md:order-1" : "md:order-2"
          )}
        >
          <p className="font-mono text-xs text-accent tracking-wider">
            {featured ? "FLAGSHIP · " : ""}
            {String(index + 1).padStart(2, "0")} / FEATURED
          </p>
          <h3
            className={cn(
              "mt-3 font-semibold tracking-tight text-foreground",
              featured
                ? "text-3xl md:text-4xl"
                : "text-2xl md:text-3xl"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm md:text-base text-accent/90">
            {project.subtitle}
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded border border-accent/20 bg-accent/5 text-accent/90 hover:bg-accent/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button
                asChild
                size="sm"
                data-testid={`project-live-${project.slug}`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              </Button>
            )}
            <Button
              asChild
              variant="outline"
              size="sm"
              data-testid={`project-github-${project.slug}`}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                GitHub
              </a>
            </Button>
            {project.androidUrl && (
              <Button
                asChild
                variant="secondary"
                size="sm"
                data-testid={`project-android-${project.slug}`}
              >
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Smartphone size={14} />
                  Download Android App
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

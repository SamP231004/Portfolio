import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { socialIcons } from "@/components/ui/social-icons";

export function Footer() {
  return (
    <footer
      className="border-t border-border mt-24"
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-content px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">{profile.name}</span>
        </p>
        <p className="text-xs text-muted-foreground text-center">
          Built with{" "}
          <span className="text-foreground">Next.js</span>,{" "}
          <span className="text-foreground">TypeScript</span> &amp;{" "}
          <span className="text-foreground">Tailwind CSS</span>.
        </p>
        <div className="flex items-center gap-1">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                data-testid={`footer-social-${s.icon}`}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-4 text-center">
          <p className="text-xs text-muted-foreground/70">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

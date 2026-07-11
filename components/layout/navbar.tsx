"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { socialIcons } from "@/components/ui/social-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { ResumeDialog } from "@/components/resume-dialog";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Re-check shortly after mount in case the browser has just performed a
    // hash-scroll or a deep-link jump that didn't fire a scroll event yet.
    const t1 = window.setTimeout(onScroll, 60);
    const t2 = window.setTimeout(onScroll, 400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-background/40 backdrop-blur-sm border-b border-border/50"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-content px-6 h-16 flex items-center justify-between"
      >
        <Link
          href="#home"
          data-testid="logo-link"
          className="font-mono text-lg tracking-tighter font-bold text-foreground hover:text-accent transition-colors"
        >
          {profile.shortName}
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-testid={`nav-link-${id}`}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-1 mr-2">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  data-testid={`nav-social-${s.icon}`}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <ThemeToggle
            className="hidden sm:inline-flex mr-1"
            data-testid="nav-theme-toggle"
          />
          <ResumeDialog
            triggerLabel="Resume"
            triggerSize="sm"
            triggerVariant="outline"
            triggerClassName="hidden sm:inline-flex"
            triggerTestId="nav-resume-button"
          />
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
            data-testid="mobile-menu"
          >
            <ul className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-link-${link.href.replace("#", "")}`}
                    className="block px-3 py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-border flex items-center gap-2">
                {socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="p-2 text-muted-foreground hover:text-foreground"
                      data-testid={`mobile-social-${s.icon}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
                <ThemeToggle data-testid="mobile-theme-toggle" />
                <ResumeDialog
                  triggerLabel="Resume"
                  compact
                  triggerClassName="ml-auto"
                  triggerTestId="mobile-resume-button"
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

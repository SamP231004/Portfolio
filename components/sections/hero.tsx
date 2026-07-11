"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeDialog } from "@/components/resume-dialog";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { socialIcons } from "@/components/ui/social-icons";

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24"
    >
      {/* Grid & radial glow background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-[120px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.35), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs text-muted-foreground animate-fade-in-up"
            data-testid="availability-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </div>

          <p
            className="mt-6 font-mono text-sm text-accent animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
            data-testid="hero-intro"
          >
            {profile.hero.intro}
          </p>

          <h1
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] animate-fade-in-up"
            style={{ animationDelay: "160ms" }}
            data-testid="hero-headline"
          >
            {profile.hero.headline}
          </h1>

          <div
            className="mt-6 flex items-center gap-3 h-8 font-mono text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
            aria-live="polite"
            data-testid="hero-role-rotator"
          >
            <span className="text-accent">{"//"}</span>
            <div className="relative h-6 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={profile.roles[roleIndex]}
                  initial={{ y: reduce ? 0 : 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: reduce ? 0 : -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block text-foreground"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "320ms" }}
            data-testid="hero-description"
          >
            {profile.hero.description}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button asChild size="lg" data-testid="hero-view-work-button">
              <Link href="#projects">
                View My Work
                <ArrowRight size={16} />
              </Link>
            </Button>
            <ResumeDialog
              triggerLabel="View Resume"
              triggerSize="lg"
              triggerVariant="outline"
              triggerTestId="hero-resume-button"
            />
            <div className="flex items-center gap-1 ml-1">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    data-testid={`hero-social-${s.icon}`}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column - profile card */}
        <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div
      className="relative mx-auto max-w-sm lg:max-w-none"
      data-testid="profile-card"
    >
      {/* Card */}
      <div className="relative rounded-2xl border border-border bg-card overflow-hidden group">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-card-alt">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
            samarth.dev
          </span>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-card-alt">
          <Image
            src={profile.avatar}
            alt={`${profile.name} — Software Engineer`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
            aria-hidden="true"
          />
          {/* Meta strip */}
          <div className="absolute bottom-0 inset-x-0 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {profile.name}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  Software Engineer · Full-Stack Developer
                </p>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 rounded">
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <FloatingBadge label={profile.floatingBadges[0]} className="absolute -top-3 -left-3 hidden md:block" delay={0} />
      <FloatingBadge label={profile.floatingBadges[1]} className="absolute top-1/3 -right-6 hidden md:block" delay={0.4} />
      <FloatingBadge label={profile.floatingBadges[2]} className="absolute -bottom-3 left-1/4 hidden md:block" delay={0.8} />
      <FloatingBadge label={profile.floatingBadges[3]} className="absolute -bottom-4 -right-3 hidden md:block" delay={1.2} />
      <FloatingBadge label={profile.floatingBadges[4]} className="absolute top-8 -left-6 hidden md:block" delay={1.6} />
      <FloatingBadge label={profile.floatingBadges[5]} className="absolute top-1/2 -left-6 hidden md:block" delay={2} />
    </div>
  );
}

function FloatingBadge({
  label,
  className,
  delay,
}: {
  label: string;
  className?: string;
  delay: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none inline-block font-mono text-[11px] px-3 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur text-foreground shadow-lg animate-float ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {label}
    </span>
  );
}

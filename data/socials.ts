import { profile } from "./profile";

export const socials = [
  { name: "GitHub", href: profile.github, icon: "github" as const },
  { name: "LinkedIn", href: profile.linkedin, icon: "linkedin" as const },
  { name: "X", href: profile.twitter, icon: "x" as const },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Open Source", href: "#open-source" },
  { label: "Contact", href: "#contact" },
];

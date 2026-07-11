import { Github, Linkedin, type LucideIcon } from "lucide-react";

// Simple X (Twitter) icon since lucide's twitter is legacy bird
export const XIcon: LucideIcon = (({
  size = 20,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.828l-5.34-6.99L4.6 22H1.34l8.03-9.176L1 2h6.914l4.83 6.39L18.244 2Zm-1.2 18h1.89L7.03 4h-2.02l12.034 16Z" />
  </svg>
)) as unknown as LucideIcon;

export const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
};

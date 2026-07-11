export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++", "R"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
    ],
  },
  {
    label: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "GCP", "Vercel", "Render", "GitHub Actions", "CI/CD"],
  },
  {
    label: "Tools & Services",
    items: ["Git", "GitHub", "Postman", "Stripe", "Resend", "Zod"],
  },
  {
    label: "Core Engineering",
    items: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "REST API Design",
      "Authentication & Authorization",
      "Payment Integration",
      "Real-Time Applications",
      "Cloud Deployment",
    ],
  },
];

export const learningTopics = [
  "System Design",
  "Scalable Backend Architecture",
  "Advanced Java & Spring",
  "Cloud Infrastructure",
  "Open Source",
  "Production Engineering",
];

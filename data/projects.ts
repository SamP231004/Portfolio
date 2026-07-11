export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  androidUrl?: string;
  screenshot: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "echoowl",
    title: "EchoOwl",
    subtitle: "Production-ready SaaS event monitoring platform.",
    description:
      "Architected and shipped a SaaS event monitoring platform that delivers real-time notifications through Discord. The application includes authentication, event categorization, usage quotas, subscription-based billing, secure Stripe payment workflows, webhook-driven subscription synchronization, and a responsive monitoring dashboard. Built using modern Next.js architecture with TypeScript, PostgreSQL, Prisma, and production-focused development practices.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Clerk",
      "Discord API",
      "React Query",
    ],
    liveUrl: "https://echo-owl.vercel.app/",
    githubUrl: "https://github.com/SamP231004/SaaS_Project-1_EchoOwl",
    androidUrl: "https://github.com/SamP231004/App_EchoOwl/releases/tag/v1.0.0",
    screenshot:
      "https://raw.githubusercontent.com/SamP231004/SaaS_Project-1_EchoOwl/main/ScreenShots/SS_1.png?raw=true",
  },
  {
    slug: "mystery-messages",
    title: "Mystery Messages",
    subtitle: "AI-powered anonymous messaging platform.",
    description:
      "Built a secure anonymous messaging application with AI-assisted message suggestions using Gemini AI. Implemented authentication, email verification, personalized inboxes, MongoDB aggregation pipelines, schema validation, and responsive user interfaces.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "NextAuth.js",
      "Gemini AI",
      "Resend",
      "Zod",
    ],
    liveUrl: "https://web-development-project-10-mystery.vercel.app/",
    githubUrl:
      "https://github.com/SamP231004/Web-Development_Project-10_Mystery-Messages",
    screenshot:
      "https://raw.githubusercontent.com/SamP231004/Web-Development_Project-10_Mystery-Messages/main/ScreenShots/SS_1.png?raw=true",
  },
  {
    slug: "stream-sphere",
    title: "Stream Sphere",
    subtitle: "Full-stack video streaming ecosystem.",
    description:
      "Developed a full-stack video streaming platform supporting secure authentication, video uploads, viewing, likes, comments, playlists, subscriptions, and content management. Expanded the product ecosystem with Java Spring Boot backend services and React Native / Expo mobile applications. Integrated Stripe-based premium membership workflows.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Java",
      "Spring Boot",
      "React Native",
      "Expo",
      "Stripe",
    ],
    liveUrl: "https://streaming-platform-version-2.vercel.app/",
    githubUrl:
      "https://github.com/SamP231004/Web-Development_Project-5__Streaming-Platform",
    screenshot:
      "https://raw.githubusercontent.com/SamP231004/Web-Development_Project-5__Streaming-Platform/main/ScreenShots/SSV2_1.png?raw=true",
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    subtitle: "Full-stack content publishing platform.",
    description:
      "Built a responsive blogging platform with secure authentication, content creation, editing, deletion, rich-text formatting, image uploads, and user-specific content management. Implemented using React and Appwrite with reusable frontend components and responsive application design.",
    technologies: [
      "React",
      "JavaScript",
      "Appwrite",
      "Authentication",
      "Rich Text Editor",
    ],
    liveUrl:
      "https://sam-p231004-web-development-project-4-blog-platform.vercel.app/",
    githubUrl:
      "https://github.com/SamP231004/SamP231004-Web-Development_Project-4__Blog-Platform",
    screenshot:
      "https://raw.githubusercontent.com/SamP231004/Web-Development_Project-4__Blog-Platform/main/ScreenShots/SS_1.png",
  },
  {
    slug: "group-chat-extension",
    title: "Group Chat Extension",
    subtitle: "Real-time communication Chrome extension.",
    description:
      "Built a real-time group chat Chrome extension where users can create or join chat rooms and communicate through instant messaging. Implemented scalable WebSocket communication using Socket.IO and Node.js.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Socket.IO",
      "WebSockets",
      "Chrome Extensions",
    ],
    githubUrl: "https://github.com/SamP231004/Web-Development_Project-7_Extension",
    screenshot:
      "https://raw.githubusercontent.com/SamP231004/Web-Development_Project-7_Extension/refs/heads/main/frontend/Images_Used/SS_2.png",
  },
  {
    slug: "payment-integration",
    title: "Payment Integration",
    subtitle: "Secure Stripe payment processing application.",
    description:
      "Implemented a complete payment processing workflow using Stripe, Node.js, Express, and React. Built backend payment APIs, transaction validation, error handling, secure payment flows, unique transaction identification, and a responsive checkout experience.",
    technologies: ["React", "Node.js", "Express", "Stripe", "UUID", "REST APIs"],
    liveUrl: "https://payment-integration-frontend-haap.onrender.com/",
    githubUrl:
      "https://github.com/SamP231004/Web-Development_Project-6_Payment-Integration",
    screenshot:
      "https://raw.githubusercontent.com/SamP231004/Web-Development_Project-6_Payment-Integration/main/Screenshots/SS_1.png",
  },
];

export type MoreProject = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const moreProjects: MoreProject[] = [
  {
    title: "Rice Classification",
    description:
      "Machine learning classification model for identifying rice varieties from feature data.",
    technologies: ["Python", "Machine Learning", "TensorFlow"],
    githubUrl: "https://github.com/SamP231004",
  },
  {
    title: "8-Puzzle Game",
    description:
      "Classic 8-puzzle solver implementation with an interactive playable interface.",
    technologies: ["JavaScript", "Algorithms"],
    githubUrl: "https://github.com/SamP231004",
  },
  {
    title: "Guess The Number Game",
    description:
      "Simple interactive number guessing game demonstrating DOM manipulation and game logic.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/SamP231004",
  },
];

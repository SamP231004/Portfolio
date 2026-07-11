export type Experience = {
  company: string;
  role: string;
  date: string;
  description: string[];
  tags: string[];
  certificateUrl?: string;
};

export const experiences: Experience[] = [
  {
    company: "DeepNeurons.ai",
    role: "Software Developer",
    date: "Apr 2025 – Oct 2025",
    description: [
      "Built and deployed a full-stack React and Node.js application on AWS serving 500+ users.",
      "Implemented secure authentication and API key management, improving application security.",
      "Automated CI/CD pipelines and reduced deployment time from several hours to under 15 minutes.",
      "Contributed to scalable application features, backend APIs, and optimized cloud deployments.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "CI/CD",
      "REST APIs",
      "API Security",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1wRZcG5Oeslc22luM0uThnWXfpcpsvXKN/view?usp=drivesdk",
  },
  {
    company: "SmartInternz",
    role: "AI Intern — Google TensorFlow Program",
    date: "Jun 2024 – Jul 2024",
    description: [
      "Worked with Python-based machine learning workflows using TensorFlow.",
      "Gained practical experience building, training, and deploying machine learning models.",
      "Implemented machine learning pipelines following TensorFlow development practices.",
      "Completed and deployed machine learning projects on GitHub.",
    ],
    tags: ["Python", "TensorFlow", "Machine Learning", "Model Deployment"],
  },
];

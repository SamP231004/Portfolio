export type OpenSourceContribution = {
  repo: string;
  description: string;
  status: "Merged" | "Open" | "Closed";
  technologies: string[];
  prUrl: string;
};

export const openSourceContributions: OpenSourceContribution[] = [];

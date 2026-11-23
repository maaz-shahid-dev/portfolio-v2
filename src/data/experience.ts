export type ExperienceItem = {
  title: string;
  organization?: string;
  period?: string;
  description: string;
  responsibilities?: string[];
  tags: string[];
  verified: boolean;
};

export const experience: ExperienceItem[] = [
  {
    title: "Senior Flutter Developer",
    organization: "Bright Loop Labs",
    period: "Oct 2025 to Apr 2026",
    description:
      "CV-verified role and dates. Detailed responsibilities can be added from the CV once the CV file or text is available in the workspace.",
    tags: ["Flutter", "Mobile Development", "Technical Delivery"],
    verified: true,
  },
  {
    title: "IT Intern",
    organization: "NADRA Headquarters",
    period: "Jun 2025 to Jul 2025",
    description:
      "CV-verified role and dates. Detailed responsibilities can be added from the CV once the CV file or text is available in the workspace.",
    tags: ["IT Operations", "Internship"],
    verified: true,
  },
  {
    title: "Junior Flutter Developer",
    organization: "SkylineCoderz",
    period: "Mar 2023 to Jun 2024",
    description:
      "CV-verified role and dates. Detailed responsibilities can be added from the CV once the CV file or text is available in the workspace.",
    tags: ["Flutter", "Application Development"],
    verified: true,
  },
  {
    title: "Flutter Developer Intern",
    organization: "MicroProgramers",
    period: "May 2022 to Dec 2022",
    description:
      "CV-verified role and dates. Detailed responsibilities can be added from the CV once the CV file or text is available in the workspace.",
    tags: ["Flutter", "Dart", "Internship"],
    verified: true,
  },
];

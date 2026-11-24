export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  verified: boolean;
};

export const experienceIntro = {
  note:
    "Formal employment and internship periods are listed below with verified roles and dates. Hands-on software development experience has continued since May 2022 and includes practical development work alongside these formal periods.",
};

export const experience: ExperienceItem[] = [
  {
    title: "Senior Flutter Developer",
    organization: "Bright Loop Labs",
    period: "October 2025 – April 2026",
    description:
      "Senior Flutter development role focused on mobile feature delivery, backend integration, and technical coordination within the documented period.",
    responsibilities: [
      "Developed Flutter features and integrated Firebase services and backend APIs.",
      "Applied Clean Architecture and coordinated technical development work.",
      "Diagnosed software defects and application performance issues.",
    ],
    tags: ["Flutter", "Firebase", "Clean Architecture", "APIs", "Performance"],
    verified: true,
  },
  {
    title: "IT Intern",
    organization: "NADRA Headquarters Islamabad",
    period: "June 2025 – July 2025",
    description:
      "IT internship at NADRA Headquarters Islamabad within a professional institutional environment.",
    responsibilities: [
      "Gained exposure to professional IT workflows during an internship at NADRA headquarters.",
    ],
    tags: ["IT Operations", "Institutional Workflows", "Internship"],
    verified: true,
  },
  {
    title: "Junior Flutter Developer",
    organization: "SkylineCoderz",
    period: "March 2023 – June 2024",
    description:
      "Flutter development role contributing to mobile application interfaces, integrations, and ongoing feature maintenance.",
    responsibilities: [
      "Built responsive Flutter interfaces using reusable Dart widgets.",
      "Integrated REST APIs and Firebase services.",
      "Tested and maintained mobile application features.",
    ],
    tags: ["Flutter", "Dart", "REST APIs", "Firebase", "Testing"],
    verified: true,
  },
  {
    title: "Flutter Developer Intern",
    organization: "MicroProgramers",
    period: "May 2022 – December 2022",
    description:
      "Internship role focused on Flutter/Dart development foundations and practical mobile application delivery.",
    responsibilities: [
      "Implemented Flutter screens and reusable widgets.",
      "Assisted with API integration, testing, and debugging.",
    ],
    tags: ["Flutter", "Dart", "API Integration", "Testing", "Debugging"],
    verified: true,
  },
];


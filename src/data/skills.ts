export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    items: [
      "Flutter",
      "Dart",
      "Firebase",
      "Android",
      "iOS",
      "REST APIs",
      "GetX",
      "Clean Architecture",
    ],
  },
  {
    title: "Web Development",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend and Cloud",
    items: [
      "Firebase Authentication",
      "Firestore",
      "Cloud Functions",
      "PostgreSQL",
      "Supabase",
      "Neon",
      "Node.js",
      "Vercel",
    ],
  },
  {
    title: "AI and Automation",
    items: [
      "n8n",
      "AI agents",
      "Ollama",
      "Workflow automation",
      "API integrations",
    ],
  },
  {
    title: "Tools and Operations",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor",
      "Docker",
      "Troubleshooting",
      "Deployment",
      "Technical coordination",
    ],
  },
];

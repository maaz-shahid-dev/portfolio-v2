export type ProjectStatus = "Production" | "Prototype" | "Concept";

export type Project = {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  stack: string[];
  url?: string;
  urlLabel?: string;
  visualLabel: string;
  workflow?: string[];
};

export const projects: Project[] = [
  {
    id: "shifamart",
    name: "ShifaMart",
    category: "Pharmacy Management SaaS",
    status: "Production",
    description:
      "A cloud-based pharmacy management platform designed to support day-to-day retail and operational workflows across pharmacy businesses.",
    highlights: [
      "Pharmacy inventory management",
      "Sales and POS workflows",
      "Multi-branch operations",
      "Employee management",
      "Reporting",
      "Cloud-based infrastructure",
    ],
    stack: ["Web SaaS", "Cloud Workflows", "Operations", "Reporting"],
    url: "https://www.shifamart.app/",
    urlLabel: "Visit Website",
    visualLabel: "Abstract SaaS dashboard artwork (not a product screenshot)",
  },
  {
    id: "islamic-life",
    name: "Islamic Life",
    category: "Islamic Mobile Application",
    status: "Production",
    description:
      "A mobile application offering Islamic utilities and daily-use features for users seeking accessible faith-centered tools.",
    highlights: ["Quran", "Prayer times", "Qibla", "Duas", "Islamic utilities"],
    stack: ["Mobile App", "Flutter", "Utility Features"],
    url: "https://play.google.com/store/apps/details?id=com.maazshahidapps.islamiclife",
    urlLabel: "View on Google Play",
    visualLabel: "Abstract mobile app artwork (not a product screenshot)",
  },
  {
    id: "spendwise",
    name: "SpendWise",
    category: "Expense Tracker Mobile Application",
    status: "Production",
    description:
      "A personal finance mobile app focused on tracking spending, organizing budgets, and reviewing financial activity.",
    highlights: [
      "Expense tracking",
      "Budgets",
      "Categories",
      "Financial reports",
      "Offline functionality",
    ],
    stack: ["Mobile App", "Flutter", "Budgeting", "Offline Support"],
    url: "https://play.google.com/store/apps/details?id=com.maazshahidapps.spendwiseapp",
    urlLabel: "View on Google Play",
    visualLabel: "Abstract finance app artwork (not a product screenshot)",
  },
  {
    id: "ai-seo-keyword-research-automation",
    name: "AI SEO & Keyword Research Automation",
    category: "AI and Workflow Automation",
    status: "Prototype",
    description:
      "A practical development project for local keyword research and AI-assisted workflow automation, designed to return structured results through webhook-driven automation.",
    highlights: [
      "Local keyword research workflow",
      "Structured JSON responses through webhooks",
      "Data table usage to prevent duplicate records",
      "AI-assisted research and workflow automation",
    ],
    stack: ["n8n", "Docker", "WSL2", "Ollama", "Local LLMs", "Webhooks"],
    visualLabel: "Documented workflow visualization (not a product screenshot)",
    workflow: [
      "Input",
      "n8n Workflow",
      "Local AI Model",
      "Structured Results",
      "Data Table",
    ],
  },
  {
    id: "eprofly",
    name: "Eprofly",
    category: "Social and Video Application",
    status: "Prototype",
    description:
      "A social and video-oriented application concept centered on sharing, communication, and real-time interaction experiences.",
    highlights: [
      "Social networking",
      "Video sharing",
      "Real-time chat",
      "Firebase integration",
    ],
    stack: ["Mobile/Web Concept", "Realtime Features", "Firebase"],
    visualLabel: "Abstract social platform artwork (concept visual)",
  },
  {
    id: "road-rescue",
    name: "Road Rescue",
    category: "Location-Based Service Application",
    status: "Concept",
    description:
      "A location-aware roadside assistance concept exploring service discovery, mapping, and mobile response workflows.",
    highlights: [
      "On-demand roadside assistance concept",
      "Maps and geolocation",
      "Mobile service workflows",
    ],
    stack: ["Location Services", "Maps", "Service Workflows"],
    visualLabel: "Abstract location-service artwork (concept visual)",
  },
];

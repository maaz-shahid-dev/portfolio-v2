export type ProjectStatus = "Production" | "Prototype" | "Concept";
export type ProjectLink = { label: string; href: string };

export type ProjectCaseStudy = {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  stack: string[];
  keyFeatures: string[];
  architecture: string[];
  challenges: string[];
  outcomes: string[];
  links: ProjectLink[];
  visual: {
    kind: "conceptual-artwork" | "workflow-diagram" | "screenshot";
    label: string;
    alt: string;
    imageSrc?: string;
    note?: string;
  };
  workflow?: string[];
};

export const projects: ProjectCaseStudy[] = [
  {
    id: "shifamart",
    name: "ShifaMart",
    category: "Pharmacy Management SaaS",
    status: "Production",
    featured: true,
    overview:
      "A pharmacy management SaaS platform presented as a production web solution for pharmacy operations, accessible via its public website.",
    problem:
      "Pharmacy businesses require organized digital workflows to manage inventory, sales, staff access, and multi-location operations reliably.",
    solution:
      "ShifaMart is presented as a cloud-based pharmacy management platform supporting operational workflows such as inventory, sales/POS, reporting, and multi-branch coordination through a centralized system.",
    responsibilities: [
      "Contributed to software development and implementation work for the platform’s documented pharmacy management capabilities (details limited to verified/public information).",
    ],
    stack: ["SaaS Web Platform", "PostgreSQL", "Cloud Infrastructure", "Web Application Workflows"],
    keyFeatures: [
      "Pharmacy inventory management",
      "Sales and POS workflows",
      "Multi-branch workflows",
      "Role-based access considerations",
      "Reporting capabilities",
      "Cloud-based operations",
    ],
    architecture: [
      "Web SaaS application architecture",
      "PostgreSQL-backed data management (as documented for the platform)",
      "Role-aware operational workflows",
      "Deployment and cloud-hosted access model",
    ],
    challenges: [],
    outcomes: [],
    links: [{ label: "Visit Website", href: "https://www.shifamart.app/" }],
    visual: {
      kind: "conceptual-artwork",
      label: "Conceptual SaaS dashboard artwork",
      alt: "Conceptual artwork representing a pharmacy management SaaS dashboard (not an actual ShifaMart screenshot)",
      note: "Authentic product screenshot not included in this repository; artwork is clearly labeled as conceptual.",
    },
  },
  {
    id: "islamic-life",
    name: "Islamic Life",
    category: "Published Flutter Android Application",
    status: "Production",
    featured: true,
    overview:
      "A published Flutter Android application providing Islamic utility features for everyday use, available on Google Play.",
    problem:
      "Users benefit from a single, accessible mobile experience for common Islamic utilities and daily reference needs.",
    solution:
      "Islamic Life delivers a mobile app experience with core Islamic utility features in an Android application published on Google Play.",
    responsibilities: [
      "Mobile application development and feature implementation in Flutter (as represented by the published app listing and verified project context).",
    ],
    stack: ["Flutter", "Dart", "Android", "Mobile Application Development"],
    keyFeatures: ["Quran access", "Prayer times", "Qibla direction", "Duas", "Islamic utilities"],
    architecture: [
      "Flutter mobile application architecture",
      "Device-friendly utility feature modules",
      "Published Android distribution via Google Play",
    ],
    challenges: [],
    outcomes: [],
    links: [
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.maazshahidapps.islamiclife",
      },
    ],
    visual: {
      kind: "conceptual-artwork",
      label: "Conceptual mobile app artwork",
      alt: "Conceptual artwork representing an Islamic utility mobile app (not an actual app screenshot)",
      note: "Authentic app screenshots not stored in this repository; artwork is clearly labeled as conceptual.",
    },
  },
  {
    id: "spendwise",
    name: "SpendWise",
    category: "Published Flutter Expense Tracker",
    status: "Production",
    featured: true,
    overview:
      "A published Flutter expense and budget tracking Android application focused on personal finance organization, available on Google Play.",
    problem:
      "Individuals need a simple way to track expenses, organize budgets, and review spending patterns over time.",
    solution:
      "SpendWise provides a mobile budgeting and expense-tracking experience with categorized records and reporting-oriented views, including offline-capable usage patterns as documented.",
    responsibilities: [
      "Mobile application development and feature implementation in Flutter (as represented by the published app listing and verified project context).",
    ],
    stack: ["Flutter", "Dart", "Android", "Mobile Application Development"],
    keyFeatures: [
      "Expense tracking",
      "Budget management",
      "Categories",
      "Financial reports/views",
      "Offline functionality (as documented)",
    ],
    architecture: [
      "Flutter mobile application architecture",
      "Local/offline-capable data handling patterns (as documented)",
      "Published Android distribution via Google Play",
    ],
    challenges: [],
    outcomes: [],
    links: [
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.maazshahidapps.spendwiseapp",
      },
    ],
    visual: {
      kind: "conceptual-artwork",
      label: "Conceptual finance app artwork",
      alt: "Conceptual artwork representing an expense tracking mobile app (not an actual app screenshot)",
      note: "Authentic app screenshots not stored in this repository; artwork is clearly labeled as conceptual.",
    },
  },
  {
    id: "eprofly",
    name: "Eprofly",
    category: "Social and Communication Application",
    status: "Prototype",
    featured: true,
    overview:
      "A social and communication application project involving mobile and backend technologies. No commercial launch or active user metrics are claimed.",
    problem:
      "Social products require reliable communication, media sharing, and notification experiences supported by coordinated client and backend systems.",
    solution:
      "Eprofly is presented as a prototype/development project exploring social communication features such as messaging, notifications, and multimedia interactions across application and backend components.",
    responsibilities: [
      "Verified development contributions involving Flutter",
      "Messaging-related feature work",
      "Notifications-related implementation work",
      "Multimedia-related feature work",
      "Firebase integration work",
      "Node.js and MongoDB-related backend development contributions",
    ],
    stack: ["Flutter", "Firebase", "Node.js", "MongoDB", "Messaging", "Notifications", "Multimedia"],
    keyFeatures: [
      "Messaging and communication features",
      "Notification-related functionality",
      "Multimedia-oriented interactions",
      "Client-backend integration workflows",
    ],
    architecture: [
      "Flutter client application components",
      "Firebase-backed services/integration points",
      "Node.js backend components",
      "MongoDB data storage components",
    ],
    challenges: [],
    outcomes: [],
    links: [],
    visual: {
      kind: "conceptual-artwork",
      label: "Conceptual social app artwork",
      alt: "Conceptual artwork representing a social and communication application (not an actual product screenshot)",
      note: "No verified public demo/screenshot links provided; presented without claims of commercial launch or active users.",
    },
  },
  {
    id: "ai-seo-keyword-research-automation",
    name: "AI SEO & Keyword Research Automation",
    category: "AI and Workflow Automation",
    status: "Prototype",
    featured: true,
    overview:
      "A practical development project for local keyword research and AI-assisted workflow automation using a documented n8n-based pipeline.",
    problem:
      "Keyword research and content-support workflows can involve repetitive steps and inconsistent outputs when handled manually.",
    solution:
      "An automated workflow orchestrates input handling, local AI processing, and structured result generation with webhook-based responses and deduplication-aware data handling.",
    responsibilities: [
      "Designed and implemented a documented local automation workflow for keyword research support",
      "Configured workflow steps for structured JSON responses via webhooks",
      "Applied data table usage to help prevent duplicate records in the documented flow",
    ],
    stack: ["n8n", "Docker", "WSL2", "Ollama", "Local LLMs", "Webhooks"],
    keyFeatures: [
      "Local keyword research workflow",
      "Structured JSON responses through webhooks",
      "Data table usage to prevent duplicate records",
      "AI-assisted research and workflow automation",
    ],
    architecture: [
      "Input trigger/webhook entry point",
      "n8n workflow orchestration",
      "Local LLM processing via Ollama",
      "Structured result output and data table storage",
    ],
    challenges: [],
    outcomes: [],
    links: [],
    workflow: ["Input", "n8n Workflow", "Local AI Model", "Structured Results", "Data Table"],
    visual: {
      kind: "workflow-diagram",
      label: "Documented workflow visualization",
      alt: "Diagram showing the documented AI SEO and keyword research automation workflow",
      note: "Visualization reflects only the documented workflow components.",
    },
  },
  {
    id: "road-rescue",
    name: "Road Rescue",
    category: "Location-Based Service Application (Concept)",
    status: "Concept",
    featured: false,
    overview:
      "A clearly labeled concept for a location-aware roadside assistance application exploring service discovery and response workflows.",
    problem:
      "Drivers may need a streamlined way to request roadside assistance and share location context during service incidents.",
    solution:
      "The concept explores mobile, mapping, and workflow ideas for connecting assistance requests with location-aware service processes.",
    responsibilities: [
      "Concept exploration and solution ideation for location-based roadside assistance workflows (no production claims).",
    ],
    stack: ["Concept Design", "Maps/Geolocation Concepts", "Mobile Service Workflows"],
    keyFeatures: [
      "On-demand roadside assistance concept",
      "Location-aware request flow ideas",
      "Service workflow exploration",
    ],
    architecture: [
      "Conceptual mobile client flow",
      "Location/mapping integration concept",
      "Service request and coordination workflow concept",
    ],
    challenges: [],
    outcomes: [],
    links: [],
    visual: {
      kind: "conceptual-artwork",
      label: "Clearly labeled concept artwork",
      alt: "Conceptual artwork representing a location-based roadside assistance app idea",
      note: "Retained as a concept only; not presented as a launched or production system.",
    },
  },
];


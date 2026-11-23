import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Cloud,
  Code2,
  LifeBuoy,
  PanelsTopLeft,
  Plug,
  Smartphone,
  Workflow,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Flutter Mobile App Development",
    description:
      "Design and build cross-platform mobile applications with a focus on maintainable architecture and practical product delivery.",
    icon: Smartphone,
  },
  {
    title: "Web Application Development",
    description:
      "Create responsive, modern web interfaces and application experiences using current frontend technologies.",
    icon: PanelsTopLeft,
  },
  {
    title: "Firebase Integration",
    description:
      "Implement Firebase-backed features such as authentication, data storage, and cloud-connected application workflows.",
    icon: Cloud,
  },
  {
    title: "SaaS Development",
    description:
      "Develop software-as-a-service product foundations with attention to workflows, usability, and scalable cloud infrastructure.",
    icon: Code2,
  },
  {
    title: "AI Workflow Automation",
    description:
      "Build automation workflows that connect tools, APIs, and AI-assisted processes to reduce repetitive operational work.",
    icon: Bot,
  },
  {
    title: "Technical Consulting",
    description:
      "Provide practical guidance on implementation approaches, tooling choices, and technical coordination for software projects.",
    icon: Workflow,
  },
  {
    title: "API Integration",
    description:
      "Connect applications with external services and APIs to enable reliable data exchange and feature integrations.",
    icon: Plug,
  },
  {
    title: "Application Troubleshooting",
    description:
      "Investigate issues across mobile, web, and cloud-connected systems to improve stability and deployment readiness.",
    icon: LifeBuoy,
  },
];

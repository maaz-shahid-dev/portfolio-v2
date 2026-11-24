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
      "Cross-platform mobile application development for Android and iOS with practical architecture, integrations, and product-focused delivery.",
    icon: Smartphone,
  },
  {
    title: "Web & SaaS Development",
    description:
      "Responsive web applications and SaaS product interfaces built with modern frontend technologies and maintainable implementation patterns.",
    icon: PanelsTopLeft,
  },
  {
    title: "Backend & API Integration",
    description:
      "Integration of REST APIs, Firebase services, and backend-connected workflows to enable reliable application functionality.",
    icon: Plug,
  },
  {
    title: "Cloud, Deployment & Operations",
    description:
      "Practical support for cloud-connected delivery, deployment workflows, environment setup, and operational troubleshooting.",
    icon: Cloud,
  },
  {
    title: "AI Workflow Automation",
    description:
      "Automation solutions using n8n, webhooks, local LLM tooling, and structured workflows to reduce repetitive processes.",
    icon: Bot,
  },
  {
    title: "SaaS & Product Engineering",
    description:
      "Implementation support for SaaS features, role-aware workflows, and scalable product foundations aligned with real business needs.",
    icon: Code2,
  },
  {
    title: "Technical Consulting & Coordination",
    description:
      "Technical guidance, implementation planning, and coordination to help teams make clear, practical delivery decisions.",
    icon: Workflow,
  },
  {
    title: "Troubleshooting & Reliability Support",
    description:
      "Investigation and resolution support for issues across mobile, web, and cloud-integrated systems to improve stability.",
    icon: LifeBuoy,
  },
];


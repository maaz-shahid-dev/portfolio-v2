import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Gauge,
  MapPinned,
  Search,
  Sparkles,
  FileSearch,
} from "lucide-react";

export type GrowthItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  status: "Hands-on project experience" | "Currently learning / research focus";
  focus: string;
};

export const seoGrowthIntro = {
  title: "SEO, AI & Digital Growth",
  subtitle:
    "Combining software development, search optimization, and intelligent automation to build discoverable digital experiences.",
};

export const seoGrowthCards: GrowthItem[] = [
  {
    title: "SEO & Keyword Research",
    description:
      "Keyword discovery, search intent, keyword clustering, and research workflows.",
    icon: Search,
    status: "Hands-on project experience",
    focus: "Applied in practical automation and research workflows.",
  },
  {
    title: "On-Page SEO",
    description:
      "Metadata, content structure, internal linking, and optimization principles.",
    icon: FileSearch,
    status: "Currently learning / research focus",
    focus: "Learning area supported by implementation practice in portfolio projects.",
  },
  {
    title: "Technical SEO",
    description:
      "Crawlability, indexing, sitemap configuration, structured data, and performance fundamentals.",
    icon: Gauge,
    status: "Hands-on project experience",
    focus: "Applied in site structure, metadata, sitemap/robots, and performance-minded implementation.",
  },
  {
    title: "Local SEO",
    description:
      "Local search visibility, Google Business Profile optimization concepts, and local keyword strategies.",
    icon: MapPinned,
    status: "Currently learning / research focus",
    focus: "Ongoing learning through iSkills NEXT training.",
  },
  {
    title: "AEO & GEO",
    description:
      "Answer Engine Optimization and Generative Engine Optimization learning and research.",
    icon: Sparkles,
    status: "Currently learning / research focus",
    focus: "Ongoing research and training focus, not presented as completed certification.",
  },
  {
    title: "AI SEO Automation",
    description:
      "n8n workflows, local AI models, webhooks, structured outputs, and research automation.",
    icon: Bot,
    status: "Hands-on project experience",
    focus: "Applied in the documented AI SEO & Keyword Research Automation project.",
  },
];
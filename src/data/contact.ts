export type ContactIntent =
  | "remote-employment"
  | "international-relocation"
  | "freelance-project"
  | "technical-consulting"
  | "general-inquiry";

export type ContactCategory = {
  value: ContactIntent;
  label: string;
  ctaLabel: string;
  description: string;
  subject: string;
  messageHint: string;
};

export const contactCategories: ContactCategory[] = [
  {
    value: "remote-employment",
    label: "Remote employment",
    ctaLabel: "Hire Me",
    description: "For remote and full-time software development opportunities.",
    subject: "Remote Software Development Opportunity",
    messageHint:
      "Share the role, team, location/time zone expectations, and how my experience could support your goals.",
  },
  {
    value: "international-relocation",
    label: "International relocation",
    ctaLabel: "Discuss Relocation",
    description: "For international employment and relocation discussions.",
    subject: "International Employment & Relocation Discussion",
    messageHint:
      "Share the opportunity, location, role scope, and any relocation or visa-related context you would like to discuss.",
  },
  {
    value: "freelance-project",
    label: "Freelance project",
    ctaLabel: "Start a Project",
    description:
      "For freelance development, SaaS, mobile applications, backend integration, and automation projects.",
    subject: "Freelance / Project Collaboration Inquiry",
    messageHint:
      "Share your project goals, timeline, scope, and the type of software or automation support you need.",
  },
  {
    value: "technical-consulting",
    label: "Technical consulting",
    ctaLabel: "Technical Consulting",
    description: "For technical guidance, architecture input, and implementation planning.",
    subject: "Technical Consulting Inquiry",
    messageHint:
      "Share the challenge, current context, and the kind of technical guidance or collaboration you are looking for.",
  },
  {
    value: "general-inquiry",
    label: "General inquiry",
    ctaLabel: "General Inquiry",
    description: "For other questions or professional conversations.",
    subject: "Portfolio Inquiry",
    messageHint: "Share your message and I will respond as soon as possible.",
  },
];

export const CONTACT_INTENT_EVENT = "portfolio:contact-intent";

export function requestContactIntent(intent: ContactIntent) {
  if (typeof window === "undefined") return;
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.dispatchEvent(new CustomEvent<ContactIntent>(CONTACT_INTENT_EVENT, { detail: intent }));
}

export function getContactCategory(intent: ContactIntent): ContactCategory {
  return contactCategories.find((c) => c.value === intent) ?? contactCategories[contactCategories.length - 1];
}

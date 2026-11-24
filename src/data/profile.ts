export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Profile = {
  name: string;
  title: string;
  heroHeadline: string;
  heroDescription: string;
  availability: string;
  location: string;
  email: string;
  summary: string;
  aboutIntro: string;
  portfolioUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  whatsappUrl: string;
  socialLinks: SocialLink[];
  cvUrl: string;
  education: {
    degree: string;
    institution: string;
    period: string;
  };
  languages: { name: string; proficiency: string }[];
};

export const profile: Profile = {
  name: "Muhammad Maaz Shahid",
  title: "Software Developer | Technical Team Lead | IT Operations & AI Automation",
  heroHeadline: "Building Software That Solves Real-World Problems.",
  heroDescription:
    "I develop mobile applications, SaaS platforms, backend integrations, and AI-powered automation solutions, combining practical software development experience with technical coordination and product-focused thinking.",
  availability:
    "Based in Pakistan. Open to remote opportunities, international relocation, and freelance collaborations.",
  location: "Muzaffargarh, Pakistan",
  email: "m.maazshahid2003@gmail.com",
  summary:
    "Software Developer with 4.5+ years of hands-on software development experience since May 2022, spanning mobile applications, web software, Firebase-backed solutions, SaaS workflows, backend integrations, and AI-powered automation. This hands-on experience is distinct from formal employment and internship periods documented in the professional timeline. I combine practical engineering with technical coordination, troubleshooting, deployment, and product-focused delivery.",
  aboutIntro:
    "I focus on building reliable, real-world software—spanning Flutter mobile apps, SaaS and web platforms, backend/API integrations, and workflow automation—while collaborating across technical delivery, operations, and continuous improvement, with hands-on development experience since May 2022.",
  portfolioUrl: "https://portfolio-4bdf2.web.app/",
  linkedinUrl: "https://www.linkedin.com/in/maaz-shahid-5457043ba/",
  githubUrl: "https://github.com/maaz-shahid-dev",
  whatsappUrl: "https://wa.me/923237843084",
  cvUrl: "/Muhammad-Maaz-Shahid-CV.pdf",
  education: {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Government College University Faisalabad — Layyah Campus",
    period: "2021–2025",
  },
  languages: [
    { name: "Urdu", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Punjabi", proficiency: "Conversational" },
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maaz-shahid-5457043ba/",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/maaz-shahid-dev",
      external: true,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/923237843084",
      external: true,
    },
  ],
};


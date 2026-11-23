export type SocialLink = {
  label: string;
  href: string;
  placeholder?: boolean;
  external?: boolean;
};

export type Profile = {
  name: string;
  headline: string;
  location: string;
  email: string;
  summary: string;
  portfolioUrl: string;
  linkedinUrl: string;
  socialLinks: SocialLink[];
  heroIntro: string;
  cvUrl?: string;
  education: {
    degree: string;
    institution: string;
    period: string;
  };
  languages: { name: string; proficiency: string }[];
};

export const profile: Profile = {
  name: "Muhammad Maaz Shahid",
  headline: "Software Developer | Technical Team Lead | IT Operations & AI Automation",
  location: "Muzaffargarh, Pakistan",
  email: "m.maazshahid2003@gmail.com",
  summary:
    "Software Developer with 4.5+ years of hands-on experience building mobile applications, web-based software, Firebase-powered solutions, and AI automation workflows. Experienced in Flutter, Dart, Firebase, REST APIs, application architecture, technical coordination, troubleshooting, and software deployment. My work includes mobile applications, pharmacy management SaaS, AI-powered automation, and location-based digital solutions.",
  heroIntro:
    "With 4.5+ years of hands-on experience, I build mobile, web, Firebase-backed, and AI automation solutions—combining software engineering, technical coordination, and search-aware digital thinking to deliver reliable, discoverable products.",
  portfolioUrl: "https://portfolio-4bdf2.web.app/",
  linkedinUrl: "https://www.linkedin.com/in/maaz-shahid-5457043ba/",
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
    {
      label: "Facebook",
      href: "#",
      placeholder: true,
    },
  ],
};

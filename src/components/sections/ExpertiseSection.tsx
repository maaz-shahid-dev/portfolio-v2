import { Bot, Cloud, Code2, Database, Globe, Search, Smartphone, Users, Workflow } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { seoGrowthCards, seoGrowthIntro } from "../../data/seoGrowth";
import { digitalEntrepreneurship, iSkillsNext } from "../../data/learning";

type ExpertiseCategory = {
  title: string;
  icon: typeof Smartphone;
  level: "Demonstrated experience" | "Ongoing learning";
  items: string[];
  note: string;
};

const categories: ExpertiseCategory[] = [
  {
    title: "Mobile application development",
    icon: Smartphone,
    level: "Demonstrated experience",
    items: ["Flutter", "Dart", "Firebase", "Android/iOS delivery", "REST APIs", "State management and app architecture practices"],
    note: "Demonstrated through verified professional roles and published/mobile project work.",
  },
  {
    title: "Web and SaaS development",
    icon: Code2,
    level: "Demonstrated experience",
    items: ["React", "TypeScript", "Vite", "Next.js (project capability)", "Tailwind CSS", "SaaS workflow-oriented interfaces"],
    note: "Applied in portfolio, SaaS, and web application contexts with a focus on usable, maintainable interfaces.",
  },
  {
    title: "Backend and API integration",
    icon: Workflow,
    level: "Demonstrated experience",
    items: ["Node.js", "REST API integration", "Firebase services", "Webhook-driven workflows", "Client-backend coordination"],
    note: "Used in application integrations, backend-connected features, and automation workflows.",
  },
  {
    title: "Database management",
    icon: Database,
    level: "Demonstrated experience",
    items: ["PostgreSQL", "MongoDB", "Firestore", "Structured data handling", "Data table/workflow storage patterns"],
    note: "Experience includes relational and document-oriented data systems across app and workflow contexts.",
  },
  {
    title: "Cloud and deployment",
    icon: Cloud,
    level: "Demonstrated experience",
    items: ["Firebase Hosting", "Vercel (deployment capability)", "Docker", "Environment-aware delivery", "Troubleshooting and operations support"],
    note: "Focused on practical deployment, configuration, and reliability-minded delivery workflows.",
  },
  {
    title: "AI automation",
    icon: Bot,
    level: "Demonstrated experience",
    items: ["n8n workflow automation", "Ollama / local LLM workflows", "Webhook integrations", "Structured JSON outputs", "AI-assisted research automation"],
    note: "Demonstrated through documented AI SEO & keyword research automation work.",
  },
  {
    title: "Technical coordination",
    icon: Users,
    level: "Demonstrated experience",
    items: ["Technical leadership support", "Cross-functional coordination", "Implementation planning", "Troubleshooting and delivery alignment"],
    note: "Reflected in senior/lead-oriented responsibilities and collaborative software delivery contexts.",
  },
  {
    title: "SEO and digital technologies",
    icon: Search,
    level: "Ongoing learning",
    items: ["SEO and keyword research", "On-page and technical SEO fundamentals", "Local SEO concepts", "AEO/GEO research", "Digital product and storefront operations"],
    note: "Includes demonstrated hands-on elements and ongoing learning/research; specific items below distinguish status.",
  },
];

function statusClass(status: string) {
  return status.includes("Hands-on")
    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
    : "border-amber-400/30 bg-amber-400/10 text-amber-200";
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Expertise"
            title="Professional capabilities across software, cloud, and automation"
            description="Organized by capability area with clear distinction between demonstrated professional experience and ongoing learning or research."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.03}>
              <article className="glass h-full rounded-3xl p-6 transition hover:border-violet-300/25">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 text-violet-100 ring-1 ring-white/10">
                    <cat.icon size={22} />
                  </span>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold leading-4 ${cat.level === "Demonstrated experience" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border-amber-400/30 bg-amber-400/10 text-amber-200"}`}>
                    {cat.level}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">{cat.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300/80" />{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-5 text-slate-400">{cat.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="mb-6 text-center">
              <p className="section-kicker">SEO & Digital Growth</p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">{seoGrowthIntro.title}</h3>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">{seoGrowthIntro.subtitle}</p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {seoGrowthCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.03}>
                <article className="glass h-full rounded-3xl p-6 transition hover:border-violet-300/25">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 text-violet-100 ring-1 ring-white/10">
                      <card.icon size={20} />
                    </span>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${statusClass(card.status)}`}>{card.status}</span>
                  </div>
                  <h4 className="mt-4 font-heading text-lg font-semibold text-white">{card.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                  <p className="mt-3 text-xs leading-5 text-slate-400">{card.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass h-full rounded-[2rem] p-6 sm:p-7">
              <p className="section-kicker">Professional Development</p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-white">Continuous Learning — {iSkillsNext.program}</h3>
              <p className="mt-2 text-sm text-slate-300">Mentor: <span className="font-medium text-white">{iSkillsNext.mentor}</span></p>
              <p className="mt-2 inline-flex rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-100">{iSkillsNext.status}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{iSkillsNext.note}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {iSkillsNext.areas.map((area) => (
                  <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200">{area}</span>
                ))}
              </div>
              <ol className="mt-5 space-y-3">
                {iSkillsNext.timeline.map((step, idx) => (
                  <li key={step.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-medium text-white"><span className="mr-2 text-violet-300">{idx + 1}.</span>{step.label}</p>
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-xs text-amber-200">{step.state}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="glass h-full rounded-[2rem] p-6 sm:p-7">
              <p className="section-kicker">Digital Entrepreneurship</p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-white">{digitalEntrepreneurship.brand}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{digitalEntrepreneurship.disclaimer}</p>
              <ul className="mt-5 space-y-2">
                {digitalEntrepreneurship.showcase.map((item) => (
                  <li key={item} className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />{item}
                  </li>
                ))}
              </ul>
              <a href={digitalEntrepreneurship.storeUrl} target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-110">
                <Globe size={16} /> Visit Vumora on Etsy
              </a>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

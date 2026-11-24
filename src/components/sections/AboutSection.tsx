import { Briefcase, Cpu, Download, Globe2, Layers, Wrench } from "lucide-react";
import portrait from "../../assets/portrait.jpg";
import { profile } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const highlights = [
  { icon: Layers, title: "Product-Focused Engineering", text: "Mobile apps, SaaS platforms, and web software built around real operational and user needs." },
  { icon: Briefcase, title: "Technical Leadership & Coordination", text: "Delivery-focused collaboration, implementation planning, and practical technical coordination." },
  { icon: Cpu, title: "AI & Workflow Automation", text: "Automation solutions using tools and integrations to improve efficiency and consistency." },
  { icon: Wrench, title: "IT Operations & Troubleshooting", text: "Deployment, integration, debugging, and reliability-minded support across systems." },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <SectionHeading
              kicker="About"
              title="International-ready software professional"
              description={profile.summary}
            />
            <div className="mt-8 flex flex-col gap-5 text-slate-300">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative mx-auto w-28 shrink-0 sm:mx-0 sm:w-32">
                  <div className="pointer-events-none absolute -inset-3 rounded-[1.6rem] bg-gradient-to-br from-violet-500/20 to-fuchsia-400/15 blur-lg" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-white/5 p-1 shadow-lg shadow-violet-950/20">
                    <img
                      src={portrait}
                      alt="Professional portrait of Muhammad Maaz Shahid"
                      width={720}
                      height={956}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/4] w-full rounded-[1.1rem] object-cover object-top"
                    />
                  </div>
                </div>
                <p className="text-sm leading-7 sm:text-base">{profile.aboutIntro}</p>
              </div>
              <p>
                My core work spans Flutter/Dart mobile development, Firebase and REST API integrations, Next.js/web applications, Node.js backend development, and data-backed systems using PostgreSQL, MongoDB, and Firestore. I also work with Docker, deployment workflows, and AI automation using n8n and local LLM tooling such as Ollama.
              </p>
              <p>
                I value clear communication, maintainable architecture, and pragmatic problem-solving—whether contributing to remote teams, international opportunities, or client-focused software and automation projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Download size={16} /> Download CV (PDF)
                </a>
                <a
                  href="#resume"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/15"
                >
                  <Globe2 size={16} /> View Resume Section
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative">
            <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Professional strengths</p>
              <div className="mt-6 space-y-4">
                {highlights.map((item, i) => (
                  <div key={item.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-300/25 hover:bg-white/[0.05]">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 text-violet-100 ring-1 ring-white/10">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                      </div>
                    </div>
                    {i < highlights.length - 1 ? <span className="absolute left-[2.35rem] top-[3.6rem] hidden h-4 w-px bg-gradient-to-b from-violet-400/40 to-transparent sm:block" /> : null}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-sm text-slate-200">
                <strong className="text-white">{profile.availability}</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}


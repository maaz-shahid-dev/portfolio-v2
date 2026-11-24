import { Download, ExternalLink, GraduationCap, Languages, Briefcase } from "lucide-react";
import { profile } from "../../data/profile";
import { experience } from "../../data/experience";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const coreCompetencies = [
  "Flutter & Dart mobile development",
  "Firebase and REST API integration",
  "Next.js and web application development",
  "Node.js backend development",
  "PostgreSQL, MongoDB, and Firestore",
  "SaaS product development",
  "Docker, deployment, and cloud operations",
  "AI automation with n8n and Ollama",
  "Technical coordination and IT operations",
];

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Resume"
            title="Professional resume overview"
            description="A concise, verified summary of experience, competencies, education, and languages. Download or view the latest available CV PDF for the full document."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="glass mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-[2rem] p-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-heading text-xl font-semibold text-white">Curriculum Vitae</p>
              <p className="mt-1 text-sm text-slate-300">Latest available CV in this workspace. The original PDF is not modified by this website.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={profile.cvUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                <ExternalLink size={16} /> View CV
              </a>
              <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-110">
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass h-full rounded-3xl p-6">
              <h3 className="font-heading text-xl font-semibold text-white">Professional summary</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{profile.summary}</p>
              <p className="mt-4 rounded-xl border border-violet-400/20 bg-violet-500/10 p-3 text-sm text-slate-200">
                {profile.availability}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="glass h-full rounded-3xl p-6">
              <h3 className="font-heading text-xl font-semibold text-white">Core competencies</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {coreCompetencies.map((item) => (
                  <li key={item} className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />{item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal>
            <article className="glass h-full rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 text-violet-100 ring-1 ring-white/10"><GraduationCap size={20} /></span>
                <h3 className="font-heading text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="mt-5 font-medium text-white">{profile.education.degree}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{profile.education.institution}</p>
              <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-violet-100">{profile.education.period}</p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="glass h-full rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 text-violet-100 ring-1 ring-white/10"><Languages size={20} /></span>
                <h3 className="font-heading text-xl font-semibold text-white">Languages</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {profile.languages.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="font-medium text-white">{lang.name}</span>
                    <span className="text-sm text-slate-300">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.04}>
          <article className="glass mt-6 rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 text-violet-100 ring-1 ring-white/10"><Briefcase size={20} /></span>
              <h3 className="font-heading text-xl font-semibold text-white">Professional experience highlights</h3>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {experience.map((item) => (
                <div key={`${item.title}-${item.organization}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-medium text-violet-200">{item.period}</p>
                  <p className="mt-1 font-heading text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.organization}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              Hands-on software development experience since May 2022 (4.5+ years) is distinguished from formal employment and internship periods listed above.
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}

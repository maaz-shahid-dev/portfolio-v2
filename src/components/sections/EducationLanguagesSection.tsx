import { GraduationCap, Languages } from "lucide-react";
import { profile } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationLanguagesSection() {
  return (
    <section id="education" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Background"
            title="Education & Languages"
            description="Academic foundation and communication strengths presented clearly and concisely."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="glass h-full rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-cyan-200 ring-1 ring-white/10">
                  <GraduationCap size={20} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="mt-5 font-medium text-white">{profile.education.degree}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{profile.education.institution}</p>
              <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-cyan-100">{profile.education.period}</p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="glass h-full rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-cyan-200 ring-1 ring-white/10">
                  <Languages size={20} />
                </span>
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
      </Container>
    </section>
  );
}
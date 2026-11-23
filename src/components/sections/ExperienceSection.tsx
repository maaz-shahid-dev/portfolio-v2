import { BadgeCheck } from "lucide-react";
import { experience } from "../../data/experience";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Professional Experience"
            title="Verified experience timeline"
            description="Roles, organizations, and dates reflect verified entries. Detailed responsibilities can be added from the CV when the file or text is available in the workspace; no employers, dates, or outcomes are invented."
          />
        </Reveal>
        <div className="relative mt-10 sm:mt-12">
          <div
            className="absolute bottom-0 left-[0.95rem] top-2 w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-transparent sm:left-6"
            aria-hidden="true"
          />
          <div className="space-y-5 sm:space-y-6">
            {experience.map((item, i) => (
              <Reveal key={`${item.title}-${item.organization}-${i}`} delay={i * 0.04}>
                <div className="relative pl-10 sm:pl-16">
                  <span className="absolute left-[0.95rem] top-7 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/50 bg-[#070b17] sm:left-6">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                  </span>
                  <article className="glass rounded-3xl p-5 sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                        {item.organization ? (
                          <p className="mt-1 text-sm font-medium text-cyan-200">{item.organization}</p>
                        ) : null}
                        {item.period ? <p className="mt-1 text-sm text-slate-400">{item.period}</p> : null}
                      </div>
                      {item.verified ? (
                        <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                          <BadgeCheck size={14} /> Verified
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{item.description}</p>
                    {item.responsibilities?.length ? (
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {item.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { seoGrowthCards, seoGrowthIntro } from "../../data/seoGrowth";
import { iSkillsNext } from "../../data/learning";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function statusClass(status: string) {
  return status.includes("Hands-on")
    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
    : "border-amber-400/30 bg-amber-400/10 text-amber-200";
}

export function SeoGrowthSection() {
  return (
    <section id="seo-growth" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Digital Growth"
            title={seoGrowthIntro.title}
            description={seoGrowthIntro.subtitle}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {seoGrowthCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.04}>
              <article className="glass group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_translateY(-4px)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-cyan-200 ring-1 ring-white/10 transition group-hover:scale-110">
                    <card.icon size={22} />
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold leading-4 ${statusClass(card.status)}`}>
                    {card.status}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                <p className="mt-4 text-xs leading-5 text-slate-400">{card.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div id="iskills-next" className="mt-14 scroll-mt-24">
          <Reveal>
            <div className="glass overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="section-kicker">Continuous Learning</p>
                  <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">{iSkillsNext.title.replace("Continuous Learning — ", "")}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                    Training program: <span className="font-medium text-white">{iSkillsNext.program}</span> · Mentor: <span className="font-medium text-white">{iSkillsNext.mentor}</span>
                  </p>
                  <p className="mt-2 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100">
                    {iSkillsNext.status}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{iSkillsNext.note}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {iSkillsNext.areas.map((area) => (
                      <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Learning journey</p>
                  <ol className="mt-4 space-y-3">
                    {iSkillsNext.timeline.map((step, idx) => (
                      <li key={step.label} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 pl-12">
                        <span className="absolute left-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-slate-950">
                          {idx + 1}
                        </span>
                        <span className="absolute left-[1.7rem] top-10 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-cyan-400/40 to-transparent last:hidden" aria-hidden="true" />
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-medium text-white">{step.label}</p>
                          <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-2.5 py-1 text-xs text-violet-100">{step.state}</span>
                        </div>
                        <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400/70 to-violet-500/70" />
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 text-xs text-slate-400">Visual progress bars indicate active learning only (no completion percentages claimed).</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
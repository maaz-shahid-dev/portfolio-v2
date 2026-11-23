import { ExternalLink, Package, Palette, Search, Store, Tags } from "lucide-react";
import { digitalEntrepreneurship } from "../../data/learning";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [Package, Palette, Search, Tags, Store];

export function DigitalEntrepreneurshipSection() {
  return (
    <section id="ventures" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Ventures"
            title={digitalEntrepreneurship.title}
            description="A digital product and storefront initiative presented with a focus on capabilities and presentation—without fabricated business metrics."
            align="center"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="glass mt-12 overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Featured storefront</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">{digitalEntrepreneurship.brand}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{digitalEntrepreneurship.disclaimer}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {digitalEntrepreneurship.showcase.map((item, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                      <div key={item} className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.05]">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-400/20 text-cyan-200 ring-1 ring-white/10">
                          <Icon size={18} />
                        </span>
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    );
                  })}
                </div>
                <a
                  href={digitalEntrepreneurship.storeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                >
                  Visit Vumora on Etsy <ExternalLink size={15} />
                </a>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/15 to-cyan-400/10 blur-2xl" aria-hidden="true" />
                <div className="relative grid gap-3 sm:grid-cols-2">
                  {["Printable Planners", "Templates", "Branded Listings", "Digital Storefront"].map((label, i) => (
                    <div
                      key={label}
                      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${i % 2 === 0 ? "from-violet-500/20 to-cyan-500/10" : "from-cyan-500/15 to-violet-500/15"} p-5 shadow-lg shadow-slate-950/20`}
                    >
                      <div className="h-24 rounded-2xl border border-white/10 bg-[#0b1222]/60 p-3">
                        <div className="h-2 w-16 rounded bg-white/20" />
                        <div className="mt-3 h-2 w-full rounded bg-white/10" />
                        <div className="mt-2 h-2 w-4/5 rounded bg-white/10" />
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="h-8 rounded-lg bg-cyan-400/20" />
                          <div className="h-8 rounded-lg bg-violet-400/20" />
                          <div className="h-8 rounded-lg bg-white/10" />
                        </div>
                      </div>
                      <p className="mt-3 text-sm font-medium text-white">{label}</p>
                      <p className="mt-1 text-xs text-slate-400">Tasteful product-inspired visual card</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
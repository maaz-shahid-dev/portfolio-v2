import { services } from "../../data/services";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Services"
            title="Practical services for product-focused development"
            description="Support across mobile apps, web experiences, cloud integrations, automation, and technical problem-solving."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.03}>
              <article className="glass group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-cyan-200 ring-1 ring-white/10 transition group-hover:scale-110 group-hover:text-white">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { type CSSProperties, type MouseEvent, useState } from "react";
import { Code2, Cpu, Database, Smartphone, Wrench } from "lucide-react";
import { skillCategories } from "../../data/skills";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [Smartphone, Code2, Database, Cpu, Wrench];

function TiltCard({ title, items, index }: { title: string; items: string[]; index: number }) {
  const [style, setStyle] = useState<CSSProperties>({});
  const Icon = icons[index % icons.length];

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 8;
    const ry = (px - 0.5) * 10;
    setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)` });
  };
  const reset = () => setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={style}
      className="glass group rounded-3xl p-6 transition-transform duration-200 will-change-transform"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-cyan-200 ring-1 ring-white/10 transition group-hover:scale-110 group-hover:text-white">
          <Icon size={20} />
        </span>
        <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition group-hover:border-cyan-300/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Interactive Skills"
            title="Capabilities across mobile, web, cloud, and automation"
            description="A categorized view of the technologies and practices I work with. Presented as capability areas without fabricated proficiency percentages."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <TiltCard title={cat.title} items={cat.items} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

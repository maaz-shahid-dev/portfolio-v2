import { ExternalLink, Layers3, X } from "lucide-react";
import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { projects, type Project } from "../../data/projects";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function statusStyles(status: Project["status"]) {
  if (status === "Production") return "border-emerald-400/30 bg-emerald-400/10 text-emerald-200";
  if (status === "Prototype") return "border-amber-400/30 bg-amber-400/10 text-amber-200";
  return "border-sky-400/30 bg-sky-400/10 text-sky-200";
}

function ProjectVisual({ project }: { project: Project }) {
  const palettes = [
    "from-violet-500/35 via-fuchsia-500/20 to-cyan-400/25",
    "from-cyan-500/30 via-blue-500/20 to-violet-500/30",
    "from-emerald-500/25 via-cyan-500/20 to-blue-500/25",
  ];
  const palette = palettes[project.name.length % palettes.length];
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${palette} p-5`}>
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative flex min-h-44 flex-col justify-between">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
            <Layers3 size={18} />
          </span>
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles(project.status)}`}>{project.status}</span>
        </div>
        <div>
          <p className="font-heading text-2xl font-bold text-white">{project.name}</p>
          <p className="mt-2 text-xs leading-5 text-slate-200/90">{project.visualLabel}</p>
        </div>
      </div>
    </div>
  );
}

function TiltCard({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [style, setStyle] = useState<CSSProperties>({});
  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setStyle({ transform: `perspective(1000px) rotateX(${(0.5 - py) * 6}deg) rotateY(${(px - 0.5) * 8}deg)` });
  };
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" })}
      style={style}
      className="glass group h-full w-full rounded-3xl p-4 text-left transition-transform duration-200 hover:border-cyan-300/25"
    >
      {children}
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={`${project.name} details`}>
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />
      <div className="glass relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-5 sm:p-7">
        <button type="button" onClick={onClose} aria-label="Close project details" className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10">
          <X size={18} />
        </button>
        <ProjectVisual project={project} />
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <p className="text-sm text-cyan-200">{project.category}</p>
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles(project.status)}`}>{project.status}</span>
        </div>
        <h3 className="mt-2 font-heading text-3xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Highlights</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">{h}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Technology / Context</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => <span key={s} className="rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-100 ring-1 ring-violet-400/20">{s}</span>)}
          </div>
        </div>
        {project.workflow?.length ? (
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Documented workflow</h4>
            <p className="mt-2 text-sm text-slate-300">Visualization reflects the documented workflow only, without invented integrations.</p>
            <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {(project.workflow ?? []).map((step, idx, arr) => (
                <li key={step} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <span className="mx-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-slate-950">{idx + 1}</span>
                  <p className="mt-2 text-sm font-medium leading-5 text-slate-200">{step}</p>
                  {idx < arr.length - 1 ? (
                    <>
                      <span className="pointer-events-none absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-cyan-300/70 lg:block">→</span>
                      <span className="mt-2 block text-cyan-300/70 lg:hidden" aria-hidden="true">↓</span>
                    </>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-110">
              {project.urlLabel ?? "View Project"} <ExternalLink size={15} />
            </a>
          ) : (
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">No public project URL available</span>
          )}
          <button type="button" onClick={onClose} className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5">Close</button>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Featured Projects"
            title="Interactive portfolio showcase"
            description="A selection of production work, prototypes, and concepts. Status labels and links are shown transparently, and visuals are abstract artwork unless otherwise noted."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.04}>
              <TiltCard onClick={() => setSelected(project)}>
                <ProjectVisual project={project} />
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-cyan-200">{project.category}</p>
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles(project.status)}`}>{project.status}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((s) => <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{s}</span>)}
                  </div>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-medium text-white">View details</span>
                    {project.url ? <span className="text-cyan-300">Live link available</span> : <span className="text-slate-500">No public URL</span>}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
      {selected ? <ProjectModal project={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}

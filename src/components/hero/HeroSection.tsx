import { ArrowDown, Download, ExternalLink, Globe, Plane, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import portrait from "../../assets/portrait.jpg";
import { profile } from "../../data/profile";
import { requestContactIntent } from "../../data/contact";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { CanvasErrorBoundary } from "../three/CanvasErrorBoundary";
import { MagneticButton } from "../ui/MagneticButton";

const HeroCanvas = lazy(async () => {
  const mod = await import("../three/HeroCanvas");
  return { default: mod.HeroCanvas };
});

function FallbackBlock() {
  return (
    <div className="h-full w-full rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.22),transparent_30%),radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.35),transparent_35%),linear-gradient(180deg,#0b1020,#05070f)]" />
  );
}

export function HeroSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-violet-700/20 blur-3xl" />
        <div className="absolute right-[-8%] top-36 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="section-shell grid min-h-[calc(100svh-6.5rem)] items-center gap-8 pb-14 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pb-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -6, 0] }}
              transition={reduced ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[9.5rem] shrink-0 sm:w-[11rem] lg:w-[12.5rem]"
            >
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.22),rgba(139,92,246,0.18)_45%,transparent_70%)] blur-xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -inset-3 rounded-[2.2rem] border border-violet-300/20" aria-hidden="true" />
              <div className="pointer-events-none absolute -inset-5 rounded-[2.6rem] border border-fuchsia-400/15" aria-hidden="true" />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-[2.4rem] border border-white/10"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={reduced ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <div className="glass relative overflow-hidden rounded-[2rem] border border-white/15 p-1.5 shadow-2xl shadow-violet-950/40">
                <div className="overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#0b1020]">
                  <img
                    src={portrait}
                    alt="Professional portrait of Muhammad Maaz Shahid"
                    width={720}
                    height={956}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/4] h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <p className="section-kicker text-center text-violet-200/90 lg:text-left">{profile.title}</p>
          <h1 className="text-center font-heading text-[clamp(2.15rem,8vw,4.2rem)] font-bold leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-left lg:text-6xl xl:text-[4.2rem]">
            {profile.heroHeadline}
          </h1>
          <p className="mt-3 text-center font-heading text-xl font-semibold text-slate-100 sm:text-2xl lg:text-left">
            {profile.name}
          </p>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-4 max-w-2xl text-center text-[0.98rem] leading-7 text-slate-300 sm:text-lg lg:text-left"
          >
            {profile.heroDescription}
          </motion.p>
          <p className="mt-4 inline-flex max-w-2xl items-center justify-center gap-2 self-center rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-center text-sm text-violet-100 lg:self-start lg:justify-start lg:text-left">
            <Globe size={15} className="shrink-0 text-violet-200" aria-hidden="true" />
            {profile.availability}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => requestContactIntent("remote-employment")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/30 transition hover:brightness-110"
            >
              <Rocket size={16} /> Hire Me
            </button>
            <button
              type="button"
              onClick={() => requestContactIntent("international-relocation")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-violet-300/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/15"
            >
              <Plane size={16} /> Discuss Relocation
            </button>
            <button
              type="button"
              onClick={() => requestContactIntent("freelance-project")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Globe size={16} /> Start a Project
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-slate-400 lg:text-left">
            Hire Me: remote/full-time roles · Discuss Relocation: international opportunities · Start a Project: freelance, SaaS, mobile, backend, and automation.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300 lg:justify-start">
            <MagneticButton
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-slate-200 transition hover:text-white"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href={profile.cvUrl}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-slate-200 transition hover:text-white"
              ariaLabel="Download CV PDF"
            >
              <Download size={16} /> Download CV
            </MagneticButton>
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-violet-300/30 hover:text-white"
              >
                {link.label} <ExternalLink size={14} className="opacity-70" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020]/75 shadow-2xl shadow-violet-950/35 sm:aspect-square sm:max-w-[30rem] lg:max-w-[34rem]"
          aria-hidden="true"
        >
          <CanvasErrorBoundary fallback={<FallbackBlock />}>
            <Suspense fallback={<FallbackBlock />}>
              <HeroCanvas reducedMotion={reduced} />
            </Suspense>
          </CanvasErrorBoundary>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05070f] to-transparent" />
        </motion.div>
      </div>
      <div className="section-shell pb-8">
        <a href="#about" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-200">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <ArrowDown size={14} className={reduced ? "" : "animate-bounce"} />
          </span>
          Scroll to explore
        </a>
      </div>
    </section>
  );
}


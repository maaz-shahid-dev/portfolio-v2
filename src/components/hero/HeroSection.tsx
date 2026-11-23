import { ArrowDown, Download, ExternalLink, Mail } from "lucide-react";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import portrait from "../../assets/portrait.jpg";
import { profile } from "../../data/profile";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { CanvasErrorBoundary } from "../three/CanvasErrorBoundary";
import { MagneticButton } from "../ui/MagneticButton";

const HeroCanvas = lazy(async () => {
  const mod = await import("../three/HeroCanvas");
  return { default: mod.HeroCanvas };
});

function FallbackBlock() {
  return (
    <div className="h-full w-full rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.35),transparent_35%),linear-gradient(180deg,#101827,#070b17)]" />
  );
}

export function HeroSection() {
  const reduced = usePrefersReducedMotion();
  const verifiedLinks = profile.socialLinks.filter((l) => !l.placeholder);
  const linkedin = verifiedLinks.find((l) => l.label === "LinkedIn");

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-[-8%] top-40 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
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
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),rgba(139,92,246,0.18)_45%,transparent_70%)] blur-xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -inset-3 rounded-[2.2rem] border border-cyan-300/20" aria-hidden="true" />
              <div className="pointer-events-none absolute -inset-5 rounded-[2.6rem] border border-violet-400/15" aria-hidden="true" />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-[2.4rem] border border-white/10"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={reduced ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <div className="glass relative overflow-hidden rounded-[2rem] border border-white/15 p-1.5 shadow-2xl shadow-violet-950/35">
                <div className="overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#0b1222]">
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

          <p className="section-kicker text-center lg:text-left">Premium 3D Developer Portfolio</p>
          <h1 className="text-center font-heading text-[clamp(2.2rem,9vw,4.4rem)] font-bold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-left lg:text-6xl xl:text-7xl">
            {profile.name}
          </h1>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-4 max-w-2xl text-center text-base font-medium text-cyan-200 sm:text-xl lg:text-left"
          >
            {profile.headline}
          </motion.p>
          <p className="mt-4 max-w-2xl text-center text-[0.98rem] leading-7 text-slate-300 sm:text-lg lg:text-left">
            {profile.heroIntro}
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
            <MagneticButton
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/30 transition hover:brightness-110"
            >
              Explore Projects
            </MagneticButton>
            {profile.cvUrl ? (
              <MagneticButton
                href={profile.cvUrl}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                ariaLabel="Download CV PDF"
              >
                <Download size={16} /> Download CV
              </MagneticButton>
            ) : null}
            <MagneticButton
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15"
            >
              Contact Me
            </MagneticButton>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300 lg:justify-start">
            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white"
              >
                LinkedIn <ExternalLink size={14} className="opacity-70" />
              </a>
            ) : null}
            {verifiedLinks
              .filter((l) => l.label !== "LinkedIn")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer noopener" : undefined}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-violet-300/30 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-violet-300/30 hover:text-white">
              <Mail size={16} /> Email
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1222]/70 shadow-2xl shadow-violet-950/30 sm:aspect-square sm:max-w-[30rem] lg:max-w-[34rem]"
          aria-hidden="true"
        >
          <CanvasErrorBoundary fallback={<FallbackBlock />}>
            <Suspense fallback={<FallbackBlock />}>
              <HeroCanvas reducedMotion={reduced} />
            </Suspense>
          </CanvasErrorBoundary>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070b17] to-transparent" />
        </motion.div>
      </div>
      <div className="section-shell pb-8">
        <a href="#about" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <ArrowDown size={14} className={reduced ? "" : "animate-bounce"} />
          </span>
          Animated scroll indicator
        </a>
      </div>
    </section>
  );
}

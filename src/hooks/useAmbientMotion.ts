import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function useAmbientMotion() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.to(".ambient-orb-a", {
        y: -40,
        x: 20,
        ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.2 },
      });
      gsap.to(".ambient-orb-b", {
        y: 50,
        x: -30,
        ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1.4 },
      });
    });
    return () => ctx.revert();
  }, [reduced]);
}

import { Canvas } from "@react-three/fiber";
import { Suspense, lazy } from "react";

const Scene = lazy(async () => {
  const mod = await import("./HeroScene");
  return { default: mod.HeroScene };
});

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

function FallbackVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.35),transparent_35%),linear-gradient(180deg,#101827,#070b17)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-64 w-64 sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-pulse" />
          <div className="absolute inset-6 rounded-full border border-violet-400/30" />
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/30 blur-xl" />
          <div className="absolute inset-[30%] rounded-[2rem] rotate-45 border border-white/20 bg-white/5 backdrop-blur" />
        </div>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-400">
        Interactive 3D unavailable — showing visual fallback
      </p>
    </div>
  );
}

export function HeroCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  const webgl = canUseWebGL();
  if (!webgl) return <FallbackVisual />;

  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  const dprMax = isMobile ? 1.25 : 1.75;

  return (
    <div className="h-full w-full" aria-hidden="true">
      <Suspense fallback={<FallbackVisual />}>
        <Canvas
          dpr={Math.min(window.devicePixelRatio || 1, dprMax)}
          camera={{ position: [0, 0, 6.2], fov: 42 }}
          gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        >
          <Scene reducedMotion={reducedMotion || isMobile} />
        </Canvas>
      </Suspense>
    </div>
  );
}

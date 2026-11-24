import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExpertiseSection } from "./components/sections/ExpertiseSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ResumeSection } from "./components/sections/ResumeSection";
import { ContactSection } from "./components/sections/ContactSection";
import { useAmbientMotion } from "./hooks/useAmbientMotion";

function App() {
  useAmbientMotion();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05070f] text-slate-100">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb-a absolute left-[-8rem] top-[8rem] h-80 w-80 rounded-full bg-violet-700/18 blur-3xl" />
        <div className="ambient-orb-b absolute right-[-6rem] top-[28rem] h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.06),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.35),rgba(2,6,23,0.7))]" />
      </div>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;


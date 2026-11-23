import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { SeoGrowthSection } from "./components/sections/SeoGrowthSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { DigitalEntrepreneurshipSection } from "./components/sections/DigitalEntrepreneurshipSection";
import { EducationLanguagesSection } from "./components/sections/EducationLanguagesSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { useAmbientMotion } from "./hooks/useAmbientMotion";

function App() {
  useAmbientMotion();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b17] text-slate-100">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb-a absolute left-[-8rem] top-[10rem] h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="ambient-orb-b absolute right-[-6rem] top-[30rem] h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_55%)]" />
      </div>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SeoGrowthSection />
        <ExperienceSection />
        <ProjectsSection />
        <DigitalEntrepreneurshipSection />
        <EducationLanguagesSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

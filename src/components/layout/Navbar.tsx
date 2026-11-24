import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { requestContactIntent } from "../../data/contact";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const active = useActiveSection(navItems.map((n) => n.id));
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstItemRef = useRef<HTMLButtonElement | null>(null);
  const wasOpen = useRef(false);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => firstItemRef.current?.focus(), 30);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open) {
      toggleRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070f]/65 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-3" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="min-w-0 truncate font-heading text-sm font-bold tracking-wide text-white sm:text-base"
        >
          {profile.name}
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`relative rounded-full px-3 py-2 text-sm transition ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
                {isActive ? <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-300" /> : null}
              </button>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => requestContactIntent("remote-employment")}
            className="inline-flex rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Hire Me
          </button>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div
        id="mobile-nav"
        className={`grid overflow-hidden border-t border-white/10 bg-[#05070f]/97 transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] border-t-transparent opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="section-shell flex max-h-[calc(100svh-4rem)] flex-col gap-1 overflow-y-auto py-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={index === 0 ? firstItemRef : undefined}
                type="button"
                tabIndex={open ? 0 : -1}
                onClick={() => go(item.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm ${
                  active === item.id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setOpen(false);
                requestContactIntent("remote-employment");
              }}
              className="mt-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


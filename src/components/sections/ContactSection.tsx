import { Check, Copy, Download, ExternalLink, Mail, MapPin } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { profile } from "../../data/profile";
import {
  CONTACT_INTENT_EVENT,
  contactCategories,
  getContactCategory,
  type ContactIntent,
} from "../../data/contact";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Optional future backend integration point (no credentials configured):
// set VITE_CONTACT_ENDPOINT and replace/extend handleSubmit to POST validated payload
// to a secure backend with spam protection (e.g. CAPTCHA/rate limiting) before enabling.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [category, setCategory] = useState<ContactIntent>("remote-employment");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const selected = getContactCategory(category);

  useEffect(() => {
    const handler = (event: Event) => {
      const intent = (event as CustomEvent<ContactIntent>).detail;
      if (intent) setCategory(intent);
    };
    window.addEventListener(CONTACT_INTENT_EVENT, handler as EventListener);
    return () => window.removeEventListener(CONTACT_INTENT_EVENT, handler as EventListener);
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${selected.subject} — ${form.name || profile.name}`);
    const body = encodeURIComponent(
      `Inquiry category: ${selected.label}\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}\n\n---\nAvailability context: ${profile.availability}`,
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [form.email, form.message, form.name, selected.label, selected.subject]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "Please enter a message (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Preserved validated mailto flow (no false sent confirmation).
      // Future: POST to CONTACT_ENDPOINT when a secured backend is configured.
      void CONTACT_ENDPOINT;
      window.location.href = mailtoHref;
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              kicker="Contact"
              title="Let’s discuss the right opportunity"
              description="Choose an inquiry path for remote employment, international relocation, freelance projects, or technical consulting. This form prepares an email draft in your mail app."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {contactCategories.slice(0, 3).map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setCategory(item.value)}
                  className={`rounded-2xl border p-4 text-left transition ${category === item.value ? "border-violet-400/40 bg-violet-500/12" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"}`}
                  aria-pressed={category === item.value}
                >
                  <p className="font-heading text-sm font-semibold text-white">{item.ctaLabel}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{item.description}</p>
                </button>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              <div className="glass flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200"><Mail size={18} /></span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Direct email</p>
                    <a href={`mailto:${profile.email}`} className="block break-all text-sm font-medium text-white hover:text-violet-200 sm:text-base">{profile.email}</a>
                  </div>
                </div>
                <button type="button" onClick={copyEmail} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 sm:w-auto">
                  {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copied" : "Copy email"}
                </button>
              </div>
              <div className="glass flex items-center gap-3 rounded-2xl p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200"><MapPin size={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Location & availability</p>
                  <p className="text-sm font-medium text-white sm:text-base">{profile.location}</p>
                  <p className="mt-1 text-sm text-slate-300">{profile.availability}</p>
                </div>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Verified links & CV</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:text-white">
                      {link.label} <ExternalLink size={14} />
                    </a>
                  ))}
                  <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100 hover:bg-violet-500/15">
                    <Download size={15} /> Download CV
                  </a>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-400">Only verified professional links are displayed.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass rounded-[2rem] p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-white">Open an email draft</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                This validated form opens your email client with a prepared message draft. It does <strong className="font-medium text-slate-200">not</strong> send messages through a website backend and will not show a sent confirmation.
              </p>
              <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="category" className="mb-1 block text-sm font-medium text-slate-200">Inquiry category</label>
                  <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ContactIntent)}
                    className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white focus:border-violet-400/40"
                  >
                    {contactCategories.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-slate-400">{selected.messageHint}</p>
                </div>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-200">Name</label>
                  <input id="name" name="name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400/40" placeholder="Your name" />
                  {errors.name ? <p className="mt-1 text-sm text-rose-300">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-200">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400/40" placeholder="you@example.com" />
                  {errors.email ? <p className="mt-1 text-sm text-rose-300">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-200">Message</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-violet-400/40" placeholder={selected.messageHint} />
                  {errors.message ? <p className="mt-1 text-sm text-rose-300">{errors.message}</p> : null}
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110 sm:w-auto">
                  Open Email Draft
                </button>
                <p className="text-xs text-slate-500">No message is sent automatically. Your email application will open with the draft.</p>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}


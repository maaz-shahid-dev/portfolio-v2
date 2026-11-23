import { Check, Copy, Download, ExternalLink, Mail, MapPin } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { profile } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const verifiedLinks = profile.socialLinks.filter((l) => !l.placeholder);
  const placeholders = profile.socialLinks.filter((l) => l.placeholder);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [form.email, form.message, form.name]);

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
              title="Let’s build something reliable and impactful"
              description="Reach out for mobile development, web applications, Firebase integration, SaaS work, AI workflow automation, or technical consulting."
            />
            <div className="mt-8 space-y-4">
              <div className="glass flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200"><Mail size={18} /></span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Email</p>
                    <a href={`mailto:${profile.email}`} className="block break-all text-sm font-medium text-white hover:text-cyan-200 sm:text-base">{profile.email}</a>
                  </div>
                </div>
                <button type="button" onClick={copyEmail} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 sm:w-auto">
                  {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="glass flex items-center gap-3 rounded-2xl p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200"><MapPin size={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Location</p>
                  <p className="text-sm font-medium text-white sm:text-base">{profile.location}</p>
                </div>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Verified links & CV</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:text-white">LinkedIn <ExternalLink size={14} /></a>
                  {verifiedLinks.filter((l) => l.label !== "LinkedIn").map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:text-white">{link.label} <ExternalLink size={14} /></a>
                  ))}
                  {profile.cvUrl ? (
                    <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-400/15">
                      <Download size={15} /> Download CV
                    </a>
                  ) : null}
                </div>
                {placeholders.length ? (
                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    Placeholders (not verified): {placeholders.map((p) => p.label).join(", ")} — add real URLs in <code>src/data/profile.ts</code> when available.
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass rounded-[2rem] p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-white">Send a message draft</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                This form validates your input and opens your email client with a prepared message. It does not send messages through a website backend because no email service is configured.
              </p>
              <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-200">Name</label>
                  <input id="name" name="name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400/40" placeholder="Your name" />
                  {errors.name ? <p className="mt-1 text-sm text-rose-300">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-200">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400/40" placeholder="you@example.com" />
                  {errors.email ? <p className="mt-1 text-sm text-rose-300">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-200">Message</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400/40" placeholder="Tell me about your project or question..." />
                  {errors.message ? <p className="mt-1 text-sm text-rose-300">{errors.message}</p> : null}
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110 sm:w-auto">
                  Open Email Draft
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/builtv-logo.png";

const footerLinks = {
  services: [
    { label: "Web Experiences", to: "/services" },
    { label: "Software & SaaS", to: "/services" },
    { label: "Business Systems", to: "/services" },
    { label: "AI & Automation", to: "/services" },
    { label: "Product Engineering", to: "/services" },
  ],

  company: [
    { label: "Work", to: "/work" },
    { label: "Solutions", to: "/solutions" },
    { label: "Pricing", to: "/pricing" },
    { label: "About", to: "/about" },
    { label: "Insights", to: "/insights" },
    { label: "Contact", to: "/contact" },
  ],

  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Cookie Policy", to: "/cookies" },
    { label: "Accessibility", to: "/accessibility" },
    { label: "Security", to: "/security" },
  ],
};

const socials = [
  {
    name: "Instagram",
    label: "IG",
    href: "#",
  },
  {
    name: "LinkedIn",
    label: "in",
    href: "#",
  },
  {
    name: "GitHub",
    label: "GH",
    href: "#",
  },
  {
    name: "Telegram",
    label: "TG",
    href: "#",
  },
  {
    name: "X",
    label: "X",
    href: "#",
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050608]">
      {/* Top glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.20), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-14 py-20 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="BuiltV home"
            >
              <img
                src={logo}
                alt="BuiltV logo"
                className="h-10 w-10 object-contain"
              />

              <span className="text-xl font-semibold tracking-tight text-white">
                BuiltV
              </span>
            </Link>

            <h3 className="mt-7 max-w-sm text-2xl font-semibold leading-snug text-white">
              Digital systems built for
              <span className="text-sky-400"> what&apos;s next.</span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              We design and engineer websites, software, AI systems and
              automation for ambitious businesses around the world.
            </p>

            {/* Email */}
            <a
              href="mailto:AerqonBusiness@gmail.com"
              className="group mt-7 inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Mail size={16} className="text-sky-300" />
              </span>

              <span>AerqonBusiness@gmail.com</span>

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Social media */}
            <div className="mt-7">
              <p className="mb-3 text-xs uppercase tracking-widest text-slate-600">
                Follow BuiltV
              </p>

              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-semibold text-slate-400 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Services
            </p>

            <div className="mt-6 space-y-4">
              {footerLinks.services.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Company
            </p>

            <div className="mt-6 space-y-4">
              {footerLinks.company.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Legal
            </p>

            <div className="mt-6 space-y-4">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Global */}
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Built globally
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Digital products and systems designed for businesses operating
              across modern global markets.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
            >
              Start a project

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Large BuiltV branding */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-600">
                Software • Systems • Intelligence
              </p>

              <p className="mt-3 text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl">
                BuiltV<span className="text-sky-400">.</span>
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky-400/40 hover:bg-sky-400 hover:text-black"
            >
              <ArrowUp
                size={17}
                className="transition-transform group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} BuiltV. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              to="/privacy"
              className="transition hover:text-slate-300"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-slate-300"
            >
              Terms
            </Link>

            <Link
              to="/cookies"
              className="transition hover:text-slate-300"
            >
              Cookies
            </Link>

            <button
              type="button"
              className="transition hover:text-slate-300"
            >
              Cookie settings
            </button>

            <span>Built for global businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
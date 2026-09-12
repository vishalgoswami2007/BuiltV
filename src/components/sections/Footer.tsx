import { ArrowUpRight, Mail } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

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
  { name: "Instagram", icon: FaInstagram },
  { name: "LinkedIn", icon: FaLinkedinIn },
  { name: "GitHub", icon: FaGithub },
  { name: "Telegram", icon: FaTelegram },
  { name: "X", icon: FaXTwitter },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050608]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 opacity-30 blur-3xl sm:w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 py-14 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="md:col-span-2 lg:col-span-4">
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

            <h3 className="mt-6 max-w-sm text-2xl font-semibold leading-snug text-white sm:mt-7">
              Digital systems built for
              <span className="text-sky-400"> what&apos;s next.</span>
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              We design and engineer websites, software, AI systems and
              automation for ambitious businesses around the world.
            </p>

            <div className="mt-7 sm:mt-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-600">
                Follow BuiltV
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <button
                      key={social.name}
                      type="button"
                      aria-label={`${social.name} profile coming soon`}
                      title={`${social.name} profile coming soon`}
                      className="group flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-500"
                    >
                      <Icon size={18} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Services
            </p>

            <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {footerLinks.services.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block py-0.5 text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Company
            </p>

            <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {footerLinks.company.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block py-0.5 text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Legal
            </p>

            <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block py-0.5 text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Built globally
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400 sm:mt-6">
              Digital products and systems designed for businesses operating
              across modern global markets.
            </p>

            <Link
              to="/contact"
              className="group mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-300 sm:mt-7"
            >
              Start a project

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 sm:py-7">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Mail size={16} className="text-sky-300" />
            </span>

            <span className="text-sm text-slate-500">
              Have a project in mind?
            </span>

            <a
              href="mailto:AerqonBusiness@gmail.com"
              className="group inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-white transition hover:text-sky-300 sm:break-normal"
            >
              AerqonBusiness@gmail.com

              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
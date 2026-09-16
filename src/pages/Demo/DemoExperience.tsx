import { useEffect, useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Menu,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

import { industryConfig, type IndustryId } from "./industryConfig";

type DemoTheme =
  | "clean-white"
  | "midnight"
  | "professional-blue"
  | "warm-home"
  | "modern-slate";

type PackageType = "starter" | "pro" | "operations-ai";

interface StoredDemoConfig {
  businessName: string;
  industry: IndustryId;
  theme: DemoTheme;
  package: PackageType;
  currency: string;
}

interface ThemeConfig {
  page: string;
  nav: string;
  card: string;
  cardMuted: string;
  text: string;
  muted: string;
  border: string;
  button: string;
  buttonText: string;
  accent: string;
  accentSoft: string;
}

const themeConfig: Record<DemoTheme, ThemeConfig> = {
  "clean-white": {
    page: "bg-[#f8fafc]",
    nav: "bg-white/90",
    card: "bg-white",
    cardMuted: "bg-slate-50",
    text: "text-slate-950",
    muted: "text-slate-600",
    border: "border-slate-200",
    button: "bg-slate-950",
    buttonText: "text-white",
    accent: "text-sky-600",
    accentSoft: "bg-sky-50",
  },

  midnight: {
    page: "bg-[#080b10]",
    nav: "bg-[#080b10]/90",
    card: "bg-[#10151d]",
    cardMuted: "bg-[#0d1118]",
    text: "text-white",
    muted: "text-slate-400",
    border: "border-white/10",
    button: "bg-sky-400",
    buttonText: "text-slate-950",
    accent: "text-sky-400",
    accentSoft: "bg-sky-400/10",
  },

  "professional-blue": {
    page: "bg-[#f4f7fb]",
    nav: "bg-white/90",
    card: "bg-white",
    cardMuted: "bg-blue-50",
    text: "text-slate-950",
    muted: "text-slate-600",
    border: "border-blue-100",
    button: "bg-blue-700",
    buttonText: "text-white",
    accent: "text-blue-700",
    accentSoft: "bg-blue-50",
  },

  "warm-home": {
    page: "bg-[#faf7f2]",
    nav: "bg-[#fffdf9]/90",
    card: "bg-[#fffdf9]",
    cardMuted: "bg-[#f4eee5]",
    text: "text-stone-900",
    muted: "text-stone-600",
    border: "border-stone-200",
    button: "bg-stone-900",
    buttonText: "text-white",
    accent: "text-amber-700",
    accentSoft: "bg-amber-50",
  },

  "modern-slate": {
    page: "bg-[#111827]",
    nav: "bg-[#111827]/90",
    card: "bg-[#1f2937]",
    cardMuted: "bg-[#18212f]",
    text: "text-white",
    muted: "text-slate-400",
    border: "border-slate-700",
    button: "bg-white",
    buttonText: "text-slate-950",
    accent: "text-cyan-300",
    accentSoft: "bg-cyan-300/10",
  },
};

function getStoredConfig(): StoredDemoConfig | null {
  try {
    const stored = sessionStorage.getItem("builtv-demo-config");

    if (!stored) return null;

    return JSON.parse(stored) as StoredDemoConfig;
  } catch {
    return null;
  }
}

function DemoExperience() {
  const [config] = useState<StoredDemoConfig | null>(() =>
    getStoredConfig(),
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industry = useMemo(() => {
    if (!config) return null;

    return industryConfig[config.industry];
  }, [config]);

  if (!config || !industry) {
    return <Navigate to="/demo" replace />;
  }

  const theme = themeConfig[config.theme];

  return (
    <main
      className={`min-h-svh overflow-x-hidden ${theme.page} ${theme.text}`}
    >
      {/* BuiltV demo controller */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050608] text-white">
        <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/demo"
            className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Exit Demo
          </Link>

          <div className="hidden text-xs text-slate-500 sm:block">
            Interactive BuiltV Experience
          </div>

          <div className="text-xs font-semibold tracking-wide">
            BuiltV
          </div>
        </div>
      </div>

      {/* Business navbar */}
      <header
        className={`sticky top-11 z-40 border-b backdrop-blur-xl ${theme.nav} ${theme.border}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            to="/demo/experience"
            className="flex items-center gap-3"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.button} ${theme.buttonText}`}
            >
              <span className="text-sm font-bold">
                {config.businessName.charAt(0).toUpperCase()}
              </span>
            </div>

            <div>
              <p className="font-semibold tracking-tight">
                {config.businessName}
              </p>

              <p className={`text-xs ${theme.muted}`}>
                {industry.label}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className={`text-sm transition hover:opacity-70 ${theme.muted}`}
            >
              Services
            </a>

            <a
              href="#about"
              className={`text-sm transition hover:opacity-70 ${theme.muted}`}
            >
              About
            </a>

            <a
              href="#contact"
              className={`text-sm transition hover:opacity-70 ${theme.muted}`}
            >
              Contact
            </a>

            <a
              href="#booking"
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90 ${theme.button} ${theme.buttonText}`}
            >
              Book a Service
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border md:hidden ${theme.border}`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`border-t px-5 py-5 md:hidden ${theme.card} ${theme.border}`}
          >
            <div className="flex flex-col gap-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>

              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>

              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>

              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-5 py-3 text-center text-sm font-semibold ${theme.button} ${theme.buttonText}`}
              >
                Book a Service
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${theme.accentSoft} ${theme.accent}`}
            >
              <CheckCircle2 size={14} />
              Professional {industry.label} Services
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              {industry.heroTitle}
            </h1>

            <p
              className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${theme.muted}`}
            >
              {industry.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className={`flex min-h-13 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition hover:opacity-90 ${theme.button} ${theme.buttonText}`}
              >
                Book a Service
                <ArrowRight size={17} />
              </a>

              <a
                href="#services"
                className={`flex min-h-13 items-center justify-center rounded-xl border px-6 text-sm font-semibold transition hover:opacity-70 ${theme.border}`}
              >
                Explore Services
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              <div className={`flex items-center gap-2 text-sm ${theme.muted}`}>
                <ShieldCheck size={17} className={theme.accent} />
                Professional service
              </div>

              <div className={`flex items-center gap-2 text-sm ${theme.muted}`}>
                <CalendarDays size={17} className={theme.accent} />
                Online booking
              </div>

              <div className={`flex items-center gap-2 text-sm ${theme.muted}`}>
                <Clock3 size={17} className={theme.accent} />
                Easy scheduling
              </div>
            </div>
          </div>

          {/* Booking preview */}
          <div
            id="booking"
            className={`rounded-3xl border p-5 shadow-2xl sm:p-7 ${theme.card} ${theme.border}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-semibold uppercase tracking-widest ${theme.accent}`}>
                  Online Booking
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Book your service
                </h2>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${theme.accentSoft}`}
              >
                <CalendarDays size={20} className={theme.accent} />
              </div>
            </div>

            <div className="mt-7">
              <p className={`text-xs font-medium ${theme.muted}`}>
                SELECT A SERVICE
              </p>

              <div className="mt-3 space-y-3">
                {industry.bookingServices.slice(0, 3).map((service, index) => (
                  <button
                    key={service}
                    type="button"
                    className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition hover:opacity-75 ${theme.border} ${
                      index === 0 ? theme.accentSoft : theme.cardMuted
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold">
                        {service}
                      </p>

                      <p className={`mt-1 text-xs ${theme.muted}`}>
                        View available appointments
                      </p>
                    </div>

                    <ArrowRight size={16} className={theme.muted} />
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`mt-5 rounded-xl p-4 text-xs leading-5 ${theme.cardMuted} ${theme.muted}`}
            >
              Choose a service to see available dates and appointment
              times.
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className={`border-y ${theme.border}`}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4 lg:px-10">
          {[
            ["24/7", "Online booking"],
            ["Fast", "Appointment scheduling"],
            ["Simple", "Customer experience"],
            ["Secure", "Booking process"],
          ].map(([value, label]) => (
            <div key={label} className="py-7 text-center">
              <p className="text-xl font-semibold">{value}</p>
              <p className={`mt-1 text-xs ${theme.muted}`}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="max-w-2xl">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.accent}`}
          >
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional help when you need it.
          </h2>

          <p className={`mt-4 leading-7 ${theme.muted}`}>
            Choose the service you need and book an appointment online
            in just a few steps.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industry.services.map((service, index) => (
            <article
              key={service}
              className={`group rounded-2xl border p-6 transition hover:-translate-y-1 ${theme.card} ${theme.border}`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold ${theme.accentSoft} ${theme.accent}`}
              >
                0{index + 1}
              </div>

              <h3 className="mt-8 text-lg font-semibold">
                {service}
              </h3>

              <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>
                Professional {service.toLowerCase()} with simple
                scheduling and clear communication.
              </p>

              <a
                href="#booking"
                className={`mt-6 flex items-center gap-2 text-sm font-semibold ${theme.accent}`}
              >
                Book service
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className={`border-y ${theme.border} ${theme.cardMuted}`}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.accent}`}
            >
              Why choose us
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Service without the scheduling hassle.
            </h2>

            <p className={`mt-5 max-w-xl leading-7 ${theme.muted}`}>
              From your first enquiry to your confirmed appointment,
              everything is designed to make getting the right service
              straightforward.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Book online anytime",
              "Clear appointment scheduling",
              "Simple customer experience",
              "Fast booking confirmation",
            ].map((item) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-xl border p-4 ${theme.card} ${theme.border}`}
              >
                <CheckCircle2
                  size={18}
                  className={theme.accent}
                />

                <span className="text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10">
        <div
          className={`mx-auto max-w-5xl rounded-3xl border p-8 text-center sm:p-14 ${theme.card} ${theme.border}`}
        >
          <Star size={24} className={`mx-auto ${theme.accent}`} />

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Need a {industry.label.toLowerCase()} service?
          </h2>

          <p className={`mx-auto mt-4 max-w-xl leading-7 ${theme.muted}`}>
            Choose your service and find an appointment that works for
            you.
          </p>

          <a
            href="#booking"
            className={`mx-auto mt-7 flex min-h-13 w-fit items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold ${theme.button} ${theme.buttonText}`}
          >
            Book a Service
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* Demo progression */}
      <section className="bg-[#050608] px-5 py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              BuiltV Experience
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              This is just the customer side.
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Next, see what happens behind the scenes when a customer
              books.
            </p>
          </div>

          <button
            type="button"
            className="flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black"
          >
            See Business View
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default DemoExperience;
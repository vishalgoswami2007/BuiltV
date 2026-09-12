import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const principles = [
  {
    icon: Target,
    title: "Problem first",
    text: "We start with the business problem, workflow and user need before deciding what technology should be built.",
  },
  {
    icon: Workflow,
    title: "Systems over fragments",
    text: "We prefer connected workflows and reliable systems instead of adding another disconnected tool.",
  },
  {
    icon: Code2,
    title: "Engineering matters",
    text: "Good product design needs dependable frontend, backend, APIs, databases and infrastructure underneath.",
  },
  {
    icon: ShieldCheck,
    title: "Built to be trusted",
    text: "We think about reliability, maintainability and how the product should behave when real users depend on it.",
  },
];

const capabilities = [
  "Web experiences",
  "Software & SaaS",
  "Business systems",
  "AI & automation",
  "Product engineering",
];

function About() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#050608] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              About BuiltV
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              We build digital systems for
              <span className="text-sky-400"> what&apos;s next.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              BuiltV is a digital product studio focused on websites, software,
              business systems, AI and automation for ambitious companies that
              want better technology around the way they actually operate.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Start a project
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See our work
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                Why BuiltV exists
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Better systems make
                <span className="text-slate-400"> better businesses.</span>
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-base leading-8 text-slate-400">
                Many businesses grow by adding more tools, more spreadsheets and
                more manual steps. Eventually the technology starts creating
                friction instead of removing it.
              </p>

              <p className="text-base leading-8 text-slate-400">
                BuiltV exists to design clearer digital systems around real
                workflows — systems that help customers move through the
                business smoothly and help teams operate with less unnecessary
                complexity.
              </p>

              <p className="text-base leading-8 text-slate-400">
                Sometimes that means a website. Sometimes it means a complete
                software product, internal platform or AI-powered workflow. The
                goal is not to build more technology. The goal is to build the
                right system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              How we think
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Principles behind
              <span className="text-slate-400"> the products we build.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} className="text-sky-300" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {principle.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Layers3 size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                One studio
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Design, software and automation
                <span className="text-sky-400"> under one roof.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Products work better when strategy, interface, backend systems
                and automation are designed as one connected experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const icons = [
                    Globe2,
                    Code2,
                    Workflow,
                    Bot,
                    Sparkles,
                  ];

                  const Icon = icons[index];

                  return (
                    <div
                      key={item}
                      className={`flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 ${
                        index === capabilities.length - 1
                          ? "sm:col-span-2"
                          : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10">
                        <Icon size={18} className="text-sky-300" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-600">
                          0{index + 1}
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {item}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Built globally
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Digital products are global.
              <span className="text-sky-400"> So is our mindset.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
              BuiltV is designed to work with modern businesses across different
              markets, time zones and digital environments while keeping the
              product experience clear and consistent.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {[
              "Ireland",
              "United Kingdom",
              "Netherlands",
              "Germany",
              "Europe",
              "Global",
            ].map((market) => (
              <span
                key={market}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400 sm:text-sm"
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Build with BuiltV
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a problem worth
            <span className="text-sky-400"> solving properly?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Tell us what your business is trying to improve, replace or build
            next. The conversation can start there.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Start a project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default About;
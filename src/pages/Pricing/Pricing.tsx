import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  Timer,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const plans = [
  {
    icon: Rocket,
    label: "Focused build",
    title: "Web Experience",
    description:
      "For businesses that need a premium marketing website, landing experience or focused digital presence.",
    price: "Scoped per project",
    idealFor: "Websites, landing pages, redesigns",
    features: [
      "Responsive product design",
      "Frontend development",
      "Performance optimisation",
      "Contact & conversion flows",
      "Basic integrations",
      "Deployment support",
    ],
  },
  {
    icon: Code2,
    label: "Product build",
    title: "Software & SaaS",
    description:
      "For startups and businesses building dashboards, portals, internal software or complete SaaS products.",
    price: "Custom project scope",
    idealFor: "SaaS, dashboards, portals, MVPs",
    featured: true,
    features: [
      "Product architecture",
      "Frontend & backend",
      "Database design",
      "Authentication",
      "API integrations",
      "Deployment setup",
    ],
  },
  {
    icon: Workflow,
    label: "Operations build",
    title: "Automation & Systems",
    description:
      "For businesses replacing repetitive workflows, disconnected tools and manual operational work.",
    price: "Scoped by workflow",
    idealFor: "Automation, operations, AI workflows",
    features: [
      "Workflow discovery",
      "Automation design",
      "Business integrations",
      "AI integrations",
      "Internal dashboards",
      "Process documentation",
    ],
  },
];

const costFactors = [
  {
    icon: Layers3,
    title: "Scope",
    text: "The number of screens, workflows, roles and product features involved.",
  },
  {
    icon: Code2,
    title: "Technical complexity",
    text: "Custom backend logic, APIs, integrations, data architecture and infrastructure.",
  },
  {
    icon: Workflow,
    title: "Automation depth",
    text: "How many systems, business rules and automated actions need to work together.",
  },
  {
    icon: Timer,
    title: "Timeline",
    text: "Delivery speed, launch requirements and whether the work needs to be phased.",
  },
];

const process = [
  {
    number: "01",
    title: "Tell us the problem",
    text: "Share what you want to build or what is currently slowing the business down.",
  },
  {
    number: "02",
    title: "We define the scope",
    text: "We clarify the core workflows, required features and technical direction.",
  },
  {
    number: "03",
    title: "You receive a proposal",
    text: "You get a clear project scope, delivery approach and commercial estimate.",
  },
];

function Pricing() {
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
              Pricing
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Clear scope before
              <span className="text-sky-400"> serious build work begins.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Every BuiltV project is shaped around the actual product,
              workflow and technical complexity instead of forcing every
              business into the same package.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Request a project estimate
                <ArrowRight size={17} />
              </Link>

              <a
                href="#engagements"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View engagement types
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="engagements" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Engagement types
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Different projects need
              <span className="text-slate-400"> different scopes.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <article
                  key={plan.title}
                  className={`relative flex flex-col rounded-2xl border p-5 sm:p-7 ${
                    plan.featured
                      ? "border-sky-400/30 bg-sky-400/5"
                      : "border-white/10 bg-[#0A0D12]"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-5 top-5 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300">
                      Most flexible
                    </div>
                  )}

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} className="text-sky-300" />
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                    {plan.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {plan.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {plan.description}
                  </p>

                  <div className="mt-6 border-y border-white/10 py-5">
                    <p className="text-xs uppercase tracking-widest text-slate-600">
                      Pricing
                    </p>

                    <p className="mt-2 text-xl font-semibold text-white">
                      {plan.price}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Ideal for: {plan.idealFor}
                    </p>
                  </div>

                  <div className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                          <Check size={13} className="text-sky-300" />
                        </span>

                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-white text-black hover:bg-sky-100"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Discuss this project
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Sparkles size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                What affects pricing
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                We price the work,
                <span className="text-sky-400"> not a generic package.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Two projects can look similar on the surface while requiring
                completely different levels of engineering underneath.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {costFactors.map((factor) => {
                const Icon = factor.icon;

                return (
                  <div
                    key={factor.title}
                    className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon size={18} className="text-sky-300" />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {factor.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {factor.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              How estimates work
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              From business problem to
              <span className="text-slate-400"> clear project scope.</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-6"
              >
                <span className="text-xs font-medium text-sky-300">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Need an estimate?
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tell us what needs to be built.
            <span className="text-sky-400">
              {" "}
              We&apos;ll help define the scope.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            You can start with a product idea, workflow problem or existing
            system. A complete technical specification is not required.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Request an estimate
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Pricing;
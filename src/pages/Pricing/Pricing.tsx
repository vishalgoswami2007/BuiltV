import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  ChevronRight,
  Headphones,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

type Currency = "GBP" | "EUR" | "USD";

const currencies: {
  code: Currency;
  symbol: string;
  label: string;
}[] = [
  {
    code: "GBP",
    symbol: "£",
    label: "GBP",
  },
  {
    code: "EUR",
    symbol: "€",
    label: "EUR",
  },
  {
    code: "USD",
    symbol: "$",
    label: "USD",
  },
];

const plans = [
  {
    id: "starter",
    icon: CalendarCheck,
    name: "Booking Starter",
    eyebrow: "START TAKING BOOKINGS",
    description:
      "A professional booking system that gives customers a simple way to choose a service, find availability and book online.",
    prices: {
      GBP: 549,
      EUR: 649,
      USD: 749,
    },
    featured: false,
    features: [
      "Professional service website",
      "Online booking system",
      "Services & availability",
      "Booking confirmations",
      "Admin dashboard",
      "Basic customer management",
    ],
    note: "Best for businesses moving from manual enquiries to online booking.",
  },
  {
    id: "pro",
    icon: Workflow,
    name: "Business Pro",
    eyebrow: "RUN YOUR OPERATIONS",
    description:
      "Bring bookings, customers, staff and jobs together inside one connected system built around your daily workflow.",
    prices: {
      GBP: 1199,
      EUR: 1399,
      USD: 1599,
    },
    featured: true,
    features: [
      "Everything in Booking Starter",
      "Customer management",
      "Jobs & workflow dashboard",
      "Staff scheduling",
      "Quotes & job tracking",
      "Payments integration",
      "Business notifications",
      "Basic workflow automation",
    ],
    note: "Best for growing service businesses managing customers, staff and jobs.",
  },
  {
    id: "operations-ai",
    icon: Bot,
    name: "Operations + AI",
    eyebrow: "AUTOMATE YOUR BUSINESS",
    description:
      "A complete operations system combining booking, business workflows, automation and an AI-powered customer experience.",
    prices: {
      GBP: 2499,
      EUR: 2899,
      USD: 3399,
    },
    featured: false,
    features: [
      "Everything in Business Pro",
      "AI customer agent",
      "Lead capture & qualification",
      "Advanced workflow automation",
      "Customer portal",
      "Advanced operations dashboard",
      "CRM workflows",
      "1–2 core integrations included",
    ],
    note: "Additional integrations and custom requirements are quoted separately.",
  },
] as const;

const carePrices: Record<Currency, number> = {
  GBP: 99,
  EUR: 119,
  USD: 129,
};

const careFeatures = [
  "Ongoing technical support",
  "System monitoring",
  "Maintenance & updates",
  "Minor improvements",
];

const process = [
  {
    number: "01",
    title: "Experience",
    text: "Explore an interactive version of the system before starting a project.",
  },
  {
    number: "02",
    title: "Define",
    text: "We understand your services, team and real business workflow.",
  },
  {
    number: "03",
    title: "Build",
    text: "Your BuiltV system is configured and developed around those requirements.",
  },
];

function Pricing() {
  const [currency, setCurrency] = useState<Currency>("GBP");

  const activeCurrency = currencies.find(
    (item) => item.code === currency,
  )!;

  const formatPrice = (price: number) =>
    `${activeCurrency.symbol}${price.toLocaleString("en-GB")}`;

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050608] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              BUILTV PRICING
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Start with what you need.
              <span className="text-sky-400">
                {" "}
                Build from there.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Choose the level of system your business needs today.
              Every BuiltV solution can evolve as your workflow grows.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#050608] pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Currency Selector */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-2xl border border-white/10 bg-[#0A0D12] p-1.5">
              {currencies.map((item) => {
                const isActive = currency === item.code;

                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setCurrency(item.code)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 sm:px-5 ${
                      isActive
                        ? "bg-white text-black shadow-lg"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="mr-1.5">{item.symbol}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-slate-600">
            Select your preferred currency
          </p>

          {/* Pricing Cards */}
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const price = plan.prices[currency];

              return (
                <article
                  key={plan.id}
                  className={`relative flex flex-col rounded-3xl border p-5 transition duration-300 sm:p-7 ${
                    plan.featured
                      ? "border-sky-400/40 bg-sky-400/5 shadow-[0_0_60px_rgba(56,189,248,0.08)]"
                      : "border-white/10 bg-[#0A0D12]"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-5 top-5 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300">
                      Recommended
                    </div>
                  )}

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} className="text-sky-300" />
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                    {plan.eyebrow}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {plan.name}
                  </h2>

                  <p className="mt-4  text-sm leading-7 text-slate-400">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 border-y border-white/10 py-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
                      STARTING FROM
                    </p>

                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        {formatPrice(price)}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-500">
                      Final pricing depends on your exact workflow and
                      requirements.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-6 flex-1">
                    <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
                      INCLUDED
                    </p>

                    <div className="mt-4 space-y-3">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                            <Check
                              size={12}
                              className="text-sky-300"
                            />
                          </span>

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs leading-5 text-slate-500">
                      {plan.note}
                    </p>
                  </div>

                  {/* Demo CTA */}
                  <Link
                    to={`/demo?package=${plan.id}`}
                    className={`group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-white text-black hover:bg-sky-100"
                        : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    Experience This System
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Pricing clarification */}
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-xs leading-6 text-slate-600">
              Prices shown are starting points. Final scope, delivery,
              integrations and third-party services are confirmed before
              development begins.
            </p>
          </div>
        </div>
      </section>

      {/* BUILTV CARE */}
      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0D12]">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Headphones size={20} className="text-sky-300" />
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                  ONGOING SUPPORT
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  BuiltV Care
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Keep your BuiltV system supported, monitored and maintained
                  after launch.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {careFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                        <Check size={12} className="text-sky-300" />
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
                  STARTING FROM
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {formatPrice(carePrices[currency])}
                  </span>

                  <span className="pb-1 text-sm text-slate-500">
                    / month
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Support scope is agreed based on the system and level of
                  ongoing assistance required.
                </p>

                <Link
                  to="/contact"
                  className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Discuss BuiltV Care
                  <ChevronRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PRICING WORKS */}
      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <ShieldCheck size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                BUILT AROUND YOUR WORKFLOW
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Clear starting points.
                <span className="text-sky-400">
                  {" "}
                  Flexible where it matters.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                You start with the system closest to your needs. We then
                define the exact workflow, integrations and requirements
                before development.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {process.map((step) => (
                <article
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Sparkles size={20} className="text-sky-300" />
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
            EXPERIENCE BEFORE YOU BUILD
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            See the system
            <span className="text-sky-400">
              {" "}
              before we build yours.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Personalise a BuiltV demo around a service business and experience
            how booking, operations and AI can work together.
          </p>

          <Link
            to="/demo"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Start Demo
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Pricing;
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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const plans = [
  { icon: Rocket, key: "web", featured: false },
  { icon: Code2, key: "software", featured: true },
  { icon: Workflow, key: "automation", featured: false },
] as const;

const costFactors = [
  { icon: Layers3, key: "scope" },
  { icon: Code2, key: "complexity" },
  { icon: Workflow, key: "automation" },
  { icon: Timer, key: "timeline" },
] as const;

const process = ["problem", "scope", "proposal"] as const;

function Pricing() {
  const { t } = useTranslation();

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
              {t("pricingPage.hero.eyebrow")}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t("pricingPage.hero.titleStart")}
              <span className="text-sky-400">
                {" "}
                {t("pricingPage.hero.titleHighlight")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t("pricingPage.hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                {t("pricingPage.hero.estimate")}
                <ArrowRight size={17} />
              </Link>

              <a
                href="#engagements"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t("pricingPage.hero.viewTypes")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="engagements" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              {t("pricingPage.engagements.eyebrow")}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {t("pricingPage.engagements.titleStart")}
              <span className="text-slate-400">
                {" "}
                {t("pricingPage.engagements.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const base = `pricingPage.plans.${plan.key}`;

              return (
                <article
                  key={plan.key}
                  className={`relative flex flex-col rounded-2xl border p-5 sm:p-7 ${
                    plan.featured
                      ? "border-sky-400/30 bg-sky-400/5"
                      : "border-white/10 bg-[#0A0D12]"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-5 top-5 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300">
                      {t("pricingPage.mostFlexible")}
                    </div>
                  )}

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} className="text-sky-300" />
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                    {t(`${base}.label`)}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {t(`${base}.title`)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {t(`${base}.description`)}
                  </p>

                  <div className="mt-6 border-y border-white/10 py-5">
                    <p className="text-xs uppercase tracking-widest text-slate-600">
                      {t("pricingPage.pricingLabel")}
                    </p>

                    <p className="mt-2 text-xl font-semibold text-white">
                      {t(`${base}.price`)}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {t("pricingPage.idealFor")}: {t(`${base}.idealFor`)}
                    </p>
                  </div>

                  <div className="mt-6 flex-1 space-y-3">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                          <Check size={13} className="text-sky-300" />
                        </span>
                        {t(`${base}.features.${index}`)}
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
                    {t("pricingPage.discuss")}
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
                {t("pricingPage.factors.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {t("pricingPage.factors.titleStart")}
                <span className="text-sky-400">
                  {" "}
                  {t("pricingPage.factors.titleHighlight")}
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                {t("pricingPage.factors.description")}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {costFactors.map((factor) => {
                const Icon = factor.icon;
                const base = `pricingPage.factors.items.${factor.key}`;

                return (
                  <div
                    key={factor.key}
                    className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon size={18} className="text-sky-300" />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {t(`${base}.title`)}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {t(`${base}.text`)}
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
              {t("pricingPage.process.eyebrow")}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t("pricingPage.process.titleStart")}
              <span className="text-slate-400">
                {" "}
                {t("pricingPage.process.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {process.map((key, index) => (
              <div
                key={key}
                className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-6"
              >
                <span className="text-xs font-medium text-sky-300">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {t(`pricingPage.process.steps.${key}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {t(`pricingPage.process.steps.${key}.text`)}
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
            {t("pricingPage.cta.eyebrow")}
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("pricingPage.cta.titleStart")}
            <span className="text-sky-400">
              {" "}
              {t("pricingPage.cta.titleHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {t("pricingPage.cta.description")}
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            {t("pricingPage.cta.button")}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Pricing;

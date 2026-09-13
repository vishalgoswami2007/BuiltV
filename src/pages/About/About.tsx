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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const principles = [
  { icon: Target, key: "problem" },
  { icon: Workflow, key: "systems" },
  { icon: Code2, key: "engineering" },
  { icon: ShieldCheck, key: "trust" },
] as const;

const capabilities = [
  { icon: Globe2, key: "web" },
  { icon: Code2, key: "software" },
  { icon: Workflow, key: "systems" },
  { icon: Bot, key: "ai" },
  { icon: Sparkles, key: "engineering" },
] as const;

const markets = ["ireland", "uk", "netherlands", "germany", "europe", "global"] as const;

function About() {
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
              {t("aboutPage.hero.eyebrow")}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t("aboutPage.hero.titleStart")}
              <span className="text-sky-400">
                {" "}
                {t("aboutPage.hero.titleHighlight")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t("aboutPage.hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                {t("aboutPage.hero.start")}
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t("aboutPage.hero.work")}
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
                {t("aboutPage.why.eyebrow")}
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {t("aboutPage.why.titleStart")}
                <span className="text-slate-400">
                  {" "}
                  {t("aboutPage.why.titleHighlight")}
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              {[0, 1, 2].map((index) => (
                <p key={index} className="text-base leading-8 text-slate-400">
                  {t(`aboutPage.why.paragraphs.${index}`)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              {t("aboutPage.principles.eyebrow")}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t("aboutPage.principles.titleStart")}
              <span className="text-slate-400">
                {" "}
                {t("aboutPage.principles.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;
              const base = `aboutPage.principles.items.${principle.key}`;

              return (
                <article
                  key={principle.key}
                  className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} className="text-sky-300" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {t(`${base}.title`)}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {t(`${base}.text`)}
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
                {t("aboutPage.studio.eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {t("aboutPage.studio.titleStart")}
                <span className="text-sky-400">
                  {" "}
                  {t("aboutPage.studio.titleHighlight")}
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                {t("aboutPage.studio.description")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.key}
                      className={`flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 ${
                        index === capabilities.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10">
                        <Icon size={18} className="text-sky-300" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-600">0{index + 1}</p>
                        <p className="mt-1 text-sm font-medium text-white">
                          {t(`aboutPage.capabilities.${item.key}`)}
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
              {t("aboutPage.global.eyebrow")}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {t("aboutPage.global.titleStart")}
              <span className="text-sky-400">
                {" "}
                {t("aboutPage.global.titleHighlight")}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
              {t("aboutPage.global.description")}
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {markets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400 sm:text-sm"
              >
                {t(`aboutPage.global.markets.${market}`)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            {t("aboutPage.cta.eyebrow")}
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("aboutPage.cta.titleStart")}
            <span className="text-sky-400">
              {" "}
              {t("aboutPage.cta.titleHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {t("aboutPage.cta.description")}
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            {t("aboutPage.cta.button")}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default About;

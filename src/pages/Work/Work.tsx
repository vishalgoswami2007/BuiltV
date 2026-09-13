import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Code2,
  Database,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const projects = [
  {
    number: "01",
    title: "MineQueue",
    key: "mineQueue",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Real-time Booking"],
    features: [
      { icon: CalendarCheck, key: "scheduling" },
      { icon: ShieldCheck, key: "bookingReliability" },
      { icon: Database, key: "connectedBackend" },
    ],
    visual: "minequeue",
  },
  {
    number: "02",
    title: "Triage",
    key: "triage",
    tags: ["React", "AI", "SaaS", "Developer Tools", "Context", "Debugging"],
    features: [
      { icon: Bot, key: "aiAssistance" },
      { icon: Code2, key: "codeContext" },
      { icon: Workflow, key: "focusedWorkflow" },
    ],
    visual: "triage",
  },
] as const;

function ProjectVisual({ type }: { type: string }) {
  const { t } = useTranslation();

  if (type === "minequeue") {
    return (
      <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-[#071018] p-5 sm:min-h-96 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(56,189,248,0.16),transparent_38%)]" />
        <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0A0D12]/95 p-4 shadow-2xl sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-300">MineQueue</p>
              <p className="mt-1 text-sm font-medium text-white">{t("workPage.visual.mineQueue.dashboard")}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
              <Stethoscope size={19} className="text-sky-300" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {["doctors", "bookings", "schedules"].map((item, index) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <p className="text-xs text-slate-500">0{index + 1}</p>
                <p className="mt-3 text-xs font-medium text-white sm:text-sm">{t(`workPage.visual.mineQueue.${item}`)}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">{t("workPage.visual.mineQueue.upcoming")}</p>
                <p className="mt-1 text-sm font-medium text-white">{t("workPage.visual.mineQueue.bookingWorkflow")}</p>
              </div>
              <span className="rounded-full bg-sky-400/10 px-3 py-1.5 text-xs text-sky-300">{t("workPage.visual.mineQueue.confirmed")}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-[#090A12] p-5 sm:min-h-96 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.14),transparent_36%)]" />
      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0A0D12]/95 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 text-xs text-slate-500">{t("workPage.visual.triage.workspace")}</span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                <Code2 size={17} className="text-sky-300" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{t("workPage.visual.triage.debugIssue")}</p>
                <p className="mt-1 text-xs text-slate-500">{t("workPage.visual.triage.context")}</p>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div className="h-2.5 w-11/12 rounded-full bg-white/10" />
            <div className="h-2.5 w-9/12 rounded-full bg-white/10" />
            <div className="h-2.5 w-7/12 rounded-full bg-sky-400/20" />
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs text-slate-500">{t("workPage.visual.triage.assistant")}</span>
            <Sparkles size={16} className="text-sky-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
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
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">{t("workPage.hero.eyebrow")}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t("workPage.hero.titleStart")}
              <span className="text-sky-400"> {t("workPage.hero.titleHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t("workPage.hero.description")}</p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100">
                {t("workPage.hero.button")} <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D12] sm:rounded-3xl">
                <div className="grid lg:grid-cols-2">
                  <ProjectVisual type={project.visual} />
                  <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10 xl:p-12">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-medium uppercase tracking-widest text-sky-300">{t(`workPage.projects.${project.key}.category`)}</p>
                        <span className="text-xs text-slate-600">{project.number}</span>
                      </div>
                      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h2>
                      <h3 className="mt-3 text-lg font-medium leading-7 text-slate-200 sm:text-xl">{t(`workPage.projects.${project.key}.headline`)}</h3>
                      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{t(`workPage.projects.${project.key}.description`)}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10">
                      <Link to="/contact" className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300">
                        {t("workPage.discussSimilar")}
                        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">
                  {project.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.key} className="bg-[#080A0E] p-5 sm:p-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon size={18} className="text-sky-300" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-white">{t(`workPage.projects.${project.key}.features.${feature.key}.title`)}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{t(`workPage.projects.${project.key}.features.${feature.key}.text`)}</p>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">{t("workPage.thinking.eyebrow")}</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {t("workPage.thinking.titleStart")}
                <span className="text-sky-400"> {t("workPage.thinking.titleHighlight")}</span>
              </h2>
            </div>
            <div className="max-w-xl lg:ml-auto">
              <p className="text-base leading-7 text-slate-400">{t("workPage.thinking.description")}</p>
              <Link to="/services" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300">
                {t("workPage.thinking.exploreCapabilities")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">{t("workPage.cta.eyebrow")}</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("workPage.cta.titleStart")}
            <span className="text-sky-400"> {t("workPage.cta.titleHighlight")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{t("workPage.cta.description")}</p>
          <Link to="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100">
            {t("workPage.cta.button")} <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Work;

import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const services = [
  { icon: MonitorSmartphone, number: "01", key: "web", deliverables: ["marketingWebsites", "landingPages", "corporateWebsites", "responsiveInterfaces", "performanceOptimisation", "cmsIntegrations"] },
  { icon: Code2, number: "02", key: "software", deliverables: ["saasProducts", "adminDashboards", "clientPortals", "internalPlatforms", "authenticationSystems", "apiIntegrations"] },
  { icon: Workflow, number: "03", key: "systems", deliverables: ["bookingSystems", "quotingWorkflows", "schedulingSystems", "operationsDashboards", "paymentWorkflows", "crmIntegrations"] },
  { icon: Bot, number: "04", key: "ai", deliverables: ["aiAssistants", "workflowAutomation", "leadQualification", "supportAutomation", "aiInternalTools", "llmIntegrations"] },
  { icon: Layers3, number: "05", key: "engineering", deliverables: ["frontendEngineering", "backendSystems", "restApis", "databaseArchitecture", "thirdPartyIntegrations", "deploymentSetup"] },
] as const;

const engagementModels = ["newProduct", "existingSystem", "automationProject"] as const;

function Services() {
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

        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              {t("servicesPage.hero.eyebrow")}
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t("servicesPage.hero.titleStart")}
              <span className="text-sky-400"> {t("servicesPage.hero.titleHighlight")}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t("servicesPage.hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                {t("servicesPage.hero.startProject")}
                <ArrowRight size={17} />
              </Link>

              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t("servicesPage.hero.exploreServices")}
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <a
                key={service.key}
                href={`#service-${service.number}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-sky-400/30"
              >
                <span className="text-sm text-slate-300 group-hover:text-white">
                  {t(`servicesPage.items.${service.key}.title`)}
                </span>
                <span className="text-xs text-slate-600">{service.number}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              {t("servicesPage.capabilities.eyebrow")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t("servicesPage.capabilities.title")}
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  id={`service-${service.number}`}
                  key={service.key}
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-8 lg:p-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon size={22} className="text-sky-300" />
                        </div>
                        <span className="text-xs font-medium text-slate-600">{service.number}</span>
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
                        {t(`servicesPage.items.${service.key}.title`)}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        {t(`servicesPage.items.${service.key}.description`)}
                      </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                            <Check size={14} className="text-sky-300" />
                          </span>
                          <span className="text-sm text-slate-300">
                            {t(`servicesPage.items.${service.key}.deliverables.${item}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Sparkles size={20} className="text-sky-300" />
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                {t("servicesPage.engagement.eyebrow")}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {t("servicesPage.engagement.title")}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                {t("servicesPage.engagement.description")}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {engagementModels.map((model, index) => (
                <div key={model} className="rounded-2xl border border-white/10 bg-[#0F141C] p-5 sm:p-6">
                  <span className="text-xs font-medium text-sky-300">0{index + 1}</span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {t(`servicesPage.engagement.models.${model}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {t(`servicesPage.engagement.models.${model}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            {t("servicesPage.cta.eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("servicesPage.cta.titleStart")}
            <span className="text-sky-400"> {t("servicesPage.cta.titleHighlight")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {t("servicesPage.cta.description")}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            {t("servicesPage.cta.button")}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Services;

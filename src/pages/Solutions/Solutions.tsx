import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  FileText,
  MessageSquareMore,
  Search,
  Settings2,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const solutions = [
  { icon: Search, number: "01", key: "lead", flow: ["enquiry", "qualification", "followUp", "proposal", "customer"], includes: ["leadCaptureForms", "crmIntegrations", "leadQualification", "followUpWorkflows", "salesNotifications"] },
  { icon: CalendarCheck, number: "02", key: "booking", flow: ["availability", "booking", "confirmation", "reminder", "service"], includes: ["appointmentBooking", "availabilityManagement", "automatedReminders", "reschedulingWorkflows", "teamScheduling"] },
  { icon: FileText, number: "03", key: "quote", flow: ["request", "quote", "review", "approval", "job"], includes: ["quoteGeneration", "proposalWorkflows", "approvalTracking", "customerPortals", "documentAutomation"] },
  { icon: Workflow, number: "04", key: "operations", flow: ["job", "assignment", "work", "proof", "completion"], includes: ["operationsDashboards", "jobTracking", "teamAssignment", "statusWorkflows", "internalNotifications"] },
  { icon: CreditCard, number: "05", key: "payments", flow: ["work", "invoice", "payment", "receipt", "followUp"], includes: ["paymentIntegrations", "invoiceWorkflows", "paymentStatusTracking", "receiptAutomation", "billingDashboards"] },
  { icon: Bot, number: "06", key: "ai", flow: ["input", "ai", "decision", "action", "review"], includes: ["aiAssistants", "supportAutomation", "leadQualification", "internalAiTools", "workflowAutomation"] },
] as const;

const industries = [
  { icon: Building2, key: "serviceBusinesses" },
  { icon: Users, key: "professionalServices" },
  { icon: ClipboardCheck, key: "fieldOperations" },
  { icon: Sparkles, key: "growingCompanies" },
] as const;

const connectedSteps = [
  { icon: MessageSquareMore, key: "customerEnquiry" },
  { icon: FileText, key: "quoteApproval" },
  { icon: CalendarCheck, key: "bookingScheduling" },
  { icon: Users, key: "teamAssignment" },
  { icon: ClipboardCheck, key: "workCompletion" },
  { icon: CreditCard, key: "paymentFollowUp" },
] as const;

function Solutions() {
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
              {t("solutionsPage.hero.eyebrow")}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t("solutionsPage.hero.titleStart")}
              <span className="text-sky-400"> {t("solutionsPage.hero.titleHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t("solutionsPage.hero.description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100">
                {t("solutionsPage.hero.discussWorkflow")} <ArrowRight size={17} />
              </Link>
              <a href="#solutions" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                {t("solutionsPage.hero.exploreSolutions")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">{t("solutionsPage.workflows.eyebrow")}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {t("solutionsPage.workflows.titleStart")}
              <span className="text-slate-400"> {t("solutionsPage.workflows.titleHighlight")}</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.key} className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon size={20} className="text-sky-300" />
                    </div>
                    <span className="text-xs text-slate-600">{solution.number}</span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">{t(`solutionsPage.items.${solution.key}.title`)}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{t(`solutionsPage.items.${solution.key}.description`)}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {solution.flow.map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                          {t(`solutionsPage.items.${solution.key}.flow.${step}`)}
                        </span>
                        {index !== solution.flow.length - 1 && <ArrowRight size={13} className="text-slate-700" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="text-xs font-medium uppercase tracking-widest text-slate-600">{t("solutionsPage.canInclude")}</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {solution.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                          {t(`solutionsPage.items.${solution.key}.includes.${item}`)}
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Settings2 size={20} className="text-sky-300" />
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">{t("solutionsPage.connected.eyebrow")}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {t("solutionsPage.connected.titleStart")}
                <span className="text-sky-400"> {t("solutionsPage.connected.titleHighlight")}</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">{t("solutionsPage.connected.description")}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {connectedSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.key} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-400/10">
                        <Icon size={16} className="text-sky-300" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-600">0{index + 1}</p>
                        <p className="mt-1 text-sm font-medium text-white">{t(`solutionsPage.connected.steps.${item.key}`)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">{t("solutionsPage.audience.eyebrow")}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t("solutionsPage.audience.titleStart")}
              <span className="text-slate-400"> {t("solutionsPage.audience.titleHighlight")}</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.key} className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className="text-sky-300" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{t(`solutionsPage.audience.items.${industry.key}.title`)}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{t(`solutionsPage.audience.items.${industry.key}.text`)}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link to="/services" className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300">
              {t("solutionsPage.audience.exploreServices")}
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">{t("solutionsPage.cta.eyebrow")}</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("solutionsPage.cta.titleStart")}
            <span className="text-sky-400"> {t("solutionsPage.cta.titleHighlight")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{t("solutionsPage.cta.description")}</p>
          <Link to="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100">
            {t("solutionsPage.cta.button")} <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Solutions;

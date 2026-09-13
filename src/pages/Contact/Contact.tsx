import { useState, type FormEvent } from "react";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Send,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import PageLayout from "../../components/layout/PageLayout";

const projectTypes = [
  "website",
  "software",
  "businessSystem",
  "ai",
  "engineering",
  "notSure",
] as const;

const budgets = ["under2500", "2500to5000", "5000to10000", "10000plus", "notSure"] as const;

const reasons = ["scoping", "direction", "businessFirst", "global"] as const;

function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || t("contactPage.email.notProvided"));
    const projectType = String(
      formData.get("projectType") || t("contactPage.email.notSelected"),
    );
    const budget = String(
      formData.get("budget") || t("contactPage.email.notSelected"),
    );
    const details = String(formData.get("details") || "");

    const subject = `${t("contactPage.email.subject")} - ${name}`;

    const body = `
${t("contactPage.email.heading")}

${t("contactPage.form.name")}: ${name}
${t("contactPage.form.email")}: ${email}
${t("contactPage.form.company")}: ${company}
${t("contactPage.email.projectType")}: ${projectType}
${t("contactPage.form.budget")}: ${budget}

${t("contactPage.form.details")}:
${details}
    `.trim();

    const mailtoLink = `mailto:AerqonBusiness@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

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
              {t("contactPage.hero.eyebrow")}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t("contactPage.hero.titleStart")}
              <span className="text-sky-400">
                {" "}
                {t("contactPage.hero.titleHighlight")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t("contactPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <MessageSquareText size={20} className="text-sky-300" />
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                {t("contactPage.intro.title")}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {t("contactPage.intro.description")}
              </p>

              <div className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 size={17} className="text-sky-300" />
                    {t(`contactPage.reasons.${reason}`)}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Mail size={20} className="text-sky-300" />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-slate-500">
                {t("contactPage.preferEmail.eyebrow")}
              </p>

              <a
                href="mailto:AerqonBusiness@gmail.com"
                className="mt-3 block break-all text-lg font-semibold text-white transition hover:text-sky-300"
              >
                AerqonBusiness@gmail.com
              </a>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {t("contactPage.preferEmail.description")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080A0E] p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
                  <Building2 size={18} className="text-sky-300" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {t("contactPage.collaboration.title")}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {t("contactPage.collaboration.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                  {t("contactPage.form.eyebrow")}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  {t("contactPage.form.title")}
                </h2>
              </div>

              <Sparkles size={21} className="text-sky-300" />
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    {t("contactPage.form.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={t("contactPage.form.namePlaceholder")}
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    {t("contactPage.form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                  {t("contactPage.form.company")}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder={t("contactPage.form.companyPlaceholder")}
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-300">
                  {t("contactPage.form.projectType")}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0F141C] px-4 text-sm text-slate-300 outline-none transition focus:border-sky-400/40"
                >
                  <option value="" disabled>
                    {t("contactPage.form.projectTypePlaceholder")}
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={t(`contactPage.projectTypes.${type}`)}>
                      {t(`contactPage.projectTypes.${type}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-300">
                  {t("contactPage.form.budget")}
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0F141C] px-4 text-sm text-slate-300 outline-none transition focus:border-sky-400/40"
                >
                  <option value="" disabled>
                    {t("contactPage.form.budgetPlaceholder")}
                  </option>
                  {budgets.map((budget) => (
                    <option key={budget} value={t(`contactPage.budgets.${budget}`)}>
                      {t(`contactPage.budgets.${budget}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="details" className="mb-2 block text-sm font-medium text-slate-300">
                  {t("contactPage.form.details")}
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  minLength={20}
                  rows={7}
                  placeholder={t("contactPage.form.detailsPlaceholder")}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting
                  ? t("contactPage.form.openingEmail")
                  : t("contactPage.form.submit")}
                {!isSubmitting && <Send size={16} />}
              </button>

              <p className="text-xs leading-5 text-slate-600">
                {t("contactPage.form.consent")}
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            {t("contactPage.cta.eyebrow")}
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {t("contactPage.cta.titleStart")}
            <span className="text-sky-400">
              {" "}
              {t("contactPage.cta.titleHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
            {t("contactPage.cta.description")}
          </p>

          <a
            href="mailto:AerqonBusiness@gmail.com"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t("contactPage.cta.button")}
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

export default Contact;

import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const sectionKeys = [
  "collection",
  "use",
  "legalBasis",
  "cookies",
  "sharing",
  "retention",
  "international",
  "rights",
  "security",
  "thirdPartyLinks",
  "changes",
] as const;

const sectionParagraphCounts: Record<(typeof sectionKeys)[number], number> = {
  collection: 2,
  use: 5,
  legalBasis: 2,
  cookies: 3,
  sharing: 3,
  retention: 1,
  international: 1,
  rights: 3,
  security: 2,
  thirdPartyLinks: 1,
  changes: 2,
};

function Privacy() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#050608] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <ShieldCheck size={20} className="text-sky-300" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
              {t("privacyPage.hero.eyebrow")}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("privacyPage.hero.title")}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              {t("privacyPage.hero.description")}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>{t("privacyPage.hero.effective")}</span>
              <span>{t("privacyPage.hero.website")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                {t("privacyPage.summary.eyebrow")}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {t("privacyPage.summary.text")}
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs text-slate-600">
                  {t("privacyPage.summary.contact")}
                </p>

                <a
                  href="mailto:AerqonBusiness@gmail.com"
                  className="mt-2 block break-all text-sm font-medium text-white transition hover:text-sky-300"
                >
                  AerqonBusiness@gmail.com
                </a>
              </div>

              <Link
                to="/cookies"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
              >
                {t("privacyPage.summary.cookieLink")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <h2 className="text-xl font-semibold text-white">
                {t("privacyPage.about.title")}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {t("privacyPage.about.text")}
              </p>
            </div>

            {sectionKeys.map((key) => (
              <article
                key={key}
                className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7"
              >
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                  {t(`privacyPage.sections.${key}.title`)}
                </h2>

                <div className="mt-4 space-y-3">
                  {Array.from({ length: sectionParagraphCounts[key] }).map((_, index) => (
                    <p key={index} className="text-sm leading-7 text-slate-400">
                      {t(`privacyPage.sections.${key}.content.${index}`)}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
                <Mail size={18} className="text-sky-300" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-white">
                {t("privacyPage.contact.title")}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {t("privacyPage.contact.text")}
              </p>

              <a
                href="mailto:AerqonBusiness@gmail.com"
                className="mt-4 inline-block break-all text-sm font-semibold text-sky-300 transition hover:text-sky-200"
              >
                AerqonBusiness@gmail.com
              </a>
            </article>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Privacy;

import {
  Bug,
  KeyRound,
  LockKeyhole,
  Mail,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import PageLayout from "../../components/layout/PageLayout";

const practices = [
  { icon: LockKeyhole, key: "secureDesign" },
  { icon: KeyRound, key: "accessControl" },
  { icon: ServerCog, key: "infrastructure" },
  { icon: Bug, key: "issueHandling" },
] as const;

const sectionKeys = [
  "approach",
  "applicationSecurity",
  "authentication",
  "dataProtection",
  "thirdParty",
  "dependencies",
  "noGuarantee",
  "reporting",
] as const;

function Security() {
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
              {t("securityPage.hero.eyebrow")}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("securityPage.hero.title")}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              {t("securityPage.hero.description")}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>{t("securityPage.hero.updated")}</span>
              <span>{t("securityPage.hero.website")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((practice) => {
              const Icon = practice.icon;

              return (
                <article
                  key={practice.key}
                  className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className="text-sky-300" />
                  </div>

                  <h2 className="mt-5 text-base font-semibold text-white">
                    {t(`securityPage.practices.${practice.key}.title`)}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {t(`securityPage.practices.${practice.key}.text`)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                {t("securityPage.summary.eyebrow")}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {t("securityPage.summary.text")}
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs text-slate-600">
                  {t("securityPage.summary.report")}
                </p>

                <a
                  href="mailto:AerqonBusiness@gmail.com"
                  className="mt-2 block break-all text-sm font-medium text-white transition hover:text-sky-300"
                >
                  AerqonBusiness@gmail.com
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {sectionKeys.map((key) => (
              <article
                key={key}
                className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7"
              >
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                  {t(`securityPage.sections.${key}.title`)}
                </h2>

                <div className="mt-4 space-y-3">
                  {[0, 1].map((index) => (
                    <p key={index} className="text-sm leading-7 text-slate-400">
                      {t(`securityPage.sections.${key}.content.${index}`)}
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
                {t("securityPage.contact.title")}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {t("securityPage.contact.text")}
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

export default Security;

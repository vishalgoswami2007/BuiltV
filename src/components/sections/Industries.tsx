import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Hammer,
  HousePlug,
  Rocket,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const industries = [
  { icon: HousePlug, key: "homeServices" },
  { icon: Building2, key: "fieldServices" },
  { icon: Hammer, key: "construction" },
  { icon: BriefcaseBusiness, key: "professionalServices" },
  { icon: Rocket, key: "startups" },
];

function Industries() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#050608] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            {t("industries.eyebrow")}
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl">
            {t("industries.titleStart")}{" "}
            <span className="text-slate-400">
              {t("industries.titleHighlight")}
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {t("industries.description")}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.key}
                to="/solutions"
                className={`group rounded-2xl border border-white/10 bg-[#0A0D12] p-5 transition active:scale-[0.99] sm:p-7 sm:hover:border-sky-400/30 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={21} className="text-sky-300" />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-slate-600 transition group-hover:text-sky-300"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white sm:mt-7 sm:text-xl">
                  {t(`industries.${industry.key}.title`)}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  {t(`industries.${industry.key}.description`)}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4 sm:mt-7 sm:pt-5">
                  <p className="text-xs leading-6 text-slate-500">
                    {t(`industries.${industry.key}.system`)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10">
          <Link
            to="/solutions"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
          >
            {t("industries.explore")}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Industries;
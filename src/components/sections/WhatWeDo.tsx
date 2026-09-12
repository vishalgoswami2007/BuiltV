import {
  Bot,
  Code2,
  Layers3,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const capabilities = [
  {
    icon: MonitorSmartphone,
    key: "web",
  },
  {
    icon: Code2,
    key: "software",
  },
  {
    icon: Workflow,
    key: "systems",
  },
  {
    icon: Bot,
    key: "ai",
  },
  {
    icon: Layers3,
    key: "engineering",
  },
];

function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#050608] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              {t("whatWeDo.eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl">
              {t("whatWeDo.titleStart")}{" "}
              <span className="text-sky-400">
                {t("whatWeDo.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-slate-400 sm:text-base">
              {t("whatWeDo.description")}
            </p>

            <Link
              to="/services"
              className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-white transition hover:text-sky-300 sm:mt-5"
            >
              {t("whatWeDo.exploreServices")} →
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="group rounded-2xl border border-white/10 bg-[#0A0D12] p-5 transition hover:border-sky-400/30 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon size={21} className="text-sky-300" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white sm:mt-6 sm:text-xl">
                  {t(`whatWeDo.capabilities.${item.key}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {t(`whatWeDo.capabilities.${item.key}.description`)}
                </p>
              </div>
            );
          })}

          <Link
            to="/services"
            className="group flex min-h-56 flex-col justify-between rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5 transition hover:border-sky-400/40 hover:bg-sky-400/10 sm:min-h-64 sm:p-7"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                {t("whatWeDo.differentEyebrow")}
              </p>

              <h3 className="mt-4 max-w-xs text-xl font-semibold leading-snug text-white sm:mt-5 sm:text-2xl">
                {t("whatWeDo.differentTitle")}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                {t("whatWeDo.differentDescription")}
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between sm:mt-8">
              <span className="text-sm font-medium text-white">
                {t("whatWeDo.exploreServices")}
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/30 text-sky-300 transition group-hover:bg-sky-400 group-hover:text-black">
                →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FinalCTA() {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl sm:h-96 sm:w-96"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.35, 1],
                opacity: [0.35, 0.7, 0.35],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute top-1/2 hidden h-48 w-48 rounded-full bg-blue-500/10 blur-3xl sm:block"
          animate={{ x: ["-15vw", "100vw"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32"
        style={{
          background: "linear-gradient(to bottom, #050608, rgba(5,6,8,0))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={
            reduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            {t("finalCTA.eyebrow")}
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:mt-7 sm:text-6xl lg:text-7xl">
            {t("finalCTA.titleStart")}{" "}
            <span className="text-sky-400">
              {t("finalCTA.titleHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-7 sm:text-lg">
            {t("finalCTA.description")}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-sky-300"
            >
              {t("finalCTA.startProject")}

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/work"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              {t("finalCTA.exploreWork")}
            </Link>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-white/10 pt-6 sm:mt-24 sm:pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs uppercase tracking-widest text-slate-600 sm:gap-x-8">
            <span>{t("finalCTA.web")}</span>
            <span>{t("finalCTA.software")}</span>
            <span>{t("finalCTA.systems")}</span>
            <span>{t("finalCTA.ai")}</span>
            <span>{t("finalCTA.automation")}</span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28"
        style={{
          background: "linear-gradient(to top, #050608, rgba(5,6,8,0))",
        }}
      />
    </section>
  );
}

export default FinalCTA;

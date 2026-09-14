import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import workflowVideo from "../../assets/videos/workflow-compressed.mp4";

const steps = [
  "enquiry",
  "quote",
  "booking",
  "job",
  "payment",
  "followUp",
];

function WorkflowShowcase() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-svh overflow-hidden bg-black">
      <video
        src={workflowVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/75 sm:bg-black/70 lg:bg-black/65" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 45%, rgba(56,189,248,0.12), transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="w-full">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              {t("workflow.eyebrow")}
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("workflow.title")}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {t("workflow.description")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-3 lg:grid-cols-6">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md sm:rounded-2xl sm:p-5"
              >
                <p className="text-xs font-medium text-sky-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-2 text-sm font-medium text-white sm:mt-3">
                  {t(`workflow.steps.${step}`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              to="/solutions"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15"
            >
              {t("workflow.explore")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32"
        style={{
          background: "linear-gradient(to top, #050608, rgba(5,6,8,0))",
        }}
      />
    </section>
  );
}

export default WorkflowShowcase;

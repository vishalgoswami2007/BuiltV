import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand the business, users, workflow and the problem worth solving.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    text: "We shape the experience, system architecture and product direction.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    text: "We engineer the product with modern, reliable and scalable technology.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    text: "We test, refine and move the system into the real world.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Improve",
    text: "We learn from real usage and continue improving what matters.",
    icon: TrendingUp,
  },
];

function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#050608] py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-250, 250, -250],
                y: [-80, 80, -80],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            How we work
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl">
            From problem to
            <span className="text-sky-400"> working product.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A focused process designed to move from an idea to a reliable
            digital system without unnecessary complexity.
          </p>
        </div>

        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-12 right-12 top-10 h-px bg-white/10" />

          {!reduceMotion && (
            <div className="absolute left-12 right-12 top-10 h-px overflow-hidden">
              <motion.div
                className="h-full w-40 bg-linear-to-r from-transparent via-sky-300 to-transparent"
                animate={{ x: ["-160px", "1100px"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          )}

          <div className="relative grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#0A0D12]"
                    whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                  >
                    {!reduceMotion && (
                      <motion.div
                        className="absolute inset-0 rounded-full border border-sky-400/0"
                        animate={{
                          borderColor: [
                            "rgba(56,189,248,0)",
                            "rgba(56,189,248,0.5)",
                            "rgba(56,189,248,0)",
                          ],
                          scale: [1, 1.18, 1],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.5,
                          repeat: Infinity,
                        }}
                      />
                    )}

                    <Icon size={22} className="relative z-10 text-sky-300" />
                  </motion.div>

                  <div className="mt-8 min-h-60 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-sky-400/30 group-hover:bg-white/10">
                    <span className="text-xs font-medium text-sky-300">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10 space-y-3 sm:mt-14 lg:hidden">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-white/10 sm:left-6" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative flex gap-3 sm:gap-5"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-[#0A0D12] sm:h-12 sm:w-12">
                  <Icon size={17} className="text-sky-300 sm:hidden" />
                  <Icon size={18} className="hidden text-sky-300 sm:block" />
                </div>

                <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <span className="text-xs text-sky-300">{step.number}</span>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            to="/contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-sky-400/30 hover:bg-sky-400/10 sm:w-auto"
          >
            Start your project

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Process;

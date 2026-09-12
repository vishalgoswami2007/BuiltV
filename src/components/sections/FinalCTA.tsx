import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050608] py-32">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Glow one */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96-translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          x: ["-20vw", "90vw"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Horizontal beam */}
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px overflow-hidden bg-white/5">
        <motion.div
          className="h-full w-52 bg-linear-to-br from-transparent via-sky-300 to-transparent"
          animate={{
            x: ["-220px", "110vw"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-center backdrop-blur-md sm:px-10 lg:px-16"
        >
          {/* Top badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2">
              <Sparkles size={14} className="text-sky-300" />

              <span className="text-xs font-medium uppercase tracking-widest text-sky-300">
                Build what&apos;s next
              </span>
            </div>
          </div>

          <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have an idea, workflow or business problem
            <span className="text-sky-400"> worth solving?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Tell us what you&apos;re trying to build. We&apos;ll help turn it
            into a digital product, system or automation that fits the way your
            business works.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-sky-300"
            >
              Start a project

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Explore our work
            </Link>
          </div>

          {/* Bottom info */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-xs uppercase tracking-widest text-slate-500">
            <span>Web</span>
            <span>Software</span>
            <span>AI</span>
            <span>Automation</span>
            <span>Systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
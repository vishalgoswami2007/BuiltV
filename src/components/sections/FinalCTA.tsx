import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050608] py-36 sm:py-44">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      {/* Main glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving light */}
      <motion.div
        className="pointer-events-none absolute top-1/2 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          x: ["-15vw", "100vw"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, #050608, rgba(5,6,8,0))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Let&apos;s build something useful
          </p>

          <h2 className="mt-7 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            The next system your business runs on
            <span className="text-sky-400"> starts here.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Whether you&apos;re replacing manual work, launching a product or
            building a better customer experience, BuiltV can help turn it
            into a working digital system.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-sky-300"
            >
              Start a project

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Explore our work
            </Link>
          </div>
        </motion.div>

        {/* Bottom line */}
        <div className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-slate-600">
            <span>Web</span>
            <span>Software</span>
            <span>Systems</span>
            <span>AI</span>
            <span>Automation</span>
          </div>
        </div>
      </div>

      {/* Footer merge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{
          background:
            "linear-gradient(to top, #050608, rgba(5,6,8,0))",
        }}
      />
    </section>
  );
}

export default FinalCTA;
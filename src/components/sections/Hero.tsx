import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroVideo from "../../assets/videos/hero.mp4";

function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-black">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/65 sm:bg-black/60 lg:bg-black/55" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 40%, rgba(56,189,248,0.10), transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl items-center px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-10 lg:py-24">
        <div className="max-w-5xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-sky-300 sm:mb-5 sm:text-sm">
            Digital systems for a global tomorrow
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            We build digital systems that businesses{" "}
            <span className="text-sky-400">run on.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Websites, software, AI and automation engineered for ambitious
            businesses worldwide.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
            >
              Start a Project
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/work"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-black/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-widest text-slate-400 sm:mt-8 sm:gap-6">
            <span>Web</span>
            <span>Software</span>
            <span>AI</span>
            <span>Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

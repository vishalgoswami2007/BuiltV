import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/builtv-logo.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* HERO VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK VIDEO OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-75" />

      {/* BLUE BACKGROUND GLOW */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, rgba(56, 189, 248, 0.12), transparent 35%)",
        }}
      />

      {/* BOTTOM FADE */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background:
            "linear-gradient(to top, #050608, rgba(5, 6, 8, 0))",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-black/30 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-sky-300" />

              <span className="text-xs font-medium uppercase tracking-widest text-sky-300">
                Digital systems for modern businesses
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              We build digital systems{" "}
              <span className="text-slate-400">
                that businesses run on.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Websites, software, AI and automation engineered for ambitious
              businesses worldwide.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/30 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Play size={16} />
                Explore Our Work
              </Link>
            </div>

            {/* TECHNOLOGY LABELS */}
            <div className="mt-12 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-slate-500">
              <span>Web</span>
              <span>Software</span>
              <span>AI</span>
              <span>Automation</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden items-center justify-center lg:flex">
            {/* GLOW */}
            <div className="absolute h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

            {/* LOGO CONTAINER */}
            <div className="relative flex h-96 w-96 items-center justify-center rounded-full border border-white/10 bg-black/20">
              <div className="absolute h-80 w-80 rounded-full border border-white/10" />

              <img
                src={logo}
                alt="BuiltV logo"
                className="relative z-10 h-44 w-44 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
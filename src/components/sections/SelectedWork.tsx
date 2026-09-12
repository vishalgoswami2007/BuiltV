import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "MineQueue",
    category: "Healthcare Software",
    description:
      "A real-time doctor appointment platform designed around booking reliability, scheduling and smoother patient workflows.",
    tags: ["React", "Node.js", "MongoDB", "Real-time Booking"],
    accent: "from-sky-400/20 via-cyan-300/10 to-transparent",
    panelLabel: "Doctor appointment system",
  },
  {
    title: "Triage",
    category: "AI Developer Platform",
    description:
      "An AI-powered debugging platform built to help developers understand errors, inspect context and move from issue to solution faster.",
    tags: ["React", "AI", "Developer Tools", "SaaS"],
    accent: "from-blue-500/20 via-sky-400/10 to-transparent",
    panelLabel: "AI debugging workspace",
  },
];

function ProjectVisual({
  title,
  panelLabel,
  accent,
}: {
  title: string;
  panelLabel: string;
  accent: string;
}) {
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#0B1017] p-4 sm:aspect-[16/9] sm:p-8 lg:min-h-96 lg:aspect-auto">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent}`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="ml-2 text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
            {title}
          </span>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[0.8fr_1.2fr] sm:p-5">
          <div className="hidden space-y-2 sm:block">
            <div className="h-8 rounded-lg border border-white/10 bg-white/5" />
            <div className="h-8 rounded-lg border border-white/10 bg-white/5" />
            <div className="h-8 rounded-lg border border-sky-400/20 bg-sky-400/10" />
            <div className="h-8 rounded-lg border border-white/10 bg-white/5" />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <p className="text-xs uppercase tracking-widest text-sky-300">
              {panelLabel}
            </p>
            <div className="mt-4 h-3 w-3/4 rounded-full bg-white/15" />
            <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="h-14 rounded-lg border border-white/10 bg-white/5" />
              <div className="h-14 rounded-lg border border-sky-400/20 bg-sky-400/10" />
              <div className="h-14 rounded-lg border border-white/10 bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section className="bg-[#050608] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Selected work
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl">
              Products designed to solve
              <span className="text-slate-400"> real problems.</span>
            </h2>
          </div>

          <Link
            to="/work"
            className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-medium text-white transition hover:text-sky-300 lg:self-auto"
          >
            View all work
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to="/work"
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D12] sm:rounded-3xl"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ProjectVisual
                  title={project.title}
                  panelLabel={project.panelLabel}
                  accent={project.accent}
                />

                <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-12">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold text-white sm:mt-5 sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">
                    <span className="text-sm font-medium text-white">
                      View project
                    </span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition group-hover:border-sky-400/40 group-hover:bg-sky-400 group-hover:text-black">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;

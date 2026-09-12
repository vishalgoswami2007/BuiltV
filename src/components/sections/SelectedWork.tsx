import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "MineQueue",
    category: "Healthcare Software",
    description:
      "A real-time doctor appointment platform designed around booking reliability, scheduling and smoother patient workflows.",
    tags: ["React", "Node.js", "MongoDB", "Real-time Booking"],
    image: "/work/minequeue-cover.jpg",
  },
  {
    title: "Triage",
    category: "AI Developer Platform",
    description:
      "An AI-powered debugging platform built to help developers understand errors, inspect context and move from issue to solution faster.",
    tags: ["React", "AI", "Developer Tools", "SaaS"],
    image: "/work/triage-cover.jpg",
  },
];

function SelectedWork() {
  return (
    <section className="bg-[#050608] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Selected work
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Products designed to solve
              <span className="text-slate-400"> real problems.</span>
            </h2>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
          >
            View all work
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to="/work"
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#0A0D12]"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-80 overflow-hidden bg-[#0F141C] lg:min-h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/15" />
                </div>

                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                      {project.category}
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
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

                  <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-sm font-medium text-white">
                      View project
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition group-hover:border-sky-400/40 group-hover:bg-sky-400 group-hover:text-black">
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
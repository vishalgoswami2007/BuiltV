import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Code2,
  Database,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const projects = [
  {
    number: "01",
    title: "MineQueue",
    category: "Healthcare Software",
    headline: "Appointment booking built around reliability.",
    description:
      "A real-time doctor appointment platform designed to make discovering doctors, checking availability and booking appointments simpler while protecting the booking flow from conflicts.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Real-time Booking",
    ],
    features: [
      {
        icon: CalendarCheck,
        title: "Scheduling",
        text: "Doctor availability and appointment workflows designed around real booking scenarios.",
      },
      {
        icon: ShieldCheck,
        title: "Booking reliability",
        text: "Logic designed to reduce conflicting appointments and double-booking situations.",
      },
      {
        icon: Database,
        title: "Connected backend",
        text: "Users, schedules and bookings connected through a structured API and database layer.",
      },
    ],
    visual: "minequeue",
  },
  {
    number: "02",
    title: "Triage",
    category: "AI Developer Platform",
    headline: "A cleaner way to move from error to understanding.",
    description:
      "An AI-powered developer debugging platform designed to bring code, errors and supporting context into one focused workspace so developers can investigate problems faster.",
    tags: ["React", "AI", "SaaS", "Developer Tools", "Context", "Debugging"],
    features: [
      {
        icon: Bot,
        title: "AI assistance",
        text: "A conversational debugging workflow designed around developer context and technical problems.",
      },
      {
        icon: Code2,
        title: "Code context",
        text: "Support for bringing code, errors and development context into the same investigation.",
      },
      {
        icon: Workflow,
        title: "Focused workflow",
        text: "A product experience designed to reduce jumping between disconnected debugging tools.",
      },
    ],
    visual: "triage",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "minequeue") {
    return (
      <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-[#071018] p-5 sm:min-h-96 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(56,189,248,0.16),transparent_38%)]" />

        <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0A0D12]/95 p-4 shadow-2xl sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-300">
                MineQueue
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Appointment Dashboard
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
              <Stethoscope size={19} className="text-sky-300" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {["Doctors", "Bookings", "Schedules"].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"
              >
                <p className="text-xs text-slate-500">0{index + 1}</p>

                <p className="mt-3 text-xs font-medium text-white sm:text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Upcoming appointment</p>

                <p className="mt-1 text-sm font-medium text-white">
                  Booking workflow
                </p>
              </div>

              <span className="rounded-full bg-sky-400/10 px-3 py-1.5 text-xs text-sky-300">
                Confirmed
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-[#090A12] p-5 sm:min-h-96 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.14),transparent_36%)]" />

      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0A0D12]/95 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

          <span className="ml-2 text-xs text-slate-500">
            Triage debugging workspace
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10">
                <Code2 size={17} className="text-sky-300" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Debug this issue
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Code + error + context
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div className="h-2.5 w-11/12 rounded-full bg-white/10" />
            <div className="h-2.5 w-9/12 rounded-full bg-white/10" />
            <div className="h-2.5 w-7/12 rounded-full bg-sky-400/20" />
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs text-slate-500">
              AI debugging assistant
            </span>

            <Sparkles size={16} className="text-sky-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#050608] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Selected Work
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Products built to turn
              <span className="text-sky-400"> problems into systems.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              A selection of products exploring healthcare workflows, AI,
              developer tooling and reliable digital experiences.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Build something with us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D12] sm:rounded-3xl"
              >
                <div className="grid lg:grid-cols-2">
                  <ProjectVisual type={project.visual} />

                  <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10 xl:p-12">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                          {project.category}
                        </p>

                        <span className="text-xs text-slate-600">
                          {project.number}
                        </span>
                      </div>

                      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {project.title}
                      </h2>

                      <h3 className="mt-3 text-lg font-medium leading-7 text-slate-200 sm:text-xl">
                        {project.headline}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
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

                    <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10">
                      <Link
                        to="/contact"
                        className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
                      >
                        Discuss a similar project

                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">
                  {project.features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="bg-[#080A0E] p-5 sm:p-6"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon size={18} className="text-sky-300" />
                        </div>

                        <h3 className="mt-4 text-base font-semibold text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {feature.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                How we think
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Good software starts with
                <span className="text-sky-400"> the workflow.</span>
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-base leading-7 text-slate-400">
                We focus on what users are trying to accomplish, where
                operational friction exists and which parts of the system need
                to remain dependable as usage grows.
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
              >
                Explore our capabilities
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Your project could be next
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a useful system
            <span className="text-sky-400"> worth building?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Bring the workflow, idea or business problem. We can help turn it
            into a clear product direction and working digital system.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Start a project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Work;
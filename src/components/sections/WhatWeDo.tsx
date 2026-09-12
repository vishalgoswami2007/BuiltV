import {
  Bot,
  Code2,
  Layers3,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Web Experiences",
    description:
      "High-performance websites and digital experiences built to convert, communicate and grow.",
  },
  {
    icon: Code2,
    title: "Software & SaaS",
    description:
      "Custom platforms, dashboards, portals and SaaS products designed around real business workflows.",
  },
  {
    icon: Workflow,
    title: "Business Systems",
    description:
      "Booking, quoting, scheduling and operational systems that reduce repetitive work.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "AI-powered workflows and automation that help businesses move faster with less manual effort.",
  },
  {
    icon: Layers3,
    title: "Product Engineering",
    description:
      "Modern frontend, backend, APIs and integrations engineered for reliable digital products.",
  },
];

function WhatWeDo() {
  return (
    <section className="bg-[#050608] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              What we build
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Digital products built around
              <span className="text-sky-400"> real business needs.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base leading-7 text-slate-400">
              BuiltV combines design, software and automation to turn business
              problems into systems that are easier to run and easier to scale.
            </p>

            <Link
              to="/services"
              className="mt-5 inline-flex text-sm font-medium text-white transition hover:text-sky-300"
            >
              Explore all services →
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-[#0A0D12] p-7 transition hover:border-sky-400/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon size={21} className="text-sky-300" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
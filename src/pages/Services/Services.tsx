import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const services = [
  {
    icon: MonitorSmartphone,
    number: "01",
    title: "Web Experiences",
    description:
      "High-performance websites and digital experiences designed to communicate clearly, convert better and feel premium on every screen.",
    deliverables: [
      "Marketing websites",
      "Landing pages",
      "Corporate websites",
      "Responsive interfaces",
      "Performance optimisation",
      "CMS integrations",
    ],
  },
  {
    icon: Code2,
    number: "02",
    title: "Software & SaaS",
    description:
      "Custom software products built around real workflows, users and business requirements instead of forcing your team into generic tools.",
    deliverables: [
      "SaaS products",
      "Admin dashboards",
      "Client portals",
      "Internal platforms",
      "Authentication systems",
      "API integrations",
    ],
  },
  {
    icon: Workflow,
    number: "03",
    title: "Business Systems",
    description:
      "Connected operational systems that replace repetitive work, fragmented spreadsheets and disconnected processes.",
    deliverables: [
      "Booking systems",
      "Quoting workflows",
      "Scheduling systems",
      "Operations dashboards",
      "Payment workflows",
      "CRM integrations",
    ],
  },
  {
    icon: Bot,
    number: "04",
    title: "AI & Automation",
    description:
      "Practical AI and automation designed to reduce manual work, speed up decisions and improve how information moves through your business.",
    deliverables: [
      "AI assistants",
      "Workflow automation",
      "Lead qualification",
      "Support automation",
      "AI-powered internal tools",
      "LLM integrations",
    ],
  },
  {
    icon: Layers3,
    number: "05",
    title: "Product Engineering",
    description:
      "Frontend, backend, APIs, databases and integrations engineered as one reliable product foundation that can continue to evolve.",
    deliverables: [
      "Frontend engineering",
      "Backend systems",
      "REST APIs",
      "Database architecture",
      "Third-party integrations",
      "Deployment setup",
    ],
  },
];

const engagementModels = [
  {
    title: "New Product",
    text: "From an early idea to a usable product, MVP or complete digital platform.",
  },
  {
    title: "Existing System",
    text: "Improve, rebuild or extend an existing product that has become difficult to use or maintain.",
  },
  {
    title: "Automation Project",
    text: "Identify repetitive workflows and turn them into connected automated systems.",
  },
];

function Services() {
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

        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Services
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Digital systems built around
              <span className="text-sky-400"> how your business works.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              BuiltV combines product design, software engineering, AI and
              automation to turn business problems into useful digital systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Start a project
                <ArrowRight size={17} />
              </Link>

              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <a
                key={service.title}
                href={`#service-${service.number}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-sky-400/30 hover:bg-white/5"
              >
                <span className="text-sm text-slate-300 group-hover:text-white">
                  {service.title}
                </span>
                <span className="text-xs text-slate-600">{service.number}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Core capabilities
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              One studio for the systems your business needs.
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  id={`service-${service.number}`}
                  key={service.title}
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-8 lg:p-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Icon size={22} className="text-sky-300" />
                        </div>
                        <span className="text-xs font-medium text-slate-600">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                            <Check size={14} className="text-sky-300" />
                          </span>
                          <span className="text-sm text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Sparkles size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                How we engage
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Start where your business is today.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                You do not need a perfectly defined technical brief. Bring the
                problem, workflow or product idea and we can shape the right
                approach from there.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {engagementModels.map((model, index) => (
                <div
                  key={model.title}
                  className="rounded-2xl border border-white/10 bg-[#0F141C] p-5 sm:p-6"
                >
                  <span className="text-xs font-medium text-sky-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {model.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Have something specific in mind?
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tell us the problem.
            <span className="text-sky-400"> We&apos;ll help shape the system.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Whether it is a website, software product, internal workflow or AI
            automation, the conversation can start with what is slowing your
            business down.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Discuss your project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Services;

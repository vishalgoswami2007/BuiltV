import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CreditCard,
  Settings2,
  Users,
  Workflow,
  ClipboardCheck,
  MessageSquareMore,
  FileText,
  Wrench,
  Flame,
  Zap,
  Sparkles,
  Hammer,
  Trees,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const solutions = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Booking & Scheduling",
    description:
      "Give customers a simple way to book your services while keeping availability, confirmations and scheduling organised.",
    flow: ["Service", "Availability", "Booking", "Confirmation"],
    includes: [
      "Online service booking",
      "Availability management",
      "Automated confirmations",
      "Rescheduling workflows",
      "Team scheduling",
    ],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Business Operations",
    description:
      "Connect customers, jobs, staff, quotes and payments inside one system built around your day-to-day workflow.",
    flow: ["Customer", "Quote", "Job", "Staff", "Payment"],
    includes: [
      "Operations dashboard",
      "Customer management",
      "Job tracking",
      "Staff assignment",
      "Quotes & payments",
    ],
  },
  {
    icon: Bot,
    number: "03",
    title: "AI Customer Agents",
    description:
      "Use AI to handle common enquiries, capture leads and help customers move towards the right service or booking.",
    flow: ["Enquiry", "AI", "Qualification", "Booking"],
    includes: [
      "AI customer assistant",
      "FAQ handling",
      "Lead capture",
      "Lead qualification",
      "Booking assistance",
    ],
  },
  {
    icon: Settings2,
    number: "04",
    title: "Automation & Integrations",
    description:
      "Reduce repetitive admin by connecting the tools and actions that keep your service business moving.",
    flow: ["Trigger", "Workflow", "Action", "Follow-up"],
    includes: [
      "Customer notifications",
      "CRM workflows",
      "Review follow-ups",
      "Internal notifications",
      "Third-party integrations",
    ],
  },
];

const industries = [
  {
    icon: Wrench,
    title: "Plumbing",
    text: "Emergency jobs, repairs, installations and scheduled services.",
  },
  {
    icon: Flame,
    title: "Heating & HVAC",
    text: "Boiler servicing, heating repairs, installations and maintenance.",
  },
  {
    icon: Zap,
    title: "Electrical",
    text: "Electrical repairs, installations, inspections and emergency work.",
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    text: "Home, deep, recurring and commercial cleaning services.",
  },
  {
    icon: Hammer,
    title: "Property Maintenance",
    text: "Repairs, maintenance visits and recurring property work.",
  },
  {
    icon: Trees,
    title: "Landscaping",
    text: "Garden maintenance, lawn care and scheduled outdoor services.",
  },
];

const connectedSteps = [
  {
    icon: MessageSquareMore,
    title: "Customer Enquiry",
  },
  {
    icon: FileText,
    title: "Quote",
  },
  {
    icon: CalendarCheck,
    title: "Booking",
  },
  {
    icon: Users,
    title: "Staff Assignment",
  },
  {
    icon: ClipboardCheck,
    title: "Job",
  },
  {
    icon: CreditCard,
    title: "Payment & Follow-up",
  },
];

function Solutions() {
  return (
    <PageLayout>
      {/* HERO */}
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
              BUILTV SOLUTIONS
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              One Connected System.
              <span className="text-sky-400">
                {" "}
                Built Around Your Business.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              From the first customer enquiry to the completed job, BuiltV
              connects booking, operations and AI around the way your service
              business works.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/demo"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Start Demo
                <ArrowRight size={17} />
              </Link>

              <a
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section id="solutions" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              WHAT WE BUILD
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Everything your service business needs.
              <span className="text-slate-400"> Connected.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon size={20} className="text-sky-300" />
                    </div>

                    <span className="text-xs text-slate-600">
                      {solution.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">
                    {solution.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {solution.flow.map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                          {step}
                        </span>

                        {index !== solution.flow.length - 1 && (
                          <ArrowRight size={13} className="text-slate-700" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
                      CAN INCLUDE
                    </p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {solution.includes.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-slate-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                          {item}
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

      {/* CONNECTED WORKFLOW */}
      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Settings2 size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                ONE CONNECTED WORKFLOW
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                From enquiry
                <span className="text-sky-400"> to completed job.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Instead of managing disconnected tools and repetitive tasks,
                BuiltV brings the important parts of your workflow together.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {connectedSteps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-400/10">
                        <Icon size={16} className="text-sky-300" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-600">
                          0{index + 1}
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              BUILT FOR SERVICE BUSINESSES
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Your industry.
              <span className="text-slate-400"> Your workflow.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              BuiltV systems adapt around the services, team and day-to-day
              operations of your business.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className="text-sky-300" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {industry.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            EXPERIENCE BUILTV
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            See what BuiltV could look like
            <span className="text-sky-400"> for your business.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Choose your business, personalise the experience and explore a
            working system before discussing your own.
          </p>

          <Link
            to="/demo"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Start Demo
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Solutions;
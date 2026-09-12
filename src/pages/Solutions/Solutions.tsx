import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  FileText,
  MessageSquareMore,
  Search,
  Settings2,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const solutions = [
  {
    icon: Search,
    number: "01",
    title: "Lead & Enquiry Systems",
    description:
      "Capture enquiries, qualify leads and move opportunities into a clearer sales workflow.",
    flow: ["Enquiry", "Qualification", "Follow-up", "Proposal", "Customer"],
    includes: [
      "Lead capture forms",
      "CRM integrations",
      "Lead qualification",
      "Follow-up workflows",
      "Sales notifications",
    ],
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Booking & Scheduling",
    description:
      "Turn availability, appointments and scheduling into one connected customer experience.",
    flow: ["Availability", "Booking", "Confirmation", "Reminder", "Service"],
    includes: [
      "Appointment booking",
      "Availability management",
      "Automated reminders",
      "Rescheduling workflows",
      "Team scheduling",
    ],
  },
  {
    icon: FileText,
    number: "03",
    title: "Quote & Proposal Systems",
    description:
      "Create a smoother path from customer requirement to quote, approval and confirmed work.",
    flow: ["Request", "Quote", "Review", "Approval", "Job"],
    includes: [
      "Quote generation",
      "Proposal workflows",
      "Approval tracking",
      "Customer portals",
      "Document automation",
    ],
  },
  {
    icon: Workflow,
    number: "04",
    title: "Operations & Job Management",
    description:
      "Connect jobs, teams, status updates and operational information without relying on fragmented tools.",
    flow: ["Job", "Assignment", "Work", "Proof", "Completion"],
    includes: [
      "Operations dashboards",
      "Job tracking",
      "Team assignment",
      "Status workflows",
      "Internal notifications",
    ],
  },
  {
    icon: CreditCard,
    number: "05",
    title: "Payments & Billing",
    description:
      "Connect completed work to payment, billing and follow-up workflows with less manual admin.",
    flow: ["Work", "Invoice", "Payment", "Receipt", "Follow-up"],
    includes: [
      "Payment integrations",
      "Invoice workflows",
      "Payment status tracking",
      "Receipt automation",
      "Billing dashboards",
    ],
  },
  {
    icon: Bot,
    number: "06",
    title: "AI & Automation Systems",
    description:
      "Use AI where it creates real operational value instead of adding another disconnected tool.",
    flow: ["Input", "AI", "Decision", "Action", "Review"],
    includes: [
      "AI assistants",
      "Support automation",
      "Lead qualification",
      "Internal AI tools",
      "Workflow automation",
    ],
  },
];

const industries = [
  {
    icon: Building2,
    title: "Service Businesses",
    text: "Connected systems for enquiries, quotes, bookings, jobs and payments.",
  },
  {
    icon: Users,
    title: "Professional Services",
    text: "Better client workflows from lead generation through delivery and billing.",
  },
  {
    icon: ClipboardCheck,
    title: "Field Operations",
    text: "Tools for teams managing jobs, workers, proof of work and customer updates.",
  },
  {
    icon: Sparkles,
    title: "Growing Companies",
    text: "Custom internal systems for businesses outgrowing spreadsheets and manual processes.",
  },
];

function Solutions() {
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
              Solutions
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Turn disconnected business steps into
              <span className="text-sky-400"> one working system.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              BuiltV designs practical digital systems around the workflows
              businesses use every day — from the first enquiry to payment and
              follow-up.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Discuss your workflow
                <ArrowRight size={17} />
              </Link>

              <a
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Business workflows
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Systems designed around
              <span className="text-slate-400"> real operational steps.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
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
                      <div
                        key={step}
                        className="flex items-center gap-2"
                      >
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
                      Can include
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

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Settings2 size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                Connected operations
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                One workflow is useful.
                <span className="text-sky-400">
                  {" "}
                  Connected workflows are better.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                The strongest systems connect customer-facing steps with the
                operational work happening behind the scenes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: MessageSquareMore,
                    title: "Customer enquiry",
                  },
                  {
                    icon: FileText,
                    title: "Quote & approval",
                  },
                  {
                    icon: CalendarCheck,
                    title: "Booking & scheduling",
                  },
                  {
                    icon: Users,
                    title: "Team assignment",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Work completion",
                  },
                  {
                    icon: CreditCard,
                    title: "Payment & follow-up",
                  },
                ].map((item, index) => {
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

      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Who this is for
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Built for businesses with
              <span className="text-slate-400"> operational complexity.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-10">
            <Link
              to="/services"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
            >
              Explore our services

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Start with the workflow
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Show us where the process breaks.
            <span className="text-sky-400"> We&apos;ll design what connects it.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            You do not need to know which software you need. Start with the
            business process, bottleneck or manual work that needs improving.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Discuss your workflow
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

export default Solutions;
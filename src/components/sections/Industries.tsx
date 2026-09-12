import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Hammer,
  HousePlug,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: HousePlug,
    title: "Home Services",
    description:
      "Digital systems for plumbing, HVAC, electrical and other service businesses.",
    system: "Lead → Quote → Booking → Job → Payment",
  },
  {
    icon: Building2,
    title: "Field Services",
    description:
      "Operational tools for cleaning, maintenance and mobile service teams.",
    system: "Job → Worker → Proof → Client → Invoice",
  },
  {
    icon: Hammer,
    title: "Construction",
    description:
      "Connected workflows for projects, teams, reporting and client communication.",
    system: "Project → Team → Site → Report → Client",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Better systems for leads, proposals, clients, billing and recurring work.",
    system: "Lead → Proposal → Client → Delivery → Billing",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "From early product ideas to working MVPs and scalable digital platforms.",
    system: "Idea → MVP → Launch → Learn → Scale",
  },
];

function Industries() {
  return (
    <section className="bg-[#050608] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Who we build for
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl">
            Different businesses.
            <span className="text-slate-400"> Similar operational problems.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            We design systems around how a business actually works — from the
            first customer enquiry to the work happening behind the scenes.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.title}
                to="/solutions"
                className={`group rounded-2xl border border-white/10 bg-[#0A0D12] p-5 transition active:scale-[0.99] sm:p-7 sm:hover:border-sky-400/30 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={21} className="text-sky-300" />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-slate-600 transition group-hover:text-sky-300"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white sm:mt-7 sm:text-xl">
                  {industry.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  {industry.description}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4 sm:mt-7 sm:pt-5">
                  <p className="break-words text-xs leading-6 text-slate-500">
                    {industry.system}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10">
          <Link
            to="/solutions"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
          >
            Explore all solutions
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Industries;

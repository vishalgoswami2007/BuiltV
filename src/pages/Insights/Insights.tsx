import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Lightbulb,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const featuredInsights = [
  {
    category: "Business Systems",
    title: "When a business has too many tools, the real problem is usually the workflow.",
    description:
      "Why disconnected software creates operational friction and how better systems can simplify the way work moves through a business.",
    icon: Workflow,
  },
  {
    category: "AI & Automation",
    title: "AI creates value when it is connected to an actual business process.",
    description:
      "Practical AI should reduce work, improve decisions or speed up a workflow — not exist as another isolated tool.",
    icon: Bot,
  },
  {
    category: "Product Engineering",
    title: "Good software starts before the first line of code.",
    description:
      "The strongest digital products begin with the workflow, users and system behaviour before technical implementation starts.",
    icon: Code2,
  },
];

const topics = [
  "Business systems",
  "AI & automation",
  "Software engineering",
  "Product strategy",
  "SaaS",
  "Operations",
  "Digital experiences",
];

function Insights() {
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
              Insights
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Thinking about software,
              <span className="text-sky-400"> systems and what comes next.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Ideas and practical thinking around digital products, business
              workflows, software engineering, AI and automation.
            </p>

            <div className="mt-8">
              <a
                href="#insights"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
              >
                Explore insights
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Featured thinking
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Useful ideas for
              <span className="text-slate-400"> modern digital businesses.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {featuredInsights.map((insight, index) => {
              const Icon = insight.icon;

              return (
                <article
                  key={insight.title}
                  className="group flex min-h-96 flex-col justify-between rounded-2xl border border-white/10 bg-[#0A0D12] p-5 transition hover:border-sky-400/30 sm:p-7"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Icon size={20} className="text-sky-300" />
                      </div>

                      <span className="text-xs text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-medium uppercase tracking-widest text-sky-300">
                      {insight.category}
                    </p>

                    <h3 className="mt-4 text-xl font-semibold leading-8 text-white">
                      {insight.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {insight.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                      Insight article
                      <ArrowUpRight size={15} />
                    </span>
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
                <Lightbulb size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                What we write about
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Less noise.
                <span className="text-sky-400"> More useful thinking.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                BuiltV Insights focuses on the practical side of building and
                operating digital products — what works, what breaks and how
                better systems can improve the business around them.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/10 bg-[#0A0D12] px-4 py-3 text-sm text-slate-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Workflow size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                Systems
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Build around the workflow, not around the software.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Good systems should follow the way work actually moves through a
                company instead of forcing teams into unnecessary complexity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Sparkles size={20} className="text-sky-300" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
                Product
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Technology is useful when it improves something measurable.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Better customer experience, less manual work, faster operations
                or a stronger product are more useful goals than simply adding
                more technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050608] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            From insight to execution
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a system that needs
            <span className="text-sky-400"> better thinking?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            If your business has a workflow, product or operational problem
            worth improving, BuiltV can help turn the idea into a working
            digital system.
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

export default Insights;
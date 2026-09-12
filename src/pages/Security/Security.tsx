import {
  Bug,
  KeyRound,
  LockKeyhole,
  Mail,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

import PageLayout from "../../components/layout/PageLayout";

const practices = [
  {
    icon: LockKeyhole,
    title: "Secure by design",
    text: "Security considerations are included when designing applications, APIs, authentication flows and business systems.",
  },
  {
    icon: KeyRound,
    title: "Access control",
    text: "Projects can use appropriate authentication and authorization controls based on their requirements.",
  },
  {
    icon: ServerCog,
    title: "Infrastructure awareness",
    text: "Hosting, environment configuration and third-party infrastructure are considered as part of the technical architecture.",
  },
  {
    icon: Bug,
    title: "Issue handling",
    text: "Security concerns reported responsibly can be investigated and addressed according to their severity and project context.",
  },
];

const sections = [
  {
    title: "1. Our security approach",
    content: [
      "BuiltV considers security throughout the design and development of websites, software products, business systems and automation workflows.",
      "Security requirements vary between projects, so specific controls should be selected according to the application's architecture, data and risk profile.",
    ],
  },
  {
    title: "2. Application security",
    content: [
      "Where relevant, projects may include measures such as authentication, authorization, input validation, secure API design and appropriate handling of sensitive application data.",
      "The exact controls implemented depend on the agreed project requirements and technical architecture.",
    ],
  },
  {
    title: "3. Authentication and access",
    content: [
      "Applications that require user accounts should use appropriate authentication and authorization mechanisms.",
      "Access to sensitive functionality should be limited according to user roles and application requirements where applicable.",
    ],
  },
  {
    title: "4. Data protection",
    content: [
      "Projects should avoid collecting unnecessary sensitive information and should use appropriate safeguards for information that must be processed.",
      "Data protection responsibilities may also depend on hosting providers, databases, external APIs and other infrastructure selected for a project.",
    ],
  },
  {
    title: "5. Third-party services",
    content: [
      "BuiltV projects may integrate external platforms such as cloud infrastructure, authentication providers, payment services, AI platforms, APIs or communication services.",
      "These services maintain their own security practices and terms. Their security and availability cannot be controlled entirely by BuiltV.",
    ],
  },
  {
    title: "6. Dependencies and updates",
    content: [
      "Modern software commonly relies on third-party packages and frameworks.",
      "Dependencies should be reviewed and maintained appropriately over the lifecycle of a project, particularly when security updates become available.",
    ],
  },
  {
    title: "7. No absolute security guarantee",
    content: [
      "No website, application, network or internet-based service can be guaranteed to be completely secure.",
      "BuiltV therefore does not claim that systems are immune from every vulnerability, attack, outage or third-party security incident.",
    ],
  },
  {
    title: "8. Reporting a security concern",
    content: [
      "If you believe you have discovered a security issue affecting the BuiltV website, you can report it using the contact email below.",
      "Please provide enough information to understand and investigate the issue, while avoiding unnecessary access to, modification of or disclosure of other people's information.",
    ],
  },
];

function Security() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#050608] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <ShieldCheck size={20} className="text-sky-300" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
              Security
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Security at BuiltV
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Security is considered as part of how we design, build and
              maintain modern digital products and business systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>Updated: 12 September 2026</span>
              <span>Website: builtv.online</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((practice) => {
              const Icon = practice.icon;

              return (
                <article
                  key={practice.title}
                  className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className="text-sky-300" />
                  </div>

                  <h2 className="mt-5 text-base font-semibold text-white">
                    {practice.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {practice.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                Security summary
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                BuiltV takes a practical, project-specific approach to
                application security rather than making unsupported security
                guarantees.
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs text-slate-600">
                  Report a security concern
                </p>

                <a
                  href="mailto:AerqonBusiness@gmail.com"
                  className="mt-2 block break-all text-sm font-medium text-white transition hover:text-sky-300"
                >
                  AerqonBusiness@gmail.com
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7"
              >
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-3">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-400"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
                <Mail size={18} className="text-sky-300" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-white">
                Report a security issue
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                If you believe you have identified a security concern affecting
                BuiltV, contact us with a clear description of the issue.
              </p>

              <a
                href="mailto:AerqonBusiness@gmail.com"
                className="mt-4 inline-block break-all text-sm font-semibold text-sky-300 transition hover:text-sky-200"
              >
                AerqonBusiness@gmail.com
              </a>
            </article>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Security;
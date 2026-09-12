import {
  ArrowRight,
  FileCheck2,
  Mail,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const sections = [
  {
    title: "1. About these terms",
    content: [
      "These Terms of Service govern your use of the BuiltV website and general interactions with BuiltV relating to enquiries and digital services.",
      "Specific client projects may be governed by separate proposals, statements of work, contracts or other written agreements. Where a separate agreement applies, its terms will govern the relevant project.",
    ],
  },
  {
    title: "2. Use of the website",
    content: [
      "You may use this website for lawful purposes, including learning about BuiltV, reviewing services and contacting us about potential projects.",
      "You must not misuse the website, interfere with its operation, attempt unauthorised access, introduce malicious code or use the website in a way that violates applicable law.",
    ],
  },
  {
    title: "3. Project enquiries",
    content: [
      "Submitting an enquiry does not create a client relationship, guarantee acceptance of a project or create an obligation for either party to proceed.",
      "A project becomes confirmed only when the relevant scope, commercial terms and other required conditions have been agreed between the parties.",
    ],
  },
  {
    title: "4. Project scope",
    content: [
      "Project deliverables, requirements, timelines and responsibilities should be defined in the applicable proposal, statement of work or written agreement.",
      "Requests outside the agreed scope may require additional time, fees or a revised project agreement.",
    ],
  },
  {
    title: "5. Fees and payments",
    content: [
      "Project fees, payment schedules, deposits and billing arrangements will be communicated before paid work begins.",
      "Unless otherwise agreed in writing, additional work requested outside the original scope may be quoted separately.",
      "Clients are responsible for paying agreed invoices according to the payment terms stated in the relevant proposal, invoice or agreement.",
    ],
  },
  {
    title: "6. Client responsibilities",
    content: [
      "Clients are responsible for providing reasonably accurate requirements, content, access, approvals and other information needed to complete the agreed work.",
      "Delays in receiving required information, feedback or approvals may affect project timelines.",
    ],
  },
  {
    title: "7. Intellectual property",
    content: [
      "Ownership and licensing of project deliverables should be defined in the relevant project agreement.",
      "BuiltV retains ownership of its pre-existing materials, reusable methods, internal tools, know-how and other intellectual property unless specifically agreed otherwise.",
      "Clients must have the necessary rights to any content, data, trademarks, software or other materials they provide for use in a project.",
    ],
  },
  {
    title: "8. Third-party services",
    content: [
      "Projects may use third-party platforms, APIs, hosting providers, payment services, AI services or other external technologies.",
      "Third-party services operate under their own terms, pricing, availability and privacy practices. BuiltV does not control those external services.",
    ],
  },
  {
    title: "9. Confidential information",
    content: [
      "Where confidential business or technical information is shared during a project, each party should take reasonable steps to protect that information and use it only for the intended purpose.",
      "Additional confidentiality requirements may be defined in a separate written agreement where necessary.",
    ],
  },
  {
    title: "10. Availability and warranties",
    content: [
      "BuiltV aims to provide professional services and reliable digital work, but no website, software system or third-party platform can be guaranteed to operate without interruption or error in every circumstance.",
      "Any specific warranties, support commitments or service levels must be expressly stated in the applicable project agreement.",
    ],
  },
  {
    title: "11. Limitation of liability",
    content: [
      "To the extent permitted by applicable law, BuiltV will not be responsible for indirect, incidental or consequential losses arising solely from use of this website.",
      "Liability relating to paid client work may be subject to additional limitations defined in the applicable project agreement.",
      "Nothing in these terms excludes liability that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "12. Suspension or termination",
    content: [
      "BuiltV may restrict access to the website where reasonably necessary to protect the website, users or systems from misuse or security threats.",
      "Termination rights relating to client projects should be defined in the applicable project agreement.",
    ],
  },
  {
    title: "13. Changes to these terms",
    content: [
      "These Terms of Service may be updated when BuiltV's website, services or business practices change.",
      "The latest version published on this page will apply from the stated effective date.",
    ],
  },
  {
    title: "14. Applicable law",
    content: [
      "The governing law and dispute resolution terms for paid client projects should be specified in the relevant project agreement.",
      "Nothing in these website terms removes rights that cannot be waived under applicable law.",
    ],
  },
];

function Terms() {
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
              <Scale size={20} className="text-sky-300" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
              Legal
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              These terms explain the general rules for using the BuiltV
              website and the framework for starting a project with us.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>Effective: 12 September 2026</span>
              <span>Website: builtv.online</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
                <FileCheck2 size={18} className="text-sky-300" />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-sky-300">
                Terms summary
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Website enquiries are only the starting point. Specific project
                scope, pricing, ownership and delivery terms should be agreed
                separately before paid work begins.
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs text-slate-600">Questions</p>

                <a
                  href="mailto:AerqonBusiness@gmail.com"
                  className="mt-2 block break-all text-sm font-medium text-white transition hover:text-sky-300"
                >
                  AerqonBusiness@gmail.com
                </a>
              </div>

              <Link
                to="/privacy"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
              >
                Read Privacy Policy
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <h2 className="text-xl font-semibold text-white">
                Agreement to these terms
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                By using the BuiltV website, you agree to use it in accordance
                with these terms and applicable law. If you enter into a
                separate written agreement with BuiltV, that agreement may
                contain additional or different terms for the relevant project.
              </p>
            </div>

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
                Questions about these terms?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Contact BuiltV if you have a question about these terms or need
                to discuss terms relating to a specific project.
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

export default Terms;
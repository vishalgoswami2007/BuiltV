import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import PageLayout from "../../components/layout/PageLayout";

const sections = [
  {
    title: "1. Information we may collect",
    content: [
      "Information you provide directly, such as your name, email address, company name, project details and other information submitted through contact forms or email.",
      "Technical information that may be collected automatically when you use the website, such as browser type, device information, IP address, pages visited and basic usage information.",
    ],
  },
  {
    title: "2. How we use information",
    content: [
      "To respond to enquiries and communicate about potential projects.",
      "To provide, maintain and improve the BuiltV website and services.",
      "To understand how visitors use the website and improve usability and performance.",
      "To protect the website, prevent misuse and maintain security.",
      "To comply with applicable legal obligations where required.",
    ],
  },
  {
    title: "3. Legal basis and fair use",
    content: [
      "Where applicable, information may be processed because it is necessary to respond to your request, to take steps before entering into an agreement, for legitimate business interests, or where you have provided consent.",
      "BuiltV aims to collect only the information reasonably necessary for the purpose for which it is used.",
    ],
  },
  {
    title: "4. Cookies and similar technologies",
    content: [
      "BuiltV may use essential cookies required for website functionality and may use optional analytics, preference or third-party technologies where implemented.",
      "Where consent is required, non-essential technologies should only be used after the relevant consent has been provided.",
      "More information is available in the Cookie Policy.",
    ],
  },
  {
    title: "5. Sharing of information",
    content: [
      "BuiltV does not sell personal information.",
      "Information may be shared with service providers that help operate the website or deliver services, such as hosting, communication, analytics or infrastructure providers.",
      "Information may also be disclosed where required by law or where reasonably necessary to protect legal rights, users or systems.",
    ],
  },
  {
    title: "6. Data retention",
    content: [
      "Personal information is kept only for as long as reasonably necessary for the purpose it was collected, including responding to enquiries, maintaining business records, resolving disputes and meeting legal obligations.",
    ],
  },
  {
    title: "7. International processing",
    content: [
      "Digital services and infrastructure may involve providers operating in different countries. Where personal information is transferred internationally, reasonable safeguards should be used where required by applicable law.",
    ],
  },
  {
    title: "8. Your privacy rights",
    content: [
      "Depending on where you live, you may have rights relating to your personal information, including access, correction, deletion, restriction, objection or data portability.",
      "You may also have the right to withdraw consent where processing is based on consent.",
      "Requests can be made using the contact details below.",
    ],
  },
  {
    title: "9. Security",
    content: [
      "Reasonable technical and organisational measures are used to help protect information against unauthorised access, alteration, disclosure or loss.",
      "No internet-based system can guarantee absolute security, so users should avoid sending highly sensitive information through normal website forms or email unless necessary.",
    ],
  },
  {
    title: "10. Third-party links",
    content: [
      "The website may contain links to third-party websites or services. BuiltV is not responsible for the privacy practices, content or security of external services.",
    ],
  },
  {
    title: "11. Changes to this policy",
    content: [
      "This Privacy Policy may be updated when the website, services, technologies or legal requirements change.",
      "The latest version published on this page will apply from the stated effective date.",
    ],
  },
];

function Privacy() {
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
              Legal
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              This policy explains how BuiltV may collect, use and protect
              information when you visit the website or contact us.
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
              <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                Privacy summary
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                BuiltV aims to collect only the information needed to respond to
                enquiries, operate the website and deliver services.
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs text-slate-600">Privacy contact</p>

                <a
                  href="mailto:AerqonBusiness@gmail.com"
                  className="mt-2 block break-all text-sm font-medium text-white transition hover:text-sky-300"
                >
                  AerqonBusiness@gmail.com
                </a>
              </div>

              <Link
                to="/cookies"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
              >
                Read Cookie Policy
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <h2 className="text-xl font-semibold text-white">
                About this policy
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                This Privacy Policy applies to the BuiltV website and to
                information submitted directly to BuiltV through the website,
                email or other project enquiry channels.
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
                Contact about privacy
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                For privacy questions or requests relating to personal
                information, contact BuiltV using the email below.
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

export default Privacy;
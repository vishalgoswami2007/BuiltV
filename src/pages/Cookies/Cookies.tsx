import {
  Cookie,
  Mail,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import PageLayout from "../../components/layout/PageLayout";

const sections = [
  {
    title: "1. What cookies are",
    content: [
      "Cookies are small text files or similar technologies that websites may store on your device to remember information about your visit.",
      "They can be used for essential website functions, preferences, analytics and certain third-party services.",
    ],
  },
  {
    title: "2. Essential cookies",
    content: [
      "Essential cookies are required for core website functionality and security.",
      "These may include technologies used for session handling, form protection, consent preferences or other features necessary for the website to operate correctly.",
    ],
  },
  {
    title: "3. Preference cookies",
    content: [
      "Preference cookies may remember choices such as language, display preferences or other settings that improve your experience when you return to the website.",
      "For example, BuiltV may store your selected website language so the same preference can be used on future visits.",
    ],
  },
  {
    title: "4. Analytics cookies",
    content: [
      "Analytics technologies may be used to understand how visitors use the website, which pages are visited and how the website performs.",
      "Where required by applicable law, analytics cookies should only be activated after the user has provided the relevant consent.",
    ],
  },
  {
    title: "5. Third-party technologies",
    content: [
      "Some website features may depend on external providers such as hosting, analytics, embedded content, communication platforms or other infrastructure services.",
      "These providers may use their own technologies according to their respective privacy and cookie policies.",
    ],
  },
  {
    title: "6. Cookie consent",
    content: [
      "Where non-essential cookies are used and consent is legally required, BuiltV aims to provide users with a way to accept or reject those optional technologies.",
      "Essential technologies that are necessary for core website functionality may operate without optional consent where permitted by law.",
    ],
  },
  {
    title: "7. Changing your preferences",
    content: [
      "You may be able to change your cookie preferences through the BuiltV cookie controls where available.",
      "You can also manage or delete cookies using your browser settings. Blocking certain cookies may affect some website functionality.",
    ],
  },
  {
    title: "8. Browser controls",
    content: [
      "Most modern browsers allow users to view, delete, block or limit cookies.",
      "The exact controls depend on the browser and device you use, so you should refer to your browser settings for specific instructions.",
    ],
  },
  {
    title: "9. Changes to this policy",
    content: [
      "This Cookie Policy may be updated when BuiltV introduces new technologies, analytics tools, website functionality or legal requirements.",
      "The latest version published on this page will apply from the stated effective date.",
    ],
  },
];

function Cookies() {
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
              <Cookie size={20} className="text-sky-300" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
              Legal
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cookie Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              This policy explains how BuiltV may use cookies and similar
              technologies on builtv.online.
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
                <Settings2 size={18} className="text-sky-300" />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-sky-300">
                Cookie summary
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                BuiltV may use essential technologies for website operation and
                optional technologies for preferences or analytics where they
                are implemented.
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-sky-300" />

                  <span className="text-sm font-medium text-white">
                    Consent controls
                  </span>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  We&apos;ll connect this page to the BuiltV cookie preference
                  banner in the next setup phase.
                </p>
              </div>

              <a
                href="mailto:AerqonBusiness@gmail.com"
                className="mt-5 block break-all text-sm font-medium text-white transition hover:text-sky-300"
              >
                AerqonBusiness@gmail.com
              </a>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <h2 className="text-xl font-semibold text-white">
                How this policy applies
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                This Cookie Policy applies to cookies and similar technologies
                that may be used through the BuiltV website. The exact
                technologies in use can change as website functionality is
                added or updated.
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
                Questions about cookies?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Contact BuiltV if you have questions about cookies, website
                tracking technologies or privacy preferences.
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

export default Cookies;
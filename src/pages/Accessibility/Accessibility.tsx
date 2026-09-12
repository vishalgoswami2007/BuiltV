import {
  Accessibility as AccessibilityIcon,
  Eye,
  Keyboard,
  Mail,
  MonitorSmartphone,
  MousePointer2,
  Volume2,
} from "lucide-react";

import PageLayout from "../../components/layout/PageLayout";

const commitments = [
  {
    icon: Keyboard,
    title: "Keyboard access",
    text: "We aim to keep interactive controls usable with a keyboard and to maintain logical navigation through important website elements.",
  },
  {
    icon: Eye,
    title: "Readable interfaces",
    text: "We aim to use clear typography, sufficient visual contrast and layouts that remain understandable across different screen sizes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive design",
    text: "The website is designed to adapt across mobile, tablet and desktop layouts without unnecessarily limiting access to content.",
  },
  {
    icon: MousePointer2,
    title: "Clear interaction",
    text: "Buttons, links, forms and navigation should be understandable and provide clear interaction targets wherever practical.",
  },
  {
    icon: Volume2,
    title: "Alternative access",
    text: "Where media or visual information is important, we aim to consider accessible alternatives and avoid relying only on decorative visual effects.",
  },
];

const sections = [
  {
    title: "1. Our approach",
    content: [
      "BuiltV aims to make builtv.online usable by as many people as reasonably possible, including visitors who use assistive technologies or alternative methods of navigating digital interfaces.",
      "Accessibility is considered as part of interface design, responsive behaviour, content structure and ongoing website improvements.",
    ],
  },
  {
    title: "2. Current accessibility considerations",
    content: [
      "The website uses responsive layouts designed to adapt to different screen sizes.",
      "Interactive elements are designed with visible text labels or recognisable interface patterns where practical.",
      "Text and interface colours are selected with readability and contrast in mind.",
      "Navigation and forms are structured using standard web controls where possible.",
    ],
  },
  {
    title: "3. Keyboard navigation",
    content: [
      "BuiltV aims to keep important links, buttons and form controls reachable using keyboard navigation.",
      "Users should be able to move between interactive elements using standard browser keyboard controls where supported.",
    ],
  },
  {
    title: "4. Text and visual readability",
    content: [
      "The website aims to use readable font sizes, spacing and contrast while maintaining the BuiltV visual identity.",
      "Users may also use browser-level zoom, text scaling or accessibility settings available on their device.",
    ],
  },
  {
    title: "5. Motion and animation",
    content: [
      "Some parts of the website may include animation or moving visual elements.",
      "Where practical, BuiltV aims to respect reduced-motion preferences provided by the user's operating system or browser.",
    ],
  },
  {
    title: "6. Third-party services",
    content: [
      "Some external tools, embedded content or third-party services may have accessibility behaviour controlled by their respective providers.",
      "BuiltV cannot guarantee the accessibility of third-party websites or services linked from this website.",
    ],
  },
  {
    title: "7. Ongoing improvement",
    content: [
      "Accessibility is an ongoing process rather than a one-time task.",
      "As the BuiltV website changes, accessibility issues may be identified and improved over time.",
    ],
  },
  {
    title: "8. Accessibility feedback",
    content: [
      "If you experience difficulty using the BuiltV website or accessing important information, please contact us and describe the issue you encountered.",
      "Helpful information may include the page you were using, your browser or device and the accessibility barrier you experienced.",
    ],
  },
];

function Accessibility() {
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
              <AccessibilityIcon size={20} className="text-sky-300" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
              Accessibility
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Accessibility Statement
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              BuiltV aims to create a digital experience that is clear, usable
              and accessible to a wide range of visitors.
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className="text-sky-300" />
                  </div>

                  <h2 className="mt-4 text-base font-semibold text-white">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
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
                Accessibility summary
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                BuiltV considers keyboard access, readable layouts, responsive
                design, motion preferences and clear interaction patterns as
                part of the website experience.
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs text-slate-600">
                  Found an accessibility issue?
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
                Need help accessing something?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                If content or functionality on the BuiltV website is difficult
                for you to access, contact us and we&apos;ll try to provide the
                information in a more accessible way where reasonably possible.
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

export default Accessibility;
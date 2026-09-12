import { useState, type FormEvent } from "react";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Send,
  Sparkles,
} from "lucide-react";

import PageLayout from "../../components/layout/PageLayout";

const projectTypes = [
  "Website",
  "Software / SaaS",
  "Business System",
  "AI & Automation",
  "Product Engineering",
  "Not sure yet",
];

const budgets = [
  "Under €2,500",
  "€2,500 – €5,000",
  "€5,000 – €10,000",
  "€10,000+",
  "Not sure yet",
];

const reasons = [
  "Clear project scoping",
  "Technical direction before development",
  "Business-first product thinking",
  "Global remote collaboration",
];

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "Not provided");
    const projectType = String(
      formData.get("projectType") || "Not selected",
    );
    const budget = String(formData.get("budget") || "Not selected");
    const details = String(formData.get("details") || "");

    const subject = `BuiltV Project Enquiry - ${name}`;

    const body = `
New BuiltV Project Enquiry

Name: ${name}
Email: ${email}
Company: ${company}
Project Type: ${projectType}
Budget: ${budget}

Project Details:
${details}
    `.trim();

    const mailtoLink = `mailto:AerqonBusiness@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

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
              Contact
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Tell us what you&apos;re
              <span className="text-sky-400"> trying to build.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Start with the idea, workflow or business problem. You do not need
              a complete technical specification before getting in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <MessageSquareText size={20} className="text-sky-300" />
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                Start with the problem.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Share what is not working today, what you want to improve or
                what new product you want to create.
              </p>

              <div className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 size={17} className="text-sky-300" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Mail size={20} className="text-sky-300" />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-slate-500">
                Prefer email?
              </p>

              <a
                href="mailto:AerqonBusiness@gmail.com"
                className="mt-3 block break-all text-lg font-semibold text-white transition hover:text-sky-300"
              >
                AerqonBusiness@gmail.com
              </a>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Send a short summary of your project, current problem and what
                you want to achieve.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080A0E] p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
                  <Building2 size={18} className="text-sky-300" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Global collaboration
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Remote-first project communication
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
                  Project enquiry
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Tell us about the project.
                </h2>
              </div>

              <Sparkles size={21} className="text-sky-300" />
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company or startup name"
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  What are you looking to build?
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0F141C] px-4 text-sm text-slate-300 outline-none transition focus:border-sky-400/40"
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Approximate budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0F141C] px-4 text-sm text-slate-300 outline-none transition focus:border-sky-400/40"
                >
                  <option value="" disabled>
                    Select budget range
                  </option>

                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Project details
                </label>

                <textarea
                  id="details"
                  name="details"
                  required
                  minLength={20}
                  rows={7}
                  placeholder="What are you trying to build or improve?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting
                  ? "Opening email..."
                  : "Send project enquiry"}

                {!isSubmitting && <Send size={16} />}
              </button>

              <p className="text-xs leading-5 text-slate-600">
                By submitting this form, you agree that BuiltV may use the
                information provided to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
            Not sure what you need?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            That&apos;s completely fine.
            <span className="text-sky-400">
              {" "}
              Start with the business problem.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
            We can help turn a rough idea, inefficient workflow or product
            requirement into a clearer technical direction.
          </p>

          <a
            href="mailto:AerqonBusiness@gmail.com"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Email BuiltV
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

export default Contact;
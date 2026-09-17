import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";

import PageLayout from "../../components/layout/PageLayout";

type ApiResponse = {
  success?: boolean;
  message?: string;
};

const businessTypes = [
  "Plumbing",
  "Heating / HVAC",
  "Electrical",
  "Cleaning",
  "Maintenance",
  "Landscaping / Gardening",
  "Other home-service business",
];

const packages = [
  {
    value: "booking-starter",
    label: "Booking Starter",
    price: "£549 / $749 / €649",
  },
  {
    value: "business-pro",
    label: "Business Pro",
    price: "£1,199 / $1,599 / €1,399",
  },
  {
    value: "operations-ai",
    label: "Operations + AI",
    price: "£2,499 / $3,399 / €2,899",
  },
  {
    value: "builtv-care",
    label: "BuiltV Care",
    price: "£99 / $129 / €119 per month",
  },
  {
    value: "not-sure",
    label: "Not sure yet",
    price: "Help me choose the right system",
  },
];

const solutionNeeds = [
  "Booking & Scheduling",
  "Business Operations",
  "AI Customer Agent",
  "Automation & Integrations",
  "Custom Software / Other",
];

const currentSetups = [
  "No system yet",
  "Website only",
  "Existing booking software",
  "Multiple disconnected tools",
  "Mostly manual process",
  "Other",
];

const timelines = [
  "As soon as possible",
  "Within 2–4 weeks",
  "Within 1–2 months",
  "Within 3 months",
  "Exploring for the future",
];

const reasons = [
  "Clear project scoping before development",
  "Systems designed around your workflow",
  "Business-first product thinking",
  "Connected booking, operations and automation",
];

function Contact() {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [submitMessage, setSubmitMessage] =
    useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(
        formData.get("name") || "",
      ).trim(),

      email: String(
        formData.get("email") || "",
      ).trim(),

      phone: String(
        formData.get("phone") || "",
      ).trim(),

      company: String(
        formData.get("company") || "",
      ).trim(),

      businessWebsite: String(
        formData.get("businessWebsite") || "",
      ).trim(),

      region: String(
        formData.get("region") || "",
      ).trim(),

      businessType: String(
        formData.get("businessType") || "",
      ).trim(),

      selectedPackage: String(
        formData.get("selectedPackage") || "",
      ).trim(),

      solutionNeed: String(
        formData.get("solutionNeed") || "",
      ).trim(),

      currentSetup: String(
        formData.get("currentSetup") || "",
      ).trim(),

      timeline: String(
        formData.get("timeline") || "",
      ).trim(),

      details: String(
        formData.get("details") || "",
      ).trim(),

      website: String(
        formData.get("website") || "",
      ).trim(),
    };

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data =
        (await response.json()) as ApiResponse;

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "We couldn't send your request. Please try again.",
        );
      }

      setSubmitStatus("success");

      setSubmitMessage(
        data.message ||
          "Thanks — your project request has been received. We'll review the details and get back to you.",
      );

      form.reset();
    } catch (error) {
      console.error(
        "Contact form error:",
        error,
      );

      setSubmitStatus("error");

      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              START A PROJECT
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Build a system around
              <span className="text-sky-400">
                {" "}
                your business.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Tell us how your service business
              handles bookings, customers, jobs and
              operations today. We&apos;ll review
              where BuiltV can simplify and connect
              the workflow.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-[#050608] pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          {/* LEFT */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <MessageSquareText
                  size={20}
                  className="text-sky-300"
                />
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                Start with your workflow.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                You don&apos;t need a technical
                specification. Tell us what happens
                in your business today, where the
                friction is, and what you want the
                system to improve.
              </p>

              <div className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-sky-300"
                    />

                    {reason}
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                WHAT HAPPENS NEXT
              </p>

              <div className="mt-6 space-y-5">
                <ProcessItem
                  number="01"
                  icon={MessageSquareText}
                  title="Tell us about your business"
                  text="Share your current workflow, requirements and goals."
                />

                <ProcessItem
                  number="02"
                  icon={Workflow}
                  title="We review the workflow"
                  text="We identify the right BuiltV solution and project scope."
                />

                <ProcessItem
                  number="03"
                  icon={CalendarCheck2}
                  title="Discuss the next step"
                  text="If there is a fit, we move into project planning and delivery."
                />
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-white/10 bg-[#0A0D12] p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Mail
                  size={20}
                  className="text-sky-300"
                />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-slate-500">
                PREFER EMAIL?
              </p>

              <a
                href="mailto:AerqonBusiness@gmail.com"
                className="mt-3 block break-all text-lg font-semibold text-white transition hover:text-sky-300"
              >
                AerqonBusiness@gmail.com
              </a>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Send a short summary of your
                business, current process and what
                you want to improve.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080A0E] p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10">
                  <Building2
                    size={18}
                    className="text-sky-300"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Built for service businesses
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Booking, operations, AI and
                    automation in connected systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0D12] p-5 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  PROJECT REQUEST
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Tell us about your business
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                  A few details help us understand
                  what you need before recommending
                  a solution.
                </p>
              </div>

              <Sparkles
                size={21}
                className="shrink-0 text-sky-300"
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-9 space-y-8"
            >
              {/* Honeypot */}
              <div
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* CONTACT */}
              <FormSection
                number="01"
                title="Your details"
                description="Who should we speak with about the project?"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>

                  <Field
                    label="Work email"
                    required
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Phone / WhatsApp">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+44 ..."
                      className={inputClass}
                    />
                  </Field>

                  <Field
                    label="Business name"
                    required
                  >
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Your business name"
                      className={inputClass}
                    />
                  </Field>
                </div>
              </FormSection>

              {/* BUSINESS */}
              <FormSection
                number="02"
                title="Your business"
                description="Help us understand the type of operation we're designing for."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Business type"
                    required
                  >
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      defaultValue=""
                      className={selectClass}
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select business type
                      </option>

                      {businessTypes.map(
                        (type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        ),
                      )}
                    </select>
                  </Field>

                  <Field
                    label="Country / region"
                    required
                  >
                    <input
                      id="region"
                      name="region"
                      type="text"
                      required
                      autoComplete="country-name"
                      placeholder="e.g. United Kingdom"
                      className={inputClass}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Current website">
                      <input
                        id="businessWebsite"
                        name="businessWebsite"
                        type="url"
                        placeholder="https://yourbusiness.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>
              </FormSection>

              {/* PACKAGE */}
              <FormSection
                number="03"
                title="Choose a starting point"
                description="Select the BuiltV package closest to what you need. You can choose 'Not sure' if you'd like us to recommend one."
              >
                <div className="grid gap-3">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.value}
                      className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 transition hover:border-sky-400/30 hover:bg-white/5 sm:p-5"
                    >
                      <input
                        type="radio"
                        name="selectedPackage"
                        value={`${pkg.label} — ${pkg.price}`}
                        required
                        className="mt-1 h-4 w-4 accent-sky-400"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">
                          {pkg.label}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {pkg.price}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </FormSection>

              {/* REQUIREMENTS */}
              <FormSection
                number="04"
                title="Project requirements"
                description="Tell us where the biggest opportunity is in your current workflow."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Primary requirement"
                    required
                  >
                    <select
                      id="solutionNeed"
                      name="solutionNeed"
                      required
                      defaultValue=""
                      className={selectClass}
                    >
                      <option
                        value=""
                        disabled
                      >
                        What do you need most?
                      </option>

                      {solutionNeeds.map(
                        (solution) => (
                          <option
                            key={solution}
                            value={solution}
                          >
                            {solution}
                          </option>
                        ),
                      )}
                    </select>
                  </Field>

                  <Field
                    label="Current setup"
                    required
                  >
                    <select
                      id="currentSetup"
                      name="currentSetup"
                      required
                      defaultValue=""
                      className={selectClass}
                    >
                      <option
                        value=""
                        disabled
                      >
                        How do you operate today?
                      </option>

                      {currentSetups.map(
                        (setup) => (
                          <option
                            key={setup}
                            value={setup}
                          >
                            {setup}
                          </option>
                        ),
                      )}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field
                      label="Preferred timeline"
                      required
                    >
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        defaultValue=""
                        className={selectClass}
                      >
                        <option
                          value=""
                          disabled
                        >
                          When would you like to start?
                        </option>

                        {timelines.map(
                          (timeline) => (
                            <option
                              key={timeline}
                              value={timeline}
                            >
                              {timeline}
                            </option>
                          ),
                        )}
                      </select>
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field
                      label="What would you like BuiltV to improve?"
                      required
                    >
                      <textarea
                        id="details"
                        name="details"
                        required
                        minLength={20}
                        rows={7}
                        placeholder="Tell us how bookings, customer enquiries, scheduling or jobs work today, where the friction is, and what you would like the new system to improve."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/5"
                      />
                    </Field>
                  </div>
                </div>
              </FormSection>

              {/* SUBMIT */}
              <div className="border-t border-white/10 pt-7">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div className="max-w-md">
                    <p className="text-sm font-medium text-white">
                      Ready for review?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      No obligation. We&apos;ll
                      review your requirements
                      before recommending a
                      solution.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Sending request..."
                      : "Request Project Review"}

                    {!isSubmitting && (
                      <Send size={16} />
                    )}
                  </button>
                </div>
              </div>

              {submitStatus === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-300"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0"
                    />

                    <p>{submitMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-300"
                >
                  {submitMessage}
                </div>
              )}

              <p className="text-xs leading-5 text-slate-600">
                By submitting this form, you agree
                that BuiltV may use the information
                provided to review and respond to
                your project enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-y border-white/10 bg-[#080A0E] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            NOT READY TO SUBMIT?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            See the system
            <span className="text-sky-400">
              {" "}
              before we build yours.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
            Explore the BuiltV interactive demo to
            see how booking, business operations
            and AI can work together in one
            connected customer journey.
          </p>

          <a
            href="/demo"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Start Demo
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

const inputClass =
  "min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/5";

const selectClass =
  "min-h-12 w-full rounded-xl border border-white/10 bg-[#0F141C] px-4 text-sm text-slate-300 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/5";

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({
  label,
  required = false,
  children,
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}

        {required && (
          <span className="ml-1 text-sky-400">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}

interface FormSectionProps {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

function FormSection({
  number,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section>
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/10 text-[10px] font-semibold text-sky-300">
          {number}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  );
}

interface ProcessItemProps {
  number: string;
  icon: typeof Clock3;
  title: string;
  text: string;
}

function ProcessItem({
  number,
  icon: Icon,
  title,
  text,
}: ProcessItemProps) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-sky-300">
        <Icon size={16} />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold text-slate-600">
            {number}
          </span>

          <p className="text-sm font-medium text-white">
            {title}
          </p>
        </div>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Contact;
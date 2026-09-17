import { useMemo, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Sparkles,
} from "lucide-react";

import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import logo from "../../assets/logo/builtv-logo-compressed.webp";
import workerbg1 from "../../../public/demo/workerbg1.png";
import workerbg2 from "../../../public/demo/workerbg2.png";
import workerbg3 from "../../../public/demo/workerbg3.png";

import {
  businessTypes,
  themes,
  type BusinessType,
  type DemoTheme,
} from "./demoConfig";

type PackageType =
  | "starter"
  | "pro"
  | "operations-ai";

const packageNames: Record<PackageType, string> = {
  starter: "Booking Starter",
  pro: "Business Pro",
  "operations-ai": "Operations + AI",
};

function Demo() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requestedPackage =
    searchParams.get("package");

  const selectedPackage: PackageType =
    requestedPackage === "starter" ||
    requestedPackage === "pro" ||
    requestedPackage === "operations-ai"
      ? requestedPackage
      : "starter";

  const [businessName, setBusinessName] =
    useState("");

  const [businessType, setBusinessType] =
    useState<BusinessType>("plumbing");

  const [theme, setTheme] =
    useState<DemoTheme>("clean-white");

  const canLaunch = useMemo(
    () => businessName.trim().length >= 2,
    [businessName],
  );

  const handleLaunch = () => {
    if (!canLaunch) return;

    const demoConfig = {
      businessName: businessName.trim(),
      industry: businessType,
      theme,
      package: selectedPackage,
      currency: "GBP",
    };

    sessionStorage.setItem(
      "builtv-demo-config",
      JSON.stringify(demoConfig),
    );

    navigate("/demo/experience");
  };

  return (
    <main className="relative min-h-svh overflow-hidden bg-[#050608] text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-125 w-125 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

      {/* =====================================================
          BACKGROUND 01 — HERO / WORKER
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-240 overflow-hidden sm:h-260 lg:h-280">
        <img
          src={workerbg1}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-[1.04] object-cover object-center"
        />

        {/* Main dark treatment */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Side darkness */}
        <div className="absolute inset-0 bg-linear-to-r from-[#050608]/90 via-[#050608]/45 to-[#050608]/90" />

        {/* Top + bottom fade */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050608]/70 via-[#050608]/20 to-[#050608]" />

        {/* BuiltV blue atmosphere */}
        <div className="absolute inset-0 bg-sky-950/10" />
      </div>

      {/* =====================================================
          BACKGROUND 02 — OPERATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-210 z-0 h-250 overflow-hidden sm:top-225 lg:top-240">
        <img
          src="/demo/workerbg2.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-[1.05] object-cover object-center opacity-65"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-linear-to-r from-[#050608]/95 via-[#050608]/55 to-[#050608]/95" />

        <div className="absolute inset-0 bg-linear-to-b from-[#050608] via-[#050608]/35 to-[#050608]" />

        <div className="absolute inset-0 bg-sky-950/10" />
      </div>

      {/* =====================================================
          BACKGROUND 03 — CONNECTED SYSTEM
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-245 overflow-hidden">
        <img
          src={workerbg2}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-[1.04] object-cover object-center opacity-70"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-linear-to-r from-[#050608]/90 via-[#050608]/45 to-[#050608]/90" />

        <div className="absolute inset-0 bg-linear-to-b from-[#050608] via-[#050608]/30 to-[#050608]/75" />

        <div className="absolute inset-0 bg-sky-950/10" />
      </div>

      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="BuiltV home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30 backdrop-blur-md">
            <img
              src={logo}
              alt="BuiltV"
              className="h-8 w-8 object-contain"
            />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            BuiltV
          </span>
        </Link>

        <Link
          to="/pricing"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2.5 text-sm text-slate-300 backdrop-blur-md transition hover:border-white/20 hover:bg-black/40 hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to BuiltV
        </Link>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-28 pt-10 sm:px-8 sm:pt-16 lg:px-10">
        {/* =================================================
            HERO
        ================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-sky-400/25 bg-black/30 px-4 py-2 text-xs font-medium text-sky-300 shadow-lg backdrop-blur-md">
            <Sparkles size={14} />
            BUILTV EXPERIENCE
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            See Your Business,
            <span className="text-sky-400">
              {" "}
              Powered by BuiltV.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Personalise the experience and explore
            how a connected BuiltV system could work
            for your service business.
          </p>

          <div className="mx-auto mt-7 flex w-fit flex-wrap items-center justify-center gap-2">
            {[
              "Bookings",
              "Operations",
              "Staff",
              "AI & Automation",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-slate-300 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* =================================================
            PACKAGE
        ================================================== */}

        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 shadow-2xl backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              EXPERIENCE
            </p>

            <p className="mt-1 font-medium text-white">
              {packageNames[selectedPackage]}
            </p>
          </div>

          <Link
            to="/pricing"
            className="text-sm font-medium text-sky-300 transition hover:text-sky-200"
          >
            Change package
          </Link>
        </div>

        {/* =================================================
            CONFIGURATOR
        ================================================== */}

        <div className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#080b10]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="h-px bg-linear-to-r from-transparent via-sky-400/50 to-transparent" />

          <div className="p-5 sm:p-8">
            {/* =============================================
                01 BUSINESS NAME
            ============================================== */}

            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/10 text-xs font-semibold text-sky-300">
                  01
                </span>

                <div>
                  <h2 className="font-semibold text-white">
                    Business Name
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    See your own brand inside the
                    demo.
                  </p>
                </div>
              </div>

              <div className="relative mt-5">
                <Building2
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  value={businessName}
                  onChange={(event) =>
                    setBusinessName(
                      event.target.value,
                    )
                  }
                  maxLength={50}
                  placeholder="e.g. Harrison Heating"
                  className="min-h-14 w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40 focus:bg-white/10 focus:ring-2 focus:ring-sky-400/5"
                />
              </div>
            </div>

            {/* =============================================
                02 BUSINESS TYPE
            ============================================== */}

            <div className="mt-9 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/10 text-xs font-semibold text-sky-300">
                  02
                </span>

                <div>
                  <h2 className="font-semibold text-white">
                    What type of business do you run?
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    We&apos;ll adapt the demo to your
                    industry.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {businessTypes.map((business) => {
                  const Icon = business.icon;

                  const active =
                    businessType === business.id;

                  return (
                    <button
                      key={business.id}
                      type="button"
                      onClick={() =>
                        setBusinessType(
                          business.id,
                        )
                      }
                      className={`relative flex min-h-24 flex-col items-start justify-between rounded-xl border p-4 text-left transition duration-200 ${
                        active
                          ? "border-sky-400/50 bg-sky-400/10 shadow-lg shadow-sky-950/10"
                          : "border-white/10 bg-white/5 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <Icon
                        size={19}
                        className={
                          active
                            ? "text-sky-300"
                            : "text-slate-400"
                        }
                      />

                      <span className="mt-4 text-sm font-medium text-white">
                        {business.name}
                      </span>

                      {active && (
                        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-sky-300 text-black">
                          <Check size={12} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =============================================
                VISUAL DIVIDER — OPERATIONS
            ============================================== */}

            <div className="relative my-9 overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/demo/workerbg2.png"
                alt=""
                aria-hidden="true"
                className="h-40 w-full object-cover object-center sm:h-48"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 bg-linear-to-r from-[#050608]/80 via-transparent to-[#050608]/65" />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-5 pt-16">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                      BUILTV OPERATIONS
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Your workflow. Connected.
                    </p>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* =============================================
                03 THEME
            ============================================== */}

            <div className="border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/10 bg-sky-400/10 text-xs font-semibold text-sky-300">
                  03
                </span>

                <div>
                  <h2 className="font-semibold text-white">
                    Choose a style
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Pick how your demo business
                    should feel.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {themes.map((item) => {
                  const active =
                    theme === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setTheme(item.id)
                      }
                      className={`overflow-hidden rounded-xl border text-left transition duration-200 ${
                        active
                          ? "border-sky-400/50 shadow-lg shadow-sky-950/20"
                          : "border-white/10 hover:-translate-y-0.5 hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`relative h-20 ${item.preview}`}
                      >
                        <div className="absolute left-3 right-3 top-3 h-2 rounded-full bg-black/20" />

                        <div className="absolute bottom-3 left-3 h-7 w-12 rounded-md bg-sky-400/70" />

                        <div className="absolute bottom-3 right-3 h-7 w-8 rounded-md border border-black/10 bg-black/10" />

                        {active && (
                          <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-300 text-black">
                            <Check size={12} />
                          </span>
                        )}
                      </div>

                      <div className="bg-[#0D1015] p-3">
                        <p className="text-xs font-medium text-white">
                          {item.name}
                        </p>

                        <p className="mt-1 hidden text-[10px] leading-4 text-slate-600 lg:block">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =============================================
                CONNECTED SYSTEM VISUAL
            ============================================== */}

            <div className="relative mt-9 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img
                src={workerbg3}
                alt=""
                aria-hidden="true"
                className="h-56 w-full object-cover object-center sm:h-64"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-black/45" />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/20" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="max-w-md">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={14}
                      className="text-sky-300"
                    />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                      ONE CONNECTED SYSTEM
                    </p>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                    From booking to operations and
                    AI.
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
                    Experience how BuiltV connects
                    the customer journey with the
                    systems running behind the
                    business.
                  </p>
                </div>
              </div>
            </div>

            {/* =============================================
                LAUNCH
            ============================================== */}

            <div className="mt-9 border-t border-white/10 pt-6">
              <button
                type="button"
                disabled={!canLaunch}
                onClick={handleLaunch}
                className={`group flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
                  canLaunch
                    ? "bg-white text-black shadow-xl shadow-black/20 hover:bg-sky-100"
                    : "cursor-not-allowed bg-white/10 text-slate-600"
                }`}
              >
                Launch My Demo

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>

              <p className="mt-3 text-center text-xs text-slate-600">
                Interactive demonstration. No signup
                required.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            FINAL TRUST
        ================================================== */}

        <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-center text-xs text-slate-600">
          <span className="h-1 w-1 rounded-full bg-sky-400" />
          Personalised demo environment

          <span>•</span>

          No account required

          <span>•</span>

          BuiltV
        </div>
      </section>
    </main>
  );
}

export default Demo;
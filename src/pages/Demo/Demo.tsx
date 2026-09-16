import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Sparkles,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import logo from "../../assets/logo/builtv-logo-compressed.webp";
import {
  businessTypes,
  themes,
  type BusinessType,
  type DemoTheme,
} from "./demoConfig";

type PackageType = "starter" | "pro" | "operations-ai";

const packageNames: Record<PackageType, string> = {
  starter: "Booking Starter",
  pro: "Business Pro",
  "operations-ai": "Operations + AI",
};

function Demo() {
  const [searchParams] = useSearchParams();

  const requestedPackage = searchParams.get("package");

  const selectedPackage: PackageType =
    requestedPackage === "starter" ||
    requestedPackage === "pro" ||
    requestedPackage === "operations-ai"
      ? requestedPackage
      : "starter";

  const [businessName, setBusinessName] = useState("");
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

    console.log("BuiltV Demo Config:", demoConfig);

    /*
      NEXT STEP:
      navigate("/demo/experience")
    */
  };

  return (
    <main className="relative min-h-svh overflow-hidden bg-[#050608] text-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

      {/* Top Bar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="BuiltV home"
        >
          <img
            src={logo}
            alt="BuiltV"
            className="h-9 w-9 object-contain"
          />

          <span className="text-lg font-semibold tracking-tight">
            BuiltV
          </span>
        </Link>

        <Link
          to="/pricing"
          className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to BuiltV
        </Link>
      </header>

      {/* Main */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-medium text-sky-300">
            <Sparkles size={14} />
            BUILTV EXPERIENCE
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            See Your Business,
            <span className="text-sky-400">
              {" "}
              Powered by BuiltV.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Personalise the experience and explore how a connected
            BuiltV system could work for your service business.
          </p>
        </div>

        {/* Package */}
        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-600">
              EXPERIENCE
            </p>

            <p className="mt-1 font-medium text-white">
              {packageNames[selectedPackage]}
            </p>
          </div>

          <Link
            to="/pricing"
            className="text-sm text-sky-300 transition hover:text-sky-200"
          >
            Change package
          </Link>
        </div>

        {/* Configurator */}
        <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-white/10 bg-[#0A0D12] p-5 shadow-2xl sm:p-8">
          {/* Business Name */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-xs font-semibold text-sky-300">
                01
              </span>

              <div>
                <h2 className="font-semibold text-white">
                  Business Name
                </h2>

                <p className="mt-0.5 text-xs text-slate-500">
                  See your own brand inside the demo.
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
                  setBusinessName(event.target.value)
                }
                maxLength={50}
                placeholder="e.g. Harrison Heating"
                className="min-h-14 w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/40 focus:bg-white/10"
              />
            </div>
          </div>

          {/* Business Type */}
          <div className="mt-9 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-xs font-semibold text-sky-300">
                02
              </span>

              <div>
                <h2 className="font-semibold text-white">
                  What type of business do you run?
                </h2>

                <p className="mt-0.5 text-xs text-slate-500">
                  We’ll adapt the demo to your industry.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {businessTypes.map((business) => {
                const Icon = business.icon;
                const active = businessType === business.id;

                return (
                  <button
                    key={business.id}
                    type="button"
                    onClick={() =>
                      setBusinessType(business.id)
                    }
                    className={`relative flex min-h-24 flex-col items-start justify-between rounded-xl border p-4 text-left transition ${
                      active
                        ? "border-sky-400/40 bg-sky-400/10"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
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

          {/* Theme */}
          <div className="mt-9 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-xs font-semibold text-sky-300">
                03
              </span>

              <div>
                <h2 className="font-semibold text-white">
                  Choose a style
                </h2>

                <p className="mt-0.5 text-xs text-slate-500">
                  Pick how your demo business should feel.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {themes.map((item) => {
                const active = theme === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTheme(item.id)}
                    className={`overflow-hidden rounded-xl border text-left transition ${
                      active
                        ? "border-sky-400/50"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Theme Preview */}
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

          {/* Launch */}
          <div className="mt-9 border-t border-white/10 pt-6">
            <button
              type="button"
              disabled={!canLaunch}
              onClick={handleLaunch}
              className={`group flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
                canLaunch
                  ? "bg-white text-black hover:bg-sky-100"
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
              Interactive demonstration. No signup required.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Demo;
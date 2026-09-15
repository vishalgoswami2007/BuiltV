import { useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";
import { Link } from "react-router-dom";

type CookieChoice = "accepted" | "rejected" | null;

const STORAGE_KEY = "builtv-cookie-consent";

function CookieConsent() {
    const [choice, setChoice] = useState<CookieChoice>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const savedChoice = localStorage.getItem(STORAGE_KEY);
    if (savedChoice === "accepted" || savedChoice === "rejected") {
      return savedChoice;
    }

    return null;
  });

  const [showPreferences, setShowPreferences] = useState(false);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setChoice("accepted");
    setShowPreferences(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setChoice("rejected");
    setShowPreferences(false);
  };

  if (choice !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D12]/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:flex">
              <Cookie size={19} className="text-sky-300" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-white">
                    Cookie preferences
                  </p>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                    BuiltV uses essential browser storage for website
                    preferences. Optional technologies may be used in the
                    future for analytics and improvements with appropriate
                    consent.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={rejectCookies}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white sm:hidden"
                  aria-label="Close cookie banner"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="button"
                  onClick={acceptCookies}
                  className="min-h-11 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-sky-100"
                >
                  Accept
                </button>

                <button
                  type="button"
                  onClick={rejectCookies}
                  className="min-h-11 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Reject optional
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowPreferences((current) => !current)
                  }
                  className="flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:text-white"
                >
                  <Settings2 size={16} />
                  Preferences
                </button>

                <Link
                  to="/cookies"
                  className="text-center text-sm text-sky-300 transition hover:text-sky-200 sm:ml-auto"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          {showPreferences && (
            <div className="mt-5 border-t border-white/10 pt-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Essential
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Required for basic website functionality and saved
                        preferences.
                      </p>
                    </div>

                    <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                      Always on
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Optional analytics
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Reserved for analytics tools if they are added later.
                      </p>
                    </div>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                      Optional
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
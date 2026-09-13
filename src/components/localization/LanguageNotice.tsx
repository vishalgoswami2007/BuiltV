import { useEffect, useState } from "react";

import { Languages, X } from "lucide-react";

import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    label: "English",
  },
  {
    code: "de",
    label: "Deutsch",
  },
  {
    code: "nl",
    label: "Nederlands",
  },
  {
    code: "fr",
    label: "Français",
  },
  {
    code: "es",
    label: "Español",
  },
];

function LanguageNotice() {
  const { i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("builtv-language-notice-dismissed");

    if (!dismissed) {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 1200);

      return () => window.clearTimeout(timer);
    }
  }, []);

  const dismissNotice = () => {
    localStorage.setItem("builtv-language-notice-dismissed", "true");

    setIsVisible(false);
  };

  const handleLanguageChange = async (languageCode: string) => {
    await i18n.changeLanguage(languageCode);

    localStorage.setItem("builtv-language", languageCode);

    localStorage.setItem("builtv-language-notice-dismissed", "true");

    setShowLanguages(false);

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:bottom-6 sm:px-6">
      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#080A0E]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Languages size={18} className="text-sky-300" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold text-white sm:text-lg">
              Prefer another language?
            </h2>

            <p className="mt-1.5 text-sm leading-6 text-slate-400">
              BuiltV is available in multiple languages. You can switch anytime
              using the language selector in the navigation.
            </p>
          </div>

          <button
            type="button"
            onClick={dismissNotice}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white"
            aria-label="Close language notice"
          >
            <X size={17} />
          </button>
        </div>

        {showLanguages && (
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 sm:grid-cols-5">
            {languages.map((language) => {
              const isActive = i18n.language.startsWith(language.code);

              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => handleLanguageChange(language.code)}
                  className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "border-sky-400/30 bg-sky-400/10 text-sky-300"
                      : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {language.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setShowLanguages((current) => !current)}
            className="min-h-11 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Choose language
          </button>

          <button
            type="button"
            onClick={() => handleLanguageChange("en")}
            className="min-h-11 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-sky-100"
          >
            Continue in English
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageNotice;
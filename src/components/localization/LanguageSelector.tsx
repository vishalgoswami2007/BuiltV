import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    short: "EN",
    label: "English",
  },
  {
    code: "de",
    short: "DE",
    label: "Deutsch",
  },
  {
    code: "nl",
    short: "NL",
    label: "Nederlands",
  },
  {
    code: "fr",
    short: "FR",
    label: "Français",
  },
  {
    code: "es",
    short: "ES",
    label: "Español",
  },
];

type LanguageSelectorProps = {
  mobile?: boolean;
  onLanguageChange?: () => void;
};

function LanguageSelector({
  mobile = false,
  onLanguageChange,
}: LanguageSelectorProps) {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((language) =>
      i18n.language.toLowerCase().startsWith(language.code),
    ) ?? languages[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLanguageChange = async (languageCode: string) => {
    localStorage.setItem("builtv-language", languageCode);

    await i18n.changeLanguage(languageCode);

    setIsOpen(false);

    onLanguageChange?.();
  };

  return (
    <div
      ref={containerRef}
      className={mobile ? "relative w-full" : "relative"}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Change language"
        className={`flex min-h-11 items-center gap-2 rounded-xl border border-white/10 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white ${
          mobile
            ? "w-full justify-between px-4 py-3"
            : "px-3 py-2"
        }`}
      >
        <span className="flex items-center gap-2">
          <Globe2 size={16} />

          <span>
            {mobile ? currentLanguage.label : currentLanguage.short}
          </span>
        </span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Select language"
          className={`absolute overflow-hidden rounded-xl border border-white/10 bg-[#0A0D12] p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl ${
            mobile
              ? "bottom-full left-0 right-0 mb-2"
              : "right-0 top-full mt-2 w-48"
          }`}
        >
          {languages.map((language) => {
            const isActive = currentLanguage.code === language.code;

            return (
              <button
                key={language.code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  void handleLanguageChange(language.code);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-7 text-xs font-semibold text-slate-500">
                    {language.short}
                  </span>

                  <span>{language.label}</span>
                </span>

                {isActive && (
                  <Check size={15} className="text-sky-300" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
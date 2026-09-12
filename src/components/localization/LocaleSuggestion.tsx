import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const supportedLanguages = ["en", "de", "nl", "fr", "es"];

function LocaleSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("builtv-language");

    const language =
      savedLanguage && supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : "en";

    if (i18n.language !== language) {
      void i18n.changeLanguage(language);
    }

    document.documentElement.lang = language;
  }, [i18n]);

  return null;
}

export default LocaleSync;
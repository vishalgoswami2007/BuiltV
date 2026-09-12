import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const supportedLanguages = ["en", "de", "nl", "fr", "es"];

function LocaleSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("builtv-language");

    const selectedLanguage =
      savedLanguage && supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : "en";

    if (i18n.language !== selectedLanguage) {
      void i18n.changeLanguage(selectedLanguage);
    }

    document.documentElement.setAttribute("lang", selectedLanguage);
  }, [i18n]);

  return null;
}

export default LocaleSync;
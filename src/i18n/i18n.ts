import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("builtv-language");

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {},
    },

    de: {
      translation: {},
    },

    nl: {
      translation: {},
    },

    fr: {
      translation: {},
    },

    es: {
      translation: {},
    },
  },

  lng: savedLanguage || "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("builtv-language");

const resources = {
  en: {
    translation: {
      nav: {
        services: "Services",
        work: "Work",
        solutions: "Solutions",
        pricing: "Pricing",
        about: "About",
        insights: "Insights",
        contact: "Contact",
        startProject: "Start a Project",
      },
    },
  },

  de: {
    translation: {
      nav: {
        services: "Leistungen",
        work: "Projekte",
        solutions: "Lösungen",
        pricing: "Preise",
        about: "Über uns",
        insights: "Einblicke",
        contact: "Kontakt",
        startProject: "Projekt starten",
      },
    },
  },

  nl: {
    translation: {
      nav: {
        services: "Diensten",
        work: "Projecten",
        solutions: "Oplossingen",
        pricing: "Prijzen",
        about: "Over ons",
        insights: "Inzichten",
        contact: "Contact",
        startProject: "Start een project",
      },
    },
  },

  fr: {
    translation: {
      nav: {
        services: "Services",
        work: "Projets",
        solutions: "Solutions",
        pricing: "Tarifs",
        about: "À propos",
        insights: "Perspectives",
        contact: "Contact",
        startProject: "Démarrer un projet",
      },
    },
  },

  es: {
    translation: {
      nav: {
        services: "Servicios",
        work: "Proyectos",
        solutions: "Soluciones",
        pricing: "Precios",
        about: "Nosotros",
        insights: "Ideas",
        contact: "Contacto",
        startProject: "Iniciar un proyecto",
      },
    },
  },
};

void i18n.use(initReactI18next).init({
  resources,

  lng:
    savedLanguage &&
    ["en", "de", "nl", "fr", "es"].includes(savedLanguage)
      ? savedLanguage
      : "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
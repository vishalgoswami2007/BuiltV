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

      hero: {
        eyebrow: "Digital systems for a global tomorrow",
        titleStart: "We build digital systems that businesses",
        titleHighlight: "run on.",
        description:
          "Websites, software, AI and automation engineered for ambitious businesses worldwide.",
        startProject: "Start a Project",
        exploreWork: "Explore Our Work",
        web: "Web",
        software: "Software",
        ai: "AI",
        automation: "Automation",
      },

      whatWeDo: {
        eyebrow: "What we build",
        titleStart: "Digital products built around",
        titleHighlight: "real business needs.",
        description:
          "BuiltV combines design, software and automation to turn business problems into systems that are easier to run and easier to scale.",
        exploreServices: "Explore all services",

        capabilities: {
          web: {
            title: "Web Experiences",
            description:
              "High-performance websites and digital experiences built to convert, communicate and grow.",
          },
          software: {
            title: "Software & SaaS",
            description:
              "Custom platforms, dashboards, portals and SaaS products designed around real business workflows.",
          },
          systems: {
            title: "Business Systems",
            description:
              "Booking, quoting, scheduling and operational systems that reduce repetitive work.",
          },
          ai: {
            title: "AI & Automation",
            description:
              "AI-powered workflows and automation that help businesses move faster with less manual effort.",
          },
          engineering: {
            title: "Product Engineering",
            description:
              "Modern frontend, backend, APIs and integrations engineered for reliable digital products.",
          },
        },

        differentEyebrow: "Need something different?",
        differentTitle: "Have a problem that doesn't fit in a box?",
        differentDescription:
          "Tell us what your business needs. We'll help turn the problem into the right digital system.",
      },

      footer: {
        taglineStart: "Digital systems built for",
        taglineHighlight: "what's next.",
        description:
          "We design and engineer websites, software, AI systems and automation for ambitious businesses around the world.",

        follow: "Follow BuiltV",

        servicesTitle: "Services",
        companyTitle: "Company",
        legalTitle: "Legal",

        services: {
          web: "Web Experiences",
          software: "Software & SaaS",
          systems: "Business Systems",
          ai: "AI & Automation",
          engineering: "Product Engineering",
        },

        company: {
          work: "Work",
          solutions: "Solutions",
          pricing: "Pricing",
          about: "About",
          insights: "Insights",
          contact: "Contact",
        },

        legal: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          cookies: "Cookie Policy",
          accessibility: "Accessibility",
          security: "Security",
        },

        globalTitle: "Built globally",
        globalDescription:
          "Digital products and systems designed for businesses operating across modern global markets.",
        startProject: "Start a project",

        projectQuestion: "Have a project in mind?",

        socialComingSoon: "{{name}} profile coming soon",
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

      hero: {
        eyebrow: "Digitale Systeme für die globale Zukunft",
        titleStart: "Wir entwickeln digitale Systeme, auf denen Unternehmen",
        titleHighlight: "aufbauen.",
        description:
          "Websites, Software, KI und Automatisierung für ambitionierte Unternehmen weltweit.",
        startProject: "Projekt starten",
        exploreWork: "Unsere Projekte ansehen",
        web: "Web",
        software: "Software",
        ai: "KI",
        automation: "Automatisierung",
      },

      whatWeDo: {
        eyebrow: "Was wir entwickeln",
        titleStart: "Digitale Produkte für",
        titleHighlight: "echte Geschäftsanforderungen.",
        description:
          "BuiltV verbindet Design, Software und Automatisierung, um Geschäftsprobleme in Systeme zu verwandeln, die einfacher zu betreiben und zu skalieren sind.",
        exploreServices: "Alle Leistungen ansehen",

        capabilities: {
          web: {
            title: "Web-Erlebnisse",
            description:
              "Leistungsstarke Websites und digitale Erlebnisse für bessere Kommunikation, Conversion und Wachstum.",
          },
          software: {
            title: "Software & SaaS",
            description:
              "Individuelle Plattformen, Dashboards, Portale und SaaS-Produkte für reale Geschäftsabläufe.",
          },
          systems: {
            title: "Geschäftssysteme",
            description:
              "Buchungs-, Angebots-, Planungs- und Betriebssysteme, die repetitive Arbeit reduzieren.",
          },
          ai: {
            title: "KI & Automatisierung",
            description:
              "KI-gestützte Workflows und Automatisierung für schnellere Prozesse mit weniger manueller Arbeit.",
          },
          engineering: {
            title: "Produktentwicklung",
            description:
              "Moderne Frontends, Backends, APIs und Integrationen für zuverlässige digitale Produkte.",
          },
        },

        differentEyebrow: "Etwas anderes benötigt?",
        differentTitle: "Haben Sie ein Problem, das in keine Schublade passt?",
        differentDescription:
          "Sagen Sie uns, was Ihr Unternehmen benötigt. Wir helfen dabei, daraus das richtige digitale System zu entwickeln.",
      },

      footer: {
        taglineStart: "Digitale Systeme für",
        taglineHighlight: "die Zukunft.",
        description:
          "Wir entwickeln Websites, Software, KI-Systeme und Automatisierungen für ambitionierte Unternehmen weltweit.",

        follow: "BuiltV folgen",

        servicesTitle: "Leistungen",
        companyTitle: "Unternehmen",
        legalTitle: "Rechtliches",

        services: {
          web: "Web-Erlebnisse",
          software: "Software & SaaS",
          systems: "Geschäftssysteme",
          ai: "KI & Automatisierung",
          engineering: "Produktentwicklung",
        },

        company: {
          work: "Projekte",
          solutions: "Lösungen",
          pricing: "Preise",
          about: "Über uns",
          insights: "Einblicke",
          contact: "Kontakt",
        },

        legal: {
          privacy: "Datenschutz",
          terms: "Nutzungsbedingungen",
          cookies: "Cookie-Richtlinie",
          accessibility: "Barrierefreiheit",
          security: "Sicherheit",
        },

        globalTitle: "Global entwickelt",
        globalDescription:
          "Digitale Produkte und Systeme für Unternehmen in modernen globalen Märkten.",
        startProject: "Projekt starten",

        projectQuestion: "Haben Sie ein Projekt im Sinn?",

        socialComingSoon: "{{name}}-Profil folgt bald",
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

      hero: {
        eyebrow: "Digitale systemen voor een wereldwijde toekomst",
        titleStart: "Wij bouwen digitale systemen waarop bedrijven",
        titleHighlight: "draaien.",
        description:
          "Websites, software, AI en automatisering voor ambitieuze bedrijven wereldwijd.",
        startProject: "Start een project",
        exploreWork: "Bekijk ons werk",
        web: "Web",
        software: "Software",
        ai: "AI",
        automation: "Automatisering",
      },

      whatWeDo: {
        eyebrow: "Wat we bouwen",
        titleStart: "Digitale producten gebouwd rond",
        titleHighlight: "echte bedrijfsbehoeften.",
        description:
          "BuiltV combineert design, software en automatisering om bedrijfsproblemen om te zetten in systemen die eenvoudiger te beheren en op te schalen zijn.",
        exploreServices: "Bekijk alle diensten",

        capabilities: {
          web: {
            title: "Web Experiences",
            description:
              "Snelle websites en digitale ervaringen ontworpen om te converteren, communiceren en groeien.",
          },
          software: {
            title: "Software & SaaS",
            description:
              "Maatwerkplatforms, dashboards, portals en SaaS-producten voor echte bedrijfsprocessen.",
          },
          systems: {
            title: "Bedrijfssystemen",
            description:
              "Boekings-, offerte-, planning- en operationele systemen die repetitief werk verminderen.",
          },
          ai: {
            title: "AI & Automatisering",
            description:
              "AI-gestuurde workflows en automatisering waarmee bedrijven sneller werken met minder handmatig werk.",
          },
          engineering: {
            title: "Product Engineering",
            description:
              "Moderne frontends, backends, API's en integraties voor betrouwbare digitale producten.",
          },
        },

        differentEyebrow: "Iets anders nodig?",
        differentTitle: "Heb je een probleem dat niet in een standaardvak past?",
        differentDescription:
          "Vertel ons wat je bedrijf nodig heeft. Wij helpen het probleem om te zetten in het juiste digitale systeem.",
      },

      footer: {
        taglineStart: "Digitale systemen gebouwd voor",
        taglineHighlight: "wat hierna komt.",
        description:
          "Wij ontwerpen en bouwen websites, software, AI-systemen en automatisering voor ambitieuze bedrijven wereldwijd.",

        follow: "Volg BuiltV",

        servicesTitle: "Diensten",
        companyTitle: "Bedrijf",
        legalTitle: "Juridisch",

        services: {
          web: "Web Experiences",
          software: "Software & SaaS",
          systems: "Bedrijfssystemen",
          ai: "AI & Automatisering",
          engineering: "Product Engineering",
        },

        company: {
          work: "Projecten",
          solutions: "Oplossingen",
          pricing: "Prijzen",
          about: "Over ons",
          insights: "Inzichten",
          contact: "Contact",
        },

        legal: {
          privacy: "Privacybeleid",
          terms: "Servicevoorwaarden",
          cookies: "Cookiebeleid",
          accessibility: "Toegankelijkheid",
          security: "Beveiliging",
        },

        globalTitle: "Wereldwijd gebouwd",
        globalDescription:
          "Digitale producten en systemen ontworpen voor bedrijven die actief zijn op moderne wereldmarkten.",
        startProject: "Start een project",

        projectQuestion: "Heb je een project in gedachten?",

        socialComingSoon: "{{name}}-profiel binnenkort beschikbaar",
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

      hero: {
        eyebrow: "Des systèmes numériques pour un avenir mondial",
        titleStart:
          "Nous créons les systèmes numériques sur lesquels les entreprises",
        titleHighlight: "fonctionnent.",
        description:
          "Sites web, logiciels, IA et automatisation conçus pour des entreprises ambitieuses dans le monde entier.",
        startProject: "Démarrer un projet",
        exploreWork: "Découvrir nos projets",
        web: "Web",
        software: "Logiciels",
        ai: "IA",
        automation: "Automatisation",
      },

      whatWeDo: {
        eyebrow: "Ce que nous créons",
        titleStart: "Des produits numériques conçus autour de",
        titleHighlight: "besoins réels des entreprises.",
        description:
          "BuiltV combine design, logiciel et automatisation pour transformer les problèmes d'entreprise en systèmes plus simples à gérer et à faire évoluer.",
        exploreServices: "Découvrir tous les services",

        capabilities: {
          web: {
            title: "Expériences Web",
            description:
              "Des sites web performants et des expériences numériques conçus pour convertir, communiquer et grandir.",
          },
          software: {
            title: "Logiciels & SaaS",
            description:
              "Plateformes, tableaux de bord, portails et produits SaaS personnalisés autour de véritables processus métier.",
          },
          systems: {
            title: "Systèmes d'entreprise",
            description:
              "Systèmes de réservation, devis, planification et opérations réduisant les tâches répétitives.",
          },
          ai: {
            title: "IA & Automatisation",
            description:
              "Des workflows alimentés par l'IA et des automatisations permettant aux entreprises d'avancer plus vite.",
          },
          engineering: {
            title: "Ingénierie produit",
            description:
              "Frontends, backends, API et intégrations modernes pour des produits numériques fiables.",
          },
        },

        differentEyebrow: "Besoin d'autre chose ?",
        differentTitle: "Un problème qui ne rentre dans aucune catégorie ?",
        differentDescription:
          "Expliquez-nous ce dont votre entreprise a besoin. Nous vous aiderons à transformer le problème en système numérique adapté.",
      },

      footer: {
        taglineStart: "Des systèmes numériques conçus pour",
        taglineHighlight: "la suite.",
        description:
          "Nous concevons des sites web, logiciels, systèmes d'IA et automatisations pour des entreprises ambitieuses dans le monde entier.",

        follow: "Suivre BuiltV",

        servicesTitle: "Services",
        companyTitle: "Entreprise",
        legalTitle: "Mentions légales",

        services: {
          web: "Expériences Web",
          software: "Logiciels & SaaS",
          systems: "Systèmes d'entreprise",
          ai: "IA & Automatisation",
          engineering: "Ingénierie produit",
        },

        company: {
          work: "Projets",
          solutions: "Solutions",
          pricing: "Tarifs",
          about: "À propos",
          insights: "Perspectives",
          contact: "Contact",
        },

        legal: {
          privacy: "Politique de confidentialité",
          terms: "Conditions d'utilisation",
          cookies: "Politique relative aux cookies",
          accessibility: "Accessibilité",
          security: "Sécurité",
        },

        globalTitle: "Conçu pour le monde entier",
        globalDescription:
          "Des produits et systèmes numériques conçus pour les entreprises actives sur les marchés mondiaux modernes.",
        startProject: "Démarrer un projet",

        projectQuestion: "Vous avez un projet en tête ?",

        socialComingSoon: "Profil {{name}} bientôt disponible",
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

      hero: {
        eyebrow: "Sistemas digitales para un futuro global",
        titleStart:
          "Creamos los sistemas digitales sobre los que las empresas",
        titleHighlight: "funcionan.",
        description:
          "Sitios web, software, IA y automatización diseñados para empresas ambiciosas de todo el mundo.",
        startProject: "Iniciar un proyecto",
        exploreWork: "Explorar nuestro trabajo",
        web: "Web",
        software: "Software",
        ai: "IA",
        automation: "Automatización",
      },

      whatWeDo: {
        eyebrow: "Lo que construimos",
        titleStart: "Productos digitales creados alrededor de",
        titleHighlight: "necesidades reales del negocio.",
        description:
          "BuiltV combina diseño, software y automatización para convertir problemas empresariales en sistemas más fáciles de gestionar y escalar.",
        exploreServices: "Explorar todos los servicios",

        capabilities: {
          web: {
            title: "Experiencias Web",
            description:
              "Sitios web de alto rendimiento y experiencias digitales creadas para convertir, comunicar y crecer.",
          },
          software: {
            title: "Software & SaaS",
            description:
              "Plataformas, paneles, portales y productos SaaS personalizados para flujos de trabajo reales.",
          },
          systems: {
            title: "Sistemas Empresariales",
            description:
              "Sistemas de reservas, presupuestos, planificación y operaciones que reducen tareas repetitivas.",
          },
          ai: {
            title: "IA & Automatización",
            description:
              "Flujos de trabajo impulsados por IA y automatización para avanzar más rápido con menos trabajo manual.",
          },
          engineering: {
            title: "Ingeniería de Producto",
            description:
              "Frontends, backends, APIs e integraciones modernas para productos digitales fiables.",
          },
        },

        differentEyebrow: "¿Necesitas algo diferente?",
        differentTitle: "¿Tienes un problema que no encaja en una categoría?",
        differentDescription:
          "Cuéntanos qué necesita tu empresa. Te ayudaremos a convertir el problema en el sistema digital adecuado.",
      },

      footer: {
        taglineStart: "Sistemas digitales creados para",
        taglineHighlight: "lo que viene.",
        description:
          "Diseñamos y desarrollamos sitios web, software, sistemas de IA y automatización para empresas ambiciosas de todo el mundo.",

        follow: "Seguir a BuiltV",

        servicesTitle: "Servicios",
        companyTitle: "Empresa",
        legalTitle: "Legal",

        services: {
          web: "Experiencias Web",
          software: "Software & SaaS",
          systems: "Sistemas Empresariales",
          ai: "IA & Automatización",
          engineering: "Ingeniería de Producto",
        },

        company: {
          work: "Proyectos",
          solutions: "Soluciones",
          pricing: "Precios",
          about: "Nosotros",
          insights: "Ideas",
          contact: "Contacto",
        },

        legal: {
          privacy: "Política de Privacidad",
          terms: "Términos del Servicio",
          cookies: "Política de Cookies",
          accessibility: "Accesibilidad",
          security: "Seguridad",
        },

        globalTitle: "Construido para el mundo",
        globalDescription:
          "Productos y sistemas digitales diseñados para empresas que operan en mercados globales modernos.",
        startProject: "Iniciar un proyecto",

        projectQuestion: "¿Tienes un proyecto en mente?",

        socialComingSoon: "Perfil de {{name}} próximamente",
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
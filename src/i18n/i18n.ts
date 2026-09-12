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

      workflow: {
        eyebrow: "Connected business systems",
        title: "Your business doesn't need more disconnected tools.",
        description:
          "BuiltV connects the steps between a new enquiry and a completed job into one smoother workflow.",
        explore: "Explore business solutions",
        steps: {
          enquiry: "Enquiry",
          quote: "Quote",
          booking: "Booking",
          job: "Job",
          payment: "Payment",
          followUp: "Follow-up",
        },
      },

      markets: {
        title: "Markets we build for",
        countries: {
          ireland: "Ireland",
          unitedKingdom: "United Kingdom",
          germany: "Germany",
          netherlands: "Netherlands",
          austria: "Austria",
          belgium: "Belgium",
          france: "France",
          spain: "Spain",
          portugal: "Portugal",
          italy: "Italy",
          denmark: "Denmark",
          norway: "Norway",
          sweden: "Sweden",
          finland: "Finland",
          switzerland: "Switzerland",
          poland: "Poland",
          czechia: "Czechia",
          estonia: "Estonia",
          lithuania: "Lithuania",
          latvia: "Latvia",
          greece: "Greece",
          croatia: "Croatia",
          romania: "Romania",
        },
      },

      industries: {
        eyebrow: "Who we build for",
        titleStart: "Different businesses.",
        titleHighlight: "Similar operational problems.",
        description:
          "We design systems around how a business actually works — from the first customer enquiry to the work happening behind the scenes.",
        explore: "Explore all solutions",
        homeServices: {
          title: "Home Services",
          description:
            "Digital systems for plumbing, HVAC, electrical and other service businesses.",
          system: "Lead → Quote → Booking → Job → Payment",
        },
        fieldServices: {
          title: "Field Services",
          description:
            "Operational tools for cleaning, maintenance and mobile service teams.",
          system: "Job → Worker → Proof → Client → Invoice",
        },
        construction: {
          title: "Construction",
          description:
            "Connected workflows for projects, teams, reporting and client communication.",
          system: "Project → Team → Site → Report → Client",
        },
        professionalServices: {
          title: "Professional Services",
          description:
            "Better systems for leads, proposals, clients, billing and recurring work.",
          system: "Lead → Proposal → Client → Delivery → Billing",
        },
        startups: {
          title: "Startups",
          description:
            "From early product ideas to working MVPs and scalable digital platforms.",
          system: "Idea → MVP → Launch → Learn → Scale",
        },
      },

      selectedWork: {
        eyebrow: "Selected work",
        titleStart: "Products designed to solve",
        titleHighlight: "real problems.",
        viewAll: "View all work",
        viewProject: "View project",
        mineQueue: {
          category: "Healthcare Software",
          description:
            "A real-time doctor appointment platform designed around booking reliability, scheduling and smoother patient workflows.",
          panelLabel: "Doctor appointment system",
        },
        triage: {
          category: "AI Developer Platform",
          description:
            "An AI-powered debugging platform built to help developers understand errors, inspect context and move from issue to solution faster.",
          panelLabel: "AI debugging workspace",
        },
      },

      process: {
        eyebrow: "How we work",
        titleStart: "From problem to",
        titleHighlight: "working product.",
        description:
          "A focused process designed to move from an idea to a reliable digital system without unnecessary complexity.",
        startProject: "Start your project",
        steps: {
          discover: {
            title: "Discover",
            text: "We understand the business, users, workflow and the problem worth solving.",
          },
          design: {
            title: "Design",
            text: "We shape the experience, system architecture and product direction.",
          },
          build: {
            title: "Build",
            text: "We engineer the product with modern, reliable and scalable technology.",
          },
          launch: {
            title: "Launch",
            text: "We test, refine and move the system into the real world.",
          },
          improve: {
            title: "Improve",
            text: "We learn from real usage and continue improving what matters.",
          },
        },
      },

      finalCTA: {
        eyebrow: "Let's build something useful",
        titleStart: "The next system your business runs on",
        titleHighlight: "starts here.",
        description:
          "Whether you're replacing manual work, launching a product or building a better customer experience, BuiltV can help turn it into a working digital system.",
        startProject: "Start a project",
        exploreWork: "Explore our work",
        web: "Web",
        software: "Software",
        systems: "Systems",
        ai: "AI",
        automation: "Automation",
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

      workflow: {
        eyebrow: "Vernetzte Geschäftssysteme",
        title: "Ihr Unternehmen braucht nicht noch mehr getrennte Tools.",
        description:
          "BuiltV verbindet die Schritte von einer neuen Anfrage bis zum abgeschlossenen Auftrag in einem reibungsloseren Workflow.",
        explore: "Geschäftslösungen entdecken",
        steps: {
          enquiry: "Anfrage",
          quote: "Angebot",
          booking: "Buchung",
          job: "Auftrag",
          payment: "Zahlung",
          followUp: "Nachverfolgung",
        },
      },

      markets: {
        title: "Märkte, für die wir entwickeln",
        countries: {
          ireland: "Irland",
          unitedKingdom: "Vereinigtes Königreich",
          germany: "Deutschland",
          netherlands: "Niederlande",
          austria: "Österreich",
          belgium: "Belgien",
          france: "Frankreich",
          spain: "Spanien",
          portugal: "Portugal",
          italy: "Italien",
          denmark: "Dänemark",
          norway: "Norwegen",
          sweden: "Schweden",
          finland: "Finnland",
          switzerland: "Schweiz",
          poland: "Polen",
          czechia: "Tschechien",
          estonia: "Estland",
          lithuania: "Litauen",
          latvia: "Lettland",
          greece: "Griechenland",
          croatia: "Kroatien",
          romania: "Rumänien",
        },
      },

      industries: {
        eyebrow: "Für wen wir entwickeln",
        titleStart: "Unterschiedliche Unternehmen.",
        titleHighlight: "Ähnliche operative Probleme.",
        description:
          "Wir entwickeln Systeme rund um die tatsächlichen Abläufe eines Unternehmens — von der ersten Kundenanfrage bis zur Arbeit im Hintergrund.",
        explore: "Alle Lösungen entdecken",
        homeServices: {
          title: "Haushaltsnahe Dienstleistungen",
          description:
            "Digitale Systeme für Sanitär-, Heizungs-, Elektro- und andere Serviceunternehmen.",
          system: "Lead → Angebot → Buchung → Auftrag → Zahlung",
        },
        fieldServices: {
          title: "Außendienst",
          description:
            "Operative Tools für Reinigung, Wartung und mobile Serviceteams.",
          system: "Auftrag → Mitarbeiter → Nachweis → Kunde → Rechnung",
        },
        construction: {
          title: "Bau",
          description:
            "Vernetzte Workflows für Projekte, Teams, Berichte und Kundenkommunikation.",
          system: "Projekt → Team → Baustelle → Bericht → Kunde",
        },
        professionalServices: {
          title: "Professionelle Dienstleistungen",
          description:
            "Bessere Systeme für Leads, Angebote, Kunden, Abrechnung und wiederkehrende Arbeit.",
          system: "Lead → Angebot → Kunde → Lieferung → Abrechnung",
        },
        startups: {
          title: "Startups",
          description:
            "Von frühen Produktideen bis zu funktionierenden MVPs und skalierbaren digitalen Plattformen.",
          system: "Idee → MVP → Start → Lernen → Skalieren",
        },
      },

      selectedWork: {
        eyebrow: "Ausgewählte Projekte",
        titleStart: "Produkte entwickelt für",
        titleHighlight: "echte Probleme.",
        viewAll: "Alle Projekte ansehen",
        viewProject: "Projekt ansehen",
        mineQueue: {
          category: "Gesundheitssoftware",
          description:
            "Eine Echtzeit-Plattform für Arzttermine, entwickelt für zuverlässige Buchungen, Planung und reibungslosere Abläufe für Patienten.",
          panelLabel: "Arztterminsystem",
        },
        triage: {
          category: "KI-Entwicklerplattform",
          description:
            "Eine KI-gestützte Debugging-Plattform, die Entwicklern hilft, Fehler zu verstehen, Kontext zu prüfen und schneller von einem Problem zur Lösung zu gelangen.",
          panelLabel: "KI-Debugging-Arbeitsbereich",
        },
      },

      process: {
        eyebrow: "So arbeiten wir",
        titleStart: "Vom Problem zum",
        titleHighlight: "funktionierenden Produkt.",
        description:
          "Ein fokussierter Prozess, der eine Idee ohne unnötige Komplexität in ein zuverlässiges digitales System überführt.",
        startProject: "Projekt starten",
        steps: {
          discover: {
            title: "Verstehen",
            text: "Wir verstehen das Unternehmen, die Nutzer, den Workflow und das Problem, das gelöst werden soll.",
          },
          design: {
            title: "Entwerfen",
            text: "Wir gestalten Nutzererlebnis, Systemarchitektur und Produktrichtung.",
          },
          build: {
            title: "Entwickeln",
            text: "Wir entwickeln das Produkt mit moderner, zuverlässiger und skalierbarer Technologie.",
          },
          launch: {
            title: "Starten",
            text: "Wir testen, optimieren und bringen das System in die reale Nutzung.",
          },
          improve: {
            title: "Verbessern",
            text: "Wir lernen aus der realen Nutzung und verbessern kontinuierlich, was wichtig ist.",
          },
        },
      },

      finalCTA: {
        eyebrow: "Lassen Sie uns etwas Nützliches bauen",
        titleStart: "Das nächste System, auf dem Ihr Unternehmen läuft,",
        titleHighlight: "beginnt hier.",
        description:
          "Ob Sie manuelle Arbeit ersetzen, ein Produkt starten oder ein besseres Kundenerlebnis schaffen möchten — BuiltV hilft, daraus ein funktionierendes digitales System zu machen.",
        startProject: "Projekt starten",
        exploreWork: "Unsere Projekte ansehen",
        web: "Web",
        software: "Software",
        systems: "Systeme",
        ai: "KI",
        automation: "Automatisierung",
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

      workflow: {
        eyebrow: "Verbonden bedrijfssystemen",
        title: "Je bedrijf heeft niet nog meer losse tools nodig.",
        description:
          "BuiltV verbindt de stappen tussen een nieuwe aanvraag en een afgeronde opdracht in één soepelere workflow.",
        explore: "Bekijk bedrijfsoplossingen",
        steps: {
          enquiry: "Aanvraag",
          quote: "Offerte",
          booking: "Boeking",
          job: "Opdracht",
          payment: "Betaling",
          followUp: "Opvolging",
        },
      },

      markets: {
        title: "Markten waarvoor we bouwen",
        countries: {
          ireland: "Ierland",
          unitedKingdom: "Verenigd Koninkrijk",
          germany: "Duitsland",
          netherlands: "Nederland",
          austria: "Oostenrijk",
          belgium: "België",
          france: "Frankrijk",
          spain: "Spanje",
          portugal: "Portugal",
          italy: "Italië",
          denmark: "Denemarken",
          norway: "Noorwegen",
          sweden: "Zweden",
          finland: "Finland",
          switzerland: "Zwitserland",
          poland: "Polen",
          czechia: "Tsjechië",
          estonia: "Estland",
          lithuania: "Litouwen",
          latvia: "Letland",
          greece: "Griekenland",
          croatia: "Kroatië",
          romania: "Roemenië",
        },
      },

      industries: {
        eyebrow: "Voor wie we bouwen",
        titleStart: "Verschillende bedrijven.",
        titleHighlight: "Vergelijkbare operationele problemen.",
        description:
          "We ontwerpen systemen rond hoe een bedrijf echt werkt — van de eerste klantaanvraag tot het werk achter de schermen.",
        explore: "Bekijk alle oplossingen",
        homeServices: {
          title: "Thuisdiensten",
          description:
            "Digitale systemen voor loodgieters, HVAC, elektriciens en andere servicebedrijven.",
          system: "Lead → Offerte → Boeking → Opdracht → Betaling",
        },
        fieldServices: {
          title: "Buitendienst",
          description:
            "Operationele tools voor schoonmaak, onderhoud en mobiele serviceteams.",
          system: "Opdracht → Medewerker → Bewijs → Klant → Factuur",
        },
        construction: {
          title: "Bouw",
          description:
            "Verbonden workflows voor projecten, teams, rapportage en klantcommunicatie.",
          system: "Project → Team → Locatie → Rapport → Klant",
        },
        professionalServices: {
          title: "Professionele diensten",
          description:
            "Betere systemen voor leads, voorstellen, klanten, facturering en terugkerend werk.",
          system: "Lead → Voorstel → Klant → Levering → Facturering",
        },
        startups: {
          title: "Startups",
          description:
            "Van vroege productideeën tot werkende MVP's en schaalbare digitale platforms.",
          system: "Idee → MVP → Lancering → Leren → Schalen",
        },
      },

      selectedWork: {
        eyebrow: "Geselecteerd werk",
        titleStart: "Producten ontworpen om",
        titleHighlight: "echte problemen op te lossen.",
        viewAll: "Bekijk al ons werk",
        viewProject: "Bekijk project",
        mineQueue: {
          category: "Zorgsoftware",
          description:
            "Een realtime platform voor doktersafspraken, ontworpen rond betrouwbare boekingen, planning en soepelere patiëntprocessen.",
          panelLabel: "Doktersafsprakensysteem",
        },
        triage: {
          category: "AI-ontwikkelaarsplatform",
          description:
            "Een AI-gestuurd debuggingplatform dat ontwikkelaars helpt fouten te begrijpen, context te onderzoeken en sneller van probleem naar oplossing te gaan.",
          panelLabel: "AI-debuggingworkspace",
        },
      },

      process: {
        eyebrow: "Hoe we werken",
        titleStart: "Van probleem naar",
        titleHighlight: "werkend product.",
        description:
          "Een gericht proces dat een idee zonder onnodige complexiteit omzet in een betrouwbaar digitaal systeem.",
        startProject: "Start je project",
        steps: {
          discover: {
            title: "Ontdekken",
            text: "We begrijpen het bedrijf, de gebruikers, de workflow en het probleem dat het waard is om op te lossen.",
          },
          design: {
            title: "Ontwerpen",
            text: "We bepalen de ervaring, systeemarchitectuur en productrichting.",
          },
          build: {
            title: "Bouwen",
            text: "We ontwikkelen het product met moderne, betrouwbare en schaalbare technologie.",
          },
          launch: {
            title: "Lanceren",
            text: "We testen, verfijnen en brengen het systeem naar de echte wereld.",
          },
          improve: {
            title: "Verbeteren",
            text: "We leren van echt gebruik en blijven verbeteren wat belangrijk is.",
          },
        },
      },

      finalCTA: {
        eyebrow: "Laten we iets nuttigs bouwen",
        titleStart: "Het volgende systeem waarop je bedrijf draait",
        titleHighlight: "begint hier.",
        description:
          "Of je nu handmatig werk vervangt, een product lanceert of een betere klantervaring bouwt, BuiltV helpt het om te zetten in een werkend digitaal systeem.",
        startProject: "Start een project",
        exploreWork: "Bekijk ons werk",
        web: "Web",
        software: "Software",
        systems: "Systemen",
        ai: "AI",
        automation: "Automatisering",
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

      workflow: {
        eyebrow: "Systèmes d'entreprise connectés",
        title: "Votre entreprise n'a pas besoin de davantage d'outils déconnectés.",
        description:
          "BuiltV relie les étapes entre une nouvelle demande et un travail terminé dans un workflow plus fluide.",
        explore: "Découvrir les solutions métier",
        steps: {
          enquiry: "Demande",
          quote: "Devis",
          booking: "Réservation",
          job: "Mission",
          payment: "Paiement",
          followUp: "Suivi",
        },
      },

      markets: {
        title: "Les marchés pour lesquels nous créons",
        countries: {
          ireland: "Irlande",
          unitedKingdom: "Royaume-Uni",
          germany: "Allemagne",
          netherlands: "Pays-Bas",
          austria: "Autriche",
          belgium: "Belgique",
          france: "France",
          spain: "Espagne",
          portugal: "Portugal",
          italy: "Italie",
          denmark: "Danemark",
          norway: "Norvège",
          sweden: "Suède",
          finland: "Finlande",
          switzerland: "Suisse",
          poland: "Pologne",
          czechia: "Tchéquie",
          estonia: "Estonie",
          lithuania: "Lituanie",
          latvia: "Lettonie",
          greece: "Grèce",
          croatia: "Croatie",
          romania: "Roumanie",
        },
      },

      industries: {
        eyebrow: "Pour qui nous créons",
        titleStart: "Des entreprises différentes.",
        titleHighlight: "Des problèmes opérationnels similaires.",
        description:
          "Nous concevons des systèmes autour du fonctionnement réel d'une entreprise — de la première demande client au travail effectué en coulisses.",
        explore: "Découvrir toutes les solutions",
        homeServices: {
          title: "Services à domicile",
          description:
            "Systèmes numériques pour la plomberie, le HVAC, l'électricité et d'autres entreprises de services.",
          system: "Lead → Devis → Réservation → Mission → Paiement",
        },
        fieldServices: {
          title: "Services terrain",
          description:
            "Outils opérationnels pour les équipes de nettoyage, maintenance et services mobiles.",
          system: "Mission → Employé → Preuve → Client → Facture",
        },
        construction: {
          title: "Construction",
          description:
            "Workflows connectés pour les projets, équipes, rapports et communication client.",
          system: "Projet → Équipe → Site → Rapport → Client",
        },
        professionalServices: {
          title: "Services professionnels",
          description:
            "De meilleurs systèmes pour les prospects, propositions, clients, facturation et travail récurrent.",
          system: "Lead → Proposition → Client → Livraison → Facturation",
        },
        startups: {
          title: "Startups",
          description:
            "Des premières idées produit aux MVP fonctionnels et aux plateformes numériques évolutives.",
          system: "Idée → MVP → Lancement → Apprentissage → Croissance",
        },
      },

      selectedWork: {
        eyebrow: "Projets sélectionnés",
        titleStart: "Des produits conçus pour résoudre",
        titleHighlight: "de vrais problèmes.",
        viewAll: "Voir tous les projets",
        viewProject: "Voir le projet",
        mineQueue: {
          category: "Logiciel de santé",
          description:
            "Une plateforme de rendez-vous médicaux en temps réel conçue autour de la fiabilité des réservations, de la planification et de parcours patients plus fluides.",
          panelLabel: "Système de rendez-vous médicaux",
        },
        triage: {
          category: "Plateforme IA pour développeurs",
          description:
            "Une plateforme de débogage alimentée par l'IA pour aider les développeurs à comprendre les erreurs, analyser le contexte et passer plus vite du problème à la solution.",
          panelLabel: "Espace de débogage IA",
        },
      },

      process: {
        eyebrow: "Notre méthode",
        titleStart: "Du problème au",
        titleHighlight: "produit fonctionnel.",
        description:
          "Un processus ciblé conçu pour transformer une idée en système numérique fiable sans complexité inutile.",
        startProject: "Démarrer votre projet",
        steps: {
          discover: {
            title: "Découvrir",
            text: "Nous comprenons l'entreprise, les utilisateurs, le workflow et le problème qui mérite d'être résolu.",
          },
          design: {
            title: "Concevoir",
            text: "Nous définissons l'expérience, l'architecture du système et la direction du produit.",
          },
          build: {
            title: "Développer",
            text: "Nous construisons le produit avec une technologie moderne, fiable et évolutive.",
          },
          launch: {
            title: "Lancer",
            text: "Nous testons, affinons et mettons le système en production.",
          },
          improve: {
            title: "Améliorer",
            text: "Nous apprenons de l'utilisation réelle et améliorons continuellement ce qui compte.",
          },
        },
      },

      finalCTA: {
        eyebrow: "Construisons quelque chose d'utile",
        titleStart: "Le prochain système sur lequel votre entreprise fonctionnera",
        titleHighlight: "commence ici.",
        description:
          "Que vous remplaciez du travail manuel, lanciez un produit ou amélioriez l'expérience client, BuiltV peut vous aider à en faire un système numérique fonctionnel.",
        startProject: "Démarrer un projet",
        exploreWork: "Découvrir nos projets",
        web: "Web",
        software: "Logiciels",
        systems: "Systèmes",
        ai: "IA",
        automation: "Automatisation",
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

      workflow: {
        eyebrow: "Sistemas empresariales conectados",
        title: "Tu empresa no necesita más herramientas desconectadas.",
        description:
          "BuiltV conecta los pasos entre una nueva consulta y un trabajo completado en un flujo más fluido.",
        explore: "Explorar soluciones empresariales",
        steps: {
          enquiry: "Consulta",
          quote: "Presupuesto",
          booking: "Reserva",
          job: "Trabajo",
          payment: "Pago",
          followUp: "Seguimiento",
        },
      },

      markets: {
        title: "Mercados para los que construimos",
        countries: {
          ireland: "Irlanda",
          unitedKingdom: "Reino Unido",
          germany: "Alemania",
          netherlands: "Países Bajos",
          austria: "Austria",
          belgium: "Bélgica",
          france: "Francia",
          spain: "España",
          portugal: "Portugal",
          italy: "Italia",
          denmark: "Dinamarca",
          norway: "Noruega",
          sweden: "Suecia",
          finland: "Finlandia",
          switzerland: "Suiza",
          poland: "Polonia",
          czechia: "Chequia",
          estonia: "Estonia",
          lithuania: "Lituania",
          latvia: "Letonia",
          greece: "Grecia",
          croatia: "Croacia",
          romania: "Rumanía",
        },
      },

      industries: {
        eyebrow: "Para quién construimos",
        titleStart: "Negocios diferentes.",
        titleHighlight: "Problemas operativos similares.",
        description:
          "Diseñamos sistemas alrededor de cómo funciona realmente una empresa — desde la primera consulta del cliente hasta el trabajo que ocurre detrás de escena.",
        explore: "Explorar todas las soluciones",
        homeServices: {
          title: "Servicios para el hogar",
          description:
            "Sistemas digitales para fontanería, HVAC, electricidad y otros negocios de servicios.",
          system: "Lead → Presupuesto → Reserva → Trabajo → Pago",
        },
        fieldServices: {
          title: "Servicios de campo",
          description:
            "Herramientas operativas para limpieza, mantenimiento y equipos de servicio móvil.",
          system: "Trabajo → Trabajador → Prueba → Cliente → Factura",
        },
        construction: {
          title: "Construcción",
          description:
            "Flujos conectados para proyectos, equipos, informes y comunicación con clientes.",
          system: "Proyecto → Equipo → Sitio → Informe → Cliente",
        },
        professionalServices: {
          title: "Servicios profesionales",
          description:
            "Mejores sistemas para leads, propuestas, clientes, facturación y trabajo recurrente.",
          system: "Lead → Propuesta → Cliente → Entrega → Facturación",
        },
        startups: {
          title: "Startups",
          description:
            "Desde ideas iniciales de producto hasta MVP funcionales y plataformas digitales escalables.",
          system: "Idea → MVP → Lanzamiento → Aprender → Escalar",
        },
      },

      selectedWork: {
        eyebrow: "Trabajo seleccionado",
        titleStart: "Productos diseñados para resolver",
        titleHighlight: "problemas reales.",
        viewAll: "Ver todos los proyectos",
        viewProject: "Ver proyecto",
        mineQueue: {
          category: "Software de salud",
          description:
            "Una plataforma de citas médicas en tiempo real diseñada para ofrecer reservas fiables, mejor planificación y flujos de pacientes más fluidos.",
          panelLabel: "Sistema de citas médicas",
        },
        triage: {
          category: "Plataforma de IA para desarrolladores",
          description:
            "Una plataforma de depuración con IA creada para ayudar a los desarrolladores a entender errores, revisar contexto y pasar más rápido del problema a la solución.",
          panelLabel: "Espacio de depuración con IA",
        },
      },

      process: {
        eyebrow: "Cómo trabajamos",
        titleStart: "Del problema al",
        titleHighlight: "producto funcional.",
        description:
          "Un proceso enfocado para convertir una idea en un sistema digital fiable sin complejidad innecesaria.",
        startProject: "Inicia tu proyecto",
        steps: {
          discover: {
            title: "Descubrir",
            text: "Entendemos el negocio, los usuarios, el flujo de trabajo y el problema que vale la pena resolver.",
          },
          design: {
            title: "Diseñar",
            text: "Definimos la experiencia, la arquitectura del sistema y la dirección del producto.",
          },
          build: {
            title: "Construir",
            text: "Desarrollamos el producto con tecnología moderna, fiable y escalable.",
          },
          launch: {
            title: "Lanzar",
            text: "Probamos, refinamos y llevamos el sistema al mundo real.",
          },
          improve: {
            title: "Mejorar",
            text: "Aprendemos del uso real y seguimos mejorando lo que importa.",
          },
        },
      },

      finalCTA: {
        eyebrow: "Construyamos algo útil",
        titleStart: "El próximo sistema sobre el que funcionará tu empresa",
        titleHighlight: "empieza aquí.",
        description:
          "Ya sea que reemplaces trabajo manual, lances un producto o construyas una mejor experiencia para tus clientes, BuiltV puede ayudarte a convertirlo en un sistema digital funcional.",
        startProject: "Iniciar un proyecto",
        exploreWork: "Explorar nuestro trabajo",
        web: "Web",
        software: "Software",
        systems: "Sistemas",
        ai: "IA",
        automation: "Automatización",
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
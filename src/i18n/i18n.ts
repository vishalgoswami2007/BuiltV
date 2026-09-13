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

      servicesPage: {
              "hero": {
                      "eyebrow": "Services",
                      "titleStart": "Digital systems built around",
                      "titleHighlight": "how your business works.",
                      "description": "BuiltV combines product design, software engineering, AI and automation to turn business problems into useful digital systems.",
                      "startProject": "Start a project",
                      "exploreServices": "Explore services"
              },
              "capabilities": {
                      "eyebrow": "Core capabilities",
                      "title": "One studio for the systems your business needs."
              },
              "items": {
                      "web": {
                              "title": "Web Experiences",
                              "description": "High-performance websites and digital experiences designed to communicate clearly, convert better and feel premium on every screen.",
                              "deliverables": {
                                      "marketingWebsites": "Marketing websites",
                                      "landingPages": "Landing pages",
                                      "corporateWebsites": "Corporate websites",
                                      "responsiveInterfaces": "Responsive interfaces",
                                      "performanceOptimisation": "Performance optimisation",
                                      "cmsIntegrations": "CMS integrations"
                              }
                      },
                      "software": {
                              "title": "Software & SaaS",
                              "description": "Custom software products built around real workflows, users and business requirements instead of forcing your team into generic tools.",
                              "deliverables": {
                                      "saasProducts": "SaaS products",
                                      "adminDashboards": "Admin dashboards",
                                      "clientPortals": "Client portals",
                                      "internalPlatforms": "Internal platforms",
                                      "authenticationSystems": "Authentication systems",
                                      "apiIntegrations": "API integrations"
                              }
                      },
                      "systems": {
                              "title": "Business Systems",
                              "description": "Connected operational systems that replace repetitive work, fragmented spreadsheets and disconnected processes.",
                              "deliverables": {
                                      "bookingSystems": "Booking systems",
                                      "quotingWorkflows": "Quoting workflows",
                                      "schedulingSystems": "Scheduling systems",
                                      "operationsDashboards": "Operations dashboards",
                                      "paymentWorkflows": "Payment workflows",
                                      "crmIntegrations": "CRM integrations"
                              }
                      },
                      "ai": {
                              "title": "AI & Automation",
                              "description": "Practical AI and automation designed to reduce manual work, speed up decisions and improve how information moves through your business.",
                              "deliverables": {
                                      "aiAssistants": "AI assistants",
                                      "workflowAutomation": "Workflow automation",
                                      "leadQualification": "Lead qualification",
                                      "supportAutomation": "Support automation",
                                      "aiInternalTools": "AI-powered internal tools",
                                      "llmIntegrations": "LLM integrations"
                              }
                      },
                      "engineering": {
                              "title": "Product Engineering",
                              "description": "Frontend, backend, APIs, databases and integrations engineered as one reliable product foundation that can continue to evolve.",
                              "deliverables": {
                                      "frontendEngineering": "Frontend engineering",
                                      "backendSystems": "Backend systems",
                                      "restApis": "REST APIs",
                                      "databaseArchitecture": "Database architecture",
                                      "thirdPartyIntegrations": "Third-party integrations",
                                      "deploymentSetup": "Deployment setup"
                              }
                      }
              },
              "engagement": {
                      "eyebrow": "How we engage",
                      "title": "Start where your business is today.",
                      "description": "You do not need a perfectly defined technical brief. Bring the problem, workflow or product idea and we can shape the right approach from there.",
                      "models": {
                              "newProduct": {
                                      "title": "New Product",
                                      "text": "From an early idea to a usable product, MVP or complete digital platform."
                              },
                              "existingSystem": {
                                      "title": "Existing System",
                                      "text": "Improve, rebuild or extend an existing product that has become difficult to use or maintain."
                              },
                              "automationProject": {
                                      "title": "Automation Project",
                                      "text": "Identify repetitive workflows and turn them into connected automated systems."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Have something specific in mind?",
                      "titleStart": "Tell us the problem.",
                      "titleHighlight": "We'll help shape the system.",
                      "description": "Whether it is a website, software product, internal workflow or AI automation, the conversation can start with what is slowing your business down.",
                      "button": "Discuss your project"
              }
      },

      solutionsPage: {
              "hero": {
                      "eyebrow": "Solutions",
                      "titleStart": "Turn disconnected business steps into",
                      "titleHighlight": "one working system.",
                      "description": "BuiltV designs practical digital systems around the workflows businesses use every day — from the first enquiry to payment and follow-up.",
                      "discussWorkflow": "Discuss your workflow",
                      "exploreSolutions": "Explore solutions"
              },
              "workflows": {
                      "eyebrow": "Business workflows",
                      "titleStart": "Systems designed around",
                      "titleHighlight": "real operational steps."
              },
              "canInclude": "Can include",
              "items": {
                      "lead": {
                              "title": "Lead & Enquiry Systems",
                              "description": "Capture enquiries, qualify leads and move opportunities into a clearer sales workflow.",
                              "flow": {
                                      "enquiry": "Enquiry",
                                      "qualification": "Qualification",
                                      "followUp": "Follow-up",
                                      "proposal": "Proposal",
                                      "customer": "Customer"
                              },
                              "includes": {
                                      "leadCaptureForms": "Lead capture forms",
                                      "crmIntegrations": "CRM integrations",
                                      "leadQualification": "Lead qualification",
                                      "followUpWorkflows": "Follow-up workflows",
                                      "salesNotifications": "Sales notifications"
                              }
                      },
                      "booking": {
                              "title": "Booking & Scheduling",
                              "description": "Turn availability, appointments and scheduling into one connected customer experience.",
                              "flow": {
                                      "availability": "Availability",
                                      "booking": "Booking",
                                      "confirmation": "Confirmation",
                                      "reminder": "Reminder",
                                      "service": "Service"
                              },
                              "includes": {
                                      "appointmentBooking": "Appointment booking",
                                      "availabilityManagement": "Availability management",
                                      "automatedReminders": "Automated reminders",
                                      "reschedulingWorkflows": "Rescheduling workflows",
                                      "teamScheduling": "Team scheduling"
                              }
                      },
                      "quote": {
                              "title": "Quote & Proposal Systems",
                              "description": "Create a smoother path from customer requirement to quote, approval and confirmed work.",
                              "flow": {
                                      "request": "Request",
                                      "quote": "Quote",
                                      "review": "Review",
                                      "approval": "Approval",
                                      "job": "Job"
                              },
                              "includes": {
                                      "quoteGeneration": "Quote generation",
                                      "proposalWorkflows": "Proposal workflows",
                                      "approvalTracking": "Approval tracking",
                                      "customerPortals": "Customer portals",
                                      "documentAutomation": "Document automation"
                              }
                      },
                      "operations": {
                              "title": "Operations & Job Management",
                              "description": "Connect jobs, teams, status updates and operational information without relying on fragmented tools.",
                              "flow": {
                                      "job": "Job",
                                      "assignment": "Assignment",
                                      "work": "Work",
                                      "proof": "Proof",
                                      "completion": "Completion"
                              },
                              "includes": {
                                      "operationsDashboards": "Operations dashboards",
                                      "jobTracking": "Job tracking",
                                      "teamAssignment": "Team assignment",
                                      "statusWorkflows": "Status workflows",
                                      "internalNotifications": "Internal notifications"
                              }
                      },
                      "payments": {
                              "title": "Payments & Billing",
                              "description": "Connect completed work to payment, billing and follow-up workflows with less manual admin.",
                              "flow": {
                                      "work": "Work",
                                      "invoice": "Invoice",
                                      "payment": "Payment",
                                      "receipt": "Receipt",
                                      "followUp": "Follow-up"
                              },
                              "includes": {
                                      "paymentIntegrations": "Payment integrations",
                                      "invoiceWorkflows": "Invoice workflows",
                                      "paymentStatusTracking": "Payment status tracking",
                                      "receiptAutomation": "Receipt automation",
                                      "billingDashboards": "Billing dashboards"
                              }
                      },
                      "ai": {
                              "title": "AI & Automation Systems",
                              "description": "Use AI where it creates real operational value instead of adding another disconnected tool.",
                              "flow": {
                                      "input": "Input",
                                      "ai": "AI",
                                      "decision": "Decision",
                                      "action": "Action",
                                      "review": "Review"
                              },
                              "includes": {
                                      "aiAssistants": "AI assistants",
                                      "supportAutomation": "Support automation",
                                      "leadQualification": "Lead qualification",
                                      "internalAiTools": "Internal AI tools",
                                      "workflowAutomation": "Workflow automation"
                              }
                      }
              },
              "connected": {
                      "eyebrow": "Connected operations",
                      "titleStart": "One workflow is useful.",
                      "titleHighlight": "Connected workflows are better.",
                      "description": "The strongest systems connect customer-facing steps with the operational work happening behind the scenes.",
                      "steps": {
                              "customerEnquiry": "Customer enquiry",
                              "quoteApproval": "Quote & approval",
                              "bookingScheduling": "Booking & scheduling",
                              "teamAssignment": "Team assignment",
                              "workCompletion": "Work completion",
                              "paymentFollowUp": "Payment & follow-up"
                      }
              },
              "audience": {
                      "eyebrow": "Who this is for",
                      "titleStart": "Built for businesses with",
                      "titleHighlight": "operational complexity.",
                      "exploreServices": "Explore our services",
                      "items": {
                              "serviceBusinesses": {
                                      "title": "Service Businesses",
                                      "text": "Connected systems for enquiries, quotes, bookings, jobs and payments."
                              },
                              "professionalServices": {
                                      "title": "Professional Services",
                                      "text": "Better client workflows from lead generation through delivery and billing."
                              },
                              "fieldOperations": {
                                      "title": "Field Operations",
                                      "text": "Tools for teams managing jobs, workers, proof of work and customer updates."
                              },
                              "growingCompanies": {
                                      "title": "Growing Companies",
                                      "text": "Custom internal systems for businesses outgrowing spreadsheets and manual processes."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Start with the workflow",
                      "titleStart": "Show us where the process breaks.",
                      "titleHighlight": "We'll design what connects it.",
                      "description": "You do not need to know which software you need. Start with the business process, bottleneck or manual work that needs improving.",
                      "button": "Discuss your workflow"
              }
      },

      workPage: {
              "hero": {
                      "eyebrow": "Selected Work",
                      "titleStart": "Products built to turn",
                      "titleHighlight": "problems into systems.",
                      "description": "A selection of products exploring healthcare workflows, AI, developer tooling and reliable digital experiences.",
                      "button": "Build something with us"
              },
              "projects": {
                      "mineQueue": {
                              "category": "Healthcare Software",
                              "headline": "Appointment booking built around reliability.",
                              "description": "A real-time doctor appointment platform designed to make discovering doctors, checking availability and booking appointments simpler while protecting the booking flow from conflicts.",
                              "features": {
                                      "scheduling": {
                                              "title": "Scheduling",
                                              "text": "Doctor availability and appointment workflows designed around real booking scenarios."
                                      },
                                      "bookingReliability": {
                                              "title": "Booking reliability",
                                              "text": "Logic designed to reduce conflicting appointments and double-booking situations."
                                      },
                                      "connectedBackend": {
                                              "title": "Connected backend",
                                              "text": "Users, schedules and bookings connected through a structured API and database layer."
                                      }
                              }
                      },
                      "triage": {
                              "category": "AI Developer Platform",
                              "headline": "A cleaner way to move from error to understanding.",
                              "description": "An AI-powered developer debugging platform designed to bring code, errors and supporting context into one focused workspace so developers can investigate problems faster.",
                              "features": {
                                      "aiAssistance": {
                                              "title": "AI assistance",
                                              "text": "A conversational debugging workflow designed around developer context and technical problems."
                                      },
                                      "codeContext": {
                                              "title": "Code context",
                                              "text": "Support for bringing code, errors and development context into the same investigation."
                                      },
                                      "focusedWorkflow": {
                                              "title": "Focused workflow",
                                              "text": "A product experience designed to reduce jumping between disconnected debugging tools."
                                      }
                              }
                      }
              },
              "visual": {
                      "mineQueue": {
                              "dashboard": "Appointment Dashboard",
                              "doctors": "Doctors",
                              "bookings": "Bookings",
                              "schedules": "Schedules",
                              "upcoming": "Upcoming appointment",
                              "bookingWorkflow": "Booking workflow",
                              "confirmed": "Confirmed"
                      },
                      "triage": {
                              "workspace": "Triage debugging workspace",
                              "debugIssue": "Debug this issue",
                              "context": "Code + error + context",
                              "assistant": "AI debugging assistant"
                      }
              },
              "discussSimilar": "Discuss a similar project",
              "thinking": {
                      "eyebrow": "How we think",
                      "titleStart": "Good software starts with",
                      "titleHighlight": "the workflow.",
                      "description": "We focus on what users are trying to accomplish, where operational friction exists and which parts of the system need to remain dependable as usage grows.",
                      "exploreCapabilities": "Explore our capabilities"
              },
              "cta": {
                      "eyebrow": "Your project could be next",
                      "titleStart": "Have a useful system",
                      "titleHighlight": "worth building?",
                      "description": "Bring the workflow, idea or business problem. We can help turn it into a clear product direction and working digital system.",
                      "button": "Start a project"
              }
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

      servicesPage: {
              "hero": {
                      "eyebrow": "Leistungen",
                      "titleStart": "Digitale Systeme, entwickelt rund um",
                      "titleHighlight": "die Arbeitsweise Ihres Unternehmens.",
                      "description": "BuiltV verbindet Produktdesign, Softwareentwicklung, KI und Automatisierung, um Geschäftsprobleme in nützliche digitale Systeme zu verwandeln.",
                      "startProject": "Projekt starten",
                      "exploreServices": "Leistungen entdecken"
              },
              "capabilities": {
                      "eyebrow": "Kernkompetenzen",
                      "title": "Ein Studio für die Systeme, die Ihr Unternehmen benötigt."
              },
              "items": {
                      "web": {
                              "title": "Web-Erlebnisse",
                              "description": "Leistungsstarke Websites und digitale Erlebnisse, die klar kommunizieren, besser konvertieren und auf jedem Bildschirm hochwertig wirken.",
                              "deliverables": {
                                      "marketingWebsites": "Marketing-Websites",
                                      "landingPages": "Landingpages",
                                      "corporateWebsites": "Unternehmenswebsites",
                                      "responsiveInterfaces": "Responsive Oberflächen",
                                      "performanceOptimisation": "Performance-Optimierung",
                                      "cmsIntegrations": "CMS-Integrationen"
                              }
                      },
                      "software": {
                              "title": "Software & SaaS",
                              "description": "Individuelle Softwareprodukte, die auf realen Workflows, Nutzern und Geschäftsanforderungen basieren, statt Ihr Team in generische Tools zu zwingen.",
                              "deliverables": {
                                      "saasProducts": "SaaS-Produkte",
                                      "adminDashboards": "Admin-Dashboards",
                                      "clientPortals": "Kundenportale",
                                      "internalPlatforms": "Interne Plattformen",
                                      "authenticationSystems": "Authentifizierungssysteme",
                                      "apiIntegrations": "API-Integrationen"
                              }
                      },
                      "systems": {
                              "title": "Geschäftssysteme",
                              "description": "Vernetzte operative Systeme, die repetitive Arbeit, fragmentierte Tabellen und getrennte Prozesse ersetzen.",
                              "deliverables": {
                                      "bookingSystems": "Buchungssysteme",
                                      "quotingWorkflows": "Angebots-Workflows",
                                      "schedulingSystems": "Planungssysteme",
                                      "operationsDashboards": "Operations-Dashboards",
                                      "paymentWorkflows": "Zahlungs-Workflows",
                                      "crmIntegrations": "CRM-Integrationen"
                              }
                      },
                      "ai": {
                              "title": "KI & Automatisierung",
                              "description": "Praktische KI und Automatisierung zur Reduzierung manueller Arbeit, Beschleunigung von Entscheidungen und Verbesserung des Informationsflusses im Unternehmen.",
                              "deliverables": {
                                      "aiAssistants": "KI-Assistenten",
                                      "workflowAutomation": "Workflow-Automatisierung",
                                      "leadQualification": "Lead-Qualifizierung",
                                      "supportAutomation": "Support-Automatisierung",
                                      "aiInternalTools": "KI-gestützte interne Tools",
                                      "llmIntegrations": "LLM-Integrationen"
                              }
                      },
                      "engineering": {
                              "title": "Produktentwicklung",
                              "description": "Frontend, Backend, APIs, Datenbanken und Integrationen als zuverlässige Produktbasis entwickelt, die sich kontinuierlich weiterentwickeln kann.",
                              "deliverables": {
                                      "frontendEngineering": "Frontend-Entwicklung",
                                      "backendSystems": "Backend-Systeme",
                                      "restApis": "REST-APIs",
                                      "databaseArchitecture": "Datenbankarchitektur",
                                      "thirdPartyIntegrations": "Drittanbieter-Integrationen",
                                      "deploymentSetup": "Deployment-Einrichtung"
                              }
                      }
              },
              "engagement": {
                      "eyebrow": "So arbeiten wir zusammen",
                      "title": "Starten Sie dort, wo Ihr Unternehmen heute steht.",
                      "description": "Sie brauchen kein perfekt definiertes technisches Briefing. Bringen Sie das Problem, den Workflow oder die Produktidee mit und wir entwickeln daraus den passenden Ansatz.",
                      "models": {
                              "newProduct": {
                                      "title": "Neues Produkt",
                                      "text": "Von einer frühen Idee zu einem nutzbaren Produkt, MVP oder einer vollständigen digitalen Plattform."
                              },
                              "existingSystem": {
                                      "title": "Bestehendes System",
                                      "text": "Ein bestehendes Produkt verbessern, neu aufbauen oder erweitern, wenn Nutzung oder Wartung schwierig geworden sind."
                              },
                              "automationProject": {
                                      "title": "Automatisierungsprojekt",
                                      "text": "Repetitive Workflows identifizieren und in vernetzte automatisierte Systeme verwandeln."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Haben Sie etwas Bestimmtes im Sinn?",
                      "titleStart": "Nennen Sie uns das Problem.",
                      "titleHighlight": "Wir helfen, das passende System zu gestalten.",
                      "description": "Ob Website, Softwareprodukt, interner Workflow oder KI-Automatisierung — das Gespräch kann bei dem beginnen, was Ihr Unternehmen derzeit ausbremst.",
                      "button": "Projekt besprechen"
              }
      },

      solutionsPage: {
              "hero": {
                      "eyebrow": "Lösungen",
                      "titleStart": "Verwandeln Sie getrennte Geschäftsschritte in",
                      "titleHighlight": "ein funktionierendes System.",
                      "description": "BuiltV entwickelt praktische digitale Systeme rund um die Workflows, die Unternehmen täglich nutzen — von der ersten Anfrage bis zu Zahlung und Nachverfolgung.",
                      "discussWorkflow": "Workflow besprechen",
                      "exploreSolutions": "Lösungen entdecken"
              },
              "workflows": {
                      "eyebrow": "Geschäftsabläufe",
                      "titleStart": "Systeme entwickelt rund um",
                      "titleHighlight": "reale operative Schritte."
              },
              "canInclude": "Kann enthalten",
              "items": {
                      "lead": {
                              "title": "Lead- & Anfragesysteme",
                              "description": "Anfragen erfassen, Leads qualifizieren und Chancen in einen klareren Vertriebsworkflow überführen.",
                              "flow": {
                                      "enquiry": "Anfrage",
                                      "qualification": "Qualifizierung",
                                      "followUp": "Nachverfolgung",
                                      "proposal": "Angebot",
                                      "customer": "Kunde"
                              },
                              "includes": {
                                      "leadCaptureForms": "Lead-Erfassungsformulare",
                                      "crmIntegrations": "CRM-Integrationen",
                                      "leadQualification": "Lead-Qualifizierung",
                                      "followUpWorkflows": "Follow-up-Workflows",
                                      "salesNotifications": "Vertriebsbenachrichtigungen"
                              }
                      },
                      "booking": {
                              "title": "Buchung & Terminplanung",
                              "description": "Verfügbarkeit, Termine und Planung zu einem verbundenen Kundenerlebnis machen.",
                              "flow": {
                                      "availability": "Verfügbarkeit",
                                      "booking": "Buchung",
                                      "confirmation": "Bestätigung",
                                      "reminder": "Erinnerung",
                                      "service": "Service"
                              },
                              "includes": {
                                      "appointmentBooking": "Terminbuchung",
                                      "availabilityManagement": "Verfügbarkeitsverwaltung",
                                      "automatedReminders": "Automatische Erinnerungen",
                                      "reschedulingWorkflows": "Umbuchungs-Workflows",
                                      "teamScheduling": "Teamplanung"
                              }
                      },
                      "quote": {
                              "title": "Angebots- & Vorschlagssysteme",
                              "description": "Ein reibungsloserer Weg von der Kundenanforderung über Angebot und Freigabe bis zum bestätigten Auftrag.",
                              "flow": {
                                      "request": "Anfrage",
                                      "quote": "Angebot",
                                      "review": "Prüfung",
                                      "approval": "Freigabe",
                                      "job": "Auftrag"
                              },
                              "includes": {
                                      "quoteGeneration": "Angebotserstellung",
                                      "proposalWorkflows": "Angebots-Workflows",
                                      "approvalTracking": "Freigabeverfolgung",
                                      "customerPortals": "Kundenportale",
                                      "documentAutomation": "Dokumentenautomatisierung"
                              }
                      },
                      "operations": {
                              "title": "Betrieb & Auftragsmanagement",
                              "description": "Aufträge, Teams, Statusupdates und operative Informationen verbinden, ohne auf fragmentierte Tools angewiesen zu sein.",
                              "flow": {
                                      "job": "Auftrag",
                                      "assignment": "Zuweisung",
                                      "work": "Arbeit",
                                      "proof": "Nachweis",
                                      "completion": "Abschluss"
                              },
                              "includes": {
                                      "operationsDashboards": "Operations-Dashboards",
                                      "jobTracking": "Auftragsverfolgung",
                                      "teamAssignment": "Teamzuweisung",
                                      "statusWorkflows": "Status-Workflows",
                                      "internalNotifications": "Interne Benachrichtigungen"
                              }
                      },
                      "payments": {
                              "title": "Zahlungen & Abrechnung",
                              "description": "Abgeschlossene Arbeit mit Zahlung, Abrechnung und Nachverfolgung verbinden — mit weniger manueller Administration.",
                              "flow": {
                                      "work": "Arbeit",
                                      "invoice": "Rechnung",
                                      "payment": "Zahlung",
                                      "receipt": "Beleg",
                                      "followUp": "Nachverfolgung"
                              },
                              "includes": {
                                      "paymentIntegrations": "Zahlungsintegrationen",
                                      "invoiceWorkflows": "Rechnungs-Workflows",
                                      "paymentStatusTracking": "Zahlungsstatus-Verfolgung",
                                      "receiptAutomation": "Belegautomatisierung",
                                      "billingDashboards": "Abrechnungs-Dashboards"
                              }
                      },
                      "ai": {
                              "title": "KI- & Automatisierungssysteme",
                              "description": "KI dort einsetzen, wo sie echten operativen Mehrwert schafft, statt ein weiteres getrenntes Tool hinzuzufügen.",
                              "flow": {
                                      "input": "Eingabe",
                                      "ai": "KI",
                                      "decision": "Entscheidung",
                                      "action": "Aktion",
                                      "review": "Prüfung"
                              },
                              "includes": {
                                      "aiAssistants": "KI-Assistenten",
                                      "supportAutomation": "Support-Automatisierung",
                                      "leadQualification": "Lead-Qualifizierung",
                                      "internalAiTools": "Interne KI-Tools",
                                      "workflowAutomation": "Workflow-Automatisierung"
                              }
                      }
              },
              "connected": {
                      "eyebrow": "Vernetzter Betrieb",
                      "titleStart": "Ein Workflow ist nützlich.",
                      "titleHighlight": "Vernetzte Workflows sind besser.",
                      "description": "Die stärksten Systeme verbinden kundennahe Schritte mit der operativen Arbeit im Hintergrund.",
                      "steps": {
                              "customerEnquiry": "Kundenanfrage",
                              "quoteApproval": "Angebot & Freigabe",
                              "bookingScheduling": "Buchung & Planung",
                              "teamAssignment": "Teamzuweisung",
                              "workCompletion": "Arbeitsabschluss",
                              "paymentFollowUp": "Zahlung & Nachverfolgung"
                      }
              },
              "audience": {
                      "eyebrow": "Für wen das gedacht ist",
                      "titleStart": "Entwickelt für Unternehmen mit",
                      "titleHighlight": "operativer Komplexität.",
                      "exploreServices": "Unsere Leistungen entdecken",
                      "items": {
                              "serviceBusinesses": {
                                      "title": "Serviceunternehmen",
                                      "text": "Vernetzte Systeme für Anfragen, Angebote, Buchungen, Aufträge und Zahlungen."
                              },
                              "professionalServices": {
                                      "title": "Professionelle Dienstleistungen",
                                      "text": "Bessere Kundenworkflows von der Lead-Generierung bis zu Lieferung und Abrechnung."
                              },
                              "fieldOperations": {
                                      "title": "Außendienst",
                                      "text": "Tools für Teams, die Aufträge, Mitarbeiter, Arbeitsnachweise und Kundenupdates verwalten."
                              },
                              "growingCompanies": {
                                      "title": "Wachsende Unternehmen",
                                      "text": "Individuelle interne Systeme für Unternehmen, die Tabellen und manuelle Prozesse hinter sich lassen."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Beginnen Sie mit dem Workflow",
                      "titleStart": "Zeigen Sie uns, wo der Prozess stockt.",
                      "titleHighlight": "Wir entwickeln die Verbindung.",
                      "description": "Sie müssen nicht wissen, welche Software Sie benötigen. Beginnen Sie mit dem Geschäftsprozess, Engpass oder der manuellen Arbeit, die verbessert werden soll.",
                      "button": "Workflow besprechen"
              }
      },

      workPage: {
              "hero": {
                      "eyebrow": "Ausgewählte Projekte",
                      "titleStart": "Produkte, die",
                      "titleHighlight": "Probleme in Systeme verwandeln.",
                      "description": "Eine Auswahl von Produkten rund um Gesundheits-Workflows, KI, Entwicklerwerkzeuge und zuverlässige digitale Erlebnisse.",
                      "button": "Etwas mit uns entwickeln"
              },
              "projects": {
                      "mineQueue": {
                              "category": "Gesundheitssoftware",
                              "headline": "Terminbuchung mit Fokus auf Zuverlässigkeit.",
                              "description": "Eine Echtzeit-Plattform für Arzttermine, die Arztsuche, Verfügbarkeit und Buchungen vereinfacht und den Buchungsprozess vor Konflikten schützt.",
                              "features": {
                                      "scheduling": {
                                              "title": "Terminplanung",
                                              "text": "Arztverfügbarkeit und Termin-Workflows für reale Buchungsszenarien."
                                      },
                                      "bookingReliability": {
                                              "title": "Buchungszuverlässigkeit",
                                              "text": "Logik zur Reduzierung von Terminkonflikten und Doppelbuchungen."
                                      },
                                      "connectedBackend": {
                                              "title": "Vernetztes Backend",
                                              "text": "Nutzer, Zeitpläne und Buchungen über eine strukturierte API- und Datenbankschicht verbunden."
                                      }
                              }
                      },
                      "triage": {
                              "category": "KI-Entwicklerplattform",
                              "headline": "Ein klarerer Weg vom Fehler zum Verständnis.",
                              "description": "Eine KI-gestützte Debugging-Plattform, die Code, Fehler und Kontext in einem fokussierten Arbeitsbereich zusammenführt, damit Entwickler Probleme schneller untersuchen können.",
                              "features": {
                                      "aiAssistance": {
                                              "title": "KI-Unterstützung",
                                              "text": "Ein dialogorientierter Debugging-Workflow rund um Entwicklerkontext und technische Probleme."
                                      },
                                      "codeContext": {
                                              "title": "Code-Kontext",
                                              "text": "Code, Fehler und Entwicklungskontext in derselben Untersuchung zusammenführen."
                                      },
                                      "focusedWorkflow": {
                                              "title": "Fokussierter Workflow",
                                              "text": "Eine Produkterfahrung, die das Wechseln zwischen getrennten Debugging-Tools reduziert."
                                      }
                              }
                      }
              },
              "visual": {
                      "mineQueue": {
                              "dashboard": "Termin-Dashboard",
                              "doctors": "Ärzte",
                              "bookings": "Buchungen",
                              "schedules": "Zeitpläne",
                              "upcoming": "Bevorstehender Termin",
                              "bookingWorkflow": "Buchungs-Workflow",
                              "confirmed": "Bestätigt"
                      },
                      "triage": {
                              "workspace": "Triage-Debugging-Arbeitsbereich",
                              "debugIssue": "Dieses Problem debuggen",
                              "context": "Code + Fehler + Kontext",
                              "assistant": "KI-Debugging-Assistent"
                      }
              },
              "discussSimilar": "Ähnliches Projekt besprechen",
              "thinking": {
                      "eyebrow": "Wie wir denken",
                      "titleStart": "Gute Software beginnt mit",
                      "titleHighlight": "dem Workflow.",
                      "description": "Wir konzentrieren uns darauf, was Nutzer erreichen wollen, wo operative Reibung entsteht und welche Teile des Systems auch bei wachsender Nutzung zuverlässig bleiben müssen.",
                      "exploreCapabilities": "Unsere Kompetenzen entdecken"
              },
              "cta": {
                      "eyebrow": "Ihr Projekt könnte als Nächstes kommen",
                      "titleStart": "Haben Sie ein nützliches System,",
                      "titleHighlight": "das es zu bauen lohnt?",
                      "description": "Bringen Sie den Workflow, die Idee oder das Geschäftsproblem mit. Wir helfen, daraus eine klare Produktrichtung und ein funktionierendes digitales System zu machen.",
                      "button": "Projekt starten"
              }
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

      servicesPage: {
              "hero": {
                      "eyebrow": "Diensten",
                      "titleStart": "Digitale systemen gebouwd rond",
                      "titleHighlight": "hoe jouw bedrijf werkt.",
                      "description": "BuiltV combineert productdesign, software-engineering, AI en automatisering om bedrijfsproblemen om te zetten in nuttige digitale systemen.",
                      "startProject": "Start een project",
                      "exploreServices": "Diensten bekijken"
              },
              "capabilities": {
                      "eyebrow": "Kerncapaciteiten",
                      "title": "Eén studio voor de systemen die jouw bedrijf nodig heeft."
              },
              "items": {
                      "web": {
                              "title": "Web Experiences",
                              "description": "Snelle websites en digitale ervaringen die duidelijk communiceren, beter converteren en op elk scherm premium aanvoelen.",
                              "deliverables": {
                                      "marketingWebsites": "Marketingwebsites",
                                      "landingPages": "Landingspagina’s",
                                      "corporateWebsites": "Bedrijfswebsites",
                                      "responsiveInterfaces": "Responsieve interfaces",
                                      "performanceOptimisation": "Prestatie-optimalisatie",
                                      "cmsIntegrations": "CMS-integraties"
                              }
                      },
                      "software": {
                              "title": "Software & SaaS",
                              "description": "Maatwerksoftware gebouwd rond echte workflows, gebruikers en bedrijfsvereisten in plaats van je team in generieke tools te dwingen.",
                              "deliverables": {
                                      "saasProducts": "SaaS-producten",
                                      "adminDashboards": "Beheerdashboards",
                                      "clientPortals": "Klantportalen",
                                      "internalPlatforms": "Interne platforms",
                                      "authenticationSystems": "Authenticatiesystemen",
                                      "apiIntegrations": "API-integraties"
                              }
                      },
                      "systems": {
                              "title": "Bedrijfssystemen",
                              "description": "Verbonden operationele systemen die repetitief werk, versnipperde spreadsheets en losse processen vervangen.",
                              "deliverables": {
                                      "bookingSystems": "Boekingssystemen",
                                      "quotingWorkflows": "Offerteworkflows",
                                      "schedulingSystems": "Planningssystemen",
                                      "operationsDashboards": "Operationele dashboards",
                                      "paymentWorkflows": "Betalingsworkflows",
                                      "crmIntegrations": "CRM-integraties"
                              }
                      },
                      "ai": {
                              "title": "AI & Automatisering",
                              "description": "Praktische AI en automatisering om handmatig werk te verminderen, beslissingen te versnellen en informatiestromen binnen je bedrijf te verbeteren.",
                              "deliverables": {
                                      "aiAssistants": "AI-assistenten",
                                      "workflowAutomation": "Workflowautomatisering",
                                      "leadQualification": "Leadkwalificatie",
                                      "supportAutomation": "Supportautomatisering",
                                      "aiInternalTools": "AI-gestuurde interne tools",
                                      "llmIntegrations": "LLM-integraties"
                              }
                      },
                      "engineering": {
                              "title": "Product Engineering",
                              "description": "Frontend, backend, API’s, databases en integraties als één betrouwbare productbasis die kan blijven evolueren.",
                              "deliverables": {
                                      "frontendEngineering": "Frontend-engineering",
                                      "backendSystems": "Backendsystemen",
                                      "restApis": "REST-API’s",
                                      "databaseArchitecture": "Databasearchitectuur",
                                      "thirdPartyIntegrations": "Integraties van derden",
                                      "deploymentSetup": "Deployment-instelling"
                              }
                      }
              },
              "engagement": {
                      "eyebrow": "Hoe we samenwerken",
                      "title": "Begin waar je bedrijf vandaag staat.",
                      "description": "Je hebt geen perfect uitgewerkte technische briefing nodig. Breng het probleem, de workflow of het productidee mee en wij helpen de juiste aanpak vorm te geven.",
                      "models": {
                              "newProduct": {
                                      "title": "Nieuw product",
                                      "text": "Van een vroeg idee naar een bruikbaar product, MVP of compleet digitaal platform."
                              },
                              "existingSystem": {
                                      "title": "Bestaand systeem",
                                      "text": "Verbeter, herbouw of breid een bestaand product uit dat moeilijk te gebruiken of te onderhouden is geworden."
                              },
                              "automationProject": {
                                      "title": "Automatiseringsproject",
                                      "text": "Identificeer repetitieve workflows en zet ze om in verbonden geautomatiseerde systemen."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Heb je iets specifieks in gedachten?",
                      "titleStart": "Vertel ons het probleem.",
                      "titleHighlight": "Wij helpen het systeem vorm te geven.",
                      "description": "Of het nu gaat om een website, softwareproduct, interne workflow of AI-automatisering: het gesprek kan beginnen bij wat je bedrijf vertraagt.",
                      "button": "Bespreek je project"
              }
      },

      solutionsPage: {
              "hero": {
                      "eyebrow": "Oplossingen",
                      "titleStart": "Zet losse bedrijfsstappen om in",
                      "titleHighlight": "één werkend systeem.",
                      "description": "BuiltV ontwerpt praktische digitale systemen rond de workflows die bedrijven elke dag gebruiken — van de eerste aanvraag tot betaling en opvolging.",
                      "discussWorkflow": "Bespreek je workflow",
                      "exploreSolutions": "Oplossingen bekijken"
              },
              "workflows": {
                      "eyebrow": "Bedrijfsworkflows",
                      "titleStart": "Systemen ontworpen rond",
                      "titleHighlight": "echte operationele stappen."
              },
              "canInclude": "Kan bevatten",
              "items": {
                      "lead": {
                              "title": "Lead- & aanvraagsystemen",
                              "description": "Leg aanvragen vast, kwalificeer leads en verplaats kansen naar een duidelijker verkoopproces.",
                              "flow": {
                                      "enquiry": "Aanvraag",
                                      "qualification": "Kwalificatie",
                                      "followUp": "Opvolging",
                                      "proposal": "Voorstel",
                                      "customer": "Klant"
                              },
                              "includes": {
                                      "leadCaptureForms": "Leadformulieren",
                                      "crmIntegrations": "CRM-integraties",
                                      "leadQualification": "Leadkwalificatie",
                                      "followUpWorkflows": "Opvolgworkflows",
                                      "salesNotifications": "Verkoopmeldingen"
                              }
                      },
                      "booking": {
                              "title": "Boeking & planning",
                              "description": "Maak van beschikbaarheid, afspraken en planning één verbonden klantervaring.",
                              "flow": {
                                      "availability": "Beschikbaarheid",
                                      "booking": "Boeking",
                                      "confirmation": "Bevestiging",
                                      "reminder": "Herinnering",
                                      "service": "Dienst"
                              },
                              "includes": {
                                      "appointmentBooking": "Afspraken boeken",
                                      "availabilityManagement": "Beschikbaarheid beheren",
                                      "automatedReminders": "Automatische herinneringen",
                                      "reschedulingWorkflows": "Herverplaatsingsworkflows",
                                      "teamScheduling": "Teamplanning"
                              }
                      },
                      "quote": {
                              "title": "Offerte- & voorstelsystemen",
                              "description": "Maak een soepelere route van klantvraag naar offerte, goedkeuring en bevestigd werk.",
                              "flow": {
                                      "request": "Aanvraag",
                                      "quote": "Offerte",
                                      "review": "Beoordeling",
                                      "approval": "Goedkeuring",
                                      "job": "Opdracht"
                              },
                              "includes": {
                                      "quoteGeneration": "Offertes genereren",
                                      "proposalWorkflows": "Voorstelworkflows",
                                      "approvalTracking": "Goedkeuring volgen",
                                      "customerPortals": "Klantportalen",
                                      "documentAutomation": "Documentautomatisering"
                              }
                      },
                      "operations": {
                              "title": "Operations & taakbeheer",
                              "description": "Verbind opdrachten, teams, statusupdates en operationele informatie zonder te vertrouwen op losse tools.",
                              "flow": {
                                      "job": "Opdracht",
                                      "assignment": "Toewijzing",
                                      "work": "Werk",
                                      "proof": "Bewijs",
                                      "completion": "Voltooiing"
                              },
                              "includes": {
                                      "operationsDashboards": "Operationele dashboards",
                                      "jobTracking": "Opdrachten volgen",
                                      "teamAssignment": "Teamtoewijzing",
                                      "statusWorkflows": "Statusworkflows",
                                      "internalNotifications": "Interne meldingen"
                              }
                      },
                      "payments": {
                              "title": "Betalingen & facturatie",
                              "description": "Verbind voltooid werk met betaling, facturatie en opvolging met minder handmatige administratie.",
                              "flow": {
                                      "work": "Werk",
                                      "invoice": "Factuur",
                                      "payment": "Betaling",
                                      "receipt": "Ontvangstbewijs",
                                      "followUp": "Opvolging"
                              },
                              "includes": {
                                      "paymentIntegrations": "Betalingsintegraties",
                                      "invoiceWorkflows": "Factuurworkflows",
                                      "paymentStatusTracking": "Betalingsstatus volgen",
                                      "receiptAutomation": "Ontvangstautomatisering",
                                      "billingDashboards": "Facturatiedashboards"
                              }
                      },
                      "ai": {
                              "title": "AI- & automatiseringssystemen",
                              "description": "Gebruik AI waar het echte operationele waarde creëert in plaats van nog een los hulpmiddel toe te voegen.",
                              "flow": {
                                      "input": "Input",
                                      "ai": "AI",
                                      "decision": "Beslissing",
                                      "action": "Actie",
                                      "review": "Beoordeling"
                              },
                              "includes": {
                                      "aiAssistants": "AI-assistenten",
                                      "supportAutomation": "Supportautomatisering",
                                      "leadQualification": "Leadkwalificatie",
                                      "internalAiTools": "Interne AI-tools",
                                      "workflowAutomation": "Workflowautomatisering"
                              }
                      }
              },
              "connected": {
                      "eyebrow": "Verbonden operations",
                      "titleStart": "Eén workflow is nuttig.",
                      "titleHighlight": "Verbonden workflows zijn beter.",
                      "description": "De sterkste systemen verbinden klantgerichte stappen met het operationele werk achter de schermen.",
                      "steps": {
                              "customerEnquiry": "Klantaanvraag",
                              "quoteApproval": "Offerte & goedkeuring",
                              "bookingScheduling": "Boeking & planning",
                              "teamAssignment": "Teamtoewijzing",
                              "workCompletion": "Werk voltooid",
                              "paymentFollowUp": "Betaling & opvolging"
                      }
              },
              "audience": {
                      "eyebrow": "Voor wie dit is",
                      "titleStart": "Gebouwd voor bedrijven met",
                      "titleHighlight": "operationele complexiteit.",
                      "exploreServices": "Bekijk onze diensten",
                      "items": {
                              "serviceBusinesses": {
                                      "title": "Servicebedrijven",
                                      "text": "Verbonden systemen voor aanvragen, offertes, boekingen, opdrachten en betalingen."
                              },
                              "professionalServices": {
                                      "title": "Professionele diensten",
                                      "text": "Betere klantworkflows van leadgeneratie tot levering en facturatie."
                              },
                              "fieldOperations": {
                                      "title": "Buitendienst",
                                      "text": "Tools voor teams die opdrachten, medewerkers, werkbewijs en klantupdates beheren."
                              },
                              "growingCompanies": {
                                      "title": "Groeiende bedrijven",
                                      "text": "Maatwerk interne systemen voor bedrijven die spreadsheets en handmatige processen ontgroeien."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Begin met de workflow",
                      "titleStart": "Laat zien waar het proces vastloopt.",
                      "titleHighlight": "Wij ontwerpen wat het verbindt.",
                      "description": "Je hoeft niet te weten welke software je nodig hebt. Begin bij het bedrijfsproces, knelpunt of handmatige werk dat verbetering nodig heeft.",
                      "button": "Bespreek je workflow"
              }
      },

      workPage: {
              "hero": {
                      "eyebrow": "Geselecteerd werk",
                      "titleStart": "Producten gebouwd om",
                      "titleHighlight": "problemen om te zetten in systemen.",
                      "description": "Een selectie van producten rond zorgworkflows, AI, developer tooling en betrouwbare digitale ervaringen.",
                      "button": "Bouw iets met ons"
              },
              "projects": {
                      "mineQueue": {
                              "category": "Zorgsoftware",
                              "headline": "Afspraken boeken met betrouwbaarheid als basis.",
                              "description": "Een realtime platform voor doktersafspraken dat het vinden van artsen, controleren van beschikbaarheid en boeken eenvoudiger maakt en boekingsconflicten helpt voorkomen.",
                              "features": {
                                      "scheduling": {
                                              "title": "Planning",
                                              "text": "Artsbeschikbaarheid en afspraakworkflows ontworpen rond echte boekingssituaties."
                                      },
                                      "bookingReliability": {
                                              "title": "Betrouwbare boekingen",
                                              "text": "Logica ontworpen om conflicterende afspraken en dubbele boekingen te verminderen."
                                      },
                                      "connectedBackend": {
                                              "title": "Verbonden backend",
                                              "text": "Gebruikers, schema’s en boekingen verbonden via een gestructureerde API- en databaselaag."
                                      }
                              }
                      },
                      "triage": {
                              "category": "AI-ontwikkelaarsplatform",
                              "headline": "Een duidelijkere weg van fout naar begrip.",
                              "description": "Een AI-gestuurd debuggingplatform dat code, fouten en context samenbrengt in één gerichte workspace zodat ontwikkelaars problemen sneller kunnen onderzoeken.",
                              "features": {
                                      "aiAssistance": {
                                              "title": "AI-assistentie",
                                              "text": "Een conversationele debuggingworkflow rond ontwikkelaarscontext en technische problemen."
                                      },
                                      "codeContext": {
                                              "title": "Codecontext",
                                              "text": "Ondersteuning om code, fouten en ontwikkelcontext in hetzelfde onderzoek samen te brengen."
                                      },
                                      "focusedWorkflow": {
                                              "title": "Gerichte workflow",
                                              "text": "Een productervaring ontworpen om minder tussen losse debuggingtools te hoeven schakelen."
                                      }
                              }
                      }
              },
              "visual": {
                      "mineQueue": {
                              "dashboard": "Afsprakendashboard",
                              "doctors": "Artsen",
                              "bookings": "Boekingen",
                              "schedules": "Schema’s",
                              "upcoming": "Komende afspraak",
                              "bookingWorkflow": "Boekingsworkflow",
                              "confirmed": "Bevestigd"
                      },
                      "triage": {
                              "workspace": "Triage debuggingworkspace",
                              "debugIssue": "Debug dit probleem",
                              "context": "Code + fout + context",
                              "assistant": "AI-debuggingassistent"
                      }
              },
              "discussSimilar": "Bespreek een vergelijkbaar project",
              "thinking": {
                      "eyebrow": "Hoe we denken",
                      "titleStart": "Goede software begint met",
                      "titleHighlight": "de workflow.",
                      "description": "We richten ons op wat gebruikers willen bereiken, waar operationele wrijving ontstaat en welke delen van het systeem betrouwbaar moeten blijven terwijl het gebruik groeit.",
                      "exploreCapabilities": "Bekijk onze capaciteiten"
              },
              "cta": {
                      "eyebrow": "Jouw project kan de volgende zijn",
                      "titleStart": "Heb je een nuttig systeem",
                      "titleHighlight": "dat het bouwen waard is?",
                      "description": "Breng de workflow, het idee of bedrijfsprobleem mee. Wij helpen het om te zetten in een duidelijke productrichting en werkend digitaal systeem.",
                      "button": "Start een project"
              }
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

      servicesPage: {
              "hero": {
                      "eyebrow": "Services",
                      "titleStart": "Des systèmes numériques conçus autour de",
                      "titleHighlight": "la façon dont votre entreprise fonctionne.",
                      "description": "BuiltV combine design produit, ingénierie logicielle, IA et automatisation pour transformer les problèmes métier en systèmes numériques utiles.",
                      "startProject": "Démarrer un projet",
                      "exploreServices": "Découvrir les services"
              },
              "capabilities": {
                      "eyebrow": "Compétences clés",
                      "title": "Un seul studio pour les systèmes dont votre entreprise a besoin."
              },
              "items": {
                      "web": {
                              "title": "Expériences Web",
                              "description": "Des sites web performants et des expériences numériques conçus pour communiquer clairement, mieux convertir et offrir une qualité premium sur tous les écrans.",
                              "deliverables": {
                                      "marketingWebsites": "Sites web marketing",
                                      "landingPages": "Pages de destination",
                                      "corporateWebsites": "Sites web d’entreprise",
                                      "responsiveInterfaces": "Interfaces responsives",
                                      "performanceOptimisation": "Optimisation des performances",
                                      "cmsIntegrations": "Intégrations CMS"
                              }
                      },
                      "software": {
                              "title": "Logiciels & SaaS",
                              "description": "Des logiciels sur mesure construits autour de workflows réels, des utilisateurs et des besoins métier, plutôt que d’imposer des outils génériques à votre équipe.",
                              "deliverables": {
                                      "saasProducts": "Produits SaaS",
                                      "adminDashboards": "Tableaux de bord administrateur",
                                      "clientPortals": "Portails clients",
                                      "internalPlatforms": "Plateformes internes",
                                      "authenticationSystems": "Systèmes d’authentification",
                                      "apiIntegrations": "Intégrations API"
                              }
                      },
                      "systems": {
                              "title": "Systèmes d'entreprise",
                              "description": "Des systèmes opérationnels connectés qui remplacent les tâches répétitives, les feuilles de calcul fragmentées et les processus déconnectés.",
                              "deliverables": {
                                      "bookingSystems": "Systèmes de réservation",
                                      "quotingWorkflows": "Workflows de devis",
                                      "schedulingSystems": "Systèmes de planification",
                                      "operationsDashboards": "Tableaux de bord opérationnels",
                                      "paymentWorkflows": "Workflows de paiement",
                                      "crmIntegrations": "Intégrations CRM"
                              }
                      },
                      "ai": {
                              "title": "IA & Automatisation",
                              "description": "Une IA et une automatisation pratiques conçues pour réduire le travail manuel, accélérer les décisions et améliorer la circulation de l’information dans votre entreprise.",
                              "deliverables": {
                                      "aiAssistants": "Assistants IA",
                                      "workflowAutomation": "Automatisation des workflows",
                                      "leadQualification": "Qualification des prospects",
                                      "supportAutomation": "Automatisation du support",
                                      "aiInternalTools": "Outils internes alimentés par l’IA",
                                      "llmIntegrations": "Intégrations LLM"
                              }
                      },
                      "engineering": {
                              "title": "Ingénierie produit",
                              "description": "Frontend, backend, API, bases de données et intégrations conçus comme une base produit fiable et évolutive.",
                              "deliverables": {
                                      "frontendEngineering": "Ingénierie frontend",
                                      "backendSystems": "Systèmes backend",
                                      "restApis": "API REST",
                                      "databaseArchitecture": "Architecture de base de données",
                                      "thirdPartyIntegrations": "Intégrations tierces",
                                      "deploymentSetup": "Configuration du déploiement"
                              }
                      }
              },
              "engagement": {
                      "eyebrow": "Notre mode de collaboration",
                      "title": "Commencez là où votre entreprise se trouve aujourd'hui.",
                      "description": "Vous n’avez pas besoin d’un cahier des charges technique parfaitement défini. Apportez le problème, le workflow ou l’idée produit et nous construirons la bonne approche.",
                      "models": {
                              "newProduct": {
                                      "title": "Nouveau produit",
                                      "text": "D’une première idée à un produit utilisable, un MVP ou une plateforme numérique complète."
                              },
                              "existingSystem": {
                                      "title": "Système existant",
                                      "text": "Améliorer, reconstruire ou étendre un produit existant devenu difficile à utiliser ou à maintenir."
                              },
                              "automationProject": {
                                      "title": "Projet d'automatisation",
                                      "text": "Identifier les workflows répétitifs et les transformer en systèmes automatisés connectés."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Vous avez quelque chose de précis en tête ?",
                      "titleStart": "Expliquez-nous le problème.",
                      "titleHighlight": "Nous vous aiderons à concevoir le système.",
                      "description": "Qu’il s’agisse d’un site web, d’un logiciel, d’un workflow interne ou d’une automatisation IA, la discussion peut commencer par ce qui ralentit votre entreprise.",
                      "button": "Discuter de votre projet"
              }
      },

      solutionsPage: {
              "hero": {
                      "eyebrow": "Solutions",
                      "titleStart": "Transformez des étapes métier déconnectées en",
                      "titleHighlight": "un seul système fonctionnel.",
                      "description": "BuiltV conçoit des systèmes numériques pratiques autour des workflows utilisés chaque jour par les entreprises — de la première demande au paiement et au suivi.",
                      "discussWorkflow": "Discuter de votre workflow",
                      "exploreSolutions": "Découvrir les solutions"
              },
              "workflows": {
                      "eyebrow": "Workflows métier",
                      "titleStart": "Des systèmes conçus autour de",
                      "titleHighlight": "étapes opérationnelles réelles."
              },
              "canInclude": "Peut inclure",
              "items": {
                      "lead": {
                              "title": "Systèmes de prospects et demandes",
                              "description": "Capturez les demandes, qualifiez les prospects et faites progresser les opportunités dans un workflow commercial plus clair.",
                              "flow": {
                                      "enquiry": "Demande",
                                      "qualification": "Qualification",
                                      "followUp": "Suivi",
                                      "proposal": "Proposition",
                                      "customer": "Client"
                              },
                              "includes": {
                                      "leadCaptureForms": "Formulaires de capture de prospects",
                                      "crmIntegrations": "Intégrations CRM",
                                      "leadQualification": "Qualification des prospects",
                                      "followUpWorkflows": "Workflows de suivi",
                                      "salesNotifications": "Notifications commerciales"
                              }
                      },
                      "booking": {
                              "title": "Réservation & planification",
                              "description": "Transformez disponibilités, rendez-vous et planification en une expérience client connectée.",
                              "flow": {
                                      "availability": "Disponibilité",
                                      "booking": "Réservation",
                                      "confirmation": "Confirmation",
                                      "reminder": "Rappel",
                                      "service": "Service"
                              },
                              "includes": {
                                      "appointmentBooking": "Prise de rendez-vous",
                                      "availabilityManagement": "Gestion des disponibilités",
                                      "automatedReminders": "Rappels automatisés",
                                      "reschedulingWorkflows": "Workflows de replanification",
                                      "teamScheduling": "Planification d’équipe"
                              }
                      },
                      "quote": {
                              "title": "Systèmes de devis & propositions",
                              "description": "Créez un parcours plus fluide du besoin client au devis, à l’approbation et au travail confirmé.",
                              "flow": {
                                      "request": "Demande",
                                      "quote": "Devis",
                                      "review": "Révision",
                                      "approval": "Approbation",
                                      "job": "Mission"
                              },
                              "includes": {
                                      "quoteGeneration": "Génération de devis",
                                      "proposalWorkflows": "Workflows de propositions",
                                      "approvalTracking": "Suivi des approbations",
                                      "customerPortals": "Portails clients",
                                      "documentAutomation": "Automatisation des documents"
                              }
                      },
                      "operations": {
                              "title": "Opérations & gestion des missions",
                              "description": "Connectez missions, équipes, statuts et informations opérationnelles sans dépendre d’outils fragmentés.",
                              "flow": {
                                      "job": "Mission",
                                      "assignment": "Affectation",
                                      "work": "Travail",
                                      "proof": "Preuve",
                                      "completion": "Achèvement"
                              },
                              "includes": {
                                      "operationsDashboards": "Tableaux de bord opérationnels",
                                      "jobTracking": "Suivi des missions",
                                      "teamAssignment": "Affectation de l’équipe",
                                      "statusWorkflows": "Workflows de statut",
                                      "internalNotifications": "Notifications internes"
                              }
                      },
                      "payments": {
                              "title": "Paiements & facturation",
                              "description": "Reliez le travail terminé au paiement, à la facturation et au suivi avec moins d’administration manuelle.",
                              "flow": {
                                      "work": "Travail",
                                      "invoice": "Facture",
                                      "payment": "Paiement",
                                      "receipt": "Reçu",
                                      "followUp": "Suivi"
                              },
                              "includes": {
                                      "paymentIntegrations": "Intégrations de paiement",
                                      "invoiceWorkflows": "Workflows de facturation",
                                      "paymentStatusTracking": "Suivi du statut de paiement",
                                      "receiptAutomation": "Automatisation des reçus",
                                      "billingDashboards": "Tableaux de bord de facturation"
                              }
                      },
                      "ai": {
                              "title": "Systèmes IA & automatisation",
                              "description": "Utilisez l’IA là où elle crée une vraie valeur opérationnelle au lieu d’ajouter un outil déconnecté.",
                              "flow": {
                                      "input": "Entrée",
                                      "ai": "IA",
                                      "decision": "Décision",
                                      "action": "Action",
                                      "review": "Révision"
                              },
                              "includes": {
                                      "aiAssistants": "Assistants IA",
                                      "supportAutomation": "Automatisation du support",
                                      "leadQualification": "Qualification des prospects",
                                      "internalAiTools": "Outils IA internes",
                                      "workflowAutomation": "Automatisation des workflows"
                              }
                      }
              },
              "connected": {
                      "eyebrow": "Opérations connectées",
                      "titleStart": "Un workflow est utile.",
                      "titleHighlight": "Des workflows connectés sont encore meilleurs.",
                      "description": "Les meilleurs systèmes relient les étapes côté client au travail opérationnel réalisé en coulisses.",
                      "steps": {
                              "customerEnquiry": "Demande client",
                              "quoteApproval": "Devis & approbation",
                              "bookingScheduling": "Réservation & planification",
                              "teamAssignment": "Affectation de l’équipe",
                              "workCompletion": "Fin du travail",
                              "paymentFollowUp": "Paiement & suivi"
                      }
              },
              "audience": {
                      "eyebrow": "À qui cela s'adresse",
                      "titleStart": "Conçu pour les entreprises avec",
                      "titleHighlight": "une complexité opérationnelle.",
                      "exploreServices": "Découvrir nos services",
                      "items": {
                              "serviceBusinesses": {
                                      "title": "Entreprises de services",
                                      "text": "Des systèmes connectés pour les demandes, devis, réservations, missions et paiements."
                              },
                              "professionalServices": {
                                      "title": "Services professionnels",
                                      "text": "De meilleurs workflows clients, de la génération de prospects à la livraison et à la facturation."
                              },
                              "fieldOperations": {
                                      "title": "Opérations terrain",
                                      "text": "Des outils pour les équipes qui gèrent les missions, les intervenants, les preuves de travail et les mises à jour clients."
                              },
                              "growingCompanies": {
                                      "title": "Entreprises en croissance",
                                      "text": "Des systèmes internes sur mesure pour les entreprises qui dépassent les limites des feuilles de calcul et des processus manuels."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Commencez par le workflow",
                      "titleStart": "Montrez-nous où le processus se bloque.",
                      "titleHighlight": "Nous concevrons ce qui le relie.",
                      "description": "Vous n’avez pas besoin de savoir quel logiciel il vous faut. Commencez par le processus métier, le blocage ou le travail manuel à améliorer.",
                      "button": "Discuter de votre workflow"
              }
      },

      workPage: {
              "hero": {
                      "eyebrow": "Projets sélectionnés",
                      "titleStart": "Des produits conçus pour transformer",
                      "titleHighlight": "les problèmes en systèmes.",
                      "description": "Une sélection de produits autour des workflows de santé, de l’IA, des outils pour développeurs et d’expériences numériques fiables.",
                      "button": "Construire quelque chose avec nous"
              },
              "projects": {
                      "mineQueue": {
                              "category": "Logiciel de santé",
                              "headline": "Une réservation de rendez-vous conçue autour de la fiabilité.",
                              "description": "Une plateforme de rendez-vous médicaux en temps réel conçue pour simplifier la recherche de médecins, la vérification des disponibilités et la réservation, tout en protégeant le flux contre les conflits.",
                              "features": {
                                      "scheduling": {
                                              "title": "Planification",
                                              "text": "Disponibilités des médecins et workflows de rendez-vous conçus autour de scénarios de réservation réels."
                                      },
                                      "bookingReliability": {
                                              "title": "Fiabilité des réservations",
                                              "text": "Une logique conçue pour réduire les conflits de rendez-vous et les doubles réservations."
                                      },
                                      "connectedBackend": {
                                              "title": "Backend connecté",
                                              "text": "Utilisateurs, plannings et réservations reliés par une couche API et base de données structurée."
                                      }
                              }
                      },
                      "triage": {
                              "category": "Plateforme IA pour développeurs",
                              "headline": "Une manière plus claire de passer de l’erreur à la compréhension.",
                              "description": "Une plateforme de débogage pour développeurs alimentée par l’IA, conçue pour réunir code, erreurs et contexte dans un espace de travail ciblé afin d’accélérer l’analyse des problèmes.",
                              "features": {
                                      "aiAssistance": {
                                              "title": "Assistance IA",
                                              "text": "Un workflow de débogage conversationnel conçu autour du contexte développeur et des problèmes techniques."
                                      },
                                      "codeContext": {
                                              "title": "Contexte du code",
                                              "text": "Un support permettant de réunir le code, les erreurs et le contexte de développement dans la même analyse."
                                      },
                                      "focusedWorkflow": {
                                              "title": "Workflow ciblé",
                                              "text": "Une expérience produit conçue pour réduire les allers-retours entre des outils de débogage déconnectés."
                                      }
                              }
                      }
              },
              "visual": {
                      "mineQueue": {
                              "dashboard": "Tableau de bord des rendez-vous",
                              "doctors": "Médecins",
                              "bookings": "Réservations",
                              "schedules": "Plannings",
                              "upcoming": "Prochain rendez-vous",
                              "bookingWorkflow": "Workflow de réservation",
                              "confirmed": "Confirmé"
                      },
                      "triage": {
                              "workspace": "Espace de débogage Triage",
                              "debugIssue": "Déboguer ce problème",
                              "context": "Code + erreur + contexte",
                              "assistant": "Assistant de débogage IA"
                      }
              },
              "discussSimilar": "Discuter d’un projet similaire",
              "thinking": {
                      "eyebrow": "Notre approche",
                      "titleStart": "Un bon logiciel commence par",
                      "titleHighlight": "le workflow.",
                      "description": "Nous nous concentrons sur les objectifs des utilisateurs, les frictions opérationnelles et les parties du système qui doivent rester fiables à mesure que l’usage augmente.",
                      "exploreCapabilities": "Découvrir nos compétences"
              },
              "cta": {
                      "eyebrow": "Votre projet pourrait être le prochain",
                      "titleStart": "Vous avez un système utile",
                      "titleHighlight": "qui mérite d’être construit ?",
                      "description": "Apportez le workflow, l’idée ou le problème métier. Nous vous aiderons à le transformer en direction produit claire et en système numérique fonctionnel.",
                      "button": "Démarrer un projet"
              }
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

      servicesPage: {
              "hero": {
                      "eyebrow": "Servicios",
                      "titleStart": "Sistemas digitales construidos alrededor de",
                      "titleHighlight": "cómo funciona tu negocio.",
                      "description": "BuiltV combina diseño de producto, ingeniería de software, IA y automatización para convertir problemas empresariales en sistemas digitales útiles.",
                      "startProject": "Iniciar un proyecto",
                      "exploreServices": "Explorar servicios"
              },
              "capabilities": {
                      "eyebrow": "Capacidades principales",
                      "title": "Un solo estudio para los sistemas que tu negocio necesita."
              },
              "items": {
                      "web": {
                              "title": "Experiencias Web",
                              "description": "Sitios web de alto rendimiento y experiencias digitales diseñadas para comunicar con claridad, convertir mejor y sentirse premium en cualquier pantalla.",
                              "deliverables": {
                                      "marketingWebsites": "Sitios web de marketing",
                                      "landingPages": "Landing pages",
                                      "corporateWebsites": "Sitios web corporativos",
                                      "responsiveInterfaces": "Interfaces responsivas",
                                      "performanceOptimisation": "Optimización de rendimiento",
                                      "cmsIntegrations": "Integraciones CMS"
                              }
                      },
                      "software": {
                              "title": "Software & SaaS",
                              "description": "Productos de software a medida construidos alrededor de flujos reales, usuarios y requisitos de negocio, en lugar de obligar a tu equipo a usar herramientas genéricas.",
                              "deliverables": {
                                      "saasProducts": "Productos SaaS",
                                      "adminDashboards": "Paneles de administración",
                                      "clientPortals": "Portales de clientes",
                                      "internalPlatforms": "Plataformas internas",
                                      "authenticationSystems": "Sistemas de autenticación",
                                      "apiIntegrations": "Integraciones API"
                              }
                      },
                      "systems": {
                              "title": "Sistemas Empresariales",
                              "description": "Sistemas operativos conectados que reemplazan trabajo repetitivo, hojas de cálculo fragmentadas y procesos desconectados.",
                              "deliverables": {
                                      "bookingSystems": "Sistemas de reservas",
                                      "quotingWorkflows": "Flujos de presupuestos",
                                      "schedulingSystems": "Sistemas de planificación",
                                      "operationsDashboards": "Paneles operativos",
                                      "paymentWorkflows": "Flujos de pago",
                                      "crmIntegrations": "Integraciones CRM"
                              }
                      },
                      "ai": {
                              "title": "IA & Automatización",
                              "description": "IA y automatización prácticas para reducir trabajo manual, acelerar decisiones y mejorar cómo fluye la información por tu negocio.",
                              "deliverables": {
                                      "aiAssistants": "Asistentes de IA",
                                      "workflowAutomation": "Automatización de flujos",
                                      "leadQualification": "Calificación de leads",
                                      "supportAutomation": "Automatización de soporte",
                                      "aiInternalTools": "Herramientas internas con IA",
                                      "llmIntegrations": "Integraciones LLM"
                              }
                      },
                      "engineering": {
                              "title": "Ingeniería de Producto",
                              "description": "Frontend, backend, APIs, bases de datos e integraciones diseñados como una base de producto fiable que puede seguir evolucionando.",
                              "deliverables": {
                                      "frontendEngineering": "Ingeniería frontend",
                                      "backendSystems": "Sistemas backend",
                                      "restApis": "APIs REST",
                                      "databaseArchitecture": "Arquitectura de base de datos",
                                      "thirdPartyIntegrations": "Integraciones de terceros",
                                      "deploymentSetup": "Configuración de despliegue"
                              }
                      }
              },
              "engagement": {
                      "eyebrow": "Cómo colaboramos",
                      "title": "Empieza donde está tu negocio hoy.",
                      "description": "No necesitas un briefing técnico perfectamente definido. Trae el problema, flujo o idea de producto y podemos diseñar el enfoque adecuado.",
                      "models": {
                              "newProduct": {
                                      "title": "Nuevo producto",
                                      "text": "Desde una idea inicial hasta un producto usable, MVP o plataforma digital completa."
                              },
                              "existingSystem": {
                                      "title": "Sistema existente",
                                      "text": "Mejora, reconstruye o amplía un producto existente que se ha vuelto difícil de usar o mantener."
                              },
                              "automationProject": {
                                      "title": "Proyecto de automatización",
                                      "text": "Identifica flujos repetitivos y conviértelos en sistemas automatizados conectados."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "¿Tienes algo específico en mente?",
                      "titleStart": "Cuéntanos el problema.",
                      "titleHighlight": "Te ayudaremos a diseñar el sistema.",
                      "description": "Ya sea un sitio web, software, flujo interno o automatización con IA, la conversación puede empezar por lo que está frenando tu negocio.",
                      "button": "Hablar de tu proyecto"
              }
      },

      solutionsPage: {
              "hero": {
                      "eyebrow": "Soluciones",
                      "titleStart": "Convierte pasos de negocio desconectados en",
                      "titleHighlight": "un único sistema funcional.",
                      "description": "BuiltV diseña sistemas digitales prácticos alrededor de los flujos que las empresas usan cada día — desde la primera consulta hasta el pago y seguimiento.",
                      "discussWorkflow": "Hablar de tu flujo de trabajo",
                      "exploreSolutions": "Explorar soluciones"
              },
              "workflows": {
                      "eyebrow": "Flujos de negocio",
                      "titleStart": "Sistemas diseñados alrededor de",
                      "titleHighlight": "pasos operativos reales."
              },
              "canInclude": "Puede incluir",
              "items": {
                      "lead": {
                              "title": "Sistemas de leads y consultas",
                              "description": "Captura consultas, califica leads y mueve oportunidades a un flujo comercial más claro.",
                              "flow": {
                                      "enquiry": "Consulta",
                                      "qualification": "Calificación",
                                      "followUp": "Seguimiento",
                                      "proposal": "Propuesta",
                                      "customer": "Cliente"
                              },
                              "includes": {
                                      "leadCaptureForms": "Formularios de captura de leads",
                                      "crmIntegrations": "Integraciones CRM",
                                      "leadQualification": "Calificación de leads",
                                      "followUpWorkflows": "Flujos de seguimiento",
                                      "salesNotifications": "Notificaciones de ventas"
                              }
                      },
                      "booking": {
                              "title": "Reservas y planificación",
                              "description": "Convierte disponibilidad, citas y planificación en una experiencia de cliente conectada.",
                              "flow": {
                                      "availability": "Disponibilidad",
                                      "booking": "Reserva",
                                      "confirmation": "Confirmación",
                                      "reminder": "Recordatorio",
                                      "service": "Servicio"
                              },
                              "includes": {
                                      "appointmentBooking": "Reserva de citas",
                                      "availabilityManagement": "Gestión de disponibilidad",
                                      "automatedReminders": "Recordatorios automáticos",
                                      "reschedulingWorkflows": "Flujos de reprogramación",
                                      "teamScheduling": "Planificación de equipo"
                              }
                      },
                      "quote": {
                              "title": "Sistemas de presupuestos y propuestas",
                              "description": "Crea un camino más fluido desde la necesidad del cliente hasta el presupuesto, aprobación y trabajo confirmado.",
                              "flow": {
                                      "request": "Solicitud",
                                      "quote": "Presupuesto",
                                      "review": "Revisión",
                                      "approval": "Aprobación",
                                      "job": "Trabajo"
                              },
                              "includes": {
                                      "quoteGeneration": "Generación de presupuestos",
                                      "proposalWorkflows": "Flujos de propuestas",
                                      "approvalTracking": "Seguimiento de aprobaciones",
                                      "customerPortals": "Portales de clientes",
                                      "documentAutomation": "Automatización de documentos"
                              }
                      },
                      "operations": {
                              "title": "Operaciones y gestión de trabajos",
                              "description": "Conecta trabajos, equipos, estados e información operativa sin depender de herramientas fragmentadas.",
                              "flow": {
                                      "job": "Trabajo",
                                      "assignment": "Asignación",
                                      "work": "Trabajo",
                                      "proof": "Prueba",
                                      "completion": "Finalización"
                              },
                              "includes": {
                                      "operationsDashboards": "Paneles operativos",
                                      "jobTracking": "Seguimiento de trabajos",
                                      "teamAssignment": "Asignación de equipo",
                                      "statusWorkflows": "Flujos de estado",
                                      "internalNotifications": "Notificaciones internas"
                              }
                      },
                      "payments": {
                              "title": "Pagos y facturación",
                              "description": "Conecta el trabajo completado con pago, facturación y seguimiento con menos administración manual.",
                              "flow": {
                                      "work": "Trabajo",
                                      "invoice": "Factura",
                                      "payment": "Pago",
                                      "receipt": "Recibo",
                                      "followUp": "Seguimiento"
                              },
                              "includes": {
                                      "paymentIntegrations": "Integraciones de pago",
                                      "invoiceWorkflows": "Flujos de facturación",
                                      "paymentStatusTracking": "Seguimiento del estado de pago",
                                      "receiptAutomation": "Automatización de recibos",
                                      "billingDashboards": "Paneles de facturación"
                              }
                      },
                      "ai": {
                              "title": "Sistemas de IA y automatización",
                              "description": "Usa IA donde aporte valor operativo real en lugar de añadir otra herramienta desconectada.",
                              "flow": {
                                      "input": "Entrada",
                                      "ai": "IA",
                                      "decision": "Decisión",
                                      "action": "Acción",
                                      "review": "Revisión"
                              },
                              "includes": {
                                      "aiAssistants": "Asistentes de IA",
                                      "supportAutomation": "Automatización de soporte",
                                      "leadQualification": "Calificación de leads",
                                      "internalAiTools": "Herramientas internas de IA",
                                      "workflowAutomation": "Automatización de flujos"
                              }
                      }
              },
              "connected": {
                      "eyebrow": "Operaciones conectadas",
                      "titleStart": "Un flujo de trabajo es útil.",
                      "titleHighlight": "Los flujos conectados son mejores.",
                      "description": "Los mejores sistemas conectan los pasos de cara al cliente con el trabajo operativo que ocurre detrás.",
                      "steps": {
                              "customerEnquiry": "Consulta del cliente",
                              "quoteApproval": "Presupuesto y aprobación",
                              "bookingScheduling": "Reserva y planificación",
                              "teamAssignment": "Asignación de equipo",
                              "workCompletion": "Trabajo completado",
                              "paymentFollowUp": "Pago y seguimiento"
                      }
              },
              "audience": {
                      "eyebrow": "Para quién es",
                      "titleStart": "Construido para empresas con",
                      "titleHighlight": "complejidad operativa.",
                      "exploreServices": "Explorar nuestros servicios",
                      "items": {
                              "serviceBusinesses": {
                                      "title": "Empresas de servicios",
                                      "text": "Sistemas conectados para consultas, presupuestos, reservas, trabajos y pagos."
                              },
                              "professionalServices": {
                                      "title": "Servicios profesionales",
                                      "text": "Mejores flujos de cliente desde la generación de leads hasta la entrega y facturación."
                              },
                              "fieldOperations": {
                                      "title": "Operaciones de campo",
                                      "text": "Herramientas para equipos que gestionan trabajos, personal, pruebas de trabajo y actualizaciones para clientes."
                              },
                              "growingCompanies": {
                                      "title": "Empresas en crecimiento",
                                      "text": "Sistemas internos a medida para empresas que están superando las hojas de cálculo y los procesos manuales."
                              }
                      }
              },
              "cta": {
                      "eyebrow": "Empieza por el flujo de trabajo",
                      "titleStart": "Muéstranos dónde falla el proceso.",
                      "titleHighlight": "Diseñaremos lo que lo conecte.",
                      "description": "No necesitas saber qué software necesitas. Empieza por el proceso, cuello de botella o trabajo manual que debe mejorar.",
                      "button": "Hablar de tu flujo de trabajo"
              }
      },

      workPage: {
              "hero": {
                      "eyebrow": "Proyectos seleccionados",
                      "titleStart": "Productos creados para convertir",
                      "titleHighlight": "problemas en sistemas.",
                      "description": "Una selección de productos sobre flujos de salud, IA, herramientas para desarrolladores y experiencias digitales fiables.",
                      "button": "Construye algo con nosotros"
              },
              "projects": {
                      "mineQueue": {
                              "category": "Software de salud",
                              "headline": "Reserva de citas diseñada alrededor de la fiabilidad.",
                              "description": "Una plataforma de citas médicas en tiempo real diseñada para simplificar la búsqueda de médicos, la consulta de disponibilidad y la reserva, protegiendo el flujo frente a conflictos.",
                              "features": {
                                      "scheduling": {
                                              "title": "Planificación",
                                              "text": "Disponibilidad de médicos y flujos de citas diseñados alrededor de situaciones reales de reserva."
                                      },
                                      "bookingReliability": {
                                              "title": "Fiabilidad de reservas",
                                              "text": "Lógica diseñada para reducir conflictos de citas y situaciones de doble reserva."
                                      },
                                      "connectedBackend": {
                                              "title": "Backend conectado",
                                              "text": "Usuarios, horarios y reservas conectados mediante una capa estructurada de API y base de datos."
                                      }
                              }
                      },
                      "triage": {
                              "category": "Plataforma de IA para desarrolladores",
                              "headline": "Una forma más clara de pasar del error a la comprensión.",
                              "description": "Una plataforma de depuración para desarrolladores con IA diseñada para reunir código, errores y contexto en un espacio de trabajo enfocado para investigar problemas más rápido.",
                              "features": {
                                      "aiAssistance": {
                                              "title": "Asistencia de IA",
                                              "text": "Un flujo de depuración conversacional diseñado alrededor del contexto del desarrollador y problemas técnicos."
                                      },
                                      "codeContext": {
                                              "title": "Contexto de código",
                                              "text": "Soporte para reunir código, errores y contexto de desarrollo dentro de la misma investigación."
                                      },
                                      "focusedWorkflow": {
                                              "title": "Flujo enfocado",
                                              "text": "Una experiencia de producto diseñada para reducir los saltos entre herramientas de depuración desconectadas."
                                      }
                              }
                      }
              },
              "visual": {
                      "mineQueue": {
                              "dashboard": "Panel de citas",
                              "doctors": "Médicos",
                              "bookings": "Reservas",
                              "schedules": "Horarios",
                              "upcoming": "Próxima cita",
                              "bookingWorkflow": "Flujo de reserva",
                              "confirmed": "Confirmado"
                      },
                      "triage": {
                              "workspace": "Espacio de depuración Triage",
                              "debugIssue": "Depurar este problema",
                              "context": "Código + error + contexto",
                              "assistant": "Asistente de depuración con IA"
                      }
              },
              "discussSimilar": "Hablar de un proyecto similar",
              "thinking": {
                      "eyebrow": "Cómo pensamos",
                      "titleStart": "El buen software empieza con",
                      "titleHighlight": "el flujo de trabajo.",
                      "description": "Nos centramos en lo que los usuarios intentan lograr, dónde existe fricción operativa y qué partes del sistema deben seguir siendo fiables a medida que crece el uso.",
                      "exploreCapabilities": "Explorar nuestras capacidades"
              },
              "cta": {
                      "eyebrow": "Tu proyecto podría ser el siguiente",
                      "titleStart": "¿Tienes un sistema útil",
                      "titleHighlight": "que merezca la pena construir?",
                      "description": "Trae el flujo, la idea o el problema empresarial. Podemos ayudarte a convertirlo en una dirección de producto clara y un sistema digital funcional.",
                      "button": "Iniciar un proyecto"
              }
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

const additionalPageResources = {
  "en": {
    "pricingPage": {
      "hero": {
        "eyebrow": "Pricing",
        "titleStart": "Clear scope before",
        "titleHighlight": "serious build work begins.",
        "description": "Every BuiltV project is shaped around the actual product, workflow and technical complexity instead of forcing every business into the same package.",
        "estimate": "Request a project estimate",
        "viewTypes": "View engagement types"
      },
      "engagements": {
        "eyebrow": "Engagement types",
        "titleStart": "Different projects need",
        "titleHighlight": "different scopes."
      },
      "mostFlexible": "Most flexible",
      "pricingLabel": "Pricing",
      "idealFor": "Ideal for",
      "discuss": "Discuss this project",
      "plans": {
        "web": {
          "label": "Focused build",
          "title": "Web Experience",
          "description": "For businesses that need a premium marketing website, landing experience or focused digital presence.",
          "price": "Scoped per project",
          "idealFor": "Websites, landing pages, redesigns",
          "features": [
            "Responsive product design",
            "Frontend development",
            "Performance optimisation",
            "Contact & conversion flows",
            "Basic integrations",
            "Deployment support"
          ]
        },
        "software": {
          "label": "Product build",
          "title": "Software & SaaS",
          "description": "For startups and businesses building dashboards, portals, internal software or complete SaaS products.",
          "price": "Custom project scope",
          "idealFor": "SaaS, dashboards, portals, MVPs",
          "features": [
            "Product architecture",
            "Frontend & backend",
            "Database design",
            "Authentication",
            "API integrations",
            "Deployment setup"
          ]
        },
        "automation": {
          "label": "Operations build",
          "title": "Automation & Systems",
          "description": "For businesses replacing repetitive workflows, disconnected tools and manual operational work.",
          "price": "Scoped by workflow",
          "idealFor": "Automation, operations, AI workflows",
          "features": [
            "Workflow discovery",
            "Automation design",
            "Business integrations",
            "AI integrations",
            "Internal dashboards",
            "Process documentation"
          ]
        }
      },
      "factors": {
        "eyebrow": "What affects pricing",
        "titleStart": "We price the work,",
        "titleHighlight": "not a generic package.",
        "description": "Two projects can look similar on the surface while requiring completely different levels of engineering underneath.",
        "items": {
          "scope": {
            "title": "Scope",
            "text": "The number of screens, workflows, roles and product features involved."
          },
          "complexity": {
            "title": "Technical complexity",
            "text": "Custom backend logic, APIs, integrations, data architecture and infrastructure."
          },
          "automation": {
            "title": "Automation depth",
            "text": "How many systems, business rules and automated actions need to work together."
          },
          "timeline": {
            "title": "Timeline",
            "text": "Delivery speed, launch requirements and whether the work needs to be phased."
          }
        }
      },
      "process": {
        "eyebrow": "How estimates work",
        "titleStart": "From business problem to",
        "titleHighlight": "clear project scope.",
        "steps": {
          "problem": {
            "title": "Tell us the problem",
            "text": "Share what you want to build or what is currently slowing the business down."
          },
          "scope": {
            "title": "We define the scope",
            "text": "We clarify the core workflows, required features and technical direction."
          },
          "proposal": {
            "title": "You receive a proposal",
            "text": "You get a clear project scope, delivery approach and commercial estimate."
          }
        }
      },
      "cta": {
        "eyebrow": "Need an estimate?",
        "titleStart": "Tell us what needs to be built.",
        "titleHighlight": "We'll help define the scope.",
        "description": "You can start with a product idea, workflow problem or existing system. A complete technical specification is not required.",
        "button": "Request an estimate"
      }
    },
    "aboutPage": {
      "hero": {
        "eyebrow": "About BuiltV",
        "titleStart": "We build digital systems for",
        "titleHighlight": "what's next.",
        "description": "BuiltV is a digital product studio focused on websites, software, business systems, AI and automation for ambitious companies that want better technology around the way they actually operate.",
        "start": "Start a project",
        "work": "See our work"
      },
      "why": {
        "eyebrow": "Why BuiltV exists",
        "titleStart": "Better systems make",
        "titleHighlight": "better businesses.",
        "paragraphs": [
          "Many businesses grow by adding more tools, more spreadsheets and more manual steps. Eventually the technology starts creating friction instead of removing it.",
          "BuiltV exists to design clearer digital systems around real workflows — systems that help customers move through the business smoothly and help teams operate with less unnecessary complexity.",
          "Sometimes that means a website. Sometimes it means a complete software product, internal platform or AI-powered workflow. The goal is not to build more technology. The goal is to build the right system."
        ]
      },
      "principles": {
        "eyebrow": "How we think",
        "titleStart": "Principles behind",
        "titleHighlight": "the products we build.",
        "items": {
          "problem": {
            "title": "Problem first",
            "text": "We start with the business problem, workflow and user need before deciding what technology should be built."
          },
          "systems": {
            "title": "Systems over fragments",
            "text": "We prefer connected workflows and reliable systems instead of adding another disconnected tool."
          },
          "engineering": {
            "title": "Engineering matters",
            "text": "Good product design needs dependable frontend, backend, APIs, databases and infrastructure underneath."
          },
          "trust": {
            "title": "Built to be trusted",
            "text": "We think about reliability, maintainability and how the product should behave when real users depend on it."
          }
        }
      },
      "studio": {
        "eyebrow": "One studio",
        "titleStart": "Design, software and automation",
        "titleHighlight": "under one roof.",
        "description": "Products work better when strategy, interface, backend systems and automation are designed as one connected experience."
      },
      "capabilities": {
        "web": "Web experiences",
        "software": "Software & SaaS",
        "systems": "Business systems",
        "ai": "AI & automation",
        "engineering": "Product engineering"
      },
      "global": {
        "eyebrow": "Built globally",
        "titleStart": "Digital products are global.",
        "titleHighlight": "So is our mindset.",
        "description": "BuiltV is designed to work with modern businesses across different markets, time zones and digital environments while keeping the product experience clear and consistent.",
        "markets": {
          "ireland": "Ireland",
          "uk": "United Kingdom",
          "netherlands": "Netherlands",
          "germany": "Germany",
          "europe": "Europe",
          "global": "Global"
        }
      },
      "cta": {
        "eyebrow": "Build with BuiltV",
        "titleStart": "Have a problem worth",
        "titleHighlight": "solving properly?",
        "description": "Tell us what your business is trying to improve, replace or build next. The conversation can start there.",
        "button": "Start a project"
      }
    },
    "insightsPage": {
      "hero": {
        "eyebrow": "Insights",
        "titleStart": "Thinking about software,",
        "titleHighlight": "systems and what comes next.",
        "description": "Ideas and practical thinking around digital products, business workflows, software engineering, AI and automation.",
        "explore": "Explore insights"
      },
      "featured": {
        "eyebrow": "Featured thinking",
        "titleStart": "Useful ideas for",
        "titleHighlight": "modern digital businesses.",
        "items": {
          "workflow": {
            "category": "Business Systems",
            "title": "When a business has too many tools, the real problem is usually the workflow.",
            "description": "Why disconnected software creates operational friction and how better systems can simplify the way work moves through a business."
          },
          "ai": {
            "category": "AI & Automation",
            "title": "AI creates value when it is connected to an actual business process.",
            "description": "Practical AI should reduce work, improve decisions or speed up a workflow — not exist as another isolated tool."
          },
          "engineering": {
            "category": "Product Engineering",
            "title": "Good software starts before the first line of code.",
            "description": "The strongest digital products begin with the workflow, users and system behaviour before technical implementation starts."
          }
        }
      },
      "articleLabel": "Insight article",
      "topics": {
        "eyebrow": "What we write about",
        "titleStart": "Less noise.",
        "titleHighlight": "More useful thinking.",
        "description": "BuiltV Insights focuses on the practical side of building and operating digital products — what works, what breaks and how better systems can improve the business around them.",
        "items": {
          "systems": "Business systems",
          "ai": "AI & automation",
          "engineering": "Software engineering",
          "strategy": "Product strategy",
          "saas": "SaaS",
          "operations": "Operations",
          "experiences": "Digital experiences"
        }
      },
      "cards": {
        "systems": {
          "eyebrow": "Systems",
          "title": "Build around the workflow, not around the software.",
          "text": "Good systems should follow the way work actually moves through a company instead of forcing teams into unnecessary complexity."
        },
        "product": {
          "eyebrow": "Product",
          "title": "Technology is useful when it improves something measurable.",
          "text": "Better customer experience, less manual work, faster operations or a stronger product are more useful goals than simply adding more technology."
        }
      },
      "cta": {
        "eyebrow": "From insight to execution",
        "titleStart": "Have a system that needs",
        "titleHighlight": "better thinking?",
        "description": "If your business has a workflow, product or operational problem worth improving, BuiltV can help turn the idea into a working digital system.",
        "button": "Start a project"
      }
    },
    "contactPage": {
      "hero": {
        "eyebrow": "Contact",
        "titleStart": "Tell us what you're",
        "titleHighlight": "trying to build.",
        "description": "Start with the idea, workflow or business problem. You do not need a complete technical specification before getting in touch."
      },
      "intro": {
        "title": "Start with the problem.",
        "description": "Share what is not working today, what you want to improve or what new product you want to create."
      },
      "reasons": {
        "scoping": "Clear project scoping",
        "direction": "Technical direction before development",
        "businessFirst": "Business-first product thinking",
        "global": "Global remote collaboration"
      },
      "preferEmail": {
        "eyebrow": "Prefer email?",
        "description": "Send a short summary of your project, current problem and what you want to achieve."
      },
      "collaboration": {
        "title": "Global collaboration",
        "text": "Remote-first project communication"
      },
      "form": {
        "eyebrow": "Project enquiry",
        "title": "Tell us about the project.",
        "name": "Name",
        "namePlaceholder": "Your name",
        "email": "Email",
        "company": "Company",
        "companyPlaceholder": "Company or startup name",
        "projectType": "What are you looking to build?",
        "projectTypePlaceholder": "Select project type",
        "budget": "Approximate budget",
        "budgetPlaceholder": "Select budget range",
        "details": "Project details",
        "detailsPlaceholder": "What are you trying to build or improve?",
        "openingEmail": "Opening email...",
        "submit": "Send project enquiry",
        "consent": "By submitting this form, you agree that BuiltV may use the information provided to respond to your enquiry."
      },
      "projectTypes": {
        "website": "Website",
        "software": "Software / SaaS",
        "businessSystem": "Business System",
        "ai": "AI & Automation",
        "engineering": "Product Engineering",
        "notSure": "Not sure yet"
      },
      "budgets": {
        "under2500": "Under €2,500",
        "2500to5000": "€2,500 – €5,000",
        "5000to10000": "€5,000 – €10,000",
        "10000plus": "€10,000+",
        "notSure": "Not sure yet"
      },
      "email": {
        "notProvided": "Not provided",
        "notSelected": "Not selected",
        "subject": "BuiltV Project Enquiry",
        "heading": "New BuiltV Project Enquiry",
        "projectType": "Project Type"
      },
      "cta": {
        "eyebrow": "Not sure what you need?",
        "titleStart": "That's completely fine.",
        "titleHighlight": "Start with the business problem.",
        "description": "We can help turn a rough idea, inefficient workflow or product requirement into a clearer technical direction.",
        "button": "Email BuiltV"
      }
    }
  },
  "de": {
    "pricingPage": {
      "hero": {
        "eyebrow": "Preise",
        "titleStart": "Klarer Umfang, bevor",
        "titleHighlight": "die eigentliche Entwicklungsarbeit beginnt.",
        "description": "Jedes BuiltV-Projekt wird nach Produkt, Workflow und technischer Komplexität gestaltet, statt jedes Unternehmen in dasselbe Paket zu zwingen.",
        "estimate": "Projektangebot anfragen",
        "viewTypes": "Zusammenarbeitsmodelle ansehen"
      },
      "engagements": {
        "eyebrow": "Zusammenarbeitsmodelle",
        "titleStart": "Unterschiedliche Projekte brauchen",
        "titleHighlight": "unterschiedliche Umfänge."
      },
      "mostFlexible": "Am flexibelsten",
      "pricingLabel": "Preisgestaltung",
      "idealFor": "Ideal für",
      "discuss": "Dieses Projekt besprechen",
      "plans": {
        "web": {
          "label": "Fokussierter Aufbau",
          "title": "Web-Erlebnis",
          "description": "Für Unternehmen, die eine hochwertige Marketing-Website, Landingpage oder fokussierte digitale Präsenz benötigen.",
          "price": "Pro Projekt definiert",
          "idealFor": "Websites, Landingpages, Redesigns",
          "features": [
            "Responsives Produktdesign",
            "Frontend-Entwicklung",
            "Performance-Optimierung",
            "Kontakt- & Conversion-Flows",
            "Basis-Integrationen",
            "Deployment-Unterstützung"
          ]
        },
        "software": {
          "label": "Produktentwicklung",
          "title": "Software & SaaS",
          "description": "Für Startups und Unternehmen, die Dashboards, Portale, interne Software oder vollständige SaaS-Produkte entwickeln.",
          "price": "Individueller Projektumfang",
          "idealFor": "SaaS, Dashboards, Portale, MVPs",
          "features": [
            "Produktarchitektur",
            "Frontend & Backend",
            "Datenbankdesign",
            "Authentifizierung",
            "API-Integrationen",
            "Deployment-Setup"
          ]
        },
        "automation": {
          "label": "Betriebssysteme",
          "title": "Automatisierung & Systeme",
          "description": "Für Unternehmen, die repetitive Workflows, getrennte Tools und manuelle Abläufe ersetzen möchten.",
          "price": "Nach Workflow definiert",
          "idealFor": "Automatisierung, Betrieb, KI-Workflows",
          "features": [
            "Workflow-Analyse",
            "Automatisierungsdesign",
            "Geschäftsintegrationen",
            "KI-Integrationen",
            "Interne Dashboards",
            "Prozessdokumentation"
          ]
        }
      },
      "factors": {
        "eyebrow": "Was den Preis beeinflusst",
        "titleStart": "Wir bepreisen die Arbeit,",
        "titleHighlight": "nicht ein Standardpaket.",
        "description": "Zwei Projekte können ähnlich aussehen und technisch dennoch völlig unterschiedliche Anforderungen haben.",
        "items": {
          "scope": {
            "title": "Umfang",
            "text": "Anzahl der Screens, Workflows, Rollen und Produktfunktionen."
          },
          "complexity": {
            "title": "Technische Komplexität",
            "text": "Individuelle Backend-Logik, APIs, Integrationen, Datenarchitektur und Infrastruktur."
          },
          "automation": {
            "title": "Automatisierungstiefe",
            "text": "Wie viele Systeme, Geschäftsregeln und automatisierte Aktionen zusammenspielen müssen."
          },
          "timeline": {
            "title": "Zeitplan",
            "text": "Liefergeschwindigkeit, Launch-Anforderungen und ob die Arbeit in Phasen erfolgen soll."
          }
        }
      },
      "process": {
        "eyebrow": "So funktionieren Schätzungen",
        "titleStart": "Vom Geschäftsproblem zum",
        "titleHighlight": "klaren Projektumfang.",
        "steps": {
          "problem": {
            "title": "Problem schildern",
            "text": "Teilen Sie uns mit, was Sie bauen möchten oder was Ihr Unternehmen aktuell ausbremst."
          },
          "scope": {
            "title": "Wir definieren den Umfang",
            "text": "Wir klären zentrale Workflows, notwendige Funktionen und die technische Richtung."
          },
          "proposal": {
            "title": "Sie erhalten ein Angebot",
            "text": "Sie erhalten einen klaren Projektumfang, Lieferansatz und eine kaufmännische Schätzung."
          }
        }
      },
      "cta": {
        "eyebrow": "Brauchen Sie eine Schätzung?",
        "titleStart": "Sagen Sie uns, was gebaut werden soll.",
        "titleHighlight": "Wir helfen, den Umfang zu definieren.",
        "description": "Sie können mit einer Produktidee, einem Workflow-Problem oder einem bestehenden System starten. Eine vollständige technische Spezifikation ist nicht erforderlich.",
        "button": "Schätzung anfragen"
      }
    },
    "aboutPage": {
      "hero": {
        "eyebrow": "Über BuiltV",
        "titleStart": "Wir entwickeln digitale Systeme für",
        "titleHighlight": "das, was als Nächstes kommt.",
        "description": "BuiltV ist ein digitales Produktstudio für Websites, Software, Geschäftssysteme, KI und Automatisierung für ambitionierte Unternehmen.",
        "start": "Projekt starten",
        "work": "Unsere Projekte ansehen"
      },
      "why": {
        "eyebrow": "Warum BuiltV existiert",
        "titleStart": "Bessere Systeme schaffen",
        "titleHighlight": "bessere Unternehmen.",
        "paragraphs": [
          "Viele Unternehmen wachsen, indem sie mehr Tools, Tabellen und manuelle Schritte hinzufügen. Irgendwann erzeugt die Technologie Reibung statt sie zu beseitigen.",
          "BuiltV entwickelt klarere digitale Systeme rund um reale Workflows — für reibungslosere Kundenerlebnisse und weniger unnötige Komplexität im Team.",
          "Manchmal bedeutet das eine Website, manchmal ein vollständiges Softwareprodukt, eine interne Plattform oder einen KI-Workflow. Ziel ist nicht mehr Technologie, sondern das richtige System."
        ]
      },
      "principles": {
        "eyebrow": "Wie wir denken",
        "titleStart": "Prinzipien hinter",
        "titleHighlight": "den Produkten, die wir bauen.",
        "items": {
          "problem": {
            "title": "Problem zuerst",
            "text": "Wir beginnen mit Geschäftsproblem, Workflow und Nutzerbedarf, bevor wir die Technologie festlegen."
          },
          "systems": {
            "title": "Systeme statt Fragmente",
            "text": "Wir bevorzugen verbundene Workflows und zuverlässige Systeme statt eines weiteren isolierten Tools."
          },
          "engineering": {
            "title": "Engineering zählt",
            "text": "Gutes Produktdesign braucht zuverlässige Frontends, Backends, APIs, Datenbanken und Infrastruktur."
          },
          "trust": {
            "title": "Für Vertrauen gebaut",
            "text": "Wir denken an Zuverlässigkeit, Wartbarkeit und daran, wie sich das Produkt verhalten soll, wenn echte Nutzer darauf angewiesen sind."
          }
        }
      },
      "studio": {
        "eyebrow": "Ein Studio",
        "titleStart": "Design, Software und Automatisierung",
        "titleHighlight": "unter einem Dach.",
        "description": "Produkte funktionieren besser, wenn Strategie, Interface, Backend-Systeme und Automatisierung als ein verbundenes Erlebnis gestaltet werden."
      },
      "capabilities": {
        "web": "Web-Erlebnisse",
        "software": "Software & SaaS",
        "systems": "Geschäftssysteme",
        "ai": "KI & Automatisierung",
        "engineering": "Produktentwicklung"
      },
      "global": {
        "eyebrow": "Global entwickelt",
        "titleStart": "Digitale Produkte sind global.",
        "titleHighlight": "Unsere Denkweise auch.",
        "description": "BuiltV arbeitet mit modernen Unternehmen über Märkte, Zeitzonen und digitale Umgebungen hinweg und hält das Produkterlebnis klar und konsistent.",
        "markets": {
          "ireland": "Irland",
          "uk": "Vereinigtes Königreich",
          "netherlands": "Niederlande",
          "germany": "Deutschland",
          "europe": "Europa",
          "global": "Global"
        }
      },
      "cta": {
        "eyebrow": "Mit BuiltV bauen",
        "titleStart": "Haben Sie ein Problem, das",
        "titleHighlight": "richtig gelöst werden sollte?",
        "description": "Sagen Sie uns, was Ihr Unternehmen verbessern, ersetzen oder als Nächstes bauen möchte. Dort kann das Gespräch beginnen.",
        "button": "Projekt starten"
      }
    },
    "insightsPage": {
      "hero": {
        "eyebrow": "Einblicke",
        "titleStart": "Gedanken über Software,",
        "titleHighlight": "Systeme und das, was als Nächstes kommt.",
        "description": "Ideen und praktische Gedanken zu digitalen Produkten, Geschäftsabläufen, Softwareentwicklung, KI und Automatisierung.",
        "explore": "Einblicke entdecken"
      },
      "featured": {
        "eyebrow": "Ausgewählte Gedanken",
        "titleStart": "Nützliche Ideen für",
        "titleHighlight": "moderne digitale Unternehmen.",
        "items": {
          "workflow": {
            "category": "Geschäftssysteme",
            "title": "Wenn ein Unternehmen zu viele Tools hat, liegt das eigentliche Problem meist im Workflow.",
            "description": "Warum getrennte Software operative Reibung erzeugt und bessere Systeme Arbeitsabläufe vereinfachen können."
          },
          "ai": {
            "category": "KI & Automatisierung",
            "title": "KI schafft Wert, wenn sie mit einem echten Geschäftsprozess verbunden ist.",
            "description": "Praktische KI sollte Arbeit reduzieren, Entscheidungen verbessern oder Workflows beschleunigen — nicht nur ein weiteres isoliertes Tool sein."
          },
          "engineering": {
            "category": "Produktentwicklung",
            "title": "Gute Software beginnt vor der ersten Codezeile.",
            "description": "Starke digitale Produkte beginnen mit Workflow, Nutzern und Systemverhalten, bevor die technische Umsetzung startet."
          }
        }
      },
      "articleLabel": "Insight-Artikel",
      "topics": {
        "eyebrow": "Worüber wir schreiben",
        "titleStart": "Weniger Lärm.",
        "titleHighlight": "Mehr nützliche Gedanken.",
        "description": "BuiltV Insights konzentriert sich auf die praktische Seite digitaler Produkte — was funktioniert, was scheitert und wie bessere Systeme Unternehmen verbessern.",
        "items": {
          "systems": "Geschäftssysteme",
          "ai": "KI & Automatisierung",
          "engineering": "Softwareentwicklung",
          "strategy": "Produktstrategie",
          "saas": "SaaS",
          "operations": "Betrieb",
          "experiences": "Digitale Erlebnisse"
        }
      },
      "cards": {
        "systems": {
          "eyebrow": "Systeme",
          "title": "Am Workflow bauen, nicht an der Software.",
          "text": "Gute Systeme sollten dem tatsächlichen Arbeitsfluss folgen, statt Teams in unnötige Komplexität zu zwingen."
        },
        "product": {
          "eyebrow": "Produkt",
          "title": "Technologie ist nützlich, wenn sie messbar etwas verbessert.",
          "text": "Bessere Kundenerlebnisse, weniger manuelle Arbeit, schnellere Abläufe oder ein stärkeres Produkt sind sinnvollere Ziele als einfach mehr Technologie."
        }
      },
      "cta": {
        "eyebrow": "Von der Idee zur Umsetzung",
        "titleStart": "Haben Sie ein System, das",
        "titleHighlight": "besseres Denken braucht?",
        "description": "Wenn Ihr Unternehmen einen Workflow, ein Produkt oder ein operatives Problem verbessern möchte, kann BuiltV daraus ein funktionierendes digitales System machen.",
        "button": "Projekt starten"
      }
    },
    "contactPage": {
      "hero": {
        "eyebrow": "Kontakt",
        "titleStart": "Sagen Sie uns, was Sie",
        "titleHighlight": "bauen möchten.",
        "description": "Starten Sie mit der Idee, dem Workflow oder dem Geschäftsproblem. Eine vollständige technische Spezifikation ist vor dem Kontakt nicht nötig."
      },
      "intro": {
        "title": "Beginnen Sie mit dem Problem.",
        "description": "Teilen Sie mit, was heute nicht funktioniert, was Sie verbessern oder welches neue Produkt Sie entwickeln möchten."
      },
      "reasons": {
        "scoping": "Klare Projektabgrenzung",
        "direction": "Technische Richtung vor der Entwicklung",
        "businessFirst": "Geschäftsorientiertes Produktdenken",
        "global": "Globale Remote-Zusammenarbeit"
      },
      "preferEmail": {
        "eyebrow": "Lieber per E-Mail?",
        "description": "Senden Sie eine kurze Zusammenfassung Ihres Projekts, des aktuellen Problems und Ihres Ziels."
      },
      "collaboration": {
        "title": "Globale Zusammenarbeit",
        "text": "Remote-first Projektkommunikation"
      },
      "form": {
        "eyebrow": "Projektanfrage",
        "title": "Erzählen Sie uns vom Projekt.",
        "name": "Name",
        "namePlaceholder": "Ihr Name",
        "email": "E-Mail",
        "company": "Unternehmen",
        "companyPlaceholder": "Unternehmen oder Startup",
        "projectType": "Was möchten Sie bauen?",
        "projectTypePlaceholder": "Projekttyp wählen",
        "budget": "Ungefähres Budget",
        "budgetPlaceholder": "Budgetbereich wählen",
        "details": "Projektdetails",
        "detailsPlaceholder": "Was möchten Sie bauen oder verbessern?",
        "openingEmail": "E-Mail wird geöffnet...",
        "submit": "Projektanfrage senden",
        "consent": "Mit dem Absenden stimmen Sie zu, dass BuiltV die angegebenen Informationen zur Beantwortung Ihrer Anfrage verwendet."
      },
      "projectTypes": {
        "website": "Website",
        "software": "Software / SaaS",
        "businessSystem": "Geschäftssystem",
        "ai": "KI & Automatisierung",
        "engineering": "Produktentwicklung",
        "notSure": "Noch unsicher"
      },
      "budgets": {
        "under2500": "Unter €2.500",
        "2500to5000": "€2.500 – €5.000",
        "5000to10000": "€5.000 – €10.000",
        "10000plus": "€10.000+",
        "notSure": "Noch unsicher"
      },
      "email": {
        "notProvided": "Nicht angegeben",
        "notSelected": "Nicht ausgewählt",
        "subject": "BuiltV Projektanfrage",
        "heading": "Neue BuiltV Projektanfrage",
        "projectType": "Projekttyp"
      },
      "cta": {
        "eyebrow": "Noch unsicher, was Sie brauchen?",
        "titleStart": "Das ist völlig in Ordnung.",
        "titleHighlight": "Starten Sie mit dem Geschäftsproblem.",
        "description": "Wir helfen, eine grobe Idee, einen ineffizienten Workflow oder eine Produktanforderung in eine klarere technische Richtung zu verwandeln.",
        "button": "BuiltV mailen"
      }
    }
  },
  "nl": {
    "pricingPage": {
      "hero": {
        "eyebrow": "Prijzen",
        "titleStart": "Duidelijke scope voordat",
        "titleHighlight": "het echte bouwwerk begint.",
        "description": "Elk BuiltV-project wordt afgestemd op het product, de workflow en technische complexiteit, in plaats van elk bedrijf in hetzelfde pakket te dwingen.",
        "estimate": "Projectinschatting aanvragen",
        "viewTypes": "Samenwerkingsvormen bekijken"
      },
      "engagements": {
        "eyebrow": "Samenwerkingsvormen",
        "titleStart": "Verschillende projecten vragen",
        "titleHighlight": "verschillende scopes."
      },
      "mostFlexible": "Meest flexibel",
      "pricingLabel": "Prijs",
      "idealFor": "Ideaal voor",
      "discuss": "Dit project bespreken",
      "plans": {
        "web": {
          "label": "Gerichte build",
          "title": "Web Experience",
          "description": "Voor bedrijven die een premium marketingwebsite, landingspagina of gerichte digitale aanwezigheid nodig hebben.",
          "price": "Per project bepaald",
          "idealFor": "Websites, landingspagina's, redesigns",
          "features": [
            "Responsief productdesign",
            "Frontendontwikkeling",
            "Prestatie-optimalisatie",
            "Contact- en conversieflows",
            "Basisintegraties",
            "Deploymentondersteuning"
          ]
        },
        "software": {
          "label": "Product build",
          "title": "Software & SaaS",
          "description": "Voor startups en bedrijven die dashboards, portals, interne software of complete SaaS-producten bouwen.",
          "price": "Maatwerk projectscope",
          "idealFor": "SaaS, dashboards, portals, MVP's",
          "features": [
            "Productarchitectuur",
            "Frontend & backend",
            "Databaseontwerp",
            "Authenticatie",
            "API-integraties",
            "Deploymentsetup"
          ]
        },
        "automation": {
          "label": "Operations build",
          "title": "Automatisering & Systemen",
          "description": "Voor bedrijven die repetitieve workflows, losse tools en handmatig operationeel werk willen vervangen.",
          "price": "Per workflow bepaald",
          "idealFor": "Automatisering, operations, AI-workflows",
          "features": [
            "Workflowanalyse",
            "Automatiseringsontwerp",
            "Bedrijfsintegraties",
            "AI-integraties",
            "Interne dashboards",
            "Procesdocumentatie"
          ]
        }
      },
      "factors": {
        "eyebrow": "Wat de prijs beïnvloedt",
        "titleStart": "We prijzen het werk,",
        "titleHighlight": "niet een standaardpakket.",
        "description": "Twee projecten kunnen er vergelijkbaar uitzien maar onder de motorkap totaal verschillende engineering vereisen.",
        "items": {
          "scope": {
            "title": "Scope",
            "text": "Het aantal schermen, workflows, rollen en productfuncties."
          },
          "complexity": {
            "title": "Technische complexiteit",
            "text": "Maatwerk backendlogica, API's, integraties, data-architectuur en infrastructuur."
          },
          "automation": {
            "title": "Automatiseringsdiepte",
            "text": "Hoeveel systemen, bedrijfsregels en geautomatiseerde acties moeten samenwerken."
          },
          "timeline": {
            "title": "Tijdlijn",
            "text": "Leversnelheid, launchvereisten en of het werk gefaseerd moet worden."
          }
        }
      },
      "process": {
        "eyebrow": "Hoe inschattingen werken",
        "titleStart": "Van bedrijfsprobleem naar",
        "titleHighlight": "duidelijke projectscope.",
        "steps": {
          "problem": {
            "title": "Vertel ons het probleem",
            "text": "Deel wat je wilt bouwen of wat je bedrijf momenteel vertraagt."
          },
          "scope": {
            "title": "Wij bepalen de scope",
            "text": "We verduidelijken de kernworkflows, benodigde functies en technische richting."
          },
          "proposal": {
            "title": "Je ontvangt een voorstel",
            "text": "Je krijgt een duidelijke projectscope, leveringsaanpak en commerciële inschatting."
          }
        }
      },
      "cta": {
        "eyebrow": "Een inschatting nodig?",
        "titleStart": "Vertel ons wat er gebouwd moet worden.",
        "titleHighlight": "Wij helpen de scope bepalen.",
        "description": "Je kunt beginnen met een productidee, workflowprobleem of bestaand systeem. Een volledige technische specificatie is niet nodig.",
        "button": "Inschatting aanvragen"
      }
    },
    "aboutPage": {
      "hero": {
        "eyebrow": "Over BuiltV",
        "titleStart": "Wij bouwen digitale systemen voor",
        "titleHighlight": "wat hierna komt.",
        "description": "BuiltV is een digitale productstudio voor websites, software, bedrijfssystemen, AI en automatisering voor ambitieuze bedrijven.",
        "start": "Start een project",
        "work": "Bekijk ons werk"
      },
      "why": {
        "eyebrow": "Waarom BuiltV bestaat",
        "titleStart": "Betere systemen maken",
        "titleHighlight": "betere bedrijven.",
        "paragraphs": [
          "Veel bedrijven groeien door meer tools, spreadsheets en handmatige stappen toe te voegen. Uiteindelijk veroorzaakt technologie juist frictie.",
          "BuiltV ontwerpt duidelijke digitale systemen rond echte workflows, zodat klanten soepel door het bedrijf bewegen en teams met minder complexiteit werken.",
          "Soms is dat een website, soms een volledig softwareproduct, intern platform of AI-workflow. Het doel is niet meer technologie, maar het juiste systeem."
        ]
      },
      "principles": {
        "eyebrow": "Hoe we denken",
        "titleStart": "Principes achter",
        "titleHighlight": "de producten die we bouwen.",
        "items": {
          "problem": {
            "title": "Probleem eerst",
            "text": "We beginnen bij het bedrijfsprobleem, de workflow en de gebruiker voordat we technologie kiezen."
          },
          "systems": {
            "title": "Systemen boven fragmenten",
            "text": "We kiezen voor verbonden workflows en betrouwbare systemen, niet voor nog een losse tool."
          },
          "engineering": {
            "title": "Engineering telt",
            "text": "Goed productdesign heeft betrouwbare frontend, backend, API's, databases en infrastructuur nodig."
          },
          "trust": {
            "title": "Gebouwd voor vertrouwen",
            "text": "We denken aan betrouwbaarheid, onderhoudbaarheid en hoe het product zich gedraagt wanneer echte gebruikers erop vertrouwen."
          }
        }
      },
      "studio": {
        "eyebrow": "Eén studio",
        "titleStart": "Design, software en automatisering",
        "titleHighlight": "onder één dak.",
        "description": "Producten werken beter wanneer strategie, interface, backend en automatisering als één verbonden ervaring worden ontworpen."
      },
      "capabilities": {
        "web": "Web experiences",
        "software": "Software & SaaS",
        "systems": "Bedrijfssystemen",
        "ai": "AI & automatisering",
        "engineering": "Product engineering"
      },
      "global": {
        "eyebrow": "Wereldwijd gebouwd",
        "titleStart": "Digitale producten zijn wereldwijd.",
        "titleHighlight": "Onze mindset ook.",
        "description": "BuiltV werkt met moderne bedrijven in verschillende markten, tijdzones en digitale omgevingen met een heldere en consistente productervaring.",
        "markets": {
          "ireland": "Ierland",
          "uk": "Verenigd Koninkrijk",
          "netherlands": "Nederland",
          "germany": "Duitsland",
          "europe": "Europa",
          "global": "Wereldwijd"
        }
      },
      "cta": {
        "eyebrow": "Bouw met BuiltV",
        "titleStart": "Heb je een probleem dat",
        "titleHighlight": "goed opgelost moet worden?",
        "description": "Vertel wat je bedrijf wil verbeteren, vervangen of als volgende wil bouwen. Daar kan het gesprek beginnen.",
        "button": "Start een project"
      }
    },
    "insightsPage": {
      "hero": {
        "eyebrow": "Inzichten",
        "titleStart": "Denken over software,",
        "titleHighlight": "systemen en wat hierna komt.",
        "description": "Ideeën en praktische inzichten over digitale producten, bedrijfsworkflows, software engineering, AI en automatisering.",
        "explore": "Bekijk inzichten"
      },
      "featured": {
        "eyebrow": "Uitgelichte ideeën",
        "titleStart": "Nuttige ideeën voor",
        "titleHighlight": "moderne digitale bedrijven.",
        "items": {
          "workflow": {
            "category": "Bedrijfssystemen",
            "title": "Als een bedrijf te veel tools heeft, ligt het echte probleem meestal in de workflow.",
            "description": "Waarom losse software operationele frictie veroorzaakt en hoe betere systemen werkstromen eenvoudiger maken."
          },
          "ai": {
            "category": "AI & automatisering",
            "title": "AI creëert waarde wanneer het gekoppeld is aan een echt bedrijfsproces.",
            "description": "Praktische AI moet werk verminderen, beslissingen verbeteren of workflows versnellen — niet gewoon nog een los hulpmiddel zijn."
          },
          "engineering": {
            "category": "Product engineering",
            "title": "Goede software begint vóór de eerste regel code.",
            "description": "Sterke digitale producten beginnen bij workflow, gebruikers en systeemgedrag voordat de technische implementatie start."
          }
        }
      },
      "articleLabel": "Insight-artikel",
      "topics": {
        "eyebrow": "Waar we over schrijven",
        "titleStart": "Minder ruis.",
        "titleHighlight": "Meer nuttige ideeën.",
        "description": "BuiltV Insights richt zich op de praktische kant van digitale producten: wat werkt, wat stukloopt en hoe betere systemen het bedrijf verbeteren.",
        "items": {
          "systems": "Bedrijfssystemen",
          "ai": "AI & automatisering",
          "engineering": "Software engineering",
          "strategy": "Productstrategie",
          "saas": "SaaS",
          "operations": "Operations",
          "experiences": "Digitale ervaringen"
        }
      },
      "cards": {
        "systems": {
          "eyebrow": "Systemen",
          "title": "Bouw rond de workflow, niet rond de software.",
          "text": "Goede systemen volgen hoe werk echt door een bedrijf beweegt in plaats van teams in onnodige complexiteit te dwingen."
        },
        "product": {
          "eyebrow": "Product",
          "title": "Technologie is nuttig wanneer het iets meetbaars verbetert.",
          "text": "Een betere klantervaring, minder handmatig werk, snellere operations of een sterker product zijn nuttiger doelen dan simpelweg meer technologie."
        }
      },
      "cta": {
        "eyebrow": "Van inzicht naar uitvoering",
        "titleStart": "Heb je een systeem dat",
        "titleHighlight": "beter denkwerk nodig heeft?",
        "description": "Als je bedrijf een workflow, product of operationeel probleem wil verbeteren, kan BuiltV het omzetten in een werkend digitaal systeem.",
        "button": "Start een project"
      }
    },
    "contactPage": {
      "hero": {
        "eyebrow": "Contact",
        "titleStart": "Vertel ons wat je",
        "titleHighlight": "probeert te bouwen.",
        "description": "Begin met het idee, de workflow of het bedrijfsprobleem. Je hebt geen volledige technische specificatie nodig voordat je contact opneemt."
      },
      "intro": {
        "title": "Begin met het probleem.",
        "description": "Vertel wat vandaag niet werkt, wat je wilt verbeteren of welk nieuw product je wilt maken."
      },
      "reasons": {
        "scoping": "Duidelijke projectscope",
        "direction": "Technische richting vóór ontwikkeling",
        "businessFirst": "Business-first productdenken",
        "global": "Wereldwijde remote samenwerking"
      },
      "preferEmail": {
        "eyebrow": "Liever e-mail?",
        "description": "Stuur een korte samenvatting van je project, het huidige probleem en wat je wilt bereiken."
      },
      "collaboration": {
        "title": "Wereldwijde samenwerking",
        "text": "Remote-first projectcommunicatie"
      },
      "form": {
        "eyebrow": "Projectaanvraag",
        "title": "Vertel ons over het project.",
        "name": "Naam",
        "namePlaceholder": "Je naam",
        "email": "E-mail",
        "company": "Bedrijf",
        "companyPlaceholder": "Bedrijf of startup",
        "projectType": "Wat wil je bouwen?",
        "projectTypePlaceholder": "Kies projecttype",
        "budget": "Geschat budget",
        "budgetPlaceholder": "Kies budgetrange",
        "details": "Projectdetails",
        "detailsPlaceholder": "Wat wil je bouwen of verbeteren?",
        "openingEmail": "E-mail wordt geopend...",
        "submit": "Projectaanvraag versturen",
        "consent": "Door dit formulier te versturen ga je ermee akkoord dat BuiltV de informatie gebruikt om op je aanvraag te reageren."
      },
      "projectTypes": {
        "website": "Website",
        "software": "Software / SaaS",
        "businessSystem": "Bedrijfssysteem",
        "ai": "AI & automatisering",
        "engineering": "Product engineering",
        "notSure": "Nog niet zeker"
      },
      "budgets": {
        "under2500": "Onder €2.500",
        "2500to5000": "€2.500 – €5.000",
        "5000to10000": "€5.000 – €10.000",
        "10000plus": "€10.000+",
        "notSure": "Nog niet zeker"
      },
      "email": {
        "notProvided": "Niet opgegeven",
        "notSelected": "Niet geselecteerd",
        "subject": "BuiltV Projectaanvraag",
        "heading": "Nieuwe BuiltV Projectaanvraag",
        "projectType": "Projecttype"
      },
      "cta": {
        "eyebrow": "Niet zeker wat je nodig hebt?",
        "titleStart": "Dat is helemaal prima.",
        "titleHighlight": "Begin met het bedrijfsprobleem.",
        "description": "We helpen een ruw idee, inefficiënte workflow of productvereiste om te zetten in een duidelijkere technische richting.",
        "button": "E-mail BuiltV"
      }
    }
  },
  "fr": {
    "pricingPage": {
      "hero": {
        "eyebrow": "Tarifs",
        "titleStart": "Un périmètre clair avant",
        "titleHighlight": "de commencer le développement sérieux.",
        "description": "Chaque projet BuiltV est défini selon le produit, le workflow et la complexité technique réels, plutôt que d'imposer le même forfait à toutes les entreprises.",
        "estimate": "Demander une estimation",
        "viewTypes": "Voir les types d'engagement"
      },
      "engagements": {
        "eyebrow": "Types d'engagement",
        "titleStart": "Des projets différents nécessitent",
        "titleHighlight": "des périmètres différents."
      },
      "mostFlexible": "Le plus flexible",
      "pricingLabel": "Tarification",
      "idealFor": "Idéal pour",
      "discuss": "Discuter de ce projet",
      "plans": {
        "web": {
          "label": "Projet ciblé",
          "title": "Expérience Web",
          "description": "Pour les entreprises qui ont besoin d'un site marketing premium, d'une landing page ou d'une présence numérique ciblée.",
          "price": "Défini par projet",
          "idealFor": "Sites web, landing pages, refontes",
          "features": [
            "Design produit responsive",
            "Développement frontend",
            "Optimisation des performances",
            "Parcours de contact & conversion",
            "Intégrations de base",
            "Support au déploiement"
          ]
        },
        "software": {
          "label": "Développement produit",
          "title": "Logiciels & SaaS",
          "description": "Pour les startups et entreprises qui créent des tableaux de bord, portails, logiciels internes ou produits SaaS complets.",
          "price": "Périmètre sur mesure",
          "idealFor": "SaaS, tableaux de bord, portails, MVP",
          "features": [
            "Architecture produit",
            "Frontend & backend",
            "Conception de base de données",
            "Authentification",
            "Intégrations API",
            "Configuration du déploiement"
          ]
        },
        "automation": {
          "label": "Systèmes opérationnels",
          "title": "Automatisation & Systèmes",
          "description": "Pour les entreprises qui remplacent des workflows répétitifs, des outils déconnectés et du travail manuel.",
          "price": "Défini par workflow",
          "idealFor": "Automatisation, opérations, workflows IA",
          "features": [
            "Analyse des workflows",
            "Conception d'automatisation",
            "Intégrations métier",
            "Intégrations IA",
            "Tableaux de bord internes",
            "Documentation des processus"
          ]
        }
      },
      "factors": {
        "eyebrow": "Ce qui influence le prix",
        "titleStart": "Nous tarifons le travail,",
        "titleHighlight": "pas un forfait générique.",
        "description": "Deux projets peuvent sembler similaires tout en nécessitant des niveaux d'ingénierie très différents.",
        "items": {
          "scope": {
            "title": "Périmètre",
            "text": "Le nombre d'écrans, workflows, rôles et fonctionnalités du produit."
          },
          "complexity": {
            "title": "Complexité technique",
            "text": "Logique backend sur mesure, API, intégrations, architecture des données et infrastructure."
          },
          "automation": {
            "title": "Profondeur de l'automatisation",
            "text": "Le nombre de systèmes, règles métier et actions automatisées qui doivent fonctionner ensemble."
          },
          "timeline": {
            "title": "Calendrier",
            "text": "Vitesse de livraison, exigences de lancement et besoin éventuel de phases."
          }
        }
      },
      "process": {
        "eyebrow": "Comment fonctionnent les estimations",
        "titleStart": "Du problème métier à",
        "titleHighlight": "un périmètre clair.",
        "steps": {
          "problem": {
            "title": "Expliquez-nous le problème",
            "text": "Partagez ce que vous souhaitez créer ou ce qui ralentit actuellement l'entreprise."
          },
          "scope": {
            "title": "Nous définissons le périmètre",
            "text": "Nous clarifions les workflows principaux, les fonctionnalités requises et la direction technique."
          },
          "proposal": {
            "title": "Vous recevez une proposition",
            "text": "Vous recevez un périmètre clair, une approche de livraison et une estimation commerciale."
          }
        }
      },
      "cta": {
        "eyebrow": "Besoin d'une estimation ?",
        "titleStart": "Dites-nous ce qu'il faut construire.",
        "titleHighlight": "Nous vous aiderons à définir le périmètre.",
        "description": "Vous pouvez commencer par une idée produit, un problème de workflow ou un système existant. Une spécification technique complète n'est pas nécessaire.",
        "button": "Demander une estimation"
      }
    },
    "aboutPage": {
      "hero": {
        "eyebrow": "À propos de BuiltV",
        "titleStart": "Nous créons des systèmes numériques pour",
        "titleHighlight": "la suite.",
        "description": "BuiltV est un studio de produits numériques spécialisé dans les sites web, logiciels, systèmes métier, IA et automatisation pour les entreprises ambitieuses.",
        "start": "Démarrer un projet",
        "work": "Voir nos projets"
      },
      "why": {
        "eyebrow": "Pourquoi BuiltV existe",
        "titleStart": "De meilleurs systèmes créent",
        "titleHighlight": "de meilleures entreprises.",
        "paragraphs": [
          "De nombreuses entreprises grandissent en ajoutant des outils, des feuilles de calcul et des étapes manuelles. Avec le temps, la technologie crée de la friction au lieu de la supprimer.",
          "BuiltV conçoit des systèmes numériques plus clairs autour de vrais workflows pour fluidifier l'expérience client et réduire la complexité inutile.",
          "Parfois il s'agit d'un site web, parfois d'un logiciel complet, d'une plateforme interne ou d'un workflow alimenté par l'IA. Le but n'est pas plus de technologie, mais le bon système."
        ]
      },
      "principles": {
        "eyebrow": "Notre façon de penser",
        "titleStart": "Les principes derrière",
        "titleHighlight": "les produits que nous créons.",
        "items": {
          "problem": {
            "title": "Le problème d'abord",
            "text": "Nous commençons par le problème métier, le workflow et le besoin utilisateur avant de choisir la technologie."
          },
          "systems": {
            "title": "Des systèmes plutôt que des fragments",
            "text": "Nous privilégions des workflows connectés et des systèmes fiables plutôt qu'un outil isolé de plus."
          },
          "engineering": {
            "title": "L'ingénierie compte",
            "text": "Un bon produit repose sur un frontend, un backend, des API, des bases de données et une infrastructure fiables."
          },
          "trust": {
            "title": "Conçu pour inspirer confiance",
            "text": "Nous pensons à la fiabilité, la maintenabilité et au comportement du produit lorsque de vrais utilisateurs en dépendent."
          }
        }
      },
      "studio": {
        "eyebrow": "Un seul studio",
        "titleStart": "Design, logiciel et automatisation",
        "titleHighlight": "sous un même toit.",
        "description": "Les produits fonctionnent mieux lorsque stratégie, interface, backend et automatisation sont conçus comme une expérience connectée."
      },
      "capabilities": {
        "web": "Expériences Web",
        "software": "Logiciels & SaaS",
        "systems": "Systèmes d'entreprise",
        "ai": "IA & automatisation",
        "engineering": "Ingénierie produit"
      },
      "global": {
        "eyebrow": "Conçu pour le monde",
        "titleStart": "Les produits numériques sont mondiaux.",
        "titleHighlight": "Notre état d'esprit aussi.",
        "description": "BuiltV travaille avec des entreprises modernes sur différents marchés, fuseaux horaires et environnements numériques tout en gardant une expérience claire et cohérente.",
        "markets": {
          "ireland": "Irlande",
          "uk": "Royaume-Uni",
          "netherlands": "Pays-Bas",
          "germany": "Allemagne",
          "europe": "Europe",
          "global": "Monde"
        }
      },
      "cta": {
        "eyebrow": "Construisez avec BuiltV",
        "titleStart": "Vous avez un problème qui mérite",
        "titleHighlight": "d'être bien résolu ?",
        "description": "Dites-nous ce que votre entreprise cherche à améliorer, remplacer ou construire ensuite. La conversation peut commencer là.",
        "button": "Démarrer un projet"
      }
    },
    "insightsPage": {
      "hero": {
        "eyebrow": "Perspectives",
        "titleStart": "Réflexions sur les logiciels,",
        "titleHighlight": "les systèmes et la suite.",
        "description": "Idées et réflexions pratiques autour des produits numériques, workflows métier, ingénierie logicielle, IA et automatisation.",
        "explore": "Découvrir les perspectives"
      },
      "featured": {
        "eyebrow": "Réflexions à la une",
        "titleStart": "Des idées utiles pour",
        "titleHighlight": "les entreprises numériques modernes.",
        "items": {
          "workflow": {
            "category": "Systèmes d'entreprise",
            "title": "Quand une entreprise utilise trop d'outils, le vrai problème est souvent le workflow.",
            "description": "Pourquoi les logiciels déconnectés créent de la friction et comment de meilleurs systèmes simplifient le travail."
          },
          "ai": {
            "category": "IA & Automatisation",
            "title": "L'IA crée de la valeur lorsqu'elle est reliée à un vrai processus métier.",
            "description": "Une IA utile doit réduire le travail, améliorer les décisions ou accélérer un workflow — pas devenir un outil isolé de plus."
          },
          "engineering": {
            "category": "Ingénierie produit",
            "title": "Un bon logiciel commence avant la première ligne de code.",
            "description": "Les meilleurs produits numériques commencent par le workflow, les utilisateurs et le comportement du système avant l'implémentation technique."
          }
        }
      },
      "articleLabel": "Article Insight",
      "topics": {
        "eyebrow": "Nos sujets",
        "titleStart": "Moins de bruit.",
        "titleHighlight": "Plus d'idées utiles.",
        "description": "BuiltV Insights se concentre sur la pratique des produits numériques : ce qui fonctionne, ce qui casse et comment de meilleurs systèmes améliorent l'entreprise.",
        "items": {
          "systems": "Systèmes d'entreprise",
          "ai": "IA & automatisation",
          "engineering": "Ingénierie logicielle",
          "strategy": "Stratégie produit",
          "saas": "SaaS",
          "operations": "Opérations",
          "experiences": "Expériences numériques"
        }
      },
      "cards": {
        "systems": {
          "eyebrow": "Systèmes",
          "title": "Construisez autour du workflow, pas autour du logiciel.",
          "text": "Les bons systèmes suivent la façon dont le travail circule réellement dans l'entreprise au lieu d'imposer une complexité inutile."
        },
        "product": {
          "eyebrow": "Produit",
          "title": "La technologie est utile lorsqu'elle améliore quelque chose de mesurable.",
          "text": "Une meilleure expérience client, moins de travail manuel, des opérations plus rapides ou un meilleur produit sont des objectifs plus utiles que simplement ajouter de la technologie."
        }
      },
      "cta": {
        "eyebrow": "De l'idée à l'exécution",
        "titleStart": "Vous avez un système qui mérite",
        "titleHighlight": "une meilleure réflexion ?",
        "description": "Si votre entreprise a un workflow, un produit ou un problème opérationnel à améliorer, BuiltV peut le transformer en système numérique fonctionnel.",
        "button": "Démarrer un projet"
      }
    },
    "contactPage": {
      "hero": {
        "eyebrow": "Contact",
        "titleStart": "Dites-nous ce que vous",
        "titleHighlight": "essayez de construire.",
        "description": "Commencez par l'idée, le workflow ou le problème métier. Vous n'avez pas besoin d'une spécification technique complète avant de nous contacter."
      },
      "intro": {
        "title": "Commencez par le problème.",
        "description": "Expliquez ce qui ne fonctionne pas aujourd'hui, ce que vous voulez améliorer ou le nouveau produit que vous souhaitez créer."
      },
      "reasons": {
        "scoping": "Périmètre de projet clair",
        "direction": "Direction technique avant développement",
        "businessFirst": "Réflexion produit orientée métier",
        "global": "Collaboration mondiale à distance"
      },
      "preferEmail": {
        "eyebrow": "Vous préférez l'e-mail ?",
        "description": "Envoyez un court résumé de votre projet, du problème actuel et de votre objectif."
      },
      "collaboration": {
        "title": "Collaboration mondiale",
        "text": "Communication de projet remote-first"
      },
      "form": {
        "eyebrow": "Demande de projet",
        "title": "Parlez-nous du projet.",
        "name": "Nom",
        "namePlaceholder": "Votre nom",
        "email": "E-mail",
        "company": "Entreprise",
        "companyPlaceholder": "Entreprise ou startup",
        "projectType": "Que souhaitez-vous construire ?",
        "projectTypePlaceholder": "Sélectionner le type de projet",
        "budget": "Budget approximatif",
        "budgetPlaceholder": "Sélectionner une fourchette",
        "details": "Détails du projet",
        "detailsPlaceholder": "Que souhaitez-vous construire ou améliorer ?",
        "openingEmail": "Ouverture de l'e-mail...",
        "submit": "Envoyer la demande",
        "consent": "En envoyant ce formulaire, vous acceptez que BuiltV utilise les informations fournies pour répondre à votre demande."
      },
      "projectTypes": {
        "website": "Site web",
        "software": "Logiciel / SaaS",
        "businessSystem": "Système d'entreprise",
        "ai": "IA & Automatisation",
        "engineering": "Ingénierie produit",
        "notSure": "Pas encore sûr"
      },
      "budgets": {
        "under2500": "Moins de 2 500 €",
        "2500to5000": "2 500 € – 5 000 €",
        "5000to10000": "5 000 € – 10 000 €",
        "10000plus": "10 000 €+",
        "notSure": "Pas encore sûr"
      },
      "email": {
        "notProvided": "Non fourni",
        "notSelected": "Non sélectionné",
        "subject": "Demande de projet BuiltV",
        "heading": "Nouvelle demande de projet BuiltV",
        "projectType": "Type de projet"
      },
      "cta": {
        "eyebrow": "Vous ne savez pas encore ce qu'il vous faut ?",
        "titleStart": "Aucun problème.",
        "titleHighlight": "Commencez par le problème métier.",
        "description": "Nous pouvons transformer une idée encore vague, un workflow inefficace ou une exigence produit en direction technique plus claire.",
        "button": "Envoyer un e-mail à BuiltV"
      }
    }
  },
  "es": {
    "pricingPage": {
      "hero": {
        "eyebrow": "Precios",
        "titleStart": "Un alcance claro antes de",
        "titleHighlight": "comenzar el trabajo serio de desarrollo.",
        "description": "Cada proyecto de BuiltV se define según el producto, el flujo de trabajo y la complejidad técnica reales, en lugar de forzar a todas las empresas al mismo paquete.",
        "estimate": "Solicitar estimación",
        "viewTypes": "Ver tipos de colaboración"
      },
      "engagements": {
        "eyebrow": "Tipos de colaboración",
        "titleStart": "Proyectos diferentes necesitan",
        "titleHighlight": "alcances diferentes."
      },
      "mostFlexible": "Más flexible",
      "pricingLabel": "Precio",
      "idealFor": "Ideal para",
      "discuss": "Hablar de este proyecto",
      "plans": {
        "web": {
          "label": "Proyecto enfocado",
          "title": "Experiencia Web",
          "description": "Para empresas que necesitan un sitio web de marketing premium, landing page o presencia digital enfocada.",
          "price": "Definido por proyecto",
          "idealFor": "Sitios web, landing pages, rediseños",
          "features": [
            "Diseño responsive",
            "Desarrollo frontend",
            "Optimización de rendimiento",
            "Flujos de contacto y conversión",
            "Integraciones básicas",
            "Soporte de despliegue"
          ]
        },
        "software": {
          "label": "Desarrollo de producto",
          "title": "Software & SaaS",
          "description": "Para startups y empresas que crean dashboards, portales, software interno o productos SaaS completos.",
          "price": "Alcance personalizado",
          "idealFor": "SaaS, dashboards, portales, MVPs",
          "features": [
            "Arquitectura de producto",
            "Frontend & backend",
            "Diseño de base de datos",
            "Autenticación",
            "Integraciones API",
            "Configuración de despliegue"
          ]
        },
        "automation": {
          "label": "Sistemas operativos",
          "title": "Automatización & Sistemas",
          "description": "Para empresas que quieren sustituir flujos repetitivos, herramientas desconectadas y trabajo operativo manual.",
          "price": "Definido por flujo",
          "idealFor": "Automatización, operaciones, flujos de IA",
          "features": [
            "Análisis de workflows",
            "Diseño de automatización",
            "Integraciones empresariales",
            "Integraciones de IA",
            "Dashboards internos",
            "Documentación de procesos"
          ]
        }
      },
      "factors": {
        "eyebrow": "Qué afecta al precio",
        "titleStart": "Ponemos precio al trabajo,",
        "titleHighlight": "no a un paquete genérico.",
        "description": "Dos proyectos pueden parecer similares y requerir niveles de ingeniería completamente diferentes.",
        "items": {
          "scope": {
            "title": "Alcance",
            "text": "Cantidad de pantallas, flujos, roles y funciones del producto."
          },
          "complexity": {
            "title": "Complejidad técnica",
            "text": "Lógica backend personalizada, APIs, integraciones, arquitectura de datos e infraestructura."
          },
          "automation": {
            "title": "Profundidad de automatización",
            "text": "Cuántos sistemas, reglas de negocio y acciones automatizadas deben trabajar juntos."
          },
          "timeline": {
            "title": "Calendario",
            "text": "Velocidad de entrega, requisitos de lanzamiento y si el trabajo debe dividirse en fases."
          }
        }
      },
      "process": {
        "eyebrow": "Cómo funcionan las estimaciones",
        "titleStart": "Del problema de negocio a",
        "titleHighlight": "un alcance claro.",
        "steps": {
          "problem": {
            "title": "Cuéntanos el problema",
            "text": "Comparte qué quieres construir o qué está frenando actualmente al negocio."
          },
          "scope": {
            "title": "Definimos el alcance",
            "text": "Aclaramos los flujos principales, funciones necesarias y dirección técnica."
          },
          "proposal": {
            "title": "Recibes una propuesta",
            "text": "Obtienes un alcance claro, enfoque de entrega y estimación comercial."
          }
        }
      },
      "cta": {
        "eyebrow": "¿Necesitas una estimación?",
        "titleStart": "Cuéntanos qué hay que construir.",
        "titleHighlight": "Te ayudaremos a definir el alcance.",
        "description": "Puedes empezar con una idea de producto, un problema de flujo o un sistema existente. No necesitas una especificación técnica completa.",
        "button": "Solicitar estimación"
      }
    },
    "aboutPage": {
      "hero": {
        "eyebrow": "Sobre BuiltV",
        "titleStart": "Construimos sistemas digitales para",
        "titleHighlight": "lo que viene.",
        "description": "BuiltV es un estudio de productos digitales centrado en sitios web, software, sistemas empresariales, IA y automatización para empresas ambiciosas.",
        "start": "Iniciar un proyecto",
        "work": "Ver nuestro trabajo"
      },
      "why": {
        "eyebrow": "Por qué existe BuiltV",
        "titleStart": "Mejores sistemas crean",
        "titleHighlight": "mejores empresas.",
        "paragraphs": [
          "Muchas empresas crecen añadiendo más herramientas, hojas de cálculo y pasos manuales. Con el tiempo, la tecnología empieza a crear fricción.",
          "BuiltV diseña sistemas digitales más claros alrededor de flujos reales para que clientes y equipos trabajen con menos complejidad.",
          "A veces significa un sitio web; otras, un producto de software completo, una plataforma interna o un flujo con IA. El objetivo no es más tecnología, sino el sistema correcto."
        ]
      },
      "principles": {
        "eyebrow": "Cómo pensamos",
        "titleStart": "Principios detrás de",
        "titleHighlight": "los productos que construimos.",
        "items": {
          "problem": {
            "title": "Primero el problema",
            "text": "Comenzamos por el problema de negocio, el flujo y la necesidad del usuario antes de decidir la tecnología."
          },
          "systems": {
            "title": "Sistemas sobre fragmentos",
            "text": "Preferimos flujos conectados y sistemas fiables antes que otra herramienta aislada."
          },
          "engineering": {
            "title": "La ingeniería importa",
            "text": "Un buen diseño de producto necesita frontend, backend, APIs, bases de datos e infraestructura fiables."
          },
          "trust": {
            "title": "Construido para generar confianza",
            "text": "Pensamos en fiabilidad, mantenibilidad y comportamiento del producto cuando usuarios reales dependen de él."
          }
        }
      },
      "studio": {
        "eyebrow": "Un solo estudio",
        "titleStart": "Diseño, software y automatización",
        "titleHighlight": "bajo un mismo techo.",
        "description": "Los productos funcionan mejor cuando estrategia, interfaz, backend y automatización se diseñan como una experiencia conectada."
      },
      "capabilities": {
        "web": "Experiencias Web",
        "software": "Software & SaaS",
        "systems": "Sistemas empresariales",
        "ai": "IA & automatización",
        "engineering": "Ingeniería de producto"
      },
      "global": {
        "eyebrow": "Construido globalmente",
        "titleStart": "Los productos digitales son globales.",
        "titleHighlight": "Nuestra mentalidad también.",
        "description": "BuiltV trabaja con empresas modernas en distintos mercados, zonas horarias y entornos digitales manteniendo una experiencia clara y consistente.",
        "markets": {
          "ireland": "Irlanda",
          "uk": "Reino Unido",
          "netherlands": "Países Bajos",
          "germany": "Alemania",
          "europe": "Europa",
          "global": "Global"
        }
      },
      "cta": {
        "eyebrow": "Construye con BuiltV",
        "titleStart": "¿Tienes un problema que merece",
        "titleHighlight": "resolverse bien?",
        "description": "Cuéntanos qué intenta mejorar, sustituir o construir tu empresa. La conversación puede empezar ahí.",
        "button": "Iniciar un proyecto"
      }
    },
    "insightsPage": {
      "hero": {
        "eyebrow": "Ideas",
        "titleStart": "Pensando en software,",
        "titleHighlight": "sistemas y lo que viene.",
        "description": "Ideas y pensamiento práctico sobre productos digitales, flujos empresariales, ingeniería de software, IA y automatización.",
        "explore": "Explorar ideas"
      },
      "featured": {
        "eyebrow": "Ideas destacadas",
        "titleStart": "Ideas útiles para",
        "titleHighlight": "empresas digitales modernas.",
        "items": {
          "workflow": {
            "category": "Sistemas empresariales",
            "title": "Cuando una empresa tiene demasiadas herramientas, el problema real suele ser el flujo de trabajo.",
            "description": "Por qué el software desconectado crea fricción y cómo mejores sistemas simplifican el trabajo."
          },
          "ai": {
            "category": "IA & Automatización",
            "title": "La IA crea valor cuando está conectada a un proceso de negocio real.",
            "description": "La IA práctica debe reducir trabajo, mejorar decisiones o acelerar un flujo — no ser otra herramienta aislada."
          },
          "engineering": {
            "category": "Ingeniería de producto",
            "title": "El buen software comienza antes de la primera línea de código.",
            "description": "Los productos digitales sólidos comienzan por el flujo, los usuarios y el comportamiento del sistema antes de la implementación técnica."
          }
        }
      },
      "articleLabel": "Artículo de ideas",
      "topics": {
        "eyebrow": "Sobre qué escribimos",
        "titleStart": "Menos ruido.",
        "titleHighlight": "Más ideas útiles.",
        "description": "BuiltV Insights se centra en el lado práctico de los productos digitales: qué funciona, qué falla y cómo mejores sistemas pueden mejorar el negocio.",
        "items": {
          "systems": "Sistemas empresariales",
          "ai": "IA & automatización",
          "engineering": "Ingeniería de software",
          "strategy": "Estrategia de producto",
          "saas": "SaaS",
          "operations": "Operaciones",
          "experiences": "Experiencias digitales"
        }
      },
      "cards": {
        "systems": {
          "eyebrow": "Sistemas",
          "title": "Construye alrededor del flujo, no alrededor del software.",
          "text": "Los buenos sistemas deben seguir cómo se mueve realmente el trabajo por la empresa, sin obligar a los equipos a asumir complejidad innecesaria."
        },
        "product": {
          "eyebrow": "Producto",
          "title": "La tecnología es útil cuando mejora algo medible.",
          "text": "Mejor experiencia del cliente, menos trabajo manual, operaciones más rápidas o un producto más sólido son objetivos más útiles que simplemente añadir tecnología."
        }
      },
      "cta": {
        "eyebrow": "De la idea a la ejecución",
        "titleStart": "¿Tienes un sistema que necesita",
        "titleHighlight": "mejor pensamiento?",
        "description": "Si tu empresa tiene un flujo, producto o problema operativo que vale la pena mejorar, BuiltV puede convertirlo en un sistema digital funcional.",
        "button": "Iniciar un proyecto"
      }
    },
    "contactPage": {
      "hero": {
        "eyebrow": "Contacto",
        "titleStart": "Cuéntanos qué estás",
        "titleHighlight": "intentando construir.",
        "description": "Empieza con la idea, el flujo o el problema de negocio. No necesitas una especificación técnica completa antes de contactar."
      },
      "intro": {
        "title": "Empieza por el problema.",
        "description": "Comparte qué no funciona hoy, qué quieres mejorar o qué nuevo producto quieres crear."
      },
      "reasons": {
        "scoping": "Alcance de proyecto claro",
        "direction": "Dirección técnica antes del desarrollo",
        "businessFirst": "Pensamiento de producto centrado en negocio",
        "global": "Colaboración remota global"
      },
      "preferEmail": {
        "eyebrow": "¿Prefieres email?",
        "description": "Envía un breve resumen de tu proyecto, el problema actual y lo que quieres conseguir."
      },
      "collaboration": {
        "title": "Colaboración global",
        "text": "Comunicación de proyecto remote-first"
      },
      "form": {
        "eyebrow": "Consulta de proyecto",
        "title": "Cuéntanos sobre el proyecto.",
        "name": "Nombre",
        "namePlaceholder": "Tu nombre",
        "email": "Email",
        "company": "Empresa",
        "companyPlaceholder": "Empresa o startup",
        "projectType": "¿Qué quieres construir?",
        "projectTypePlaceholder": "Selecciona tipo de proyecto",
        "budget": "Presupuesto aproximado",
        "budgetPlaceholder": "Selecciona rango de presupuesto",
        "details": "Detalles del proyecto",
        "detailsPlaceholder": "¿Qué estás intentando construir o mejorar?",
        "openingEmail": "Abriendo email...",
        "submit": "Enviar consulta",
        "consent": "Al enviar este formulario, aceptas que BuiltV use la información proporcionada para responder a tu consulta."
      },
      "projectTypes": {
        "website": "Sitio web",
        "software": "Software / SaaS",
        "businessSystem": "Sistema empresarial",
        "ai": "IA & Automatización",
        "engineering": "Ingeniería de producto",
        "notSure": "Aún no estoy seguro"
      },
      "budgets": {
        "under2500": "Menos de 2.500 €",
        "2500to5000": "2.500 € – 5.000 €",
        "5000to10000": "5.000 € – 10.000 €",
        "10000plus": "10.000 €+",
        "notSure": "Aún no estoy seguro"
      },
      "email": {
        "notProvided": "No proporcionado",
        "notSelected": "No seleccionado",
        "subject": "Consulta de proyecto BuiltV",
        "heading": "Nueva consulta de proyecto BuiltV",
        "projectType": "Tipo de proyecto"
      },
      "cta": {
        "eyebrow": "¿No sabes exactamente qué necesitas?",
        "titleStart": "No pasa nada.",
        "titleHighlight": "Empieza por el problema de negocio.",
        "description": "Podemos convertir una idea inicial, un flujo ineficiente o un requisito de producto en una dirección técnica más clara.",
        "button": "Enviar email a BuiltV"
      }
    }
  }
} as const;

const extendedResources = {
  en: {
    translation: {
      ...resources.en.translation,
      ...additionalPageResources.en,
    },
  },
  de: {
    translation: {
      ...resources.de.translation,
      ...additionalPageResources.de,
    },
  },
  nl: {
    translation: {
      ...resources.nl.translation,
      ...additionalPageResources.nl,
    },
  },
  fr: {
    translation: {
      ...resources.fr.translation,
      ...additionalPageResources.fr,
    },
  },
  es: {
    translation: {
      ...resources.es.translation,
      ...additionalPageResources.es,
    },
  },
};

void i18n.use(initReactI18next).init({
  resources: extendedResources,

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
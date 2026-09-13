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
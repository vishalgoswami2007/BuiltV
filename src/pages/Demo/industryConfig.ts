export const industryConfig = {
  plumbing: {
    label: "Plumbing",
    heroTitle: "Reliable Plumbing, When You Need It.",
    heroDescription:
      "Professional plumbing services for homes and businesses, with simple online booking.",
    services: [
      "Emergency Plumbing",
      "Leak Repairs",
      "Boiler & Pipe Work",
      "Bathroom Plumbing",
    ],
    bookingServices: [
      "Emergency Callout",
      "Leak Repair",
      "Pipe Repair",
      "Bathroom Service",
    ],
  },

  heating: {
    label: "Heating & HVAC",
    heroTitle: "Comfort You Can Rely On.",
    heroDescription:
      "Heating and HVAC services with fast online booking and professional local support.",
    services: [
      "Boiler Repair",
      "Heating Installation",
      "HVAC Maintenance",
      "Emergency Heating",
    ],
    bookingServices: [
      "Boiler Repair",
      "Heating Service",
      "HVAC Maintenance",
      "Emergency Callout",
    ],
  },

  electrical: {
    label: "Electrical",
    heroTitle: "Professional Electrical Services.",
    heroDescription:
      "Book trusted electrical services for repairs, installations and maintenance.",
    services: [
      "Electrical Repairs",
      "Lighting Installation",
      "Rewiring",
      "Safety Inspections",
    ],
    bookingServices: [
      "Electrical Repair",
      "Lighting Service",
      "Rewiring Visit",
      "Safety Inspection",
    ],
  },

  cleaning: {
    label: "Cleaning Services",
    heroTitle: "A Cleaner Space, Without the Hassle.",
    heroDescription:
      "Professional cleaning services with convenient scheduling built around your day.",
    services: [
      "Home Cleaning",
      "Deep Cleaning",
      "Office Cleaning",
      "End of Tenancy",
    ],
    bookingServices: [
      "Home Cleaning",
      "Deep Cleaning",
      "Office Cleaning",
      "End of Tenancy Cleaning",
    ],
  },

  maintenance: {
    label: "Property Maintenance",
    heroTitle: "Property Maintenance Made Simple.",
    heroDescription:
      "Reliable repairs and maintenance with one simple way to book and manage your service.",
    services: [
      "General Repairs",
      "Property Maintenance",
      "Painting & Decorating",
      "Handyman Services",
    ],
    bookingServices: [
      "General Repair",
      "Maintenance Visit",
      "Painting Service",
      "Handyman Visit",
    ],
  },

  landscaping: {
    label: "Landscaping & Gardening",
    heroTitle: "Outdoor Spaces, Professionally Maintained.",
    heroDescription:
      "Book gardening and landscaping services for beautiful, well-maintained outdoor spaces.",
    services: [
      "Garden Maintenance",
      "Lawn Care",
      "Landscaping",
      "Hedge & Tree Care",
    ],
    bookingServices: [
      "Garden Maintenance",
      "Lawn Care",
      "Landscaping Visit",
      "Hedge & Tree Care",
    ],
  },
} as const;

export type IndustryId = keyof typeof industryConfig;
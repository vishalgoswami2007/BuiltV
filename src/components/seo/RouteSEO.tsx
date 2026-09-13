import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://builtv.vercel.app";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

type SeoData = {
  title: string;
  description: string;
  robots?: string;
};

const seoConfig: Record<string, SeoData> = {
  "/": {
    title: "BuiltV — Software, SaaS, AI & Business Systems",
    description:
      "BuiltV builds premium websites, SaaS products, business systems, AI automation and digital experiences for ambitious companies worldwide.",
  },

  "/services": {
    title: "Software Development Services — BuiltV",
    description:
      "Explore BuiltV services across web experiences, SaaS development, AI automation, business systems and product engineering.",
  },

  "/solutions": {
    title: "Digital & AI Solutions — BuiltV",
    description:
      "BuiltV designs scalable digital solutions, automation systems and AI-powered products that help modern businesses operate and grow.",
  },

  "/work": {
    title: "Selected Work & Software Projects — BuiltV",
    description:
      "Explore selected BuiltV projects across SaaS, software engineering, digital products, automation and modern web experiences.",
  },

  "/pricing": {
    title: "Software Project Pricing — BuiltV",
    description:
      "Explore BuiltV project pricing for premium websites, SaaS products, automation systems and custom software development.",
  },

  "/about": {
    title: "About BuiltV — Product & Software Studio",
    description:
      "Learn about BuiltV, a modern software and product studio focused on building scalable digital products, business systems and AI solutions.",
  },

  "/insights": {
    title: "Software, AI & Product Insights — BuiltV",
    description:
      "Explore BuiltV insights on software development, SaaS, AI automation, product engineering and modern digital business systems.",
  },

  "/contact": {
    title: "Start a Project — BuiltV",
    description:
      "Contact BuiltV to discuss your website, SaaS platform, software product, AI automation or business system.",
  },

  "/privacy": {
    title: "Privacy Policy — BuiltV",
    description:
      "Read the BuiltV Privacy Policy and learn how information is handled when you interact with our website and services.",
  },

  "/terms": {
    title: "Terms of Service — BuiltV",
    description:
      "Read the terms governing the use of the BuiltV website, services and digital platforms.",
  },

  "/cookies": {
    title: "Cookie Policy — BuiltV",
    description:
      "Learn how BuiltV uses cookies and similar technologies across its website.",
  },

  "/accessibility": {
    title: "Accessibility — BuiltV",
    description:
      "Learn about BuiltV's approach to creating accessible and inclusive digital experiences.",
  },

  "/security": {
    title: "Security — BuiltV",
    description:
      "Learn about BuiltV's approach to security, responsible software engineering and protecting digital systems.",
  },
};

function setMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let canonical =
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function RouteSEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname =
      location.pathname !== "/"
        ? location.pathname.replace(/\/+$/, "")
        : "/";

    const currentSeo = seoConfig[pathname];

    const isNotFound = !currentSeo;

    const seo: SeoData = currentSeo ?? {
      title: "Page Not Found — BuiltV",
      description:
        "The page you are looking for could not be found on BuiltV.",
      robots: "noindex, nofollow",
    };

    const canonicalUrl =
      pathname === "/"
        ? `${BASE_URL}/`
        : `${BASE_URL}${pathname}`;

    document.title = seo.title;

    document.documentElement.lang = "en";

    setMeta(
      'meta[name="description"]',
      "name",
      "description",
      seo.description,
    );

    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      seo.robots ?? "index, follow",
    );

    setCanonical(canonicalUrl);

    setMeta(
      'meta[property="og:type"]',
      "property",
      "og:type",
      "website",
    );

    setMeta(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      "BuiltV",
    );

    setMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      seo.title,
    );

    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      seo.description,
    );

    setMeta(
      'meta[property="og:url"]',
      "property",
      "og:url",
      canonicalUrl,
    );

    setMeta(
      'meta[property="og:image"]',
      "property",
      "og:image",
      OG_IMAGE,
    );

    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image",
    );

    setMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      seo.title,
    );

    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      seo.description,
    );

    setMeta(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      OG_IMAGE,
    );

    if (isNotFound) {
      setMeta(
        'meta[name="robots"]',
        "name",
        "robots",
        "noindex, nofollow",
      );
    }
  }, [location.pathname]);

  return null;
}

export default RouteSEO;
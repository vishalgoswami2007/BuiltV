import {
  Flame,
  Hammer,
  Sparkles,
  Trees,
  Wrench,
  Zap,
} from "lucide-react";

export const businessTypes = [
  {
    id: "plumbing",
    name: "Plumbing",
    icon: Wrench,
  },
  {
    id: "heating",
    name: "Heating & HVAC",
    icon: Flame,
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: Zap,
  },
  {
    id: "cleaning",
    name: "Cleaning Services",
    icon: Sparkles,
  },
  {
    id: "maintenance",
    name: "Property Maintenance",
    icon: Hammer,
  },
  {
    id: "landscaping",
    name: "Landscaping & Gardening",
    icon: Trees,
  },
] as const;

export const themes = [
  {
    id: "clean-white",
    name: "Clean White",
    description: "Bright, minimal and spacious.",
    preview: "bg-white",
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "Dark, premium and high contrast.",
    preview: "bg-[#080B10]",
  },
  {
    id: "professional-blue",
    name: "Professional Blue",
    description: "Structured, trusted and professional.",
    preview: "bg-blue-950",
  },
  {
    id: "warm-home",
    name: "Warm Home",
    description: "Warm, welcoming and local.",
    preview: "bg-stone-200",
  },
  {
    id: "modern-slate",
    name: "Modern Slate",
    description: "Sharp, modern and contemporary.",
    preview: "bg-slate-800",
  },
] as const;

export type BusinessType = (typeof businessTypes)[number]["id"];
export type DemoTheme = (typeof themes)[number]["id"];
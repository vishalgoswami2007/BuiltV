import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./index.css";
import "./i18n/i18n";

import App from "./App";

const rootElement = document.getElementById("root")!;

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// react-snap pre-renders static HTML into #root at build time. If that
// content is present, hydrate it instead of wiping and re-rendering from
// scratch (avoids a flash of empty content and hydration warnings).
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
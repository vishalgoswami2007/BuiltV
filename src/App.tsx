import type { ComponentType } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import CookieConsent from "./components/common/CookieConsent";
import LocaleSuggestion from "./components/localization/LocaleSuggestion";
import RouteSEO from "./components/seo/RouteSEO";

interface AppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RouterComponent?: ComponentType<any>;
  routerProps?: Record<string, unknown>;
}

function App({ RouterComponent = BrowserRouter, routerProps = {} }: AppProps) {
  return (
    <RouterComponent {...routerProps}>
      <ScrollToTop />
      <RouteSEO />

      <LocaleSuggestion />

      <AppRoutes />

      <CookieConsent />
    </RouterComponent>
  );
}

export default App;
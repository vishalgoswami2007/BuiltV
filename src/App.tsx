import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import CookieConsent from "./components/common/CookieConsent";
import LocaleSuggestion from "./components/localization/LocaleSuggestion";
import RouteSEO from "./components/seo/RouteSEO";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteSEO />

      <LocaleSuggestion />

      <AppRoutes />

      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
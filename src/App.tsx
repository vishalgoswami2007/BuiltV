import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import CookieConsent from "./components/common/CookieConsent";
import LocaleSuggestion from "./components/localization/LocaleSuggestion";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LocaleSuggestion />

      <AppRoutes />

      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import CookieConsent from "./components/common/CookieConsent";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
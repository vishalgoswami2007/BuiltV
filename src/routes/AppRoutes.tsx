import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Work from "../pages/Work/Work";
import Solutions from "../pages/Solutions/Solutions";
import Pricing from "../pages/Pricing/Pricing";
import Demo from "../pages/Demo/Demo";
import DemoExperience from "../pages/Demo/DemoExperience";
import About from "../pages/About/About";
import Insights from "../pages/Insights/Insights";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import Cookies from "../pages/Cookies/Cookies";
import Accessibility from "../pages/Accessibility/Accessibility";
import Security from "../pages/Security/Security";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/demo/experience" element={<DemoExperience />} />
      <Route path="/about" element={<About />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/security" element={<Security />} />
    </Routes>
  );
}

export default AppRoutes;
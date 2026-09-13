import type { ReactNode } from "react";

import Navbar from "./Navbar";

import Footer from "../sections/Footer";

import LanguageNotice from "../localization/LanguageNotice";

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />

      <LanguageNotice />
    </div>
  );
}

export default PageLayout;
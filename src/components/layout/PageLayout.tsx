import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "../sections/Footer";

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default PageLayout;
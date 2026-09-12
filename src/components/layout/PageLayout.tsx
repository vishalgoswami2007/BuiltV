import type { ReactNode } from "react";
import Navbar from "./Navbar";

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050608] text-[#F8FAFC]">
      <Navbar />
      <main className="pt-24">{children}</main>
    </div>
  );
}

export default PageLayout;
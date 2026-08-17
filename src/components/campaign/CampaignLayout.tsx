import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

type CampaignLayoutProps = {
  children: ReactNode;
};

export default function CampaignLayout({ children }: CampaignLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary font-body text-text-secondary">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

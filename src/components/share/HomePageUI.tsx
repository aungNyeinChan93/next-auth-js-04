import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CTASection from "./CTASection";
import FooterSection from "./FooterSection";

export default function HomePageUI() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

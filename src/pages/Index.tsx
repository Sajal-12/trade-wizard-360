
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";
import { GoogleGeminiEffectDemo } from "@/components/ui/google-gemini-effect-demo";

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>TradeWizard | AI-Powered Trading Automation</title>
        <meta
          name="description"
          content="Experience the power of AI-driven trading automation with TradeWizard. Analyze markets, execute trades, and maximize returns with unprecedented accuracy."
        />
      </Helmet>
      
      <Navbar />
      
      <Hero />
      
      <Features />
      
      <CTASection />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Interactive Demo</h2>
          <GoogleGeminiEffectDemo />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

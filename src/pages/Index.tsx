
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";

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
      
      <Footer />
    </div>
  );
};

export default Index;

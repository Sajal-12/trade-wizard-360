
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Zap, Shield } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent dark:from-blue-950/20 dark:to-slate-950/0 opacity-60" />
        <div className="absolute top-16 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-48 right-1/3 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 mb-5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full animate-fade-down">
            AI-Powered Trading Automation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight md:leading-tight lg:leading-tight animate-fade-down" style={{ animationDelay: "100ms" }}>
            Elevate Your Trading with <span className="text-blue-500">AI</span> Precision
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-down" style={{ animationDelay: "200ms" }}>
            Experience the power of advanced algorithms and machine learning to analyze markets, execute trades, and maximize your returns with unprecedented accuracy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-down" style={{ animationDelay: "300ms" }}>
            <Link to="/signup">
              <Button size="lg" className="font-medium text-base w-full sm:w-auto">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/#features">
              <Button variant="outline" size="lg" className="font-medium text-base w-full sm:w-auto">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "400ms" }}>
          <GlassCard className="p-6 text-center flex flex-col items-center">
            <LineChart className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-lg font-semibold mb-1">+86%</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Average ROI for active users</p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center flex flex-col items-center">
            <Zap className="h-10 w-10 text-amber-500 mb-3" />
            <h3 className="text-lg font-semibold mb-1">32ms</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Average execution time</p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center flex flex-col items-center">
            <Shield className="h-10 w-10 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold mb-1">99.9%</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Uptime and reliability</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from "react";
import GlassCard from "../ui/GlassCard";
import AnimatedCard from "../ui/AnimatedCard";
import { 
  LayoutGrid, 
  Webhook, 
  History, 
  Play, 
  Shield, 
  BrainCircuit, 
  Globe, 
  LayoutDashboard, 
  Bell, 
  UserCog 
} from "lucide-react";

const features = [
  {
    title: "Trading Strategy Builder",
    description: "Create custom strategies with our drag-and-drop interface or let our AI suggest optimized approaches based on your goals.",
    icon: LayoutGrid,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "TradingView Webhook Integration",
    description: "Seamlessly connect TradingView alerts to trigger trades based on your technical analysis signals.",
    icon: Webhook,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "Backtesting Engine",
    description: "Test your strategies against historical data to validate performance before risking real capital.",
    icon: History,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Automated Trading Execution",
    description: "Connect to major exchanges and execute trades with precision timing and minimal slippage.",
    icon: Play,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Risk Management Tools",
    description: "Protect your capital with advanced stop-loss, take-profit, and position sizing features.",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "AI Market Insights",
    description: "Leverage machine learning to detect patterns, trends, and anomalies before they become obvious.",
    icon: BrainCircuit,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Multi-Exchange Support",
    description: "Trade across multiple exchanges and asset classes from a single unified interface.",
    icon: Globe,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    title: "Customizable Dashboard",
    description: "Monitor your portfolio, track performance, and visualize key metrics with our flexible dashboard.",
    icon: LayoutDashboard,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    title: "Alerts & Notifications",
    description: "Stay informed with real-time alerts via email, SMS, Telegram, or in-app notifications.",
    icon: Bell,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Admin Panel",
    description: "Comprehensive admin tools for user management, analytics, and system monitoring.",
    icon: UserCog,
    color: "text-slate-500",
    bgColor: "bg-slate-500/10",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Successful Trading
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our comprehensive suite of tools empowers traders of all levels to optimize their strategies and maximize returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={feature.title} 
              animationDelay={100 * index}
              className="h-full"
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <div className={`${feature.bgColor} p-3 rounded-lg w-fit mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 flex-grow">
                  {feature.description}
                </p>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

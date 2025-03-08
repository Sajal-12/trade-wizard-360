
import React from "react";
import GlassCard from "../ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, BrainCircuit, Database, Play } from "lucide-react";

// Sample strategy templates - would be fetched from API
const strategyTemplates = [
  {
    name: "Moving Average Crossover",
    description: "Uses 50-day and 200-day moving averages to identify trend changes",
    complexity: "Beginner",
    assetClass: "All",
    tags: ["Technical", "Trend Following"],
  },
  {
    name: "RSI Divergence",
    description: "Identifies divergences between price and RSI to spot potential reversals",
    complexity: "Intermediate",
    assetClass: "Crypto, Forex",
    tags: ["Technical", "Reversal"],
  },
  {
    name: "MACD Momentum",
    description: "Uses MACD histogram for momentum tracking and signal generation",
    complexity: "Beginner",
    assetClass: "All",
    tags: ["Technical", "Momentum"],
  },
];

const StrategyBuilder = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Strategy Builder</h2>
        <Button>
          <Plus size={16} className="mr-2" /> New Strategy
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Build from Scratch Card */}
        <GlassCard className="p-6 flex flex-col justify-between h-full border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
          <div>
            <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 text-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Plus size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Build from Scratch</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Create a custom trading strategy using our drag-and-drop builder interface.
            </p>
          </div>
          <Button variant="outline" className="w-full justify-between">
            Start Building <ArrowRight size={16} />
          </Button>
        </GlassCard>
        
        {/* AI Assistant Card */}
        <GlassCard className="p-6 flex flex-col justify-between h-full border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
          <div>
            <div className="mb-4 bg-amber-100 dark:bg-amber-900/30 text-amber-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <BrainCircuit size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Let our AI suggest optimized strategies based on your goals and risk tolerance.
            </p>
          </div>
          <Button variant="outline" className="w-full justify-between">
            Get Suggestions <ArrowRight size={16} />
          </Button>
        </GlassCard>
        
        {/* Import Strategy Card */}
        <GlassCard className="p-6 flex flex-col justify-between h-full border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
          <div>
            <div className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Database size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Import Strategy</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Import Pine Script from TradingView or connect to existing indicators.
            </p>
          </div>
          <Button variant="outline" className="w-full justify-between">
            Import <ArrowRight size={16} />
          </Button>
        </GlassCard>
      </div>
      
      {/* Strategy Templates */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Popular Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategyTemplates.map((template) => (
            <GlassCard key={template.name} className="p-6">
              <h4 className="font-semibold mb-2">{template.name}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {template.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span>Complexity: {template.complexity}</span>
                <span>Assets: {template.assetClass}</span>
              </div>
              <div className="flex justify-between gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Preview
                </Button>
                <Button size="sm" className="flex-1">
                  <Play size={14} className="mr-1" /> Use
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="link">
            Browse All Templates <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StrategyBuilder;

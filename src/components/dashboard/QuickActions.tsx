
import React from "react";
import { Button } from "@/components/ui/button";
import GlassCard from "../ui/GlassCard";
import { Play, Pause, RefreshCw, Bell, Webhook, ExternalLink } from "lucide-react";

const runningBots = [
  {
    name: "BTC Momentum",
    status: "active",
    exchange: "Binance",
    lastSignal: "Buy @ $39,245",
    profit: "+12.4%",
  },
  {
    name: "ETH Swing Trader",
    status: "paused",
    exchange: "Bybit",
    lastSignal: "Sell @ $2,835",
    profit: "+8.2%",
  },
];

const QuickActions = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Bots */}
        <GlassCard className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Active Trading Bots</h3>
            <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {runningBots.map((bot) => (
              <div key={bot.name} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${bot.status === 'active' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                    <h4 className="font-semibold">{bot.name}</h4>
                  </div>
                  <div className="flex space-x-2">
                    {bot.status === 'active' ? (
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-500">
                        <Pause size={14} />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-500">
                        <Play size={14} />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-500">
                      <RefreshCw size={14} />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">{bot.exchange}</span>
                  <span className="text-slate-500 dark:text-slate-400">{bot.lastSignal}</span>
                </div>
                <div className="mt-2">
                  <span className={`text-sm font-medium ${bot.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {bot.profit} all-time
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <Button className="w-full mt-4">
            <Play size={16} className="mr-2" /> Launch New Bot
          </Button>
        </GlassCard>
        
        {/* Connect & Integrate */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4">Connect Exchange</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Connect to your preferred exchanges to enable automated trading.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2 flex items-center justify-center">
                <span className="font-semibold text-sm">Binance</span>
              </div>
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2 flex items-center justify-center">
                <span className="font-semibold text-sm">Bybit</span>
              </div>
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2 flex items-center justify-center">
                <span className="font-semibold text-sm">KuCoin</span>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              <ExternalLink size={16} className="mr-2" /> Connect Exchange
            </Button>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start">
                <Webhook size={16} className="mr-2" /> TradingView Webhooks
              </Button>
              <Button variant="outline" className="justify-start">
                <Bell size={16} className="mr-2" /> Setup Alerts
              </Button>
              <Button variant="outline" className="justify-start">
                <RefreshCw size={16} className="mr-2" /> Run Backtest
              </Button>
              <Button variant="outline" className="justify-start">
                <ExternalLink size={16} className="mr-2" /> API Docs
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;


import React from "react";
import GlassCard from "../ui/GlassCard";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data - would be replaced with real API data
const marketData = [
  { name: "BTC", price: "$39,452", change: "+2.4%", isUp: true },
  { name: "ETH", price: "$2,841", change: "+1.8%", isUp: true },
  { name: "BNB", price: "$456", change: "-0.5%", isUp: false },
  { name: "SOL", price: "$124", change: "+5.2%", isUp: true },
  { name: "ADA", price: "$0.64", change: "-1.2%", isUp: false },
];

// Sample chart data - would be replaced with real API data
const chartData = [
  { time: '00:00', btc: 39100, eth: 2820 },
  { time: '04:00', btc: 39200, eth: 2800 },
  { time: '08:00', btc: 39350, eth: 2810 },
  { time: '12:00', btc: 39280, eth: 2790 },
  { time: '16:00', btc: 39400, eth: 2830 },
  { time: '20:00', btc: 39452, eth: 2841 },
];

const MarketOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <GlassCard className="lg:col-span-2 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Market Trends</h3>
          <select className="text-sm border border-slate-200 dark:border-slate-700 rounded-md py-1 px-3 bg-transparent">
            <option value="24h">24H</option>
            <option value="7d">7D</option>
            <option value="30d">30D</option>
          </select>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '8px', 
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  padding: '8px',
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="btc" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="eth" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold mb-6">Top Assets</h3>
        <div className="space-y-4">
          {marketData.map((coin) => (
            <div key={coin.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                  <span className="text-xs font-medium">{coin.name}</span>
                </div>
                <div>
                  <p className="font-medium">{coin.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{coin.price}</p>
                </div>
              </div>
              <div className={`flex items-center ${coin.isUp ? 'text-green-500' : 'text-red-500'}`}>
                {coin.isUp ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                <span className="text-sm font-medium">{coin.change}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
          View All Assets
        </button>
      </GlassCard>
    </div>
  );
};

export default MarketOverview;

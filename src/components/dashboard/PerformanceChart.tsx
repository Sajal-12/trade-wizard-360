
import React from "react";
import GlassCard from "../ui/GlassCard";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown, DollarSign, Percent } from "lucide-react";

// Sample performance data - would be fetched from an API
const performanceData = [
  { date: 'Jan', pnl: 2500 },
  { date: 'Feb', pnl: 1800 },
  { date: 'Mar', pnl: 4000 },
  { date: 'Apr', pnl: 3200 },
  { date: 'May', pnl: 5600 },
  { date: 'Jun', pnl: 4900 },
  { date: 'Jul', pnl: 6800 },
];

const kpiData = [
  { title: "Total P&L", value: "$12,450", change: "+18.2%", isPositive: true, icon: DollarSign },
  { title: "Win Rate", value: "68%", change: "+5.3%", isPositive: true, icon: Percent },
  { title: "Drawdown", value: "4.2%", change: "-1.5%", isPositive: true, icon: ArrowDown },
  { title: "ROI", value: "32.4%", change: "+2.8%", isPositive: true, icon: ArrowUp },
];

const PerformanceChart = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => (
          <GlassCard key={kpi.title} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{kpi.title}</p>
                <p className="text-2xl font-semibold mb-2">{kpi.value}</p>
                <span className={`text-xs font-medium ${kpi.isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                  {kpi.isPositive ? <ArrowUp size={12} className="mr-1" /> : <ArrowDown size={12} className="mr-1" />}
                  {kpi.change}
                </span>
              </div>
              <div className={`p-2 rounded-lg ${index % 4 === 0 ? 'bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400' : 
                               index % 4 === 1 ? 'bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400' :
                               index % 4 === 2 ? 'bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400' :
                               'bg-amber-100 text-amber-500 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                <kpi.icon size={16} />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
      
      {/* Performance Chart */}
      <GlassCard className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">P&L History</h3>
          <select className="text-sm border border-slate-200 dark:border-slate-700 rounded-md py-1 px-3 bg-transparent">
            <option value="7d">7 Days</option>
            <option value="30d">30 Days</option>
            <option value="90d">90 Days</option>
            <option value="ytd" selected>Year to Date</option>
            <option value="1y">1 Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={performanceData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
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
              <defs>
                <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="pnl" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fill="url(#pnlGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </div>
  );
};

export default PerformanceChart;

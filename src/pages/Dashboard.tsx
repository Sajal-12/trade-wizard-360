
import React from "react";
import { Helmet } from "react-helmet";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MarketOverview from "@/components/dashboard/MarketOverview";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import QuickActions from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | TradeWizard</title>
      </Helmet>
      
      <DashboardLayout>
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Overview of your trading performance and market conditions
          </p>
        </div>
        
        <MarketOverview />
        
        <PerformanceChart />
        
        <QuickActions />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;

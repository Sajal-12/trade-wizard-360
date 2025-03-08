
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  LineChart, 
  Settings, 
  Users, 
  Globe, 
  Bell, 
  Menu, 
  X, 
  LayoutGrid,
  History,
  Shield,
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      name: "Strategy Builder",
      icon: LayoutGrid,
      href: "/dashboard/strategy",
    },
    {
      name: "Backtesting",
      icon: History,
      href: "/dashboard/backtesting",
    },
    {
      name: "Analytics",
      icon: LineChart,
      href: "/dashboard/analytics",
    },
    {
      name: "Risk Management",
      icon: Shield,
      href: "/dashboard/risk",
    },
    {
      name: "Exchanges",
      icon: Globe,
      href: "/dashboard/exchanges",
    },
    {
      name: "Notifications",
      icon: Bell,
      href: "/dashboard/notifications",
    },
    {
      name: "Team",
      icon: Users,
      href: "/dashboard/team",
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Sidebar - Desktop */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 transform transition-transform duration-300 ease-in-out bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 hidden md:block",
          !isSidebarOpen && "md:-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200 dark:border-slate-700">
            <Link to="/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-blue-500">Trade</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Wizard</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      location.pathname === item.href
                        ? "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/40"
                    )}
                  >
                    <item.icon size={18} className="mr-3 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 flex items-center justify-center font-medium mr-3">
                  TW
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    User Name
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Pro Plan
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-slate-500">
                <LogOut size={18} />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 md:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/dashboard" className="flex items-center">
            <span className="text-xl font-bold text-blue-500">Trade</span>
            <span className="text-xl font-bold text-slate-900 dark:text-white">Wizard</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-white dark:bg-slate-800 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-16">
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      location.pathname === item.href
                        ? "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/40"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon size={18} className="mr-3 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 flex items-center justify-center font-medium mr-3">
                  TW
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    User Name
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Pro Plan
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-slate-500">
                <LogOut size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "md:ml-64" : "md:ml-0"
        )}
      >
        <div className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={cn("hidden md:flex", !isSidebarOpen && "rotate-180")}
          >
            <Menu size={20} />
          </Button>
        </div>
        
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

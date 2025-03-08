
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  blur?: "none" | "sm" | "md" | "lg";
}

const blurValues = {
  none: "",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
};

const GlassCard = ({
  children,
  className,
  hoverEffect = true,
  blur = "sm",
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-700/50 shadow-glass",
        blurValues[blur],
        hoverEffect && "hover:shadow-glass-hover hover:border-slate-200/80 dark:hover:border-slate-700/80 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;

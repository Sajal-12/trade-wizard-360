
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
  animationType?: "fade-up" | "fade-in" | "scale-in" | "fade-left";
}

const AnimatedCard = ({
  children,
  className,
  animationDelay = 0,
  animationType = "fade-up",
  ...props
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, animationDelay);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [animationDelay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-500 ease-out",
        !isVisible && "opacity-0",
        isVisible && `animate-${animationType}`,
        className
      )}
      style={{
        transitionDelay: `${animationDelay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;

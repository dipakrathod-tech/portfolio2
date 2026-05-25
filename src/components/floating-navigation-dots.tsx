"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "work", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

function FloatingNavigationDots() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show navigator after scrolling past hero section
          const heroSection = document.getElementById("hero");
          if (heroSection) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            setIsVisible(window.scrollY > heroBottom / 2);
          }

          // Find active section
          const sectionElements = sections.map(section => ({
            ...section,
            element: document.getElementById(section.id)
          })).filter(section => section.element);

          const scrollPosition = window.scrollY + window.innerHeight / 3;

          for (let i = sectionElements.length - 1; i >= 0; i--) {
            const section = sectionElements[i];
            if (section.element && section.element.offsetTop <= scrollPosition) {
              setActiveSection(section.id);
              break;
            }
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use instant scroll for better performance
      element.scrollIntoView({
        behavior: 'instant',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      >
        <div className="flex flex-col gap-3 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg">
          {sections.map((section) => (
            <Tooltip key={section.id}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-3 h-3 rounded-full p-0 transition-all duration-300 hover:scale-125 relative",
                    "border-2",
                    activeSection === section.id
                      ? "bg-primary border-primary shadow-lg shadow-primary/25"
                      : "bg-muted-foreground/30 border-muted-foreground/20 hover:bg-muted-foreground/50 hover:border-muted-foreground/40"
                  )}
                  aria-label={`Navigate to ${section.label} section`}
                >
                  {/* Active indicator ring */}
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 rounded-full border-2 border-primary/30"
                      style={{ padding: "2px" }}
                    />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                side="left" 
                className="bg-white text-black border-white/20 shadow-xl"
                sideOffset={12}
              >
                <p className="font-medium text-sm">{section.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </TooltipProvider>
  );
}

export { FloatingNavigationDots };

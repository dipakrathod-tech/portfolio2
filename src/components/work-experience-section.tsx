"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon } from "lucide-react";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { workData } from "@/data/work-data";

export function WorkExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (company: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(company)) {
      newExpanded.delete(company);
    } else {
      newExpanded.add(company);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <IoRocketOutline className="mr-2 h-3 w-3" />
            Professional Journey
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">
              Work Experience
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional experience across different companies and roles in the tech industry.
          </p>
        </div>

        {/* Work Experience Content */}
        <div className="max-w-5xl mx-auto">
            <div className="rounded-lg border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm shadow-lg p-4 sm:p-6">
              <div className="space-y-6">
                {workData.map((work) => {
                  const isExpanded = expandedItems.has(work.company);
                  const hasDescription = work.description && work.description.trim().length > 0;
                  
                  return (
                    <div key={work.company} className="group">
                      <div 
                        className={cn(
                          "flex flex-col sm:flex-row sm:items-start gap-4 cursor-pointer transition-all duration-200",
                          hasDescription && "hover:bg-muted/50 rounded-lg p-2 -m-2"
                        )}
                        onClick={() => hasDescription && toggleExpanded(work.company)}
                      >
                        {/* Mobile Layout */}
                        <div className="flex items-start gap-4 sm:gap-0">
                          <Avatar className="size-12 border bg-muted-background dark:bg-foreground flex-shrink-0">
                            <AvatarImage
                              src={work.logoUrl}
                              alt={work.company}
                              className="object-contain"
                            />
                            <AvatarFallback>{work.company[0]}</AvatarFallback>
                          </Avatar>
                          
                          {/* Mobile Content */}
                          <div className="flex-1 sm:hidden">
                            <div className="flex items-center gap-1 flex-wrap">
                              <h3 className="font-semibold leading-none text-base">{work.company}</h3>
                              {work.badges && work.badges.length > 0 && (
                                <span className="inline-flex gap-x-1 ml-1">
                                  {work.badges.map((badge, badgeIndex) => (
                                    <Badge
                                      variant="secondary"
                                      className="align-middle text-xs"
                                      key={badgeIndex}
                                    >
                                      {badge}
                                    </Badge>
                                  ))}
                                </span>
                              )}
                              {hasDescription && (
                                <motion.div
                                  animate={{ rotate: isExpanded ? 90 : 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="ml-1"
                                >
                                  <ChevronRightIcon 
                                    className={cn(
                                      "size-4 transition-all duration-300 ease-out",
                                      hasDescription ? "opacity-60 group-hover:opacity-100" : "opacity-0"
                                    )}
                                  />
                                </motion.div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {work.title}
                            </p>
                            <div className="text-sm text-muted-foreground mt-2">
                              {work.start} - {work.end ?? "Present"}
                            </div>
                          </div>
                        </div>
                        
                        {/* Desktop Layout */}
                        <div className="hidden sm:flex sm:flex-1 sm:ml-4">
                          <div className="flex-1 space-y-1">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-1 flex-wrap">
                                  <h3 className="font-semibold leading-none text-base">{work.company}</h3>
                                  {work.badges && work.badges.length > 0 && (
                                    <span className="inline-flex gap-x-1 ml-2">
                                      {work.badges.map((badge, badgeIndex) => (
                                        <Badge
                                          variant="secondary"
                                          className="align-middle text-xs"
                                          key={badgeIndex}
                                        >
                                          {badge}
                                        </Badge>
                                      ))}
                                    </span>
                                  )}
                                  {hasDescription && (
                                    <motion.div
                                      animate={{ rotate: isExpanded ? 90 : 0 }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                      className="ml-2"
                                    >
                                      <ChevronRightIcon 
                                        className={cn(
                                          "size-4 transition-all duration-300 ease-out",
                                          hasDescription ? "opacity-60 group-hover:opacity-100" : "opacity-0"
                                        )}
                                      />
                                    </motion.div>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {work.title}
                                </p>
                              </div>
                              <div className="text-sm text-muted-foreground lg:ml-4 flex-shrink-0">
                                {work.start} - {work.end ?? "Present"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Expandable Description */}
                      {hasDescription && (
                        <motion.div
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{
                            opacity: isExpanded ? 1 : 0,
                            maxHeight: isExpanded ? "500px" : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 ml-4 sm:ml-16 text-sm text-muted-foreground">
                            {work.description}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

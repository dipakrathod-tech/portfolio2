import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/education-data";

export function EducationSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <GraduationCap className="mr-2 h-3 w-3" />
            Educational Background
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">
              Education
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey through computer science, business, and continuous learning.
          </p>
        </div>

        {/* Education Content */}
        <div className="max-w-5xl mx-auto">
            <div className="rounded-lg border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm shadow-lg p-4 sm:p-6">
              <div className="space-y-6">
                {educationData.map((education) => {
                  return (
                    <div key={education.school} className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex items-center sm:items-start gap-4 sm:gap-0">
                        <Avatar className="size-12 border bg-muted-background dark:bg-foreground flex-shrink-0">
                          <AvatarImage
                            src={education.logoUrl}
                            alt={education.school}
                            className="object-contain"
                          />
                          <AvatarFallback>{education.school[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 sm:hidden">
                          <h3 className="font-semibold leading-none text-base">{education.school}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {education.degree}
                          </p>
                          <div className="text-sm text-muted-foreground mt-2">
                            {education.start} - {education.end}
                          </div>
                        </div>
                      </div>
                      
                      {/* Desktop Layout */}
                      <div className="hidden sm:flex sm:flex-1 sm:ml-4">
                        <div className="flex-1 space-y-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                            <div className="flex-1">
                              <h3 className="font-semibold leading-none text-base">{education.school}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {education.degree}
                              </p>
                            </div>
                            <div className="text-sm text-muted-foreground lg:ml-4 flex-shrink-0">
                              {education.start} - {education.end}
                            </div>
                          </div>
                        </div>
                      </div>
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

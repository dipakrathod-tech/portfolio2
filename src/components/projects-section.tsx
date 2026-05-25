import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import {
  SiGithub,
} from "react-icons/si";
import {
  IoRocketOutline,
  IoCodeSlashOutline,
  IoCloudOutline,
  IoServerOutline,
  IoShieldCheckmarkOutline,
  IoGlobeOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { allProjects, projectStats, getTechIcon } from "@/data/project-data";

export function ProjectsSection() {
  // Use first 3 projects from the data as highlights
  const projectHighlights = allProjects.slice(0, 3);

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <IoRocketOutline className="mr-2 h-3 w-3" />
              Projects Preview
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-foreground">
                Building Solutions
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my cloud infrastructure, DevOps automation, and development projects 
              that demonstrate practical solutions to real-world challenges.
              <Link href="/projects" className="text-primary hover:underline ml-1">
                Explore the complete portfolio →
              </Link>
            </p>
          
        </div>

        {/* Stats Overview */}
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {projectStats.map((stat) => (
              <Card key={stat.label} className="text-center border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-2">
                      {React.createElement(stat.icon, {
                        className: "h-6 w-6 text-current"
                      })}
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.count}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              
            ))}
          </div>

        {/* Project Highlights */}
        
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <IoRocketOutline className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold">Project Highlights</h3>
              </div>
              <Link href="/projects" className="text-primary hover:underline text-sm">
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectHighlights.map((project) => (
                <MagicCard
                  key={project.title}
                  className="cursor-pointer border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  gradientColor="#3b82f610"
                >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {React.createElement(project.icon, {
                        className: "h-6 w-6 text-current"
                      })}
                    </div>
                    <Badge className="bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20">
                      <IoCodeSlashOutline className="mr-1 h-3 w-3" />
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">{project.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                    
                    <Badge className="bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20" variant="outline">
                      {project.category}
                    </Badge>
                    
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs flex items-center gap-1">
                            {React.createElement(getTechIcon(tech), { 
                              className: "h-3 w-3 text-current" 
                            })}
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                </MagicCard>
                
              ))}
            </div>
          </div>

        {/* Enhanced CTA Section */}
        
          <div className="text-center">
          <MagicCard
            className="max-w-3xl mx-auto p-8 border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm"
            gradientColor="#3b82f610"
          >
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <IoRocketOutline className="h-10 w-10 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-3">Complete Project Portfolio</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Explore {allProjects.length}+ projects across DevOps, Cloud Infrastructure, Web Development, and AI/ML. 
                  See detailed implementations, live demos, and source code.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6 text-sm">
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-black/10 dark:bg-white/10">
                    <IoCloudOutline className="h-4 w-4" />
                    <span>DevOps</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-black/10 dark:bg-white/10">
                    <IoGlobeOutline className="h-4 w-4" />
                    <span>Web Dev</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-black/10 dark:bg-white/10">
                    <IoServerOutline className="h-4 w-4" />
                    <span>AI/ML</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-black/10 dark:bg-white/10">
                    <IoShieldCheckmarkOutline className="h-4 w-4" />
                    <span>Security</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="flex items-center gap-2" asChild>
                  <Link href="/projects">
                    <IoEyeOutline className="h-4 w-4" />
                    View Complete Portfolio
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </MagicCard>
          </div>
        
      </div>
    </section>
  );
}

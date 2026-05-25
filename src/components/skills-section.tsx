import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  IoRocketOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { 
  skillCategories, 
  tools, 
  getLevelColor, 
  getCategoryIcon 
} from "@/data/skill-data";

export function SkillsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <IoRocketOutline className="mr-2 h-3 w-3" />
              My Skills
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-foreground">
                Technical Expertise
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, tools, and technologies 
              I work with to build scalable and efficient solutions.
            </p>
          
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category) => {
            return (
              <div key={category.title} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                        {React.createElement(getCategoryIcon(category.title), {
                          className: "h-6 w-6 text-primary"
                        })}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-1">
                      <Separator className="bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pl-0 sm:pl-12">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="group p-4 rounded-lg border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                      >
                      <div className="flex items-center gap-3 mb-3">
                        {React.createElement(skill.icon, {
                          className: "h-5 w-5 group-hover:scale-110 transition-transform flex-shrink-0",
                          style: { color: skill.color }
                        })}
                        <span className="font-medium text-sm truncate">{skill.name}</span>
                      </div>
                        <Badge className={getLevelColor(skill.level)} variant="outline">
                          {skill.level}
                        </Badge>
                        </div>
                      
                    ))}
                  </div>
                </div>
              
            );
          })}
        </div>

        {/* Tools & Technologies */}
        
          <div className="space-y-6 mb-16">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                  <IoSettingsOutline className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold">Tools & Technologies</h3>
                  <p className="text-sm text-muted-foreground">Technologies I use regularly in my development workflow</p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-1">
                <Separator className="bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 pl-0 sm:pl-12">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group p-4 rounded-lg border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[80px]"
                >
                    <div className="mb-2 flex-shrink-0">
                      {React.createElement(tool.icon, {
                        className: "h-8 w-8 group-hover:scale-110 transition-transform",
                        style: { color: tool.color }
                      })}
                    </div>
                    <span className="text-xs font-medium break-words">{tool.name}</span>
                  </div>
                
              ))}
            </div>
          </div>
        
      </div>
    </section>
  );
}

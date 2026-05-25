import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import {
  IoCheckmarkCircleOutline,
  IoTimeOutline,
  IoAddOutline,
  IoSchoolOutline,
  IoTrophyOutline,
  IoOpenOutline,
  IoEyeOutline,
} from "react-icons/io5";
import {
  completedCertifications,
  inProgressCertifications,
  plannedCertifications,
  certificationStats,
  getLevelColor,
  getStatusColor,
} from "@/data/certification-data";

export function CertificationsSection() {
  // Create highlights by combining completed and in-progress certifications
  const certificationHighlights = [
    ...completedCertifications.slice(0, 2), // First 2 completed
    ...inProgressCertifications.slice(0, 1) // First 1 in progress
  ];

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <IoSchoolOutline className="mr-2 h-3 w-3" />
              Certifications Preview
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-foreground">
                Professional Development
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A snapshot of my certification journey in cloud computing and DevOps. 
              <Link href="/certifications" className="text-primary hover:underline ml-1">
                Explore the complete portfolio →
              </Link>
            </p>
          
        </div>

        {/* Stats Overview */}
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {certificationStats.map((stat) => (
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

        {/* Certification Highlights */}
        
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <IoTrophyOutline className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold">Certification Highlights</h3>
              </div>
              <Link href="/certifications" className="text-primary hover:underline text-sm">
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificationHighlights.map((cert) => (
                <MagicCard
                  key={cert.name}
                  className="cursor-pointer border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  gradientColor="#3b82f610"
                >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {React.createElement(cert.icon, {
                        className: "h-6 w-6 text-current"
                      })}
                    </div>
                    <Badge className={getStatusColor(cert.status)}>
                      {cert.status === "Completed" && <IoCheckmarkCircleOutline className="mr-1 h-3 w-3" />}
                      {cert.status === "In Progress" && <IoTimeOutline className="mr-1 h-3 w-3" />}
                      {cert.status}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.provider}</p>
                    
                    <Badge className={getLevelColor(cert.level)} variant="outline">
                      {cert.level}
                    </Badge>
                    
                    {"progress" in cert && cert.progress && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{cert.progress}%</span>
                        </div>
                        <Progress value={cert.progress} className="h-1.5" />
                      </div>
                    )}
                    
                    {/* Verify Credentials Button for Completed Certifications */}
                    {cert.status === "Completed" && "credentialUrl" in cert && (
                      <div className="mt-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full text-xs flex items-center gap-1"
                          asChild
                        >
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <IoCheckmarkCircleOutline className="h-3 w-3" />
                            Verify Credential
                          </a>
                        </Button>
                      </div>
                    )}
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
                  <IoSchoolOutline className="h-10 w-10 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-3">Complete Certification Portfolio</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Explore {completedCertifications.length + inProgressCertifications.length + plannedCertifications.length} certifications across cloud platforms, DevOps tools, and security practices. 
                  See detailed progress, study materials, and verification links.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-black/10 dark:bg-white/10">
                    <IoCheckmarkCircleOutline className="h-4 w-4" />
                    <span>{completedCertifications.length} Completed</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-black/10 dark:bg-white/10">
                    <IoTimeOutline className="h-4 w-4" />
                    <span>{inProgressCertifications.length} In Progress</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-black/10 dark:bg-white/10">
                    <IoAddOutline className="h-4 w-4" />
                    <span>{plannedCertifications.length} Planned</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="flex items-center gap-2" asChild>
                  <Link href="/certifications">
                    <IoEyeOutline className="h-4 w-4" />
                    View Complete Portfolio
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <IoOpenOutline className="h-4 w-4" />
                    LinkedIn Profile
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

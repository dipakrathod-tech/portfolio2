import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import {
  IoMedalOutline,
  IoTrophyOutline,
  IoCalendarOutline,
  IoCheckmarkCircleOutline,
  IoTimeOutline,
  IoAddOutline,
  IoSchoolOutline,
  IoOpenOutline,
  IoArrowBackOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import {
  completedCertifications,
  inProgressCertifications,
  plannedCertifications,
  certificationStats,
  getLevelColor,
  getStatusColor,
  getPriorityColor,
} from "@/data/certification-data";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <IoArrowBackOutline className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20"
            >
              <IoSchoolOutline className="mr-2 h-3 w-3" />
              Complete Certification Portfolio
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Professional Certifications
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my professional development journey,
              showcasing completed certifications, current studies, and future
              learning goals in cloud computing and DevOps.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {certificationStats.map((stat) => (
            <Card
              key={stat.label}
              className="text-center border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-2">
                  {React.createElement(stat.icon, {
                    className: "h-6 w-6 text-current",
                  })}
                </div>
                <div className="text-2xl font-bold text-primary">
                  {stat.count}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Completed Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <IoCheckmarkCircleOutline className="h-5 w-5 text-current" />
            <h2 className="text-2xl font-bold">Completed Certifications</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {completedCertifications.map((cert, index) => (
              <Card
                key={cert.name}
                className="relative overflow-hidden border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <BorderBeam
                  size={100}
                  duration={10}
                  delay={index}
                  colorFrom="#22C55E"
                  colorTo="#16A34A"
                  borderWidth={1}
                />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-black/10 dark:bg-white/10">
                        {React.createElement(cert.icon, {
                          className: "h-6 w-6 text-current",
                        })}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <CardDescription>{cert.provider}</CardDescription>
                      </div>
                    </div>
                    <IoTrophyOutline className="h-5 w-5 text-current" />
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Badge className={getLevelColor(cert.level)}>
                      {cert.level}
                    </Badge>
                    <Badge className={getStatusColor(cert.status)}>
                      <IoCheckmarkCircleOutline className="mr-1 h-3 w-3" />
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <IoCalendarOutline className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Completed: {cert.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <IoMedalOutline className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Valid until: {cert.validUntil}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <IoTrophyOutline className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground font-mono text-xs">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoOpenOutline className="mr-2 h-3 w-3" />
                      Verify Credential
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* In Progress Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <IoTimeOutline className="h-5 w-5 text-current" />
            <h2 className="text-2xl font-bold">Currently Pursuing</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {inProgressCertifications.map((cert, index) => (
              <Card
                key={cert.name}
                className="relative overflow-hidden border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <BorderBeam
                  size={100}
                  duration={12}
                  delay={index + 2}
                  colorFrom="#F59E0B"
                  colorTo="#D97706"
                  borderWidth={1}
                />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-black/10 dark:bg-white/10">
                        {React.createElement(cert.icon, {
                          className: "h-6 w-6 text-current",
                        })}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <CardDescription>{cert.provider}</CardDescription>
                      </div>
                    </div>
                    <IoTimeOutline className="h-5 w-5 text-current" />
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Badge className={getLevelColor(cert.level)}>
                      {cert.level}
                    </Badge>
                    <Badge className={getStatusColor(cert.status)}>
                      <IoTimeOutline className="mr-1 h-3 w-3" />
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <IoCalendarOutline className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Expected: {cert.expectedDate}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Study Materials:
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {cert.studyMaterials.map((material) => (
                          <Badge
                            key={material}
                            variant="secondary"
                            className="text-xs"
                          >
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Planned Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <IoAddOutline className="h-5 w-5 text-current" />
            <h2 className="text-2xl font-bold">Future Learning Goals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedCertifications.map((cert) => (
              <MagicCard
                key={cert.name}
                className="cursor-pointer border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                gradientColor="#3b82f610"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-black/10 dark:bg-white/10">
                        {React.createElement(cert.icon, {
                          className: "h-6 w-6 text-current",
                        })}
                      </div>
                      <IoAddOutline className="h-4 w-4 text-current" />
                    </div>
                    <Badge
                      className={getPriorityColor(cert.priority)}
                      variant="outline"
                    >
                      {cert.priority} Priority
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {cert.provider}
                    </p>

                    <div className="flex gap-1 mb-3">
                      <Badge
                        className={getLevelColor(cert.level)}
                        variant="outline"
                      >
                        {cert.level}
                      </Badge>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3">
                      {cert.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs mb-3">
                      <IoCalendarOutline className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Target: {cert.expectedDate}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{cert.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center">
          <MagicCard
            className="max-w-2xl mx-auto p-8 border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm"
            gradientColor="#3b82f610"
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <IoDownloadOutline className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive overview of my certifications, skills, and
                  professional experience
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <IoDownloadOutline className="h-4 w-4" />
                  Download PDF Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoOpenOutline className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}

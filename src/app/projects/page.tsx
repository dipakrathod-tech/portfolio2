"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import {
  IoStarOutline,
  IoEyeOutline,
  IoDownloadOutline,
  IoOpenOutline,
  IoLogoGithub,
  IoRocketOutline,
  IoArrowBackOutline,
} from "react-icons/io5";
import {
  devopsProjects,
  cloudProjects,
  webProjects,
  aimlProjects,
  allProjects,
  projectStats,
  getDifficultyColor,
  getTechIcon,
} from "@/data/project-data";

export default function ProjectsPage() {
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
              <IoRocketOutline className="mr-2 h-3 w-3" />
              Project Portfolio
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my DevOps, Cloud Infrastructure, Web
              Development, and AI/ML projects demonstrating practical solutions
              to complex technical challenges.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {projectStats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-current" />
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {stat.count}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-5">
              <TabsTrigger value="all" className="text-xs sm:text-sm">
                All
              </TabsTrigger>
              <TabsTrigger value="devops" className="text-xs sm:text-sm">
                DevOps
              </TabsTrigger>
              <TabsTrigger value="cloud" className="text-xs sm:text-sm">
                Cloud
              </TabsTrigger>
              <TabsTrigger value="web" className="text-xs sm:text-sm">
                Web
              </TabsTrigger>
              <TabsTrigger value="aiml" className="text-xs sm:text-sm">
                AI/ML
              </TabsTrigger>
            </TabsList>
          </div>

          {/* All Projects */}
          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <BorderBeam
                    size={100}
                    duration={10 + index * 2}
                    delay={index}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    borderWidth={1}
                  />

                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
                    <project.icon className="h-16 w-16 opacity-30 text-current" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        style={{
                          borderColor: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                          color: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                        }}
                      >
                        {project.difficulty || "Intermediate"}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs flex items-center gap-1"
                        >
                          {React.createElement(getTechIcon(tech), {
                            className: "h-3 w-3 text-current",
                          })}
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Project Stats */}
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <IoStarOutline className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoEyeOutline className="h-3 w-3" />
                        {project.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoDownloadOutline className="h-3 w-3" />
                        {project.downloads}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-xs font-medium text-primary">
                        Impact:
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.impact}
                      </p>
                    </div>

                    {/* Timeline & Difficulty */}
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Timeline: {project.timeline}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoOpenOutline className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoLogoGithub className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* DevOps Projects */}
          <TabsContent value="devops" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                DevOps & Infrastructure
              </h2>
              <p className="text-muted-foreground">
                Automation, monitoring, and infrastructure management projects
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {devopsProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <BorderBeam
                    size={100}
                    duration={10 + index * 2}
                    delay={index}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    borderWidth={1}
                  />

                  <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
                    <project.icon className="h-16 w-16 opacity-30 text-current" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        style={{
                          borderColor: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                          color: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                        }}
                      >
                        {project.difficulty || "Intermediate"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs flex items-center gap-1"
                        >
                          {React.createElement(getTechIcon(tech), {
                            className: "h-3 w-3 text-current",
                          })}
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <IoStarOutline className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoEyeOutline className="h-3 w-3" />
                        {project.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoDownloadOutline className="h-3 w-3" />
                        {project.downloads}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-xs font-medium text-primary">
                        Impact:
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoOpenOutline className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoLogoGithub className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Cloud Projects */}
          <TabsContent value="cloud" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Cloud Solutions</h2>
              <p className="text-muted-foreground">
                Scalable cloud architectures and serverless applications
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {cloudProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <BorderBeam
                    size={100}
                    duration={10 + index * 2}
                    delay={index}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    borderWidth={1}
                  />

                  <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
                    <project.icon className="h-16 w-16 opacity-30 text-current" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        style={{
                          borderColor: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                          color: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                        }}
                      >
                        {project.difficulty || "Intermediate"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs flex items-center gap-1"
                        >
                          {React.createElement(getTechIcon(tech), {
                            className: "h-3 w-3 text-current",
                          })}
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <IoStarOutline className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoEyeOutline className="h-3 w-3" />
                        {project.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoDownloadOutline className="h-3 w-3" />
                        {project.downloads}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-xs font-medium text-primary">
                        Impact:
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoOpenOutline className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoLogoGithub className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Web Development Projects */}
          <TabsContent value="web" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Web Development</h2>
              <p className="text-muted-foreground">
                Modern web applications and developer tools
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <BorderBeam
                    size={100}
                    duration={10 + index * 2}
                    delay={index}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    borderWidth={1}
                  />

                  <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
                    <project.icon className="h-16 w-16 opacity-30 text-current" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        style={{
                          borderColor: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                          color: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                        }}
                      >
                        {project.difficulty || "Intermediate"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs flex items-center gap-1"
                        >
                          {React.createElement(getTechIcon(tech), {
                            className: "h-3 w-3 text-current",
                          })}
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <IoStarOutline className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoEyeOutline className="h-3 w-3" />
                        {project.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoDownloadOutline className="h-3 w-3" />
                        {project.downloads}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-xs font-medium text-primary">
                        Impact:
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoOpenOutline className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoLogoGithub className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* AI/ML Projects */}
          <TabsContent value="aiml" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">AI & Machine Learning</h2>
              <p className="text-muted-foreground">
                Intelligent automation and predictive analytics
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {aimlProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <BorderBeam
                    size={100}
                    duration={10 + index * 2}
                    delay={index}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    borderWidth={1}
                  />

                  <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
                    <project.icon className="h-16 w-16 opacity-30 text-current" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        style={{
                          borderColor: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                          color: getDifficultyColor(
                            project.difficulty || "Intermediate"
                          ),
                        }}
                      >
                        {project.difficulty || "Intermediate"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs flex items-center gap-1"
                        >
                          {React.createElement(getTechIcon(tech), {
                            className: "h-3 w-3 text-current",
                          })}
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <IoStarOutline className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoEyeOutline className="h-3 w-3" />
                        {project.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <IoDownloadOutline className="h-3 w-3" />
                        {project.downloads}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-xs font-medium text-primary">
                        Impact:
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoOpenOutline className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <IoLogoGithub className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

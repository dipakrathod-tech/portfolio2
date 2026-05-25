"use client";

import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="py-6 sm:py-24 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
        {/* Right Side - Double Circle Design (Mobile: First, Desktop: Second) */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          {/* Background Circle */}
          <div className="relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-muted/20 to-muted/5 border border-muted/10 shadow-inner">
              <BorderBeam
                size={120}
                duration={8}
                delay={0}
                colorFrom="#3b82f6"
                colorTo="#8b5cf6"
                borderWidth={2}
              />
            </div>

            {/* Overlapping Circle with Avatar */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-background/80 to-background/40 border border-muted/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
              <BorderBeam
                size={100}
                duration={12}
                delay={2}
                colorFrom="#f59e0b"
                colorTo="#ef4444"
                borderWidth={1}
                reverse={true}
              />
              <div className="relative w-56 h-56 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-white p-2 shadow-lg border-2 border-gray-200 rounded-full overflow-hidden">
                <Image
                  src="/user-image/picture.jpeg"
                  alt="Aishwarya Dinesh Ambilwade - Project Assistant & Accountant"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
                  className="object-cover rounded-full"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 animate-pulse"></div>
            <div className="absolute bottom-4 -left-2 sm:bottom-8 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary/30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-4 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/10 animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Left Side - Text Content (Mobile: Second, Desktop: First) */}
        <div className="space-y-4 md:space-y-6 text-left px-2 sm:px-0 order-2 lg:order-1">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-base md:text-lg text-muted-foreground">
              👋 Hello, I&apos;m
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Aishwarya Dinesh Ambilwade
            </h1>
          </div>

          {/* Title */}
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              Project Assistant & Accountant
            </h2>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-full md:max-w-md">
            Dedicated Project Assistant and Accountant with strong expertise in accounting operations, GST compliance, and financial management. Committed to leveraging technical skills in Tally, Excel, and data analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
            <RainbowButton
              size="lg"
              className="flex items-center gap-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Aishwarya_Ambilwade_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </RainbowButton>
            <InteractiveHoverButton
              className="text-base"
              onClick={() =>
                window.open(
                  "mailto:aishwaryaambilwade.me@gmail.com?subject=Let's Connect - Portfolio Inquiry&body=Hi Aishwarya,%0D%0A%0D%0AI found your portfolio and would like to connect.%0D%0A%0D%0ABest regards,",
                  "_blank"
                )
              }
            >
              Let&apos;s Connect
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
}

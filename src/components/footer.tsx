"use client";

import Link from "next/link";
import { Heart, Mail, MapPin, Code2, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BorderBeam } from "@/components/magicui/border-beam";
import { footerData } from "@/data/navigation-links-data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  
  // Get footer data directly from navigation data
  const footer = footerData;

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <footer className="relative border-t border-muted/20 bg-background/80 backdrop-blur-sm mb-20 sm:mb-0">
      {/* Border beam effect - hide on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <BorderBeam 
          size={200} 
          duration={15} 
          delay={0}
          colorFrom="#3b82f6" 
          colorTo="#8b5cf6"
          borderWidth={1}
          className="opacity-50"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status indicator - show on mobile at top */}
        <div className="block md:hidden pt-4 pb-2">
          {footer.status.available && (
            <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              {footer.status.message}
            </Badge>
          )}
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 md:py-16">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                {footer.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {footer.title}
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {footer.description}
            </p>

            {/* Contact info */}
            <div className="flex flex-col space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{footer.location}</span>
              </div>
              
              {/* Email with copy functionality */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground group">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href={`mailto:${footer.email}`} 
                  className="hover:text-primary transition-colors truncate"
                >
                  {footer.email}
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity h-4 w-4 p-0 ml-1"
                  onClick={() => copyToClipboard(footer.email, 'email')}
                >
                  {copiedItem === 'email' ? (
                    <Check className="h-3 w-3 text-green-500" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>

              {/* Phone with copy functionality */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground group">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href={`tel:${footer.phone}`} 
                  className="hover:text-primary transition-colors"
                >
                  {footer.phone}
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity h-4 w-4 p-0 ml-1"
                  onClick={() => copyToClipboard(footer.phone, 'phone')}
                >
                  {copiedItem === 'phone' ? (
                    <Check className="h-3 w-3 text-green-500" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-3">
              {footer.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center justify-between group py-1"
                >
                  <span>{link.name}</span>
                  <Code2 className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-3">
              {Object.values(footer.social).map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 sm:gap-3 group py-1"
                >
                  <social.icon className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col min-w-0">
                    <span className="truncate">{social.name}</span>
                    <span className="text-xs text-muted-foreground/70 hidden sm:block">
                      {social.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="opacity-20" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 py-4 sm:py-6 md:py-8">
          {/* Tech stack */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Built with</span>
            <div className="flex items-center gap-1 sm:gap-2">
              {footer.techStack.map((tech, index) => (
                <div key={tech.name} className="flex items-center gap-1">
                  <tech.icon className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hover:text-primary transition-colors" />
                  {index < footer.techStack.length - 1 && (
                    <span className="text-muted-foreground/50 mx-0.5 sm:mx-1 text-xs">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <span>© {currentYear} {footer.name}.</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse" />
              and ☕
            </span>
          </div>
        </div>

        {/* Status indicator - desktop only */}
        <div className="absolute top-4 right-4 hidden lg:block">
          {footer.status.available && (
            <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              {footer.status.message}
            </Badge>
          )}
        </div>
      </div>
    </footer>
  );
}

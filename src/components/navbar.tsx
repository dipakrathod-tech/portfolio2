"use client";

import Link from "next/link";
import React from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ShineBorder } from "@/components/magicui/shine-border";
import { navbarItems, socialContacts } from "@/data/navigation-links-data";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-1 z-30 mx-auto mb-10 flex origin-bottom h-full max-h-14">
        <Dock 
          direction="middle" 
          className="relative overflow-hidden"
          iconSize={32}
          iconMagnification={48}
        >
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          {navbarItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-8 sm:size-10 md:size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-3 sm:size-3.5 md:size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(socialContacts).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-8 sm:size-10 md:size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-3 sm:size-3.5 md:size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
    </div>
  );
}

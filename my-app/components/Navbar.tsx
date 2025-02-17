"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import React, { useState } from "react";
import {
  AlignLeft,
  Blocks,
  Dumbbell,
  NotebookPen,
  Send,
  UserRoundPen,
  LayoutPanelTop,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import TechnicalSkills from "./techinical-skillls";
import { MarqueeDemo } from "./Testmonials";

// Assuming this is the path to your component
import Project from "./Project";
import ServicesListing from "./ServicesListing";
import Contact from "./Contact";
import GeneralSkill from "./GenerallSkill";
import WorkExperience from "./WorkExperice";

export type IconProps = React.HTMLAttributes<SVGElement>;

const navItems = [
  {
    href: "#",
    icon: UserRoundPen,
    title: "work in progress",
    component: <WorkExperience />,
  },
  {
    href: "#",
    icon: Dumbbell,
    title: "Services",
    component: <ServicesListing />, // Associate the TechnicalSkills component
  },
  {
    href: "#",
    icon: Blocks,
    title: "Projects",
    component: <Project />, // Associate the TechnicalSkills component
  },
  {
    href: "#",
    icon: LayoutPanelTop,
    title: "technicalSkills",
    component: <TechnicalSkills />, // Associate the TechnicalSkills component
  },
  {
    href: "#",
    icon: LayoutPanelTop,
    title: "techStack",
    component: <MarqueeDemo />, // Associate the TechnicalSkills component
  },
  {
    href: "#",
    icon: NotebookPen,
    title: "GeneralSkills",
    component: <GeneralSkill />, // Associate the TechnicalSkills component
  },
  {
    href: "#",
    icon: Send,
    title: "Contacts",
    component: <Contact />, // Associate the TechnicalSkills component
  },
];

export default function Navbar() {
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(null);

  const handleNavClick = (title: string) => {
    const navItem = navItems.find((item) => item.title === title);
    setActiveComponent(navItem?.component || null);
  };

  return (
    <>
      <div
        className="relative flex w-full h-[100px] shadow-lg bg-green-900 
      flex-col items-center justify-center
      border bg-background
      rounded-lg 
      md:shadow-xl"
      >
        <Dock
          direction="middle"
          className="h-[75px] border-0 px-4 rounded-full"
        >
          {navItems.map((item) => (
            <DockIcon key={item.title}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleNavClick(item.title)}
                      aria-label={item.title}
                      title={item.title} // Optional: Adds a native browser tooltip
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <item.icon className="size-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2 mx-2" />
          <DockIcon>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DockIcon>
        </Dock>
      </div>
      <div className="w-full h-full pt-8">{activeComponent}</div>
    </>
  );
}

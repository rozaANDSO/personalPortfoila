"use client";
import React from "react";
import { Github, LucideProps } from "lucide-react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { title } from "process";
import { TechnologiesProps } from "./techinical-skillls";
export type IconProps = React.HTMLAttributes<SVGElement>;
export type TechStackProps = {
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    href:string;
};

export function TechStack({technologies}:{technologies:TechnologiesProps[]}) {
  
  
  return (
    <div className="">
      {technologies.map((item, i) => {
        const Icon = item.icon;
        return (
          <Dock direction="middle">
            <DockIcon magnification={60}  distance={100} key={i}>
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icon className="size-full"/>
              </TooltipTrigger>
                <TooltipContent>
                  <p>{i}</p>
                </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            </DockIcon>
          </Dock>
        );
      })}
    </div>
  );
}

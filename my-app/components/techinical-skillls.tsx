"use client";

import React from "react";
import { IconCloud } from "./ui/icon-cloud";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { Dumbbell, Github, icons } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFlutter } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiNginx } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { cn } from "@/lib/utils";
import { TechStack, TechStackProps } from "./TechStack";
import { IconType } from "react-icons/lib";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type TechnologiesProps = {
  title: string;
  icon: IconType;
  color: string;
  percent: number;
};
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export default function TechnicalSkills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const technologies: TechnologiesProps[] = [
    {
      title: "Python",
      icon: FaPython,
      percent: 95,
      color: "text-blue-900",
    },
    {
      title: "JavaScript",
      icon: IoLogoJavascript,
      percent: 90,
      color: "text-yellow-500",
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
      percent: 80,
      color: "text-red-900",
    },
    {
      title: "React",
      icon: GrReactjs,
      percent: 90,
      color: "text-blue-900",
    },
    {
      title: "Flutter",
      icon: FaFlutter,
      percent: 85,
      color: "text-yellow-900",
    },
    {
      title: "Node.js",
      icon: DiNodejs,
      percent: 85,
      color: "text-green-900",
    },
    {
      title: "express js",
      icon: SiExpress,
      percent: 90,
      color: "text-blue-900",
    },
    {
      title: "Next.js",
      icon: SiNextdotjs,
      percent: 90,
      color: "text-blue-900",
    },
    {
      title: "Prisma",
      icon: TbBrandPrisma,
      percent: 90,
      color: "text-blue-900",
    },
    {
      title: "AWS",
      icon: FaAws,
      percent: 85,
      color: "text-yellow-600",
    },
    {
      title: "PostgreSQL",
      icon: SiPostgresql,
      percent: 90,
      color: "text-green-900",
    },
    {
      title: "Firebase",
      icon: IoLogoFirebase,
      percent: 80,
      color: "text-blue-900",
    },
    {
      title: "Nginx",
      icon: DiNginx,
      percent: 80,
      color: "text-red-900",
    },
    {
      title: "Docker",
      icon: FaDocker,
      percent: 80,
      color: "text-blue-900",
    },
    {
      title: "Jira",
      icon: SiMongodb,
      percent: 85,
      color: "text-green-900",
    },
  ];
  return (
    <div className="relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-8 py-16 ">
      <SectionSubHeading title="Technical Skills" icon={Dumbbell} />
      <div className="py-2">
        <SectionHeading title="Technologies" />
        <h4 className=" py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          accusantium distinctio ratione consequatur nesciunt fuga ut. Qui sint
          quas dicta eligendi culpa quo. Nulla molestiae alias temporibus autem?
          Obcaecati repellendus blanditiis est eveniet sequi assumenda
          distinctio aperiam quidem, labore soluta officiis quos vitae tota
          illum nisi.
        </h4>
        <div
          className="
        grid gap-6 grid-cols-1 md:grid-cols-3  mb-12 sm:mb-20
        "
        >
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="rounded-2xl shadow-2xl p-3 dark:border-gray-900 border"
              >
                <div className="flex justify-end">
                  <div className="rounded-full px-6 py-2 border inline-block">
                    {tech.percent}%
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-2 pb-5">
                  <Icon className={cn("w-10 h-10 shrink-0", tech.color)} />
                  <h3 className="text-xl">{tech.title}</h3>
                </div>
                <div
                  className="
                flex w-full h-1.5 bg-gray-800 rounded-full overflow-hidden dark:bg-neutral-500
                "
                  role="progressbar"
                >
                  <div
                    className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                    style={{ width: `${tech.percent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-4 flex flex-col items-center justify-center border space-x-6 rounded-full">
          <h2 className="">MY TechSTACK</h2>
          <div className="relative grid items-center  grid-cols-8 py-2 px-8 gap-8">
            {technologies.map((item, i) => {
              const Icon = item.icon;
              return (
                <Dock direction="middle">
                  <DockIcon magnification={60} distance={100} key={i}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Icon className="size-full bg-slate-700" />
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
        </div>
        <div className="grid grid-cols-2 ">
          <IconCloud images={images} />
          {/* <div className="">
          <TechnologyCards />
        </div>
        */}
        </div>
      </div>
    </div>
  );
}

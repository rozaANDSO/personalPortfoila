"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFlutter } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

import { Blocks, Dumbbell, Github, icons } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ToolsStack() {
  const technologies = [
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
      title: "Next.js",
      icon: SiNextdotjs,
      percent: 90,
      color: "text-blue-900",
    },
  ];
  return (
    <div>
      <div className="relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-8 py-16 ">
        <SectionSubHeading title="Technical Skills" icon={Blocks} />
        <div className="py-2">
          <SectionHeading title="ToolStack" />
        </div>
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
                <div className="flex justify-end"></div>
                <div className="flex items-center gap-6 pt-2 pb-5">
                  <Icon className={cn("w-10 h-10 shrink-0", tech.color)} />
                  <h3 className="text-xl">{tech.title}</h3>
                </div>

                <div className="relative size-40">
                  <svg
                    className="size-full -rotate-90"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-gray-200 dark:text-neutral-700"
                      stroke-width="2"
                    ></circle>
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-blue-600 dark:text-blue-500"
                      stroke-width="2"
                      stroke-dasharray="100"
                      stroke-dashoffset={`${100 - tech.percent}`}
                      stroke-linecap="round"
                    ></circle>
                  </svg>

                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">
                      {tech.percent}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { FaGlobeAmericas, FaPython } from "react-icons/fa";
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
import { cn } from "@/lib/utils";
import { Check, Database, Dumbbell } from "lucide-react";

export default function GeneralSkill() {
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
  const practice = [
    "Electrical And Computer Engineering",
    "Oracle sql",
    "Data Integration",
    "ERP",
    "Data Provisioning",
    "Data solution Architecture",
    "ETL/ELT Solution",
    
   ];
   const language = [
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
   ];

  const progress = Array(10).fill(false).fill(true, 0, 5);
  return (
    <div className="relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-8 py-16 ">
      <SectionSubHeading title="General Skills" icon={Database} />
      <div className="py-2 pb-6">
        <SectionHeading title="Data Base" />
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
      <div className="py-8 grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <SectionSubHeading title="Languages" icon={Database} />
          <div className="py-8">
            {language.map((tech, i) => {
              const Icon = tech.icon;
              const percent = Math.floor(tech.percent / 10);
              const progress = Array(10).fill(false).fill(true, 0, percent);
              return (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl border flex items-center justify-center">
                    <Icon className={cn("w-10 h-10 shrink-0", tech.color)} />
                  </div>
                  <div className="">
                    <p className="text-sm">{tech.title}</p>
                    <div className="flex items-center gap-6">
                      <div className="">
                        <div className="flex space-x-2">
                          {progress.map((filled, i) => (
                            <Circle key={i} filled={filled} />
                          ))}
                        </div>
                      </div>
                      <p>{tech.percent}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <SectionSubHeading title="Engineering Practices" icon={Database} />
          <div className="py-3 space-y-4">
            {practice.map((item, i) => {
              return (
                <div key={i} className="flex ">
                  <Check className="text-lime-500 w-4 h-4 shrink-0 mr-2" />
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Circle = ({ filled }: { filled: boolean }) => {
  return (
    <div
      className={`w-4 h-4 rounded-full ${
        filled ? "bg-lime-500" : "bg-gray-300"
      }`}
    />
  );
};

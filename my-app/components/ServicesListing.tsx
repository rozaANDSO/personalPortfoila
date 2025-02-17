import React from "react";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { FaPython } from "react-icons/fa";
import { Server } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ServicesListing() {
  const services = [
    {
      devCount: "20",
      href: "#",
      title: "Web Development",
      icon: FaPython,
      percent: 90,
      color: "text-yellow-500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nunc a diam facilisis, vel pulvinar est semper.",
    },
    {
      devCount: "29",
      title: "Mobile App Development",
      icon: FaPython,
      percent: 90,
      href: "#",
      color: "text-yellow-500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nunc a diam facilisis, vel pulvinar est semper.",
    },

    {
      devCount: "59",
      title: "Digital Marketing",
      icon: FaPython,
      percent: 90,
      href: "#",
      color: "text-yellow-500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nunc a diam facilisis, vel pulvinar est semper.",
    },
    {
      devCount: "90",
      title: "Digital Marketing",
      icon: FaPython,
      percent: 90,
      href: "#",
      color: "text-yellow-500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nunc a diam facilisis, vel pulvinar est semper.",
    },
    {
      devCount: "50",
      title: "Digital Marketing",
      icon: FaPython,
      percent: 90,
      href: "#",
      color: "text-yellow-500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nunc a diam facilisis, vel pulvinar est semper.",
    },
    {
      devCount: "40",
      title: "Digital Marketing",
      icon: FaPython,
      percent: 90,
      href: "#",
      color: "text-yellow-500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nunc a diam facilisis, vel pulvinar est semper.",
    },
  ];
  return (
    <div>
      <div className="relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-8 py-16 ">
        <SectionSubHeading title="Services" icon={Server} />
        <div className="py-2">
          <SectionHeading title="What Services I Provide ?" />
        </div>
        <div
          className="
                grid gap-6 grid-cols-1 md:grid-cols-2  mb-12 sm:mb-20
                "
        >
          {services.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="rounded-2xl shadow-2xl p-3 dark:border-gray-900 border"
              >
                <div className="flex">
                  <Icon className="w-14 h-14 text-lime-500 " />
                  <div className="">
                    <p className="text-base dark:text-slate-300">
                      {tech.devCount} Developer
                    </p>
                    <p className="text-xl text-muted-foreground">
                      {tech.title}
                    </p>
                  </div>
                </div>
                <div className="py-2">{tech.description}</div>
                <div className="py-2">
                  <Link href={tech.href}>
                    <nav
                      className={cn(
                        "inline-flex items-center text-green-500 hover:text-green-700",
                        tech.color
                      )}
                    >
                      View Details
                    </nav>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

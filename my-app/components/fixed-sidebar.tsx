"use client";
import React from "react";
import ModeToggle from "./mode-toggle";
import TextTransition, { presets } from "react-text-transition";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const TEXTS = [""];
import WordRotate from "@/components/ui/word-rotate";
import {
  AlignLeft,
  Blocks,
  Dumbbell,
  Facebook,
  Github,
  Instagram,
  LayoutPanelTop,
  Linkedin,
  NotebookPen,
  Send,
  UserRoundPen,
} from "lucide-react";
import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";
import { ShimmerButton } from "./ui/shimmer-button";
import Navbar from "./Navbar";

export default function FixedSidebar() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const socialIcons = [
    {
      href: "https://www.linkedin.com/in/rozabelay/",
      icon: Linkedin,
      title: "LinkedIn",
    },
    {
      href: "https://github.com/rozaANDSO",
      icon: Github,
      title: "Github",
    },
    {
      href: "#",
      icon: Facebook,
      title: "Facebook",
    },
    {
      href: "#",
      icon: Instagram,
      title: "Instagram",
    },
  ];

  return (
    <div className="flex px-2 gap-4 w-full">
      <div
        className="dark:bg-slate-900 block w-full dark:text-slate-50
          bg-slate-50 rounded-tl-2lg text-slate-50 p-8 rounded-b-2xl"
      >
        <div className="relative w-[200px] h-[300px] rounded-xl overflow-hidden">
          <Image
            src="/jp.jpg"
            alt="jb profile"
            width={100}
            height={100}
            className="w-[300px] rounded-tl-2xl block rounded-b-2xl"
          />
          <BorderBeam />
        </div>
        <div className="py-2 space-y-3 text-center">
          <p className="uppercase text-lime-400">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </p>
          <WordRotate
            className="text-4xl font-bold text-green-900 dark:text-green-800"
            words={[
              "Web Developer",
              "Mobile App",
              "System Development",
              "API Development",
              "API Integration",
              "Online Marketing",
              "09-22-88-72-21"
            ]}
          />

          <h2 className="text-black scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Roza Belay
          </h2>
          <div className="py-2 flex items-center space-x-2">
            {socialIcons.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex flex-col gap-2 items-center text-black 
                  transition-all duration-300 rounded-[20px] w-12 h-12 shadow-lg p-2
                   hover:shadow-xl cursor-pointer flex-shrink-0 flex-grow-0"
              >
                <nav className="flex gap-2 items-center">
                  <item.icon className="w-6 h-6 flex-shrink-0 dark:text-slate-100" />
                  <span className="sr-only">{item.title}</span>
                </nav>
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t pt-6 text-black flex justify-between items-center">
          <Link
            className="hover:text-lime-400 bg-slate-50 py-2 px-4 border duration-150 rounded-full"
            href="#"
          >
            Download CV
          </Link>
          <ShimmerButton className="shadow-2xl hover:text-lime-400 bg-slate-50 py-2.5 px-6 border duration-150 rounded-full">
            <Link href="#" className="flex items-center gap-2">
              <span className="rounded-full whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-green-800 dark:from-red-400 dark:to-slate-900/10 lg:text-lg">
                Hire me
              </span>
            </Link>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}

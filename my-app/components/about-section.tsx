"use client";
import React from "react";
import CustomTextTransion from "./CustomTextTransion";
import Highlighter from "react-highlight-words";
import { Meteors } from "./ui/meteors";
import { title } from "process";
import Navbar from "./Navbar";
export default function AboutSection() {
  const TEXTS = [
    "Roza Belay",
    "software Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Mobile App developer",
  ];
  const stats = [
    { title: "Projects Completed", value: 27, Plus: false },
    { title: "Years of experience", value: 6, Plus: true },
    { title: "clients worked on", value: 50, Plus: false },
    { title: "Award Winning", value: 10, Plus: true },
  ];

  return (
    <>
    <div className=" px-8 py-16 relative bg-slate-50  dark:bg-slate-900  rounded-tr-2xl">
      <Meteors number={300} />
      <p>
        Hello, I'M{" "}
        <span className="text-green-900 text-2xl inline-block">
          {<CustomTextTransion words={TEXTS} />}
        </span>
      </p>
      <h2 className="scroll-m-20 text-3xl pb-8  pt-8 stracking-wide lg:text-4xl">
        FullStack Web And{" "}
        <span
          className="bg-green-500 tracking-normal text-xl lg:text-[52px]
         text-black px-2 py-2 rounded-full -rotate-4 
         inline-block leading-loose text-balance"
        >
          mobile App developer
        </span>{" "}
        Based on Addis Ababa ,Ethiopia
      </h2>
      <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-red-500 to-blue-500 rounded-full" />

      <p className="text-base">
        I'm passionate about creating innovative and user-friendly software
        solutions. I've worked on various projects in the tech industry, from
        small startups to large corporations.
      </p>
      <p className=" text-sm md ,text-base">
        I'm always eager to learn more about the latest technologies and best
        practices, and I strive to contribute to the growth of the tech industry
        in Addis Ababa. My goal is to help businesses achieve their goals and
        stay competitive in the market. I am currently looking for opportunities
        to work with some of the most innovative and talented teams in the tech
        industry. If you have any questions or need further information, please
        don't hesitate to reach out to me. I'm looking forward to working with
        you on your next project.
      </p>
      <div className="py-8 lg:py-16  grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4">
        {stats.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center space-x-2">
              <p className="scroll-m-20 text-4xl tracking-tight lg:5xl">
                {item.value}
                {item.Plus && "+"}
              </p>
              <p className="text-balance">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  </>
  );
}

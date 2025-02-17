"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { Dumbbell, Github, icons } from "lucide-react";
import EmblaCarousel from "./carusel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import { Button } from "./ui/button";
export default function WorkExperience() {
  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-8 py-16 ">
      <SectionSubHeading title="RESUME" icon={Dumbbell} />
      <div className="py-2">
        <SectionHeading title="Work Experience & Educations" />
      </div>
      <div className="py-2">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="">
          <SectionSubHeading title="Courses" icon={Dumbbell} />
          <div className="py-3">
            <div className="ps-2 my-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"></h3>
            </div>
            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
              </div>
              <div className="grow border p-4 rounded-md">
                <p className="py-1.5 px-4 rounded-full bg-green-400 border-blue-900 inline-block ">
                  {" "}
                  2021-2023
                </p>
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                  <svg
                    className="shrink-0 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" x2="8" y1="13" y2="13"></line>
                    <line x1="16" x2="8" y1="17" y2="17"></line>
                    <line x1="10" x2="8" y1="9" y2="9"></line>
                  </svg>
                  Created "Preline in React" task
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Addis Ababa Institute of Technology
                </p>
                <p>
                  Addis Ababa Institute of Technology TO Learn electrical and
                  computer engineering
                </p>
                <Button
                  className="mt-1 -ms-1 p-1 inline-flex items-center
                    bg-black px-6 py-2
                     gap-x-2 font-extrabold rounded-lg border border-transparent text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:bg-gray-300 
                      disabled:opacity-50 disabled:pointer-events-none
                       dark:text-neutral-100 dark:hover:bg-black"
                >
                  <Link
                    href={"#"}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    Certificate
                  </Link>
                </Button>
              </div>
            </div>

            <div className="ps-2 my-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"></h3>
            </div>
            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
              </div>
              <div className="grow border p-4 rounded-md">
                <p className="py-1.5 px-4 rounded-full bg-green-400 border-blue-900 inline-block ">
                  {" "}
                  2021-2023
                </p>
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                  <svg
                    className="shrink-0 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" x2="8" y1="13" y2="13"></line>
                    <line x1="16" x2="8" y1="17" y2="17"></line>
                    <line x1="10" x2="8" y1="9" y2="9"></line>
                  </svg>
                  Created "Preline in React" task
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Addis Ababa Institute of Technology
                </p>
                <p>
                  Addis Ababa Institute of Technology TO Learn electrical and
                  computer engineering
                </p>
                <Button
                  className="mt-1 -ms-1 p-1 inline-flex items-center
                    bg-black px-6 py-2
                     gap-x-2 font-extrabold rounded-lg border border-transparent text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:bg-gray-300 
                      disabled:opacity-50 disabled:pointer-events-none
                       dark:text-neutral-100 dark:hover:bg-black"
                >
                  <Link
                    href={"#"}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    Certificate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <SectionSubHeading title="Education" icon={Dumbbell} />
          <div className="py-3">
            <div>
              <div className="ps-2 my-2 first:mt-0">
                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"></h3>
              </div>
              <div className="flex gap-x-3">
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                  </div>
                </div>
                <div className="grow border p-4 rounded-md">
                  <p className="py-1.5 px-4 rounded-full bg-green-400 border-blue-900 inline-block ">
                    {" "}
                    2021-2023
                  </p>
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    <svg
                      className="shrink-0 size-4 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" x2="8" y1="13" y2="13"></line>
                      <line x1="16" x2="8" y1="17" y2="17"></line>
                      <line x1="10" x2="8" y1="9" y2="9"></line>
                    </svg>
                    create frontend react js project
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    Addis Ababa Institute of Technology
                  </p>
                  <p>
                    Addis Ababa Institute of Technology TO Learn electrical and
                    computer engineering
                  </p>
                  <Button
                    className="mt-1 -ms-1 p-1 inline-flex items-center
                    bg-black px-6 py-2
                     gap-x-2 font-extrabold rounded-lg border border-transparent text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:bg-gray-300 
                      disabled:opacity-50 disabled:pointer-events-none
                       dark:text-neutral-100 dark:hover:bg-black"
                  >
                    <Link
                      href={"#"}
                      type="button"
                      className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    >
                      Certificate
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="ps-2 my-2 first:mt-0">
                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"></h3>
              </div>
              <div className="flex gap-x-3">
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                  </div>
                </div>
                <div className="grow border p-4 rounded-md">
                  <p className="py-1.5 px-4 rounded-full bg-green-400 border-blue-900 inline-block ">
                    {" "}
                    2021-2023
                  </p>
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    <svg
                      className="shrink-0 size-4 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" x2="8" y1="13" y2="13"></line>
                      <line x1="16" x2="8" y1="17" y2="17"></line>
                      <line x1="10" x2="8" y1="9" y2="9"></line>
                    </svg>
                    create frontend nextjs fullStack project
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    Addis Ababa Institute of Technology
                  </p>
                  <p>
                    Addis Ababa Institute of Technology TO Learn electrical and
                    computer engineering
                  </p>
                  <Button
                    className="mt-1 -ms-1 p-1 inline-flex items-center
                    bg-black px-6 py-2
                     gap-x-2 font-extrabold rounded-lg border border-transparent text-gray-500
                      hover:bg-gray-100 focus:outline-none focus:bg-gray-300 
                      disabled:opacity-50 disabled:pointer-events-none
                       dark:text-neutral-100 dark:hover:bg-black"
                  >
                    <Link
                      href={"#"}
                      type="button"
                      className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    >
                      Certificate
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { Database, MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Blogs() {
  const projectCategory = [
    {
      title: "All",
      slug: "all",
      href: "#",
      projects: [], // This will be populated dynamically
    },
    {
      title: "React Js",
      slug: "react-js",
      href: "#",
      projects: [
        {
          title: "React Developer",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWM-jHZqRqXvI4mq8nJ8PO43cAN5xkfCTPQQ&s",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          features: ["React", "Redux", "Material UI"],
          tools: ["VS Code", "Git", "Github"],
        },
      ],
    },
    {
      title: "Next Js",
      slug: "next-js",
      href: "#",
      projects: [
        {
          title: "Frontend Developer",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWM-jHZqRqXvI4mq8nJ8PO43cAN5xkfCTPQQ&s",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          features: ["React", "Redux", "Material UI"],
          tools: ["VS Code", "Git", "Github"],
        },
      ],
    },

    {
      title: "Next",
      slug: "next",
      href: "#",
      projects: [
        {
          title: "Developer",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWM-jHZqRqXvI4mq8nJ8PO43cAN5xkfCTPQQ&s",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          features: ["React", "Redux", "Material UI"],
          tools: ["VS Code", "Git", "Github"],
        },
      ],
    },
  ];

  // Dynamically add all projects to the "All" category
  projectCategory[0].projects = projectCategory
    .slice(1) // Skip the "All" category itself
    .flatMap((category) => category.projects);

  const [activeCategory, setActiveCategory] = useState(projectCategory[0]);

  return (
    <div className="relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-8 py-16 ">
      <SectionSubHeading title="Projects" icon={Database} />
      <div className="py-2 pb-6">
        <SectionHeading title="Explore Portfolio By Technology" />
      </div>
      <div className="py-4">
        {/* Category Buttons */}
        <div className="flex gap-5">
          {projectCategory.map((category, i) => (
            <button
              key={i}
              className={`py-2 px-6 rounded-full ${
                activeCategory.slug === category.slug
                  ? "bg-green-800 text-gray-300"
                  : "bg-gray-600 text-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="py-4">
          <div className="py-8 grid grid-cols-2 gap-6">
            {activeCategory.projects.map((project, i) => (
              <Link
                href={"#"}
                key={i}
                className=" block rounded-2xl shadow-2xl p-3 pb-4 dark:border-gray-900 border"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2lg"
                />
                <span className="py-1.5 px-4 hover:bg-lime-300 rounded-full border border-slate-400 dark:border-slate-700 text-xs mt-3">April , 28 2025</span>
                <h3 className="mt-4 text-lg font-semibold py-2">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

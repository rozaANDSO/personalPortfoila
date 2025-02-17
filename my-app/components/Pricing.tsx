import React from "react";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { Check, Database } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plan = [
    {
      price: 29,
      mode: "hours",
      href: "#",
      features: [
        { title: "Feature 1", isIncluded: true },
        { title: "Feature 2", isIncluded: true },
        { title: "Feature 3", isIncluded: true },
        { title: "Feature 4", isIncluded: true },
        { title: "Feature 5", isIncluded: true },
      ],
    },
    {
      price: 300,
      mode: "days",
      href: "#",
      features: [
        { title: "Feature 1", isIncluded: true },
        { title: "Feature 2", isIncluded: true },
        { title: "Feature 3", isIncluded: true },
        { title: "Feature 4", isIncluded: true },
        { title: "Feature 5", isIncluded: true },
      ],
    },
  ];

  return (
    <div className="relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-8 py-16 ">
      <SectionSubHeading title="Pricing" icon={Database} />
      <div className="py-2 pb-6">
        <SectionHeading title="Amazing Pricing For Your Projects" />
      </div>

      <div
        className="
            grid gap-6 grid-cols-1 md:grid-cols-3  mb-12 sm:mb-20
            "
      >
        {plan.map((tech, i) => {
          return (
            <div
              key={i}
              className="rounded-2xl shadow-2xl p-3 dark:border-gray-900 border"
            >
              <div className="flex justify-end">
                <div className="rounded-full px-6 py-2 border inline-block bg-lime-400">
                  Per {tech.mode}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="rounded-full px-6 py-2 border inline-block s">
                  ${tech.price}
                </div>
              </div>
              <div className="py-2">
                <Link
                  className="rounded-full px-6 py-2 bg-green-900 text-white"
                  href={tech.href}
                >
                  Order Now
                </Link>
              </div>
              <div className="py-3">
                {tech.features.map((feature, index) => {
                  return (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-900" />
                      {feature.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

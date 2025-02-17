"use client";

import { LucideProps } from "lucide-react";
import React from "react";
export default function SectionSubHeading({
  title,
  icon,
}: {
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  const Icon = icon;
  return (
    <div className="flex items-center space-x-2">
      <Icon className="h-4 w-4 shrink-0" />
      <h2 className="py-2 px-6 rounded-full border">{title}</h2>
    </div>
  );
}

"use client";

import React from "react";
export default function VideoBackground() {
  return (
    <div>
      <div className="h-full border-5 fixed border-red-600 w-full rounded-lg top-0 left-0 right-0  overflow-hidden -z-50">
        <video
          className=" absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-400"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/water.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <Button
          className=" justify-center flex flex-col gap-1.5 p-4
           group transition-all duration-300 rounded-[20px] 
           lg:w-16 lg:h-16 w-6 h-6"
          onClick={() => setTheme("light")}
        >
          <Moon className=" lg:w-6 lg:h-6 w-4 h-4 flex-shrink-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <Button
          className=" justify-center flex flex-col gap-1.5
           bg-slate-900 p-4 group transition-all 
            duration-300 rounded-[20px] lg:w-16 lg:h-16 w-6 h-6"
          onClick={() => setTheme("dark")}
        >
          <Sun className=" lg:w-6 lg:h-6 w-4 h-4 flex-shrink-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </>
  );
}

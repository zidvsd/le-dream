import React from "react";
import { ChevronDown } from "lucide-react";
const ScrollButton = () => {
  return (
    <a
      href="google.com"
      className="hover-opacity flex flex-col items-center justify-center gap-y-1"
    >
      <h1 className="font-body-header text-xl text-white">Scroll</h1>
      <ChevronDown className="size-8 rounded-full bg-white" />
    </a>
  );
};

export default ScrollButton;

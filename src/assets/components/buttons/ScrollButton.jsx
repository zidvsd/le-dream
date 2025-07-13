import React from "react";
import { ChevronDown } from "lucide-react";
const ScrollButton = ({ linkId }) => {
  const scrollToSection = () => {
    const targetSection = document.getElementById(linkId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      href="google.com"
      className="hover-opacity flex cursor-pointer flex-col items-center justify-center gap-y-4"
      onClick={scrollToSection}
    >
      <h1 className="font-body-header text-xl text-white">Scroll</h1>
      <ChevronDown className="size-8 animate-bounce rounded-full bg-white" />
    </button>
  );
};

export default ScrollButton;

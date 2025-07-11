import React from "react";
import { ChevronDown } from "lucide-react";
const ScrollButton = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("cards-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      href="google.com"
      className="hover-opacity flex cursor-pointer flex-col items-center justify-center gap-y-2"
      onClick={scrollToSection}
    >
      <h1 className="font-body-header text-xl text-white">Scroll</h1>
      <ChevronDown className="size-8 animate-bounce rounded-full bg-white" />
    </button>
  );
};

export default ScrollButton;

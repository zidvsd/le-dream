import React from "react";
import { ChevronRight } from "lucide-react";
const NextButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-full bg-white/20 px-2 py-2 text-white transition hover:bg-white/40"
    >
      <ChevronRight />
    </button>
  );
};

export default NextButton;

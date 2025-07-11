import React from "react";
import { ChevronLeft } from "lucide-react";
const PrevButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-full bg-white/20 px-2 py-2 text-white transition hover:bg-white/40"
    >
      <ChevronLeft />
    </button>
  );
};

export default PrevButton;

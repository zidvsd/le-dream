import React from "react";
import { handleScroll } from "../../../utils/util";
const LearnMoreButton = ({ linkId }) => {
  return (
    <button
      className="font-montserrat hover:bg-accent border-2 border-black px-6 py-1 transition-all duration-100 ease-in hover:border-transparent"
      onClick={() => handleScroll("video-section")}
    >
      Learn more
    </button>
  );
};

export default LearnMoreButton;

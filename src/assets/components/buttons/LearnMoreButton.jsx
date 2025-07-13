import React from "react";
const LearnMoreButton = () => {
  return (
    <button
      className="font-montserrat hover:bg-accent border-2 border-black px-6 py-1 transition-all duration-100 ease-in hover:border-transparent"
      to={"/"}
    >
      Learn more
    </button>
  );
};

export default LearnMoreButton;

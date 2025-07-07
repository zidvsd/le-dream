import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ iconSize = 2.5, textSize = 10 }) => {
  return (
    <Link to="/" className="flex items-center gap-x-1">
      {/* Icon Image */}
      <img
        src="/logo-icon.png"
        style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }}
        className="object-cover lg:h-6 lg:w-6"
        alt="Logo Icon"
      />

      {/* Text Image */}
      <img
        src="/logo-text.png"
        style={{ width: `${textSize}rem`, height: `${textSize}rem` }}
        className="object-contain lg:h-16 lg:w-40"
        alt="Logo Text"
      />
    </Link>
  );
};

export default Logo;

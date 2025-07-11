import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../images/icons/logo-icon.png";
import logoText from "../images/icons/logo-text.png";
const Logo = ({ iconSize = 2.5, textSize = 10 }) => {
  return (
    <Link to="/" className="flex items-center justify-center gap-x-1">
      {/* Icon Image */}
      <img
        src={logoIcon}
        style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }}
        className="object-cover lg:h-6 lg:w-6"
        alt="Logo Icon"
      />

      {/* Text Image */}
      <img
        src={logoText}
        style={{ width: `${textSize}rem`, height: `${textSize}rem` }}
        className="object-contain lg:h-16 lg:w-40"
        alt="Logo Text"
      />
    </Link>
  );
};

export default Logo;

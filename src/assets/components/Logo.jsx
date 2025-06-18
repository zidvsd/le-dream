import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to={"/"}
      className="flex flex-row items-center justify-center gap-x-1"
    >
      <img
        src="/logo-icon.png"
        className="size-6 object-cover lg:size-6"
        alt=""
      />
      <img
        src="/logo-text.png"
        className="size-14 object-contain lg:size-16"
        alt=""
      />
    </Link>
  );
};

export default Logo;

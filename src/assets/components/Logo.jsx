import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to={"/"}
      className="flex flex-row items-center justify-center gap-x-1"
    >
      <img
        src="/logo-icon.webp"
        className="size-6 object-cover lg:size-12"
        alt=""
      />
      <img
        src="/logo-text.webp"
        className="size-14 object-contain lg:size-28"
        alt=""
      />
    </Link>
  );
};

export default Logo;

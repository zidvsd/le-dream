import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navs = [
    { name: "Rooms", path: "rooms" },
    { name: "Amenities", path: "amenities" },
    { name: "Bar + Resto", path: "bar-resto" },
    { name: "Explore", path: "explore" },
  ];
  return (
    <div className="custom-container pt- flex flex-row items-center justify-between">
      {/* left nav / logo */}
      <>
        <Logo />
      </>
      <ul className="flex flex-row items-center space-x-18">
        {navs.map((nav, index) => (
          <li key={index}>
            <Link
              className="font-body hover-underline text-xl font-semibold text-white"
              to={`/${nav.path}`}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

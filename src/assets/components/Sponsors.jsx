import React from "react";
import Logo from "./Logo";
import tripadvisor from "../images/icons/tripadvisor-icon.svg";
import booking from "../images/icons/booking-icon.svg";
const Sponsors = () => {
  return (
    <div className="bg-[#f4f0ee]">
      <div className="custom-container flex w-full flex-col items-center justify-center bg-[#f4f0ee] md:justify-evenly lg:flex-row">
        <Logo />
        <div className="flex flex-row items-center justify-evenly lg:flex-row">
          <a href="https://www.booking.com/" className="w-1/3" target="_blank">
            <img className="w-full" src={tripadvisor} alt="" />
          </a>
          <a href="https://www.booking.com/" className="w-1/3" target="_blank">
            <img className="w-full" src={booking} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

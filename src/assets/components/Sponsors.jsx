import React from "react";
import Logo from "./Logo";
import tripadvisor from "../images/icons/tripadvisor-icon.svg";
import booking from "../images/icons/booking-icon.svg";
const Sponsors = () => {
  return (
    <div className="bg-[#f4f0ee]">
      <div className="custom-container flex w-full flex-col items-center bg-[#f4f0ee] pb-4 lg:flex-row">
        <div className="flex flex-row items-center justify-evenly">
          <Logo iconSize={4} textSize={8} />
          {/* flexed in desktop, hidden mobile */}
          <>
            <a
              href="https://www.booking.com/"
              className="hidden w-1/3 lg:block lg:w-1/6"
              target="_blank"
            >
              <img className="w-full" src={tripadvisor} alt="" />
            </a>
            <a
              href="https://www.booking.com/"
              className="hidden w-1/4 lg:block lg:w-1/7"
              target="_blank"
            >
              <img className="w-full" src={booking} alt="" />
            </a>
          </>
        </div>

        {/* next row in desktop hidden in mobile */}
        <div className="flex flex-row items-center justify-evenly lg:hidden">
          <a
            href="https://www.booking.com/"
            className="w-1/3 lg:w-1/8"
            target="_blank"
          >
            <img className="w-full" src={tripadvisor} alt="" />
          </a>
          <a
            href="https://www.booking.com/"
            className="w-1/3 lg:w-1/7"
            target="_blank"
          >
            <img className="w-full" src={booking} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

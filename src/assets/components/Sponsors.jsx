import React from "react";
import Logo from "./Logo";
import tripadvisor from "../images/icons/tripadvisor-icon.svg";
import booking from "../images/icons/booking-icon.svg";

const Sponsors = () => {
  return (
    <div className="bg-custom-gray">
      <div className="custom-container bg-custom-gray flex w-full flex-col items-center pb-4 lg:flex-row">
        <div className="flex w-full flex-row items-center justify-evenly gap-4">
          <Logo iconSize={3} textSize={6} /> {/* smaller icon & text */}
          {/* flexed in desktop, hidden mobile */}
          <>
            <a
              href="https://www.tripadvisor.com/"
              className="hidden lg:block"
              target="_blank"
            >
              <img className="w-[140px]" src={tripadvisor} alt="Tripadvisor" />
            </a>
            <a
              href="https://www.booking.com/"
              className="hidden lg:block"
              target="_blank"
            >
              <img className="w-[140px]" src={booking} alt="Booking" />
            </a>
          </>
        </div>

        {/* mobile view */}
        <div className="mt-4 flex w-full flex-row items-center justify-evenly gap-4 lg:hidden">
          <a href="https://www.tripadvisor.com/" target="_blank">
            <img className="w-[120px]" src={tripadvisor} alt="Tripadvisor" />
          </a>
          <a href="https://www.booking.com/" target="_blank">
            <img className="w-[120px]" src={booking} alt="Booking" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

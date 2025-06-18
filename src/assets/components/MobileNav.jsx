import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navs } from "../../utils/navLinks";
const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  // This function checks the window size
  const checkWindowSize = () => {
    if (window.innerWidth >= 1080) {
      setIsActive(false); // Auto-close nav if screen is large
    }
  };

  useEffect(() => {
    // Check once on mount
    checkWindowSize();

    // Attach the resize listener
    window.addEventListener("resize", checkWindowSize);

    // Clean up the listener on unmount
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <div className="relative lg:hidden">
      <button
        className={`relative z-50 flex items-center justify-center p-2 transition-colors duration-300 ${
          isActive ? "text-white" : "text-primary"
        }`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className="relative h-6 w-6 cursor-pointer">
          <Menu
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isActive
                ? "scale-75 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <X
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isActive
                ? "scale-100 rotate-0 opacity-100"
                : "scale-75 -rotate-90 opacity-0"
            }`}
          />
        </div>
      </button>

      <div
        className={`bg-primary fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isActive
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <ul className="space-y-8 text-center">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link
                  onClick={() => setIsActive(false)}
                  className="font-body hover-underline text-xl font-semibold text-white"
                  to={`/${nav.path}`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

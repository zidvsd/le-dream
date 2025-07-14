import { navs } from "../../utils/navLinks";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import BookButton from "./buttons/BookButton";
import { Link, useLocation } from "react-router-dom";
import UtilityBar from "./UtilityBar";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="bg-primary sticky top-0 z-1000 w-full">
      <UtilityBar />
      <div className="custom-container flex flex-row items-center justify-between py-1">
        {/* Left: Logo */}
        <Logo iconSize={3} textSize={5} />
        {/* Center: Nav Links */}
        <ul className="hidden flex-row items-center space-x-12 lg:flex">
          {navs.map((nav, index) => {
            const isActive = location.pathname === `/${nav.path}`;
            return (
              <li key={index}>
                <Link
                  to={`/${nav.path}`}
                  className={`font-body lg:text-md font-semibold text-white transition-all duration-200 2xl:text-xl ${
                    isActive
                      ? "underline decoration-2 underline-offset-4"
                      : "hover-underline"
                  }`}
                >
                  {t(nav.key)}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Book Button */}
        <div className="hidden lg:flex">
          <BookButton />
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;

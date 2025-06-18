import { navs } from "../../utils/navLinks";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full border-b border-neutral-500">
      <div className="custom-container flex flex-row items-center justify-between pt-2">
        {/* left nav / logo */}
        <>
          <Logo />
        </>
        <ul className="hidden flex-row items-center space-x-18 lg:flex">
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
        {/* mobile menu */}
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;

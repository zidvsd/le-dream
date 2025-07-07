import { navs } from "../../utils/navLinks";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import BookButton from "./buttons/BookButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full border-b border-neutral-500">
      <div className="custom-container flex flex-row items-center justify-between pt-2">
        {/* left nav / logo */}
        <>
          <Logo iconSize={4} textSize={6} />
        </>
        <ul className="hidden flex-row items-center space-x-18 lg:flex">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link
                className="font-body hover-underline text-md font-semibold text-white xl:text-xl"
                to={`/${nav.path}`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* mobile menu */}
        <MobileNav />

        {/* contact us and about us */}
        <div className="hidden lg:flex">
          <BookButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

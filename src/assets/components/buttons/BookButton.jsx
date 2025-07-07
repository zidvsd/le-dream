import React from "react";
import book from "../../images/icons/book-icon.svg";
import { Link } from "react-router-dom";
const BookButton = () => {
  return (
    <Link
      className="bg-accent hover-opacity font-montserrat text-md flex flex-row items-center justify-center space-x-4 rounded-lg px-6 py-3 font-bold text-white xl:text-xl"
      to={"/contact"}
    >
      <img src={book} alt="" />
      <p>BOOK NOW</p>
    </Link>
  );
};

export default BookButton;

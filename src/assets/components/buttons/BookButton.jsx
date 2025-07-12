import React from "react";
import book from "../../images/icons/book-icon.svg";
import { Link } from "react-router-dom";
const BookButton = () => {
  return (
    <Link
      className="bg-accent hover-opacity font-montserrat text-md flex flex-row items-center justify-center space-x-2 rounded-lg px-4 py-2 font-bold text-white"
      to={"/contact"}
    >
      <img src={book} alt="" />
      <p>BOOK NOW</p>
    </Link>
  );
};

export default BookButton;

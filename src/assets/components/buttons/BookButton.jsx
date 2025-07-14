import React from "react";
import book from "../../images/icons/book-icon.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BookButton = () => {
  const { t } = useTranslation();
  return (
    <Link
      className="bg-accent hover-opacity font-montserrat text-md flex flex-row items-center justify-center space-x-2 rounded-lg px-4 py-2 font-bold text-white"
      to={"/contact"}
    >
      <img src={book} alt="" />
      <p>{t("buttons.bookNow")}</p>
    </Link>
  );
};

export default BookButton;

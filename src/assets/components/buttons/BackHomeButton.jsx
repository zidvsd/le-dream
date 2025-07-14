import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BackHomeButton = () => {
  const { t } = useTranslation();
  return (
    <Link
      className="font-montserrat hover:bg-accent border-2 border-black px-6 py-1 transition-all duration-100 ease-in hover:border-transparent"
      to={"/"}
    >
      {t("buttons.backHome")}
    </Link>
  );
};

export default BackHomeButton;

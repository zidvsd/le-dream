import React from "react";
import { ChevronDown } from "lucide-react";
import { handleScroll } from "../../../utils/util";
import { useTranslation } from "react-i18next";
const ScrollButton = ({ linkId }) => {
  const { t } = useTranslation();

  return (
    <button
      className="hover-opacity flex cursor-pointer flex-col items-center justify-center gap-y-4"
      onClick={() => handleScroll("about-section")}
    >
      <h1 className="font-body-header text-xl text-white">
        {t("buttons.scroll")}
      </h1>
      <ChevronDown className="size-8 animate-bounce rounded-full bg-white" />
    </button>
  );
};

export default ScrollButton;

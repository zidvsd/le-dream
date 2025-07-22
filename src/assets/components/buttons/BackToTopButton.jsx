import React from "react";
import { ChevronUp } from "lucide-react";
import { handleScroll } from "../../../utils/util";
import { useTranslation } from "react-i18next";
const BackToTopButton = () => {
  const { t } = useTranslation();

  return (
    <button
      className="hover-opacity flex cursor-pointer flex-col items-center justify-center gap-y-4"
      onClick={() => handleScroll("hero-section")}
    >
      <ChevronUp className="bg-primary size-8 animate-bounce rounded-full text-white" />
      <h1 className="font-body-black text-xl font-semibold">
        {t("buttons.backToTop")}
      </h1>
    </button>
  );
};

export default BackToTopButton;

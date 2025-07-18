import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import LearnMoreButton from "../../assets/components/buttons/LearnMoreButton";
import ImgCarousel from "../../assets/components/ImgCarousel";
const BarResto = () => {
  const { t } = useTranslation();

  return (
    <section id="resto-bar-section" className="section-padding w-full bg-white">
      <div className="custom-container mx-auto grid grid-cols-1 items-start gap-x-0 gap-y-8 sm:px-4 lg:grid-cols-2 xl:gap-x-0">
        {/* text */}
        <div className="order-2 w-full space-y-2 place-self-center text-left md:space-y-4 md:pr-6 lg:order-1">
          <h2 className="text-primary heading-section-responsive font-montserrat font-extrabold">
            {t("resto-bar.heading")}
          </h2>
          <p className="font-body-black max-w-lg text-neutral-600 lg:text-lg">
            {t("resto-bar.description")}
          </p>
          <div className="max-w-1/2 place-self-start lg:place-self-start">
            <LearnMoreButton route={"bar-resto"} />
          </div>
        </div>
        {/* carousel*/}
        <div className="order-1 w-full overflow-hidden md:rounded-md lg:order-2 lg:shadow-xl">
          <ImgCarousel id={"homePageBarResto"} />
        </div>
      </div>
    </section>
  );
};

export default BarResto;

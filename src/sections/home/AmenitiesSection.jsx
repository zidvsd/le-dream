import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import LearnMoreButton from "../../assets/components/buttons/LearnMoreButton";
import ImgCarousel from "../../assets/components/ImgCarousel";
const AmenitiesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="amenities-section" className="section-padding w-full bg-white">
      <div className="custom-container mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:px-4 lg:grid-cols-2 xl:gap-x-12">
        {/* text */}
        <div className="order-2 w-full space-y-2 place-self-center text-left md:space-y-4 md:pr-6 lg:order-2">
          <h2 className="text-primary heading-section-responsive font-montserrat font-extrabold">
            {t("amenities.heading")}
          </h2>
          <p className="font-body-black max-w-lg text-neutral-600 lg:text-lg">
            {t("amenities.description")}
          </p>
          <div className="max-w-1/2 place-self-start lg:place-self-start">
            <LearnMoreButton route={"amenities"} />
          </div>
        </div>
        {/* carousel*/}
        <div className="order-1 w-full overflow-hidden md:rounded-md lg:shadow-xl">
          <ImgCarousel id={"homePageAmenities"} />
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

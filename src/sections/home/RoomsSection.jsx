import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import LearnMoreButton from "../../assets/components/buttons/LearnMoreButton";
const RoomsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="rooms-section" className="w-full bg-white px-0 py-20">
      <div className="mx-auto grid grid-cols-1 items-start gap-x-12 gap-y-4 px-4 sm:container sm:px-4 lg:grid-cols-2 xl:gap-x-0">
        {/* text */}
        <div className="custom-container order-2 space-y-6 place-self-center text-left md:pr-6 lg:order-1">
          <h2 className="text-primary heading-section-responsive font-montserrat font-extrabold">
            {t("rooms.heading")}
          </h2>
          <p className="font-body-black max-w-lg text-neutral-600 lg:text-lg">
            {t("rooms.description")}
          </p>
          <div className="max-w-1/2 place-self-start lg:place-self-start">
            <LearnMoreButton linkId={"amenities-section"} />
          </div>
        </div>
        {/* vid*/}
        <div className="order-1 aspect-[16/9] w-full overflow-hidden md:rounded-md lg:order-2 lg:shadow-xl">
          <iframe
            className="h-full w-full border-0"
            src="https://www.youtube.com/embed/cIcKUf5pP7M?mute=1&autoplay=1&controls=0&fs=0&loop=1&modestbranding=1&playsinline=1&showinfo=0&rel=0"
            title="Hotel Tour Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;

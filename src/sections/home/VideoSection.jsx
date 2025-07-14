import React from "react";
import BookButton from "../../assets/components/buttons/BookButton";
import { useTranslation } from "react-i18next";

const VideoSection = ({ linkId }) => {
  const { t } = useTranslation();
  return (
    <section id="video-section" className="w-full bg-white px-0 py-20">
      <div className="mx-auto grid grid-cols-1 items-start gap-x-12 gap-y-12 sm:container sm:px-4 lg:grid-cols-2 xl:gap-x-0">
        {/* vid*/}
        <div className="aspect-[16/9] w-full overflow-hidden shadow-xl md:rounded-md">
          <iframe
            className="h-full w-full border-0"
            src="https://www.youtube.com/embed/cIcKUf5pP7M?mute=1&autoplay=1&controls=0&fs=0&loop=1&modestbranding=1&playsinline=1&showinfo=0&rel=0"
            title="Hotel Tour Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* text */}
        <div className="custom-container space-y-6 place-self-center text-center md:pr-6 lg:text-left">
          <h2 className="text-primary heading-section-responsive font-montserrat font-extrabold">
            {t("video.heading")}
          </h2>
          <p className="font-body-black max-w-lg text-neutral-600 lg:text-lg">
            {t("video.description")}
          </p>
          <div className="max-w-1/2 place-self-center lg:place-self-start">
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

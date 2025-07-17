import React from "react";
import BookButton from "../../assets/components/buttons/BookButton";
import { useTranslation } from "react-i18next";

const VideoSection = () => {
  const { t } = useTranslation();
  return (
    <section id="video-section" className="section-padding w-full bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-x-6 gap-y-8 sm:px-5 md:px-6 lg:grid-cols-2 lg:px-9 xl:gap-x-0">
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
        <div className="space-y-4 place-self-center px-2 text-center sm:px-0 md:pr-6 lg:text-left">
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

import React from "react";
import { useTranslation } from "react-i18next";
import BackToTopButton from "../../assets/components/buttons/BackToTopButton";
const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-y-12 py-12 sm:px-5 md:px-6">
      <div className="custom-container flex flex-col space-y-2 text-center font-semibold">
        <div className="flex w-full flex-row items-center justify-center gap-x-2">
          <h2 className="font-montserrat text-neutral-600">
            {t("maps.title")}
          </h2>
        </div>

        <h1 className="heading-section-responsive text-primary">
          {t("maps.description")}
        </h1>
      </div>

      {/* Responsive Map Container */}
      <div className="relative w-full pb-[56.25%]">
        {" "}
        {/* 16:9 aspect ratio */}
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7607.887230495475!2d120.38535800000001!3d17.557871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6514863594a3%3A0x8e37c85a8c601005!2sLe%20Dream%20Hotel%20near%20Vigan!5e0!3m2!1sen!2sca!4v1753169121329!5m2!1sen!2sca"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen=""
        ></iframe>
      </div>

      <BackToTopButton />
    </div>
  );
};

export default LocationSection;

import React from "react";
import founders from "../../assets/images/thumbnails/lorry-engracia-clear.webp";
import { Trans } from "react-i18next";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="text-primary bg relative w-full py-20"
    >
      <div className="custom-container grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Founders Image */}
        <img
          src={founders}
          alt="Founders of Le Dream Hotel"
          className="max-h-[500px] w-full rounded-full object-contain shadow-xl"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-y-6 text-left">
          <h1 className="heading-section-responsive font-garamond text-center">
            <Trans i18nKey="about.title">About Le Dream Hotel</Trans>
          </h1>

          <p className="font-montserrat text-neutral-600">
            <Trans
              i18nKey="about.founders"
              components={[
                <span key="founders" className="text-primary font-bold" />,
              ]}
            />
          </p>

          <p className="font-montserrat text-neutral-600">
            <Trans
              i18nKey="about.rooftop"
              components={[
                <span key="rooftop" className="text-primary font-bold" />,
              ]}
            />
          </p>

          <p className="font-montserrat text-neutral-600">
            <Trans
              i18nKey="about.location"
              components={[
                <span key="location" className="text-primary font-bold" />,
              ]}
            />
          </p>

          <p className="font-montserrat text-neutral-600">
            <Trans i18nKey="about.events" />
          </p>

          <p className="font-montserrat text-neutral-600">
            <Trans
              i18nKey="about.closing"
              components={[
                <span key="closing" className="text-primary font-bold" />,
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

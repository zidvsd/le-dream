import React from "react";
import heroImg from "../../assets/images/thumbnails/home-hero.webp";
import BookButton from "../../assets/components/buttons/BookButton";
import ScrollButton from "../../assets/components/buttons/ScrollButton";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/50" />

      {/* Content Wrapper */}
      <div className="custom-container relative z-10 flex min-h-[90vh] flex-col justify-between px-6 py-16 lg:px-20">
        {/* Text content - centered vertically and aligned left */}
        <div className="flex flex-1 items-start justify-center lg:items-center lg:justify-start">
          <div className="max-w-3xl space-y-2 text-center lg:text-left">
            <h1 className="font-body text-3xl font-light tracking-wider text-white md:text-4xl lg:text-5xl">
              WELCOME TO
            </h1>
            <h1 className="font-heading text-5xl font-bold tracking-[0.2em] text-white sm:text-6xl md:text-7xl">
              LE DREAM
            </h1>
            <h1 className="font-heading text-3xl font-bold tracking-[.2em] text-white md:text-4xl lg:text-5xl">
              HOTELS
            </h1>
            <p className="font-montserrat max-w-md tracking-wide text-white">
              Book your stay with us today, and let us make your dream vacation
              a reality.
            </p>
          </div>
        </div>

        {/* Buttons at bottom */}
        <div className="mt-auto flex flex-col items-center gap-y-4 pt-10">
          <BookButton />
          <ScrollButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

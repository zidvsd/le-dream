import React from "react";
import heroImg from "../../assets/images/thumbnails/home-hero.webp";
import heroImg2 from "../../assets/images/thumbnails/home-hero-2.jpg";
import heroImg3 from "../../assets/images/thumbnails/home-hero-3.jpg";
import BookButton from "../../assets/components/buttons/BookButton";
import ScrollButton from "../../assets/components/buttons/ScrollButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"; // ✅ Add Autoplay

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroImages = [heroImg, heroImg2, heroImg3];

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="relative min-h-[90vh] w-full overflow-hidden"
    >
      {/* Background Swiper */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]} // ✅ Register Autoplay
        navigation
        loop
        speed={1000} // ✅ Smooth transition
        autoplay={{
          delay: 5000, // ✅ Auto slide
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="absolute inset-0 -z-10 h-full w-full"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[90vh] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Text Overlay */}
      <div className="custom-container absolute inset-x-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center px-6 py-6 lg:items-start lg:justify-between lg:px-20 lg:pt-16 lg:pb-6">
        <div className="z-50 flex flex-1 items-start justify-center lg:items-center lg:justify-start">
          <div className="max-w-3xl space-y-2 text-center text-white lg:text-left">
            <h1 className="font-body text-3xl font-light tracking-wider md:text-4xl lg:text-5xl">
              WELCOME TO
            </h1>
            <h1 className="font-heading text-5xl font-bold tracking-[0.2em] sm:text-6xl md:text-7xl">
              LE DREAM
            </h1>
            <h1 className="font-heading text-3xl font-bold tracking-[.2em] md:text-4xl lg:text-5xl">
              HOTELS
            </h1>
            <p className="font-montserrat max-w-md tracking-wide">
              Book your stay with us today, and let us make your dream vacation
              a reality.
            </p>
          </div>
        </div>

        <div className="mt-auto flex w-full flex-col items-center justify-center gap-y-6 pt-10">
          <BookButton />
          <ScrollButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useRef } from "react";
import heroImg from "../../assets/images/thumbnails/home-hero.webp";
import heroImg2 from "../../assets/images/thumbnails/home-hero-2.jpg";
import heroImg3 from "../../assets/images/thumbnails/home-hero-3.jpg";
import BookButton from "../../assets/components/buttons/BookButton";
import ScrollButton from "../../assets/components/buttons/ScrollButton";
import PrevButton from "../../assets/components/buttons/PrevButton";
import NextButton from "../../assets/components/buttons/NextButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroImages = [heroImg, heroImg2, heroImg3];

const HeroSection = () => {
  const swiperRef = useRef(null);

  return (
    <div
      id="hero-section"
      className="relative min-h-[80vh] w-full overflow-hidden"
    >
      {/* Background Swiper */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="absolute inset-0 z-10 min-h-[80vh] w-full"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-[80vh] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Text Overlay */}
      <div className="custom-container absolute inset-x-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center px-6 py-6 lg:items-start lg:justify-between lg:px-20 lg:pt-16 lg:pb-6">
        <div className="z-10 flex flex-1 items-center justify-center lg:items-center lg:justify-start">
          <div className="max-w-3xl space-y-2 text-center text-white lg:text-left">
            <h1 className="font-body text-2xl tracking-wider md:text-3xl lg:text-4xl">
              WELCOME TO
            </h1>
            <h1 className="font-heading text-5xl font-bold tracking-[0.2em] md:text-7xl">
              LE
              <span className="ml-4">DREAM</span>
            </h1>
            <h1 className="font-heading text-2xl font-bold tracking-[.2em] md:text-3xl lg:text-4xl">
              HOTELS
            </h1>
            <p className="font-montserrat max-w-md tracking-wide">
              Book your stay with us today, and let us make your dream vacation
              a reality.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-y-6 pt-10">
          <BookButton />
          <ScrollButton linkId="cards-section" />
        </div>
        {/* 👇 Bottom Center Nav Buttons */}
        <div className="relative z-20 flex w-full items-center justify-between gap-4 lg:hidden">
          <PrevButton onClick={() => swiperRef.current?.slidePrev()} />
          <NextButton onClick={() => swiperRef.current?.slideNext()} />
        </div>

        {/* absolute position on lg screens */}
      </div>
      <div className="absolute bottom-1 left-6 z-20 hidden -translate-y-1/2 lg:block">
        <PrevButton onClick={() => swiperRef.current?.slidePrev()} />
      </div>

      {/* 👇 Next button: center-right */}
      <div className="absolute right-6 bottom-1 z-20 hidden -translate-y-1/2 lg:block">
        <NextButton onClick={() => swiperRef.current?.slideNext()} />
      </div>
    </div>
  );
};

export default HeroSection;

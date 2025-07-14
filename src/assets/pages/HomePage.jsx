import React from "react";
import HeroSection from "../../sections/home/HeroSection";
import CardsSection from "../../sections/home/CardsSection";
import VideoSection from "../../sections/home/VideoSection";
import AboutSection from "../../sections/home/AboutSection";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CardsSection />
      <VideoSection />
    </div>
  );
};

export default HomePage;

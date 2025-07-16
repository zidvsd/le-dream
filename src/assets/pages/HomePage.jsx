import React from "react";
import HeroSection from "../../sections/home/HeroSection";
import CardsSection from "../../sections/home/CardsSection";
import VideoSection from "../../sections/home/VideoSection";
import AboutSection from "../../sections/home/AboutSection";
import RoomsSection from "../../sections/home/RoomsSection";
import AmenitiesSection from "../../sections/home/AmenitiesSection";
import BarRestoSection from "../../sections/home/BarRestoSection";
import ExploreSection from "../../sections/home/ExploreSection";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CardsSection />
      <VideoSection />
      <RoomsSection />
      <AmenitiesSection />
      <BarRestoSection />
      <ExploreSection />
    </div>
  );
};

export default HomePage;

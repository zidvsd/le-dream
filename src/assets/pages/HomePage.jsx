import React from "react";
import HeroSection from "../../sections/home/HeroSection";
import CardsSection from "../../sections/home/CardsSection";
import VideoSection from "../../sections/home/VideoSection";
import AboutSection from "../../sections/home/AboutSection";
import RoomsSection from "../../sections/home/RoomsSection";
import AmenitiesSection from "../../sections/home/AmenitiesSection";
import BarRestoSection from "../../sections/home/BarRestoSection";
import ExploreSection from "../../sections/home/ExploreSection";
import Testimonials from "../components/Testimonials";
import { useRef } from "react";
const HomePage = () => {
  const firstSectionRef = useRef();
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
      <Testimonials />
    </div>
  );
};

export default HomePage;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AmenitiesPage from "../pages/AmenitiesPage";
import ExplorePage from "../pages/ExplorePage";
import BarRestoPage from "../pages/BarRestoPage";
import RoomsPage from "../pages/RoomsPage";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/rooms" element={<RoomsPage />}></Route>
          <Route path="/amenities" element={<AmenitiesPage />}></Route>
          <Route path="/bar-resto" element={<BarRestoPage />}></Route>
          <Route path="/explore" element={<ExplorePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

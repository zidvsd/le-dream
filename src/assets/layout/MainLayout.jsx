import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";
const MainLayout = () => {
  const firstSectionRef = useRef();

  return (
    <>
      <Navbar firstSectionRef={firstSectionRef} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

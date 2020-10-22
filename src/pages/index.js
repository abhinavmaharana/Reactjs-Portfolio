import React, { useState } from "react";
import About from "../components/AboutMeSection/About";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/AboutMeSection/Data";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Work from "../components/Work/Work";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About {...homeObjOne} />
      <About {...homeObjTwo} />
      <Work />
      <About {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Section1 from "./Section1";
import Scroll from "./Scroll";
import Section3 from "./Section3";

import Footer from "../../../Cards/Footer";
import Slider from "../../../Cards/Slider/Slider";
import Carousel from "../../..//carousel/Carousel";
import ImageCarousel from "../../../carousel/ImageCarousel";
const HomePage2 = () => {
  return (
    <>
      <Section1 />
   <Slider />
     <ImageCarousel />
      <Carousel />
      <Footer />
    </>
  );
};

export default HomePage2;

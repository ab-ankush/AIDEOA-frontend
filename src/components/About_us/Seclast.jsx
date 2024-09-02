import { useGSAP } from "@gsap/react";
import React, { useCallback, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Seclast = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#lll", {
      y: -600,
      duration: 0.5,
      delay: 0.2,
      yoyo: true,
      scrollTrigger: {
        trigger: "#lll",
        scroller: "body",
        markers: false,
        start: "top 700px",
      },
    });
  });
  return (
    <div
      id="lll"
      className="container mt-20 my-4 rounded-lg bg-[#0000000D] sm:mx-auto justify-center items-center border  flex sm:w-[400px] sm:flex-col md:w-[600px] lg:w-[800px] lg:flex-col xl:flex-row xl:w-[1050px] xl:h-[250px] 2xl:w-[1200px]"
    >
      <div className="flex sm:flex-col xl:flex-row">
        <div className="flex justify-center items-center xl:px-5 sm:my-3 sm:px-4">
          <h1 className="sm:mx-auto  text-center ">
            GET READY TO KNOW THE LATEST UPDATE!
          </h1>
        </div>
        <div className="flex justify-center items-center xl:px-5 sm:my-3 sm:px-4">
          <p className="sm:mx-auto sm:text-justify xl:text-center">
            Join us for our latest upcoming events by subscribing us & get
            notified..
          </p>
        </div>
      </div>
      <div className="flex sm:my-3 xl:mx-4 justify-center items-center">
        <input type="search" className="h-11" name="" id="" />
        <button className="bg-purple-500 h-11 text-white ml-0 px-4 rounded-lg ">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Seclast;

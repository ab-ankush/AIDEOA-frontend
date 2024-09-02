import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
const Jumbotoron = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#sq", {
      opacity: 0,
      scale: 0,
      duration: 2,
      delay: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: "#sq",
        scroller: "body",
        markers: false,
        start: "top 500px",
      },
    });
  });
  return (
    <>
      <div className="container my-4 rounded-lg text-[35px] sm:mx-auto justify-start items-center   text-purple-600  flex flex-row sm:w-[500px] md:w-[600px] lg:w-[800px] lg:flex-row xl:w-[1050px] xl:h-[350px] 2xl:w-[1300px]">
        Who are we
      </div>
      <div
        id="sq"
        className="container my-4 rounded-lg bg-[#0000000D] sm:mx-auto justify-between items-center border  flex sm:flex-col-reverse sm:w-[500px] md:w-[600px] lg:w-[800px] lg:flex-row xl:w-[1050px] xl:h-[350px] 2xl:w-[1300px]"
      >
        <div className="flex flex-col sm:p-[10px] lg:w-[50%] xl:mx-[10px] 2xl:w-[50%] 2xl:mx-[20px]  ">
          <h1 className="p-4 text-justify font-bold lg:py-2 lg:text-[30px] xl:text-[35px] 2xl:text-[50px]">
            Aideoa is dedicated!{" "}
          </h1>
          <p
            className="p-4 text-justify text-[#00000099] lg:py-2  lg:text-[15px] xl:text-[18px] 2xl:text-[20px]
"
          >
            Welcome to our dynamic platform, a dedicated hub for Mining Diploma
            and Degree holders. Our vision is to create a unified community of
            Mining Sirdars, Overmen, Surveyors, Assistant Managers, and other
            mining professionals, driving collaborative decision-making and
            industry excellence.
          </p>
        </div>
        <div className="flex sm:mb-3 sm:mt-4 lg:mx-3 2xl:mx-[30px]">
          <img
            src="./images/home.jpeg"
            className=" rounded-lg sm:w-[400px] sm:h-[200px] md:w-[550px]md:h-[300px] lg:w-[330px] lg:h-[170px] 2xl:w-[400px] 2xl:h-[250px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Jumbotoron;

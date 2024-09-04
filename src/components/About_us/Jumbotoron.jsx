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
      duration: 1,
      delay: 0.2,
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
      <div className="container mx-4 rounded-lg text-[35px]  justify-start items-center text-purple-600  flex flex-row max-sm:my-2 max-sm:mx-auto max-sm:w-full   md:w-[600px] lg:w-[800px] lg:flex-row xl:w-[1050px] xl:h-[100px] 2xl:w-[1300px]">
        Who are we
      </div>
      <div
        id="sq"
        className="container my-3 rounded-lg bg-[#0000000D]  justify-between items-center border max-sm:w-full  flex max-md:flex-col-reverse sm:mx-auto sm:w-[450px]  md:w-[600px] lg:w-[800px] lg:flex-row xl:w-[1050px] xl:h-[350px] 2xl:w-[1300px]"
      >
        <div className="flex flex-col sm:p-[10px] md:w-[40%] lg:w-[50%] xl:mx-[10px] 2xl:w-[50%] 2xl:mx-[20px]  ">
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
        <div className="flex sm:mb-3 md:w-[60%] sm:mt-4 lg:mx-3  2xl:mx-[30px]">
          <img
            src="./images/home.jpeg"
            className=" rounded-lg sm:w-[400px] sm:h-[200px] md:px-4 md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[170px] xl:h-[300px] xl:mx-auto xl:w-[450px] 2xl:w-[550px] 2xl:h-[300px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Jumbotoron;

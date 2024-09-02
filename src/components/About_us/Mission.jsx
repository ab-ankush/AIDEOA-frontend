import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Mission = () => {
  useGSAP(() => {
    gsap.from("#line1", {
      x: -500,
      rotateY: 360,
      duration: 1,
      delay: 0.2,
      yoyo: true,
      scrollTrigger: {
        trigger: "#line1",
        scroller: "body",
        markers: false,
        start: "top 500px",
      },
    });
    gsap.from("#line3", {
      x: 500,
      rotateY: 360,
      duration: 1,
      delay: 0.2,
      yoyo: true,
      scrollTrigger: {
        trigger: "#line3",
        scroller: "body",
        markers: false,
        start: "top 500px",
      },
    });
    gsap.from("#line2", {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 0.2,
      yoyo: true,
      scrollTrigger: {
        trigger: "#line2",
        scroller: "body",
        markers: false,
        start: "top 500px",
      },
    });
  });
  return (
    <>
      <div className="text-center text-[35px]  my-10 ">Our Mission</div>
      <div className="flex xl:flex-row sm:flex-col overflow-x-hidden  lg:flex-row xl:mx-[120px] 2xl:mx-[200px]">
        <div
          id="line1"
          className="container my-4 rounded-lg bg-[#0000000D] sm:w-[350px] sm:h-[400px] sm:mx-auto justify-around items-center border  flex sm:flex-col md:w-[400px] md:h-[500px] lg:w-[300px] lg:flex-col lg:justify-evenly xl:flex-col xl:w-[300px] xl:h-[500px] 2xl:w-[350px]"
        >
          <div className="flex sm:mb-3  sm:mt-4 lg:mx-3  ">
            <img src="./images/send/setting.png" className=" " alt="" />
          </div>
          <div className="flex flex-col lg:w-[250px]  ">
            <h1 className="p-4 font-bold text-justify">
              Empower and Advocate{" "}
            </h1>
            <p className="p-4 text-[#00000099] text-justify">
              We tackle the unique challenges faced by mining students, from
              examination hurdles and promotion pathways to certificate issuance
              by D.G.M.S and job vacancies. We stand with you every step of the
              way.
            </p>
          </div>
        </div>
        <div
          id="line2"
          className="container my-4 rounded-lg bg-[#0000000D] sm:w-[350px] sm:h-[400px] sm:mx-auto justify-around items-center border  flex sm:flex-col md:w-[400px] md:h-[500px] lg:w-[300px] lg:flex-col lg:justify-evenly xl:flex-col xl:w-[300px] xl:h-[500px] 2xl:w-[350px]"
        >
          <div className="flex sm:mb-3 sm:mt-4 lg:mx-3 ">
            <img
              src="./images/send/profile-2user.png"
              className=" sm:w-[88px]"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-[250px]  ">
            <h1 className="p-4 font-bold text-justify">
              Community Leadership{" "}
            </h1>
            <p className="p-4 text-[#00000099] text-justify">
              Our involvement in key events related to promotions, examinations,
              and grievance resolutions, ensures that voices from every corner
              of the mining sector are heard and respected.
            </p>
          </div>
        </div>
        <div
          id="line3"
          className="container my-4 justify-around rounded-lg bg-[#0000000D] sm:w-[350px] sm:h-[400px] sm:mx-auto  items-center border  flex sm:flex-col md:w-[400px] md:h-[500px] lg:w-[300px] lg:flex-col lg:justify-evenly xl:flex-col xl:w-[300px] xl:h-[500px] 2xl:w-[350px]"
        >
          <div className="flex sm:mb-3 sm:mt-4 lg:mx-3 ">
            <img
              src="./images/send/Icon.png"
              className="bg-[#0000000D] sm:w-[88px] "
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-[250px]  ">
            <h1 className="p-4 font-bold text-justify">
              Educational Excellence{" "}
            </h1>
            <p className="p-4 text-[#00000099] text-justify">
              We offer a wealth of study materials, including free books, MCQ
              questions, and detailed notes for a variety of mining exams like
              Mining Sirdar, Overman, Gas Testing, Surveyor, 2nd Class Manager,
              and 1st Class Manager.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;

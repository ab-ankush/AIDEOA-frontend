import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Offering = () => {
  useGSAP(() => {
    gsap.from("#dib1", {
      y: -600,
      rotateY: 360,
      duration: 2,
      delay: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: "#dib1",
        scroller: "body",
        markers: false,
        start: "top 500px",
      },
    });
    gsap.from("#dib2", {
      y: 430,
      rotateY: 360,
      duration: 2,
      delay: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: "#dib2",
        scroller: "body",
        markers: false,
        start: "top 500px",
      },
    });
  });
  return (
    <>
      <div className="text-center text-[35px]  my-10 ">Our Offerings</div>
      <div>
        <div className="flex overflow-y-hidden xl:flex-row sm:flex-col lg:flex-row xl:mx-[100px] 2xl:mx-[150px]">
          <div
            id="dib1"
            className="container my-4 rounded-lg bg-[#0000000D] sm:w-[400px] sm:mx-auto justify-center items-center border  flex sm:flex-col md:w-[500px] lg:w-[400px] lg:flex-row lg:justify-evenly xl:flex-col xl:px-[100px] xl:w-[500px] xl:h-[400px] 2xl:w-[500px]"
          >
            <div className="flex sm:mb-3  sm:mt-4 lg:mx-3  ">
              <img src="./images/send/setting.png" className=" " alt="" />
            </div>
            <div className="flex flex-col lg:w-[250px]  ">
              <h1 className="p-4 text-justify">Empower and Advocate </h1>
              <p className="p-4 text-justify">
                We tackle the unique challenges faced by mining students, from
                examination hurdles and promotion pathways to certificate
                issuance by D.G.M.S and job vacancies. We stand with you every
                step of the way.
              </p>
            </div>
          </div>
          <div
            id="dib2"
            className="container my-4 rounded-lg bg-[#0000000D] sm:w-[400px] sm:mx-auto justify-center items-center border  flex sm:flex-col md:w-[500px] lg:w-[400px] lg:flex-row lg:justify-evenly xl:flex-col xl:px-[100px] xl:w-[500px] xl:h-[400px] 2xl:w-[500px]"
          >
            <div className="flex sm:mb-3 sm:mt-4 lg:mx-3 ">
              <img
                src="./images/send/Icon.png"
                className="bg-[#0000000D] sm:w-[88px] "
                alt=""
              />
            </div>
            <div className="flex flex-col lg:w-[250px]  ">
              <h1 className="p-4 text-justify">Educational Excellence </h1>
              <p className="p-4 text-justify">
                We offer a wealth of study materials, including free books, MCQ
                questions, and detailed notes for a variety of mining exams like
                Mining Sirdar, Overman, Gas Testing, Surveyor, 2nd Class
                Manager, and 1st Class Manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offering;

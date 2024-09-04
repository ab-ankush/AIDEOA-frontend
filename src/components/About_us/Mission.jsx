import React from "react";

const Mission = () => {
  
  return (
    <>
      <div className="text-center text-[35px]  my-10 ">Our Mission</div>
      <div className="flex overflow-x-hidden  max-md:flex-col md:grid md:grid-cols-2 lg:flex   lg:flex-row xl:mx-[120px] xl:flex-row 2xl:mx-[200px]">
        <div
          id="line1"
          className="container my-4 rounded-lg bg-[#0000000D] max-md:w-full max-md:h-[400px]  justify-around items-center border  flex sm:w-[300px] sm:mx-auto max-md:flex-col md:w-[300px] md:h-[400px] max-lg:flex-col lg:w-[300px] lg:flex-col lg:justify-evenly xl:flex-col xl:w-[300px] xl:h-[500px] 2xl:w-[350px]"
        >
          <div className="flex max-md:flex-col sm:mb-3  sm:mt-4 lg:mx-3  ">
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
          className="container my-4 rounded-lg justify-around items-center border  flex bg-[#0000000D] 
          sm:w-[300px] max-sm:w-full max-md:h-[400px] max-md:mx-auto  max-md:flex-col md:w-[300px] md:h-[400px] md:mx-auto max-lg:flex-col lg:w-[300px] lg:mx-auto lg:flex-col lg:justify-evenly xl:flex-col xl:w-[300px] xl:h-[500px] 2xl:w-[350px]"
        >
          <div className="flex sm:mb-3 sm:mt-4 lg:mx-3 ">
            <img
              src="./images/send/profile-2user.png"
              className="w-[88px]"
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
          className="container my-4   items-center border  flex justify-around rounded-lg bg-[#0000000D] sm:w-[300px] max-md:flex-col max-sm:w-full max-md:h-[400px] max-md:mx-auto md:w-[300px] md:h-[400px] max-lg:flex-col 
          max-lg:mx-auto lg:w-[300px] lg:mx-auto lg:flex-col lg:justify-evenly xl:flex-col xl:w-[300px] xl:h-[500px] 2xl:w-[350px]"
        >
          <div className="flex sm:mb-3 sm:mt-4 lg:mx-3 ">
            <img
              src="./images/send/Icon.svg"
              className="bg-[#0000000D] w-[88px] "
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

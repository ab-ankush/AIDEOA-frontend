import React from "react";

const Offering = () => {
 
  return (
    <>
      <div className="text-center text-[35px]  my-10 ">Our Offerings</div>
      <div>
        <div className="flex overflow-y-hidden  max-md:flex-col  max-lg:flex-col lg:flex-row xl:mx-[100px] xl:flex-row 2xl:mx-[150px]">
          <div
            id="dib1"
            className="container my-4 rounded-lg flex flex-col bg-[#0000000D] justify-center items-center border   max-sm:w-full sm:w-[350px] sm:mx-auto sm:flex-col md:w-[400px] lg:w-[400px] lg:flex-row lg:justify-evenly xl:flex-col xl:px-[100px] xl:w-[500px] xl:h-[400px] 2xl:w-[400px]"
          >
            <div className="flex max-sm:my-2 sm:mb-3  sm:mt-4 lg:mx-3  ">
              <img
                src="./images/send/Icon.svg"
                className=" w-[88px] h-[88px] "
                alt=""
              />
            </div>
            <div className="flex flex-col lg:w-[250px]  ">
              <h1 className="p-4 font-bold text-justify">
                Empower and Advocate{" "}
              </h1>
              <p className="p-4 text-[#00000099] ">
                We tackle the unique challenges faced by mining students, from
                examination hurdles and promotion pathways to certificate
                issuance by D.G.M.S and job vacancies. We stand with you every
                step of the way.
              </p>
            </div>
          </div>
          <div
            id="dib2"
            className="container my-4 rounded-lg bg-[#0000000D] flex flex-col justify-center items-center border max-sm:w-full sm:mx-auto sm:w-[350px] sm:flex-col md:w-[400px] lg:w-[400px] lg:flex-row lg:justify-evenly xl:flex-col xl:px-[100px] xl:w-[500px] xl:h-[400px] 2xl:w-[400px]"
          >
            <div className="flex max-sm:my-2 sm:mb-3 sm:mt-4 lg:mx-3 ">
              <img
                src="./images/send/Icon (1).svg"
                className=" w-[88px] "
                alt=""
              />
            </div>
            <div className="flex flex-col lg:w-[250px]  ">
              <h1 className="p-4 font-bold ">
                Educational Excellence{" "}
              </h1>
              <p className="p-4 text-[#00000099] ">
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

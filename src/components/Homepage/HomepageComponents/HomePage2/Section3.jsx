import React from "react";

const Section3 = () => {
  return (
    <div
      id="sec3"
      className="max-sm:flex max-sm:justify-center max-sm:items-center my-4 mx-auto max-sm:mx-4  sm:w-[640px] lg:w-[1000px] xl:w-[1250px] flex-wrap flex flex-col justify-center items-center"
    >
      <div className="content flex flex-col justify-center items-center text-lg">
        <h1 className="font-semibold text-[35px] leading-15">Photo Gallery</h1>
        <p className="text-sm my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
          labore!
        </p>
      </div>
      <div className="mx-auto">
        <div
          className="images-container flex gap-5 w-full h-full flex-col justify-center items-center flex-wrap lg:w-[900px] lg:h-[400px] lg:grid lg:grid-cols-6 mb-5"
          style={{ gridAutoColumns: "13%" }}
        >
          <div className=" h-full  sm:my-2 lg:my-0 flex justify-center items-center image lg:col-start-1 lg:col-end-2 lg:h-[200px] ">
            <img
              className="h-full  rounded-[10px] block object-cover sm:w-[600px]"
              src="./images/1.jpg"
              alt=""
            />
          </div>
          <div className=" h-full flex justify-center items-center image lg:col-start-2 lg:col-end-4 lg:h-[200px]">
            <img
              className="h-full  rounded-[10px] block object-cover sm:w-[600px]"
              src="./images/2.jpg"
              alt=""
            />
          </div>
          <div className=" h-full flex justify-center items-center image lg:col-start-4 lg:col-end-7 lg:h-[200px]">
            <img
              className="h-full  rounded-[10px] block object-cover sm:w-[600px]"
              src="./images/3.jpg"
              alt=""
            />
          </div>
          <div className=" h-full flex justify-center items-center image lg:col-start-1 lg:col-end-3 lg:h-[195px] ">
            <img
              className="h-full  rounded-[10px] block object-cover sm:w-[600px]"
              src="./images/4.jpg"
              alt=""
            />
          </div>
          <div className=" h-full flex justify-center items-center image lg:col-start-3 lg:col-end-6 lg:h-[195px]">
            <img
              className="h-full  rounded-[10px] block object-cover sm:w-[600px]"
              src="./images/5.jpg"
              alt=""
            />
          </div>
          <div className=" h-full flex justify-center items-center image lg:col-start-6 lg:col-end-7 lg:h-[195px]">
            <img
              className="h-full  rounded-[10px] block object-cover sm:w-[600px]"
              src="./images/home.jpeg"
              alt=""
            />
          </div>
          {/* 
          <div className="image xl:col-start-4 col-end-7 ">
            <img
              className="w-full rounded-[10px] h-full object-fill"
              src="/images/3.jpg"
              alt=""
            />
          </div>
          <div className="image xl:col-start-1 col-end-3 ">
            <img
              className="w-full rounded-[10px] h-full object-fill"
              src="/images/4.jpg"
              alt=""
            />
          </div>
          <div className="image xl:col-start-3 col-end-6 ">
            <img
              className="w-full rounded-[10px] h-full object-fill"
              src="/images/5.jpg"
              alt=""
            />
          </div>
          <div className="image xl:col-start-6 col-end-7 ">
            <img
              className="w-full rounded-[10px] h-full object-fill"
              src="/images/home.jpeg"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section3;

// <div className="image xl:col-start-2 col-end-4 ">
{
  /* <img
className="w-full rounded-[10px] h-full object-fill"
src="/images/2.jpg"
alt=""
/>
</div> */
}

import React from "react";

const flow =[{head:"Aideoa Events",p:"1200+  events"},
    {head:"Online Test",p:"1200+  events"},
    {head:"Student Corner",p:"1200+  materials"},
    {head:"Employee Corner ",p:"1200+  materials"},
    {head:"Education",p:"1200+  materials"},

]
const About = () => {

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className=" ">
        <div className="flex gap-24 ">
       
        {
            flow.map((item)=>{
                return  <div className="w-[192px] h-[84px] rounded-xl flex flex-col items-center justify-center gap-1 shadow-lg">
                <h3 className="font-medium text-[14px] text-center">{item.head}</h3>
                <p className="text-[#828282] bg-[#F2F2F2] rounded-lg font-normal text-[12px] px-[8px] py-[5px] self-end mr-3">{item.p}</p>
              </div>
            })
        }

        </div>
        <div className="mt-28  flex flex-col gap-10 text-center">
          <h1 className=" font-semibold text-[27px] ">
            About{" "}
            <span className=" text-[27px] font-bold text-AIDEOTYPO">
              AIDEOA
            </span>
          </h1>
          <p className="font-normal text-[15px] text-[#505050]">
            Know about our organization, mission, and objectives.
          </p>
          <div className="flex justify-center gap-12 ">
            <div className="w-[381px]  bg-[#FFFEFE] h-[349px] rounded-3xl shadow-xl flex justify-center items-center flex-col gap-12">
              <img
                src="/flag.png"
                alt=""
                className="w-[30px] h-[32.1px] "
              />
              <div className="w-[332px] h-[129px] flex flex-col gap-7">
                <h3 className="font-semibold text-[19px]">Our Mission</h3>

                <p className="font-normal text-[14px] leading-6 tracking-wider">
                  At AIDEOA, we strive to address and resolve issues faced by
                  mining students and professionals.
                </p>
              </div>
            </div>
            <div className="w-[381px]  bg-[#00000008] h-[349px] rounded-3xl shadow-xl flex justify-center items-center flex-col gap-12">
              <img
                src="/headset.png"
                alt=""
                className="w-[30px] h-[32.1px] "
              />
              <div className="w-[332px] h-[129px] flex flex-col gap-7">
                <h3 className="font-semibold text-[19px]">Our Support and Resources</h3>

                <p className="font-normal text-[14px] leading-6 tracking-wider">
                We offer a wide range of study materials to aid mining students and professionals in their preparation for various examinations.
                </p>
              </div>
            </div>
            <div className="w-[381px] bg-[#00000008] h-[349px] rounded-3xl shadow-xl flex justify-center items-center flex-col gap-12">
              <img
                src="/laptop.png"
                alt=""
                className="w-[30px] h-[32.1px] "
              />
              <div className="w-[332px] h-[129px] flex flex-col gap-7">
                <h3 className="font-semibold text-[19px]">Online Classes</h3>

                <p className="font-normal text-[14px] leading-6 tracking-wider">
                We conduct online classes where students can engage in discussions about different mining topics and field-related issues. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

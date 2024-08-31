import React from "react";

const flow =[{head:"Aideoa Events",p:"1200+  events"},
    {head:"Online Test",p:"1200+  events"},
    {head:"Student Corner",p:"1200+  materials"},
    {head:"Employee Corner ",p:"1200+  materials"},
    {head:"Education",p:"1200+  materials"},

]

const aboutArray=[
  {head:"Our Mission",tag:"At AIDEOA, we strive to address and resolve issues faced by mining students and professionals.",icon:"/flag.png"},
  {head:"Our Support and Resources",tag:"We offer a wide range of study materials to aid mining students and professionals in their preparation for various examinations",icon:"/laptop.png"},
  {head:"Online Classes",tag:"JWe conduct online classes where students can engage in discussions about different mining topics and field-related issues.",icon:"/headset.png"},
]

const About = () => {

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className=" container py-20">
   
        <div className="flex gap-24  justify-center max-2xl:gap-16 max-xl:gap-8 max-lg:flex-wrap" >
       
        {
            flow.map((item)=>{
                return  <div className="w-48 h-20 rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                <h3 className="font-medium text-sm text-center">{item.head}</h3>
                <p className="text-[#828282] bg-[#F2F2F2] rounded-lg font-normal text-xs px-2 py-2 self-end mr-3">{item.p}</p>
              </div>
            })
        }

        </div>
        <div className="mt-28  flex flex-col gap-10 text-center">
          <h1 className=" font-semibold text-2xl ">
            About{" "}
            <span className=" text-3xl font-bold text-AIDEOTYPO">
              AIDEOA
            </span>
          </h1>
          <p className="font-normal text-base text-[#505050]">
            Know about our organization, mission, and objectives.
          </p>
          <div className="flex justify-center gap-12 flex-wrap">
            
           
            {aboutArray.map((content,idx)=>{
              return <div key={idx} className="w-96 bg-[#00000008] h-80 rounded-3xl shadow-xl flex justify-center items-center flex-col gap-12 max-sm:w-80">
              <img
                src={content.icon}
                alt=""
                className="w-7 h-8 "
              />
              <div className="w-80 h-32 flex flex-col gap-7">
                <h3 className="font-semibold text-lg">{content.head}</h3>

                <p className="font-normal text-sm leading-6 tracking-wider px-3">
               {content.tag}
                </p>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

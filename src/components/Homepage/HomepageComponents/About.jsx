import MissionModal from "../../../utils/MissionModal"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const flow =[{head:"Aideoa Events",p:"1200+  events",link:"/event"},
    {head:"Online Test",p:"1200+  events"},
    {head:"Student Corner",p:"1200+  materials"},
    {head:"Employee Corner ",p:"1200+  materials"},
    {head:"Education",p:"1200+  materials"},

]

const aboutArray=[
  {head:"Our Mission",tag:"At AIDEOA, we strive to address and resolve issues faced by mining students and professionals.",icon:"/flag.png"},
  {head:"Our Support and Resources",tag:"We offer a wide range of study materials to aid mining students and professionals in their preparation for various examinations",icon:"/laptop.png",link:"/contact"},
  {head:"Online Classes",tag:"JWe conduct online classes where students can engage in discussions about different mining topics and field-related issues.",icon:"/headset.png"},
]

const About = () => {

const [open,setOpen]=useState(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

   
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

const handleOpenModal=(idx)=>{
  idx===0 && setOpen(true)
}
  return (
    <div className="bg-white relative min-h-screen flex items-center justify-center">
      <div className=" container  py-20">
   
        <div className="flex gap-20  justify-center max-2xl:gap-16 max-xl:gap-8 flex-wrap" >
       
        {
            flow.map((item,idx)=>{
                return  <Link key={idx} to={item?.link}>
                <div  className="w-60 h-20 rounded-xl flex flex-col items-center justify-center gap-2 dropshadowbox">
                <h3 className="font-medium text-normal text-center">{item.head}</h3>
                <p className="text-[#828282] bg-[#F2F2F2] rounded-lg font-normal text-sm px-2 py-2 self-end mr-3">{item.p}</p>
              </div>
                </Link>
            })
        }

        </div>
        <div className="mt-28  flex flex-col gap-8 text-center">
          <h1 className=" font-black text-3xl ">
            About{" "}
            <span className=" text-4xl font-black text-AIDEOTYPO">
              AIDEOA
            </span>
          </h1>
          <p className="font-normal text-sm px-2 text-center text-[#505050]">
            Know about our organization, mission, and objectives.
          </p>
          <div className="flex justify-center gap-12 relative flex-wrap ">
            
{       open &&     <div className="fixed container px-48 max-lg:px-14 max-lg:px-6 top-[57%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 transition ease-in duration-500 ">
              <MissionModal  setOpen={setOpen}/>
            </div>}
           
            {aboutArray.map((content,idx)=>{
              return <div key={idx} onClick={()=>{handleOpenModal(idx)}}  className="w-96 cursor-pointer bg-[#00000008] h-80 rounded-3xl shadow-xl flex justify-center items-center flex-col gap-12 max-sm:w-80 ">
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

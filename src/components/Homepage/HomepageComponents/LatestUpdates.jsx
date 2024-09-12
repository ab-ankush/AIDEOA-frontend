import React, { useState } from "react";
const notificationsArr = [
  "AIDEOA Hosts Successful Annual Conference",
  "AIDEOA Hosts Successful Annual Conference",
  "AIDEOA Hosts Successful Annual Conference",
  "AIDEOA Hosts Successful Annual Conference",
];
const LatestUpdates = () => {
  const[expand,setExpand]=useState( false)
  return (
    <div className="bg-[#070D18] text-white p-20 pt-24  max-sm:px-6 ">

        <div className="flex   justify-around items-center gap-20  max-xl:gap-14 max-lg:gap-7 max-md:flex-col max-md:items-start">
          <div className="  w-full">
            <h3 className="text-[35px] font-semibold mb-4">Latest updates</h3>
            <p className="text-[16px] font-normal mb-6 max-lg:text-sm ">
              Our recent news, updates, and highlights with links to full
              articles.
            </p>
            <div className="flex flex-col w-full ">
              {notificationsArr.map((content, idx) => {
                return (
                  <div
                    key={idx}
                    className="  h-[102px] w-full border-b-[0.5px] border-[#FFFFFF99] bg-gray-800  hover:bg-[#FFFFFF1A]"
                  >
                    <div className="flex justify-between mx-5  items-center h-full">
                      <h5 className="font-semibold text-[18px] max-lg:text-sm">
                        {content}
                      </h5>
                      <span className="text-gray-400">&gt;</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" w-full  rounded-lg flex flex-col justify-between ">
            <div>
              <img
                src="/groupimage.png"
                alt="Conference"
                className="rounded-lg mb-8 w-full h-[211px]"
              />
              <div className={`text-base flex flex-col gap-2 font-normal mb-4  leading-7 max-lg:text-sm overflow-hidden ${expand?'':'max-sm:h-36 '} `}>
               <p className="font-semibold text-lg">1. Introduction</p> 
               <p>
               1.1 Purpose The purpose of this SRS is to
                provide a detailed description of the requirements for the
                AIDEOA website. It will outline the features, functionalities,
                and design specifications necessary to create a user-friendly,
                informative, and interactive platform for Mining Diploma and
                Degree holders. 
               </p>
               <p className=" ">
               1.2 Scope AIDEOA is a platform designed to bring
                together Mining Sirdar, Overman, Surveyor, Assistant Manager,
                and other professionals for optimistic decision-making, issue
                resolution...
               </p>
             
              </div>
            </div>
            <button
          
              onClick={()=>setExpand(!expand)}
              className="text-[#6E00FA] font-semibold text-start text-[18px] hover:underline max-lg:text-sm"
            >
              Continue Reading
            </button>
          </div>
        </div>
     
    </div>
  );
};

export default LatestUpdates;

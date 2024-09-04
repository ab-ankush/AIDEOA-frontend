import React from "react";
const notificationsArr = [
  "AIDEOA Hosts Successful Annual Conference",
  "AIDEOA Hosts Successful Annual Conference",
  "AIDEOA Hosts Successful Annual Conference",
  "AIDEOA Hosts Successful Annual Conference",
];
const LatestUpdates = () => {
  return (
    <div className="bg-[#070D18] text-white p-14 pt-24 min-h-screen max-sm:px-6 ">

        <div className="flex   justify-around items-center gap-5  max-md:flex-col max-md:items-start">
          <div className=" ">
            <h2 className="text-[35px] font-semibold mb-4">Latest updates</h2>
            <p className="text-[16px] font-normal mb-6 max-lg:text-sm ">
              Our recent news, updates, and highlights with links to full
              articles.
            </p>
            <div className="flex flex-col ">
              {notificationsArr.map((content, idx) => {
                return (
                  <div
                    key={idx}
                    className=" max-w-[551px] h-[102px] border-b-[0.5px] border-[#FFFFFF99] bg-gray-800  hover:bg-[#FFFFFF1A]"
                  >
                    <div className="flex justify-between mx-5  items-center h-full">
                      <h3 className="font-semibold text-[18px] max-lg:text-sm">
                        {content}
                      </h3>
                      <span className="text-gray-400">&gt;</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="  rounded-lg flex flex-col justify-between">
            <div>
              <img
                src="/groupimage.png"
                alt="Conference"
                className="rounded-lg mb-8 w-[555px] h-[211px]"
              />
              <p className="text-[16px] font-normal mb-4 max-w-[548px] leading-7 max-lg:text-sm">
                1. Introduction 1.1 Purpose The purpose of this SRS is to
                provide a detailed description of the requirements for the
                AIDEOA website. It will outline the features, functionalities,
                and design specifications necessary to create a user-friendly,
                informative, and interactive platform for Mining Diploma and
                Degree holders. 1.2 Scope AIDEOA is a platform designed to bring
                together Mining Sirdar, Overman, Surveyor, Assistant Manager,
                and other professionals for optimistic decision-making, issue
                resolution...
              </p>
            </div>
            <a
              href="#"
              className="text-[#6E00FA] font-semibold text-[18px] hover:underline max-lg:text-sm"
            >
              Continue Reading
            </a>
          </div>
        </div>
     
    </div>
  );
};

export default LatestUpdates;

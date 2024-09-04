import React from "react";
import Card from "./Card";
import Navbar from "../About_us/Navbar";
import Image from "./Image";
import Scroll from "./Scroll";
import Seclast from "../About_us/Seclast";
import Footer from "../About_us/Footer";
import TopImageCard from "../Cards/TopImageCard";
import EmailNotiCard from "../Cards/EmailNotiCard";
import BottomFooter from "../Cards/BottomFooter";

const EducationCell = () => {
  const data3=[
    ["Shri Sanjay Sahu", "Aideoa Ed. Cell"],
    ["Shri Nilkanth Akela", "Aideoa Ed. Cell"],
    ["Shri Sunil Kumar", "Aideoa Ed. Cell"],
    ["Shri S.R. Chourasia", "Aideoa Ed. Cell"],
    ["Shri Sanjay Sahu", "Aideoa Ed. Cell"],
    ["Shri Nilkanth Akela", "Aideoa Ed. Cell"],
    ["Shri Sunil Kumar", "Aideoa Ed. Cell"],
    ["Shri S.R. Chourasia", "Aideoa Ed. Cell"],
    ["Shri S.R. Chourasia", "Aideoa Ed. Cell"],
  ]
  const data1 = [
    ["Shri Sanjay Sahu", "Aideoa Ed. Cell"],
    ["Shri Nilkanth Akela", "Aideoa Ed. Cell"],
    ["Shri Sunil Kumar", "Aideoa Ed. Cell"],
    ["Shri S.R. Chourasia", "Aideoa Ed. Cell"],
  ];
  const data2 = [
    ["Shri Manish Kumar", "Aideoa Ed. Cell"],
    ["Vinay Nath Tiwary", "Aideoa IT Cell "],
    ["Adrash Kulshrestha", "Aideoa IT Cell "],
  ];
  
  return (
    <div className="pt-14">
     <TopImageCard title={"Education Cell"}/>
     <div className=" eduheading font-bold text-[25px] text-purple-500 text-center my-[20px]">
        Executive Members
      </div>
      
      <div className=" mx-auto w-[90%] flex flex-row flex-wrap justify-evenly items-center ">
        {data3.map((data, index) =>
          index >= 4 ? (
            <Card name={data} className={`  xl:col-start-2 xl:col-end-3`} />
          ) : (
            <Card name={data} />
          )
        )}
      </div>
      <div className=" eduheading font-bold text-[25px] text-purple-500 text-center my-[20px]">
        Education Cell Members
      </div>
      
      <div className=" mx-auto w-[90%] flex flex-row justify-evenly items-center ">
        {data1.map((data, index) =>
          index >= 4 ? (
            <Card name={data} className={`  xl:col-start-2 xl:col-end-3`} />
          ) : (
            <Card name={data} />
          )
        )}
      </div>
      <div className="border border-gray-100"></div>
      <div className=" secheading font-bold text-purple-500 text-[25px] text-center my-[20px]">
        IT Cell Members
      </div>
      <div className="flex justify-evenly items-center max-md:flex-col">
        {data2.map((data, index) =>
          index >= 4 ? (
            <Card name={data} className="" />
          ) : (
            <Card name={data} />
          )
        )}
      </div>
      <Scroll />
     <EmailNotiCard />
      <Footer />

    </div>
  );
};

export default EducationCell;

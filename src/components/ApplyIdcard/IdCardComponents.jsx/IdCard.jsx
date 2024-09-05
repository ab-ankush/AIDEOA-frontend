import { useState } from "react";

const IdCard = () => {
  const [show,setShow]=useState(true)
  return (
    <div className="flex flex-col  justify-around ">
      <div className="flex flex-col justify-center items-center ">
      {show ?  <div
          id="frontcover"
          onMouseEnter={()=>{setShow(false)}}
          className=" 
           z-[5] hover:z-[-1]  bg-purple-200 border  border-gray-500 rounded-[30px] overflow-hidden"
        >
          <div className="relative">
            <img src="/card/lower.svg" className="" alt="" />
            <div className="absolute flex top-[10px] ">
              <img
                src="/images/logo.png"
                className="h-[50px] w-[50px] mx-[5px]"
                alt=""
              />
              <p className=" text-white">
                All india diploma engineers & Officials Association (AIDEOA)
              </p>
            </div>
            <div className="h-[266px] w-[391px] ">
              <img
                src=""
                className=" relative  border-[2px] border-purple-400 h-[144px] w-[144px] top-[-125px] left-[125px] rounded-full bg-white"
                alt=""
              />
              <h1 className="my-10px relative text-[20px] top-[-100px] text-center">
                VICTOR ANIH
              </h1>
             
              <div className="my-[10px] w-[292px] h-[91px] mx-auto bg-white rounded-lg relative top-[-80px] flex justify-center items-center">
                <div className="flex flex-col text-[11px] justify-start items-start">
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1">AIDEOA ID : </h4>
                    <p>100</p>
                  </div>
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1">Contact : </h4>
                    <p>1201248510</p>
                  </div>
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1"> E-mail :</h4>
                    <p>demo@email.com</p>
                  </div>
                  <div className=" flex justify-start items-start">
                    <h4 className="font-bold mx-1">Address : </h4>
                    <p>eque porro quisquam est adipisci velit.</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-start items-start top-[-80px] left-[50px]">
                <img src="/images/send/sign.png" className=" bg-white w-[80px] h-[50px]" alt="" />
                <p>Signature</p>
              </div>
            </div>
            <div className="absolute text-white top-[515px] left-[40px]">
              <p className="text-[11px] ">Your address goes here (Sijua more, katrasgarh, Dhanbad, jharkhand, 828113)</p>
            </div>
            <img src="/card/upper.svg" className="" alt="" />
          </div>
        </div>:  <div
          id="backcover"
          onMouseLeave={()=>{setShow(true)}}
          className=" z-[4] top-[200px] right-0  rounded-lg bg-purple-200 border  border-gray-500 rounded-[30px] overflow-hidden"
        >
          <div className="relative">
            <img src="/card/lower.svg" className="w-[391px] h-[190px]" alt="" />
            <div className="absolute flex top-[10px] ">
              <img
                src="/images/logo.png"
                className="h-[50px] w-[50px] mx-[5px]"
                alt=""
              />
              <p className=" text-white">
                All india diploma engineers & Officials Association (AIDEOA)
              </p>
            </div>
            <div className=" relative top-[-40px] px-4 h-[266px] w-[391px]">
              <h1 className="text-purple-800 mx-4">Terms and Conditions</h1>
              <p className="mx-5 my-2 text-justify text-[12px]">
                Lorem ipsum dolor sit amet, consectetul adipicing elit, sad diam
                nonummy nibh eulsmod. Lorem ipsum dolor sit amet, consectetul
                adipicing elit, sad diam nonummy nibh eulsmod.
              </p>
              <p className="mx-5 my-2 text-justify text-[12px]">
                Lorem ipsum dolor sit amet, consectetul adipicing elit, sad diam
                nonummy nibh eulsmod. Lorem ipsum dolor sit amet, consectetul
                adipicing elit, sad diam nonummy nibh eulsmod.
              </p>
              <p className="mx-5 my-2 text-justify text-[12px]">
                Lorem ipsum dolor sit amet, consectetul adipicing elit, sad diam
                nonummy nibh eulsmod. Lorem ipsum dolor sit amet, consectetul
                adipicing elit, sad diam nonummy nibh eulsmod.
              </p>
              
              <div className="mx-5 flex items-center">
                <h1>Valid Upto :</h1>
                <p className=" bg-white rouded-full px-2 inline-flex">
                  31 March,2025
                </p>
              </div>
            </div>
            <div className="absolute text-white top-[515px] left-[40px]">
              <p>Your address goes here 125 Street, USA</p>
            </div>
            <img src="/card/upper.svg" className="w-[391px] h-[91px]" alt="" />
          </div>
        </div>}
      
      </div>
    </div>
  );
};

export default IdCard;

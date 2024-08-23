import React from "react";

import { FaRegEyeSlash ,FaUser} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const Singup = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className=" p-8 w-[50%] max-w-[353px] min-w-[300px]">
        <div className="flex justify-center  ">
          <img
            src={"/AIDEOA LOGO 1.jpg"}
            className="mix-blend-color-burn"
            alt="logo"
          />
        </div>
        <h2 className="font-poppins text-white text-[22px] font-semibold leading-[33px] text-center mb-3">
       
          All India Diploma Engineers And Officials Association
        </h2>
        <p className="text-center mb-3 text-white font-semibold ">Sign Up</p>
        <form>
          <div className="relative">
            <input
              className=" glass-effect  bg-white w-full mb-3 px-3 py-2 text-black rounded-3xl focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
            />
            <FaUser className="absolute top-3 text-gray-300 right-3" size={13}/>
          </div>
          <div className="relative">
            <input
              className=" glass-effect  bg-white w-full mb-3 px-3 py-2 text-black rounded-3xl focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
            />
            <MdAlternateEmail className="absolute top-3 text-gray-300 right-3" size={14}/>
          </div>
    <div className="relative">
    <input
            className="w-full glass-effect  px-3 mb-3 py-2 text-black rounded-3xl focus:outline-none"
            id="password"
            type="password"
            placeholder="Password"
          />
<FaRegEyeSlash className="absolute top-3 text-gray-300 right-3" size={15}/>
    </div>
    <div className="relative">
    <input
            className="w-full glass-effect  px-3 mb-3 py-2 text-black rounded-3xl focus:outline-none"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
          />
<FaRegEyeSlash className="absolute top-3 text-gray-300 right-3" size={15}/>
    </div>
          <div className="text-center">
            <a
              className="text-purple-400  hover:text-purple-600 text-sm font-semibold"
              href=""
            >
              Forgot password?
            </a>
          </div>
          <div className="mt-4">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white  py-2 px-4 rounded w-full"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center text-white">
            <span>
              Not have account yet?{" "}
              <a href="" className="text-purple-400 hover:text-purple-600 ">
                sign up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;

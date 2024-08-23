import React, { useState } from "react";

import {
  FaRegEyeSlash,
  FaUser,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const Singup = () => {
  const [pass, setPass] = useState(false);
  const [ConPass, setConPass] = useState(false);

  return (
    <>
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
                className=" glass-effect  bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
                id="username"
                type="text"
                placeholder="Username"
              />
              <FaUser
                className="absolute top-3 text-gray-300 right-3"
                size={13}
              />
            </div>
            <div className="relative">
              <input
                className=" glass-effect  bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
              />
              <MdAlternateEmail
                className="absolute top-3 text-gray-300 right-3"
                size={14}
              />
            </div>
            <div className="relative">
              <input
                className="w-full glass-effect  px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
                id="password"
                type={pass ? "text" : "password"}
                placeholder="Password"
              />
              <FaRegEyeSlash
                onClick={() => setPass(!pass)}
                className="absolute top-3 text-gray-300 right-3"
                size={15}
              />
            </div>
            <div className="relative">
              <input
                className="w-full glass-effect  px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
                id="confirm-password"
                type={ConPass ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <FaRegEyeSlash
                onClick={() => setConPass(!ConPass)}
                className="absolute top-3 text-gray-300 right-3"
                size={15}
              />
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
                className="bg-purple-500 hover:bg-purple-700 text-white  py-2 px-4 rounded-3xl w-full"
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
      <div className="flex justify-center mb-5">
        <div className="social-medias p-2">
          <a href="#">
            <FaInstagram className="text-gray-300" size={15} />
          </a>
        </div>
        <div className="social-medias  p-2">
          <a href="#">
            <FaDribbble className="text-gray-300" size={15} />
          </a>
        </div>
        <div className="social-medias p-2">
          <a href="#">
            <FaTwitter className="text-gray-300" size={15} />
          </a>
        </div>
        <div className="social-medias p-2">
          <a href="#">
            <FaYoutube className="text-gray-300" size={15} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Singup;

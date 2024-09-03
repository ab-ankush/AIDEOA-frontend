import React from "react";
import { CiUser } from "react-icons/ci";
import {
  FaDribbble,
  FaInstagram,
  FaRegEyeSlash,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen mainBackgroundImg flex justify-center items-center">
      <div className=" p-8 w-[50%] max-w-[353px] min-w-[300px]">
        <div className="flex justify-center  ">
        <img
              src={"/logoback.png"}
              className=" w-24 "
              alt="logo"
            />
        </div>
        <h2 className="font-poppins text-white text-[22px] font-semibold leading-[33px] text-center mb-3">
          {" "}
          All India Diploma Engineers And Officials Association
        </h2>
        <p className="text-center mb-3 text-white font-semibold ">Sign In</p>
        <form>
          <div className="relative">
            <input
              className=" glass-effect  bg-white w-full mb-3 px-3 py-2 text-black rounded-3xl focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
            />
            <FaUser
              className="absolute top-3 text-gray-300 right-3"
              size={13}
            />
          </div>
          <div className="relative">
            <input
              className="w-full glass-effect  px-3 mb-3 py-2 text-black rounded-3xl focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
            />
            <FaRegEyeSlash
              className="absolute top-3 text-gray-300 right-3"
              size={15}
            />
          </div>

          <div className="text-center">
            <a
              className="text-[#6E00FA] hover:text-purple-600 text-sm font-semibold"
              href=""
            >
              Forgot password?
            </a>
          </div>
          <div className="mt-4">
            <button
              className="bg-[#6E00FA] hover:bg-purple-700 text-white  py-2 px-4 rounded-full w-full "
              type="button"
            >
              Sign in
            </button>
          </div>
          <div className="mt-4 text-center text-white">
            <span>
              Not have account yet?{" "}
              <Link to={"/signup"} className="text-[#6E00FA] hover:text-purple-600 ">
                sign up
              </Link>
            </span>
          </div>
        </form>
        <div className="flex gap-4 absolute text-white bottom-3 left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <FaInstagram className="cursor-pointer" />
          <FaDribbble className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Login;

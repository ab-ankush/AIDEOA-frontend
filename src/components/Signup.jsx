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

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [pass, setPass] = useState(false);
  const [ConPass, setConPass] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (username.length < 3) {
      setError("Username is required and must be at least 3 characters");
      return;
    }

    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      setError("Email format error");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    alert("Submitted");
  };

  return (
    <>
      <div className="min-h-dvh mainBackgroundImg flex justify-center items-center">
        <div className="p-8 w-[50%] max-w-[353px] min-w-[300px]">
          <div className="flex justify-center">
            <img
              src={"/AIDEOA LOGO 1.jpg"}
              className="mix-blend-color-burn"
              alt="logo"
            />
          </div>
          <h2 className="font-poppins text-white text-[22px] font-semibold leading-[33px] text-center mb-3">
            All India Diploma Engineers And Officials Association
          </h2>
          <p className="text-center mb-3 text-white font-semibold">Sign Up</p>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="glass-effect bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <FaUser
                className="absolute top-3 text-gray-300 right-3"
                size={13}
              />
            </div>
            <div className="relative">
              <input
                className="glass-effect bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <MdAlternateEmail
                className="absolute top-3 text-gray-300 right-3"
                size={14}
              />
            </div>
            <div className="relative">
              <input
                className="w-full glass-effect px-3 mb-3 py-2 text-black rounded-3xl focus:outline-none"
                name="password"
                type={pass ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <FaRegEyeSlash
                onClick={() => setPass(!pass)}
                className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                size={15}
              />
            </div>
            <div className="relative">
              <input
                className="w-full glass-effect px-3 mb-3 py-2 text-black rounded-3xl focus:outline-none"
                name="confirmPassword"
                type={ConPass ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <FaRegEyeSlash
                onClick={() => setConPass(!ConPass)}
                className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                size={15}
              />
            </div>
            <span className="text-center text-sm text-red-500">{error}</span>
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
                className="bg-[#6E00FA] hover:bg-purple-700 text-white py-2 px-4 rounded-full w-full"
                type="submit"
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

          <div className="flex gap-4 absolute text-white bottom-3 left-[50%] -translate-x-[50%] -translate-y-[50%] ">
            <FaInstagram className="cursor-pointer" />
            <FaDribbble className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

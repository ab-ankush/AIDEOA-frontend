import React, { useState } from "react";

import { FaRegEyeSlash ,FaUser} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const Singup = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { username, email, password, confirmPassword } = formData;
    if (username.length<3) {setError("Username is Required and Username must be atleast 3") 
      return;}
if (!email.includes('@') || !email.includes('.')  ||email.length<5) {setError("Email format error")
  return
}
        if (password.length < 6) {setError('Password must be at least 6 characters')

          return
        };
    if (password !== confirmPassword) {setError('Passwords do not match')
return

    };
    alert("Submitted")
  };


  return (
    <>
      <div className="min-h-dvh  flex justify-center items-center">
        <div className=" p-8 w-[50%] max-w-[353px] min-w-[300px]">
          <div className="flex justify-center  ">
            <img
              src={"/AIDEOA LOGO 1.jpg"}
              className="mix-blend-color-burn"
              alt="logo"
            />
            <MdAlternateEmail className="absolute top-3 text-gray-300 right-3" size={14}/>
          </div>
    <div className="relative">
    <input
            className="w-full glass-effect  px-3 mb-3 py-2 text-black rounded-3xl focus:outline-none"
            name="password"
            type="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
<FaRegEyeSlash className="absolute top-3 text-gray-300 right-3" size={15}/>
    </div>
    <div className="relative">
    <input
            className="w-full glass-effect  px-3 mb-3 py-2 text-black rounded-3xl focus:outline-none"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
<FaRegEyeSlash className="absolute top-3 text-gray-300 right-3" size={15}/>
    </div>
    <span className="text-center text-sm text-red-500">  {error}</span>
          <div className="text-center">
            <a
              className="text-[#6E00FA]  hover:text-purple-600 text-sm font-semibold"
              href=""
            >
              Forgot password?
            </a>
          </div>
          <div className="mt-4">
            <button
              className="bg-[#6E00FA] rounded-3xl hover:bg-purple-700 text-white  py-2 px-4 rounded-full w-full"
              type="submit"
            >
              Sign Up
            </button>
        
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
                className="absolute top-3 text-gray-300 right-3 cursor-pointer"
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
                className="absolute top-3 text-gray-300 right-3 cursor-pointer"
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
            </span>
          </div>
        </form>
        <div className="flex gap-4 absolute  bottom-3 left-[50%]  -translate-x-[50%] -translate-y-[50%] cursor-pointer">
            <img src='/path.png' className="w-4"/>
            <img src='/webl.png' className="w-4"/>
            <img src='/tweet.png' className="w-4 rotate-[60deg] "/>
            <img src='/you.png' className="w-4 rotate-[90deg]"/>
        </div>
      </div>
    </div>
  );
};

export default Singup;

import { useEffect, useState } from "react";
import {
  FaRegEyeSlash,
  FaUser,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaRegEye,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import GoogleSignInButton from "./Cards/SignInwithGoogle";
import UserRoleSelect from "./Cards/UserRoleSelect";
import { SignUpFunc } from "../services/axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [seconds, setSeconds] = useState();
  const [error, setError] = useState("");
  const [pass, setPass] = useState(false);
  const [ConPass, setConPass] = useState(false);
  const [resend, setResend] = useState(false);
  const [userTypemodal, setUserTypeModal] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        setSeconds(null);
        setResend(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const handleOtp = async () => {
    setSeconds(30);
    setResend(true);
  };
  const handleSubmit = async (e) => {
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
    try{
      const data=await SignUpFunc(formData);
      console.log(data);
    }catch(error){
      console.log(`error in handlesubmit function ${error}`)
    }
   

    // alert("Submitted");
  };

  return (
    <>
      <div className="min-h-dvh mainBackgroundImg relative pt-14 flex justify-center items-center">
        <div className="p-8 w-[50%] max-w-[353px] min-w-[300px]">
          <div className="flex justify-center">
            <img src={"/logoback.png"} className=" w-24 " alt="logo" />
          </div>
          <h1 className="font-poppins text-white text-[22px] font-semibold leading-[33px] text-center mb-3">
            All India Diploma Engineers And Officials Association
          </h1>
          <p className="text-center mb-3 text-white font-semibold">Sign Up</p>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="glass-effect bg-white w-full mb-3 px-3 py-2 text-white rounded-3xl focus:outline-none"
                name="username"
                type="text"
                placeholder="Name"
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
                className="w-full glass-effect px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
                name="password"
                type={pass ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {pass ? (
                <FaRegEye
                  onClick={() => setPass(!pass)}
                  className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                  size={15}
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setPass(!pass)}
                  className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                  size={15}
                />
              )}
            </div>
            <div className="relative">
              <input
                className="w-full glass-effect px-3 mb-3 py-2 text-white rounded-3xl focus:outline-none"
                name="confirmPassword"
                type={ConPass ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {ConPass ? (
                <FaRegEye
                  onClick={() => setConPass(!ConPass)}
                  className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                  size={15}
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setConPass(!ConPass)}
                  className="absolute top-3 text-gray-300 right-3 cursor-pointer"
                  size={15}
                />
              )}
            </div>

            <div className="relative">
              <input
                className="glass-effect bg-white w-full mb-3 pl-[100px] py-2 text-white rounded-3xl focus:outline-none"
                name="otp"
                type="text"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
              />
              <button
                className="absolute bg-AIDEOTYPO cursor-pointer  text-sm w-24 py-2 text-white rounded-3xl text-gray-300 left-0"
                size={14}
                onClick={handleOtp}
                type="button"
                disabled={resend}
                style={resend ? { backgroundColor: "gray" } : {}}
              >
                {" "}
                {resend ? `Resend in ${seconds}` : "Send OTP"}
              </button>
            </div>
            <span className="text-center text-sm text-red-500">{error}</span>
{userTypemodal&& <div>
  {/* <UserRoleSelect /> */}
</div>}
            <div className="mt-4">
              <button
                className="bg-purplebtn hover:bg-purple-700 text-white py-2 px-4 rounded-full w-full"
                type="submit"
                onClick={() => {
                  setUserTypeModal(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <GoogleSignInButton />
          <div className="mt-4 text-center text-white pb-10">
            <span>
              Already have account{" "}
              <Link to="/login" className="underline hover:text-purple-600 ">
                sign in
              </Link>
            </span>
          </div>
        </div>
        <div className="flex gap-4 absolute text-white bottom-3 left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <FaInstagram className="cursor-pointer" />
          <FaDribbble className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Signup;

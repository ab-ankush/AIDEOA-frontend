import { SignUpFunc } from "../../services/axios";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const url = `http://localhost:4000/api/auth`;
const UserRoleSelect = ({ userTypemodal, setUserTypeModal, formData }) => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const [org, setOrg] = useState("");
  const [idNo, setIdNo] = useState();
  const [mobile, setMobile] = useState();
  const [resend, setResend] = useState(false);
  const [seconds, setSeconds] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userTypemodal) {
      const fullFormData = {
        ...formData,
        org,
        idNo,
        mobile,
        userType
      };
      try {
        const data = await SignUpFunc(fullFormData);
        console.log(data)
        data.data?.error && toast(data.data.error)
        if(data?.data?.message) 
          navigate("/login")
        
      } catch (error) {
        console.log(`error in handlesubmit function ${error}`);
      }
    } else {
      try {
        const res = await axios.post(
          `${url}/additional`,
          {
            userType: userType,
            org: org,
            idNo: idNo,
            mobile: mobile,
          },
          {
            withCredentials: true,
          }
        );
        if (res.statusText !== "OK") throw new Error("Some thing went wrong");
        navigate("/");
      } catch (error) {
        throw new Error(error);
      }
    }
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
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg   shadow-lg w-11/12 sm:w-2/3 xl:w-1/3">
        <h2 className="text-lg font-bold mb-4 text-AIDEOTYPO">
          Are you a Student or an Employee?
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="userType"
            >
              Select User Type:
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="p-3 border rounded-xl focus:outline-none w-full "
            >
              <option value="none" className="">
                Select
              </option>
              <option value="student" className="">
                Student
              </option>
              <option value="employee" className="">
                Employee
              </option>
            </select>
          </div>
          {userType && (
            <div className="mb-4">
              <label className="block mb-2">
                {userType === "employee" ? "Company Name" : "University Name"}
              </label>
              <input
                type="text"
                placeholder={
                  userType === "employee"
                    ? "Enter your company"
                    : "Enter University name"
                }
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
              />
            </div>
          )}
          {userType && (
            <div className="mb-4">
              <label className="block mb-2">
                {userType === "employee" ? "Employee Id" : "Student Id"}
              </label>
              <input
                type="text"
                placeholder={
                  userType === "employee"
                    ? "Enter employee Id"
                    : "Enter Student Id"
                }
                value={idNo}
                onChange={(e) => setIdNo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2">Mobile No</label>
            <div className="relative">
              <input
                type="text"
                placeholder={"Enter phone number"}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none "
              />
              <button
                className="absolute bg-AIDEOTYPO cursor-pointer h-full rounded-xl text-sm w-24 py-2 text-white  text-gray-300 right-0 hover:opacity-75 duration-500"
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
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purplebtn  duration-500 text-white w-24 py-2 font-semibold rounded-xl hover:opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRoleSelect;

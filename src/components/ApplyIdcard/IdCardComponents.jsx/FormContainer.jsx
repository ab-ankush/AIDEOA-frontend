import { useState } from "react";
import IDform from "./IDform";
import IdCard from "./IdCard";
import EmployeeForm from "./EmployeeForm";
import IdCardPurple from "./IdCardPurple";
import EmployeeIdCard from "./EmployeeIdCard";
// import DownloadIdButton from "../../Landingpage/components/DownloadIdButton"
// import { Link } from 'react-router-dom'
const FormContainer = () => {
  const [formType, SetFormType] = useState(true);
  const [submit, setsubmit] = useState(false)
  return (
    <div>
      {
        submit ? (<div className="my-20 relative mx-32 flex flex-col gap-6 max-xl:mx-8 max-lg:mx-8 max-md:mx-4 max-sm:mx-2">
          <div className="">
            {
              formType ? <IdCardPurple /> : <EmployeeIdCard />
            }
          </div>

          <div className=" flex ">
            <button className="w-52 max-sm:w-full h-12 membershipBtn rounded-2xl text-white font-medium text-lg">
              Download Id Card
            </button>
          </div>

        </div>) : (<div className="my-20 relative mx-32 flex flex-col gap-6 max-xl:mx-8 max-lg:mx-8 max-md:mx-4 max-sm:mx-2 ">
          <p className="text-xl font-medium">ID Card form</p>
          <div className="flex justify-center w-full  ">
            <div className="p-1 border-2 flex border-gray-200 max-w-full  rounded-full">
              <button
                className={`w-72 h-10 rounded-full  text-sm text-black  font-medium ${formType && "membershipBtn text-white"
                  }`}
                onClick={() => SetFormType(true)}
              >
                Student ID
              </button>
              <button
                className={`w-72 h-10 rounded-full  text-sm text-black font-medium ${!formType && "membershipBtn text-white"
                  }`}
                onClick={() => SetFormType(false)}
              >
                Employee ID
              </button>
            </div>
          </div>
          <div className="flex  w-full justify-between gap-16 max-md:flex-col max-md:flex-col-reverse max-lg:gap-10 max-lg:">
            {
              formType ? <IDform /> : <EmployeeForm />
            }
            {
              formType ? <IdCardPurple /> : <EmployeeIdCard />
            }
          </div>
          <div className=" flex ">
            <button className="w-52 max-sm:w-full h-12 membershipBtn rounded-2xl text-white font-medium text-lg">
              Submit
            </button>
          </div>

        </div>)
      }
    </div>
  );
};

export default FormContainer;

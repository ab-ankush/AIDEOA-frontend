import { useState } from "react";
import IDform from "./IDform";
import IdCard from "./IdCard";

const FormContainer = () => {
  const [formType, SetFormType] = useState(true);
  return (
    <div className="my-20 relative mx-32 flex flex-col gap-6 max-lg:mx-16 max-md:mx-8 max-sm:mx-4 ">
      <p className="text-xl font-medium">ID Card form</p>
      <div className="flex justify-center w-full  ">
        <div className="p-1 border-2 flex border-gray-200 max-w-full  rounded-full">
          <button
            className={`w-72 h-10 rounded-full  text-sm text-black  font-medium ${
              formType && "membershipBtn text-white"
            }`}
            onClick={() => SetFormType(true)}
          >
            Student ID
          </button>
          <button
            className={`w-72 h-10 rounded-full  text-sm text-black font-medium ${
              !formType && "membershipBtn text-white"
            }`}
            onClick={() => SetFormType(false)}
          >
            Employee ID
          </button>
        </div>
      </div>
      <div className="flex  justify-between gap-16 max-md:flex-col max-md:flex-col-reverse">
        <IDform />
        <IdCard />
      </div>
      <div className=" flex justify-end  -mt-4">
        <button className="w-52 h-12 membershipBtn rounded-2xl text-white font-medium text-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormContainer;

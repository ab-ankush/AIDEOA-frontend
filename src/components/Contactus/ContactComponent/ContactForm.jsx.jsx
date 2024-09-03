import React from "react";
import { BsChatSquareText } from "react-icons/bs";
import Map from "./Map";
import Form from "./Form";
const ContactForm = () => {
  return (
    <div className="px-20 max-md:px-10 max-sm:px-5">
      <div className="container mx-auto my-12 ">
        <h2 className="text-3xl font-medium leading-10">
          Get in touch with us
        </h2>
        <div className="flex mt-6  h-full overflow-hidden  max-lg:flex-col max-lg:max-h-full">
          <div className="flex flex-col w-1/2  p-7 pb-16  bg-gray-100 lg:rounded-l-2xl max-lg:rounded-t-2xl max-lg:w-full">
            <div className="bg-purple-100 border border-purple-200 flex gap-5  items-center mb-7 p-3 justify-center  rounded-2xl ">
              <BsChatSquareText className="min-w-5 text-purple-500" />
              <p className="text-gray-500 text-lg font-normal max-lg:text-base max-md:text-sm ">
                Hi, wanna talk? Use the below form or email us -
                support@aideoa.com
              </p>
            </div>
            <Form />
          </div>
          <div className=" w-1/2 lg:rounded-r-2xl max-h-full max-lg:h-64 max-lg:rounded-b-2xl overflow-hidden max-lg:w-full">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React from "react";
import { FaSearch } from "react-icons/fa";
const Footer = () => {
  return (
    // <footer className="container flex sm:flex-col lg:flex-row ">
    <footer className="container-fluid flex flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
      {/* <div className="border px-auto bg-black border-r-white flex sm:flex-col justify-center text-white items-center"> */}
      <div className="border px-auto bg-black border-r-white flex sm:flex-col justify-center text-white items-center sm:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
        <div className="mx-auto">
          <h2 className="text-center text-[24px]">Keywords</h2>
        </div>
        <div className=" bg-black  flex flex-row lg:flex-col xl:flex-row justify-around items-center my-auto ">
          <div className="sm:mx-[10px]">
            <div className="grid grid-cols-2 text-[20px] lg:text-[18px] gap-x-[15px]">
              <button className="btn 2xl:p-[10px] rounded bg-gray-500">
                lorem
              </button>
              <button className="btn 2xl:p-[10px] rounded px-[10px] lg:px-0 py-[8px] bg-gray-500">
                lorem
              </button>
            </div>
            <div className="">
              <button className="btn w-[70%] py-2 sm:px-[10px] my-[10px] rounded bg-gray-500  px-[24px]">
                lorem
              </button>
            </div>
          </div>
          <div className="sm:mx-[10px]">
            <div className="grid grid-cols-2 text-[20px] lg:text-[18px] gap-x-[15px]">
              <button className="btn 2xl:p-[10px] rounded bg-gray-500">
                lorem
              </button>
              <button className="btn 2xl:p-[10px] rounded px-[10px] py-[8px] lg:px-0 bg-gray-500">
                lorem
              </button>
            </div>
            <div className="">
              <button className="btn w-[70%] py-2 sm:px-[10px] my-[10px] rounded bg-gray-500  px-[24px]">
                lorem
              </button>
            </div>
          </div>
          <div className="sm:mx-[10px]">
            <div className="grid grid-cols-2 text-[20px] lg:text-[18px] gap-x-[15px]">
              <button className="btn 2xl:p-[10px] rounded bg-gray-500">
                lorem
              </button>
              <button className="btn 2xl:p-[10px] rounded px-[10px] py-[8px] lg:px-0 bg-gray-500">
                lorem
              </button>
            </div>
            <div className="">
              <button className="btn w-[70%] py-2 sm:px-[10px] my-[10px] rounded bg-gray-500  px-[24px]">
                lorem
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border px-auto bg-black flex flex-col justify-center items-center"> */}
      <div className="border px-auto bg-black flex flex-col justify-center items-center sm:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
        <div className=" bg-black h-44 w-80 my-auto text-white mx-auto flex flex-col justify-center items-center">
          <h1 className="my-2">Subscribe Now</h1>
          <form
            action=""
            className="w-full my-3 flex justify-center items-center"
            method="post"
          >
            <input
              type="search"
              className="input h-[48px] rounded-s mr-0"
              name=""
              id=""
            />
            <button className="btn h-[48px]  p-[15px] ml-0 rounded-e bg-purple-600">
              <FaSearch className="" />
            </button>
          </form>
          <div className="flex flex-col pt-2 justify-center items-center">
            <h1>lorem ipsum is simple</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      {/* <div className="border px-auto bg-black border-l-white  flex justify-center items-center"> */}
      <div className="border px-auto bg-black border-l-white flex justify-center items-center sm:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
        <div className=" bg-black h-44 w-80 my-auto text-white flex flex-col justify-center items-center mx-auto">
          <div className="flex flex-col pt-2 justify-center items-center">
            <h1>lorem ipsum is simple</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex flex-col pt-2 justify-center items-center">
            <h1>lorem ipsum is simple</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

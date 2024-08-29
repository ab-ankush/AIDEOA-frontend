import React from "react";

const Footer = () => {
  return (
    <footer className="h-52 overflow-x-hidden w-screen grid grid-cols-3">
      <div className="border bg-black border-r-white flex justify-center text-white  items-center">
        <div className=" bg-black h-44 w-48 my-auto mx-auto">
          <h2 className="text-center">Keywords</h2>
          <div className="grid grid-cols-2">
            <button className="btn rounded bg-gray-500">lorem</button>
            <button className="btn rounded bg-gray-500">lorem</button>
          </div>
          <div className="">
            <button className="btn rounded bg-gray-500  px-[24px]">
              lorem
            </button>
          </div>
          <div className="grid grid-cols-2">
            <button className="btn rounded bg-gray-500">lorem</button>
            <button className="btn rounded bg-gray-500">lorem</button>
          </div>
          <div className="">
            <button className="btn rounded bg-gray-500   px-[24px]">
              lorem
            </button>
          </div>
          <div className="grid grid-cols-2">
            <button className="btn rounded bg-gray-500">lorem</button>
            <button className="btn rounded bg-gray-500">lorem</button>
          </div>
          <div className="grid grid-cols-2 ">
            <button className="btn rounded bg-gray-500">lorem</button>
            <button className="btn rounded bg-gray-500">lorem</button>
          </div>
        </div>
      </div>
      <div className="border bg-black flex flex-col justify-center items-center">
        <div className=" bg-black h-44 w-80 my-auto text-white mx-auto flex flex-col justify-center items-center">
          <h1 className="my-2">Subscribe Now</h1>
          <form
            action=""
            className="w-full my-3 flex justify-center items-center"
            method="post"
          >
            <input
              type="search"
              className="input h-8 rounded-s mr-0"
              name=""
              id=""
            />
            <button className="btn p-1 ml-0 rounded-e bg-purple-600">Q</button>
          </form>
          <div className="flex flex-col pt-2 justify-center items-center">
            <h1>lorem ipsum is simple</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="border bg-black border-l-white  flex justify-center   items-center">
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

import React from "react";
import "./.css";
const Image = () => {
  return (
    <div
      id="image"
      style={{
        width: "100vw",
      }}
      className="h-[400px] mt-[60px] flex justify-center items-center text-white text-[50px]"
    >
      {" "}
      <p className="px-4 py-2 rounded-[20px] backdrop-blur-[10px]">About us</p>
    </div>
  );
};

export default Image;

import React from "react";

const Featured = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container  mx-auto h-screen">
        <div className="flex flex-col  pt-28 items-center gap-10 h-screen">
          <h1 className="font-semibold text-[35px] leading-15">Featured Resources</h1>
          <p className="font-normal text-[15px] mb-10 text-[#797979]">
            Explore Our variety of Resources
          </p>
          <div className="flex gap-10 text-center">
            <div className="w-[304px] h-[263px] rounded-3xl flex justify-center items-center flex-col gap-6">
              <div className="bg-[#6E00FA0D] w-[91px] h-[90px] rounded-2xl flex items-center justify-center">
                <img
                  src="/group.png"
                  alt=""
                  className="w-[47px] h-[41px] "
                />
              </div>

              <div className="w-[332px] h-[129px] flex mt-2 flex-col gap-7">
                <h3 className="font-semibold text-[19px]">Education Cell</h3>

                <p className="font-normal px-2 text-[#797979] text-[16px] leading-7 tracking-wider">
                  Access a wide range of free study materials and resources to
                  enhance your knowledge.
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[263px] rounded-3xl flex justify-center items-center flex-col gap-6">
              <div className="bg-[#6E00FA0D] w-[91px] h-[90px] rounded-2xl flex items-center justify-center">
                <img
                  src="/laptop.png"
                  alt=""
                  className="w-[27px] h-[21.4px] "
                />
              </div>

              <div className="w-[332px] h-[129px] flex mt-2 flex-col gap-7">
                <h3 className="font-semibold text-[19px]">Join Membership</h3>

                <p className="font-normal px-2 text-[#797979] text-[16px] leading-7 tracking-wider">
                Join our interactive online classes & get more exposure to real-world problem & solve it.
                </p>
              </div>
            </div>
            <div className="w-[304px] h-[263px] rounded-3xl flex justify-center items-center flex-col gap-6">
              <div className="bg-[#6E00FA0D] w-[91px] h-[90px] rounded-2xl flex items-center justify-center">
                <img
                  src="/startup 1.png"
                  alt=""
                  className="w-[47px] h-[41px] "
                />
              </div>

              <div className="w-[332px] h-[129px] flex mt-2 flex-col gap-7">
                <h3 className="font-semibold text-[19px]">Mutual Transfer Portal</h3>

                <p className="font-normal px-2 text-[#797979] text-[16px] leading-7 tracking-wider">
                The Mutual Transfer Portal helps mining professionals find and manage transfer opportunities efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

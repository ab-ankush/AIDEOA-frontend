import { useState } from "react";

const Form = () => {
  const [form,setForm]=useState(false);
  return (
    <div id="form-section" className=" text-center m-auto w-[95%] lg:w-2/3">
      <div className="flex   border w-[95%] lg:w-[50%] justify-evenly m-auto mb-10 rounded-full border-gray-500">
        <div className=" w-full ">
          <button className={`lg:text-xl w-full  p-2 lg:p-3  text-center font-medium    ${form ? "":"bg-gradient-to-r from-purple-950 via-purple-400 to-purple-200 rounded-full text-white" }`} onClick={()=>setForm(false)}>Non-Executive</button>
        </div>
        <div className="w-full  ">
          <button className={`lg:text-xl w-full  p-2 lg:p-3  text-center font-medium ${form?" bg-gradient-to-r from-purple-950 via-purple-400 to-purple-200 rounded-full text-white":""} `} onClick={()=>setForm(true)}>Executive</button>
        </div>
      </div>

      <form>
        <div className="flex flex-col text-left mb-5 gap-y-5">
          <label
            className="font-poppins font-medium text-xl"
            htmlFor="your-name"
          >
            Your Name
          </label>
          <input
            id="your-name"
            name="name"
            type="text"
            placeholder="Write your name"
            className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
          />
        </div>
        <div className="flex  flex-col  xl:flex-row justify-between  w-full gap-x-20 m-auto ">
          <div className="w-full ">
            <div className="flex flex-col mb-5 gap-y-5 text-left  ">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="aideoa-id"
              >
                AIDEOA ID No.*
              </label>
              <input
                id="aideoa-id"
                name="aideoa-id-no"
                className="rounded-3xl bg-gray-100 border  border-gray-300 p-4 w-full"
                placeholder="Sample@gmail.com"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-5 text-left gap-y-5">
              <label className="font-poppins font-medium text-xl" htmlFor="cil">
                Current posted Subsidiary in C.I.L
              </label>
              <input
                id="cil"
                name="current-cil"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
                placeholder="Write here........"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-6 text-left mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="aideoa-id"
              >
                Current Mines Name
              </label>
              <input
                id="aideoa-id"
                name="aideoa-id-no"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
                placeholder="Write here........"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-6 text-left mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="aideoa-id"
              >
                GRADE
              </label>
              <input
                id="aideoa-id"
                name="aideoa-id-no"
                placeholder="Write here........"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
                type="text"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="mobile-number"
              >
                Mobile Number
              </label>
              <input
                id="mobile-number"
                name="mobile-number"
                placeholder="91xxxxxxxx"
                className="rounded-3xl bg-gray-100 border  border-gray-300 p-4 w-full"
                type="number"
              />
            </div>
            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="curr-posted-area"
              >
                Current posted AREA
              </label>
              <input
                id="curr-posted-area"
                name="current-posted-area"
                placeholder="Write here........"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
                type="text"
              />
            </div>
            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="designation"
              >
                Designation
              </label>
              <input
                id="designation"
                name="designation"
                placeholder="Write here........"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
                type="text"
              />
            </div>
            <div className="flex flex-col text-left gap-y-5 mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="preferred-transfer-area"
              >
                Preferred  Transfer Area
              </label>
              <input
                id="preferred-transfer-area"
                name="preferred-transfer-area"
                className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
                placeholder="Write here........"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left gap-y-5 mb-16">
          <label
            className="font-poppins font-medium text-xl"
            htmlFor="tsf-subsidiary"
          >
            Preferred Transfer Subsidiary
          </label>
          <input
            placeholder="Write here......"
            className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
            type="text"
            name="transfer-subsidiary"
            id="tsf-subsidiary"
          />
        </div>
        <div className="flex flex-col text-left gap-y-5 mb-16">
          <label
            className="font-poppins font-medium text-xl"
            htmlFor="tsf-subsidiary"
          >
            Preferred Transfer Mine
          </label>
          <input
            placeholder="Enter mine name"
            className="rounded-3xl bg-gray-100 border border-gray-300 p-4 "
            type="text"
            name="transfer-subsidiary"
            id="tsf-subsidiary"
          />
        </div>
        <div>
          <button
            className="bg-gradient-to-r text-xl font-normal from-purple-800 via-purple-500 to-purple-400 p-2 rounded-full w-60 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
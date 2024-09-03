const Form = () => {
  return (
    <div className="text-center mb-60 m-auto w-[1216px]">
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
            className="rounded-full bg-gray-100 border border-gray-300 p-4 "
          />
        </div>
        <div className="flex justify-between  w-[1216px] gap-x-20 m-auto ">
          <div className="w-1/2 ">
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
                className="rounded-full bg-gray-100 border  border-gray-300 p-4 w-full"
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
                className="rounded-full bg-gray-100 border border-gray-300 p-4 "
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
                className="rounded-full bg-gray-100 border border-gray-300 p-4 "
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
                className="rounded-full bg-gray-100 border border-gray-300 p-4 "
                type="text"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col text-left gap-y-6 mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="mobile-number"
              >
                Mobile Number
              </label>
              <input
                id="mobile-number"
                name="mobile-number"
                placeholder="Sample@gmail.com"
                className="rounded-full bg-gray-100 border border-gray-300 p-4 "
                type="text"
              />
            </div>
            <div className="flex flex-col text-left gap-y-6 mb-5">
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
                className="rounded-full bg-gray-100 border border-gray-300 p-4 "
                type="text"
              />
            </div>
            <div className="flex flex-col text-left gap-y-6 mb-5">
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
                className="rounded-full bg-gray-100 border border-gray-300 p-4 "
                type="text"
              />
            </div>
            <div className="flex flex-col text-left gap-y-6 mb-5">
              <label
                className="font-poppins font-medium text-xl"
                htmlFor="preferred-transfer-area"
              >
                Preferred  Transfer Area
              </label>
              <input
                id="preferred-transfer-area"
                name="preferred-transfer-area"
                className="rounded-full bg-gray-100 border border-gray-300 p-4 "
                placeholder="Write here........"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left gap-y-6 mb-5">
          <label
            className="font-poppins font-medium text-xl"
            htmlFor="tsf-subsidiary"
          >
            Preferred Transfer Subsidiary
          </label>
          <input
            placeholder="Write here......"
            className="rounded-full bg-gray-100 border border-gray-300 p-4 "
            type="text"
            name="transfer-subsidiary"
            id="tsf-subsidiary"
          />
        </div>
        <div>
          <button className="bg-gradient-to-r text-xl font-normal from-purple-800 via-purple-500 to-purple-400 p-2 rounded-full w-60 text-white" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
const SelectSwitch = () => {
  return (
    <div className="flex   border w-[50%] justify-evenly m-auto mb-10 rounded-full border-gray-500">
      <div className=" text-xl w-full p-4 hover:bg-purple-600 hover:rounded-full hover:text-white text-center font-medium ">
        <button className="">Non-Executive</button>
      </div>
      <div className="w-full text-xl p-4 hover:bg-purple-600 hover:rounded-full hover:text-white text-center font-medium items-center">
        <button>Executive</button>
      </div>
    </div>
  );
};
export default SelectSwitch;

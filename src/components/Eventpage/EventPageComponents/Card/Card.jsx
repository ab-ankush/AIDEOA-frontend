import { IoLocationOutline } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

const Card = () => {
  return (
    <div className=" flex flex-col m-auto w-[100%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] mb-24  shadow-md items-center justify-center shadow-gray-600 rounded-2xl">
    {/* <div className="  m-auto max-w-lg mb-24 shadow-md  shadow-gray-600 rounded-2xl"> */}
      <div className="flex justify-between  px-4 lg:px-8 w-full  pt-5 pb-5 bg-customgradient-background rounded-t-2xl">
        
          <p className="font-semibold w-[60%] text-white  text-3xl ">
            DAY 2
          </p>
      
        <div className="size-3 w-[34%]">
          <p className="text-xs text-center text-white">
            March 18th, 2025 <br />
            <span>10:00AM - 5:00 PM</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col m-auto justify-between gap-6 p-4 lg:p-8">
        <div className="text-xl font-semibold">
          <p>AIDEOA Hosts Successful Annual Conference</p>
        </div>
        <div className="flex flex-col justify-between h-10">
          <div className="flex text-sm">
            <IoLocationOutline size={15} />
            <p className="ml-1 font-light">Grand Ballon Hotel</p>
          </div>
          <div className="flex text-sm">
            <MdCalendarMonth size={15} />
            <p className="ml-1 font-light">2:00 PM - 1:00 PM</p>
          </div>
        </div>
        <div className="text-sm font-light pb-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survive. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of ..
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;

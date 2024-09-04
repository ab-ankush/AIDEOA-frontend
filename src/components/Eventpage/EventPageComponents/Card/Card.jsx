import { IoLocationOutline } from "react-icons/io5";
import { MdCalendarMonth  } from "react-icons/md";


const Card = () => {
  return (
    <div className="w-[70%] m-auto mb-24 shadow-lg  shadow-gray-600 rounded-2xl">
      <div className="flex justify-around pt-5 pb-5 bg-customgradient-background rounded-t-2xl">
        <div className=" " >
          <p className="font-semibold  text-white w-14 text-xl" >DAY 2</p>
        </div>
        <div className="size-3 w-36">
          <p className="text-xs text-white">
            March 18th, 2025 <br />
            <span>10:00AM - 5:00 PM</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col m-auto justify-between gap-6 p-8" >
        <div className="text-xl font-semibold">
          <p>AIDEOA Hosts Successful Annual Conference</p>
        </div>
        <div className="flex flex-col justify-between h-10">
          <div className="flex text-sm">
            <IoLocationOutline size={15}/>
            <p className="ml-1 font-light">Grand Ballon Hotel</p>
          </div>
          <div className="flex text-sm">
          <MdCalendarMonth   size={15}/>
            <p className="ml-1 font-light">2:00 PM - 1:00 PM</p>
          </div>
        </div>
        <div className="text-sm font-normal pb-5">
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

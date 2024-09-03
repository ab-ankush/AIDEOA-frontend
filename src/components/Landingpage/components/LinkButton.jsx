import { VscAccount } from "react-icons/vsc";
import { FaArrowCircleUp } from "react-icons/fa";

const LinkButton = () => {
  return (
    <div className="flex bg-purple-600 rounded-full w-80 pl-4 pr-4 p-2 items-center justify-between">
        <div className=" flex gap-3 items-center">
        <div>
        <VscAccount className="text-white" size={25}/>
        </div>
        <div className="flex flex-col gap-y-1">
            <div className="text-white font-normal text-xl">
                <p>Join Membership</p>
            </div>
            <div className="text-gray-300 text-xs">
                <p>
                Join our Aideoa fam!
                </p>
            </div>
        </div>
        </div>
        <div>
        <FaArrowCircleUp size={25} className="rotate-45 rounded-full  bg-white  p-0"/>
        </div>
    </div>
  )
}
export default LinkButton
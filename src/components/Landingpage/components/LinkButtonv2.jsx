
import { FaArrowCircleUp } from "react-icons/fa";
import { PiCreditCardLight } from "react-icons/pi";

const LinkButtonv2 = () => {
  return (
    <div>
        <div className="flex bg-white rounded-full w-80 pl-4 pr-4  p-4 items-center justify-between">
        <div className=" flex gap-3 items-center">
        <div>
        <PiCreditCardLight  className="text-blacl" size={25}/>
        </div>
        <div className="flex flex-col gap-y-1">
            <div className="text-black font-normal text-xl">
                <p>Apply ID Card</p>
            </div>
            
        </div>
        </div>
        <div>
        <FaArrowCircleUp size={25} className="rotate-45 rounded-full    p-0"/>
        </div>
    </div>
    </div>
  )
}
export default LinkButtonv2
import { RiFolderDownloadLine } from "react-icons/ri";
import { FaArrowCircleUp } from "react-icons/fa";

const DownloadIdButton = () => {
  return (
    <div className="flex bg-purple-600 rounded-full w-80 pl-4 pr-4 p-2 items-center justify-between">
        <div className=" flex gap-3 items-center">
        <div>
        <RiFolderDownloadLine  className="text-white" size={25}/>
        </div>
        <div className="flex flex-col gap-y-1">
            <div className="text-white font-normal text-xl">
                <p>Download ID Card</p>
            </div>
           
        </div>
        </div>
        <div>
        <FaArrowCircleUp size={25} className="rotate-45 rounded-full  bg-white  p-0"/>
        </div>
    </div>
  )
}
export default DownloadIdButton
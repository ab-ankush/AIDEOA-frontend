import { useEffect, useRef, useTransition } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const Card = ({ item, idx }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isPending, startTransition] = useTransition();
const targetDivRef=useRef([])
  const whatsappShareData = (item) => {
    const { title, location, date, time, head } = item;
    const currentUrl = window.location.href;

    const message = ` ${title} \n${location}\n${date}-${time} \n ${
      currentUrl + `?id=${head}`
    }`;

    const encodedText = encodeURIComponent(message);

    const shareUrl = `https://api.whatsapp.com/send?text=${encodedText}`;

    window.open(shareUrl, "_blank");
  };
  const query = searchParams.get('id'); 
  const scrollToDiv = () => {
    if (targetDivRef.current[+query]) {
    
        targetDivRef.current[+query].scrollIntoView({ behavior: 'smooth' });
     
     
    }
  };
  useEffect(() => {
   
    const onPageLoad = () => {
      scrollToDiv();
    };

   
    window.addEventListener('load', onPageLoad);

   
    return () => window.removeEventListener('load', onPageLoad);
  }, [query]); 


  return (
    <div
    ref={(el)=>(targetDivRef.current[idx]=el)}

      className="  m-auto max-w-lg mb-24 shadow-md  shadow-gray-600 rounded-2xl"
    >
      <div className="flex justify-between  px-4 lg:px-8 w-full  pt-5 pb-5 bg-customgradient-background rounded-t-2xl">
        <p className="font-semibold w-full text-white w-14 text-3xl ">
          {item?.head}
        </p>

        <div className="size-3 w-36">
          <p className="text-xs text-white">
            {item.date} <br />
            <span>{item.time}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col m-auto justify-between gap-6 p-4 lg:p-8">
        <div className="text-xl font-semibold">
          <p>{item.title}</p>
        </div>
        <div className="flex flex-col justify-between h-10">
          <div className="flex text-sm">
            <IoLocationOutline size={15} />
            <p className="ml-1 font-light">{item.location}</p>
          </div>
          <div className="flex text-sm">
            <MdCalendarMonth size={15} />
            <p className="ml-1 font-light">{item.time}</p>
          </div>
        </div>
        <div className="text-sm font-light pb-5">
          <p>{item.description}</p>
        </div>
        <div>
          <button
            onClick={() => whatsappShareData(item)}
            className="bg-purple-600 text-white px-4 py-3 rounded-xl "
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;

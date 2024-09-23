import Card from "./EventPageComponents/Card/Card";
import ImageHeader from "./EventPageComponents/ImageHeader/ImageHeader";
import InfoHeader from "./EventPageComponents/InfoHeader/InfoHeader";
import NewsCard from "./EventPageComponents/NewsCard/NewsCard";
import CompanyCardCrousel from "./EventPageComponents/CompanyCardCrousel/CompanyCardCrousel";
import Logo from "./EventPageComponents/Logo/Logo";
import CompanyHeader from "./EventPageComponents/CompanyCardCrousel/CompanyHeader/CompanyHeader";
import EmailNotiCard from "../Cards/EmailNotiCard";
import Footer from "../Cards/Footer";
import TopImageCard from "../Cards/TopImageCard";
import Slider from "../Cards/Slider/Slider";
import { data } from "../../data/data";
import { useEffect, useState } from "react";


const arr=[{head:"Day 2",title:"AIDEOA Hosts Successful Annual Conference",date:"March 18th, 2025",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of .."},
  {head:"Day 3",title:"AIDEOA Hosts Successful Annual Conference",date:"March 18th, 2025",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of .."},
  {head:"Day 4",title:"AIDEOA Hosts Successful Annual Conference",date:"March 18th, 2025",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of .."},
  {head:"Day 5",title:"AIDEOA Hosts Successful Annual Conference",date:"March 18th, 2025",time:"10:00AM - 5:00PM",location:"Grand Ballon Hotel",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of .."}
]
const EventPage = () => {
  const [limit,setLimit]=useState(3)

  return (
    <div className="pt-14" >
      <TopImageCard
        image={"/enhanceimage/Events.png"}
        title={"AIDEOA  Events"}
      />
      <div className=" flex px-5 flex-wrap gap-2 mt-12  content-center max-w-7xl  m-auto">
        {arr
          .map((item, idx) => {
            return <Card key={idx} idx={idx} item={item}/>;
          })}
      </div>
      <div className=" bg-blue-950 ">
        <Slider textColor={"white"} shadowColor={"blue-900"} />
      </div>
      <InfoHeader />

      <div className="flex gap-10 flex-col">
        {data.slice(0,limit).map((newsItem, index) => (
          <NewsCard
            key={index}
            imageSrc={newsItem.images}
            headline={newsItem.text}
           
          />
        ))}
        <button
          className="text-center font-semibold duration-300  text-lg text-gray-100 mx-auto bg-[#9333EA] hover:bg-midpurple p-4 rounded-full"
          href="#"
          onClick={()=>setLimit(limit+3)}
        >
          Read More...
        </button>
      </div>
      <EmailNotiCard />
      <Footer />
    </div>
  );
};
export default EventPage;

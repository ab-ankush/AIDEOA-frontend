import Card from "./EventPageComponents/Card/Card"
import ImageHeader from "./EventPageComponents/ImageHeader/ImageHeader"
import InfoHeader from "./EventPageComponents/InfoHeader/InfoHeader"
import NewsCard from "./EventPageComponents/NewsCard/NewsCard"
import CompanyCardCrousel from "./EventPageComponents/CompanyCardCrousel/CompanyCardCrousel"
import Logo from "./EventPageComponents/Logo/Logo"
import CompanyHeader from "./EventPageComponents/CompanyCardCrousel/CompanyHeader/CompanyHeader"
import EmailNotiCard from "../Cards/EmailNotiCard"
import Footer from "../Cards/Footer"
import TopImageCard from "../Cards/TopImageCard"
import Slider from "../Cards/Slider/Slider"

const EventPage = () => {
  const getData="Already team up and moving forward!"
  return (
    <div className="pt-14">
      <TopImageCard title={"AIDEOA  Events"}/>
        <div className=" flex px-5 flex-wrap gap-2 mt-12  content-center max-w-7xl  m-auto">
 
       {
        Array(4).fill("").map((_,idx)=>{
          return <Card key={idx}/>
        })
       }
        </div>
        <div className=" bg-blue-950 ">
  
       <Slider textColor={"white"} shadowColor={"blue-900"}/>
        </div>
        <InfoHeader/>

        <div className="flex gap-10 flex-col">
        <NewsCard />
        <NewsCard/>
        <a className="text-center text-xl  text-black" href="#">Read More...</a>
        <EmailNotiCard/>
        <Footer/>
        </div>
        
    </div>
  )
}
export default EventPage
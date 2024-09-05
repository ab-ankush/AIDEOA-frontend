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
      <TopImageCard title={"Aideoa Events"}/>
        <div className=" flex flex-col   lg:grid lg:grid-cols-2 content-center max-w-7xl  m-auto">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <div className=" bg-blue-950 pt-10 pb-10 mb-40">
  
       <Slider textColor={"white"} shadowColor={"blue-900"}/>
        </div>
        <InfoHeader/>
        <div className="flex gap-10 flex-col">
        <NewsCard />
        <NewsCard/>
        <EmailNotiCard/>
        <Footer/>
        </div>
        
    </div>
  )
}
export default EventPage
import Card from "./EventPageComponents/Card/Card"
import ImageHeader from "./EventPageComponents/ImageHeader/ImageHeader"
import InfoHeader from "./EventPageComponents/InfoHeader/InfoHeader"
import NewsCard from "./EventPageComponents/NewsCard/NewsCard"
import CompanyCardCrousel from "./EventPageComponents/CompanyCardCrousel/CompanyCardCrousel"
import Logo from "./EventPageComponents/Logo/Logo"
import CompanyHeader from "./EventPageComponents/CompanyCardCrousel/CompanyHeader/CompanyHeader"
import EmailNotiCard from "../Cards/EmailNotiCard"
import Footer from "../About_us/Footer";

const EventPage = () => {
  const getData="Already team up and moving forward!"
  return (
    <div>
        <ImageHeader />
        <div className=" flex flex-col   lg:grid lg:grid-cols-2 content-center max-w-7xl  m-auto">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <div className=" bg-blue-950 pt-10 pb-10 mb-40">
        <Logo/>
        <CompanyHeader />
        <CompanyCardCrousel className="p-10 m-10"/>
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
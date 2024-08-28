import Card from "./EventPageComponents/Card/Card"
import ImageHeader from "./EventPageComponents/ImageHeader/ImageHeader"
import styles from "./EventPage.module.css"
import InfoHeader from "./EventPageComponents/InfoHeader/InfoHeader"
import NewsCard from "./EventPageComponents/NewsCard/NewsCard"
import SubscribeUpdate from "./EventPageComponents/SubscribeUpdate/SubscribeUpdate"

const EventPage = () => {
  return (
    <div>
        <ImageHeader/>
        <div className="grid grid-cols-2 content-center max-w-7xl  m-auto">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <InfoHeader/>
        <div className="flex gap-10 flex-col">
        <NewsCard />
        <NewsCard/>
        <SubscribeUpdate/>
        </div>
        
    </div>
  )
}
export default EventPage
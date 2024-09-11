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
  

  const newsData = [
    {
      imageSrc: "Rectangle 5.png",
      headline: "18 जुलाई 2023 को CIL HQ में CIL निदेशक (चेयरमैन ) आदरणीय श्री पीएम प्रसाद सर से AIDEOA के राष्ट्रीय महासचिव श्री आर के तिवारी एवं कार्यकारिणी अध्यक्ष श्री प्रदीप सिंह के साथ मीटिंग हुआ।",
      content:
        "आज दिनांक 18 जुलाई 2023 को CIL HQ में , कोल इंडिया लिमिटेड के अध्यक्ष- सह प्रबंध निदेशक (चेयरमैन ) आदरणीय श्री पीएम प्रसाद सर से AIDEOA के राष्ट्रीय महासचिव श्री आर के तिवारी एवं कार्यकारिणी अध्यक्ष श्री प्रदीप सिंह के साथ मीटिंग हुआ। जिसमें 08 सूत्री मांग पत्र का ज्ञापन सह धरना-प्रदर्शन का पत्र शौपा गया , जिसमें मुद्दा कोल इंडिया लिमिटेड के द्वारा लाया गया नया प्रमोशन पॉलिसी से संबंधित के संबंध में बातचीत किया गया."
    },
    {
      imageSrc: "Rectangle 5.png",
      headline: "18 जुलाई 2023 को CIL HQ में CIL निदेशक (चेयरमैन ) आदरणीय श्री पीएम प्रसाद सर से AIDEOA के राष्ट्रीय महासचिव श्री आर के तिवारी एवं कार्यकारिणी अध्यक्ष श्री प्रदीप सिंह के साथ मीटिंग हुआ।",
      content:
        "आज दिनांक 18 जुलाई 2023 को CIL HQ में , कोल इंडिया लिमिटेड के अध्यक्ष- सह प्रबंध निदेशक (चेयरमैन ) आदरणीय श्री पीएम प्रसाद सर से AIDEOA के राष्ट्रीय महासचिव श्री आर के तिवारी एवं कार्यकारिणी अध्यक्ष श्री प्रदीप सिंह के साथ मीटिंग हुआ। जिसमें 08 सूत्री मांग पत्र का ज्ञापन सह धरना-प्रदर्शन का पत्र शौपा गया , जिसमें मुद्दा कोल इंडिया लिमिटेड के द्वारा लाया गया नया प्रमोशन पॉलिसी से संबंधित के संबंध में बातचीत किया गया."
    },
    
  ];  



  return (
    <div className="pt-14">
      <TopImageCard image={'/enhanceimage/Events.png'} title={"AIDEOA  Events"}/>
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
        {newsData.map((newsItem, index) => (
        <NewsCard
          key={index}
          imageSrc={newsItem.imageSrc}
          headline={newsItem.headline}
          content={newsItem.content}
        />
      ))}
        <a className="text-center text-xl  text-black" href="#">Read More...</a>
        <EmailNotiCard/>
        <Footer/>
        </div>
        
    </div>
  )
}
export default EventPage

import Section1 from "./Section1";
import Footer from "../../../Cards/Footer";
import Slider from "../../../Cards/Slider/Slider";
import ImageCarousel from "../../../carousel/ImageCarousel";
import EmailNotiCard from "../../../Cards/EmailNotiCard"
const HomePage2 = () => {
  const images=['/images/1.jpg','/images/2.jpg','/images/3.jpg','/images/4.jpg','/images/5.jpg']

  return (
    <>
      <Section1 />
   <Slider />
   <div className="flex flex-col items-center gap-4">
   <h1 className="font-semibold text-[35px] leading-15">Photo Gallery</h1>
   {/* <p className='text-normal text-gray-400'>Loremuisquam soluta quae eos?</p> */}
   <ImageCarousel images={images}/>
    </div>
   
<EmailNotiCard />
      <Footer />
    </>
  );
};

export default HomePage2;


import Jumbotoron from "./Jumbotoron";
import Mission from "./Mission";
import Offering from "./Offering";

import Footer from "./Footer.jsx";
import TopImageCard from "../Cards/TopImageCard.jsx";
import EmailNotiCard from "../Cards/EmailNotiCard.jsx";

const Contactus = () => {
  return (
    <div className="overflow-x-hidden relative pt-14">
    
      <TopImageCard title={"About us"}/>
      <Jumbotoron />
      <Mission />
      <Offering />
     <EmailNotiCard />
      <Footer />
 
    </div>
  );
};

export default Contactus;


import ContactForm from "./ContactComponent/ContactForm.jsx";
import TopImageCard from "../Cards/TopImageCard.jsx";
import EmailNotiCard from "../Cards/EmailNotiCard.jsx";
import Navbar from "./ContactComponent/Navbar.jsx";
import Footer from "./ContactComponent/Footer.jsx";
const ContactUs = () => {
  return (
    <div>
    
      <TopImageCard />
      <ContactForm />
      <EmailNotiCard />
      <Footer />
    </div>
  );
};

export default ContactUs;

import "./App.css";
import EventPage from "./components/Eventpage/EventPage";
import ContactUs from "./components/Contactus/ContactUs";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Homepage from "./components/Homepage/Homepage.jsx";
import Singup from "./components/Signup";
import JoinMembership from "./components/JoinMembershipHomepage/JoinMembership";
import DonationComponent from "./components/Donation/DonationComponent";

function App() {
  return (
    <div className="App">
      {/* <EventPage /> */}
     {/* <ContactUs /> */}
     {/* <Homepage /> */}
     {/* <JoinMembership /> */}
     <DonationComponent />
     {/* <Signup /> */}
    </div>
  );
}

export default App;

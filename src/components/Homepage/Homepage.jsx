
import MembershipComponent from "./HomepageComponents/MembershipComponent";
import About from "./HomepageComponents/About";
import Featured from "./HomepageComponents/Featured";
import LatestUpdates from "./HomepageComponents/LatestUpdates";
import Homepage2 from "./HomepageComponents/HomePage2/HomePage2.jsx";
import Navbar from './Navbar.jsx'
const Homepage = () => {
  return (
    <>
    <Navbar/>
      <MembershipComponent />
      <About />
      <Featured />
      <LatestUpdates />
      <Homepage2 />
    </>
  );
};

export default Homepage;

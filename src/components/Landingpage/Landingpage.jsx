
import DonationButton from "./components/DonationButton"
import DownloadIdButton from "./components/DownloadIdButton"
import Header from "./components/Header"
import LinkButton from "./components/LinkButton"
import LinkButtonv2 from "./components/LinkButtonv2"

const Landingpage = () => {
  return (
    <div className=" flex items-center flex-col gap-y-10 bg-landingpageBackgroundImage bg-cover min-h-screen" >
        <div className="m-auto">
        <div>
            <Header/>
        </div>
        <div className="grid grid-cols-2 gap-20">
        <LinkButton/>
        <DonationButton/>
        <LinkButtonv2/>
        <DownloadIdButton/>
        </div>
        </div>
    </div>
  )
}
export default Landingpage
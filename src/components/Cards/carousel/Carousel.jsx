import CompanyCardCrousel from "./CarouselComponents/CompanyCardCrousel/CompanyCardCrousel"
import CompanyHeader from "./CarouselComponents/CompanyCardCrousel/CompanyHeader/CompanyHeader"

import Logo from "./CarouselComponents/Logo"

const Carousel = () => {
  return (
    <div className=" bg-blue-950 pt-10 pb-10 my-20">
        <Logo />
        <CompanyHeader />
        <CompanyCardCrousel className="p-10 m-10"/>
        </div>
  )
}

export default Carousel
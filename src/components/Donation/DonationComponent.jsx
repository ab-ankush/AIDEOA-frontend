import React from 'react'
import TopImageCard from '../Cards/TopImageCard'
import DonationForm from './DonationForm'
import Footer from '../Cards/Footer'

const DonationComponent = () => {
  return (
    <div className='pt-14'>
        <TopImageCard image={'/enhanceimage/donation.png'} title={"Donation"} description={"Join Aidoea Membership "}/>
            <DonationForm />
            <Footer />
        
    </div>
  )
}

export default DonationComponent
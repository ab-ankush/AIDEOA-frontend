import React from 'react'
import TopImageCard from '../Cards/TopImageCard'
import DonationForm from './DonationForm'
import Footer from '../Cards/Footer'
import BottomFooter from '../Cards/BottomFooter'

const DonationComponent = () => {
  return (
    <div className='pt-14'>
        <TopImageCard title={"Donation"} description={"Join Aidoea Membership "}/>
            <DonationForm />
            <Footer />
        
    </div>
  )
}

export default DonationComponent
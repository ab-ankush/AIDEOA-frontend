import React from 'react'
import TopImageCard from '../Cards/TopImageCard'
import DonationForm from './DonationForm'

const DonationComponent = () => {
  return (
    <div>
        <TopImageCard title={"Donation"} description={"Join Aidoea Membership "}/>
            <DonationForm />
    </div>
  )
}

export default DonationComponent
import React from 'react'
import TopimageCard from "../Cards/TopImageCard"
import JoinNow from './JoinMembershipComponents/JoinNow'
import ApplyNow from './JoinMembershipComponents/ApplyNow'
import Footer from '../Cards/Footer'
 const JoinMembership = () => {
  return (
    <div>
        <TopimageCard title={"Join Membership "} description={"Join Aideoa Membership "}/>
        <JoinNow />
        <ApplyNow />
        <Footer />
    </div>
  )
}

export default JoinMembership
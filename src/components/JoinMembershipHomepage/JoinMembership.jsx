import React from 'react'
import TopimageCard from "../Cards/TopImageCard"
import JoinNow from './JoinMembershipComponents/JoinNow'
import ApplyNow from './JoinMembershipComponents/ApplyNow'
 const JoinMembership = () => {
  return (
    <div>
        <TopimageCard title={"Join Membership "} description={"Join Aideoa Membership "}/>
        <JoinNow />
        <ApplyNow />
    </div>
  )
}

export default JoinMembership
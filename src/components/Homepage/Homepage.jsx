import React from 'react'
import MembershipComponent from './HomepageComponents/MembershipComponent'
import About from './HomepageComponents/About'
import Featured from './HomepageComponents/Featured'
import LatestUpdates from './HomepageComponents/LatestUpdates'

const Homepage = () => {
  return (
    <div>
        <MembershipComponent />
        <About />
        <Featured />
        <LatestUpdates />
    </div>
  )
}

export default Homepage
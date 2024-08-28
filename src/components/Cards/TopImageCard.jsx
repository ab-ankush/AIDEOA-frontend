import React from 'react'

const TopImageCard = ({title="Contact us"}) => {
  return (
    <div className='relative' >
        <img src='/Rectangle128.png' className='h-80 imagefilter w-full '></img>
        <div className=" absolute bottom-0 left-0 w-full h-4/5 bottomshadowgradient "></div>
        <h1 className='absolute top-1/2  left-1/2 text-white font-semibold transform -translate-x-1/2 -translate-y-1/2 text-4xl '> {title}</h1>
    </div>
  )
}

export default TopImageCard
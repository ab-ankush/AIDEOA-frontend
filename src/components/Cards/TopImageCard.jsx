import React from 'react'

const TopImageCard = ({title="Contact us",description}) => {
  return (
    <div className='relative' >
        <img src='/Rectangle128.png' className='h-80 imagefilter w-full '></img>
        <div className=" absolute bottom-0 left-0 w-full h-4/5 bottomshadowgradient "></div>
        <div className='absolute w-full top-1/2 flex flex-col gap-3 left-1/2 text-white items-center text-center transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className=' font-extrabold text-4xl '> {title}</h1>
        <p className='text-center text-lg text-slate-200 font-normal'>{description}</p>
        </div>
       
    </div>
  )
}

export default TopImageCard
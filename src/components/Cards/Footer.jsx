import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='bg-black h-full grid grid-cols-4 px-28 py-10 max-xl:px-15 max-lg:px-10 max-md:px-5 max-sm:grid-cols-2 max-sm:gap-5'>
        <div className='pr-3 border-r-2 '>
            <h1 className='text-white font-medium text-xl mb-2'>Key words</h1>
            <div className='grid grid-cols-2 gap-2 '>
            {
                Array(12).fill("").map((_,idx)=>{
                    return <span key={idx} className='text-white  p-2 bg-gray-800 max-w-28 h-7 text-sm  text-center rounded'>lorem</span>
                })
            }
            </div>
          
        </div>
        <div className='flex justify-center px-3 border-r-2 '>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-6'>
                <h1 className='font-medium text-xl rounded text-white'>Subscribe now</h1>
                <div className='max-w-64 h-9 relative'>
                    <input  className='w-full h-full rounded border-none px-2 focus:outline-none'/>
                    <button className='bg-purple-700 absolute border-none rounded right-0 w-11 h-full top-0 flex items-center justify-center' ><CiSearch size={22} className='text-white '/></button>
                </div>
                </div>
                <div className='flex flex-col gap-6 mb-8'>
                <h1 className='font-mdeium text-xl text-white'>Lorem Ipsum is simple</h1>
                <p className='text-base text-gray-400'>Go to our official Announcements</p>
           
                </div>
               </div>
        </div>
        <div className='flex justify-center px-3 border-r-2 '>
            <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-6'>
                <h1 className='font-mdeium text-xl text-white'>Lorem Ipsum is simple</h1>
                <p className='text-base text-gray-400'>Go to DID requirements</p>
           
                </div>
                <div className='flex flex-col gap-6 mb-8'>
                <h1 className='font-mdeium text-xl text-white'>Lorem Ipsum is simple</h1>
                <p className='text-base text-gray-400'>Go to DID requirements</p>
           
                </div>
               </div>
        </div>
        <div className=' flex justify-center items-end pl-3 '>
            <div className='flex gap-4 text-white '>

    
        <FaInstagram  className="cursor-pointer"/>
           <  FaDribbble  className="cursor-pointer"/>
          <  FaTwitter  className="cursor-pointer"/>
           <  FaYoutube className="cursor-pointer"/>
         </div>
        </div>
    </div>
  )
}

export default Footer
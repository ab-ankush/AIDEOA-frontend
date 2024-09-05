import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import BottomFooter from './BottomFooter';
const orgainization=[
    {name:"About Us",link:"/about"},
    {name:"Events",link:"/events"},
    {name:"Contact Us",link:"/contact"},
    {name:"Education Cell",link:"/education"},
  
   
]
const membership=[
    {name:"Join Membership",link:"/membership"},
    {name:"Apply ID Card",link:"/idcard"},
    {name:"Donation",link:"/donation"},
  
   
]
const Footer = () => {
  return (<>
    <div className='bg-black h-full grid grid-cols-4 max-xl:grid-cols-2 py-14 px-20 max-lg:px-10 max-sm:grid-cols-1'>
        <div className='pr-3 flex border-r-2  gap-3 max-sm:border-none'>
           
            <div className='flex flex-col gap-1 '>
            <h1 className='text-white font-semibold text-xl mb-2'>Organization</h1>
            {
                orgainization.map((item,idx)=>{
                    return <span key={idx} className='text-gray-400  text-lg hover:text-purple-700'>{item.name}</span>
                })
            }
            </div>
            <div className='flex flex-col gap-1'>
            <h1 className='text-white font-semibold text-xl mb-2'>Memberhsip</h1>
            {
                membership.map((item,idx)=>{
                    return <span key={idx} className='text-gray-400  text-lg hover:text-purple-700'>{item.name}</span>
                })
            }
            </div>
          
        </div>
        <div className='flex px-3 border-r-2 max-xl:border-none max-sm:px-0 max-sm:py-3'>
            <div className='flex flex-col gap-3 justify-between'>
                <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-xl rounded text-white'>Subscribe now</h1>
                <div className='max-w-64 h-9 relative'>
                    <input  className='w-full h-full rounded border-none px-2 focus:outline-none'/>
                    <button className='bg-purple-700 absolute border-none rounded right-0 w-11 h-full top-0 flex items-center justify-center' ><CiSearch size={22} className='text-white '/></button>
                </div>
                </div>
                <div className='flex flex-col gap-2 mb-3'>
                <h1 className='font-mdeium text-xl text-white'>Lorem Ipsum is simple</h1>
                <p className='text-base text-gray-400'>Go to our official Announcements</p>
           
                </div>
               </div>
        </div>
        <div className='flex px-3 border-r-2 pt-3 max-xl:px-0 max-sm:border-none'>
            <div className='flex flex-col gap-3 justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='font-mdeium text-xl text-white'>Lorem Ipsum is simple</h1>
                <p className='text-base text-gray-400'>Go to DID requirements</p>
           
                </div>
                <div className='flex flex-col gap-1 mb-8'>
                <h1 className='font-mdeium text-xl text-white'>Office Address</h1>
                <p className='text-base text-gray-400'>Sijua more, katrasgarh, Dhanbad, jharkhand, 828113</p>
           
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
       <BottomFooter />
    </>
  )
}

export default Footer
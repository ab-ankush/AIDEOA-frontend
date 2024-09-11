import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
const JoinNow = () => {
  const [select,setSelect]=useState(true)
  return (
    <div className='flex items-center justify-center h-full mt-24 max-sm:p-2'>
        <div className='w-96 flex flex-col gap-6'>
          <p className='text-center font-normal'><span className='text-AIDEOTYPO font-medium'>Aideoa</span> platform is free to use, but if you need to apply for <span className='text-AIDEOTYPO font-medium' >ID card</span>, join our membership..</p>
            <div
            onClick={()=>{setSelect(!select)}}
            className='flex px-5 cursor-pointer items-center justify-between w-full h-20 rounded-2xl border-2 border-AIDEOTYPO'>
                    <div className='flex gap-3'>
                    <FaCircleCheck size={20} className={` mt-2 ${select ? 'text-AIDEOTYPO ':'text-gray-500'}` } />
                        <div className='flex flex-col'>
                            <p className='font-bold  text-base'>One year membership</p>
                            <p className='text-sm font-semibold -mt-1 text-slate-600' >Pay 100 for 1 year</p>
                        </div>
                    </div>

                    <p className='text-4xl font-semibold'>100₹</p>
            </div>

          
            <p className='text-AIDEOTYPO  text-lg'>Enter a custom donation amount</p>
                <input required placeholder='eg. 0' className='h-14 px-4 rounded-2xl focus:outline-none border-2 border-AIDEOTYPO' />
           
                <button className='h-16 membershipBtn rounded-2xl text-white font-semibold'>Join now</button>
        </div>
    </div>
  )
}

export default JoinNow
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
const JoinNow = () => {
  return (
    <div className='flex items-center justify-center h-full  mt-24'>
        <div className='w-96 flex flex-col gap-6'>
          <p className='text-center font-normal'><span className='text-AIDEOTYPO font-medium'>Aideoa</span> platform is free to use, but if you need to apply for <span className='text-AIDEOTYPO font-medium' >ID card</span>, join our membership..</p>
            <div className='flex px-5 items-center justify-between w-full h-20 rounded-2xl border-2 border-AIDEOTYPO'>
                    <div className='flex gap-3'>
                    <FaCircleCheck size={20} className=' text-AIDEOTYPO mt-1' />
                        <div className='flex flex-col'>
                            <p className='font-bold  text-base'>One time fee</p>
                            <p className='text-sm font-semibold -mt-1 text-slate-600' >Pay 500 for lifetime</p>
                        </div>
                    </div>

                    <h1 className='text-4xl font-semibold'>500</h1>
            </div>

            <button className='h-16 membershipBtn mt-3 rounded-2xl text-white font-semibold'>Join now</button>
        </div>
    </div>
  )
}

export default JoinNow
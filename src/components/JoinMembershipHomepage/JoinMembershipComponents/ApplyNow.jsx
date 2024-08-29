import React from 'react'

const ApplyNow = () => {
  return (
    <div className='mt-20'>
      <div className='container mx-auto'>
        <h3 className='text-AIDEOTYPO text-xl mb-8 font-semibold'>Why you should join membership?</h3>
        <div className='flex flex-col gap-8'>
        {
          new Array(3).fill("").map((item,idx)=>{
            return   <div className={` h-40 rounded-2xl bg-gray-100 flex justify-between items-center ${idx%2!==0&& 'flex-row-reverse'}`}>
            <div className='px-10 py-8 flex flex-col gap-3 justify-center'>

              <h1 className='text-xl font-bold'> Apply for AIDEOA ID</h1>
              <p className='text-slate-700 text-base '> Get the access for applying for Aideoa’s Premium ID Card only for members</p>
            </div>
            <img src='/Rectangle 176.png' alt=""/>
            </div>
          })
        }
          </div>
      </div>
    </div>
  )
}

export default ApplyNow
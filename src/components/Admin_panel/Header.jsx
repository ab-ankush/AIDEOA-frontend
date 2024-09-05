import React from 'react'

const Header = () => {
    return (
        <div className='flex overflow-x-hidden justify-between items-center p-[10px]'>
            <h1 className='text-[30px] m-5'>Dashboard</h1>
            <div className='flex justify-center items-center my-[20px] px-[10px] pr-[30px]'>
                <img src="images/logo.png" className='w-[44px] h-[44px] rounded-full' alt="" />
                <p className='text-[25px]'>Anna</p>
            </div>
        </div>
    )
}

export default Header
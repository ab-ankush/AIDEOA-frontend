import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center m-[10px]'>
            <h1 className='text-[30px] m-5'>Dashboard</h1>
            <div className='flex justify-center items-center my-[20px] mx-[10px]'>
                <img src="images/logo.png" className='w-[44px] h-[44px] rounded-full' alt="" />
                <p className='text-[25px]'>Anna</p>
            </div>
        </div>
    )
}

export default Header
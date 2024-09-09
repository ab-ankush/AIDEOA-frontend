import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
const Carousel = () => {
  return (
<div className='flex justify-center py-20'>
    <div className='max-w-4xl flex flex-col gap-4 justify-center text-center items-center' >
            <h1 className="font-semibold text-[35px] leading-15">Video Gallery</h1>
            <p className='text-normal text-gray-400'>Loremuisquam soluta quae eos?</p>
            <div className='mt-5'>


         <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        width:"800px",
      } }
      aria-label="My Favorite Images"
     
    >
      <SplideSlide>
        <img src="images/1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="images/2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="images/3.jpg" alt="Image 3"/>
      </SplideSlide>
    </Splide>
    </div>
    </div>
    </div>
  )
}

export default Carousel
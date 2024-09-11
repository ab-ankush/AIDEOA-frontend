import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
const Carousel = () => {
  return (
<div className='flex justify-center py-20 '>
    <div className='max-w-4xl flex flex-col gap-4 justify-center text-center items-center' >
            <h1 className="font-semibold text-[35px] leading-15">Video Gallery</h1>
            <p className='text-normal text-gray-400'>Loremuisquam soluta quae eos?</p>
            <div className='mt-5 rounded-3xl overflow-hidden'>


         <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        width:"800px",
      } }
      aria-label="My Favorite Images"
     
    >
      <SplideSlide>
      <video autoPlay muted preload='auto'>
  <source src="/videos/1.mp4" type="video/mp4" />
 
</video>
      </SplideSlide>
      <SplideSlide>
      <video autoPlay muted preload='auto'>
  <source src="/videos/1.mp4" type="video/mp4" />
 
</video>
      </SplideSlide>
      <SplideSlide>
      <video autoPlay preload='auto' muted>
  <source src="/videos/1.mp4" type="video/mp4" />
 
</video>
      </SplideSlide>
    </Splide>
    </div>
    </div>
    </div>
  )
}

export default Carousel
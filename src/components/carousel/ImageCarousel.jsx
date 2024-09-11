import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const images=['/images/1.jpg','/images/2.jpg','/images/3.jpg','/images/4.jpg','/images/5.jpg']

const ImageCarousel = () => {
  return (
<div className='flex justify-center  '>
    <div className='max-w-4xl flex flex-col gap-4 justify-center text-center items-center' >
            <h1 className="font-semibold text-[35px] leading-15">Photo Gallery</h1>
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
        {
            images.map((item,idx)=>{
                return  <SplideSlide key={idx}>
              
            <img src={item} className='w-full h-full rounded-3xl' alt='Images' />
           
   
                </SplideSlide>
             
            })
        }
     
    </Splide>
    </div>
    </div>
    </div>
  )
}

export default ImageCarousel
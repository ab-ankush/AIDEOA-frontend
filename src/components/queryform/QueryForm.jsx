import React from 'react'
import TopImageCard from '../Cards/TopImageCard'
import Form from './Form'
import Instructions from './Instructions'
import Footer from '../Cards/Footer'
import EmailNotiCard from '../Cards/EmailNotiCard'

const QueryForm = () => {
  return (
    <div className='pt-14'>
        <TopImageCard title='Query '  image={'/enhanceimage/Query.png'}/>
        <div className='flex container lightdropshadowbox  mx-auto max-lg:flex-col rounded-2xl overflow-hidden'>
          <div className='w-1/2 shadow-md max-lg:w-full'>
          <Instructions />
            </div>
            <div className='w-1/2 max-lg:w-full'>
            <Form />
            </div>
        
         
        </div>
        <EmailNotiCard />
  <Footer />
    </div>
  )
}

export default QueryForm
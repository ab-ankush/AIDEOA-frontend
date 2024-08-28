import React from 'react'
import ContactComponents from './ContactComponent/ContactForm.jsx'
import ContactForm from './ContactComponent/ContactForm.jsx'
import TopImageCard from '../Cards/TopImageCard.jsx'
import EmailNotiCard from '../Cards/EmailNotiCard.jsx'

const ContactUs = () => {
  return (
    <div>
            <TopImageCard />
           <ContactForm />
           <EmailNotiCard />
    </div>
  )
}

export default ContactUs
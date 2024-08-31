import React from 'react'

const Form = () => {
  return (
  
    <form className="flex flex-col gap-10 max-md:gap-6">
    <div >
      <label
        className="block text-gray-700 text-xl font-normal mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="shadow border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="eg. John Doe"
      />
    </div>
    <div >
      <label
        className="block text-gray-700 text-xl font-normal mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="shadow border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="eg. johndoe@gmail.com"
      />
    </div>

    <div >
      <label
        className="block text-gray-700 text-xl font-normal mb-2"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className="shadow border text-justify rounded-2xl w-full h-48 py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline max-md:h-28"
        id="message"
        style={{resize:"none"}}
        placeholder="eg. Hi, I have a doubt related to study materials?"
      />
    </div>

   
    <div className="flex items-center justify-center">
      <button
        className=" membershipBtn text-white text-lg font-normal w-52 min-h-10 rounded-2xl focus:outline-none focus:shadow-outline"
        type="button"
      >
        Submit message
      </button>
    </div>
  </form>
  )
}

export default Form
import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>Contact</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/d7454373-8231-4830-bc67-f52ef41041be" method="POST" className='flex flex-col w-full'>
            <input type="text" name="name" placeholder='Enter name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="text" name="email" placeholder='Enter email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea placeholder='Enter your message' name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-orange-400 to-[#F1A05D] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
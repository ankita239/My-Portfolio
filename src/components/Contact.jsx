import React from 'react'

const Contact = () => {
  return (
    <div className='contact bg-[03002D] bg-gradient-to-b from-[#04002c] via-[#030031] to-[#040043] text-slate-300  px-16 md:px-20 lg:px-30 pt-12 py-4 min-h-screen h-fit'>
      <h1 className='text-5xl mb-6  underline-offset-8 decoration-slate-600 decoration-4 underline'>Contact</h1>
      <h2 className=' text-lg md:text-xl mb-4'>If you have any suggestions for my website or if you'd like to collaborate on future projects, please feel free to contact me through this form and also connect with me on my socials.
      </h2>
      <form action="https://getform.io/f/eapdwjma" method='POST' className='flex flex-col text-black'>
        <input className='bg-slate-200 w-3/5 p-2 rounded-md' name='name' type="text" placeholder='Enter Your Name'/>
        <input className='bg-slate-200 my-5 p-2 rounded-md  w-3/5' name='mail' type="mail" placeholder='Enter Your Email'/>
        <textarea className='bg-slate-200 p-2 rounded-md w-3/5' placeholder='Enter Your Message' name="textarea" id="" rows={5} cols={5}></textarea>
        <span><button className='bg-gradient-to-r from-blue-400 to-blue-700 w-fit text-white my-6 rounded-md  px-3 py-2'>Submit</button></span>
      </form>
    </div>
  )
}

export default Contact

import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import HeroImage from "../assets/HeroImage.jpeg"
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div id='home' className='h-screen w-full flex flex-col  gap-16  md:flex-row justify-center items-center  px-16 md:px-20 lg:px-32  bg-[03002D] bg-gradient-to-b from-[#04002c] via-[#030031] to-[#040043] mt-8'>
      <div className=' flex justify-center items-center flex-col  md:w-1/2'>
        <h1 className=' text-xl md:text-4xl lg:text-5xl lg:my-3 text-gray-300 font-bold'>I'm an aspiring Full-Stack Developer</h1>
        <p className=' text-base my-3 text-gray-300 '>My name is Ankita Acharya, a final-year student at KIIT University, aspiring to be a proficient web developer with skills in both front-end and back-end technologies. Driven by ambition and a passion for coding, I am eager to master the full stack to create seamless and efficient web applications.</p>
        <button  className=' group mr-44 md:mr-32 lg:mr-96  my-2  bg-blue-600 bg-gradient-to-r from-blue-600 to-pink-500 px-3 py-2 rounded-md font-bold hover:opacity-[0.9]'>
          <Link to='portfolio' className='flex'  smooth duration={500}><p>Portfolio </p> <span className='transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-90'><HiArrowSmRight className='text-2xl gap-10 '/></span></Link>
        </button> 
      </div>
      <div className=''>
      <img src={HeroImage} alt="Hero" className='rounded-md min-w-2/3 md:w-80  '/>
      </div>
    </div>
  )
}
export default Home

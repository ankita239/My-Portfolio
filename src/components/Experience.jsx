import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import mongo from '../assets/mongodb.png'
import ex from '../assets/express.png'
import node from '../assets/nodejs.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
const Experience = () => {
  let technologies = [
    {
      id:'a',
      title: 'html',
      pic:html,
      style: 'border border-orange-500 p-3 m-4 rounded-xl shadow-orange-500 shadow-lg'
    },
    {
      id:'b',
      title: 'css',
      pic:css,
      style: 'border border-blue-700 p-3 m-4 rounded-xl shadow-blue-700 shadow-lg'
    },
    {
      id:'c',
      title: 'javascript',
      pic:js,
      style: 'border border-yellow-500 p-3 m-4 rounded-xl shadow-yellow-500 shadow-lg'
    },
    {
      id:'d',
      title: 'react',
      pic:react,
      style: 'border border-blue-500 p-3 m-4 rounded-xl shadow-blue-500 shadow-lg'
    },
    {
      id:'e',
      title: 'mongoDB',
      pic:mongo,
      style: 'border border-green-300 p-3 m-4 rounded-xl shadow-green-300 shadow-lg'
    },
    {
      id:'f',
      title: 'node.JS',
      pic:node,
      style: 'border border-green-500 p-3 m-4 rounded-xl shadow-green-500 shadow-lg'
    },
    {
      id:'g',
      title: 'express',
      pic:ex,
      style: 'border border-black p-3 m-4 rounded-xl shadow-gray-500 shadow-lg'
    },
    {
      id:'h',
      title: 'tailwind',
      pic:tailwind,
      style: 'border border-blue-200 p-3 m-4 rounded-xl shadow-blue-200 shadow-lg'
    },
    {
      id:'i',
      title: 'github',
      pic:github,
      style: 'border border-slate-500 p-3 m-4 rounded-xl shadow-slate-500 shadow-lg'
    }
  ]
  return (
    <div id='experience' className='bg-[03002D] bg-gradient-to-t from-[#040123] via-[#060050] to-[#0d0b31] min-h-screen h-fit py-20 px-20 text-slate-300'>
     <h1 className='text-5xl mb-6  underline-offset-8 decoration-slate-600 decoration-4 underline'>Experience</h1>  
     <h2 className='text-lg md:text-xl'>These are the technologies I have been working with.</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2' >
      {technologies.map(({id, title, pic,style})=>{
            return( <div className={`flex flex-col justify-center items-center    h-fit  hover:scale-105 hover:duration-300 ${style}`}>
           <img src={pic} className='scale-75' alt="" />
           <p className='text-base md:text-lg lg:text-xl font-bold capitalize'>{title}</p>
         </div>)
      })}
      </div>
    </div>
  )
}

export default Experience

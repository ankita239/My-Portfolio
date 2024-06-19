import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
const NavBar = () => {
  const links = [
    {
      id: "a",
      link: 'home',
    },
    {
      id: "b",
      link: 'about'
    },
    {
      id: "c",
      link: 'portfolio'
    },
    {
      id: "d",
      link: 'experience'
    },
    {
      id: "e",
      link: 'contact'
    }
  ]
  const[nav, setNav] = useState(false);
  return (
    <div className=' bg-[#04002c] flex justify-between  h-20 text-white items-center py-2 w-full px-7 fixed top-0 z-50'>
      <div>
        <h1 className=" text-5xl  font-signature">Ankita</h1>
      </div>
      <div>
        <ul className='hidden md:flex gap-10'>
          {links.map(({id,link}) => {
            return(<li className="text-slate-400  hover:text-white text-xl hover:cursor-pointer hover:scale-110 duration-200 capitalize" key={id}><Link to={link} smooth duration={500}>{link}</Link></li>)
          })}
        </ul>
      </div>
      <div className='z-50 md:hidden' onClick={()=>setNav(!nav)}>
       { nav?<FaTimes className=' hover:text-white  hover:scale-110 duration-200 text-3xl text-slate-400 hover:cursor-pointer'/>:<FaBars className=' hover:text-white  hover:scale-110 duration-200 text-2xl text-slate-400 hover:cursor-pointer'/>}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 text-black z-40 h-screen w-full right-0  bg-gradient-to-b from-[#03002D] to-slate-500 capitalize'>
        {links.map(({id,link})=>{
          return(<li key={id} className=' hover:text-white text-4xl hover:cursor-pointer hover:scale-110 duration-200 text-slate-400 my-4 '> <Link onClick={()=>setNav(false)} to={link} smooth duration={500}>{link}</Link> </li>)
        })}
      </ul>
      )}
    </div>
  )
}

export default NavBar

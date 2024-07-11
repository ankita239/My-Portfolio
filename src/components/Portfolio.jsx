import React from 'react'
import port1 from '../assets/port1.png'
import port2 from '../assets/port2.png'
import port3 from '../assets/port3.png'
import port4 from '../assets/port4.png'
import port5 from '../assets/port5.png'
import port6 from '../assets/port6.png'
const Portfolio = () => {
  const myports = [
    {
      id:1,
      code:"https://github.com/ankita239/TextArtisan-Text-Based-Utility",
      live:"https://ankita239.github.io/TextArtisan-Text-Based-Utility/",
      pic:port1,
      functionality: "Live"
    },
    {
      id:2,
      code:"https://github.com/ankita239/Twitter-Home-Clone",
      live:"https://ankita239.github.io/Twitter-Home-Clone/",
      pic:port2,
      functionality: "Live"
    },
    {
      id:3,
      code:"https://github.com/ankita239/Weather-App-JS",
      live:"https://ankita239.github.io/Weather-App-JS/",
      pic:port3,
      functionality: "Live"
    },
    {
      id:4,
      code:"https://github.com/ankita239/Starbucks-Website-Clone-Responsive",
      live:"https://ankita239.github.io/Starbucks-Website-Clone-Responsive/",
      pic:port4,
      functionality: "Live"
    },
    {
      id:5,
      code:"https://github.com/ankita239/DailyGlimpse-Personal-News-Website-Stay-Updated",
      pic:port5,
      disabled: true,
      style:" text-slate-700",
      functionality: "Demo"
    },
    {
      id:6,
      code:"https://github.com/ankita239/PicQuest",
      pic:port6,
      functionality: "Demo",
      live: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7217076559323549696"
    }
  ]
  return (
    <div id="portfolio" className='bg-[03002D] bg-gradient-to-b from-[#04002c] via-[#030031] to-[#040043] text-slate-300  px-16 md:px-20 lg:px-30 py-4 pt-20 min-h-screen h-fit'>
      <h1 className='text-5xl mb-3  underline-offset-8 decoration-slate-600 decoration-4 underline'>Portfolio</h1>
      <h3 className='py-4 text-lg md:text-xl'>Check out some of my works, their source codes, explore them live or watch their demonstration videos.</h3>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {myports.map(({pic,id,code,live,style,functionality})=>{
          return <div key={id} className="border rounded-xl border-slate-300  shadow-sm shadow-slate-200 hover:cursor-pointer hover:shadow-lg hover:shadow-slate-200 hover:scale-105 duration-200 ">
          <img src={pic} alt="pic" className='rounded-t-xl' />
          <div className='py-4 flex gap-5 justify-center '>
            <a target='_blank' rel='noreferrer' href={code}><button className='bg-black rounded-full px-3 py-0.5 font-bold text-lg hover:shadow-sm hover:shadow-yellow-500 '>Code</button></a>
            <a target='_blank' rel='noreferrer' href={live}><button className={`bg-black rounded-full px-3 py-0.5 font-bold text-lg hover:shadow-sm hover:shadow-yellow-500 ${style}`}>{functionality}</button></a>
          </div>
         </div>
         })}
      </div>
    </div>
  )
}

export default Portfolio

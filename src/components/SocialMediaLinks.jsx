import React from 'react'
import { FaGithubSquare, FaLinkedin, FaInstagram   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentAttach } from "react-icons/io5";
const SocialMediaLinks = () => {
  const links_social = [
    {
      id:1,
      href:"https://www.linkedin.com/in/ankita-acharya-881893305",
      child:(<>
        LinkedIn 
        <FaLinkedin size={30}/>
        </> 
      ),
      style : "rounded-tr-md"
    },
    {
      id:2,
      href:"https://github.com/ankita239",
      child:(<>
        GitHub
        <FaGithubSquare size={30}/>
        
        </> 
      ),
      style : "flex-end",
    },
    {
      id:3,
      href:"https://www.instagram.com/_.ankita.a_/",
      child:(<>
        Instagram
        <FaInstagram size={30}/>
        
        </> 
      ),
      style : "flex-end",
    },
    {
      id:4,
      href:"mailto:ankitaacharya.aa.01@gmail.com",
      child:(<>
        Gmail <SiGmail size={30} />
        </> 
      ),
      style : " flex-end",
    },
    {
      id:5,
      href:"/resume.pdf",
      child:(<>
        Resume <IoDocumentAttach size={30} />
        </> 
      ),
      style : "rounded-br-md flex-end",
      download:true
    }
  ]
  return (
    <div className='flex flex-col absolute  top-64 ' >
      <ul className='fixed' >
        {
          links_social.map(({id,href,child,style,download})=>(
            <li key={id} className={`text-xl px-2 ml-[-120px] bg-gray-500  h-10 items-center justify-center  w-40 hover:cursor-pointer hover:rounded-r-md hover:ml-[1px] duration-300 text-slate-200 py-1 ${style}`} >
              <a href={href} download={download} target='_blank' rel="noreferrer" className='flex justify-between gap-0'> {child}</a>
            </li>)
          )
        }
        
        
      </ul>
    </div>
  )
}

export default SocialMediaLinks

import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black h-full flex p-24 '>
        <div>
            <h1 className='text-2xl text-[#41A4FF] font-bold '>
                Travely
            </h1>
            <p className='text-[#BFBFBF] max-w-[500px] text-sm text-justify py-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui pulvinar, volutpat turpis vel, 
                elementum odio. Vestibulum ac fringilla enim, ac aliquet ligula. Nunc aliquam sodales blandit. Praesent eu 
                ligula id nisl suscipit iaculis vel sed urna. Donec id nulla luctus, interdum dolor quis, cursus ligula.  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui pulvinar, volutpat turpis vel, 
                elementum odio.
            </p>  



            <div className='py-8'>
            <ul className='flex gap-6 justify-start  text-[#BFBFBF]'>
            <li className=''>
              <a href="https://twitter.com/rpyasiru" target='blank' >
                <FaTwitter size={'30'}  /> 
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/rpyasiru" target='blank'>
                <FaLinkedin size={'30'}  /> 
              </a>
            </li>
            <li>
              <a href="https://github.com/yasirudeshan" target='blank' >
              <FaGithub size={'30'}  />
              </a>
            </li>
            <li>
              <a href="https://behance.com/rpyasiru" target='blank' >
              <FaBehance size={'30'}  />
              </a>
            </li>
            </ul>
           
            </div>



        </div>
    </div>
  )
}

export default Footer
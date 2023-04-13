import React from 'react'
import { FaBell } from "react-icons/fa";

const navbar = () => {
  return (
    <div className='text-black flex items-center h-24 max-w-[1240px] mx-auto px-4 justify-between'>
      <h1 className='w-full, text-2xl font-bold'>Travely</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Reservations</li>
        <li className='p-4'>Contact Us</li>
      </ul>
      <div className='flex items-center'>
      <FaBell />
      <p className='px-6'>Yasiru Deshan</p>
      <img src='yasiru.jpg' className='w-10'/>
      </div>
    </div>
  )
}

export default navbar


//npm install react-icons --save
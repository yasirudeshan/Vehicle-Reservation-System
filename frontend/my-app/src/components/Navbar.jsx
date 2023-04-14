import React from 'react'
import {  } from "react-icons/fa";


const navbar = () => {
  return (
    <div className='text-black flex  items-center h-20 w-full mx-auto px-4 justify-between bg-white shadow-md fixed'>
      <h1 className='w-full, text-2xl font-bold text-[#41A4FF]'>Travely</h1>
      <ul className='hidden  md:flex'>
        <li className='p-4'>Home</li>
        <div className='p-4 flex items-center'>
          <select>
            <option>Vehicle Reservations</option>
            <option>Hotel Reservations</option>
            <option>Events</option>
            <option>Restaurants</option>
            <option>Travel Packages</option>
          </select>
          
        </div>
        <li className='p-4'>Contact Us</li>
      </ul>
      <div className='flex items-center'>
      
      <p className='px-6 hidden md:flex'>Yasiru Deshan</p>
      <img src='yasiru.jpg' className='w-10 rounded-full' alt='profilePicture'/>
      </div>
    </div>
  )
}

export default navbar


//npm install react-icons --save
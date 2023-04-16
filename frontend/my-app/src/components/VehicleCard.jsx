import React from 'react'
import {  FaStar } from "react-icons/fa";

const VehicleCard = () => {
  return (
    <div className='flex flex-col w-[300px] items-center  border shadow-lg  m-auto mb-8 rounded-lg bg-white '>
        <img src='veh1.jpg' alt='vehicle' className='w-[300px] rounded-lg'/>
        <h1 className='py-2 text-1xl font-bold border-b'>Toyota Axio</h1>
        <div className='flex items-center'>
            <FaStar/>
            <p className='px-2'>4.5</p>
        </div>
        <div className='flex '>
            <p className=''>4 People</p>
            <p className='px-4'>Auto</p>
        </div>
        <p>Diesel</p>
        <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold py-3'>Rs.8000</h1>
        <h1 className=''>/per day</h1>
        </div>
        <button className='bg-[#41A4FF] text-white rounded-md font-bold py-3 w-full'>Reserve Now</button>
    </div>

    
  )
}

export default VehicleCard
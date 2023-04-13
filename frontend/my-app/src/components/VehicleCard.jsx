import React from 'react'
import {  FaStar } from "react-icons/fa";

const VehicleCard = () => {
  return (
    <div className='flex flex-col shadow-lg p-4 bg-white '>
        <img src='veh1.jpg' alt='vehicle' className='w-[300px] rounded-lg'/>
        <h1 className='font-bold'>Toyota Axio</h1>
        <div className='flex items-center'>
            <FaStar/>
            <p className='px-2'>4.5</p>
        </div>
        <div className='flex '>
            <p className=''>4 People</p>
            <p className='px-4'>Auto</p>
        </div>
        <p>Diesel</p>
        <h1 className='text-2xl font-bold '>Rs.8000/per day</h1>
    </div>
  )
}

export default VehicleCard
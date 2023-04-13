import React from 'react'
import { FaAngleDown, FaCar, FaSearchLocation, FaCalendar } from "react-icons/fa";

const searchbar = () => {
  return (
    <div className='mt-8 shadow-lg max-w-[1240px]  p-4 md:text-left text-center h-full flex flex-col md:flex-row items-center justify-between px-8 mx-auto rounded-lg'>
      <div className=''>
        <h3 className='text-[#646464] py-2'>Vehicle Type</h3>
        <div className='flex border rounded-lg p-2 items-center '>
            <FaCar/>
            <h3 className='px-6'>E Vehicles</h3>
            <FaAngleDown/>
        </div>
      </div>

      <div className=''>
        <h3 className='text-[#646464] py-2'>Pick-up Location</h3>
        <div className='flex border rounded-lg p-2 items-center'>
            <FaSearchLocation/>
            <h3 className='px-6'>Katunayake Airport</h3>
            <FaAngleDown/>
        </div>
      </div>

      <div className=''>
        <h3 className='text-[#646464] py-2'>Pick-up Date</h3>
        <div className='flex border rounded-lg p-2 items-center '>
            <FaCalendar/>
            <h3 className='px-6'>14/04/2023</h3>  
        </div>
      </div>

      <div className=''>
        <h3 className='text-[#646464] py-2'>Return Date</h3>
        <div className='flex border rounded-lg p-2 items-center '>
            <FaCalendar/>
            <h3 className='px-6'>18/04/2023</h3>  
        </div>
      </div>

      <div className='w-12'>
        <img src='search.png' alt='searchButton' />
      </div>

      
      

    </div>
  )
}

export default searchbar
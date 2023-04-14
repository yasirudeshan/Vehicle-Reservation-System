import React from 'react'
import { } from "react-icons/fa";

const searchbar = () => {
  return (
    <div className='bg-white mt-4 md:mt-[-52px] px-8 shadow-lg max-w-[1240px]  p-4 md:text-left text-center h-full  items-center   mx-auto rounded-lg'>
        <form className='flex flex-col md:flex-row  justify-between px-4'>
          <div className='flex flex-col'>
          <label for ='vehicleType' className='py-3'>Vehicle Type</label>
          <select className='p-3 border rounded-md w-full'>
            <option>E-Vehicles</option>
            <option>Car</option>
            <option>SUV</option>
            <option>Van</option>
            <option>Motor Bike</option>
            <option>Tuk Tuk</option>
          </select>
          </div>

          <div className='flex flex-col '>
            <label for = 'pickupLocation' className='py-3'>Pick-up Location</label>
            <input type='text' list='fruits' className='border rounded-md  p-3 md:w-[300px]' placeholder='Colombo'></input>

            <datalist id='fruits'>
              <option value='Colombo'/>
              <option value = 'Galle'/>
              <option value = 'Matara'/>
              <option value = 'Mount Lavinia'/>
              <option value = 'Kandy'/>
              <option value = 'Katunayake Airport'/>
              <option value = 'Negombo'/>

            </datalist>
          </div>

          <div className='flex flex-col'>
            <label for = 'pickupDate' className='py-3'>Pick-up Date</label>
            <input type='date' className='border rounded-md p-3'/>
          </div>

          <div className='flex flex-col'>
            <label for = 'returnDate' className='py-3'>Return Date</label>
            <input type='date' className='border rounded-md p-3'/>
          </div>

          <div className='w-20 flex items-center'>
            <button type='submit' className=''>
            <img src='search.png' alt='searchButton' className='hidden md:block' />
            <h1 className='font-bold md:hidden text-white bg-[#41A4FF] rounded-md p-3 w-auto mt-4  cent'>Button</h1>
            </button>
          </div>

        </form>

      
      

    </div>
  )
}

export default searchbar
import React from 'react'

const RentCarAd = () => {
  return (
    <div className='bg-[#DEEFFF] flex p-20 items-center flex-col md:flex-row mx-auto justify-center'>
        <div className='w-[300px] md:w-[600px]'>
            <img src='rentCarAdImg.png' alt='rentCarAdImg' />
        </div>
        <div className='pl-12'>
            <h1 className='text-3xl md:text-5xl font-bold '>Do you want to</h1>
            <h1 className='text-4xl md:text-6xl font-bold text-[#41A4FF] py-3'>Rent your Car?</h1>
            <form> 
                <button className='bg-[#41A4FF] text-white px-8 font-bold rounded-lg p-2 mt-6 shadow-lg'>Register</button>
            </form>
            
        </div>
    </div>
  )
}

export default RentCarAd
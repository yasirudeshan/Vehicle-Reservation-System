import React from 'react'

const VehicleHero = () => {
  return (
    <div className='bg-[#DEEFFF] h-full flex items-center justify-between w-full flex-col md:flex-row'>
        <div className='p-24'>
            <h1 className='text-3xl md:text-5xl font-extrabold uppercase  text-[#272727]'>
                Fast and easy way to
            </h1>
            <h1 className='text-3xl md:text-5xl font-extrabold uppercase text-[#41A4FF] py-4'>
                Rent a car
            </h1>
            <p className='text-sm md:text-1xl  max-w-[580px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui pulvinar, volutpat turpis vel, elementum odio. Vestibulum ac fringilla enim, ac aliquet ligula. Nunc aliquam sodales blandit. Praesent eu ligula id nisl suscipit iaculis vel sed urna. Donec id nulla luctus, interdum dolor quis, cursus ligula.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui pulvinar, volutpat turpis vel, elementum odio.</p>
            
            <div className='flex py-4 items-center'>
                <img src='ev.png' className='w-14 h-14' alt='evlogo'/>
                <h2 className='py-4 font-bold text-2xl px-4'>Try EV and Save Atmosphere</h2>
            </div>
        </div>

        <div>
            <img src='carmain.png' className='w-[600px] ' alt='mainCarImage'/>
        </div>
    </div>
    
  )
}

export default VehicleHero
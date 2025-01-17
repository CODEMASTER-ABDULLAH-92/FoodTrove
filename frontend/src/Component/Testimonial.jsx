import React from 'react'

import { testimonail } from '../assets/asset';
const Testimonial = () => {
  // Use useSelector to access state

  return (
    <div>
      <div>
        <h1 className="text-black tracking-tighter text-2xl font-semibold text-center my-6">Great Words From People</h1>
        <p className="text-[#7a7a7a] md:w-4/6 text-balance text-center m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur 
        </p>
        
        {/* Iterate over firstPopularItem array */}
        <div className='sm:grid-cols-3 sm:gap-2 gap-16 md:gap-7   h-auto grid grid-cols-1 px-[2vw] sm:px-[4vw] lg:px-[7vw] py-12'>
        {
          testimonail.map((item,index)=>(
            <div key={index} className='bg-[#e9e9e9] relative h-auto py-5 px-4 gap-2 flex justify-center items-center flex-col'>
              <img src={item.image} alt="" className=' -mt-16' />
              <p className='font-light text-[#7a7a7a]'>{item.level}</p>
              <h1 className='text-xl font-semibold'>{item.name}</h1>
              <p className='text-[#7a7a7a] w-4/5 text-center'>{item.phone}</p>
            </div>
          ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial;



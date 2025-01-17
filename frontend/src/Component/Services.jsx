import React from 'react'
import { services } from '../assets/asset'
const Services = () => {
  return (
    <div className=' gap-5 px-[2vw] py-[6vh] sm:px-[4vw] lg:px-[7vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        services.map((item,index)=>(
          <div key={index} className='h-auto rounded-md flex justify-center items-center flex-col px-6  py-8 bg-[#e9e9e9] '>
            <img className='my-4' src={item.image} alt="" />
            <h1 className='text-xl text-center font-semibold'>{item.heading}</h1>
            <p className='text-gray-500 text-center'>{item.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Services


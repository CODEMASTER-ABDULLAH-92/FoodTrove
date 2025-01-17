import React from 'react'
import { asset } from '../assets/asset'
// flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-14 mt-40 text-sm
const Footer = () => {
  return (
    <div className='bg-[#F7F7F8] text-[#7a7a7a]'>
      <div className=' px-[2vw] py-[6vh] sm:px-[4vw] lg:px-[7vw] flex flex-col sm:grid lg:grid-cols-[2fr_1fr_1fr_2fr] md:grid-cols-2 gap-5 mb-14 pt-32 text-sm'>
        <div className='flex flex-col justify-start items-start gap-4'>
<img src={asset.logo} className='mb-[-20px] cursor-pointer ml-[-30px]' alt="" />
<p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
<div className=' cursor-pointer flex justify-start gap-1 items-start'>
  <img src={asset.location} alt="" />
  <p>51 Green St.Huntington ohaio beach ontario, NY
  11746 KY 4783, USA.</p>
</div>


<div  className='flex cursor-pointer  justify-start gap-1 items-center'>
  <img src={asset.inbox} alt="" />
  <p>example@email.com</p>
</div>

<div className='flex cursor-pointer  justify-start gap-1 items-center'>
  <img src={asset.call} alt="" />
  <p>+91 123 4567890</p>
</div>
        </div>

        {/* 2nd  */}
        <div className='cursor-pointer flex flex-col mt-[30px] justify-start items-start gap-4'>

<h1 className='text-xl font-bold text-black'>Company</h1>
<ul className=' flex flex-col gap-4'>
  <li className='hover:text-black'>Delivery Information</li>
  <li className='hover:text-black'>About Us</li>
  <li className='hover:text-black'>Privacy Policy</li>
  <li className='hover:text-black'>Terms & Conditions</li>
  <li className='hover:text-black'>Contact Us</li>
  <li className='hover:text-black'>Support Center</li>
</ul>
        </div>



        {/* 3rd  */}
        <div className='cursor-pointer flex flex-col mt-[30px] justify-start items-start gap-4'>

<h1 className='text-xl font-bold text-black'>Category</h1>
<ul className=' flex flex-col gap-4'>
  <li className='hover:text-black'>Dairy & Bakery</li>
  <li className='hover:text-black'>Fruits & Vegetable</li>
  <li className='hover:text-black'>Snacks & Spice</li>
  <li className='hover:text-black'>Juice & Drinks</li>
  <li className='hover:text-black'>Chicken & Meat</li>
  <li className='hover:text-black'>Fast Foode</li>
</ul>
        </div>
        <div className='cursor-pointer flex flex-col mt-[30px] justify-start items-start gap-4'>
<h1 className='text-xl text-black font-bold'>Subscribe Our Newsletter</h1>

 <div className=' w-[70%] sm:w-[90%] flex justify-between bg-white items-center border-2  rounded-md h-[50px]'>
  <input type="text" className='h-full w-full bg-transparent outline-none border-none px-2 font-xl' placeholder='Search here...' />
  <img src={asset.forward} className='mr-2' alt="" />
 </div>
 <div className='flex justify-start items-center gap-4 my-4'>
  <img src={asset.face} alt="" />
  <img src={asset.twitter} alt="" />
  <img src={asset.insta} alt="" />
  <img src={asset.web} alt="" />
 </div>
 <div className='flex flex-row justify-start items-center gap-4'>
  <img src={asset.foo1} className='sm:w-[78px] sm:h-[78px] w-[55px] h-[55px] ' alt="" />
  <img src={asset.foo2} className='sm:w-[78px] sm:h-[78px] w-[55px] h-[55px] ' alt="" />
  <img src={asset.foo3} className='sm:w-[78px] sm:h-[78px] w-[55px] h-[55px] ' alt="" />
  <img src={asset.foo4} className='sm:w-[78px] sm:h-[78px] w-[55px] h-[55px] ' alt="" />
 </div>
        </div>
      </div>
      <div>
        <div className='bg-[#E9E9E9]'>
        <p className='text-black text-xl text-center py-4'>&copy; 2024 <span className='text-[#F53E32]'>FoodTrove,</span> All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

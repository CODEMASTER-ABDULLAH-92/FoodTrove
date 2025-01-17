import React from 'react'
import HomeTwoProduct from '../Component/HomeTwoProduct'
import Hero from '../Component/Hero'
import { useSelector } from 'react-redux'
import Trendling from '../Component/Trendling'
import HomeBannar from '../Component/HomeBannar'
import DealOfDay from '../Component/DealOfDay'
import { asset } from '../assets/asset'
const Homep = () => {
  const popular = useSelector((state)=> state.populars.popular)
  const slicePopular = popular.slice(0,18);
  return (
    <div className=''>
      <Hero/>
      {/* popular container */}
      <div className='flex py-4 justify-between items-center px-[2vw] sm:px-[4vw]    lg:px-[7vw]'>
        <h1 className='font-semibold md:text-[22px] text-gray-700'>POPULAR PROUCTS</h1>
        <ul className='md:text-[15px]  text-gray-800 md:flex hidden justify-center items-center gap-2'>
          <li className='hover:text-[#3BB77E]'>All</li>
          <li className='hover:text-[#3BB77E]'>Milk & Dairies</li>
          <li className='hover:text-[#3BB77E]'>Coffee & Tea</li>
          <li className='hover:text-[#3BB77E]'>Pet Foods</li>
          <li className='hover:text-[#3BB77E]'>Meat</li>
          <li className='hover:text-[#3BB77E]'>Vegatables</li>
          <li className='hover:text-[#3BB77E]'>Fruits</li>
        </ul>
      </div>

<div className='grid newGrid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  px-[2vw] sm:px-[4vw]    lg:px-[7vw] py-12'>

      {
        slicePopular.map((item,index)=>{
          return (
            <HomeTwoProduct key={index} id={item._id} image={item.image} category={item.category} name={item.name} brand={item.Brand} sale={item.sale} starImage={item.starImage} price={item.price} oldPrice={item.oldPrice} statRate={item.statRate} cartImg={item.cartImg}/>
          )
        })
      }
      </div>


      
<Trendling/>
<h1 className='text-[30px] font-bold  px-[2vw] sm:px-[4vw]  lg:px-[7vw]'>Best Deals of the Day</h1>
<div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid xl:grid-cols-4 gap-4 gap-y-10  px-[2vw] sm:px-[4vw]  lg:px-[7vw] py-12'>
<div className='flex justify-center items-center'>

            <DealOfDay  image={asset.deal1} category={"Snaks"} name={"Fresh organic villa farm lemon 500gm pack"} brand={"YT"} starImage={asset.star} price={"24"} oldPrice={"32"} statRate={"4.5"} cartImg={asset.cart}/>
</div>
<div className='flex justify-center items-center'>

            <DealOfDay  image={asset.deal1} category={"Snaks"} name={"Fresh organic villa farm lemon 500gm pack"} brand={"YT"} starImage={asset.star} price={"24"} oldPrice={"32"} statRate={"4.5"} cartImg={asset.cart}/>
</div>
<div className='flex justify-center items-center'>

            <DealOfDay  image={asset.deal1} category={"Snaks"} name={"Fresh organic villa farm lemon 500gm pack"} brand={"YT"} starImage={asset.star} price={"24"} oldPrice={"32"} statRate={"4.5"} cartImg={asset.cart}/>
</div>
<div className='flex justify-center items-center'>

            <DealOfDay  image={asset.deal1} category={"Snaks"} name={"Fresh organic villa farm lemon 500gm pack"} brand={"YT"} starImage={asset.star} price={"24"} oldPrice={"32"} statRate={"4.5"} cartImg={asset.cart}/>
</div>




      </div>
<HomeBannar/>
    </div>
  )
}

export default Homep

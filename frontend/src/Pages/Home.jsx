import React from 'react'
import Hero from '../Component/Hero'
import Herodown from '../Component/Herodown'
import Services from '../Component/Services'
import Testimonial from '../Component/Testimonial'
import MainHomeProduct from '../Component/MainHomeProduct'
import TimeBanner from '../Component/TimeBanner'
import ThreeCards from '../Component/ThreeCards'
import { asset } from '../assets/asset'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Herodown/>
      {/* <Testimonial/> */}
<MainHomeProduct/>



<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1  px-[2vw] sm:px-[4vw] lg:px-[7vw] py-12">
  <div className="flex justify-center">
    <ThreeCards 
      img={asset.bakry} 
      text1="30%" 
      text="off on all Products" 
      heading1="Fresh" 
      heading="Bakery food" 
      btn="Shop Now" 
    />
  </div>
  <div className="flex justify-center">
    <ThreeCards 
      img={asset.organic} 
      text1="35%" 
      text="off on all Products" 
      heading1="Fresh" 
      heading="Organic food" 
      btn="Shop Now" 
    />
  </div>
  <div className="flex justify-center">
    <ThreeCards 
      img={asset.freshcake} 
      text1="20%" 
      text="off on all Products" 
      heading1="Fresh" 
      heading="Snacks and Sweet" 
      btn="Shop Now" 
    />
  </div>
</div>

      <Services/>
<TimeBanner/>
    </div>
  )
}

export default Home;

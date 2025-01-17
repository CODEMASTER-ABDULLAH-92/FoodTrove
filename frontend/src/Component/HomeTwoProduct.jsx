import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../feacture/popular'
const HomeTwoProduct = ({id,image,category, sale,name,brand,starImage ,statRate,price,oldPrice,cartImg}) => {
  const curr = useSelector((state)=> state.populars.curr)
  // const populars = useSelector((state)=> state.populars.popular);



  // const cartItems = useSelector((state) => state.populars.cartItems);
const cartItems = useSelector((state)=> state.populars.cartItems);
const handleleAddtoCart = (itemId)=>{
  dispatch(addToCart(itemId));
}
  // const handleAddToCart = (itemId) => {
  //   dispatch(addToCart(itemId));
  // };

console.log(cartItems);

  const dispatch = useDispatch();
  return (
    <Link to={`/productDetail/${id}`} className='border border-black p-2 rounded-lg '>
      <div className=' min-h-[271px]  flex justify-center relative items-center bg-transparent'>
      <img src={image[0]} className='place-content-center mix-blend-color-burn  object-contain' alt="" />
        <button className={`absolute top-0 left-0 ${sale ? "px-3 py-2":""} text-white bg-[#f53e32] rounded-tl-2xl rounded-br-2xl`}>{sale}</button>
      </div>
      <div>
<h1 className='text-[14px] p-2 text-[#adadad]'>{category}</h1>
        <p className='text-[15px] h-[35px] font-medium'>{name}</p>
        <div className='flex justify-start items-center py-3'>
          {
            starImage.map((item,index)=>(
              <img src={item} key={index} alt="" />
            ))
          }
          <p className='text-[#b6b6b6] text-[14px]'>{statRate}</p>
        </div>
        <p className='text-[#3BB77E] hover:text-[#F53E32] text-[14px] mb-2'><span className='text-[#b6b6b6] mr-2 text-[14px]'>BY</span>{brand}</p>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
          <div className='text-[18px] font-semibold text-[#3bb77e]'>{curr}{oldPrice}</div>
          {/* <div className='text-[14px] text-[#b6b6b6] overline'>{curr}{price}</div> */}
          <div className='text-[14px] text-[#b6b6b6] relative'>
  <span>{curr}{price}</span>
  <div className="absolute top-1/2 left-0 right-0 border-t-2 border-[#b6b6b6] transform -translate-y-1/2"></div>
</div>

          </div>
          <button className='flex text-white px-3 rounded-md items-center py-2 gap-2 w-[84px] bg-[#f53e32] '>
          <img src={cartImg} className='bg-[#f53e32] ' alt="" />
          <p onClick={()=>handleleAddtoCart(id)}>ADD
          </p>
          {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HomeTwoProduct;
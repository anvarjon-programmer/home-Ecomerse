import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const CartButtons = () => {
  return (
    <div>
      <Link to='/cart' className='flex items-center gap-4 text-2xl text-[#102A42]'>Cart
      <span className='flex items-center relative'>
        <FaShoppingCart className='text-[30px]'/>
        <span className='absolute top-[-8px] right-[-17px] bg-[#AB7B60] rounded-[50px] w-[24px] h-[24px] flex items-center justify-center text-[15px]'>10</span>
      </span>
      </Link>
    </div>
  )
}

export default CartButtons
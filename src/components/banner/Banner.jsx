import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='h-[820px] grid grid-cols-2'>
      <div className='bg-banner bg-no-repeat bg-cover'></div>
      <div className='flex items-center  bg-[#F3F5F7]'>
        <div className='pl-[63px] max-w-[500px] text-black'>
          <p className='mb-5 text-[18px] text-blue-500 font-semibold'>SALE UP TO 35% OFF</p>
          <h1 className='text-5xl'>HUNDREDS of New lower prices!</h1>
          <p className='mt-2 mb-5'>Hurry up!!! Winter is coming!</p>
          <Link className='flex gap-1 items-center hover:opacity-70 w-[96px]' to={'/'}>
            <span className='font-medium'>Shop Now</span>
            <IoArrowForwardOutline/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
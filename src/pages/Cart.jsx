import React from 'react'
import banners from "../../public/assets/images"

export const Cart = () => {
  return (
    <main>
    
    <p className='font-medium	text-xl	text-center my-10'>Cart Items: 2
    </p>
    <div className='my-4'>
      <div className='flex just border-2 rounded		'>
      <span className='w-40 m-2'>
      <img className='' src={banners[0]} alt="" />
      </span>
      <span className='text-lg	'>ragaca weria</span>
      <span className='text-lg	'>$25</span>
      <span className='text-lg bg-red-800	rounded-md mx-4	hover:bg-red-700'>
      <button className=' text-lg text-white	p-2	'>remove</button>
      </span>
    </div>
    </div>

    <div className='my-4'>
      <div className='flex just border-2 rounded		'>
      <span className='w-40 m-2'>
      <img className='' src={banners[1]} alt="" />
      </span>
      <span className='text-lg	'>ragaca weria</span>
      <span className='text-lg	'>$25</span>
      <span className='text-lg bg-red-800	rounded-md mx-4	hover:bg-red-700'>
      <button className=' text-lg text-white	p-2	'>remove</button>
      </span>
    </div>
    </div>
   
    </main>
  )
}

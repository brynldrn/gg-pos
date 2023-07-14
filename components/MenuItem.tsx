import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function MenuItem() {
  return (
    <article className='w-60 p-4 border border-zinc-700 shadow-zinc-700 shadow-md rounded-xl relative'>
      <div className='relative w-full h-52 mb-1'>
        <Image src="https://dummyimage.com/250/"
          alt="product preview"
          fill
        />
      </div>
      <h2 className='font-bold'>Product Name</h2>
      <span>₱275.00</span>

      {/* category */}
      <div className='flex gap-1 mt-1'>
        <span className='inline-block bg-green-500 text-zinc-900 text-xs px-3 py-1 rounded-full font-semibold'>Meal</span>
      </div>
      <button className='w-full flex gap-2 justify-center items-center mt-3 py-2 border border-zinc-700 transition duration-200 ease-in-out rounded-md hover:bg-zinc-700'>
        <ShoppingBag />
        <span>Add to order</span>
      </button>
    </article>
  )
}

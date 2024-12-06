import React from 'react'
import image1 from '../assets/S-4-image-1.jpg'

const SectionFour = () => {
  return (
    <div className='px-12 w-full flex flex-col gap-4 mt-8'>
        <div className='h-[600px] w-full'>
            <img src={image1} alt="" className='rounded-[2em] object-cover h-full w-full hover:rounded-[10em] ease-in duration-200' />
        </div>
        <div className=''>
            <h2 className='font-semibold text-lg opacity-70 text-gray-400'>Nieuw Schaijk</h2>
            <h2 className='text-xl font-semibold'>De smaak van thuis</h2>
        </div>
        <div className='flex  gap-6  uppercase text-sm'>
            <h2 className='border-2 border-black px-7 rounded-lg'>Brand story</h2>
            <h2 className='border-2 border-black px-7 rounded-lg'>Merkidentiteit</h2>
        </div>
    </div>
  )
}

export default SectionFour
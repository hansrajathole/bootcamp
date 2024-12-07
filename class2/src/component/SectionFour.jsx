import React from 'react'
import image1 from '../assets/S-4-image-1.jpg'
import hover from '../assets/S-3-hover.jpg'

const SectionFour = () => {
  return (
    <div className='px-12 w-full flex flex-col gap-4 mt-8'>
        <div className='group h-[600px] w-full relative'>
            <img src={image1} alt="" className='group rounded-[2em] object-cover h-full w-full group-hover:rounded-[10em] group-hover:scale-[1.06] ease-linear duration-200' />
            <img src={hover} alt="" className='group group-hover:opacity-100 ease-linear duration-200 w-[400px] h-[400px] object-cover absolute top-[15%] left-[35%] rounded-[3em] opacity-0 ' />
        </div>
        <div className=''>
            <h2 className='font-semibold text-lg opacity-70 text-gray-400'>Nieuw Schaijk</h2>
            <h2 className='text-xl font-semibold'>De smaak van thuis</h2>
        </div>
        <div className='flex  gap-6  uppercase text-sm'>
            <h2 className='border-[1px] border-black px-3 rounded-lg'>Brand story</h2>
            <h2 className='border-[1px] border-black px-3 rounded-lg'>Merkidentiteit</h2>
        </div>
    </div>
  )
}

export default SectionFour